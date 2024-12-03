import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/ProductList.styles.js";

export default function FilterModal({
  isModalVisible,
  closeModal,
  brands,
  brandSearchQuery,
  setBrandSearchQuery,
  selectedBrands,
  toggleBrand,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ScrollView>
            <Text style={styles.modalTitle}>Filter</Text>

            <TextInput
              placeholder="Search Brand"
              style={styles.searchContainer}
              value={brandSearchQuery}
              onChangeText={setBrandSearchQuery}
            />

            <Text style={styles.modalLabel}>Brand:</Text>
            {brands
              .filter((brand) =>
                brand.includes(brandSearchQuery.trim().toLowerCase())
              )
              .map((brand) => (
                <TouchableOpacity
                  key={brand}
                  style={styles.optionRow}
                  onPress={() => toggleBrand(brand)}
                >
                  <Ionicons
                    name={
                      selectedBrands.includes(brand)
                        ? "checkbox"
                        : "square-outline"
                    }
                    size={20}
                    color={selectedBrands.includes(brand) ? "#3366FF" : "#ccc"}
                  />
                  <Text style={styles.optionText}>
                    {brand.charAt(0).toUpperCase() + brand.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}

            <Text style={styles.modalLabel}>Price Range:</Text>
            <View style={styles.priceRangeContainer}>
              <TextInput
                style={styles.priceInput}
                placeholder="Min Price"
                keyboardType="numeric"
                value={minPrice}
                onChangeText={setMinPrice}
              />
              <TextInput
                style={styles.priceInput}
                placeholder="Max Price"
                keyboardType="numeric"
                value={maxPrice}
                onChangeText={setMaxPrice}
              />
            </View>

            <TouchableOpacity style={styles.applyButton} onPress={closeModal}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
