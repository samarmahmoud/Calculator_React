import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from '../comman';

 class MainScreen extends React.Component {
     constructor(props)
     {
         super(props);
         this.state={
             num1:'',
             num2:'',
             opreation:'',
             resualt:'',
             temp:'',
             indecatorScreen:0
         }

     }
     takeValus(val){
        
         if(this.state.indecatorScreen==0){
            this.setState({num1:val})
            this.setState({indecatorScreen:1})
         }
         else
         {
            this.setState({num2:val})
         }
         
     } 
     addation(){
       
      this.setState({resualt:parseFloat(this.state.num1) + parseFloat(this.state.num2)});
     }
     subtract(){
       
        this.setState({resualt:parseFloat(this.state.num1) - parseFloat(this.state.num2)});
       }
      multiply(){
        
        this.setState({resualt:parseFloat(this.state.num1) * parseFloat(this.state.num2)});
       }
       divsion(){
       if(parseFloat(this.state.num2)==0)
       {
        this.setState({resualt:'infinty'});
       }
       else{
        this.setState({resualt:parseFloat(this.state.num1) / parseFloat(this.state.num2)});
       } 
       
       }
     Reset(){
        this.setState({num1:'',num2:'',opreation:'',indecatorScreen:0,resualt:''});
         
     }
     getResult(opreationType){
         switch(opreationType){
             case '+':
              this.addation()
              break;
              case '-':
              this.subtract() 
              break;
              case '*':
              this.multiply()
              break;
              case '/':
              this.divsion()
              break;
              default:
              alert('error')
         }
     }
     
  render() {
    return (
      <View style={styles.container}>
     <View style={styles.TextContainar} >
       <Text style={styles.textStyle}>{this.state.num1}</Text>
       <Text style={styles.textStyle}>{this.state.opreation}</Text>
       <Text style={styles.textStyle}>{this.state.num2}</Text>
       <Text style={styles.textStyle}>{this.state.resualt}</Text> 
       </View>
      <View style={styles.Buttonscontainer}>
        <Button title='C'onPress={()=>this.Reset()}></Button>
        <Button title='Del'></Button>
        <Button title='/' onPress={()=>this.setState({opreation:'/'})}></Button>
        <Button title='*' onPress={()=>this.setState({opreation:'*'})}></Button>
        <Button title='1' onPress={()=>this.takeValus("1")} ></Button>
        <Button title='2' onPress={()=>this.takeValus("2")}></Button>
        <Button title='3' onPress={()=>this.takeValus("3")}></Button>
        <Button title='-' onPress={()=>this.setState({opreation:'-'})}></Button>
        <Button title='4' onPress={()=>this.takeValus("4")}></Button>
        <Button title='5' onPress={()=>this.takeValus("5")}></Button>
        <Button title='6' onPress={()=>this.takeValus("6")}></Button>
        <Button title='+' onPress={()=>this.setState({opreation:'+'})}></Button>
        <Button title='7' onPress={()=>this.takeValus("7")}></Button>
        <Button title='8' onPress={()=>this.takeValus("8")}></Button>
        <Button title='9' onPress={()=>this.takeValus("9")}></Button>
        <Button title='=' onPress={()=>this.getResult(this.state.opreation)}></Button>
        <Button title='%'></Button>
        <Button title='0'></Button>
        <Button title='.'></Button>
        <Button title='Func'></Button>
      </View>
      </View>
    );
  }
}
export default MainScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'flex-end',
    marginTop:35,
  },
  Buttonscontainer: {
    backgroundColor: '#fff',
    flexDirection:'row',
    flexWrap:'wrap',       
  },
  TextContainar:{
    height:'60%',
    backgroundColor:"#fff",
  
  },
  textStyle:{  
    paddingTop: 12,
    paddingLeft:20,
    fontSize: 20,
    color: '#000',
    lineHeight:24,
  
  }
  

});
