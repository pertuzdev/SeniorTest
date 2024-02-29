import {AppNavigatorRoutes} from '@/navigation/AppNavigator';

export type IconsSelector = {
  [key in AppNavigatorRoutes]: React.JSX.Element;
};
