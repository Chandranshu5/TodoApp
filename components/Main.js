import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Task from '../components/Task'


const App = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

// Adding task function
  const handleAddTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }])
      setValue('')
    }
  }

// Deleting task function
  const handleDeleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.key !== id) return true
      })
    )
  }

// Setting mark completed
  const handleChecked = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === id) todo.checked = !todo.checked;
        return todo;
      })
    )
  }
  return (
    <ImageBackground style={{ width: '100%', height: '100%', flex: 1, backgroundColor: '#100007' }}>
      <View style={styles.container}>
        <Text style={{ marginTop: '10%', fontSize: 16, color: '#40bcd8', fontWeight: 'bold' }}>TODO LIST</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            multiline={true}
            onChangeText={(value) => setValue(value)}
            placeholder={'Add your tasks!'}
            placeholderTextColor="#6b705c"
            value={value}
          />
          <TouchableOpacity onPress={() => handleAddTodo()}>
            <Icon name="plus" size={30} color="#40bcd8" style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        </View>

        {/* Task Lists */}
        
        <ScrollView>
          {
            todos.map((task) => (
              <Task
                text={task.text}
                key={task.key}
                checked={task.checked}
                setChecked={() => handleChecked(task.key)}
                delete={() => handleDeleteTodo(task.key)}
              />
            ))

          }
        </ScrollView>
      </View>
    </ImageBackground>
  )
}
export default App



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    height: 20,
    flex: 1,
    minHeight: '7%',
    marginTop: '5%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f7a8c',
    paddingLeft: 10,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "#1f7a8c"
  },
  taskWrapper: {
    marginTop: '5%',
    flexDirection: 'row',
    borderColor: '#6d6875',
    borderBottomWidth: 1.5,
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40,
  },
  task: {
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 6,
    borderColor: '#1f7a8c',
    borderBottomWidth: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: '#1f7a8c',
    borderBottomWidth: 1.5,
    paddingRight: 10,
    paddingBottom: 5
  }
});