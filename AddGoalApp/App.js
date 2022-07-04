import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
// Just delete the {StatusBar} which is import from 'expo-status-bar'
export default function App() {

  const [Input, SetInput] = useState('');

  const [CourseGoal,SetCourseGoal] = useState([]);

  function goalInputHandler(enteredText) {
    SetInput(enteredText);
  };
// When updatinng ,use function.
  function addGoalHandler() {
    const IdInput = {
      id: Math.random(),
      text: Input,
    }
    SetCourseGoal((prevCoureGoal) => [...prevCoureGoal, IdInput]);
  }

  //TextInput can use onChangeText props 
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
    
    //Neu co () trong prop o function thi se thuc hien ngay lap tuc

    // Button has no style  
    // Button in Reactnative has onPress
    <View style={styles.appContainer}>
      <GoalInput HandleInput={goalInputHandler} addGoal={addGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList data={CourseGoal}
          renderItem={itemData => {
            return <GoalItem check={itemData.item} />
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}>

        </FlatList>
      
      </View>
    </View>

    //StattusBar was delete ( in View )
  );
}
// StyleSheet like a container, and in this container, can define an object to style
// Beside auto-completion, the StyleSheet oject also provide validation. 
const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#e9f0f6',
    
  },
  goalContainer: {
    flex: 5,
    flexDirection: 'column',
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

/*
  The different between 2 platform Android and Ios: some component do not support for both platform like Text, so we can use <View> instead
  In React Native, we don't have style inheritence
*/

/*
  Use ScrollView to Scroll the ReactNative.
  <ScrollView alwaysBounceVertical={false}>
          {CourseGoal.map(goal => {
            return <View key={goal.id} style={styles.goalItem}>
                <Text style={styles.goalText}>{goal.text}</Text>
            </View>
          })}
  </ScrollView>

*/

/*
  The FlatList is used when they have lot of thing to list like thousand or something like that...
*/