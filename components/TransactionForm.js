import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createTransaction } from '../services/transactionFormService';
import CategorySelector from './CategorySelector';
import { transactionStyles as styles } from '../styles/TransactionStyles';
import { categoryOptions } from '../utils/categoryUtils';

const TransactionForm = ({ navigation }) => {
  const [nameTransaction, setNameTransaction] = useState('');
  const [descriptionTransaction, setDescriptionTransaction] = useState('');
  const [amountTransaction, setAmountTransaction] = useState('');
  const [category, setCategory] = useState(categoryOptions[0]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {

    if (!nameTransaction.trim()) {
      Alert.alert('Error', 'El nombre de la transacción es obligatorio');
      return;
    }
    
    if (!amountTransaction.trim() || isNaN(parseFloat(amountTransaction))) {
      Alert.alert('Error', 'Ingrese un monto válido');
      return;
    }

    try {
      setIsLoading(true);
      
      const transaction = {
        nameTransaction,
        descriptionTransaction,
        amountTransaction: parseFloat(amountTransaction),
        category,
      };

      await createTransaction(transaction);
      Alert.alert('Éxito', 'Transacción registrada correctamente');
      // Limpiar los campos después de guardar
      setNameTransaction('');
      setDescriptionTransaction('');
      setAmountTransaction('');
      setCategory(categoryOptions[0]);
      navigation.goBack();
    } catch (error) {
      console.error('Error al registrar transacción:', error);
      Alert.alert('Error', 'Hubo un problema al registrar la transacción');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="¿Qué compraste?"
          value={nameTransaction}
          onChangeText={setNameTransaction}
        />
      </View>
      
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Detalles adicionales"
          value={descriptionTransaction}
          onChangeText={setDescriptionTransaction}
          multiline={true}
          numberOfLines={3}
        />
      </View>
      
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Monto</Text>
        <TextInput
          style={styles.input}
          placeholder="0.00"
          keyboardType="decimal-pad"
          value={amountTransaction}
          onChangeText={setAmountTransaction}
        />
      </View>
      
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Categoría</Text>
        <CategorySelector 
          category={category} 
          setCategory={setCategory} 
          categoryOptions={categoryOptions} 
        />
      </View>

      <TouchableOpacity 
        style={[styles.button, isLoading && styles.buttonDisabled]} 
        onPress={handleSubmit}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? 'Registrando...' : 'Registrar Transacción'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionForm;