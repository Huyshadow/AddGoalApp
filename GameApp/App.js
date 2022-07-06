import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Firststart from './components/Firsrstart';
import Control from './components/Control';
import Annoucement from './components/Annoucement';

export default function App() {
  const [InputUse, SetInput] = useState(0);
  const [ConFirmed, SetConFirmed] = useState(false);
  const [Annouce, SetAnnouce] = useState(false);

  function ConfirmHandler(enterInput) {
    if (enterInput === "") return;
    let input = Number(enterInput);
    if (input > 0 && Number.isInteger(input)) SetConFirmed(true);
    else {
      SetAnnouce(true);
    }
    SetInput(input);
  }
  function UnConfirmHandler() {
    SetConFirmed(false);
  }
  function UnAnnouce() {
    SetAnnouce(false);
  }


  return (
    <> 
      <StatusBar style='light' />
      <View style = {styles.container}>
        <ImageBackground style={styles.ImageBack} source={require('../GameApp/assets/images/jackpot.jpg') } >
          <View style = {styles.inner}>
            <Text style={styles.text}> Guess My Number </Text>
            <Firststart Confirmed = {ConfirmHandler} />
          </View>
          {ConFirmed && <Control UnConFirmed={UnConfirmHandler} Number={InputUse} />} 
          {Annouce && <Annoucement SetTrue={UnAnnouce}/>}
        </ImageBackground>
      </View>
    </>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  ImageBack: {
    flex:1,
    flexDirection:'column'
  },
  inner: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    alignItems:'center'
  },
  text: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 16,
    width: 280,
    height: 65,
    textAlign: 'center',
    marginBottom: 40,
    fontSize: 21,
    padding:16
  
  }
  , dumptext: {
    color: 'white',
  }
});
