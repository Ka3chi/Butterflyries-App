/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import HomeScreen from '../components/LoadScreen/AboutScreen';

import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Welcome from '../components/Welcome';
import CreateScreen from '../components/LoadScreen/CreateScreen';
import PostandCreate from '../components/LoadScreen/PostandCreate';
import About from '../components/LoadScreen/AboutScreen';



export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />

    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="Create" component={BottomTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
    
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabs() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#e91e63',
        tabBarStyle: { 
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        padding: 10,
        backgroundColor: 'black',
        borderRadius: 15,
        height: '10%',
      },
      tabBarLabelStyle:{
        fontSize:20,
        fontWeight: 'bold',
        marginBottom: 10
      },
    }}
    >
      <BottomTab.Screen
        name='Homes'
        component={PostandCreate}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" color={color} size={30} />
          ),
        }}
               
      />
      <BottomTab.Screen
         name='Info'
         component={About}
         options={{
          tabBarLabel: 'Info',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="info-circle" color={color} size={30} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

