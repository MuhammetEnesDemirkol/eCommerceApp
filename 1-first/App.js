import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductList from "./tabs/ProductList";
import ProductDetail from "./tabs/ProductDetail";
import Cart from "./tabs/Cart";
import Favorites from "./tabs/Favorites"; // Favoriler sayfasını ekliyoruz
import { CartProvider } from "./context/CartContext"; // Sepet Context'i ekliyoruz
import { FavoritesProvider } from "./context/FavoritesContext"; // Favoriler Context'i ekliyoruz

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ProductList">
            <Stack.Screen
              name="ProductList"
              component={ProductList}
              options={{ title: "Product List" }}
            />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetail}
              options={{ title: "Product Details" }}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{ title: "Cart" }}
            />
            <Stack.Screen
              name="Favorites"
              component={Favorites}
              options={{ title: "Favorites" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesProvider>
    </CartProvider>
  );
}
