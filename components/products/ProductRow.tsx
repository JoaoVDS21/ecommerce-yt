import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constants';
import styles from './productRow.style';
import ProductCardView from './ProductCardView';
import useFetch from '../../hook/useFetch';
import { Product } from '../../types/product';

function ProductRow() {
  const {data, isLoading, error, refetch} = useFetch();
  
  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      )}

      {error && (
        <Text>Someting went wrong</Text>
      )}
      
      {!isLoading && !error && (
        <FlatList 
          data={data}
          keyExtractor={(item: Product) => item._id}
          renderItem={({item}) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{columnGap: SIZES.xLarge}}
        />
      )}
    </View>
  )
}

export default ProductRow;