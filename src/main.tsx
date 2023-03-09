import React from 'react';
import {SafeAreaView} from 'react-native';
import {BLACK} from './assets/colors';
import Caroucel from './components/Caroucel';
import Header from './components/Header';
import MainButton from './components/MainButton';
import Repeats from './components/Repeats';
import WeightBar from './components/WeightBar';

function Main() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: BLACK}}>
      <Header />
      <Caroucel />
      <WeightBar />
      <Repeats />
      <MainButton />
    </SafeAreaView>
  );
}

export default Main;
