import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, FlatList } from "react-native";
import Article from "../components/Article";
import styles from "../styles";
import axios from "axios";

const HomeScreen = () =>{

    const [articles, setArticles]= useState([])

    const getNews = ()=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=59e6977e04aa41ffbf62251db3334b28', {
            params:{
                category: 'technology',
            }
        })
        .then( (response) => {
            // handle success
            console.log(response.data.articles);
            setArticles(response.data.articles)
        
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

    }

    useEffect(() => {
      getNews();
      console.log(articles.length);
    }, [])
    

    return(
        <SafeAreaView style={styles2.container}>
            <FlatList 
                data={articles} 
                renderItem= {({item})=> 
                    <Article 
                        urlToImage={item.urlToImage}
                        title = {item.title}
                        description = {item.description}
                        author = {item.author}
                        publishedAt = {item.publishedAt}
                        sourceName = {item.source.name}
                    />}
                keyExtractor={(item)=>item.title}
            />
        </SafeAreaView>
    )
}
export default HomeScreen;

const styles2 = StyleSheet.create({
    container: {
        marginTop: 20
    }
});