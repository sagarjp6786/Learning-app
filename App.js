import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , Dimensions} from 'react-native';

const PlaceholderImage = require('./assets/1.png');
export default function App() {
  // const width = Dimensions.get("window")
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <View style={styles.header}>
      <Text style={styles.textHi}>
      Hello,
      </Text>
      <Text style={styles.textDis}>
      Pavan</Text>
      </View>
      <View>
      <Text style={styles.textFeatured}>
      Featured
      </Text>
      </View>
      <View style={styles.cardOne}>
          <Text>Book for Meal</Text>
      </View>
      <View style={styles.cardTwo}>
          <Text>Get meal</Text>
      </View>
      <View style={styles.cardThree}>
          <Text>Payments</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight:0,
  },
  imageContainer: {
    alignSelf: "flex-end",  
  },
  image: {
    width: 270,
    height: 305,
  },
  textHi:{
    fontSize: 30,
    color: "#061428",
    fontWeight: '400',
  },
  textDis:{
    fontSize: 50,
    color: "#061428",
    fontWeight: '600',
  },
  header:{
    flexDirection: 'colum',
    position: 'absolute', 
    paddingTop: 200,
    paddingLeft: 20
  },
  cardOne:{
    backgroundColor:'#E7F7F7',
    padding: 40,
    borderRadius: 5,
    marginRight: 20
  },cardTwo:{
    backgroundColor:'#E8F2FB',
    padding: 40,
    borderRadius: 5,
    marginRight: 20,
    marginVertical: 15
  },cardThree:{
    backgroundColor:'#F1ECFA',
    padding: 40,
    borderRadius: 5,
    marginRight: 20,
  },
  textFeatured:{
    fontSize: 20,
    color: '#061428',
    fontWeight: '600',
    paddingBottom: 15,
    paddingTop: 30,
  }
});