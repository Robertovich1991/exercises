import {useRef} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {WHITE} from '../assets/colors';

const data = [
  {
    url: 'https://hips.hearstapps.com/hmg-prod/images/box-jump-workout-royalty-free-image-1673652608.jpg?crop=0.668xw:1.00xh;0.0697xw,0&resize=1200:*',
    title: 'Training 1',
    text: 'Text 1',
  },
  {
    url: 'https://cdn.centr.com/content/11000/10727/images/landscapemobile2x-header-43-1.jpg',
    title: 'Training 2',
    text: 'Text 2',
  },
  {
    url: 'https://qph.cf2.quoracdn.net/main-qimg-a270201db41916968f371c66ac4d24d3-lq',
    title: 'Training 3',
    text: 'Text 3',
  },
];

const Caroucel: React.FC = () => {
  const ref = useRef(null);
  const _renderItem = ({item, index}) => {
    return (
      <View>
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
      layout={'default'}
      ref={ref}
      data={data}
      renderItem={_renderItem}
      sliderWidth={400}
      itemWidth={200}
      hasParallaxImages={true}
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
    width: 200,
    height: 250,
    borderRadius: 15,
  },
});
export default Caroucel;
