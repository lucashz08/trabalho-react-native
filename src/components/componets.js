import React from 'react';
import {TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const Input = ({placeholder}) => {
    return (<TextInput style={style.textInput} placeholder={placeholder}/>)
}

export const BtnBorder = ({title, onPress}) => {
    return (
         <TouchableOpacity style={style.buttonBorder} title={title} onPress={onPress}>
             <Text style={style.buttonBorderText}>{title}</Text>
         </TouchableOpacity>
         )
}

export const Btn = ({title, onPress}) => {
    return (
         <TouchableOpacity style={style.button} title={title} onPress={onPress}>
             <Text style={style.buttonText}>{title}</Text>
         </TouchableOpacity>
         )
}

const style = StyleSheet.create({
    textInput : {
        width : '80%',
        height : 40,
        borderWidth : 1,
        borderColor : 'rgb(140,55,85)',
        borderRadius : 5,
        marginTop : 20,
        paddingLeft : 15,
        fontSize : 16
    },
    button : {
        marginTop : 20
    },
    buttonBorder : {
        width : '80%',
        borderWidth: 1,
        borderColor : 'rgb(0, 157, 37)',
        alignItems : 'center',
        padding : 10,
        borderRadius : 5,
        marginTop : 20,
        backgroundColor : 'rgb(0, 157, 37)'
    },
    buttonBorderText : {
        fontSize : 20,
        color : '#fafafa'
    },
    buttonText : {
        fontSize : 20,
        color : 'rgb(0, 185, 208)'
    }
});

