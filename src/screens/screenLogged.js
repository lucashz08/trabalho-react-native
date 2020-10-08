import React, {useContext} from 'react';
import {Text} from 'react-native';
import {UserContext} from '../components/context.js';

const loggedMain = () => {
    const logged = useContext(UserContext);
    console.log(logged)
    return(<Text>voce esta logado {logged.email}</Text>)
}

export default loggedMain;