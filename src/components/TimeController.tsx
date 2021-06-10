import React, { FC, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { alabaster, cerise, evaDark, lapisLazuli } from "../colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    borderColor: alabaster,
    borderWidth: 1,
    marginVertical: 16,
    width: "100%",
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
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

const TimeController: FC = () => {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Text>Tiempo restante</Text>
      <View style={styles.form}>
        <Text> 00:00.00</Text>
      </View>
      <View style={styles.buttons}>
        <Button
          title={isPaused ? "Continuar" : "Pausa"}
          onPress={() => {
            setIsPaused((prev) => !prev);
          }}
          color={isPaused ? lapisLazuli : evaDark}
        />
        <Button
          title={"Cancelar"}
          onPress={() => {
            return;
          }}
          color={cerise}
        />
      </View>
    </View>
  );
};

export default TimeController;
