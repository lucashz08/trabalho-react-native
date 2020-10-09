import React, {Fragment, useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Btn } from '../components/componets.js';
import {UserContext} from '../components/context.js';

const loggedMain = () => {

  //  const logged = useContext(UserContext);

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
                    <Text>voce esta logado </Text>
                </View>
                <View style={ss.footer}>
                    <View style={ss.menu}>
                        <Btn style={ss.marginBtn} title="TAREFAS" />
                        <Btn style={ss.marginBtn} title="PROJETOS" />
                    </View>
                </View>
           </View>
           )
}

export default loggedMain;