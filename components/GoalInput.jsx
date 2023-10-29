import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'

const GoalInput = ({ addGoalHandler, isModalOpen, handleModalClose }) => {
    const [goal, setGoal] = useState("");

    const goalInputHandler = (text) => {
        setGoal(text);
    }

    return (
        <Modal visible={isModalOpen} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/goal.png')}
                />
                <TextInput
                    placeholder='Your course goal!'
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={goal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='Close'
                            onPress={handleModalClose}
                            color="#f31282"
                        />
                    </View>
                    
                    <View style={styles.button}>
                        <Button
                            title='Add Goal'
                            onPress={() => {
                                addGoalHandler(goal);
                                setGoal('');
                            }}
                            color="#5e0acc"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
        alignItems: "center",
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        borderWidth: 1,
        borderRadius: 6,
        width: "100%",
        padding: 12,
        color: '#120438'
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        height: 100,
        width: 100,
        margin: 20,
    }
})