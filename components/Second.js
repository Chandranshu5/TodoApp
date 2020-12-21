import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';


const App = () => {

    const[todos,setTodos] = useState({
      tasks: [],
      task: '',
      key: ''
    })
  
    const addItem = () => {
  
      if(todos.task != '' && todos.task != null){
        setTodos({
          tasks: todos.tasks.concat(todos.task),
          task: ''
        })
        console.log(todos.tasks)
      }
      else {
        Alert.alert('OOPS!', 'You need to fill in input' , [{
          text: 'Understood'
        }])
      }
    }
  
    const removeItem = arg => {
      const list = todos.tasks;
            list.splice(arg,1)
            setTodos({tasks: list})
    }
  
  
    const handleInputTextChange = (newText, index) => {
      setTodos((s) => {
        s,
        tasks; s.tasks.map((t, i) => i === index ? newText : t)
      })
    }
  
    return (
  
     <ScrollView keyboardShouldPersistTaps='handled'>
      <View style={styles.container}>
  
      <View style = {styles.header}>
        <Text style = {styles.title}>Todos</Text>
      </View>
  
          <View style={styles.content}>
             <TextInput
             style = {styles.input}
             placeholder = "Type new item"
             value = {todos.task}
             onChangeText = {e => setTodos({...todos, task: e, key: Date.now()})}
             />
             <ButtonSubmit text = 'Submit' onPress = {addItem}/>
  
             {
               todos.tasks.map((item, index) => {
                 return(
                  <TouchableOpacity>
                    <View style = {styles.Wrapper} key = {todos.key}>
                      <View style = {styles.taskWrapper}>
                        <TextInput style = {styles.task} id = {todos.key} value = {item} onChangeText={value => handleInputTextChange(value, index)} />
                      </View>
                      <ButtonRemove  onPress = {() => removeItem(index)} />
                    </View>
                  </TouchableOpacity>
                 )
               })
             }
          </View>
      </View>
    </ScrollView>
    );
  }