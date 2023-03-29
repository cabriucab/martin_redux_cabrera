import { FlatList } from 'react-native'
import React, { useEffect } from 'react'
//import { PRODUCTOS } from '../data/products'
import ProductoItem from '../components/ProductoItem'
import { useSelector,useDispatch } from 'react-redux'
import { filterProductos,selectProducto } from '../store/actions/Producto.action'

const CategoryProductoScreen = ({ navigation, route }) => {
    //const Productos = PRODUCTOS.filter(Producto=>Producto.categoryId === route.params.categoryId)
    
    const categoryProductos = useSelector(state=>state.Productos.filteredProductos)
    const dispatch = useDispatch()
    const category = useSelector(state=>state.categories.selected)
    //console.log(category)

    useEffect(()=>{
        dispatch(filterProductos(category.id))
    },[])

    const onHandleSelectedProducto = (item)=>{
        dispatch(selectProducto(item.id))
        navigation.navigate('Detail',{
            name:item.title,
        })
    }

    const renderItemProducto = ({item}) =>(
        <ProductoItem item={item} onSelected={onHandleSelectedProducto} />
    )
    
    return (
        <FlatList 
            data={categoryProductos}
            renderItem={renderItemProducto}
        />
    )
}

export default CategoryProductoScreen

