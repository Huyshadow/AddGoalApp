import { StyleSheet, Text, View, Button } from 'react-native';
// Just delete the {StatusBar} which is import from 'expo-status-bar'
export default function App() {
  return (
    // Text has to be use to implement text in Reactnative in <View>
    // View like div in Html: box and container, could hold textinput, button. but can't display text
    // multiple component in in View componet
    // different core componet have different role
    // View hold all the component
    // coler in style in reactnative: both short (#fff), and long (#cccfff) as well as ulity function like rgb(), hsl() or rgba()
    // style can be inline or StyleSheet
    <View style={styles.container}>
      <View>
        <Text>Check out the new VERSION!!!</Text>
      </View>
      <Text style={{margin: 16,borderWidth: 2, borderColor:'red', padding: 16 }}>Hello World!!!</Text>
      <Button title='Check'/>
    </View>
    //StattusBar was delete ( in View )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
