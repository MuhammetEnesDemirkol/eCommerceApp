import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/ProductList.styles.js";
import Navbar from "./Navbar.js";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import FilterModal from "../modals/FilterModal.js";
import SortModal from "../modals/SortModal.js";

export default function ProductList({ navigation }) {
  const { cartItems } = useCart(); // Sepet verilerini almak için kullanıldı
  const { addToCart } = useCart();
  const { favorites, addToFavorites } = useFavorites();
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSortModalVisible, setIsSortModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [brands, setBrands] = useState([]);
  const [brandSearchQuery, setBrandSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const PAGE_SIZE = 12;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://5fc9346b2af77700165ae514.mockapi.io/products"
      );
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      setVisibleProducts(data.slice(0, PAGE_SIZE));
      extractUniqueBrands(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      Alert.alert("Error", "Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  const extractUniqueBrands = (data) => {
    const allBrands = data.map((product) => product.brand.trim().toLowerCase());
    const uniqueBrands = Array.from(new Set(allBrands)).sort((a, b) =>
      a.localeCompare(b)
    );
    setBrands(uniqueBrands);
  };

  useEffect(() => {
    applyFilters();
  }, [products, searchQuery, selectedBrands, sortBy, minPrice, maxPrice]);

  const applyFilters = () => {
    let updatedProducts = [...products];

    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedBrands.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        selectedBrands.includes(product.brand.trim().toLowerCase())
      );
    }

    if (minPrice || maxPrice) {
      updatedProducts = updatedProducts.filter((product) => {
        const productPrice = parseFloat(product.price);
        const min = minPrice ? parseFloat(minPrice) : 0;
        const max = maxPrice ? parseFloat(maxPrice) : Infinity;
        return productPrice >= min && productPrice <= max;
      });
    }

    sortProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    setVisibleProducts(updatedProducts.slice(0, PAGE_SIZE));
  };

  const sortProducts = (productsToSort) => {
    if (sortBy === "Price high to low") {
      productsToSort.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Price low to High") {
      productsToSort.sort((a, b) => a.price - b.price);
    } else if (sortBy === "A/Z") {
      productsToSort.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "Z/A") {
      productsToSort.sort((a, b) => b.name.localeCompare(a.name));
    }
  };

  const loadMoreProducts = () => {
    if (visibleProducts.length < filteredProducts.length) {
      const newVisibleProducts = filteredProducts.slice(
        0,
        visibleProducts.length + PAGE_SIZE
      );
      setVisibleProducts(newVisibleProducts);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    Alert.alert("Success", `${product.name} has been added to your cart!`);
  };

  const handleAddToFavorites = (product) => {
    addToFavorites(product);
    Alert.alert("Success", `${product.name} has been added to favorites!`);
  };

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  const openSortModal = () => setIsSortModalVisible(true);
  const closeSortModal = () => setIsSortModalVisible(false);

  const toggleBrand = (brand) => {
    const normalizedBrand = brand.trim().toLowerCase();
    if (selectedBrands.includes(normalizedBrand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== normalizedBrand));
    } else {
      setSelectedBrands([...selectedBrands, normalizedBrand]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>E-Market</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="gray"
          style={{ marginRight: 8 }}
        />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.filterSortContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={openModal}>
          <Text style={styles.filterButtonText}>Select Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={openSortModal}>
          <Text style={styles.filterButtonText}>Sort</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#3366FF" />
      ) : (
        <FlatList
          data={visibleProducts}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => {
            const isFavorite = favorites.some((fav) => fav.id === item.id);
            const isInCart = cartItems.some(
              (cartItem) => cartItem.id === item.id
            ); // Ürün sepette mi kontrol et

            return (
              <TouchableOpacity
                style={styles.productCard}
                onPress={() =>
                  navigation.navigate("ProductDetail", { product: item })
                }
              >
                <View style={styles.productImage}>
                  {isFavorite && (
                    <Ionicons
                      name="star"
                      size={24}
                      color="gold"
                      style={styles.favoriteIcon}
                    />
                  )}
                  {isInCart && (
                    <Ionicons
                      name="cart"
                      size={24}
                      color="#3366FF" // Sepette olduğunu göstermek için mavi renk kullanabiliriz
                      style={styles.cartIcon} // İlgili stil eklenmeli
                    />
                  )}
                </View>
                <Text style={styles.productPrice}>{item.price} ₺</Text>
                <Text style={styles.productName}>{item.name}</Text>
                <TouchableOpacity
                  style={styles.addToCartButton}
                  onPress={() => handleAddToCart(item)}
                >
                  <Text style={styles.addToCartText}>Add to Cart</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            );
          }}
          onEndReached={loadMoreProducts}
          onEndReachedThreshold={0.5}
        />
      )}

      <FilterModal
        isModalVisible={isModalVisible}
        closeModal={closeModal}
        brands={brands}
        brandSearchQuery={brandSearchQuery}
        setBrandSearchQuery={setBrandSearchQuery}
        selectedBrands={selectedBrands}
        toggleBrand={toggleBrand}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />

      <SortModal
        isSortModalVisible={isSortModalVisible}
        closeSortModal={closeSortModal}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <Navbar />
    </View>
  );
}
