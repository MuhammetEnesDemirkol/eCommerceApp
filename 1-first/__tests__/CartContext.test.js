import React from "react";
import { CartProvider, useCart } from "../context/CartContext";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Cart Context Tests", () => {
  test("adds an item to the cart", () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    const product = { id: 1, name: "Product 1", price: 100 };

    act(() => {
      result.current.addToCart(product);
    });

    expect(result.current.cartItems).toHaveLength(1);
    expect(result.current.cartItems[0]).toEqual({ ...product, quantity: 1 });
  });

  test("increments quantity when item is already in the cart", () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    const product = { id: 1, name: "Product 1", price: 100 };

    act(() => {
      result.current.addToCart(product);
      result.current.addToCart(product);
    });

    expect(result.current.cartItems).toHaveLength(1);
    expect(result.current.cartItems[0].quantity).toBe(2);
  });
});
