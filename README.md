# eCommerceApp

This is a simple E-Commerce app built with React Native using Expo. The app allows users to browse products, view product details, add products to the cart, and manage favorites.

## Features
- **Product Listing**: Users can view products fetched from an external API.
- **Product Detail**: View detailed information about each product.
- **Add to Cart**: Add products to the shopping cart and update quantities.
- **Favorites**: Add/remove products from favorites.
- **Search and Filter**: Search for products by name and filter by brand or price.
- **Infinite Scroll**: Load products in batches of 12 with infinite scroll.
- **Save State**: Cart and favorites persist even when the app is closed.

## Screenshots


## Dependencies
- **React Native:** For building cross-platform mobile applications.
- **Expo:** For rapid development and testing.
- **@react-navigation/native:** For screen navigation.
- **@react-native-async-storage/async-storage:** For data persistence.
- **Context API:** For managing state (Cart and Favorites).

## Project Structure
The project is structured as follows:
- styles/: Contains styles for each screen.
- tabs/: Contains screen components (e.g., ProductList, Cart).
- context/: Contains context files for Cart and Favorites.
- __tests__/: Contains test files for unit testing.
- App.js: The main entry point of the application.

## How to Use
- **Browse Products:** The home page displays a list of products.
- **Search & Filter:** Use the search bar and filter button to find products easily.
- **Add to Cart:** Click the "Add to Cart" button to add a product to your cart.
- **Favorites:** Mark a product as a favorite by clicking on the star icon.
- **Cart Management:** Go to the cart page to update product quantities or remove them.

## Technologies Used
- React Native
- Expo
- AsyncStorage for persistent data storage.
- React Navigation for navigation.
- Context API for state management.
- Jest for unit testing.

## Unit Tests
- **Testing-Library for React Native:** Used to test the functionality of the components and context.
- Tests are located under the __tests__/ directory.

## Project Requirements Fulfilled
- Responsive design applied.
- Persistent storage for cart and favorites.
- At least three screens implemented: Product List, Product Detail, and Cart.
- API request to fetch product data.
- Infinite scroll for product listing.
- Unit tests added for stability.

## Author ##
**Muhammet Enes DEMİRKOL**
