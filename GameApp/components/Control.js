import { StyleSheet , View, Text, Modal, Pressable, ScrollView, ImageBackground } from "react-native";

function Control(props) {
    return (
        <Modal animationType="slide">
            <ImageBackground source={require('../assets/images/back.jpg')} style={styles.ContainerControl}>
                <View style={styles.BackgroundforStart} >
                    <Pressable onPress={props.UnConFirmed} style ={styles.TittleDecoration}>
                        <Text style={styles.Titletext}>Opponent's Guess</Text>
                    </Pressable>
                    <View style ={ styles.ResultDecoration}>
                        <Text style={styles.ResultText}>{props.Number}</Text>
                    </View>
                    <View style={styles.ControlDecoration}>
                        <View style={styles.TittleControl}>
                            <Text style={styles.TittleControlText}>Higher or Lower</Text>
                        </View>
                        <View style={styles.Buttonrow}>
                            <Pressable style={styles.button}  android_ripple={{color:'white'} }>
                                <Text style={styles.DumpText}> - </Text>
                            </Pressable>
                            <Pressable style={styles.button} android_ripple={{color:'white'}}>
                                <Text style={styles.DumpText}> + </Text>
                            </Pressable>
                        </View>
                    </View>
                    <ScrollView></ScrollView>
                </View>
            </ImageBackground>
        </Modal>    
    );
};
const styles = StyleSheet.create({
    ContainerControl: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    BackgroundforStart: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.75)',
        width: '100%',
        alignItems: 'center'
        
    },
    
    DumpText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 24,

    },
    Titletext: {
        color: 'white',
        fontSize: 25
    },
    TittleDecoration: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 12,
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginTop:'15%'
    },
    ResultDecoration: {
        marginTop:30,
        borderWidth: 1,
        borderColor: 'white',
        margin: '5%',
        width: '78%',
        height: 130,
        alignItems: 'center',
        borderRadius: 12,
        padding: 43,
    },
    ResultText: {
        color: 'white',
        fontSize:30,
    },
    ControlDecoration: {
        borderWidth: 1,
        borderColor: 'white',
        width: '78%',
        height: 150,
        borderRadius:12,
   
    },
    TittleControl: {
        flex: 1.2,
        color: 'white',
        alignItems: 'center',
    },
    TittleControlText: {
        color: 'white',
        fontSize: 20,
        marginTop:14,
    },
    Buttonrow: {
        flex: 1.8,
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




})
export default Control;