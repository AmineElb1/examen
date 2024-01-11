import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: 'https://m.media-amazon.com/images/I/410WufnDBlL._AC_UF1000,1000_QL80_.jpg' }} />
      <Text style={styles.text}>Juice World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain', // Adjust this based on your image aspect ratio
  },
  text: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default CartScreen;
