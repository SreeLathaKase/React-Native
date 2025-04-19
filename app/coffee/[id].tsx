import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';
  import { useLocalSearchParams } from 'expo-router';
  import React, { useState } from 'react';
  import { coffeeMenu } from '@/constants/coffeeMenu';
  
  export default function CoffeeDetailScreen() {
    const { id } = useLocalSearchParams();
    const coffee = coffeeMenu.find(item => item.id === id);
  
    const [milk, setMilk] = useState('Whole');
    const [syrup, setSyrup] = useState('Vanilla');
    const [size, setSize] = useState('Medium');
  
    const milkOptions = ['Whole', 'Skim', 'Almond', 'Oat'];
    const syrupOptions = ['Vanilla', 'Hazelnut', 'Caramel', 'None'];
    const sizeOptions = ['Small', 'Medium', 'Large'];
  
    if (!coffee) return <Text style={styles.notFound}>Coffee not found.</Text>;
  
    const handleOrder = () => {
      alert(`You ordered a ${size} ${coffee.name} with ${milk} milk and ${syrup} syrup!`);
    };
  
    const renderOptions = (options: string[], selected: string, setSelected: (value: string) => void) => (
      <View style={styles.optionRow}>
        {options.map(option => (
          <TouchableOpacity
            key={option}
            onPress={() => setSelected(option)}
            style={[
              styles.optionButton,
              selected === option && styles.optionButtonSelected,
            ]}
          >
            <Text
              style={[
                styles.optionText,
                selected === option && styles.optionTextSelected,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  
    return (
      <ScrollView style={styles.container}>
        <Image source={coffee.image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.name}>{coffee.name}</Text>
          <Text style={styles.desc}>{coffee.description}</Text>
  
          <Text style={styles.infoText}>Origin: {coffee.origin}</Text>
          <Text style={styles.infoText}>Strength: {coffee.strength}/5</Text>
  
          <Text style={styles.section}>☕ Customize Your Drink</Text>
  
          <Text style={styles.label}>Milk Type:</Text>
          {renderOptions(milkOptions, milk, setMilk)}
  
          <Text style={styles.label}>Syrup:</Text>
          {renderOptions(syrupOptions, syrup, setSyrup)}
  
          <Text style={styles.label}>Size:</Text>
          {renderOptions(sizeOptions, size, setSize)}
  
          <TouchableOpacity onPress={handleOrder} style={styles.orderButton}>
            <Text style={styles.orderButtonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    image: {
      width: '100%',
      height: 250,
    },
    content: {
      padding: 16,
    },
    name: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#4e342e',
    },
    desc: {
      marginTop: 8,
      fontSize: 16,
      color: '#6d4c41',
      marginBottom: 12,
    },
    infoText: {
      color: '#5e4337',
      fontSize: 14,
      marginBottom: 4,
    },
    section: {
      fontSize: 20,
      marginTop: 24,
      marginBottom: 12,
      fontWeight: 'bold',
      color: '#3e2723',
    },
    label: {
      fontSize: 16,
      marginTop: 12,
      marginBottom: 6,
      color: '#5d4037',
    },
    optionRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 12,
    },
    optionButton: {
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      marginRight: 8,
      marginBottom: 8,
      backgroundColor: '#f5f5f5',
    },
    optionButtonSelected: {
      backgroundColor: '#964B00',
      borderColor: '#964B00',
    },
    optionText: {
      color: '#333',
      fontSize: 14,
    },
    optionTextSelected: {
      color: '#fff',
      fontWeight: '600',
    },
    orderButton: {
      backgroundColor: '#964B00',
      paddingVertical: 14,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 12,
    },
    orderButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '600',
    },
    notFound: {
      marginTop: 100,
      textAlign: 'center',
      fontSize: 18,
      color: 'gray',
    },
  });  