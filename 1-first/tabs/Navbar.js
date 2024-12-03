import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/Navbar.styles";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";

// Navbar bileşeni
export default function Navbar() {
  const navigation = useNavigation();
  const { cartItems } = useCart();
  const { favorites } = useFavorites();

  return (
    <View style={styles.navbar}>
      {/* Ana Sayfa Butonu */}
      <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
        <Ionicons name="home" size={28} style={styles.icon} />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>

      {/* Favoriler Butonu */}
      <TouchableOpacity onPress={() => navigation.navigate("Favorites")}>
        <View style={styles.cartButton}>
          <Ionicons name="star" size={28} style={styles.icon} />
          {favorites.length > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{favorites.length}</Text>
            </View>
          )}
        </View>
        <Text style={styles.iconText}>Favorites</Text>
      </TouchableOpacity>

      {/* Sepet Butonu */}
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <View style={styles.cartButton}>
          <Ionicons name="cart" size={28} style={styles.icon} />
          {cartItems.length > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartItems.length}</Text>
            </View>
          )}
        </View>
        <Text style={styles.iconText}>Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
