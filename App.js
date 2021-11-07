import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import RecipesScreen from './screens/RecipesScreen';
import RecipeDetailsScreen from './screens/RecipeDetailsScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'exo-regular': require('./assets/fonts/Exo-Regular.ttf'),
    'exo-bold': require('./assets/fonts/Exo-Bold.ttf'),
  });
};

const Stack = createNativeStackNavigator();

const App = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  if (!isFontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setIsFontLoaded(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: { fontFamily: 'exo-bold', fontSize: 22 },
        }}>
        <Stack.Screen name='Categories' component={CategoriesScreen} />
        <Stack.Screen
          name='Recipes'
          component={RecipesScreen}
          options={(props) => ({ title: props.route.params.categoryTitle })}
        />
        <Stack.Screen name='Recipe Details' component={RecipeDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
