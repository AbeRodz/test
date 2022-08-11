import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GanttChart from 'react-native-gantt-chart'

export default function App() {
  let tasks =  [
    { _id: "1", name: "Task 1", "start": new Date(2018, 0, 1), "end": new Date(2018, 0, 3), progress: 0.25 },
    { _id: "1", name: "Task 1", "start": new Date(2018, 0, 1), "end": new Date(2018, 0, 4), progress: 0.25 },
    { _id: "2", name: "Task 2", "start": new Date(2018, 0, 1), "end": new Date(2018, 0, 4), progress: 0.5 },
    { _id: "3", name: "Task 3", "start": new Date(2018, 0, 1), "end": new Date(2018, 0, 6), progress: 0.5 }
    ];
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <GanttChart 
          data={tasks}
          numberOfTicks={5}
          onPressTask={task => alert(task.name)}
          gridMin={new Date(2018, 0, 1).getTime()}
          gridMax={new Date(2018, 0, 1).getTime()}
          colors={{
            barColorPrimary: '#0c2461',
            barColorSecondary: '#4a69bd',
            textColor: '#fff',
            backgroundColor: '#82ccdd'
          }}
          />
    </View>
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