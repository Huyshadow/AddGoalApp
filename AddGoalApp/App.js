import { StyleSheet, Text,TextInput, View, Button } from 'react-native';
// Just delete the {StatusBar} which is import from 'expo-status-bar'
export default function App() {
  return (
    // Text has to be use to implement text in Reactnative in <View>
    // View like div in Html: box and container, could hold textinput, button. but can't display text
    // multiple component in in View componet
    // different core componet have different role
    // View hold all the component
    // coler in style in reactnative: both short (#fff), and long (#cccfff) as well as ulity function like rgb(), hsl() or rgba()
    // style can be inline or StyleSheet ( should use Style Sheet)
    /*
    * style inline: style ={{margin:16,...}}
    * style Stylesheet: below
    */
    //TextInput is self-closing component


    
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your Course Goal' style={styles.textInput} />
        <Button title='Add Goal'/>
      </View>
      <View>
        <Text>List Of Goals...</Text>
      </View>
    </View>
    //StattusBar was delete ( in View )
  );
}
// StyleSheet like a container, and in this container, can define an object to style
// Beside auto-completion, the StyleSheet oject also provide validation. 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,borderWidth: 2, borderColor:'blue', padding: 16,
  },
  appContainer: {
    padding: 50,
    
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8,
  },
});
/*
  - Layouts is typically created with Flexbox
    similar to CSS browser flexbox
  - Position inside elements
  - Positioning is controlled via style settings applied to the element containers
    + flex: (1) the element should expand to occupy available splace
    + flexDirections: controls orientations of Main Axis ( chieu doc: 'top to bottom' or 'left to right' ) va Cross Axis ( chieu ngang )
      column:'top to bottom' or row:'left to right'
    + justifyContent: control how element layout in their axis ( chieu )
    + alignItem:
*/

