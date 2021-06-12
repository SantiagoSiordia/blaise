import React, { FC, useState } from "react";
import { Button, TextInput, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { alabaster, lapisLazuli } from "../../colors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/RootReducer";
import { appReducer } from "../../features/AppReducer";
import styles from "./styles";

const TemperatureController: FC = () => {
  const temperature = useSelector((state: RootState) => state.app.temperature);

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
            isDefaultTemperature || userTemperature !== ""
              ? "Actualizar temperatura"
              : "Resetear temperatura"
          }
          disabled={userTemperature === "" && isDefaultTemperature}
          onPress={() => {
            if (userTemperature.length > 0) {
              dispatch(appReducer.actions.setTemperature(+userTemperature));
              setUserTemperature("");
            } else dispatch(appReducer.actions.resetTemperature());
          }}
          color={lapisLazuli}
        />
      </View>
    </View>
  );
};

export default TemperatureController;
