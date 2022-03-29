import * as React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';

const RegSchema = Yup.object({
    lastname: Yup.string().required().label("Last Name"),
    firstname: Yup.string().required().label("First Name"),
    birthday: Yup.string().required().label("Birth Day"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password"),
    confirmpassword: Yup.string().required().label("Confirm Password").oneOf([Yup.ref('password')], 'Your password does not match.')
})

export default function LoginScreen() {

    return(
        <View style= {styles.container}>

            <View style= {styles.RegLayout}>
            <Image
                source={{ uri: 'https://i.pinimg.com/originals/f0/40/f0/f040f07ac0ad09cc155ecc4bbface15a.jpg' }}
                style={styles.BGIMAGE}
            />

            <Formik 
            initialValues = { {email: '', password: '', firstname: '', lastname: '', birthday: '', confirmpassword: '',}}
            onSubmit = {values => console.log(values)}
            validationSchema ={RegSchema}
            >
                { ({handleChange, handleSubmit, errors}) => (
                    <>
            <TextInput style={styles.Layout}
                placeholder='Last Name'
                autoComplete={false}
                onChangeText={handleChange("lastname")}
            />
            <Text style={styles.Texterror}>{errors.lastname}</Text>
            <TextInput style={styles.Layout}
                placeholder='First Name'
                autoComplete={false}
                onChangeText={handleChange("firstname")}
            />
            <Text style={styles.Texterror}>{errors.firstname}</Text>
            <TextInput style={styles.Layout}
                placeholder='Birthday'
                autoComplete={false}
                onChangeText={handleChange("birthday")}
            />
            <Text style={styles.Texterror}>{errors.birthday}</Text>
            <TextInput style={styles.Layout}
                placeholder='Email'
                autoComplete={false}
                onChangeText={handleChange("email")}
            />
            <Text style={styles.Texterror}>{errors.email}</Text>
            <TextInput secureTextEntry = {true} style={styles.Layout}
                placeholder='Password'
                autoComplete={false}
                onChangeText={handleChange("password")}
            />
            <Text style={styles.Texterror}>{errors.password}</Text>
            <TextInput secureTextEntry = {true} style={styles.Layout}
               placeholder='Confirm Password'
               autoComplete={false}
               onChangeText={handleChange("confirmpassword")}
            />
            <Text style={styles.Texterror}>{errors.confirmpassword}</Text>
            <Button 
            title='Register' 
            buttonStyle={styles.Register}
            onPress={handleSubmit}
            />
                    </>
                )}
            </Formik>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
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
        marginTop: 10
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
    Texterror:{
        textAlign: 'left',
        color: '#ff7538'

    }
})