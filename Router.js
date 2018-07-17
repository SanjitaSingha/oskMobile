import { createStackNavigator, DrawerNavigator, NavigationActions } from 'react-navigation';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ForgotPassword from './src/screens/ForgotPassword';
import HomePage from './src/screens/HomePage';
import Food from './src/screens/Food';
import FoodList from './src/screens/FoodList';
import Cart from './src/screens/Cart';
import Checkout from './src/screens/Checkout';
import MyProfile from './src/screens/MyProfile';
import LocationList from './src/screens/LocationList';

export const MainRoutes =
  createStackNavigator({
    login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    locationList: {
      screen: LocationList,
      navigationOptions: {
        header: null,
      },
    },
    register: {
      screen: Register,
      navigationOptions: {
        header: null,
      },
    },
    forgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        header: null,
      },
    },
    home: {
      screen: HomePage,
      navigationOptions: {
        title: 'Home',
        headerLeft: null
      }
    },
    food: {
      screen: Food,
      navigationOptions: {
        title: 'Food'
      }
    },
    foodList: {
      screen: FoodList
    },
    cart: {
      screen: Cart,
      navigationOptions: {
        title: 'Cart'
      }
    },
    checkout: {
      screen: Checkout,
      navigationOptions: {
        title: 'Checkout'
      }
    },
    myProfile: {
      screen: MyProfile,
      navigationOptions: {
        title: 'My Profile'
      }
    },

  }, {
    headerStyle: {
      backgroundColor: '#FDA400',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

);
