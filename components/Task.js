import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Feather';


function Task(props) {

    // Task Completed Alert Box
    
    const completeTask = () => {
        Alert.alert(
          
          'Complete!',
          
          'Task has been marked completed!',
          [
            {
              text: 'OK',
              onPress: () => props.setChecked()
            },
        ],
          {cancelable: false},
        );
      };
      
    // Task delete alert box

    const deleteTask = () => {
        Alert.alert(
          //title
          'Are you sure?',
          //body
          'Do you want to delete this task?',
          [
            {
              text: 'Yes',
              onPress: () => props.delete(),
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'), style: 'cancel'
            },
          ],
          {cancelable: true},
          //clicking out side of alert will not cancel
        );
      };

    return (



        <View style={styles.taskWrapper}>
            <TouchableOpacity onPress= {completeTask}>
                <Icon1
                    name={props.checked ? "check" : "square"}
                    size={28}
                    color="#40bcd8"
                    style={{ marginLeft: 15 }}
                    />
            </TouchableOpacity>


            <View>
                {props.checked && <View style={styles.strikethrough}></View>}
                <TextInput style={styles.task}>{props.text}</TextInput>
            </View>
                
            <Icon
                name="trash"
                size={25}
                color="#f64740"
                onPress = {deleteTask}
                style={{ marginLeft: 'auto', marginRight: 15 }} />
        </View>
        
    );
}

export default Task

const styles = StyleSheet.create({
    taskWrapper: {
        marginTop: '5%',
        flexDirection: 'row',
        borderColor: "#1f7a8c",
        borderBottomWidth: 1.5,
        width: '100%',
        alignItems: 'stretch',
        minHeight: 40,
    },
    task: {
        paddingBottom: 20,
        paddingLeft: 10,
        borderColor: '#F0F0F0',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#40bcd8',
    },
    strikethrough: {
        borderBottomColor: '#39a9db',
        borderBottomWidth: 3,
        marginLeft: 10,
        width: '100%',
        position: 'absolute',
        marginTop: 13.5
    }
})
