import React from 'react';
import Login from './login/login';
import Register from './register/register';
import Home from './home/home';
import { createStackNavigator, createBottomTabNavigator, NavigationActions, DrawerActions, createDrawerNavigator, createAppContainer, SafeAreaView, DrawerItems } from 'react-navigation';
import {View,Text,Image} from 'react-native';
import {hamburger} from '../assets/icons/index'


const AuthStack = createStackNavigator(
    {
      Login: {
        screen: Login,
        navigationOptions: {
          header: null
        }
      },
      Register: {
        screen: Register,
        navigationOptions: {
          header: null
        }
      }
    }
  );
  const HomeStack = createStackNavigator(
    {
        Home:{
          screen:Home,
          navigationOptions: {
            header: null
          }
        }
    }
  );
const RootStack = createStackNavigator(
    {
      Login: {
        screen: AuthStack,
        navigationOptions: {
          header: null
        }
      },
      HomeScreen: {
        screen: HomeStack
      }
    },
    {
      mode: 'modal',
    }
);
HomeStack.navigationOptions = ({ navigation }) => {
  // const { routeName } = navigation.state.routes[navigation.state.index];
  let headerTitle = <View><Text style={{color:"#FFFFFF",fontSize:20}}>Home</Text></View>;
  // const drawerAction = DrawerActions.openDrawer()
  // const backAction = NavigationActions.back()

  const headerRight = <View></View>
  const headerLeft = <View style={{padding:5}}><Image source={hamburger} resizeMode="contain" style={{width:25}}/></View>;

  return {
    headerRight: headerRight,
    headerTitle: headerTitle,
    headerLeft: headerLeft,
    headerStyle: {
      borderBottomColor: '#e2e2e2',
      backgroundColor:"#a31f0a",
      height:60
    },
    headerTitleStyle: {

    },
    headerTintColor: '#333333',

    gesturesEnabled: false
  };
}
const TabNavigator = createBottomTabNavigator({
  HomeTab: {
    screen:HomeStack,
    navigationOptions:()=>( {
    tabBarIcon: ({ tintColor }) => (
              <Image source={hamburger} style={{ width: 25, height: 25 }} resizeMode="contain"/>)
    })
  },
  LoginTab: AuthStack,
},
{
  tabBarOptions: {
    showIcon: true,
    animationEnabled: true,
    inactiveTintColor: '#000000',
    activeTintColor:'green'
  }
}
);
const AppContainer = createAppContainer(TabNavigator);
export default AppContainer;
