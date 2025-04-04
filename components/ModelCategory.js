// src/components/ModalCategory.js
import React from 'react';
import { Modal, View, FlatList, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles';
import { formatCategoryName } from '../utils/formatCategory';

const ModalCategory = ({ modalVisible, setModalVisible, category, setCategory, categoryOptions }) => (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
    >
        <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>Seleccionar Categoría</Text>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Ionicons name="close" size={24} color="#555" />
                    </TouchableOpacity>
                </View>
                
                <FlatList
                    data={categoryOptions}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.categoryItem,
                                category === item && styles.selectedCategory
                            ]}
                            onPress={() => {
                                setCategory(item);
                                setModalVisible(false);
                            }}
                        >
                            <Text 
                                style={[
                                    styles.categoryText,
                                    category === item && styles.selectedCategoryText
                                ]}
                            >
                                {formatCategoryName(item)}
                            </Text>
                            {category === item && (
                                <Ionicons name="checkmark" size={20} color="#fff" />
                            )}
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    </Modal>
);

export default ModalCategory;
