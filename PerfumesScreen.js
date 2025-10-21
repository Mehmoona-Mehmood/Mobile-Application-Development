import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CategoryCard from '../components/CategoryCard';

const PerfumesScreen = ({ navigation }) => {
  const subcategories = [
    {
      id: 1,
      title: 'Men',
      image: require('../../assets/men-perfumes.jpeg'),
      screen: 'MenPerfume',
    },
    {
      id: 2,
      title: 'Women',
      image: require('../../assets/women-perfumes.jpeg'),
      screen: 'WomenPerfume',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Perfumes Collection</Text>
      <Text style={styles.description}>
        Find your signature scent from our exclusive perfume collection
      </Text>
      
      <View style={styles.categories}>
        {subcategories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            image={category.image}
            onPress={() => navigation.navigate(category.screen)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  header: {
    fontSize: 30,                    // Same as HomeScreen
    fontFamily: 'Aqbalamo',          // Aqbalamo font for header
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
    color: '#ff6b6b',                // Same coral color
    textShadowColor: 'rgba(255, 107, 107, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    letterSpacing: 1,
  },
  description: {
    fontSize: 14,                    // Same as HomeScreen subHeader
    fontFamily: 'Allura-Regular',    // Allura font for description
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
    fontStyle: 'italic',
    lineHeight: 28,
  },
  categories: {
     flexDirection: 'row',
    justifyContent: 'center',        // ← Cards center align
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 20,                         // ← Equal spacing
  },
});

export default PerfumesScreen;