import { StyleSheet,Modal, View, Text, Pressable, ImageBackground} from 'react-native'


function Annoucement(props) {
    function Turnoff() {
        props.SetTrue();
    }
    return (<Modal animationType='fade'>
        <ImageBackground style={styles.Background} source={require('../assets/images/jackpot.jpg')}>
            <View style = {styles.AnnouceBackground}>
                <View style= {styles.Container}>
                    <View style = {styles.AnnoucementText}>
                        <Text style={styles.DumpText}>Invalid Input! Please Try Again</Text>
                    </View>
                    <View style={styles.ContainerButton}>
                        <Pressable style={styles.Button} onPress={Turnoff}>
                            <Text style={styles.ButtonText}>OK</Text>
                        </Pressable>  
                    </View>
                </View>
            </View>
        </ImageBackground>
    </Modal> )
}

const styles = StyleSheet.create({
    AnnouceBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.75)',
        alignItems: 'center',
    },
    Background: {
        flex: 1,
        flexDirection: 'column',
    },
    Container: {
        width: 250,
        height: 100,
        borderWidth: 1,
        borderRadius:20,
        backgroundColor: 'white',
        marginTop: '80%',
        alignItems: 'center'
    },
    DumpText: {
        color: 'black',
        fontSize: 15
    },
    AnnoucementText: {
        marginVertical: 18,
    },
    ContainerButton: {
        borderTopWidth: 1,
        borderTopColor: '#cccccc',
        width: 250,
        alignItems:'center'
        
    },
    Button: {
        width: 40,
        alignItems: 'center',
        marginTop: 4
        
    },
    ButtonText: {
        color: 'black',
        fontSize: 17
    }
});
export default Annoucement;
