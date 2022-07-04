import {StyleSheet, Button, TextInput, View, ProgressViewIOSComponent} from 'react-native'
function GoalInput(props) {
    function goalInputHandler(enteredText) {
        props.HandleInput(enteredText)
    }
    function goalAdd() {
        props.addGoal();
    }
    return (<View style={styles.inputContainer}>
        <TextInput
          placeholder='List Your Goal Here'
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button
          title='Add Goal'
          onPress={goalAdd}
        />
      </View >
    )  
}

const styles = StyleSheet.create({
    inputContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
export default GoalInput
