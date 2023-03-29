import { createStore, combineReducers } from "redux";

import CategoryReducer from "./reducers/category.reducer";
import ProductosReducer from "./reducers/productos.reducer";

const RootReducer = combineReducers({
    categories:CategoryReducer,
    Productos: ProductosReducer
})

export default createStore(RootReducer)