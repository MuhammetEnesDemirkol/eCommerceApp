import { StyleSheet } from "react-native";

const COLORS = {
  primary: "#3366FF",
  secondary: "#f9f9f9",
  danger: "#FF3B30",
  white: "#fff",
  dark: "#333",
  gray: "#666",
};

const SPACING = 16;

const commonShadow = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    padding: SPACING,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: SPACING,
    textAlign: "center",
  },
  emptyMessage: {
    fontSize: 18,
    color: COLORS.gray,
    textAlign: "center",
    marginTop: SPACING * 3,
  },
  productCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: SPACING,
    marginBottom: SPACING,
    ...commonShadow,
  },
  detailsContainer: {
    marginBottom: SPACING / 2,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: SPACING / 4,
  },
  productPrice: {
    fontSize: 14,
    color: COLORS.primary,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  removeButton: {
    backgroundColor: COLORS.danger,
    padding: SPACING / 2,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsButton: {
    backgroundColor: COLORS.primary,
    padding: SPACING / 2,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginLeft: SPACING / 2,
  },
  detailsButtonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: COLORS.white,
    padding: SPACING,
    borderRadius: 12,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: SPACING,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING,
  },
  optionText: {
    fontSize: 16,
    marginLeft: SPACING / 2,
  },
});

export default styles;
