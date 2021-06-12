import React, { FC } from "react";
import { Layout } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import TimeSetting from "../components/Settings/TimeSetting";
import TemperatureSetting from "../components/Settings/TemperatureSetting";

const styles = StyleSheet.create({
  settingsScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

const Settings: FC = () => {
  return (
    <Layout style={styles.settingsScreenContainer}>
      <TemperatureSetting />
      <TimeSetting />
    </Layout>
  );
};

export default Settings;
