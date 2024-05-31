import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const headerImage = require('./assets/images/header_image.png');
const searchImage = require('./assets/images/search_image.png');
export default function App() {
  return (
    <View style={styles.container}>
      <View  style={styles.header}>
        <View style={styles.headerText}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Hello, Devs</Text>
          <Text>14 tasks today</Text>
        </View>
        <View>
          <Image style={{width: 55, height: 55, backgroundColor: 'white', borderRadius: 50}} source={headerImage}/>
        </View>
      </View>
      <View style={{flexDirection: 'row',}}>
        <TextInput style={styles.search}>
          <Text style={{paddingLeft: 10}}>Search</Text>
        </TextInput>
        <Image source={searchImage} style={{width: 55, height: 55}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8D1BA',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'transparent',
    width: 354,
    height: 52,
    margin: {
      marginTop: 52,
      marginRight: 0,
      marginBottom: 0,
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
    marginRight: 30}
});
