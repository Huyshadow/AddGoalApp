import { StyleSheet, View, Text, Pressable,} from 'react-native'

//Use Touchable-a component in React to Taps in App
//Pressable is the way forward

// remember Filter() and Map()...

//The bind() method creates a new function that, when called, has its 'this' keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

//android_ripple is used to create ripple ( MAGIC !!!)

// In Ios App, it quite a difficult, we can use style like this

//Modal is slide overlay which push up, pop up... style={({pressed}) => pressed && styles.delPressed}
function GoalItem(props) {
    
    function deleteGoal(id) {
        props.Delete(id);
    }
    
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: '#1c5485' }}
                onPress={deleteGoal.bind(this, props.check.id )}
                
            >
            
                <Text style={styles.goalText}>{props.check.text}</Text>
            </Pressable>
         </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        borderWidth: 1,
        marginHorizontal:1,
        marginTop:9,
        borderColor: "#6fc4db",
        borderRadius: 9,
        backgroundColor: '#add8e5',
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
    delPressed: {
        opacity:0.5,
    }
});
export default GoalItem