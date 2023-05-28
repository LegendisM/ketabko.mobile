import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:"#fce4c6"
        },
        main:{
            flex:1,
            margin:0,
            overflow:"hidden",
            position:"absolute",
            top:0,
            width:"100%",
            height:"100%",
            backgroundColor:"#fce4c6"
        },
        back:{
            marginTop:10,
            marginLeft:10,
            zIndex:2,
        },
        header:{
            width:"100%",
            flexDirection:"column",
        },
        header_detial_1:{
            flexDirection:'row',
            justifyContent:'flex-end',
            marginTop:125
        },
        header_detial_2:{
            position:'relative',
            right:16
        },
        header_title:{
            fontFamily:"Black",
            fontSize:17,
            color:'#442703'
        },
        header_about:{
            fontFamily:"Medium",
            fontSize:13,
            color:'#6d5940',
        },
        header_book_logo:{
            height:180,
            marginTop:-65.5,
            marginRight:-19
        },
        header_play:{
            height:70,
        },

        Sections:{
            flex:1,
            overflow:'scroll',
            borderRadius:4,
            margin:10,
            marginLeft:10.6,
            marginRight:10.6,
            padding:4,
            flexDirection:'row',
            justifyContent:'flex-start',
        },
        Section:{
            backgroundColor:'#ffffffbd',
            padding:11,
            borderRadius:12,
            marginBottom:8,
            flexDirection:'row',
            justifyContent:'space-between',
        },
        Section_title:{
            fontFamily:"Medium",
            color:'black',
        },
        Section_hashtag:{
            width:26,
            height:26
        }
    }
);
