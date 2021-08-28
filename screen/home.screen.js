import React from 'react'
import { useState } from 'react'
import { View,Text,Button,StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import store from '../redux/store'

const HomeScreen=()=>{
const [number,setNumber]=useState(0)
console.log('Store initial state:',store.getState())
const unsubscribe=store.subscribe(()=>{
    console.log('Store after dispatch',store.getState())
})
    return(
        <SafeAreaView style={styles.container}>
            
            <Text style={styles.text}>{}</Text>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} title='Add' onPress={()=>{
            store.dispatch({type:"INCREMENT_COUNTER"})
                }}/>
                <Button style={styles.button} title="Subtract"/>
            </View>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent:'center',
       alignItems:'center',
    },
    buttonContainer:{
        width:300,
        flexDirection:"row",
        justifyContent:"space-around"
    },
    button:{
        width:80,
        
        
    },
    text:{
        marginBottom:20,
        justifyContent:"center",
        textAlign:'center'
    }
})
export default HomeScreen