import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummyData';
import CategoryItem from '../components/CategoryItem';

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryItem
        title={itemData.item.title}
        image={itemData.item.image}
        onSelect={() => {
          props.navigation.navigate('Recipes', {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
          });
        }}
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem} />
  );
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
