import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile91400Navigator from '../features/UserProfile91400/navigator';
import Maps91381Navigator from '../features/Maps91381/navigator';
import Settings91359Navigator from '../features/Settings91359/navigator';
import Settings91344Navigator from '../features/Settings91344/navigator';
import NotificationList91343Navigator from '../features/NotificationList91343/navigator';
import Maps91342Navigator from '../features/Maps91342/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile91400: { screen: UserProfile91400Navigator },
Maps91381: { screen: Maps91381Navigator },
Settings91359: { screen: Settings91359Navigator },
Settings91344: { screen: Settings91344Navigator },
NotificationList91343: { screen: NotificationList91343Navigator },
Maps91342: { screen: Maps91342Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
