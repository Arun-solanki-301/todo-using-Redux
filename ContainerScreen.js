import React from "react";
import {View , Text} from 'react-native';
import Home from "./Components/Home";
import { useSelector } from "react-redux";

const ContainerScreen = () =>{
    return (
        <View>
            <Home />
        </View>
    )
}

export default ContainerScreen;