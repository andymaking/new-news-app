import { Platform, PlatformColor, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex: 1,
      },
      input:{
          marginBottom: 10,
          paddingHorizontal: 20,
          height: 40,
          borderRadius: 10,
          width: '90%',
          backgroundColor: 'white',
          alignSelf: 'center',
          marginTop: 10,
      },
      navigationContainer:{
        padding: 20,
      },
      label:{
        padding: 20,
        ...Platform.select({
            ios:{
                color: PlatformColor('label'),
                backgroundColor: PlatformColor('system')
            },
            android:{
                color: PlatformColor('?android:attr/textColor'),
                backgroundColor: PlatformColor('@android:color/holo_blue_bright')
            }
        })
      },
      hint:{
        marginTop:10,
          color:'black',
          fontSize: 12,
          textAlign: 'left',
      },
      padding:{
          marginTop: 20,
          marginHorizontal: 20
      },
      item:{
        backgroundColor: "yellow",
        padding: 20,
        marginVertical: 10
      },
      header:{
        fontSize:18,
        fontWeight: '600',
        marginTop: 20
      },
      title:{
        fontSize: 25
      }
  });

  export default styles;