import React from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';
import imgLogo from '../img/logo.png';
import {Input, Btn, BtnBorder} from '../components/componets'
const screenLogin = () => {


    return (
        <View style={style.main}>        
            <Image style={style.img} source={imgLogo} />
            <Text style={style.text} >Enter with your login below :</Text>
            <Input placeholder="exemple@gmail.com" />
            <Input placeholder="enter with your password" />
            <BtnBorder title="Sign In" />
            <Btn title="Click here to create a account ." />
        </View>
    )
}

const style = StyleSheet.create({
    main : {
      flex : 1,
      alignItems : 'center'
    },
    img : {  
        width: 230,
        height: 100,
        margin : 30
    },
    text : {
        fontFamily : 'Arial',
        fontSize : 20,
        marginTop: 20
    }
});

export default screenLogin;