import { StyleSheet } from "react-native";
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
  EventDetailView_eventName: {},
  // end event detail view
});
