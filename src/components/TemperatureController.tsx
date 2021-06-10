import React, { FC, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { alabaster, cerise, lapisLazuli } from "../colors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/RootReducer";
import { appReducer } from "../features/AppReducer";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    borderColor: alabaster,
    borderWidth: 1,
    width: "100%",
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
    justifyContent: "space-around",
    width: "100%",
  },
});

const TemperatureController: FC = () => {
  const temperature = useSelector(
    (state: RootState) => state.app.defaultTemperature,
  );

  const isDefaultTemperature = useSelector(
    (state: RootState) => state.app.isDefaultTemperature,
  );

  const [userTemperature, setUserTemperature] = useState<string>("");

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Temperatura actual {temperature} ℃</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={setUserTemperature}
          value={userTemperature}
          placeholder={"Nueva"}
          placeholderTextColor={alabaster}
        />
        <Button
          title={
            isDefaultTemperature
              ? "Actualizar temperatura"
              : "Resetear temperatura"
          }
          disabled={userTemperature === "" && isDefaultTemperature}
          onPress={() => {
            if (userTemperature.length > 0) {
              dispatch(
                appReducer.actions.setDefaultTemperature(+userTemperature),
              );
              setUserTemperature("");
            } else dispatch(appReducer.actions.resetDefaultTemperature());
          }}
          color={lapisLazuli}
        />
      </View>
    </View>
  );
};

export default TemperatureController;
