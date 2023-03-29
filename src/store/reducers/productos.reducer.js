import { PRODUCTOS } from "../../data/products";

import {SELECT_PRODUCTO, FILTER_PRODUCTOS} from '../actions/Producto.action'

const initialState = {
    Productos: PRODUCTOS,
    filteredProductos : [],
    selected: null
}

const ProductosReducer = (state=initialState, action) => {
    switch(action.type){
        case SELECT_PRODUCTO:
            return {
                ...state,
                selected: state.Productos.find(Producto=>Producto.id ===action.ProductoId)
            }
        case FILTER_PRODUCTOS:
            return {
                    ...state, filteredProductos:state.Productos.filter(Producto=>Producto.categoryId ===action.categoryId)
            }
        default:
            return state
    }
}

export default ProductosReducer;