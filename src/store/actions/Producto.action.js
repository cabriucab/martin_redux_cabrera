export const SELECT_PRODUCTO = 'SELECT_PRODUCTO';
export const FILTER_PRODUCTOS = 'FILTER_PRODUCTOS'

export const selectProducto = (ProductoId) => ({
    type: SELECT_PRODUCTO,
    ProductoId,
})

export const filterProductos = (categoryId) => ({
    type: FILTER_PRODUCTOS,
    categoryId,
})