import type {
  PressableProps,
  ScrollViewProps,
  TextInputProps,
  TextProps,
  ViewProps,
} from 'react-native';
import type { ReactTestInstance } from 'react-test-renderer';
import act from './act';
import { isElementMounted, isHostElement } from './helpers/component-tree';
import { formatElement } from './helpers/format-element';
import { isHostScrollView, isHostTextInput } from './helpers/host-component-names';
import { debugLogger } from './helpers/logger';
import { isPointerEventEnabled } from './helpers/pointer-events';
import { isEditableTextInput } from './helpers/text-input';
import { nativeState } from './native-state';
import type { Point, StringWithAutocomplete } from './types';

type EventHandler = (...args: unknown[]) => unknown;

export function isTouchResponder(element: ReactTestInstance) {
  if (!isHostElement(element)) {
    return false;
  }

  return Boolean(element.props.onStartShouldSetResponder) || isHostTextInput(element);
}

/**
 * List of events affected by `pointerEvents` prop.
 *
 * Note: `fireEvent` is accepting both `press` and `onPress` for event names,
 * so we need cover both forms.
 */
const eventsAffectedByPointerEventsProp = new Set(['press', 'onPress']);

/**
 * List of `TextInput` events not affected by `editable` prop.
 *
 * Note: `fireEvent` is accepting both `press` and `onPress` for event names,
 * so we need cover both forms.
 */
const textInputEventsIgnoringEditableProp = new Set([
  'contentSizeChange',
  'onContentSizeChange',
  'layout',
  'onLayout',
  'scroll',
  'onScroll',
]);

type EventHandlerState = {
  enabled: boolean;
  reason?: string;
};

function getEventHandlerState(
  element: ReactTestInstance,
  eventName: string,
  nearestTouchResponder?: ReactTestInstance,
): EventHandlerState {
  if (nearestTouchResponder != null && isHostTextInput(nearestTouchResponder)) {
    if (isEditableTextInput(nearestTouchResponder)) {
      return { enabled: true };
    }

    if (textInputEventsIgnoringEditableProp.has(eventName)) {
      return { enabled: true };
    }

    return { enabled: false, reason: '"editable" prop' };
  }

  if (eventsAffectedByPointerEventsProp.has(eventName) && !isPointerEventEnabled(element)) {
    return { enabled: false, reason: '"pointerEvents" prop' };
  }

  const touchStart = nearestTouchResponder?.props.onStartShouldSetResponder?.();
  const touchMove = nearestTouchResponder?.props.onMoveShouldSetResponder?.();
  if (touchStart || touchMove) {
    return { enabled: true };
  }

  if (touchStart === undefined && touchMove === undefined) {
    return { enabled: true };
  }

  return { enabled: false, reason: 'not being a touch responder' };
}

function findEventHandler(
  element: ReactTestInstance,
  eventName: string,
  nearestTouchResponder?: ReactTestInstance,
): EventHandler | null {
  const touchResponder = isTouchResponder(element) ? element : nearestTouchResponder;

  const handler = getEventHandler(element, eventName);
  if (handler) {
    const handlerState = getEventHandlerState(element, eventName, touchResponder);

    if (handlerState.enabled) {
      return handler;
    } else {
      debugLogger.warn(
        `FireEvent: "${eventName}" event handler is disabled on ${formatElement(element, {
          compact: true,
        })} due to ${handlerState.reason}.`,
      );
    }
  }

  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  if (element.parent === null || element.parent.parent === null) {
    return null;
  }

  return findEventHandler(element.parent, eventName, touchResponder);
}

function getEventHandler(element: ReactTestInstance, eventName: string) {
  const eventHandlerName = getEventHandlerName(eventName);
  if (typeof element.props[eventHandlerName] === 'function') {
    return element.props[eventHandlerName];
  }

  if (typeof element.props[eventName] === 'function') {
    return element.props[eventName];
  }

  return undefined;
}

function getEventHandlerName(eventName: string) {
  return `on${eventName.charAt(0).toUpperCase()}${eventName.slice(1)}`;
}

// String union type of keys of T that start with on, stripped of 'on'
type EventNameExtractor<T> = keyof {
  [K in keyof T as K extends `on${infer Rest}` ? Uncapitalize<Rest> : never]: T[K];
};

type EventName = StringWithAutocomplete<
  | EventNameExtractor<ViewProps>
  | EventNameExtractor<TextProps>
  | EventNameExtractor<TextInputProps>
  | EventNameExtractor<PressableProps>
  | EventNameExtractor<ScrollViewProps>
>;

function fireEvent(element: ReactTestInstance, eventName: EventName, ...data: unknown[]) {
  if (!isElementMounted(element)) {
    return;
  }

  setNativeStateIfNeeded(element, eventName, data[0]);

  const handler = findEventHandler(element, eventName);
  if (!handler) {
    debugLogger.warn(
      `FireEvent: no enabled event handler for "${eventName}" found on ${formatElement(element, {
        compact: true,
      })} or its ancestors.`,
    );

    return;
  }

  let returnValue;
  void act(() => {
    returnValue = handler(...data);
  });

  return returnValue;
}

fireEvent.press = (element: ReactTestInstance, ...data: unknown[]) =>
  fireEvent(element, 'press', ...data);

fireEvent.changeText = (element: ReactTestInstance, ...data: unknown[]) =>
  fireEvent(element, 'changeText', ...data);

fireEvent.scroll = (element: ReactTestInstance, ...data: unknown[]) =>
  fireEvent(element, 'scroll', ...data);

export default fireEvent;

const scrollEventNames = new Set([
  'scroll',
  'scrollBeginDrag',
  'scrollEndDrag',
  'momentumScrollBegin',
  'momentumScrollEnd',
]);

function setNativeStateIfNeeded(element: ReactTestInstance, eventName: string, value: unknown) {
  if (eventName === 'changeText' && typeof value === 'string' && isEditableTextInput(element)) {
    nativeState.valueForElement.set(element, value);
  }

  if (scrollEventNames.has(eventName) && isHostScrollView(element)) {
    const contentOffset = tryGetContentOffset(value);
    if (contentOffset) {
      nativeState.contentOffsetForElement.set(element, contentOffset);
    }
  }
}

function tryGetContentOffset(event: unknown): Point | null {
  try {
    // @ts-expect-error: try to extract contentOffset from the event value
    const contentOffset = event?.nativeEvent?.contentOffset;
    const x = contentOffset?.x;
    const y = contentOffset?.y;
    if (typeof x === 'number' || typeof y === 'number') {
      return {
        x: Number.isFinite(x) ? x : 0,
        y: Number.isFinite(y) ? y : 0,
      };
    }
  } catch {
    // Do nothing
  }

  return null;
}
