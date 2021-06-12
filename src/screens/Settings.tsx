import React, { FC } from "react";
import { Layout, Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../features/RootReducer";
import TimeSetting from "../components/TimeSetting";

const styles = StyleSheet.create({
  settingsScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

const Settings: FC = () => {
  const defaultTemperature = useSelector(
    (state: RootState) => state.app.defaultTemperature,
  );
  return (
    <Layout style={styles.settingsScreenContainer}>
      <View>
        <Text>Temperatura por defecto</Text>
        <Text>{defaultTemperature}</Text>
      </View>
      <TimeSetting />
    </Layout>
  );
};

export default Settings;
