import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import  ProductDetailsScreen from './productDetailsScreen';

const HomeScreen = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "http://10.0.2.2:32783/api/drinks";
        if (Platform.OS === 'android') {
          url = "http://10.0.2.2:32783/api/drinks";
        } else {
          url = "https://dranken-app.ddev.site/api/drinks";
        }
        const response = await axios.get(url);
        if (response.data && Array.isArray(response.data.data)) {
          setEntries(response.data.data);
        } else {
          console.error('Invalid data structure in API response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const navigation = useNavigation();

  const viewProductDetails = (dranken) => {
    navigation.navigate("ProductDetailsScreen", { dranken });
  };

  const navigateToCategorie = (categoryName) => {
    navigation.navigate('CategorieScreen', { categoryName });
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={{ uri: 'https://m.media-amazon.com/images/I/410WufnDBlL._AC_UF1000,1000_QL80_.jpg' }}
        />
        <Text style={styles.title}>Juice World</Text>
      </View>
      <Text style={styles.heading}>Nieuwste artikelen:</Text>
      <ScrollView horizontal={true} style={styles.articles}>
        {entries.slice(0, 4).map((entry) => (
          <TouchableOpacity
            style={styles.drinks}
            key={entry.id}
            onPress={() => viewProductDetails(entry)}
          >
            <Image style={styles.image} source={{ uri: entry.image.replace('https://dranken-app.ddev.site', 'http:///10.0.2.2:32783') }} />
            <Text style={styles.drinkTitle}> {entry.title} {entry.flavour}  </Text>
            <Text style={styles.drinkDetails}>€{entry.price} - {entry.country}</Text>
            <TouchableOpacity style={styles.orderButton} >
              <Text style={styles.orderButtonText}>Bestel</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={[styles.heading, styles.popularHeading]}>Populairste artikelen:</Text>  
      <ScrollView horizontal={true} style={styles.articles}>
       {entries.slice(4, 8).map((entry) => (
          <TouchableOpacity
            style={styles.drinks}
            key={entry.id}
            onPress={() => viewProductDetails(entry)}
          >
            <Image style={styles.image} source={{ uri: entry.image.replace('https://dranken-app.ddev.site', 'http:///10.0.2.2:32783') }} />
            <Text style={styles.drinkTitle}> {entry.title} {entry.flavour}  </Text>
            <Text style={styles.drinkDetails}>€{entry.price} - {entry.country}</Text>
            <TouchableOpacity style={styles.orderButton}>
              <Text style={styles.orderButtonText}>Bestel</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.categorie}>
        <Text style={[styles.heading]}>Categorie:</Text>
        <View style={styles.catContainer}>
            <TouchableOpacity style={[styles.catVak]} onPress={() => navigateToCategorie('Frisdrank')}>
                <Text style={[styles.catText]}>Frisdrank</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.catVak]} onPress={() => navigateToCategorie('Fruitsap')}>
                <Text style={[styles.catText]}>Fruitsap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.catVak]} onPress={() => navigateToCategorie('Energie')}>
                <Text style={[styles.catText]}>Energie drank</Text>
            </TouchableOpacity>
        </View>
    </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  logo: {
    width: 70,
    height: 70,
  },
  title: {
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  articles: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  popularHeading: {
    color: 'purple', 
  },
  drinks: {
    backgroundColor: '#fff',
    marginRight: 15, 
    padding: 15,
    borderRadius: 8,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  drinkTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  drinkDetails: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  orderButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categorie: {
    height: 400,
    marginBottom: 20,
  },
  catContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  catVak: {
    backgroundColor: '#fff',
    marginRight: 10,
    padding: 50,
    borderRadius: 8,
  },
  catText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
