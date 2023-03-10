import React, {useCallback, useRef, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {BLACK} from './assets/colors';
import CarouselPics from './components/CarouselPics';
import Header from './components/Header';
import MainButton from './components/MainButton';
import Repeats from './components/Repeats';
import WeightBar from './components/WeightBar';

function Main() {
  const snapCarouselRef = useRef(null);
  const [count, setCount] = useState<number>(1);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);

  const onSnapToNext = useCallback(() => {
    if (count < 3) {
      snapCarouselRef.current && snapCarouselRef.current.snapToNext();
      setCount(count + 1);
      setSelectedIndex(selectedIndex + 1);
    } else {
      setDisabled(true);
    }
  }, [count, selectedIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <Header count={count} />
      <CarouselPics snapCarouselRef={snapCarouselRef} />
      <WeightBar />
      <Repeats />
      <MainButton count={count} disabled={disabled} onPress={onSnapToNext} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
  },
});
export default Main;
