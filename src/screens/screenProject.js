import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import ProjectList from '../components/projectsList';
import {BtnBorder, Input} from '../components/componets';
import server from '../server/api';

const screenProject = () => {

    const[newProject, setNewProject] = useState({});
    const[listProject, setListProject] = useState([]);
    const[newTaskEmail, setNewTaskEmail] = useState('');

    const handleChangeNameProject = txt => setNewProject( { descricao : txt} )

    const dataSend = async (operation, data) => {
        try{
            switch(operation){  
                case 1 : {
                    if(data.descricao.length == 0){
                        Alert.alert('Input is Empty', 'You need give it a name !')
                        return;
                    }

                    let response = await server.post('/projetos', data)

                    if(response.data.length == 0){
                        Alert.alert('Server Error', 'Error to create a new Project !')
                    }else{
                          Alert.alert('Server Success', 'Your project was create !')
                          dataSend()
                    }
                }
                break;
                case 2 : {
                    let response = await server.delete(`/projetos/${data.id}`, data)
                    if(response.data){
                        Alert.alert('Project', `The "${data.descricao}" was delete !`)
                        dataSend()
                    }
                }
                break;
                case 3 : {
                    let response = await server.get(`/usuarios?email=${newTaskEmail}`)

                    if(response.data){
                        data.usuarioId = response.data.id

                        let res = await server.post('/tarefas', data)

                        if(res.data){
                            Alert.alert('Server Success', 'The new task was create !')
                        }

                    }else{
                        Alert.alert('Error Server', 'We dint find a use with this email, Sorry !')
                    }
                }
                break;
                default : {
                    let response = await server.get('/projetos')
                    setListProject(response.data)
                }
            }
        }catch(err){
            Alert.alert('Server Error', 'The server looks offline ;( ')
        }
    }

    useEffect( () => {
        
        dataSend()

    },[])

    const handleCreateTask = (obj) => {

        let nameIt = 'Create a Task'

        Alert.prompt(
            nameIt,
            'What will be the Name ?',
            [
              {text: 'Cancel'},
              {
                text: 'Next',
                onPress: taskName => {

                    if(taskName.length > 0){
                        

                        Alert.prompt(nameIt, 'How will make this task ? What the Email ?',
                        [
                            {text : 'Cancel'},
                            {
                                text : ' Send',
                                onPress : taskEmail => {

                                    setNewTaskEmail(taskEmail)

                                    const taskRegister = { descricao : taskName,
                                                           concluido : false,
                                                           projetoId : obj.id}

                                    dataSend(3, taskRegister)
                                }
                            }
                        ]);

                    }else{
                        Alert.alert(nameIt, 'You need get it a name !')
                    }
                }
              }
            ]  
        );
    }

    const handleDeleteProject = (obj) => {
        Alert.alert('Project', `Do you want to delete "${obj.descricao}" ?`,
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
            <Text style={style.txt}>Projects</Text>
        </View>
        <View style={style.pro}>
            <Input placeholder="Create a new project" style={style.inp} onChangeText={handleChangeNameProject}/>
            <BtnBorder title="Create" style={style.btn} onPress={ () => dataSend(1, newProject) }/>
        </View>
        <ScrollView>
            {listProject.map(obj => <ProjectList key={obj.id} desc={obj.descricao} onPress={() => { handleDeleteProject(obj) }} task={ () => handleCreateTask(obj) } />)}
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
    },
    inp :{
        width: 100,
        flex : 5
    },
    pro : {
        flexDirection : 'row',
        borderBottomWidth : 1,
        borderBottomColor : '#000',
        padding: 10,
        backgroundColor : '#fafafa'
    },
    btn : {
        flex : 2,
        margin: 10,
        padding : 8
    }
})

export default screenProject;