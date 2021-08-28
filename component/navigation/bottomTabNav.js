import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'
import { MainStackNavigator, ContactStackNavigator, AboutStackNAvigator } from "./stackNav";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'About') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Contact') {
                        iconName = focused ? 'call' : 'call-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },

                tabBarBadgeStyle:{fontSize:16}

            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}

            
        >
            <Tab.Screen name="Home" component={MainStackNavigator} />
            <Tab.Screen name="About" component={AboutStackNAvigator} />
            <Tab.Screen name="Contact" component={ContactStackNavigator} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;