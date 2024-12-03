import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/Favorites.styles";
import Navbar from "./Navbar";
import { useFavorites } from "../context/FavoritesContext";
import { useNavigation } from "@react-navigation/native";

// Uyarı mesajı göstermek için yardımcı fonksiyon
const showAlert = (title, message) => {
  Alert.alert(title, message);
};

// Favori ürün bileşeni
const FavoriteItem = ({ item, onRemove, onViewDetails }) => (
  <View style={styles.productCard}>
    {/* Ürün Bilgileri */}
    <View style={styles.detailsContainer}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price} ₺</Text>
    </View>

    {/* Favorilerden Çıkarma ve Ürün Detayına Gitme Butonları */}
    <View style={styles.actionButtons}>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => onRemove(item.id)}
      >
        <Ionicons name="trash-outline" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.detailsButton}
        onPress={() => onViewDetails(item)}
      >
        <Text style={styles.detailsButtonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();
  const navigation = useNavigation();

  // Favorilerden ürün çıkarma fonksiyonu
  const handleRemoveFromFavorites = (productId) => {
    removeFromFavorites(productId);
    showAlert("Removed", "The product has been removed from favorites!");
  };

  // Ürün detaylarına gitme fonksiyonu
  const handleViewDetails = (product) => {
    navigation.navigate("ProductDetail", { product });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Your Favorites</Text>
      {favorites.length === 0 ? (
        <Text style={styles.emptyMessage}>
          You have no favorite products yet.
        </Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FavoriteItem
              item={item}
              onRemove={handleRemoveFromFavorites}
              onViewDetails={handleViewDetails}
            />
          )}
          contentContainerStyle={{ paddingBottom: 80 }} // Navbar ile çakışmayı engellemek için alt boşluk
        />
      )}
      <Navbar />
    </View>
  );
}
