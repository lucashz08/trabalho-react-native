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
            flex : 1,
            alignItems : 'center',
            borderTopColor : '#ccc',
            borderTopWidth: 1,
            paddingTop : 20,
            backgroundColor : '#e9ebee'
        }, 
        container : {
            flexDirection : 'column',
            flex : 1

        }
    })

    return(
            <View style={ss.container}>
                <View style={ss.main}>
                    <Text>voce esta logado </Text>
                </View>
                <View style={ss.footer}>
                    <Text>
                        <Btn title="TAREFAS" />
                        <Text>          </Text>
                        <Btn title="PROJETOS" />
                    </Text>
                </View>
           </View>
           )
}

export default loggedMain;