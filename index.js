import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings(['ViewPagerAndroid', 'Slider']);

AppRegistry.registerComponent(appName, () => App);
