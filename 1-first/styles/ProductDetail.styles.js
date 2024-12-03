import { StyleSheet } from "react-native";

const COLORS = {
  primary: "#3366FF",
  secondary: "#f9f9f9",
  white: "#fff",
  dark: "#333",
  gray: "#666",
};

const SPACING = 16;

const commonShadow = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: SPACING,
    backgroundColor: COLORS.secondary,
    paddingBottom: 100,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: SPACING,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    paddingHorizontal: SPACING,
    marginBottom: SPACING,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  },
  productImage: {
    width: "100%",
    height: 250,
    borderRadius: 16,
    marginBottom: SPACING,
  },
  detailsContainer: {
    padding: SPACING,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    ...commonShadow,
    marginBottom: SPACING,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: SPACING / 2,
  },
  description: {
    fontSize: 16,
    color: COLORS.gray,
    marginBottom: SPACING,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: SPACING,
  },
  addToCartButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING * 0.75,
    borderRadius: 8,
    alignItems: "center",
    position: "absolute",
    bottom: 20, // Navbar üstünde görünecek şekilde konumlandır
    left: SPACING,
    right: SPACING,
    ...commonShadow,
  },
  addToCartText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
