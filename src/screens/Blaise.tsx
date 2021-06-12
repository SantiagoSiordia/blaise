import React, { FC } from "react";
import { Layout } from "@ui-kitten/components";
import { Image, StyleSheet } from "react-native";
import TemperatureController from "../components/Controllers/TemperatureController";
import TimeController from "../components/Controllers/TimeController";
import OnButton from "../components/OnButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  blaiseImage: {
    width: 200,
    height: 205,
  },
});

export const Blaise: FC = () => {
  return (
    <Layout style={styles.container}>
      <OnButton />
      <Image
        source={require("../assets/Blaise.png")}
        style={styles.blaiseImage}
      />
      <TemperatureController />
      <TimeController />
    </Layout>
  );
};
