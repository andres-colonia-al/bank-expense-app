import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import TransactionForm from '../components/TransactionForm';
import { transactionStyles as styles } from '../styles/TransactionStyles';

export default function NewTransaction({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Nueva Transacción</Text>
        <TransactionForm navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}