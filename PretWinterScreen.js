import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../../components/ProductCard';

const PretWinterScreen = () => {
  const products = [
    {
      id: 1,
      name: 'Embroidered Long shirt ',
      price: 3600,
      image: require('../../../assets/wi-1.jpeg'),
    },
    {
      id: 2,
      name: 'Winter Embroidered Suit',
      price: 6500,
      image: require('../../../assets/wi-2.jpg'),
    },
    {
      id: 3,
      name: 'Wool Blend Coat Dress',
      price: 7200,
      image: require('../../../assets/wi-3.jpeg'),
    },
    {
      id: 4,
      name: 'Winter Shawl Collar Suit',
      price: 5800,
      image: require('../../../assets/wi-4.jpeg'),
    },
    {
      id: 5,
      name: 'Velvet Anarkali Suit',
      price: 6800,
      image: require('../../../assets/wi-5.jpeg'),
    },
    {
      id: 6,
      name: 'Winter Cape Style Top',
      price: 6200,
      image: require('../../../assets/wi-6.jpeg'),
    },
    {
      id: 7,
      name: 'Brocade Winter Suit',
      price: 7500,
      image: require('../../../assets/wi-7.jpeg'),
    },
    {
      id: 8,
      name: 'Wool Blend Jacket Set',
      price: 6900,
      image: require('../../../assets/wi-8.jpeg'),
    },
    {
      id: 9,
      name: 'Winter High Neck Sweater',
      price: 5400,
      image: require('../../../assets/wi-9.jpeg'),
    },
    {
      id: 10,
      name: 'Embroidered Velvet Gown',
      price: 8200,
      image: require('../../../assets/wi-10.jpeg'),
    }
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Winter Pret Collection</Text>
      <Text style={styles.description}>
               Stitch your comfort and style with our winter collections dresses
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

export default PretWinterScreen;