import { StyleSheet } from "react-native";
import { ScreenHeight, ScreenWidth } from "react-native-elements/dist/helpers";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 26,
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 8,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
  },
  headerButton: {
    padding: 4,
  },
  dropdown: {
    flex: 1,
  },
  // list view
  eventListItem: {
    padding: 10,
  },
  listDivider: {
    height: 1,
    width: ScreenWidth,
    backgroundColor: "#000",
  },
  listContainer: {
    width: ScreenWidth,
    height: ScreenHeight,
  },
  // end list view
});
