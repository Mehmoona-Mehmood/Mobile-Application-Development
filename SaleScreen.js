import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';

const SaleScreen = () => {
  const saleProducts = [
    {
      id: 1,
      name: 'Winter Coat',
      price: 4500,
      image: require('../../assets/winter-coat.jpeg'),
    },
    {
      id: 2,
      name: 'Summer Dress',
      price: 3500,
      image:require('../../assets/summer-dress.jpg'),
    },
    {
      id: 3,
      name: 'Yara Lattafa Perfume',
      price: 3500,
      image:require('../../assets/perfume.jpeg'),
    },
    {
      id: 4,
      name: 'Casual Shirt',
      price: 2500,
      image:require('../../assets/casual-shirt.jpeg'),
    },
   {
      id: 5,
      name: 'Leather Jacket',
      price: 5500,
      image: require('../../assets/jacket.jpeg'),
    },
    {
      id: 6,
      name: 'Embroided Cotton Suit',
      price: 3200,
      image: require('../../assets/suitt.jpeg'),
    },
    {
      id: 7,
      name: 'CO-ORD Set',
      price: 2800,
      image: require('../../assets/set.jpeg'),
    },
    {
      id: 8,
      name: 'Designer Velvet Suit',
      price: 6600,
      image: require('../../assets/velvet.jpeg'),
    },
    {
      id: 9,
      name: 'Chiffon Frok',
      price: 2500,
      image: require('../../assets/frok.jpeg'),
    },
    {
      id: 10,
      name: 'Kurtti Palazoo',
      price: 3800,
      image: require('../../assets/pla.jpeg'),
    },
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Sale Items</Text>
      <Text style={styles.subHeader}>Limited time offers! Don't miss out.</Text>
      
      <View style={styles.products}>
         {saleProducts.map((product) => (
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
    fontSize: 30,                    // Same as HomeScreen
    fontFamily: 'Aqbalamo',          // Aqbalamo font for header
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
    color: '#ff6b6b',                // Same coral color
    textShadowColor: 'rgba(255, 107, 107, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    letterSpacing: 1
  },
  subHeader: {
    fontSize: 14,
    fontFamily: 'Allura-Regular',    // Allura font for description
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

export default SaleScreen;