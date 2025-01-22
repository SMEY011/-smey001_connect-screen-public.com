import * as React from 'react';
import { Text } from 'react-native';
import { GestureHandlerRootView, Pressable } from 'react-native-gesture-handler';
import { render, screen } from '../pure';

test('GestureHandler Pressable', () => {
  const onPress = jest.fn();

  render(
    <GestureHandlerRootView>
      <Pressable onPress={onPress}>
        <Text>Hello</Text>
      </Pressable>
      ,
    </GestureHandlerRootView>,
  );

  expect(screen.toJSON()).toMatchInlineSnapshot(`
    <View
      style={
        {
          "flex": 1,
        }
      }
    >
      <RNGestureHandlerButton
        collapsable={false}
        enabled={true}
        hitSlop={
          {
            "bottom": 0,
            "left": 0,
            "right": 0,
            "top": 0,
          }
        }
        rippleColor={0}
        style={
          [
            {},
            undefined,
          ]
        }
      >
        <Text>
          Hello
        </Text>
      </RNGestureHandlerButton>
      ,
    </View>
  `);
});
