import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummyData';

const RecipesScreen = (props) => {
  const { categoryId } = props.route.params;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  return (
    <View style={styles.screen}>
      <Text>The Recipes Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title='Go to Recipe Details!'
        onPress={() => {
          props.navigation.navigate('Recipe Details');
        }}
      />
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

export default RecipesScreen;
