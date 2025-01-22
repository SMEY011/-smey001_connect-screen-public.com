//docs.swmansion.com/react-native-gesture-handler/docs/guides/testing
import 'react-native-gesture-handler/jestSetup';
import { resetToDefaults, configure } from './src/pure';
import './src/matchers/extend-expect';

beforeEach(() => {
  resetToDefaults();
  if (process.env.CONCURRENT_MODE === '0') {
    configure({ concurrentRoot: false });
  }
});
