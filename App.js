import { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [goalsList, setGoalsList] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
  }

  const addGoalHandler = (goal) => {
    if (goal && goal != "") {
      setGoalsList((prev) => [...prev, { id: Math.ceil(Math.random() * 10000), text: goal }]);
      handleModalClose();
    }
  }

  const deleteGoalHandler = (id) => {
    const filteredList = goalsList.filter((item) => item.id != id);
    setGoalsList(filteredList);
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <View style={styles.addGoal}>
          <Button
            title='Add New Goal'
            onPress={handleOpenModal}
            color="#5e0acc"
          />
        </View>
        <GoalInput
          addGoalHandler={addGoalHandler}
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
        />
        <View style={styles.goalsList}>
          <FlatList
            data={goalsList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  deleteGoalHandler={deleteGoalHandler}
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsList: {
    flex: 5,
  },
  addGoal: {
    marginBottom: 10,
  }
});
