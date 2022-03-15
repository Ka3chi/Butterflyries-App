import {View, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';

import * as React from "react";
import { blueGrey900, transparent } from 'react-native-paper/lib/typescript/styles/colors';





interface IProps {
    title?: any;
    label?: string;

    
}
export default function LoginScreen(props: IProps) {

const [Lastname, setLN] = React.useState("");
const [Firstname, setFN] = React.useState("");
const [Birthday, setBday] = React.useState("");
const [Email, setEmail] = React.useState("");
const [Password, setPass] = React.useState("");
const [ConfirmPassword, setConfirmPass] = React.useState("");

    return(
        <View style= {styles.container}>

            <View style= {styles.RegLayout}>
            <Image
                source={{ uri: 'https://i.pinimg.com/originals/f0/40/f0/f040f07ac0ad09cc155ecc4bbface15a.jpg' }}
                style={styles.BGIMAGE}
            />
            <TextInput style={styles.Layout}
                placeholder='Last Name'
                value={Lastname}
                onChangeText={Lastname => setLN(Lastname)}
            />
            <TextInput style={styles.Layout}
                placeholder='First Name'
                value={Firstname}
                onChangeText={Firstname => setFN(Firstname)}
            />
            <TextInput style={styles.Layout}
                placeholder='Birthday'
                value={Birthday}
                onChangeText={Birthday => setBday(Birthday)}
            />
            <TextInput style={styles.Layout}
                placeholder='Birthday'
                value={Email}
                onChangeText={Email => setEmail(Email)}
                placeholder='Email Address'
            />
            <TextInput secureTextEntry = {true} style={styles.Layout}
                placeholder='Password'
                value={Password}
                onChangeText={Password => setPass(Password)}
            />
            <TextInput secureTextEntry = {true} style={styles.Layout}
                placeholder='Confirm Password'
                value={ConfirmPassword}
                onChangeText={ConfirmPassword => setConfirmPass(ConfirmPassword)}
            />
            <Button title='Register'  buttonStyle={styles.Register} />
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        overflow: 'scroll'
    },
    RegLayout:{
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Layout: {
        height: 30,
        backgroundColor: '#FFFFFF',
        padding: 10,
        width: '70%',
        borderColor: 'black',
        marginBottom: 20
    },
    Register: {
        backgroundColor: 'blue',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 20,
        textAlign: 'center',
        marginTop: 20
        
    },
    BGIMAGE:{
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
    },
})