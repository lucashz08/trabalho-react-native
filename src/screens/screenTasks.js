import React from 'react';
import {Text, View} from 'react-native';
import TasksList from '../components/tasksList';

const screenTasks = () => {
    return (
        <View>
           <TasksList id={1} desc={'testando'} />
        </View>
    )
}

export default screenTasks;