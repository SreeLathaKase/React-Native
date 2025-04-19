import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import backgroundImg from '@/assets/images/iced-coffee.jpg';
import { Link } from 'expo-router';

const Index = () => {
  return (
      <View style={styles.container}>
        <ImageBackground source={backgroundImg} style={styles.image} resizeMode='cover'>
        <Text style={styles.text}>Coffee Shop</Text>
        <Pressable style={styles.button}>
        <Link href={'/explore'} style={styles.buttonText}>Explore My Coffee</Link>
        </Pressable>
        </ImageBackground>
      </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  image: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    width:'100%',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    padding: 4,
    marginBottom: 20, 
  },

  button: {
    height: 60,
    width: 200,
    borderRadius: 30,
    backgroundColor: '#ffffffcc',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginTop: 10,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});