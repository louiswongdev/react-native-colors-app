import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';

import SingleColorBox from './SingleColorBox';

const PalettePreview = ({ handlePress, colorPalette }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{colorPalette.paletteName}</Text>
      <FlatList
        style={styles.list}
        data={colorPalette.colors.slice(0, 5)}
        keyExtractor={item => item.colorName}
        renderItem={({ item }) => (
          <SingleColorBox color={item} />
          // <View style={[styles.box, { backgroundColor: item.hexCode }]} />
        )}
      />
    </TouchableOpacity>
  );
};

export default PalettePreview;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  list: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});
