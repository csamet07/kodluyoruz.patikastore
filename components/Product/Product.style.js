import {
    Dimensions,
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor:'#eceff1',
        width: '45%',
        margin: 10,
        borderRadius: 12,
        padding:10
    },
    image: {
        height: Dimensions.get('window').height / 5.3,
        width: '100%',
        borderRadius: 10
    },
    title: {
        paddingTop:10,
        fontWeight: 'bold'
    },
    price: {
        color: '#808080',
        fontWeight: 'bold'
    },
    inStock: {

    }
});