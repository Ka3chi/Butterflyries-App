import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Button, Modal, FlatList } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import Form from './CreateScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Diarylist from './Diarylist';
import AppLoading from 'expo-app-loading';

export default function CreateScreen() {
    const [ready, setReady]:boolean | any = useState()
    const initialdiaries: any[] | (() => any[]) = []

    //items
    const [ diaryTitle, setDiaryTitle ]: any = useState()
    const [ diaryContent, setDiaryContent ]: any = useState()
    const [diaryedited, setdiarytoedited]:any = useState(null)
    const [diaries, setDiaries]:any = useState(initialdiaries)

    //modal
    const [modalOpen, setModalOpen] = useState(false);
    //async
    const getDiaries = async ():Promise<any> => {
        try {
          const diary = await AsyncStorage.getItem('diaryentry')
          return diary != null ? setDiaries(JSON.parse(diary)) : null;
        } catch(e) {
            console.log(e)
        }
      }
      if(!ready) {
        return (
          <AppLoading 
             startAsync={getDiaries}
             onFinish={() => setReady(true)}
             onError={console.warn}
           />
        )
      }
      
    //add
    const addDiaries = (diary: any) => {
        const newDiaries = [...diaries, diary]
        //async
        AsyncStorage.setItem("diaryentry", JSON.stringify(newDiaries)).then(() => {
            setDiaries(newDiaries);
            setModalOpen(false)
        }).catch(error => console.log(error));
    }

    //submit
    const handleSubmit = () => {
        if (!diaryedited){
            addDiaries({
                title: diaryTitle,
                date: new Date(). toUTCString(),
                content: diaryContent,
                key: `${(diaries[diaries.length-1] && parseInt(diaries[diaries.length -1].key) + 1) || 1}`
            })
            closeModal();
        } else {
            DiaryEdit({
                title: diaryTitle,
                content: diaryContent,
                date: diaryedited.date,
                key: diaryedited.key,
            });
        }
    } 

    //closingmodal
    const closeModal = () => {
        setDiaryTitle('')
        setDiaryContent('')
        setModalOpen(false)
    }

    //trigger
    const handleEditTrigger = (item: any) =>{
        setdiarytoedited(item);
        setModalOpen(true);
        setDiaryTitle(item.title);
        setDiaryContent(item.content);
    }
    //edit
    const DiaryEdit = (editeddiary: { title?: any; key?: any; content?: any; date?: any; }) => {
        const newDiaries:any = [...diaries];
        const uniqdiary = diaries.findIndex((diary:any) => diary.key === editeddiary.key);
        newDiaries.splice(uniqdiary, 1, editeddiary);
        // async
        AsyncStorage.setItem("diaryentry", JSON.stringify(newDiaries)).then(() => {
            setDiaries(newDiaries);
            setdiarytoedited(null);
            setModalOpen(false)
        }).catch(error => console.log(error));
    }

    // Handle delete
    const Delete = (index:number) => {
        const newDiaries:any = [...diaries];
        const uniqdiary = index
        newDiaries.splice(uniqdiary, 1);

        AsyncStorage.setItem("diaryentry", JSON.stringify(newDiaries)).then(() => {
            setDiaries(newDiaries);
        }).catch(error => console.log(error));
    }

    return (
        <View style={styles.container} >
            <View style={styles.headercontainer}>
                <Text style={styles.headertitle}>Diaries</Text>
            </View>
            <Diarylist diaries={diaries} setDiaries={setDiaries} handleEditTrigger={handleEditTrigger} Delete={Delete} />
            
            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.headermodalcontainer}>
                    <AntDesign 
                        name="close" 
                        color={'white'} 
                        size={40}
                        style={styles.modalToggle2}
                        onPress={() => closeModal()} 
                        />
                    </View>
                <View style={styles.modalcontainer}>
                    <Form handleSubmit={handleSubmit} diaryContent={diaryContent} setDiaryContent={setDiaryContent} diaryTitle={diaryTitle} setDiaryTitle={setDiaryTitle}/>
                </View>
            </Modal>
                <FontAwesome5 
                name="plus" 
                color={'white'} 
                size={30}
                style={styles.modalToggle1}
                onPress={() => setModalOpen(true)} 
                />
        </View>
    

 );
}
const styles = StyleSheet.create({
    container:{
        flex:1 ,
        backgroundColor: '#463f3a',

    },
    headertitle:{
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20,
        color: '#f4f3ee'
        
    },
    headercontainer:{
        height: '10%',
        backgroundColor: 'black',
    },
    headermodalcontainer:{
        height: '15%',
        backgroundColor: '#463f3a',

    },
    modalcontainer:{
        flex: 1,
        backgroundColor: '#463f3a',
        
    },
    modalToggle1:{
        marginBottom: 10,
        marginTop: 30,
        borderWidth: 1,
        padding: 30,
        borderRadius: 100,
        position: 'absolute', 
        right: 10,
        bottom: 180,
        backgroundColor: 'black'
    },
    modalToggle2:{
        marginBottom: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#463f3a',
        padding: 10,
        borderRadius: 10,
        position: 'absolute', 
        right: 5,
        alignItems: 'flex-end'
        
    },
})