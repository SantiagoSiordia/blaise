import React, { FC, useState } from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { alabaster, cerise, evaDark, lapisLazuli } from "../colors";
import { Icon } from "@ui-kitten/components";

const styles = StyleSheet.create({
  submit: {
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
  },
  icon: {
    width: 32,
    height: 32,
  },
  container: {
    alignItems: "center",
  },
  isOn: {
    color: alabaster,
  },
});

const OnButton: FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Text style={styles.isOn}>{isOn ? "Encendido" : "Apagado"}</Text>
      <Pressable
        android_ripple={{
          color: lapisLazuli,
          borderless: false,
          radius: 30,
        }}
        style={[
          styles.submit,
          {
            backgroundColor: isOn ? cerise : evaDark,
          },
        ]}
        onPress={() => {
          setIsOn((prev) => !prev);
        }}>
        <Icon
          style={styles.icon}
          fill={isOn ? alabaster : cerise}
          name="power"
        />
      </Pressable>
    </View>
  );
};

export default OnButton;
