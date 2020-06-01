import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SingleColorBox = ({ color }) => {
  return <View style={[styles.box, { backgroundColor: color.hexCode }]} />;
};

export default SingleColorBox;

const styles = StyleSheet.create({
  box: {
    height: 30,
    width: 30,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});
