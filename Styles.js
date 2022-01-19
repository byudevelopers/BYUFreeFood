import { StyleSheet } from "react-native";
import { ScreenHeight, ScreenWidth } from "react-native-elements/dist/helpers";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    backgroundColor: "#5588aa",
  },
  listDivider: {
    height: 1,
    width: ScreenWidth,
    backgroundColor: "#000",
  },
  listContainer: {
    flex: 1,
  },
  // end list view

  //home header
  headerStyle: {
    backgroundColor: '#151561',
  },
  headerTitleStyle: {
      color: 'white',  
  }
});
