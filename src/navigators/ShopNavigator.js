import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Platform } from 'react-native'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryProductoScreen from '../screens/CategoryProductoScreen'
import ProductoDetailScreen from '../screens/ProductoDetailScreen'
import colors from '../constants/colors'

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    
        <Stack.Navigator 
            initialRouteName="Home"
                options={{
                    headerStyle: {backgroundColor: Platform.OS === "android" ? colors.primary : ""},
                    headerTintColor: Platform.OS === "android" ? "white" : colors.primary,
                    headerTitleStyle: {fontWeight: "Bold"},
                }}
            >

                
                <Stack.Screen 
                    name="Home" 
                    component={CategoriesScreen}
                    options= {{
                        title: "Verduleria"
                    }}
                    />
                    <Stack.Screen 
                    name="Productos" 
                    component={CategoryProductoScreen} 
                    options={({route})=>({title: route.params.name})}
                />
                <Stack.Screen 
                    name="Detail" 
                    component={ProductoDetailScreen} 
                    options={({route})=>({title: route.params.name})}
                    />
        </Stack.Navigator>
  )
}

export default ShopNavigator