import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './welcome.styles';
import { COLORS, SIZES } from '../../constants';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Welcome() {
  const navigation = useNavigation<any>();
  
  return (
    <View>
      <View style={styles().container}>

        <Text 
          style={styles({
            color: COLORS.black, top: SIZES.xSmall}).welcomeText}
        >
          {" "}
          Find The Most
        </Text>

        <Text 
          style={styles({
            color: COLORS.primary, top: 0}).welcomeText}
        >
          {" "}
          Luxurious Furniture
        </Text>

      </View>

      <View style={styles().searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles().searchIcon}/>
        </TouchableOpacity>

        <View style={styles().serachWrapper}>
          <TextInput
            style={styles().searchInput}
            value=""
            onPressIn={() => navigation.navigate("Search")}
            placeholder='What are you looking for'
          />
        </View>

        <View>
          <TouchableOpacity style={styles().searchButton}>
            <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offwhite}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Welcome;