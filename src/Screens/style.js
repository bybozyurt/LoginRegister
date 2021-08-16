import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  switch: {
    paddingLeft:25, 
    justifyContent:'center'
    },

  container: {
      flex:1,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor:'white'
    
    },

    lightTheme:{
      backgroundColor:'#FFFFFF',
      color:'#000000'
  },
    darkTheme:{
      backgroundColor:'#000000',
      color:'#FFFFFF'
  },

  inputView: {
    margin:20,
    backgroundColor:"#ABC",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    
  },
  
  image:{

    marginBottom:5,
    width:175,
    height:175,
    

  },

  Button:{
    
    backgroundColor: "#ABC",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
    

  },
  ButtonText: {
    fontSize: 15,
    color: "#000000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    
  },
  Text: {
    fontSize: 15,
    color: "#000000",
    fontWeight: "bold",
    alignSelf: "center",
    margin:25
    
    
  }
  


});
