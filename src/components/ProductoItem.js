import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'




const ProductoItem = ({ item, onSelected }) => {


    return (
        <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>

            <View style={styles.ProductosItems}>


                <View style={styles.DescipcionItem}>

                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.detail}>$ {item.price}</Text>
                    <Text style={styles.detail}>{item.weight}</Text>

                </View>
                <View style={styles.imagen}>
                    <Image source={item.image} style={styles.imagen} />
                </View>



            </View>

        </TouchableOpacity>
    )
}

export default ProductoItem

const styles = StyleSheet.create({
    container: {

        flex: 1,
    },

    ProductosItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 25,
        fontFamily: 'OpenSans_700Bold'
    },
    detail: {
        fontSize: 22,
    },
    imagen: {
        resizeMode: 'contain',
        width: '80%',
        height: 150,
        marginLeft: 20,
    },
})