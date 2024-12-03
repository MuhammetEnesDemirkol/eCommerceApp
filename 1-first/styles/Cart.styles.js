import { StyleSheet } from "react-native";

const COLORS = {
  primary: "#007bff",
  secondary: "#f8f9fa",
  danger: "#dc3545",
  success: "#28a745",
  white: "#fff",
  dark: "#333",
};

const SPACING = 10;

const commonShadow = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 3.84,
  elevation: 8,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  header: {
    padding: SPACING,
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    ...commonShadow,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: SPACING,
    marginVertical: SPACING / 2,
    marginHorizontal: SPACING,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    ...commonShadow,
  },
  itemInfoContainer: {
    flex: 2,
  },
  itemName: {
    fontSize: 15,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  itemPrice: {
    fontSize: 15,
    color: COLORS.primary,
    marginTop: SPACING / 2,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
    justifyContent: "flex-end",
  },
  quantityButton: {
    backgroundColor: COLORS.gray,
    padding: SPACING,
    borderRadius: 5,
    marginHorizontal: 1,
  },
  quantityButtonText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: SPACING,
  },
  removeButton: {
    backgroundColor: COLORS.danger,
    padding: SPACING / 3,
    borderRadius: 5,
    marginLeft: SPACING,
  },
  footer: {
    padding: SPACING / 2,
    marginHorizontal: SPACING,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    marginBottom: SPACING,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...commonShadow,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  completeButton: {
    backgroundColor: COLORS.success,
    paddingVertical: SPACING * 1.2,
    paddingHorizontal: SPACING * 2.4,
    borderRadius: 5,
  },
  completeButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
