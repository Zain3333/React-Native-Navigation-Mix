import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./component/navigation/bottomTabNav";
import DrawerNavigator from "./component/navigation/drawerNav";

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
}
export default App;