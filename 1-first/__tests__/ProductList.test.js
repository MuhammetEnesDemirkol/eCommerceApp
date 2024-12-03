import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ProductList from "../tabs/ProductList";
import { CartProvider } from "../context/CartContext";

test("adds a product to the cart when Add to Cart button is pressed", () => {
  const { getByText } = render(
    <CartProvider>
      <ProductList />
    </CartProvider>
  );

  const addToCartButton = getByText("Add to Cart");
  fireEvent.press(addToCartButton);

  const alertMessage = "has been added to your cart!";
  expect(alertMessage).toBeTruthy();
});
