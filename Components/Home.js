import React, { useState } from "react";
import {View , Text, TextInput, Touchable, TouchableOpacity ,StyleSheet, ActionSheetIOS, ScrollView} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as func from "../Redux/Actions";
import NewTodo from "./NewTodo";

const Home = () =>{
    const [AddTodoInput , setAddTodoInput] = useState("")
    const TodoState = useSelector((State)=>{
        return State
    })
    const dispatch = useDispatch();
    const {addTodo} = bindActionCreators(func , dispatch);
    const addTodos = ()=>{
        if(AddTodoInput !== ""){
            addTodo(AddTodoInput) 
            setAddTodoInput("")
        }
    }
    return (
        <ScrollView >
        <View style={styles.container}>
            <View style={styles.AddTodoView}>
            <TextInput style={styles.AddTodoInput} value = {AddTodoInput} onChangeText = {(e)=>setAddTodoInput(e)}/>
            <TouchableOpacity style={styles.AddTodoBtn} ><Text style={styles.AddTodoBtnText} onPress={() => addTodos()}>Add</Text></TouchableOpacity>
            </View>
            <NewTodo />
        </View>
        </ScrollView>
    )
}

export default Home;


const styles = StyleSheet.create({
    container : {
        marginHorizontal : 20
    },
    AddTodoView :{
        display : "flex",
        flexDirection : "row",
        // justifyContent : "center",
        alignItems : "center",
        marginTop : 30
    },

    AddTodoInput :{
        width : "80%",
        height : 50,
        borderColor : "black",
        borderWidth : 2,
        fontSize : 25,
        color : "blue"
    },
    AddTodoBtn :{
        backgroundColor : "black",
        height : 50, 
        width : "20%"   
    },
    AddTodoBtnText :{
        color : "#fff",
        textAlign : "center",
        marginTop : 10,
        fontSize : 25
    },
    
})