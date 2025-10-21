import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../../components/ProductCard';

const UnstitchedWinterScreen = () => {
  const products = [
    {
      id: 1,
      name: 'Winter Unstitched 3-Piece',
      price: 5500,
      image: require('../../../assets/wi1.jpg'),
    },
    {
      id: 2,
      name: 'Winter Unstitched 2-Piece',
      price: 3300,
      image: require('../../../assets/wi2.jpg'),
    },
    {
      id: 3,
      name: 'Winter Unstitched Luxury',
      price: 8000,
      image: require('../../../assets/wi3.jpg'),
    },
    {
      id: 4,
      name: 'Velvet Unstitched 3-Piece',
      price: 6500,
      image: require('../../../assets/wi4.jpeg'),
    },
    {
      id: 5,
      name: 'Wool Blend Unstitched',
      price: 7200,
      image: require('../../../assets/wi5.jpeg'),
    },
    {
      id: 6,
      name: 'Embroidered Winter Suit',
      price: 8500,
      image: require('../../../assets/wi6.jpeg'),
    },
    {
      id: 7,
      name: 'Brocade Unstitched Suit',
      price: 7800,
      image: require('../../../assets/wi7.jpeg'),
    },
    {
      id: 8,
      name: 'Winter Cotton Unstitched',
      price: 4800,
      image: require('../../../assets/wi8.jpeg'),
    },
    {
      id: 9,
      name: 'Premium Velvet Collection',
      price: 9200,
      image: require('../../../assets/wi9.jpeg'),
    },
    {
      id: 10,
      name: 'Winter Silk Blend Unstitched',
      price: 6800,
      image: require('../../../assets/wi10.jpeg'),
    }
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Winter Unstitched Collection</Text>
      <Text style={styles.description}>
        Create your own style with our premium winter unstitched fabrics
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

export default UnstitchedWinterScreen;