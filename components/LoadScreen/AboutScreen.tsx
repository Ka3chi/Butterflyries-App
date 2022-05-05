import * as React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import LottieView from 'lottie-react-native';


export default function About() {
    return(
        <View style={styles.container}>
            
            <View style={styles.container2}>
            <LottieView
                source={require('../../assets/images/team.json')}
                autoPlay={true}
                loop={true}
                style={styles.lottie}
                autoSize={true}
            />
            <Text style={styles.title}>Our Team</Text>
            <Text style={styles.text}>This is a Mini Project created by URS Binangonan College Students</Text>
            <Text style={styles.title}>Why we pick Diary App?</Text>
            <Text style={styles.text}>Well writing a diary allows you to focus on your writing without worrying about your audience or what anyone else will think. You can jot down ideas, record your experiences or express your feelings through photos, cutouts and quotations. Your Diary is your sacred space that doesn't judge and that you can work with any way you want.</Text>
            </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#463f3a',
        padding: 15,
        flex:1 ,
        alignItems: 'center',
        
    },
    container2:{
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 15,
        marginLeft: 20,
        marginRight: 20,
        paddingHorizontal: 20,
        flexDirection: 'column', 
        width: '90%',
        height: '75%',
        marginTop: 40,
        
    },

    title:{
        fontSize: 30,
        color: 'black',
        marginTop: 10,
        fontFamily: 'poppins-bold'
    },
    text:{
        marginTop: 10,
        fontSize: 15,
        fontFamily: 'poppins-semi-bold',
        color: 'white',
        bottom: 15,

      },
    lottie:{
        width: 200,
        height: 200,
        alignSelf: 'center'
    }
});