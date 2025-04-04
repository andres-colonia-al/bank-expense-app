import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/DetailsScreenStyles'; 

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="settings-outline" size={22} color="#0066ff" />
        <Text style={styles.navText}>Admin</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="people-outline" size={22} color="#0066ff" />
        <Text style={styles.navText}>Usuarios</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="briefcase-outline" size={22} color="#0066ff" />
        <Text style={styles.navText}>Depts.</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
