import { FlatList, View, StyleSheet } from 'react-native'
import React from 'react'
//import { CATEGORIES } from '../data/categories'
import GridItem from '../components/GridItem'
import { useSelector, useDispatch } from 'react-redux'
import { selectCategory } from '../store/actions/category.action'

const CategoriesScreen = ({ navigation }) => {

    const categories = useSelector(state => state.categories.categories)
    const dispatch = useDispatch()

    const onHandleSelectedCategory = (item) => {
        dispatch(selectCategory(item.id))

        navigation.push("Productos", { name: item.title })

    }

    const renderGridItem = ({ item }) => {
        return (
            <View style={styles.container}>

                <GridItem item={item} onSelected={onHandleSelectedCategory} />

            </View>
        )
    }

    return (
        <FlatList style={styles.container}
            data={categories}
            renderItem={renderGridItem}
            keyExtractor={item => item.id}
            numColumns={2}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    
     
    }
})
export default CategoriesScreen

