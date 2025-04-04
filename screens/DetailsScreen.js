import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, Alert, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { getTransactionsByUser, deleteTransaction } from '../services/transactionService';
import NavBar from '../components/NavBar';
import TransactionItem from '../components/TransactionItem';
import { styles } from '../styles/DetailsScreenStyles';
import { Ionicons } from 'react-native-vector-icons';


export default function DetailsScreen({ navigation }) {
  const [transactions, setTransactions] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTransactions = async () => {
    try {
      setIsLoading(true);
      const storedUser = await AsyncStorage.getItem('user');
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      const transactionsData = await getTransactionsByUser(parsedUser.idUser);
      setTransactions(transactionsData);
    } catch (error) {
      Alert.alert('Error', 'No se pudieron cargar las transacciones.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (transactionId) => {
    Alert.alert(
      "Confirmar eliminación",
      "¿Estás seguro de que quieres eliminar esta transacción?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteTransaction(transactionId);
              Alert.alert('Éxito', 'Transacción eliminada con éxito.');
              fetchTransactions(); 
            } catch (error) {
              Alert.alert('Error', 'No se pudo eliminar la transacción.');
            }
          }
        }
      ]
    );
  };

  useFocusEffect(
    useCallback(() => {
      fetchTransactions();
    }, [])
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Mis Transacciones</Text>
          {user && (
            <Text style={styles.welcomeText}>Hola, {user.nameUser}</Text>
          )}
        </View>

        {/* Menú de navegación */}
        <NavBar />

        {/* Lista de transacciones */}
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.idTransaction.toString()}
          contentContainerStyle={styles.transactionsList}
          ListEmptyComponent={() => (
            <View style={styles.emptyState}>
              <Ionicons name="receipt-outline" size={60} color="#ccc" />
              <Text style={styles.emptyStateText}>No hay transacciones para mostrar</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <TransactionItem item={item} onDelete={handleDelete} />
          )}
        />

        {/* Botón flotante */}
        <TouchableOpacity 
          style={styles.fabButton}
          onPress={() => navigation.navigate('NewTransaction')}>
          <Ionicons name="add" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
