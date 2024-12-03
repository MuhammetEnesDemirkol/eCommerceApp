import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const COLORS = {
  primary: "#007bff",
  secondary: "#ffffff",
  dark: "#333",
  danger: "red",
  badgeText: "#fff",
};

const SPACING = 10;

const commonShadow = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 3.84,
  elevation: 10,
};

const styles = StyleSheet.create({
  navbar: {
    position: "absolute", // Navbar'ı sabitler
    bottom: 0, // Alt kısma sabitler
    left: 0,
    width: width, // Ekranın genişliğine uygun şekilde genişletilir
    backgroundColor: COLORS.secondary,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: SPACING,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    zIndex: 10, // Navbar'ın diğer elemanların üstünde görünmesi için
    ...commonShadow,
  },
  icon: {
    color: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 12,
    color: COLORS.dark,
    marginTop: SPACING / 2,
  },
  cartButton: {
    position: "relative",
  },
  cartBadge: {
    position: "absolute",
    right: -SPACING,
    top: -SPACING / 2,
    backgroundColor: COLORS.danger,
    borderRadius: SPACING,
    paddingHorizontal: SPACING / 2,
    paddingVertical: SPACING / 4,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: COLORS.badgeText,
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default styles;
