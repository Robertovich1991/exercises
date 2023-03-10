import React from 'react';

import {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {WHITE} from '../assets/colors';
import {ICount} from '../types/image';

const data = [
  {
    count: 1,
  },
  {
    count: 2,
  },
  {
    count: 3,
  },
  {count: 4},
];

const WeightBar: React.FC = () => {
  const ref = useRef(null);
  const _renderItem = ({item, index}: {item: ICount; index: number}) => {
    return (
      <View key={index} style={styles.block}>
        <View style={styles.line} />
        <Text style={styles.count}>{item.count}</Text>
        <View style={styles.line} />
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.title}>УКАЖИТЕ ВЕС С КОТОРЫМ ВЫ РАБОТАЛИ</Text>
      <Carousel
        layout={'default'}
        ref={ref}
        data={data}
        renderItem={_renderItem}
        sliderWidth={430}
        itemWidth={100}
        hasParallaxImages={true}
        inactiveSlideScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: WHITE,
    alignSelf: 'center',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  image: {
    width: 180,
    height: 300,
    borderRadius: 15,
  },
  count: {
    color: WHITE,
    alignSelf: 'center',
    fontSize: 50,
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  line: {
    width: 2,
    height: 30,
    backgroundColor: WHITE,
    opacity: 0.3,
  },
});
export default WeightBar;
