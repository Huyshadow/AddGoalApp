import React from 'react';
import { Text, View } from 'react-native';
// Flexbox is tipically a concept in CSS to organize child element
// How much space it should take of space can get in the main axis
export default function App() {
  return (
    <View style={{ padding: 50, flexDirection: 'row',width:'80%',height:300, justifyContent:'flex-end',alignItems:'center'}}>
      <View
        style={{
          backgroundColor: 'red',
          flex:1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          flex:2,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
