import React from "react";
import { Icon } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { grey, lapisLazuli } from "../colors";
import { Blaise } from "../screens/Blaise";
import Settings from "../screens/Settings";

const styles = StyleSheet.create({
  icon: { width: 25, height: 25, marginTop: 15 },
  settingsScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Tab = createBottomTabNavigator();

const displayIcon = ({ route }: { route: { name: string } }) => ({
  tabBarIcon: ({ focused }: { focused: boolean }) => {
    let iconName: string = "";

    if (route.name === "Blaise")
      iconName = focused ? "speaker" : "speaker-outline";
    if (route.name === "Ajustes")
      iconName = focused ? "settings-2" : "settings-2-outline";

    const fill = focused ? lapisLazuli : grey;

    return <Icon fill={fill} style={styles.icon} name={iconName} />;
  },
});

export const Navigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={displayIcon}
      tabBarOptions={{
        activeTintColor: lapisLazuli,
        inactiveTintColor: grey,
      }}>
      <Tab.Screen
        name="Blaise"
        component={Blaise}
        // options={{ tabBarBadge: 3 }}
      />
      <Tab.Screen name="Ajustes" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
