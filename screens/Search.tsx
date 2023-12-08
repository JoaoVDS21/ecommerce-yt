import React from 'react';
import { View, TextInput, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './search.style';

import { COLORS, SIZES } from '../constants';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Search() {
  const navigation = useNavigation<any>();
  
  return (
    <SafeAreaView>
      
      <View style={styles().searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles().searchIcon}/>
        </TouchableOpacity>

        <View style={styles().serachWrapper}>
          <TextInput
            style={styles().searchInput}
            value=""
            onPressIn={() => {}}
            placeholder='What are you looking for'
          />
        </View>

        <View>
          <TouchableOpacity style={styles().searchButton}>
            <Feather 
              name="search" 
              size={24}  
              color={COLORS.offwhite}
            />
          </TouchableOpacity>
        </View>
      </View>
      
    </SafeAreaView>
  );
}

export default Search;