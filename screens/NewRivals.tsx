import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto} from '@expo/vector-icons';
import styles from './newRivals.style';
import { useNavigation } from '@react-navigation/native';

function NewRivals() {
  const navigation = useNavigation<any>();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle" size={30}/>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NewRivals;