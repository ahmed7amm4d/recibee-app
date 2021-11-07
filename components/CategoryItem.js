import React from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet, ImageBackground } from 'react-native';

const CategoryItem = (props) => {
  return (
    <ImageBackground source={{ uri: props.image }} style={styles.gridItem}>
      <TouchableNativeFeedback style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={styles.container}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'exo-regular',
    fontSize: 18,
    color: 'white',
  },
});

export default CategoryItem;
