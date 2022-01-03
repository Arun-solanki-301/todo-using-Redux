import React ,{useState}from 'react';
import {View , Text, TextInput, Touchable, TouchableOpacity ,StyleSheet, ActionSheetIOS, ScrollView} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as func from "../Redux/Actions";

export default function Checked() {
    const [AddTodoInput , setAddTodoInput] = useState("")
    const [check , setcheck] = useState(false)
    const TodoState = useSelector((State)=>{
        return State.TodoData
    })

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
   <View>
       {TodoState.filter((elem)=>{
           return elem.checked === false;
       }).map((item , i)=>{
            return(
                <View style={styles.TodoView} key={i}>
                <TouchableOpacity style={item.checked ? styles.TodoBtnTrue : styles.TodoBtn} onPress={()=>  isTodoComplete(item.id)}>
                  <Text></Text>
                </TouchableOpacity>
                <Text style={styles.Text}>{item.title}</Text>
              </View>
            )
       })
       
       
       }
   </View>
  )
    
}

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
      marginHorizontal:15
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