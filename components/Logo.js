import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <View style={styles.logoPlaceholder}>
        <Text style={styles.logoText}>Bank</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#0066ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
