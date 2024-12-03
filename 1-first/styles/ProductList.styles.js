import { StyleSheet } from "react-native";

// Ortak Değerler
const SPACING = 8;
const BORDER_RADIUS = 8;
const COLORS = {
  primary: "#3366FF",
  secondary: "#f8f8f8",
  white: "#ffffff",
  dark: "#333",
  gray: "#e0e0e0",
  danger: "red",
};

const commonContainer = {
  backgroundColor: COLORS.white,
  borderRadius: BORDER_RADIUS,
  padding: SPACING * 2,
};

// Tarzlar: ProductList
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: SPACING * 2,
  },
  header: {
    paddingVertical: SPACING * 2,
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    fontSize: 24,
    color: COLORS.white,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row", // Yatayda düzenler
    alignItems: "center", // İçeriği dikeyde ortalar
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS,
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingHorizontal: SPACING,
    paddingVertical: SPACING,
    marginVertical: SPACING * 2,
  },
  searchInput: {
    borderRadius: BORDER_RADIUS,
  },
  filterButton: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.gray,
    padding: SPACING,
    borderRadius: BORDER_RADIUS,
    marginBottom: SPACING * 2,
  },
  filterSortContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: SPACING * 2,
    marginBottom: SPACING,
  },
  filterButtonText: {
    color: COLORS.dark,
  },
  productCard: {
    ...commonContainer,
    flex: 1,
    margin: SPACING,
    alignItems: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.gray,
    borderRadius: BORDER_RADIUS,
    marginBottom: SPACING,
    justifyContent: "center", // İçeriği dikeyde ortalar
    alignItems: "center", // İçeriği yatayda ortalar
  },
  favoriteIcon: {
    position: "absolute",
    top: SPACING,
    right: SPACING,
  },
  cartIcon: {
    position: "absolute",
    top: SPACING,
    left: SPACING, // Sol üst köşede göstermek için uygun pozisyon belirledik
  },
  productPrice: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  productName: {
    fontSize: 14,
    color: COLORS.dark,
    marginVertical: SPACING / 2, // Dikeyde boşluk
  },
  addToCartButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING, // Dikeyde iç boşluk
    paddingHorizontal: SPACING * 2, // Yatayda iç boşluk
    borderRadius: BORDER_RADIUS,
    marginTop: SPACING,
  },
  addToCartText: {
    color: COLORS.white,
  },
  cartBadge: {
    position: "absolute",
    top: -SPACING / 2,
    right: -SPACING,
    backgroundColor: COLORS.danger,
    borderRadius: SPACING,
    width: SPACING * 2.5,
    height: SPACING * 2.5,
    justifyContent: "center", // İçeriği dikeyde ortalar
    alignItems: "center", // İçeriği yatayda ortalar
  },
  cartBadgeText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    maxHeight: "90%",
    padding: SPACING * 2.5,
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: SPACING * 2.5,
    textAlign: "center",
  },
  modalLabel: {
    fontSize: 16,
    marginVertical: SPACING * 1.25,
    fontWeight: "bold",
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: SPACING / 2,
  },
  optionText: {
    marginLeft: SPACING * 1.25,
    fontSize: 16,
  },
  applyButton: {
    backgroundColor: COLORS.primary,
    padding: SPACING * 1.875,
    borderRadius: BORDER_RADIUS,
    alignItems: "center",
    marginTop: SPACING * 2.5,
  },
  applyButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
