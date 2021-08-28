import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { AboutStackNAvigator, ContactStackNavigator } from "./stackNav";
import TabNavigator from "./bottomTabNav";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
      <Drawer.Screen name="About" component={AboutStackNAvigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;