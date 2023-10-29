import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

const GoalItem = ({ text, deleteGoalHandler, id }) => {
    return (
        <View style={styles.goalItem}>
            <Pressable 
                onPress={() => { deleteGoalHandler(id) }}
                android_ripple={{color: '#210644'}}
                // IOS alternative for ripple effect
                style={(pressableData) => {
                    pressableData.pressed && styles.pressedItem
                }}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>

    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        marginVertical: 8,
        marginHorizontal: 25,
        backgroundColor: "#5e0acc",
        borderRadius: 8,
    },
    goalText: {
        color: "white",
        textAlign: "center",
        textTransform: "capitalize",
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5,
    }
})