import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps193273Navigator from '../features/Maps193273/navigator';
import UserProfile193269Navigator from '../features/UserProfile193269/navigator';
import BlankScreen0193246Navigator from '../features/BlankScreen0193246/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps193273: { screen: Maps193273Navigator },
UserProfile193269: { screen: UserProfile193269Navigator },
BlankScreen0193246: { screen: BlankScreen0193246Navigator },

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
