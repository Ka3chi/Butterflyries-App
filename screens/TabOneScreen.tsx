import { processFontFamily } from 'expo-font';
import { Dimensions, Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
       
 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
    <Image
      source={{ uri: 'https://i.pinimg.com/originals/f0/40/f0/f040f07ac0ad09cc155ecc4bbface15a.jpg' }}
      style={{
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />

<Text style={{
         color: 'white',
       paddingVertical: 10,
       fontSize: 40,
       fontWeight: 'bold',
       alignSelf: 'center',
     }}>
      Log In
      </Text>
     <Text style={{
       color: 'white',
       paddingVertical: 5,
       fontSize: 20,
       fontWeight: 'bold',
       alignSelf: 'flex-start',
       paddingHorizontal: 40,
     }}>
       Username
      </Text>
   <View style={{
     height: '9%',
     width: '80%',
     borderRadius: 80,
     backgroundColor: 'white',
   }}>
     <Text style={{
       color: 'grey',
       paddingVertical: 20,
       fontSize: 12,
       fontWeight: 'bold',
       alignSelf: 'flex-start',
       paddingHorizontal: 15,
     }}>
       Enter Username
      </Text>
   </View>
    <Text style={{
       color: 'white',
       paddingVertical: 5,
       fontSize: 20,
       fontWeight: 'bold',
       alignSelf: 'flex-start',
       paddingHorizontal: 40,
       marginTop:20
     }}>
       Password
      </Text>
   <View style={{
     height: '9%',
     width: '80%',
     borderRadius: 80,
     backgroundColor: 'white',
   }}>
     <Text style={{
       color: 'grey',
       paddingVertical: 20,
       fontSize: 12,
       fontWeight: 'bold',
       alignSelf: 'flex-start',
       paddingHorizontal: 15,
     }}>
       Enter Password
      </Text>
   </View>
    <Text style={{
       color: 'white',
       paddingVertical: 20,
       fontSize: 15,
       fontWeight: 'bold',
       alignSelf: 'center',
     }}>
       Forget Password
      </Text>
      <View style={{
     height: '10%',
     width: '40%',
     borderRadius: 20,
     backgroundColor: '#2E86C1',
     borderColor: 'black'
   }}>
     <Text style={{
       marginTop: 5,
       fontSize: 19,
       fontWeight: 'bold',
       alignSelf: 'center',
       color: 'white',
       paddingTop: 10
     }}>
       Log in
      </Text>
   </View>
   <Text style={{
        marginTop: 5,
        marginBottom: 5,
       fontSize: 11,
       fontWeight: 'bold',
       alignSelf: 'center',
       color: 'white'
     }}>
       OR
      </Text>
      <View style={{
     height: '10%',
     width: '40%',
     borderRadius: 20,
     backgroundColor: '#03045e',
     borderColor: 'black',
     marginBottom: 30
   }}>
     <Text style={{
       marginTop: 5,
       fontSize: 19,
       fontWeight: 'bold',
       alignSelf: 'center',
       color: 'white',
       paddingTop: 10
       
     }}>
       Sign Up
      </Text>
   </View>
     
    </View>
  );
}
