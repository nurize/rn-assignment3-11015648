import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
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
        <Image source={searchImage} style={{width: 65, height: 55}}/>
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
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
            }}>Study</Text>
            <Text style={styles.categText}>12 Tasks</Text>
            <Image source={studyImage} style={styles.scrollImage}/>
          </View>
          <View style={styles.categories}>
            <Text style={{
              paddingTop: 15,
              paddingLeft: 15,
              fontWeight: 'bold',
              fontSize: 18
            }}>Exercise</Text>
            <Text style={styles.categText}>12 Tasks</Text>
            <Image source={exerciseImage} style={styles.scrollImage}/>
          </View>
        </ScrollView>
      </View>
      <View>
        <Text style={styles.scrollHeader}>Ongoing Task</Text>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    backgroundColor: '#E8D1BA',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    gap: 30,
  },
  header: {
    backgroundColor: 'transparent',
    width: 354,
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
    width: 180,
    height: 200,
    marginLeft: 10,
    marginRight: 10
  }, 
  scrollImage: {
    width: 140, 
    height: 140,
    marginLeft: 25,
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
    marginBottom: 10}
});
