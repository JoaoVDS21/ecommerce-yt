import React from 'react';
import { Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constants';
import styles from './productCardView.style';
import { useNavigation } from '@react-navigation/native';

function ProductCardView() {  
  const navigation = useNavigation<any>();
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={require('../../assets/images/fn1.jpg')}
            style={styles.image}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>Product</Text>
          <Text style={styles.supplier} numberOfLines={1}>Product</Text>
          <Text style={styles.price} numberOfLines={1}>$ 50.00</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add-circle" size={35} color={COLORS.primary}/>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default ProductCardView;