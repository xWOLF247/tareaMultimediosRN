import React from "react";
import 'react-native-gesture-handler'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from "./Navegacion/Home";
import Home2 from "./Navegacion/Home2";
import HomeBtn from "./Navegacion/HomeBtn";
import RegisterApp from "./Navegacion/RegisterApp";
import { createStackNavigator } from "@react-navigation/stack";
import RecuperarCuenta from "./Navegacion/CrearAcc"
import Recuperar1 from "./Navegacion/Recuperar1";
import CrearAcc from "./Navegacion/RecuperarCuenta";
import Login from "./Navegacion/Login";

const Stack = createStackNavigator();

function Stacks (){
return (
    <Stack.Navigator initialRouteName="Login">

    <Stack.Screen name="Login" component={Login}/>

    <Stack.Screen name="CrearAcc" component={CrearAcc}/>

    <Stack.Screen name="Recuperar1" component={Recuperar1}/>

    <Stack.Screen name="RecuperarCuenta" component={RecuperarCuenta}/>

    </Stack.Navigator> 
)}

const TabNav = createBottomTabNavigator();

function Tabs() {
    return (
        <TabNav.Navigator
           // initialRouteName="Home"
           // screenOptions={{
           //     tabBarActiveTintColor: 'green', }} 
            >

            <TabNav.Screen 
            name="Home" 
            component={Stacks}
            options={{
                tabBarLabel: 'Home', //se utiliza para asignar nombre a la opción del botón
                tabBarIcon:  ({color, size}) => (
                    <MaterialCommunityIcons name="home" color={color} size={size}/> //se utiliza renderizar el icon
                ),
                tabBarBadge: 3, //se utiliza para las notificaciones
                headerShown: false, //oculta el header
            }}/>

            {/*<TabNav.Screen name="Home2" component={Home2}/> */}
            
        </TabNav.Navigator>
    )
}

export default function Navegacion() {
    return( 

        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>

      );
}