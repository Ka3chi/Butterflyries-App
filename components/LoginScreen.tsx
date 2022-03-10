import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';

import * as React from "react";

interface IProps {
    title?: any;
    label?: string;
    
}
export default function LoginScreen(props: IProps) {
    return(
        <PaperProvider>
        <View style={styles.container}>
        <Image
      source={{ uri: 'https://i.pinimg.com/originals/f0/40/f0/f040f07ac0ad09cc155ecc4bbface15a.jpg' }}
      style={styles.BGIMAGE}
    />

            <TextInput style={styles.Emailfield}
                placeholder='Email'
            />
            <TextInput style={styles.Passwordfield}
                placeholder='Password'
            />
            <Button title='Log In' buttonStyle={styles.loginbtn} />
            <Button title='Sign Up' buttonStyle={styles.signupbtn} />
            
        </View>
        </PaperProvider>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1 ,
        alignItems: 'center',
        justifyContent: 'center'

    },
    BGIMAGE:{
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
    },

    Emailfield: {
        height: 30,
        backgroundColor: 'lightblue',
        padding: 5,
        width: '60%',
        borderColor: 'black',
        marginVertical: 30
    },
    
    Passwordfield: {
        height: 30,
        backgroundColor: 'lightblue',
        padding: 5,
        width: '60%',
        borderColor: 'black',
        marginBottom: 30,
        
    },

    loginbtn: {
        backgroundColor: 'blue',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 20,
        marginBottom: 20,
        textAlign: 'center',
    },

    signupbtn: {
        backgroundColor: 'black',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 20,
        textAlign: 'center',
        
    },
})


