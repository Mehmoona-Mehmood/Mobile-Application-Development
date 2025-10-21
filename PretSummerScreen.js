import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../../components/ProductCard';

const PretSummerScreen = () => {
  const products = [
    {
      id: 1,
      name: 'Summer Cotton Dress',
      price: 4500,
      image: require('../../../assets/summer-cotton.jpeg'),
    },
    {
      id: 2,
      name: 'Summer Linen Suit',
      price: 5000,
      image: require('../../../assets/linen-suit.jpeg'),
    },
    {
      id: 3,
      name: 'Summer Casual Wear',
      price: 3500,
      image:require('../../../assets/casual.jpeg'),
    },
    {
      id: 4,
      name: 'Chiffon Summer Frok',
      price: 4200,
      image: require('../../../assets/chiffon-frok.jpeg'),
    },
    {
      id: 5,
      name: 'Cotton Embroidered Suit',
      price: 5500,
      image: require('../../../assets/cotton-embroidered.jpeg'),
    },
    {
      id: 6,
      name: 'Summer Lawn 3-Piece',
      price: 4800,
      image: require('../../../assets/lawn-3piece.jpeg'),
    },
    {
      id: 7,
      name: 'Georgette Printed Suit',
      price: 5200,
      image: require('../../../assets/georgette.jpeg'),
    },
    {
      id: 8,
      name: 'Linen Straight Kurti',
      price: 3800,
      image: require('../../../assets/linen-kurti.jpeg'),
    },
    {
      id: 9,
      name: 'Summer Organza Dress',
      price: 5800,
      image: require('../../../assets/organza-dress.jpeg'),
    },
    {
      id: 10,
      name: 'Cotton Palazzo Suit',
      price: 4600,
      image: require('../../../assets/plazo.jpeg'),
    }
  ];

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart!`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Summer Pret Collection</Text>
      <Text style={styles.description}>
        Light and comfortable summer ready-to-wear collection
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

export default PretSummerScreen;