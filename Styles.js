import { Text, StyleSheet } from "react-native";
import { ScreenHeight, ScreenWidth } from "react-native-elements/dist/helpers";

var byuBlue = "#151561";

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
  eventListHeader: {
    padding: 10,
    fontSize: 24,
    backgroundColor: "#fff",
  },
  eventListItem: {
    padding: 10,
    backgroundColor: "#fff",
  },
  listDivider: {
    height: 1,
    width: ScreenWidth,
    padding: 5,
    backgroundColor: "#fff",
  },
  listContainer: {
    flex: 1,
  },
  // end list view
  // event detail view
  EventDetailView_infoContainer: {
    display: "flex",
    alignItems: "flex-start",
    padding: 10,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  EventDetailView_detailContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  headerStyle: {
    backgroundColor: byuBlue,
  },
  headerTitleStyle: {
    color: "#fff",
  },

  //home footer
  homeTabs: {
    backgroundColor: byuBlue,
  },
});
