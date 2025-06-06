import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
  logo:{
    width: 48,
    height: 48,
    marginBottom: 28,
    marginTop: 24,
  },

  tittle:{
    fontSize: 24,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],

  },

  subtitle:{
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 12,
  },
})