import { StyleSheet } from "react-native";
import { alabaster, cerise } from "../../colors";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    borderColor: alabaster,
    borderWidth: 1,
    marginVertical: 16,
    width: "100%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    color: alabaster,
    borderColor: cerise,
    borderRadius: 8,
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  remainingTime: {
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
  },
  time: {
    fontSize: 20,
    fontWeight: "bold",
    fontVariant: ["tabular-nums"],
  },
});
