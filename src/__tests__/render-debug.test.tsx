import * as React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

import { configure, fireEvent, render, screen } from '..';
import { logger } from '../helpers/logger';

const PLACEHOLDER_FRESHNESS = 'Add custom freshness';
const PLACEHOLDER_CHEF = 'Who inspected freshness?';
const INPUT_FRESHNESS = 'Custom Freshie';
const INPUT_CHEF = 'I inspected freshie';
const DEFAULT_INPUT_CHEF = 'What did you inspect?';
const DEFAULT_INPUT_CUSTOMER = 'What banana?';

const ignoreWarnings = ['Using debug("message") is deprecated'];

beforeEach(() => {
  jest.spyOn(logger, 'info').mockImplementation(() => {});
  jest.spyOn(logger, 'warn').mockImplementation((message) => {
    if (!ignoreWarnings.some((warning) => `${message}`.includes(warning))) {
      logger.warn(message);
    }
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

interface MyButtonProps {
  onPress: () => void;
  children: string;
}

function MyButton(props: MyButtonProps) {
  return (
    <Pressable role="button" onPress={props.onPress}>
      <Text>{props.children}</Text>
    </Pressable>
  );
}

class Banana extends React.Component<any, { fresh: boolean }> {
  state = {
    fresh: false,
  };

  componentDidUpdate() {
    if (this.props.onUpdate) {
      this.props.onUpdate();
    }
  }

  componentWillUnmount() {
    if (this.props.onUnmount) {
      this.props.onUnmount();
    }
  }

  changeFresh = () => {
    this.setState((state) => ({
      fresh: !state.fresh,
    }));
  };

  render() {
    const test = 0;
    return (
      <View>
        <Text>Is the banana fresh?</Text>
        <Text testID="bananaFresh">{this.state.fresh ? 'fresh' : 'not fresh'}</Text>
        <TextInput
          testID="bananaCustomFreshness"
          placeholder={PLACEHOLDER_FRESHNESS}
          value={INPUT_FRESHNESS}
        />
        <TextInput
          testID="bananaChef"
          placeholder={PLACEHOLDER_CHEF}
          value={INPUT_CHEF}
          defaultValue={DEFAULT_INPUT_CHEF}
        />
        <TextInput defaultValue={DEFAULT_INPUT_CUSTOMER} />
        <TextInput defaultValue={'hello'} value="" />
        <MyButton onPress={this.changeFresh}>Change freshness!</MyButton>
        <Text testID="duplicateText">First Text</Text>
        <Text testID="duplicateText">Second Text</Text>
        <Text>{test}</Text>
      </View>
    );
  }
}

test('debug', () => {
  render(<Banana />);

  screen.debug();
  screen.debug({ message: 'another custom message' });
  screen.debug({ mapProps: null });

  const mockCalls = jest.mocked(logger.info).mock.calls;
  expect(mockCalls[0][0]).toMatchSnapshot();
  expect(`${mockCalls[1][0]}\n${mockCalls[1][1]}`).toMatchSnapshot('Option message');
  expect(`${mockCalls[2][0]}\n${mockCalls[2][1]}`).toMatchSnapshot('All Props');
});

test('debug changing component', () => {
  render(<Banana />);
  fireEvent.press(screen.getByRole('button', { name: 'Change freshness!' }));

  screen.debug({ mapProps: null });

  const mockCalls = jest.mocked(logger.info).mock.calls;
  expect(mockCalls[0][0]).toMatchSnapshot('bananaFresh button message should now be "fresh"');
});

test('debug with only children prop', () => {
  render(<Banana />);
  screen.debug({ mapProps: () => ({}) });

  const mockCalls = jest.mocked(logger.info).mock.calls;
  expect(mockCalls[0][0]).toMatchSnapshot();
});

test('debug with only prop whose value is bananaChef', () => {
  render(<Banana />);
  screen.debug({
    mapProps: (props) => {
      const filterProps: Record<string, unknown> = {};
      Object.keys(props).forEach((key) => {
        if (props[key] === 'bananaChef') {
          filterProps[key] = props[key];
        }
      });
      return filterProps;
    },
  });

  const mockCalls = jest.mocked(logger.info).mock.calls;
  expect(mockCalls[0][0]).toMatchSnapshot();
});

test('debug should use debugOptions from config when no option is specified', () => {
  configure({ defaultDebugOptions: { mapProps: () => ({}) } });

  render(
    <View style={{ backgroundColor: 'red' }}>
      <Text>hello</Text>
    </View>,
  );
  screen.debug();

  const mockCalls = jest.mocked(logger.info).mock.calls;
  expect(mockCalls[0][0]).toMatchSnapshot();
});

test('filtering out props through mapProps option should not modify component', () => {
  render(<View testID="viewTestID" />);
  screen.debug({ mapProps: () => ({}) });

  expect(screen.getByTestId('viewTestID')).toBeTruthy();
});

test('debug should use given options over config debugOptions', () => {
  configure({ defaultDebugOptions: { mapProps: () => ({}) } });

  render(
    <View style={{ backgroundColor: 'red' }}>
      <Text>hello</Text>
    </View>,
  );
  screen.debug({ mapProps: (props) => props });

  const mockCalls = jest.mocked(logger.info).mock.calls;
  expect(mockCalls[0][0]).toMatchSnapshot();
});
