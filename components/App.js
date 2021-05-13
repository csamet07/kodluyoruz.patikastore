import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import Search from './Search';
import product_data from './product_data.json';
import Product from './Product';

const App = () => {

  const renderItem = ({ item }) => (
    <Product data={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>
          PATIKASTORE
        </Text>
      </View>
      <Search />

      <FlatList
        data={product_data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns="2"
        style={styles.flat}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 12,
    marginBottom: 0,
    color: '#800080'
  },
  container : {
    backgroundColor: 'white',
    flex: 1
  },
  flat: {
    margin: 10
  }
});

export default App;