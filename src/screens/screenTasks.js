import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, ScrollView, Alert} from 'react-native';
import TasksList from '../components/tasksList';
import server from '../server/api'

const screenTasks = () => {

    const[listTask, setListTask] = useState([]);

    const dataSend = async (operation, data) => {
        
        try{
            if(operation == 1){
            
                let response = await server.get(`/tarefas?usuarioId=1`) // atualizar depois com o id de usuario logado
                setListTask(response.data)

            }else if(operation == 2) {

                let res = await server.put(`/tarefas/${data.id}`, data)
            
                if(res.data){
                    Alert.alert('Tasks', 'The task was change sucessfully !')
                }else{
                    Alert.alert('Tasks', 'Something got wrong!')
                }
            }  
         }catch(err){
            Alert.alert('Server Error', 'The server looks offline ;( ')
         }
    }

    useEffect( () => {

        dataSend(1);

    },[])

    const handleMessage = (obj) => {

        Alert.alert('Tasks', 'Do you want to check it like completed ? ',
        [
            { text : 'Do not' },
            {
                text : 'Yes',
                onPress : () => {
                    obj.concluido = true
                    dataSend(2, obj)
                }
            }
        ])

    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.txt}>Tasks</Text>
            </View>
            <ScrollView>
                { listTask.map(obj => <TasksList key={obj.id} desc={obj.descricao} onPress={ () => { handleMessage(obj) } } /> ) }
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