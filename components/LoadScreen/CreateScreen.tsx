import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text,} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Form( {handleSubmit, diaryContent, setDiaryContent, diaryTitle, setDiaryTitle,}: {handleSubmit:any, diaryContent:any, setDiaryContent:any, diaryTitle:any, setDiaryTitle:any,}) {

    return(
        <View style={styles.container}>
            <View style={styles.textstyle}>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Input a title"
                    placeholderTextColor='#CACACA'
                    onChangeText={(value) => setDiaryTitle(value)}
                    value={diaryTitle}
                    autoCorrect={false}
                    autoCapitalize={"none"}
                    autoFocus={true}
                   
                />
            </View>
            <View style={styles.contentstyle}>
                <TextInput
                    style={styles.context}
                    placeholder="Write Here..."
                    placeholderTextColor='#CACACA'
                    multiline={true}
                    onChangeText={(value) => setDiaryContent(value)}
                    value={diaryContent}
                    autoCorrect={false}
                    autoCapitalize={"none"}
                    autoFocus={true}
                    
                    />
                </View>
                <TouchableOpacity
                    style={styles.fontcontainer}
                    onPress = {handleSubmit}
                    >
                    <AntDesign
                        name="save"
                        size={35}
                        color='black' />
                    <Text style={styles.btntext}
                    > Save </Text>
                </TouchableOpacity>  
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1 ,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#463f3a'        

    },
    inputBox: {
        marginHorizontal: 10,
        flex: 1,
        color: '#f4f3ee',
        fontSize: 24,
        
    },
    textstyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        height: '10%',
        backgroundColor: '#8a817c',
        marginTop: 20,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    textdate: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        height: '10%',
        backgroundColor: '#8a817c',
        marginTop: 20,
        borderRadius: 20,
        paddingHorizontal: 10,
        
    },
    contentstyle: {
        width: '90%',
        height: '50%',
        backgroundColor: '#8a817c',
        marginTop: 20,
        borderRadius: 20,
        paddingHorizontal: 20,
        marginBottom: 40,
        padding: 15,

    },
    btn: {
        backgroundColor: 'blue',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 20,
        marginBottom: 20,
        marginTop: 30,
        textAlign: 'center',

    },
    btntext:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    fontcontainer: {
        backgroundColor: '#e0afa0',
        padding:15,
        width:'40%',
        borderRadius: 50, 
        marginBottom: 100,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: '12%',
    },
    context:{
        textAlign: 'left',
        color: '#f4f3ee',
        fontSize: 20,
    },
});

