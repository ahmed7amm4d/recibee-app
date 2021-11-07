import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecipeDetailsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Recipe Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecipeDetailsScreen;
