import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartContext = createContext();

// Sepet verilerini cihaz depolamasından yükleyen yardımcı fonksiyon
const loadCartItems = async () => {
  try {
    const storedCartItems = await AsyncStorage.getItem("cartItems");
    return storedCartItems !== null ? JSON.parse(storedCartItems) : [];
  } catch (error) {
    console.error("Failed to load cart items from storage", error);
    return [];
  }
};

// Sepet verilerini cihaz depolamasına kaydeden yardımcı fonksiyon
const saveCartItems = async (cartItems) => {
  try {
    await AsyncStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    console.error("Failed to save cart items to storage", error);
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // AsyncStorage'dan sepet verilerini yüklemek için useEffect
  useEffect(() => {
    loadCartItems().then((data) => {
      setCartItems(data);
      setIsInitialized(true);
    });
  }, []);

  // Sepet verileri değiştiğinde bu verileri AsyncStorage'a kaydetmek için useEffect
  useEffect(() => {
    if (isInitialized) {
      saveCartItems(cartItems);
    }
  }, [cartItems, isInitialized]);

  // Ürünü sepete ekleme fonksiyonu
  const addToCart = (product) => {
    if (!isInitialized) {
      return;
    }

    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );
      if (existingItemIndex >= 0) {
        // Ürün zaten sepet içinde, miktarı artır
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        // Ürün sepette yok, yeni ürün ekle
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        isInitialized,
      }}
    >
      {isInitialized ? children : null}
    </CartContext.Provider>
  );
};

// Sepet verilerini ve ekleme işlevini kullanabilmek için hook
export const useCart = () => {
  return useContext(CartContext);
};
