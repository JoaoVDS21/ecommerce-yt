import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import {Ionicons, SimpleLineIcons} from '@expo/vector-icons';
import styles from './productDetails.style';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants';

interface ProductDetailsProps {
  navigation: any;
}

function ProductDetails({navigation}: ProductDetailsProps) {
  const [count, setCount] = useState(1);
  
  function increment() {
    setCount(prevState => prevState + 1);
  }

  function decrement() {
    setCount(prevState => prevState > 1 ? prevState - 1 : prevState);
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="heart" size={30} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>

      <ImageBackground
        source={require('../../app/assets/images/fn1.jpg')}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>

          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ 50.00</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1,2,3,4,5].map((index) => (
              <Ionicons 
                key={index}
                name='star'
                size={24}
                color='gold'
              />
            ))}

            <Text style={styles.ratingText}>  (4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={increment}>
              <SimpleLineIcons name='plus' size={20}/>
            </TouchableOpacity>

            <Text style={styles.ratingText}>  {count}  </Text>

            <TouchableOpacity onPress={decrement}>
              <SimpleLineIcons name='minus' size={20}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProductDetails;