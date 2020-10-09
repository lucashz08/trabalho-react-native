import React, {useContext, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import { Btn } from '../components/componets.js';
import {UserContext} from '../components/context.js';
import ScreenTasks from './screenTasks';
import ScreenProject from './screenProject';

const loggedMain = () => {

    const [screenView, setScreenView] = useState(0);
  //  const logged = useContext(UserContext);

    const handleChangeScreenView = num => setScreenView(num)
    
    const ss = StyleSheet.create({
        main : {
            flex : 20
        },
        footer : {
            flex : 2,
            alignItems : 'center',
            borderTopColor : '#ccc',
            borderTopWidth: 1,
            backgroundColor : '#e9ebee'
        }, 
        container : {
            flexDirection : 'column',
            flex : 1
        },
        menu : {
            flexDirection : 'row'
        },
        marginBtn : {
             position : 'relative',
             marginLeft : 15,
             marginRight : 15
         }
    })

    return(
            <View style={ss.container}>
                <View style={ss.main}>
                    <ScrollView>
                        {screenView == 0 ? <ScreenTasks /> : <ScreenProject />}  
                    </ScrollView>   
                </View>
                <View style={ss.footer}>
                    <View style={ss.menu}>
                        <Btn style={ss.marginBtn} title="TASKS" onPress={ () => handleChangeScreenView(0) }/>
                        <Btn style={ss.marginBtn} title="PROJECTS" onPress={ () => handleChangeScreenView(1) }/>
                    </View>
                </View>
           </View>
           )
}

export default loggedMain;