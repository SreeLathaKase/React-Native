import { View, Text, Image, StyleSheet, Pressable, FlatList } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import { coffeeMenu } from '@/constants/coffeeMenu';

export default function ExploreScreen() {
  return (
    <FlatList
      data={coffeeMenu}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <Link href={{ pathname: '/coffee/[id]', params: { id: item.id } }} asChild>
          <Pressable style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </Pressable>
        </Link>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f7f3ef',
    elevation: 2,
  },
  image: {
    height: 180,
    width: '100%',
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3e2723',
  },
  description: {
    color: '#5d4037',
    marginTop: 4,
  },
});