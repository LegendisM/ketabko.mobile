import { StyleSheet } from "react-native";

export default StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: "#E6EBE0"
    },
    main: {
      flex: 1,
      margin: 0,
      overflow: "hidden",
      position: "absolute",
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#fce4c6"
    },
    /* List Of forms */
    date: {
      backgroundColor: 'transparent',
      borderRadius: 4,
      padding: 6,
      margin: 2.5,
      marginBottom: 10
    },
    date_create: {
      backgroundColor: '#ffffffbd',
      borderRadius: 6,
      padding: 5,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    date_input: {
      fontFamily: "Medium",
      height: 45,
      borderBottomWidth: 1,
      padding: 10,
      borderRadius: 4,
      borderColor: '#eabf8a',
      width: '84%',
      marginTop: 2
    },
    date_button: {},
    date_row: {
      backgroundColor: '#ffffffbd',
      padding: 11,
      borderRadius: 12,
      marginTop: 4,
      marginBottom: 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    date_row_title: {
      fontFamily: "Medium",
      color: 'black',
    },
    date_row_hashtag: {
      width: 26,
      height: 26
    },
    /* Form */
    form: {
      backgroundColor: '#ffffff',
      borderRadius: 4,
      padding: 6,
      margin: 6,
      marginBottom: 50
    },
    form_title: {
      fontFamily: "Medium",
      textAlign: 'center',
      margin: 2,
    },
    MainInputs: {
      flexDirection: "column",
      justifyContent: "center",
      padding: 2
    },
    input: {
      fontFamily: "Medium",
      height: 45,
      margin: 10,
      borderWidth: 1,
      padding: 10,
      width: '95%',
      borderRadius: 4
    },
    inputNote: {
      fontFamily: "Medium",
      height: 120,
      margin: 10,
      borderWidth: 1,
      padding: 8,
      width: '95%',
      borderRadius: 4
    },
    /* Bottom Main Menu */
    menu: {
      margin: 0,
      padding: 0,
      overflow: "hidden",
      backgroundColor: "#ffffff",
      position: "absolute",
      bottom: 0,
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
      borderTopColor: "#d5dbce",
      borderTopWidth: 0.50,
    },
    menu_item: {
      backgroundColor: "#ffffff",
      padding: 11,
      width: "50%",
      flexDirection: "row",
      justifyContent: "center",
      borderColor: "#e6ebe054",
      borderLeftWidth: 0.35,
      borderRightWidth: 0.35,
    },
    menu_item_image: {
      width: 30,
      height: 30
    },
  }
);