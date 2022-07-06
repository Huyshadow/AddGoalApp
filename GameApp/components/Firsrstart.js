import { useState } from 'react';
import { StyleSheet, View, Text, Pressable, TextInput } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-web';


function Firststart(props) {
    
    const [Input, SetInput] = useState('');
    
    function ResetHandeler() {
        SetInput('')
    }

    function SetConfirmHandler() {
        props.Confirmed(Input)
    }

    function InputHandler(enterNumber) {
        SetInput(enterNumber);
        
    }


    return <View style ={styles.StartContainer}>
        <View>
            <View style= {styles.title}>
                <Text style = {styles.texttitle}>Enter The Number</Text>
            </View>
            <TextInput 
                style={styles.textInput}
                keyboardType='numeric'
                onChangeText={InputHandler}
                value={Input}
                maxLength={2}  //setting limit of input
            />
        </View>
        <View style = {styles.buttonrow}>
            <Pressable style = {styles.button} onPress={ResetHandeler} android_ripple={{ color: 'white' }}>
                <Text style={styles.text} >Reset</Text>
            </Pressable>
            <Pressable android_ripple={{ color: 'white' }} style = {styles.button} onPress={SetConfirmHandler}>
                <Text style = {styles.text}>Confirm</Text>
            </Pressable>
        </View>
    </View>
}
const styles = StyleSheet.create({
    StartContainer: {
        borderWidth: 1,
        width: 300,
        height: 150,
        borderColor: 'white',
        marginBottom: 120,
        borderRadius: 12,

    },
    textInput: {
        borderWidth: 1,
        width: '80%',
        marginLeft: '10%',
        borderRadius: 3,
        textAlign:'center',
        backgroundColor: 'rgba(0,0,0,0.75)',
        color:'white'
    },
    buttonrow: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        width: 90,
        height: 45,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'white',
        marginTop: 12,
    },
    text: {
        textAlign: 'center',
        padding: 9,
        color:'white',
    },
    title: {
        height: 40,
    },
    texttitle: {
        textAlign: 'center', 
        fontSize: 19,
        marginTop: 4,
        color: 'white',
    },
});
export default Firststart