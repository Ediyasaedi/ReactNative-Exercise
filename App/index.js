import React from 'react';
 import { LoginScreen, KeywordPage } from './screens';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';

 const Stack = createStackNavigator();
 
 const App = () =>  {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="KeywordPage" screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="KeywordPage" component={KeywordPage} />
      </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 export default App;
 