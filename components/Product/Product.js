import React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import styles from './Product.style';
import IsStock from '../IsStock';

const Product = props => {
    const {title, imgURL, price, inStock} = props.data;
    console.log(imgURL);
    return (
        <View style={styles.container}>
            <Image 
                source= {{uri: imgURL}}
                style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            <IsStock isStock={inStock} />
        </View>
    )
}

export default Product;