import {StyleSheet, View, Text} from 'react-native'

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.check.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    goalItem: {
        borderWidth: 2,
        marginHorizontal: 3,
        padding: 8,
        marginBottom: 9,
        borderColor: "#2469a7",
        borderRadius: 6,
        backgroundColor: '#91b4d3',
    },
    goalText: {
        color: 'white',
    }
});
export default GoalItem