import React from 'react';
import { Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constants';
import styles from './productCardView.style';
import { useNavigation } from '@react-navigation/native';
import { Product } from '../../types/product';

interface ProductCardViewProps {
  item: Product;
}

function ProductCardView({item}: ProductCardViewProps) {  
  const navigation = useNavigation<any>();
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", {item})}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{uri: item.imageUrl}}
            style={styles.image}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.supplier} numberOfLines={1}>{item.supplier}</Text>
          <Text style={styles.price} numberOfLines={1}>$ {item.price}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add-circle" size={35} color={COLORS.primary}/>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default ProductCardView;