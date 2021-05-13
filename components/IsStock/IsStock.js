import React from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './IsStock.style';

const IsStock = props => {
console.log(props.isStock);
    if(!props.isStock){
        return (
            <Text style={styles.falseStock}> STOK YOK</Text>
        )
    }else{
        return (
            <Text></Text>
        )
    }

}

export default IsStock;