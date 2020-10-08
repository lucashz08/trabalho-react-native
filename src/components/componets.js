import React from 'react';
import {TextInput, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const Input = ({placeholder}) => {

    const ss = StyleSheet.create({
        textInput : {
            width : '80%',
            height : 40,
            borderWidth : 1,
            borderColor : 'rgb(140,55,85)',
            borderRadius : 5,
            marginTop : 20,
            paddingLeft : 15,
            fontSize : 16
        }
    })

    return (<TextInput style={ss.textInput} placeholder={placeholder}/>)
}

export const BtnBorder = ({title, onPress}) => {

    const ss = StyleSheet.create({

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
        }

    })

    return (
         <TouchableOpacity style={ss.buttonBorder} title={title} onPress={onPress}>
             <Text style={ss.buttonBorderText}>{title}</Text>
         </TouchableOpacity>
         )
}

export const Btn = ({title, onPress}) => {
    
    const ss = StyleSheet.create({
        button : {
            marginTop : 20
        },
    
        buttonText : {
            fontSize : 20,
            color : 'rgb(0, 185, 208)'
        }
    })

    return (
         <TouchableOpacity style={ss.button} title={title} onPress={onPress}>
             <Text style={ss.buttonText}>{title}</Text>
         </TouchableOpacity>
         )
}

export const BtnBack = () => {

    const ss = StyleSheet.create({
        txt : {
            fontSize : 20,
            color : 'rgb(0, 185, 208)',
            padding : 10,
            fontFamily : 'Arial',
            fontWeight : 'bold'
        }
    })

    return (
        <TouchableOpacity> 
            <Text style={ss.txt}>{'< BACK'}</Text>
        </TouchableOpacity>
    )
}

