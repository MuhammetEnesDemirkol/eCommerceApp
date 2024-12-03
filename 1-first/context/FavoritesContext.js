import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoritesContext = createContext();

// Favorileri cihaz depolamasından yükleyen yardımcı fonksiyon
const loadFavorites = async () => {
  try {
    const storedFavorites = await AsyncStorage.getItem("@favorites");
    return storedFavorites !== null ? JSON.parse(storedFavorites) : [];
  } catch (e) {
    console.error("Failed to load favorites from storage", e);
    return [];
  }
};

// Favorileri cihaz depolamasına kaydeden yardımcı fonksiyon
const saveFavorites = async (favorites) => {
  try {
    await AsyncStorage.setItem("@favorites", JSON.stringify(favorites));
  } catch (e) {
    console.error("Failed to save favorites to storage", e);
  }
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Uygulama açıldığında favori ürünleri cihaz depolamasından yükle
  useEffect(() => {
    loadFavorites().then((data) => setFavorites(data));
  }, []);

  // Favori ürünler değiştiğinde cihaz depolamasına kaydet
  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  // Ürünü favorilere ekleme fonksiyonu
  const addToFavorites = (product) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((item) => item.id === product.id)
        ? prevFavorites
        : [...prevFavorites, product]
    );
  };

  // Ürünü favorilerden kaldırma fonksiyonu
  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== productId)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// Favori ürünleri ve işlevleri kullanabilmek için hook
export const useFavorites = () => useContext(FavoritesContext);
