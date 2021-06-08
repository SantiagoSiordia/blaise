import React, { FC, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { alabaster, cerise, lapisLazuli } from "../colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    borderColor: alabaster,
    borderWidth: 1,
    marginVertical: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    color: alabaster,
    borderColor: cerise,
    borderRadius: 8,
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

const TemperatureController: FC = () => {
  const [temperature, setTemperature] = useState<string>("250");
  const [userTemperature, setUserTemperature] = useState<string>("");
  return (
    <View style={styles.container}>
      <Text>Temperatura actual {temperature} ℃</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setUserTemperature}
          value={userTemperature}
          placeholder={"Temperatura"}
          placeholderTextColor={alabaster}
        />
        <Button
          title={"Actualizar temperatura"}
          onPress={() => {
            setTemperature(userTemperature);
          }}
          color={lapisLazuli}
        />
      </View>
    </View>
  );
};

export default TemperatureController;
