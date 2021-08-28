import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../home";
import About from "../about";
import Contact from "../contact";
import Setting from "../setting";
import DrawerNavigator from "./drawerNav";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
    );
}


const AboutStackNAvigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
}
const ContactStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator, ContactStackNavigator,AboutStackNAvigator };