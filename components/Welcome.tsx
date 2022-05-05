import { StyleSheet } from 'react-native';
import * as React from 'react-native';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function Welcome({navigation}) {
  return (
    <View style= {styles.container}>
        <View>
          <Text style={styles.titlestyle} > Welcome to Butterflyries App </Text>
        </View>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}/>
        
        <TouchableOpacity 
        style={styles.fontcontainer}
         onPress ={() =>{navigation.navigate('Create')}} >
          <Text style={styles.fontstyle}> Lets Get Started </Text>
          <AntDesign 
            style={styles.icon}
            name="right" 
            size={22} 
            color='black'/>
        </TouchableOpacity>
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#18161B'
   
  },
  titlestyle: {
    fontSize: 30,
    color: 'gray',
    marginTop: 100,
    fontFamily: 'poppins-bold'
  },
  fontstyle:{
    fontSize: 20,
    fontFamily: 'poppins-semi-bold'
    
  },
  icon:{
    marginTop: 4
  },
  fontcontainer: {
    backgroundColor: 'yellow',
    padding: 30,
    width:'50%',
    borderRadius: 50, 
    flexDirection: 'row', 
    justifyContent:'space-between',
    marginBottom: 50,
    
  },
  logo:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    resizeMode: 'contain',
    height: '60%',
    width: '100%',
    borderRadius: 20
},

});
