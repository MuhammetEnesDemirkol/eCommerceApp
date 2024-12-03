import React from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/Cart.styles.js";
import Navbar from "./Navbar";
import { useCart } from "../context/CartContext";

// Uyarı mesajı göstermek için yardımcı fonksiyon
const showAlert = (title, message, onConfirm) => {
  Alert.alert(title, message, [
    {
      text: "Cancel",
      style: "cancel",
    },
    {
      text: "Remove",
      onPress: onConfirm,
      style: "destructive",
    },
  ]);
};

// Sepet ürün bileşeni
const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => (
  <View style={styles.cartItem}>
    <View style={styles.itemInfoContainer}>
      {/* Ürün adı ve fiyatını göster */}
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price} ₺</Text>
    </View>
    <View style={styles.quantityContainer}>
      {/* Ürün miktarını azaltma butonu */}
      <TouchableOpacity
        style={styles.quantityButton}
        onPress={() => onDecrease(item.id)}
      >
        <Text style={styles.quantityButtonText}>-</Text>
      </TouchableOpacity>
      {/* Ürün miktarını göster */}
      <Text style={styles.quantityText}>{item.quantity}</Text>
      {/* Ürün miktarını artırma butonu */}
      <TouchableOpacity
        style={styles.quantityButton}
        onPress={() => onIncrease(item.id)}
      >
        <Text style={styles.quantityButtonText}>+</Text>
      </TouchableOpacity>
      {/* Ürünü sepetten kaldırma butonu */}
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() =>
          showAlert(
            "Remove Item",
            "Are you sure you want to remove this item from your cart?",
            () => onRemove(item.id)
          )
        }
      >
        <Ionicons name="trash" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  </View>
);

// Ana Sepet bileşeni
export default function Cart() {
  const { cartItems, setCartItems } = useCart();

  // Sepetteki tüm ürünlerin toplam fiyatını hesaplayan fonksiyon
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Ürün miktarını belirli bir değerle güncelleyen fonksiyon
  const updateQuantity = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + change } : item
      )
    );
  };

  // Ürün miktarını artıran fonksiyon
  const increaseQuantity = (id) => updateQuantity(id, 1);

  // Ürün miktarını azaltan fonksiyon (1'den aşağı düşmemesini sağlar)
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Ürünü sepetten kaldıran fonksiyon
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Sepet ekranı başlığı */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>E-Market</Text>
      </View>

      {/* Sepetteki ürünlerin listesi */}
      <FlatList
        contentContainerStyle={{ paddingBottom: 100 }}
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onRemove={removeFromCart}
          />
        )}
      />

      {/* Toplam fiyat ve satın alma işlemi butonunu içeren alt bölüm */}
      <View style={[styles.footer, { marginBottom: 80 }]}>
        <Text style={styles.totalText}>Total: {calculateTotal()} ₺</Text>
        <TouchableOpacity style={styles.completeButton}>
          <Text style={styles.completeButtonText}>Complete It</Text>
        </TouchableOpacity>
      </View>

      {/* Ekranın alt kısmında bulunan Navbar bileşeni */}
      <Navbar />
    </View>
  );
}
