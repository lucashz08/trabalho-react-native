import React, { useState, useContext, useEffect } from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ScreenLogin, ScreenRegister} from './screensMain';
import {UserContext, UserProvider} from '../components/context'
import ScreenLogged from '../screens/screenLogged';

const screenStart = () => {

    const [screenView, setScreenView] = useState(0)
    const [isLogged, setLogged] = useState(true)
    const handleChangeScreen = number => setScreenView(number)
    
    const screens = () => {

        if(!isLogged){
           return  (screenView == 0  ? 
                    <ScreenLogin isLogged={setLogged} screenView={handleChangeScreen} /> 
                    : 
                    <ScreenRegister isLogged={setLogged} screenView={handleChangeScreen} />
           )
        }else{ return  <ScreenLogged /> }
        
    }

    return (
    <SafeAreaView style={style.main}>
        <UserProvider>
        {  
            screens()
        }
        </UserProvider>    
    </SafeAreaView>
    );
}

const style = StyleSheet.create({
    main : {
        backgroundColor : '#e9ebee',
        flexDirection : 'row',
        flex : 1
    }
  });
  
export default screenStart;