import { processFontFamily } from 'expo-font';
import { Dimensions, Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import LoginScreen from '../components/LoginScreen';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
  return (
    <LoginScreen/>
  );
}