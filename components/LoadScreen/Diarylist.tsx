import { EvilIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, FlatList, Text } from 'react-native';


export default function Diarylist({diaries, setDiaries, handleEditTrigger, Delete}: {diaries:any, setDiaries:any, handleEditTrigger:any , Delete:any}) {
    return(
        <FlatList 
            style={styles.liststyle}
            refreshing={true}
            data={diaries}
            renderItem={({ item, index}) => (
                <TouchableOpacity onPress={() => handleEditTrigger(item)}>
                <View style={styles.item}>
                    <Text style={styles.itemdate}>{item.date}</Text>
                    <Text style={styles.itemtitle} numberOfLines={1} >{item.title}</Text>
                    <Text style={styles.itemtext} numberOfLines={1} >{item.content}</Text>
                    <EvilIcons 
                        name="trash" 
                        color={'white'} 
                        size={50}
                        style={styles.iconright}
                        onPress = {() => Delete(index) }
                        />   
                </View>
                </TouchableOpacity>
            )}
        />
    );
}
const styles = StyleSheet.create({
    itemtext:{
        fontSize: 15,
        color: '#f4f3ee',
        paddingHorizontal: 10

    },
    itemtitle:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#f4f3ee',
        left: 5,
        
    },
    itemdate:{
        fontSize: 10,
        color: '#f4f3ee',
        alignSelf: 'flex-end',
        
    },
    liststyle:{
        marginTop: 20,
    },
    iconright:{
        alignSelf: 'flex-end'
    },
    item:{
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 15,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        paddingHorizontal: 15,
        flexDirection: 'column', 
        justifyContent:'space-between',
        
    },
})