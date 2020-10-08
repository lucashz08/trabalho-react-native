import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import imgLogo from '../img/logo.png';
import {Input, Btn, BtnBorder, BtnBack} from '../components/componets';

export const ScreenLogin = ({screen}) => {
    return (
        <View style={style.main}>        
            <Image style={style.img} source={imgLogo} />
            <Text style={style.text} >Enter with your login below :</Text>
            <Input placeholder="exemple@gmail.com" />
            <Input placeholder="enter with your password" />
            <BtnBorder title="Sign In" />
            <Btn title="Click here to create a account ." onPress={() => screen(1)}/>
        </View>
    )
}

export const ScreenRegister = ({screen}) => {
    return (
        <View style={style.main}>
                    
            <Image style={style.img} source={imgLogo} />
            <Text style={style.text} >Enter with your data below :</Text>
            <Input placeholder="exemple@gmail.com" />
            <Input placeholder="enter with your password" />
            <Input placeholder="enter with your pass again" />
            <BtnBorder title="Create a new Account" />
            
            <View style={style.footer}>
                 <BtnBack  onPress={() => screen(0)}/>
            </View>
        </View>
        
    )
}

const style = StyleSheet.create({
    main : {
      flex : 1,
      alignItems : 'center',
    //   backgroundColor : '#000'
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
    },
    footer : {
        position : 'absolute',
        bottom : 0,
        width : '90%'
    }
});