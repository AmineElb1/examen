import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    setSearchQuery(query);

    try {
      const response = await axios.get(`http://10.0.2.2:32783/api/drinks`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <ScrollView style={styles.resultsContainer}>
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <TouchableOpacity
              style={styles.resultItem}
              key={result.id}
              onPress={() => viewProductDetails(result.id)}
            >
              
              <Text style={styles.resultTitle}>{result.title}</Text>
              <Text style={styles.resultDetails}>€{result.price} - {result.country}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text>No results found for "{searchQuery}".</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: '#fff',
  },
  searchContainer: {
    backgroundColor: '#8a2be2',
    padding: 16,
    borderRadius: 8,
    margin: 8,
    marginTop: 30,
  },
  input: {
    height: 20,
    color: '#fff',
  },
  resultsContainer: {
    marginTop: 20,
  },
  resultItem: {
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 15,
    borderRadius: 8,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  resultDetails: {
    fontSize: 14,
    color: '#555',
  },
});

export default SearchScreen;
