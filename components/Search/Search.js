import React from 'react';
import {
    TextInput,
    View,
    Text,
    StyleSheet
} from 'react-native';
import  styles  from './Search.style';

const Search = () => {
    return (
        <View>
            <TextInput 
                style={styles.input} 
                placeholder="Ara..."
            />
        </View>
    )
}

export default Search;