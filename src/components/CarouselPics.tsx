import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {WHITE} from '../assets/colors';
import {trainings} from '../mock/config.json';
import {IImage} from '../types/image';

const width = Dimensions.get('screen').width;
interface Props {
  onSnapToItem?: () => void;
  snapCarouselRef: any;
}

const CarouselPics: React.FC<Props> = ({onSnapToItem, snapCarouselRef}) => {
  const _renderItem = ({item, index}: {item: IImage; index: number}) => {
    return (
      <View key={index}>
        <Text style={styles.title}>{item.title}</Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{
            uri: item.url,
          }}
        />
      </View>
    );
  };

  return (
    <Carousel
      layout="default"
      ref={snapCarouselRef}
      data={trainings}
      renderItem={_renderItem}
      sliderWidth={width}
      itemWidth={width - 230}
      hasParallaxImages={true}
      inactiveSlideOpacity={0.5}
      onSnapToItem={onSnapToItem}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    color: WHITE,
    alignSelf: 'center',
    fontSize: 20,
    paddingBottom: 20,
  },
  image: {
    width: width - 245,
    height: 250,
    borderRadius: 15,
  },
});

export default CarouselPics;
