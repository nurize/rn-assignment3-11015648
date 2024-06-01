import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React from 'react';

const headerImage = require('./assets/images/header_image.png');
const searchImage = require('./assets/images/search_image.png');
const exerciseImage = require('./assets/images/exercise_image.jpg');
const searchSymbol = require('./assets/images/search-symbol.png');
const studyImage = require('./assets/images/study_image.jpg')

const MyButton = () => {
  return (
    <TouchableOpacity>
      <View>
        <Image source={searchImage} style={{width: 60, height: 55}}/>
      </View>
    </TouchableOpacity>
  );
};

const Tasks = [
  {task: 'Mobile App Development', key: 1},
  {task: 'Web Development', key: 2},
  {task: 'Push ups', key: 3},
  {task: 'Study', key: 4},
  {task: 'Laundry', key: 5},
];

const Task = ({task}) => (
  <View style={styles.item}>
    <Text style={styles.tasks}>{task}</Text>
  </View>
);

export default function App() {


  return (
    <View style={styles.container}>
      <ScrollView style={styles.Container}>
      <View  style={styles.header}>
        <View style={styles.headerText}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Hello, Devs</Text>
          <Text>14 tasks today</Text>
        </View>
        <View>
          <Image style={{width: 55, height: 55, backgroundColor: 'white', borderRadius: 50}} source={headerImage}/>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginBottom: 30, marginTop: 35}}>
        <TextInput style={styles.search}>
          <Image source={searchSymbol} style={{width: 20, height: 20, margin: 10}}/>
          <Text style={{paddingLeft: 20, fontSize: 20}}> Search </Text>
        </TextInput>
        < MyButton />
      </View>

      <View style={{flexDirection: 'column', justifyContent: 'flex-start', marginBottom: 35}}>
        <Text style={styles.scrollHeader}>Categories</Text>
        <ScrollView horizontal={true} style={{flexDirection: 'row',}}>
          <View style={styles.categories}>
            <Text style={{
              paddingTop: 15,
              paddingLeft: 15, 
              fontWeight: 'bold',
              fontSize: 18
            }}>Exercise</Text>
            <Text style={styles.categText}>12 Tasks</Text>
            <Image source={studyImage} style={styles.scrollImage}/>
          </View>
          <View style={styles.categories}>
            <Text style={{
              paddingTop: 15,
              paddingLeft: 15,
              fontWeight: 'bold',
              fontSize: 18
            }}>Study</Text>
            <Text style={styles.categText}>12 Tasks</Text>
            <Image source={exerciseImage} style={styles.scrollImage}/>
          </View>
        </ScrollView>
      </View>
      <View>
        <Text style={styles.scrollHeader}>Ongoing Task</Text>
        <FlatList
          data = {Tasks}
          renderItem={({item}) => 
            <Task task={item.task}/>
          }
          keyExtractor={item => item.id}
        />
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    backgroundColor: '#F7F0E8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    gap: 30,
  },
  Container: {
    marginLeft: 20,
    marginRight: 20,
  }, 
  header: {
    backgroundColor: 'transparent',
    width: 390,
    height: 52,
    margin: {
      marginTop: 52,
      marginRight: 0,
      marginBottom: 30,
      marginLeft: 20,
    },
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
    backgroundColor: 'white', 
    width: 300, 
    height: 55, 
    borderRadius: 10, 
    flexDirection: 'row', 
    marginRight: 30,
    paddingLeft: 20,
  }, 
  categories: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 200,
    height: 200,
    marginRight: 10
  }, 
  scrollImage: {
    width: 140, 
    height: 140,
    marginLeft: 35,
    marginRight: 10,
  }, 
  categText: {
      paddingLeft: 15,
      paddingTop: 0,
  },
  scrollHeader: {
    fontSize: 23, 
    fontWeight: 'bold', 
    alignItems: 'flex-start', 
    marginBottom: 10
  },
  tasks : {
    backgroundColor: 'white',
    borderRadius: 13,
    borderColor: '#E8D1BA',
    height: 130,
    paddingTop: 50,
    paddingBottom: 40,
    paddingLeft: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 17,
    borderWidth: 1
  }
});
