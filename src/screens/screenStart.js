import React, { useState } from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ScreenLogin, ScreenRegister} from './screensMain';

const screenStart = () => {

    const [screen, setScreen] = useState(0);

    const handleChangeScreen = (number) => {
        setScreen(number);
    }

    return (
    <SafeAreaView style={style.main}>
        {  screen == 0 ? 
            <ScreenLogin screenView={handleChangeScreen} /> 
            : 
            <ScreenRegister screenView={handleChangeScreen} />
        }
    </SafeAreaView>
    );
}

const style = StyleSheet.create({
    main : {
        backgroundColor : '#e9ebee',
        flexDirection : 'column-reverse',
        flex : 1
    }
  });
  
export default screenStart;