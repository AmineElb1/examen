import React from 'react';  
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductDetailsScreen = ({ route }) => {
  const { dranken } = route.params;

  return (
    <View style={styles.container}>
        <Image source={{ uri: dranken.image.replace('https://dranken-app.ddev.site', 'http:///10.0.2.2:32783') }} style={styles.image} />
        <Text style={styles.title}>{dranken.title}</Text>
        <Text> {dranken.flavour}</Text>
        <Text style={styles.details}>{dranken.country}</Text>
        <Text style={styles.price}>€{dranken.price}</Text>
        <Text style={styles.details}>{dranken.details}</Text>
        <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.orderButtonText}>Bestel</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#4CAF50', // Groen voor de prijs
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
    orderButton: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 8,
        width: 300,
        alignItems: 'center',
    },
    orderButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ProductDetailsScreen;
