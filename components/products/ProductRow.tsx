import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constants';
import styles from './productRow.style';
import ProductCardView from './ProductCardView';

function ProductRow() {
  const products = [1,2,3,4];
  
  return (
    <View style={styles.container}>
      <FlatList 
        data={products}
        renderItem={({item}) => <ProductCardView />}
        horizontal
        contentContainerStyle={{columnGap: SIZES.xLarge}}
      />
    </View>
  )
}

export default ProductRow;