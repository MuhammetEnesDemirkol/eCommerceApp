import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/ProductDetail.styles.js";
import { useFavorites } from "../context/FavoritesContext";
import Navbar from "./Navbar.js";
import { useCart } from "../context/CartContext";

// Renk sabitleri
const COLORS = {
  favorite: "gold",
  primary: "#3366FF",
};

// Uyarı mesajı göstermek için yardımcı fonksiyon
const showAlert = (title, message) => {
  Alert.alert(title, message);
};

// Ürün başlığı bileşeni
const ProductHeader = ({ product, isFavorite, onToggleFavorite }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{product.name}</Text>
    <TouchableOpacity onPress={onToggleFavorite}>
      <Ionicons
        name={isFavorite ? "star" : "star-outline"}
        size={28}
        color={COLORS.favorite}
      />
    </TouchableOpacity>
  </View>
);

// Ürün detayları bileşeni
export default function ProductDetail({ route }) {
  const { product } = route.params;
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();

  // Ürün favorilerde mi kontrol et
  const isFavorite = favorites.some((fav) => fav.id === product.id);

  // Favori durumu değiştirildiğinde çağrılan fonksiyon
  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
      showAlert("Removed", `${product.name} has been removed from favorites!`);
    } else {
      addToFavorites(product);
      showAlert("Added", `${product.name} has been added to favorites!`);
    }
  };

  // Ürünü sepete ekleme fonksiyonu
  const handleAddToCart = () => {
    addToCart(product);
    showAlert("Success", `${product.name} has been added to your cart!`);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Ürün başlığı bileşeni */}
        <ProductHeader
          product={product}
          isFavorite={isFavorite}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* Ürün görseli */}
        <Image source={{ uri: product.image }} style={styles.productImage} />

        {/* Ürün detayları */}
        <View style={styles.detailsContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>Price: {product.price} ₺</Text>
        </View>
      </ScrollView>
      {/* Sepete ekleme butonu */}
      <TouchableOpacity
        style={[
          styles.addToCartButton,
          { position: "absolute", bottom: 60, left: 20, right: 20 },
        ]}
        onPress={handleAddToCart}
      >
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
      <Navbar style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
    </View>
  );
}
