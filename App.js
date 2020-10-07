import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ScreenLogin from './src/screens/login';


const App = () => {

  return (
      <SafeAreaView style={style.main}>
          <ScreenLogin />
      </SafeAreaView>
  );
};
const style = StyleSheet.create({
  main : {
      backgroundColor : '#e9ebee',
      flexDirection : 'column-reverse',
      flex : 1
  }
});
export default App;
