import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, ScrollView, Alert} from 'react-native';
import TasksList from '../components/tasksList';
import server from '../server/api'

const screenTasks = () => {

    const[listTask, setListTask] = useState([]);

    const dataSend = async (operation, data) => {
        
        try{
           switch(operation) {
                case 1 : {

                    let response = await server.put(`/tarefas/${data.id}`, data)
                
                    if(response.data){
                        Alert.alert('Tasks', 'The task was change sucessfully !')
                    }else{
                        Alert.alert('Tasks', 'Something got wrong!')
                    }
                }
                    break;
                case 2 : { 

                    let response = await server.delete(`/tarefas/${data.id}`)
                    if(response.data){
                        Alert.alert('Tasks', `The "${data.descricao}" was delete !`)
                    }
                } 
                    break;
                default : {

                    let response = await server.get(`/tarefas?usuarioId=1`) // atualizar depois com o id de usuario logado
                    setListTask(response.data)
                }
                    break;
           }
         }catch(err){
            Alert.alert('Server Error', 'The server looks offline ;( ')
         }
    }

    useEffect( () => {

        dataSend();

    },[])

    const handleSetChecked = (obj) => {

        Alert.alert('Tasks', `Do you want check "${obj.descricao}" was completed ? `,
        [
            { text : 'Do not' },
            {
                text : 'Yes',
                onPress : () => {
                    obj.concluido = true
                    dataSend(1, obj)
                    dataSend()
                }
            }
        ])

    }

    const handleDeleteTask = (obj) => {
       Alert.alert('Tasks', `Do you want to delete "${obj.descricao}" ?`,
       [
           {text : 'Do not'},
           {
               text : 'Yes',
               onPress : () => {
                   dataSend(2, obj)
                   dataSend()
               }
            }
        ] )
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.txt}>Tasks</Text>
            </View>
            <ScrollView>
                { listTask.map(obj => <TasksList key={obj.id} desc={obj.descricao} task={obj.concluido} 
                                                 onPress={ !obj.concluido ? () => handleSetChecked(obj) : 
                                                                            () => handleDeleteTask(obj) }  /> ) }
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