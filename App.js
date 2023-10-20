import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, Text, Image } from 'react-native-elements';

import { data } from './dummyData.js';

const arrayOfData = data.products;
export default function App() {
  return (
    <View style={st.container}>
      {/* <StatusBar style="auto" /> */}
      <ScrollView>
        {arrayOfData.map((item, index) => (
          <Card key={item?.id} containerStyle={st.card}>
            <Image source={{ uri: item?.thumbnail }} style={st.image} />
            <Text style={st.title}>{item?.title}</Text>
            <Text style={st.description}>{item?.description}</Text>
            <Text style={st.price}>Price: ${item?.price}</Text>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#f7f7f7",
  },
  image: {
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});