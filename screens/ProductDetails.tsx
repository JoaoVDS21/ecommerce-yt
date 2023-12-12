import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import {Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto} from '@expo/vector-icons';
import styles from './productDetails.style';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../constants';

interface ProductDetailsProps {
  navigation: any;
}

function ProductDetails({navigation}: ProductDetailsProps) {
  const [count, setCount] = useState(1);
  
  function increment() {
    setCount(prevState => prevState + 1);
  }

  function decrement() {
    setCount(
      prevState => prevState >  1 
        ? prevState - 1 
        : prevState
    );
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

            <Text style={styles.ratingText}>(4.9)</Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity onPress={increment}>
              <SimpleLineIcons name='plus' size={20}/>
            </TouchableOpacity>

            <Text style={styles.ratingText}>{count}</Text>

            <TouchableOpacity onPress={decrement}>
              <SimpleLineIcons name='minus' size={20}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, similique atque. Saepe, distinctio. Velit est dignissimos fugit, quibusdam porro libero illo facere excepturi deleniti, adipisci deserunt odio vitae error eaque?
          </Text>
        </View>

        <View style={{marginBottom: SIZES.small}}>
          <View style={styles.location}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name="location-outline" size={20}/>
              <Text>   Cerquilho - SP   </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20}/>
              <Text>   Free Delivery   </Text>
            </View>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartButton}>
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={20} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  )
}

export default ProductDetails;