import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ScreenLogin, ScreenRegister} from './screensMain';

const screenStart = () => {
    return (
    <SafeAreaView style={style.main}>
        {/* <ScreenLogin /> */}
        <ScreenRegister />
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