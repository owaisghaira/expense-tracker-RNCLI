import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../components/Home'
import AddTracsaction from '../components/AddTransaction'
import Card from '../components/Card'
const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{title:'Home Screen'}}/>
                <Stack.Screen name="Add" component={AddTracsaction}  options={{title:'Add Expense'}}/>
                <Stack.Screen name="Card" component={Card} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Router;