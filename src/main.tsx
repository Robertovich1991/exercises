import React from 'react';
import {SafeAreaView} from 'react-native';
import {BLACK} from './assets/colors';
import CarouselPics from './components/CarouselPics';
import Header from './components/Header';
import MainButton from './components/MainButton';
import Repeats from './components/Repeats';
import WeightBar from './components/WeightBar';

function Main() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: BLACK}}>
      <Header />
      <CarouselPics />
      <WeightBar />
      <Repeats />
      <MainButton />
    </SafeAreaView>
  );
}

export default Main;
