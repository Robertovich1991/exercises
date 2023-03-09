import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WHITE} from '../assets/colors';

interface Props {
  onPress?: () => void;
  count: number;
}

const Header: React.FC<Props> = ({count}) => {
  return (
    <View>
      <Text style={styles.title}>Triset</Text>
      <Text style={styles.count}>{count}/3</Text>
      <Text style={[styles.title, {paddingTop: 10, paddingBottom: 20}]}>
        ПОДХОД
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: WHITE,
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 25,
  },
  count: {
    color: WHITE,
    fontSize: 22,
    textAlign: 'center',
    paddingTop: 10,
  },
});

export default Header;
