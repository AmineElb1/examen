// CategorieScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const CategorieScreen = ({ route }) => {
  const { categoryName } = route.params;
  const [categorieArtikelen, setCategorieArtikelen] = useState([]);

  useEffect(() => {
    const fetchCategorieArtikelen = async () => {
      try {
        let url = "http://10.0.2.2:32783/api/drinks";
        if (Platform.OS === 'android') {
          url = "http://10.0.2.2:32783/api/drinks";
        } else {
          url = "https://dranken-app.ddev.site/api/drinks";
        }
        const response = await axios.get(url);
        if (response.data && Array.isArray(response.data.data)) {
          setCategorieArtikelen(response.data.data);
        } else {
          console.error('Invalid data structure in API response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCategorieArtikelen();
  }, [categoryName]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{`Artikelen in de categorie ${categoryName}`}</Text>
      <FlatList
        data={categorieArtikelen}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.artikel}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{`Prijs: €${item.price}`}</Text>
            {/* ... andere informatie over het artikel */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  artikel: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
});

export default CategorieScreen;
