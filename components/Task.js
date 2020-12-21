import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

function Task(props) {

    // Alert Box
    
    const completeTask = () => {
        Alert.alert(
          
          'Completed',
          
          'Task has been completed!',
          [
            {
              text: 'OK',
              onPress: () => props.setChecked()
            },
        ],
          {cancelable: false},
        );
      };
      

    return (



        <View style={styles.taskWrapper}>
            <TouchableOpacity onPress= {completeTask}>
                <Icon
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
                name="trash-2"
                size={25}
                color="#f64740"
                onPress={props.delete}
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
