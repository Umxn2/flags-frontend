import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  infoContainer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 24,
  },
  badge: {
    height: 40,
    justifyContent: "center",
  },
  tokenSection: {
    marginTop: 40,
    alignItems: "center",
    width: "100%",
  },
  label: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  tokenWrapper: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 120,
    alignItems: "center",
  },
  tokenText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    letterSpacing: 2,
    marginBottom: 8,
  },
  copyButton: {
    marginTop: 8,
  },
  copiedText: {
    fontSize: 14,
    color: "#4CAF50",
    fontWeight: "500",
    marginTop: 8,
  },
  footer: {
    marginTop: "auto",
    width: "100%",
    padding: 20,
  },
  startButton: {
    width: "100%",
  },
});
