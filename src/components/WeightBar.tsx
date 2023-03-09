import {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {WHITE} from '../assets/colors';

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
  const _renderItem = ({item, index}) => {
    return <Text style={styles.count}>{item.count}</Text>;
  };

  return (
    <View >
      <Text style={styles.title}>Укажите вес с которым вы работали</Text>
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
    fontSize: 20,
    paddingBottom: 20,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 15,
  },
  count:{
    color: WHITE,
    alignSelf: 'center',
    fontSize: 40,
    paddingBottom: 20,
  }
});
export default WeightBar;
