import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles/DetailsScreenStyles';


const TransactionItem = ({ item, onDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('es-ES', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatCategory = (category) => {
    return category
      .split('_')
      .map(word => word.charAt(0) + word.slice(1).toLowerCase())
      .join(' ');
  };

  return (
    <View style={styles.transactionItem}>
      <View style={styles.transactionHeader}>
        <Text style={styles.transactionName} numberOfLines={1}>
          {item.nameTransaction}
        </Text>
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(item.idTransaction)}>
          <Ionicons name="trash-outline" size={20} color="#ff3b30" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.transactionBody}>
        <View style={styles.transactionInfo}>
          <Text style={styles.transactionDescription} numberOfLines={2}>
            {item.descriptionTransaction || "Sin descripción"}
          </Text>
          <Text style={styles.transactionDate}>
            {formatDate(item.dateTime)}
          </Text>
        </View>
        
        <View style={styles.transactionMeta}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>
              {formatCategory(item.category)}
            </Text>
          </View>
          <Text style={styles.transactionAmount}>
            ${parseFloat(item.amountTransaction).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TransactionItem;
