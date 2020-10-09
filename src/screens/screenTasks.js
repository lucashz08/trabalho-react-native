import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import TasksList from '../components/tasksList';
import server from '../server/api'

const screenTasks = () => {

    const[listTask, setListTask] = useState([]);

    const dataSend = async () => {
        try{
            let response = await server.get(`/tarefas?usuarioId=1`) // atualizar depois com o id de usuario logado
            setListTask(response.data)

        }catch(err){
            Alert.alert('Server Error', 'The server looks offline ;( ')
        }
    }

    useEffect( () => {

        dataSend();
        
    },[])

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.txt}>Tasks</Text>
            </View>
            <ScrollView>
                { listTask.map(obj => <TasksList id={obj.id} desc={obj.descricao} />) }
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container : {    
        height : '100%'
    },
    header : {
        width : '100%',
        height: 70,
        borderBottomWidth : 1,
        borderBottomColor : '#000',
        backgroundColor : '#fafafa',
    },
    txt : {
        fontFamily : 'Arial',
        fontSize: 30,
        padding: 20,
        color : 'rgb(140,55,85)'
    }
})

export default screenTasks;