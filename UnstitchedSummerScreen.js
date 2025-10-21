import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../../components/ProductCard';

const UnstitchedSummerScreen = () => {
  const products = [
    {
      id: 1,
      name: 'Summer Cotton Unstitched',
      price: 4500,
      image: require('../../../assets/cotton.jpeg'),
    },
    {
      id: 2,
      name: 'Summer Lawn 3-Piece',
      price: 5500,
      image: require('../../../assets/lawn.jpeg'),
    },
    {
      id: 3,
      name: 'Summer Voile Collection',
      price: 4500,
      image:require('../../../assets/voile.jpeg'),
    },
    {
      id: 4,
      name: 'Voile Anarkali Suit',
      price: 5100,
      image: require('../../../assets/voile-anarkali.jpeg'),
    },
    {
      id: 5,
      name: 'Summer Maxi Dress',
      price: 4900,
      image: require('../../../assets/summer-maxi.jpeg'),
    },
    {
      id: 6,
      name: 'Chikankari Cotton Suit',
      price: 5400,
      image: require('../../../assets/chikankari-suit.jpeg'),
    },
    {
      id: 7,
      name: '2 piece CO-ORD Set',
      price: 4700,
      image: require('../../../assets/coord-set.jpeg'),
    },
    {
      id: 8,
      name: 'Embroided Lawn Suit',
      price: 6200,
      image: require('../../../assets/lawn-suit.jpeg'),
    }
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Summer Unstitched Collection</Text>
      <Text style={styles.description}>
        Breathable fabrics perfect for summer tailoring
      </Text>
      
      <View style={styles.products}>
            {products.map((product) => (
            <View key={product.id} style={styles.productWrapper}>
            <ProductCard
            name={product.name}
            price={product.price}
            image={product.image}
            onAddToCart={() => handleAddToCart(product.name)}
      />
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
     fontSize: 16,                    
    fontFamily: 'Allura-Regular',    
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
    fontStyle: 'italic',
    lineHeight: 28,
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
});

export default UnstitchedSummerScreen;