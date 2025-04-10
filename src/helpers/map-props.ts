import type { ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';

import { removeUndefinedKeys } from './object';

export type MapPropsFunction = (props: Record<string, unknown>) => Record<string, unknown>;

const propsToDisplay = [
  'accessible',
  'accessibilityElementsHidden',
  'accessibilityHint',
  'accessibilityLabel',
  'accessibilityLabelledBy',
  'accessibilityRole',
  'accessibilityViewIsModal',
  'alt',
  'aria-busy',
  'aria-checked',
  'aria-disabled',
  'aria-expanded',
  'aria-hidden',
  'aria-label',
  'aria-labelledby',
  'aria-modal',
  'aria-selected',
  'aria-valuemax',
  'aria-valuemin',
  'aria-valuenow',
  'aria-valuetext',
  'defaultValue',
  'editable',
  'importantForAccessibility',
  'nativeID',
  'placeholder',
  'pointerEvents',
  'role',
  'testID',
  'title',
  'value',
] as const;

/**
 * Preserve props that are helpful in diagnosing test failures, while stripping rest
 */
export function defaultMapProps(props: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  const styles = StyleSheet.flatten(props.style as ViewStyle);
  const styleToDisplay = extractStyle(styles);
  if (styleToDisplay !== undefined) {
    result.style = styleToDisplay;
  }

  const accessibilityState = removeUndefinedKeys(props.accessibilityState);
  if (accessibilityState !== undefined) {
    result.accessibilityState = accessibilityState;
  }

  const accessibilityValue = removeUndefinedKeys(props.accessibilityValue);
  if (accessibilityValue !== undefined) {
    result.accessibilityValue = accessibilityValue;
  }

  propsToDisplay.forEach((propName) => {
    if (propName in props) {
      result[propName] = props[propName];
    }
  });

  return result;
}

function extractStyle(style: ViewStyle | undefined) {
  if (style == null) {
    return undefined;
  }

  const result: Record<string, unknown> = {};
  if (style.display === 'none') {
    result.display = 'none';
  }

  if (style.opacity === 0) {
    result.opacity = 0;
  }

  const hasAnyKeys = Object.keys(result).length > 0;
  return hasAnyKeys ? result : undefined;
}
