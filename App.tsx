import React from 'react';
import { CurrenciesScreen } from './src/screens/currencies-screen/CurrenciesScreen';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CurrencyScreen } from './src/screens/currency-screen/CurrencyScreen';

const client = new ApolloClient({
  uri: 'http:/192.168.0.11:4000/graphql',
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={CurrenciesScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="DetailCurrency"
            component={CurrencyScreen}
            options={{
              headerShown: true,
              headerTitle: '7 day period',
              headerStyle: { backgroundColor: '#0E0F1E' },
              headerTitleStyle: { color: '#F4F2FE' },
              headerTintColor: '#ffd5af',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
