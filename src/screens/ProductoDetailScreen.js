import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const ProductoDetailScreen = ({route}) => {
    
    const Producto = useSelector(state=>state.Productos.selected)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{Producto.name}</Text>

<Image source={Producto.image} style={styles.imagen} />

          
            <Text style={styles.description}> {Producto.description} </Text>
            <Text style={styles.precio}> $ {Producto.price } </Text>
            <Text style={styles.unidad}> {Producto.weight } </Text>
        
            <Button
        title="Agregar a carrito"
        onPress={() => Alert.alert('Producto agregado al carrito')}
      />
        </View>
        
    )
}

export default ProductoDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    description: {
        fontSize: 20,
        fontFamily: 'OpenSans_400Regular',
        textAlign: 'center',
        margin: 10
    },
    precio: {
        fontSize: 30,       
        fontFamily: 'OpenSans_700Bold',
        textAlign: 'center',
        margin: 10
    },
    unidad: {
        fontSize: 15,     
        fontFamily: 'OpenSans_400Regular',
        textAlign: 'center',
        margin: 10
    },
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    title: {
        fontSize:20,
        fontFamily: 'OpenSans_700Bold',
        
    },
    imagen: {
        marginTop: -150,
        resizeMode: 'contain',
        width: '75%',
        height: 300,    
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 }
        },
})