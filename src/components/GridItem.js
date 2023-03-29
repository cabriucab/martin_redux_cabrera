import { StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native'
import React from 'react'

const GridItem = ({item,onSelected}) => {
  return (
    <View style={styles.gridItem}>
        <TouchableOpacity
            onPress={()=>onSelected(item)}
            style={{...styles.container}}
        >
            <Image source= {item.image} style={styles.imagen} />
            <View style={styles.title}>
                
                <Text style={styles.titulo} >{item.title}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default GridItem

const styles = StyleSheet.create({
    titulo:{
        fontFamily: 'OpenSans_700Bold',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
       
    },
    gridItem:{
        flex:1,
        borderRadius:6,
        marginBottom:30,
        height:200,
    },
    imagen:{
        width:'100 %',
        height:'100%',
        resizeMode: 'contain',
      
    },
    container:{
        flex:1,

        
    },
    title:{
        fontFamily: 'OpenSans_700Bold'
    }
})