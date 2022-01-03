import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  ActionSheetIOS,
  FlatList,
  Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as func from "../Redux/Actions";

const NewTodo = () => {
const [check , setcheck] = useState(false)


  const TodoState = useSelector((State) => {
    return State.TodoData;
  });
  const dispatch = useDispatch();
  const {addTodo , UpdateTodo} = bindActionCreators(func , dispatch);
 
const isTodoComplete = (id)=>{
    TodoState.forEach(element => {
        if(element.id === id){
            element.checked = !element.checked; 
            setcheck(!check)
        }    
    });
    UpdateTodo()
}
  return (
    <View style={styles.container}>
      <FlatList
        data={TodoState}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.TodoView} id={item.id} >
              <TouchableOpacity style={item.checked ? styles.TodoBtnTrue : styles.TodoBtn} onPress={()=>  isTodoComplete(item.id)}>
                <Text></Text>
              </TouchableOpacity>
              <Text style={styles.Text}>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default NewTodo;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
  },
  TodoView: {
    display: "flex",
    // justifyContent : "center",
    flexDirection: "row",
    marginTop: 25,
    alignItems: "center",
  },
  TodoBtn: {
    backgroundColor: "red",
    height: 30,
    width: 30 ,
    borderRadius: 100,
  },
  TodoBtnTrue :{
    backgroundColor: "green",
    height: 30,
    width: 30 ,
    borderRadius: 100,
  },    
  Text: {
    fontSize: 18,
    width: "90%",
    marginLeft: 15,
  },

});
