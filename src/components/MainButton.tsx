import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { WHITE } from '../assets/colors';

interface Props {
  onPress?: () => void;
  count: number;
}

const FollowAuthor: React.FC<Props> = ({onPress, count}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.box}>
      <Text style={styles.title}>ПОДТВЕРДИТЬ ({count} из 3)</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  border: {
    borderRadius: 20,
    padding: 1,
  },
  box: {
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 11,
    lineHeight: 24,
    fontWeight: '700',
  },
});

export default FollowAuthor;
