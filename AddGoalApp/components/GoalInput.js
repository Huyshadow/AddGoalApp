import { useState } from 'react';
import { StyleSheet, Button, TextInput, View, ProgressViewIOSComponent , Modal, Image} from 'react-native'

//use value properties in Textinput to set the value in input!!!
function GoalInput(props) {
  const [Reset, SetReset] = useState('');
    function SetGoal(enteredText) {
      SetReset(enteredText)
    };
    function goalInputHandler(enteredText) {
      props.HandleInput(enteredText)
      SetGoal(enteredText)
    }
    function goalAdd() {
      props.addGoal();
      props.HandleInput('');
      SetGoal('');
  }
  function CancelHandler() {
      props.Cancel()
  }
  //Use 'Image' component to post photo in app ( have to use 'require' function)

  // Vi minh dang lam o file goalInput trong componet nen minh phai ra ngoai folder cha roi moi access vao folder assets ( dung '..' de di ra ngoai folder cha)
  return (
    <Modal visible={props.show} animationType="slide">
      <View style={styles.inputContainer}>
          <Image style={styles.images} source={require('../assets/images/goal.png') } />
          <TextInput
          placeholder='List Your Goal Here'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={Reset}
        />
        <View style={styles.buttonPosition}>
          <View style = {styles.button}>
            <Button
              title='Add Goal'
              onPress={goalAdd}
              color="#71c9da"
              />
          </View>
          <View style = {styles.button}>
            <Button
              title='Cancel'
              onPress={CancelHandler}
              color='#AEE0EA'
              />
          </View>
        </View>
        </View >
      </Modal>
    )  
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#c4e3e1',
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#8cc8d6',
    backgroundColor: 'white',
    width: '100%',
    padding: 8,
    borderRadius: 12,
    
  },
  buttonPosition: {
    width: '70%',  
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
    alignItems: 'center'
  },
  button: {
    width: 100, 
    marginHorizontal: 16,
  },
  images: {
    width: 100,
    height: 100,
    margin: 8,
  },
});
export default GoalInput
