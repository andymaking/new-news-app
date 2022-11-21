import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import styles from "../styles";
import moment from "moment";
import { TextInput } from "react-native";
import { Input } from "@rneui/base";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import Article from "../components/Article";

const Search = (props) =>{

    const [search, setSearch]= useState("")
    const [articles, setArticles]= useState([])

    const getNews = ()=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=59e6977e04aa41ffbf62251db3334b28', {
            params:{
                category: 'technology',
                q: search
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
    }, [])

    return(
        <View>
            <SearchBar searchText={search} setSearch={setSearch} doSearch={()=>getNews()} />
            
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
                        url={item.url}
                    />}
                keyExtractor={(item)=>item.title}
            />
        </View>
    )
}
export default Search;

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        padding:10
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