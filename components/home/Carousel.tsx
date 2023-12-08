import React from 'react';
import { Dimensions, View, Text, StyleSheet, Image } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import CarouselSlider from 'react-native-reanimated-carousel';

import { COLORS, SIZES } from '../../constants';

function Carousel() {
  const slides = [
    require('../../assets/images/fn1.jpg'),
    require('../../assets/images/fn2.jpg'),
    require('../../assets/images/fn3.jpg')
  ];
  
  const width = Dimensions.get('window').width;
  
  console.log(width)
  
  return (
    <View style={styles.carouselContainer}>
      <CarouselSlider
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={slides}
        scrollAnimationDuration={1500}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        renderItem={({ index, item}: any) => (
          <View
              style={{
                flex: 1,
                justifyContent: 'center',
                borderRadius: SIZES.small,
                overflow: 'hidden'
              }}
          >
            <Image 
              source={slides[index]}
              style={{
                flex: 1,
                width: '100%',
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center"
  }
})