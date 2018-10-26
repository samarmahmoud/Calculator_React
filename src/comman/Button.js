
import React from 'react';
import {Text,TouchableOpacity} from 'react-native';


const Button =(props)=>{
   
    return(
        <TouchableOpacity style={style.ButtonStyle} onPress={props.onPress}>
        <Text style={style.ButtonTextStyle} >{props.title}</Text>
        </TouchableOpacity>
    );
}

export {Button}

const style ={
   
    ButtonStyle: {
        width:'25%',
         backgroundColor: '#37474f',
         borderColor: '#455a64',
         borderWidth: 1,
 
     },
     ButtonTextStyle: {
         alignSelf: 'center',
         paddingTop: 12,
         paddingBottom: 14,
         fontSize: 16,
         color: '#fff',
         lineHeight:24,
         fontWeight:'bold',
 
     },
};