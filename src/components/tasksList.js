import React from 'react';
import {View, Text} from 'react-native';

const taskList = ({id, desc}) => {

    return (
            <View key={id}>
                <Text>{desc}</Text>
           </View>
    )
}

export default taskList;