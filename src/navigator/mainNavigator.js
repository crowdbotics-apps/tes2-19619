import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings91359Navigator from '../features/Settings91359/navigator';
import Settings91344Navigator from '../features/Settings91344/navigator';
import NotificationList91343Navigator from '../features/NotificationList91343/navigator';
import Maps91342Navigator from '../features/Maps91342/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
