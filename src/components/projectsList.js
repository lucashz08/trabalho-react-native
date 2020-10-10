import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { BtnBorder } from './componets';
import imgBin from '../img/bin.png';
import imgNew from '../img/new.png';
import imgFolder from '../img/folder.png';

const projectList = ({desc, onPress, task, see}) => {
   
    const ss = StyleSheet.create({
        container : {
            width : '100%',
            padding : 15,
            borderBottomWidth : 1,
            borderBottomColor : '#ccc',
            flexDirection: 'row'

        },
        txt : {
            fontFamily : 'Arial',
            fontSize : 18,
            flex : 10
        },
        buttonChecked : {
            width : 50,
            padding: 3,
            marginTop : 0,
            backgroundColor : '#fafafa',
            borderColor : 'rgb(0, 157, 37)',
            marginRight : 10

          },
          buttonDelete : {
            width : 50,
            padding: 3,
            marginTop : 0,
            backgroundColor : '#fafafa',
            borderColor : 'rgb(140,55,85)',
            marginRight : 10

          }
    })

    return (
            <View style={ss.container}>
                <Text style={ss.txt}>{desc}</Text>
                <BtnBorder title='Folder' style={ss.buttonDelete} img={imgFolder} onPress={see} />
                <BtnBorder title='New' style={ss.buttonDelete} img={imgNew} onPress={task} />
                <BtnBorder title='Delete' style={ss.buttonDelete} img={imgBin} onPress={onPress} />
           </View>
    )
}

export default projectList;