import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../../components/ProductCard';

const MenPerfumeScreen = () => {
  const products = [
    {
      id: 1,
      name: 'Woody Elegance',
      price: 4000,
      image: require('../../../assets/per1.jpeg'),
      description: 'Rich woody notes with musk undertones'
    },
    {
      id: 2,
      name: 'Fresh Citrus',
      price: 5000,
      image: require('../../../assets/per2.jpeg'),
      description: 'Zesty citrus with herbal accents'
    },
    {
      id: 3,
      name: 'Midnight Oud',
      price: 3500,
      image: require('../../../assets/per3.jpeg'),
      description: 'Luxurious oud with spicy notes'
    },
    {
      id: 4,
      name: 'Ocean Breeze',
      price: 8000,
      image: require('../../../assets/per4.jpeg'),
      description: 'Fresh aquatic scent for everyday wear'
    },
    {
      id: 5,
      name: 'Leather & Tobacco',
      price: 4500,
      image: require('../../../assets/per5.jpeg'),
      description: 'Bold leather with warm tobacco notes'
    },
    {
      id: 6,
      name: 'Sport Energy',
      price: 6000,
      image: require('../../../assets/per6.jpeg'),
      description: 'Energetic scent for active lifestyle'
    },
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Men's Perfume Collection</Text>
      <Text style={styles.description}>
        Discover masculine fragrances that make a statement
      </Text>
      
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{products.length}</Text>
          <Text style={styles.statLabel}>Products</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>Rs 3500+</Text>
          <Text style={styles.statLabel}>Starting Price</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>⭐ 4.8</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
      </View>

      <View style={styles.products}>
        {products.map((product) => (
          <View key={product.id} style={styles.productWrapper}>
            <ProductCard
              name={product.name}
              price={product.price}
              image={product.image}
              onAddToCart={() => handleAddToCart(product.name)}
            />
            <Text style={styles.productDescription}>{product.description}</Text>
          </View>
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
    fontSize: 30,                    
    fontFamily: 'Aqbalamo',          
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
    color: '#ff6b6b',               
    textShadowColor: 'rgba(255, 107, 107, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    letterSpacing: 1,
  },
  description: {
    fontSize: 14,                   
    fontFamily: 'Allura-Regular',    
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
    fontStyle: 'italic',
    lineHeight: 28,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6b6b',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productWrapper: {
  width: '48%',
  maxWidth: 200, // Web par zyada bara nahi hoga
  marginBottom: 15,
},
  productDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
    paddingHorizontal: 5,
  },
});

export default MenPerfumeScreen;