import React, { FC } from "react";
import { Layout } from "@ui-kitten/components";
import { Image, StyleSheet } from "react-native";
import TemperatureController from "../components/TemperatureController";

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  blaiseImage: {
    width: 200,
    height: 200,
  },
});

export const Blaise: FC = () => {
  return (
    <Layout style={styles.container}>
      <TemperatureController />
      <Image
        source={require("../assets/Blaise.png")}
        style={styles.blaiseImage}
      />
    </Layout>
  );
};
