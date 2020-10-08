import React, { useEffect, useState } from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ScreenLogin, ScreenRegister} from './screensMain';

const screenStart = () => {

    const [screen, setScreen] = useState(0);

    const handleChangeScreen = (number) => {
        setScreen(number);
    }

    useEffect(() => {
        handleChangeScreen(0)
    },[]);

    return (
    <SafeAreaView style={style.main}>

        {  screen == 0 ? 
            <ScreenLogin screen={handleChangeScreen} /> 
            : 
            <ScreenRegister screen={handleChangeScreen} />
        }
        
    </SafeAreaView>
    )
}

const style = StyleSheet.create({
    main : {
        backgroundColor : '#e9ebee',
        flexDirection : 'column-reverse',
        flex : 1
    }
  });
export default screenStart;