import { createBottomTabNavigator } from 'react-navigation';
import Tab1 from '../features/home/components/Tab1';
import Tab2 from '../features/home/components/Tab2';
import Tab3 from '../features/home/components/Tab3';
import * as routes from './routes';

export default createBottomTabNavigator(
  {
    [routes.TAB1]: Tab1,
    [routes.TAB2]: Tab2,
    [routes.TAB3]: Tab3
  },
  {
    initialRouteName: routes.TAB1
  }
);
