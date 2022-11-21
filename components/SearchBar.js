import React, { useState } from "react";
import { View} from "react-native";
import styles from "../styles";
import { TextInput } from "react-native";

const SearchBar = (props) =>{

    return(
        <View>
            <TextInput placeholder="search" style={styles.input} value={props.searchText} onChangeText={(text)=>{
                props.setSearch(text)
                props.doSearch()
            }}/>
        </View>
    )
}
export default SearchBar;