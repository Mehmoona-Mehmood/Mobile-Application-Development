import React, { useRef, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import CategoryCard from '../components/CategoryCard';

const HomeScreen = ({ navigation }) => {
  const categories = [
    {
      id: 1,
      title: 'Winter Collection',
      image: require('../../assets/winter-collection.jpg'),
      screen: 'Winter',
    },
    {
      id: 2,
      title: 'Summer Collection',
      image: require('../../assets/summer-collection.png'),
      screen: 'Summer',
    },
    {
      id: 3,
      title: 'Perfumes',
      image: require('../../assets/perfumes.jpeg'),
      screen: 'Perfumes',
    },
    {
      id: 4,
      title: 'Sale',
      image: require('../../assets/sale.jpeg'),
      screen: 'Sale',
    },
  ];

  // Animation for Shop Now button
  const buttonScale = useRef(new Animated.Value(1)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Button fade in and pulse animation
    Animated.sequence([
      Animated.timing(buttonOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.loop(
        Animated.sequence([
          Animated.timing(buttonScale, {
            toValue: 1.1,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(buttonScale, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ])
      ),
    ]).start();
  }, []);

  const handleShopNow = () => {
    // Navigate to Sale screen when Shop Now pressed
    navigation.navigate('Sale');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome to Glamify</Text>
      <Text style={styles.subHeader}>Discover the latest fashion trends</Text>
      
      {/* Horizontal Banner with Shop Now Button */}
      <View style={styles.bannerContainer}>
        <Image 
          source={require('../../assets/sale.jpg')} // Add your horizontal banner image
          style={styles.bannerImage}
          resizeMode="cover"
        />
        <View style={styles.bannerOverlay} />
        <Animated.View 
          style={[
            styles.buttonContainer,
            {
              opacity: buttonOpacity,
              transform: [{ scale: buttonScale }]
            }
          ]}
        >
          <TouchableOpacity style={styles.shopNowButton} onPress={handleShopNow}>
            <Text style={styles.shopNowText}>SHOP NOW</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
      
      
      <View style={styles.categories}>
        {categories.map((category) => (
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
    backgroundColor: '#ffffff',
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
  subHeader: {
    fontSize: 15,
    fontFamily: 'Allura-Regular',
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
    fontStyle: 'italic',
    lineHeight: 28,
  },
  // Banner Styles
  bannerContainer: {
    height: 180,
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  shopNowButton: {
    backgroundColor: '#ff6b6b',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  shopNowText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  categoriesTitle: {
    fontSize: 22,
    fontFamily: 'Aqbalamo',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
});

export default HomeScreen;