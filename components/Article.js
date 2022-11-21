import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, Pressable } from "react-native";
import styles from "../styles";
import moment from "moment";
import * as WebBrowser from 'expo-web-browser'

const Article = (props) =>{

    const goToSource = async ()=>{
        WebBrowser.openBrowserAsync(props.url);
    }

    return(
        <Pressable style={styles2.container} onPress={goToSource} >
            {/*Image*/}
            <Image 
                source={{uri: props.urlToImage}} 
                style={styles2.image}
            />
            
            <View style={{padding:10}} >
                {/*Title*/}
                <Text style={styles.header}>{props.title}</Text>

                {/*Desciption*/}
                <Text style={styles.hint} numberOfLines={3}>{props.description}</Text>

                {/*Author*/}
                <View style={styles2.data}>
                    <Text style={styles2.heading}>by: <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>{props.author}</Text> </Text>
                    <Text style={styles2.date}>{moment(props.publishedAt).format("MMM Do YYYY")}</Text>
                </View>

                {/*Source*/}
                <View style={{marginTop:10}}>
                    <Text>Source: <Text style={{color: '#e63946', fontSize: 18, fontWeight: 'bold'}}>{props.sourceName}</Text> </Text>
                </View>
            </View>

        </Pressable>
    )
}
export default Article;

const styles2 = StyleSheet.create({
    container: {
        marginBottom: 30,
        margin:5,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        elevation: 5,
        shadowRadius: 20,
        shadowOffset:{
            height: 5,
            width:5,
        },
        shadowColor:"#000",
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 200,
    },
    data:{
        marginTop:10,
        flexDirection: 'row',
        justifyContent:'space-between',
        maxWidth:'100%',
    },
    author:{
        fontWeight: 'bold',
    },
    date:{
        fontWeight: 'bold',
        color: '#e63946'
    },
    heading:{
        maxWidth: '70%',
    },
    source:{
        color:'#e63946',
    }
});