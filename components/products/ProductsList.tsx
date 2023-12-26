import React from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import styles from './productsList.style';
import useFetch from '../../hook/useFetch';
import { COLORS, SIZES } from '../../constants';
import ProductCardView from './ProductCardView';

function ProductsList() {
  const { data, isLoading, error, refetch } = useFetch();

  if(isLoading){
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
      </View>
    )
  }
  
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        numColumns={2}
        renderItem={(item: any) => (<ProductCardView item={item}/>)}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator}/>}
      />
    </View>
  )
}

export default ProductsList;