import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../../components/ProductCard';

const WomenPerfumeScreen = () => {
  const products = [
    {
      id: 1,
      name: 'Floral Bouquet',
      price: 4500,
      image: require('../../../assets/per-1.jpeg'),
      description: 'A beautiful blend of fresh flowers and delicate notes'
    },
    {
      id: 2,
      name: 'Rose Elegance',
      price: 6000,
      image: require('../../../assets/per-2.jpeg'),
      description: 'Classic rose fragrance with modern elegance'
    },
    {
      id: 3,
      name: 'Vanilla Dream',
      price: 5500,
      image: require('../../../assets/per-3.jpg'),
      description: 'Sweet vanilla with warm comforting notes'
    },
    {
      id: 4,
      name: 'Crystal Breeze',
      price: 5200,
      image: require('../../../assets/per-4.jpeg'),
      description: 'Fresh and airy with hints of jasmine and citrus'
    },
    {
      id: 5,
      name: 'Golden Aura',
      price: 7500,
      image: require('../../../assets/per-5.jpeg'), 
      description: 'Radiant blend of vanilla and sandalwood that glows with warmth'
    },
    {
      id: 6,
      name: 'Eternal Charm',
      price: 6800,
      image: require('../../../assets/per-6.jpeg'), 
      description: 'A timeless fragrance of jasmine, amber, and musk'
    },
    {
      id: 7,
      name: 'Summer Bloom',
      price: 4800,
      image: require('../../../assets/per-7.jpeg'), 
      description: 'Bright floral notes that bring sunshine to your day'
    },
    {
      id: 8,
      name: 'Velvet Bloom',
      price: 6200,
      image: require('../../../assets/per-8.jpeg'), 
      description: 'A soft floral scent that captures elegance and grace'
    },
    {
      id: 9,
      name: 'Midnight Whisper',
      price: 7200,
      image: require('../../../assets/per-9.jpeg'), 
      description: 'Deep and mysterious, perfect for evening wear'
    },
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Women's Perfume Collection</Text>
      <Text style={styles.description}>
        Discover elegant and captivating fragrances for women
      </Text>
      
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{products.length}</Text>
          <Text style={styles.statLabel}>Products</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>Rs 4500+</Text>
          <Text style={styles.statLabel}>Starting Price</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>⭐ 4.9</Text>
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
    padding: 15,
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
    fontSize: 16,                   
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

export default WomenPerfumeScreen;