import React from 'react'
import {View} from 'react-native'
import { DrawerNavigator, StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import AboutScreen from '../Containers/AboutScreen'
import SpeakersScreen from '../Containers/SpeakersScreen'
import TalkDetailsScreen from '../Containers/TalkDetailsScreen'
import ScheduleNavigation from './ScheduleNavigation'
import OrganizersScreen from '../Containers/OrganizersScreen'
import { Colors, Fonts, Metrics } from '../Themes'

const routeConfig = {
  ScheduleScreen: {
   headerMode: 'none',
   title: 'Schedule',
   screen: ScheduleNavigation,
  },
  OrganizersScreen: {
    headerMode: 'none',
    navigationOptions: {
      title: 'Organizers',
      headerMode: 'none',
      headerStyle: {
        display: 'none',
      }
    },
    screen: OrganizersScreen,
  },
  SpeakersScreen: {    
    screen: SpeakersScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Speakers',
      headerStyle: {
        display: 'none',
      }
    })
  },
  AboutScreen: {
   screen: AboutScreen,
   navigationOptions: ({ navigation }) => ({
     title: 'About',
     headerStyle: {
       display: 'none',
     }
   })
  }
}

const drawerNavigatorConfig = {
  
  navigationOptions: ({ navigation }) => ({
    headerLeft: <View style={{marginLeft: 10}}><Icon  name="bars" size={15} onPress={ () => navigation.navigate('DrawerOpen') } /></View>,
    headerStyle: {backgroundColor: '#018DD0'}
  })
}

// Manifest of possible screens
const PrimaryNav = DrawerNavigator(routeConfig, drawerNavigatorConfig)

// To get the modals work, wrap the main navigator in StackNavigator and
// add the modals in the root navigator as well
const RootNav = StackNavigator({
  Main: {
    screen: PrimaryNav
  },
  TalkDetails: {
    navigationOptions: {
      headerStyle: {
        display: 'none',
      }
    },
    screen: TalkDetailsScreen
  },
  OrganizersScreen: {
    screen: OrganizersScreen
  }
}, {
  headerStyle: {backgroundColor: '#E73536'},
  headerTintColor: 'red'
})

export default RootNav
