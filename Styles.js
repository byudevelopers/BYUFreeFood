import { Text, StyleSheet } from "react-native";
import { ScreenHeight, ScreenWidth } from "react-native-elements/dist/helpers";

var byuBlue = "#151561";

export const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat_500Medium'
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20
  },
  header: {
    fontSize: 26,
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 5
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    fontFamily: 'Montserrat_500Medium'
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
