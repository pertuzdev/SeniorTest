import {AppNavigatorRoutes} from './AppNavigator';

export type BottomTabNavigatorParamList = {
  [AppNavigatorRoutes.Home]: undefined;
  [AppNavigatorRoutes.Settings]: undefined;
};

export type IconsSelector = {
  [key in AppNavigatorRoutes]: React.JSX.Element;
};
