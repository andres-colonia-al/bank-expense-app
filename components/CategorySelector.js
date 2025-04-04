import React from "react";
import { TouchableOpacity, Text, View, Modal, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { formatCategoryName } from "../utils/categoryUtils";
import { transactionStyles as styles } from "../styles/TransactionStyles";

const CategorySelector = ({ category, setCategory, categoryOptions }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <>
      <TouchableOpacity
        style={styles.selectorContainer}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.selectorText}>{formatCategoryName(category)}</Text>
        <Ionicons name="chevron-down" size={20} color="#555" />
      </TouchableOpacity>

      {/* Modal para selección de categoría */}
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
                    category === item && styles.selectedCategory,
                  ]}
                  onPress={() => {
                    setCategory(item);
                    setModalVisible(false);
                  }}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      category === item && styles.selectedCategoryText,
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
    </>
  );
};

export default CategorySelector;
