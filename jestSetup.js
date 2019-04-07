import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Setup window global variable
// window isn't defined as of react-native 0.45+ it seems
if (typeof window !== 'object') {
  global.window = global;
  global.window.navigator = {};
}

configure({ adapter: new Adapter() });
