import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { BtnBorder } from './componets';
import imgBin from '../img/bin.png';
import imgChecked from '../img/checked.jpg'

const taskList = ({desc, onPress, task}) => {

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
                {   !task ?
                    <BtnBorder title='Finished' style={ss.buttonChecked} img={imgChecked} onPress={onPress} />
                    :
                    <BtnBorder title='Delete' style={ss.buttonDelete} img={imgBin} onPress={onPress} />
                }
           </View>
    )
}



export default taskList;