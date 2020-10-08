import React, { useState } from 'react';
import {Text, View, StyleSheet, Image, Alert} from 'react-native';
import imgLogo from '../img/logo.png';
import {Input, Btn, BtnBorder, BtnBack} from '../components/componets';
import server from '../server/api';

export const ScreenLogin = ({screenView}) => {
    return (
        <View style={style.main}>        
            <Image style={style.img} source={imgLogo} />
            <Text style={style.text} >Enter with your login below :</Text>
            <Input placeholder="example@gmail.com" />
            <Input placeholder="enter with your password" />
            <BtnBorder title="Sign In" />
            <Btn title="Click here to create a account ." onPress={() => screenView(1)}/>
        </View>
    )
}

export const ScreenRegister = ({screenView}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const handleChangeEmail = text => setEmail(text)
    const handleChangePassword = text => setPassword(text)
    const handleChangeRePassword = text => setRePassword(text)

    const dataSend = async () => {

        if(email.length == 0){
            Alert.alert('Email Alert', 'Email is not valid!')
            return;
        }else if(password !== rePassword){
            Alert.alert('Password Alert', 'Password dont have a match!')
            return;
        }else if(password.length == 0){
            Alert.alert('Password Alert', 'Password is Empty!')
            return;
        }

        let dataRegister = {email : email, password : password}

        try{

            let exist = await server.get(`/usuarios?email=${email}`)

            if(exist.data.length == 0){

                let response = await server.post('/usuarios', dataRegister);
                Alert.alert('Server Success', 'Your account has been created!')

            }else{

                Alert.alert('Email Alert', 'Email is already used!')

            }
0
        }catch(err){
            Alert.alert('Server Error', 'The server looks offline to register')
        }
        
    }

    return (
        <View style={style.main}>             
            <Image style={style.img} source={imgLogo} />
            <Text style={style.text} >Enter with your data below :</Text>
            <Input placeholder="example@gmail.com" name="lucas" onChangeText={handleChangeEmail} />
            <Input placeholder="enter with your password" onChangeText={handleChangePassword} secureTextEntry={true}/>
            <Input placeholder="enter with your pass again" onChangeText={handleChangeRePassword} secureTextEntry={true}/>
            <BtnBorder title="Create a new Account" onPress={() => dataSend()} />
            
            <View style={style.footer}>
                 <BtnBack  onPress={() => screenView(0)}/>
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


