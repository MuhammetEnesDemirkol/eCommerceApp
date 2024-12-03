import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/ProductList.styles.js";

export default function SortModal({
  isSortModalVisible,
  closeSortModal,
  sortBy,
  setSortBy,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isSortModalVisible}
      onRequestClose={closeSortModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ScrollView>
            <Text style={styles.modalTitle}>Sort By:</Text>
            {["A/Z", "Z/A", "Price high to low", "Price low to High"].map(
              (option) => (
                <TouchableOpacity
                  key={option}
                  style={styles.optionRow}
                  onPress={() => {
                    setSortBy(option);
                    closeSortModal();
                  }}
                >
                  <Ionicons
                    name={
                      sortBy === option ? "radio-button-on" : "radio-button-off"
                    }
                    size={20}
                    color={sortBy === option ? "#3366FF" : "#ccc"}
                  />
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              )
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
