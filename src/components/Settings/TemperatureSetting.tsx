import React, { FC, useState } from "react";
import { Button, TextInput, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { alabaster, lapisLazuli } from "../../colors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/RootReducer";
import { appReducer } from "../../features/AppReducer";
import styles from "./styles";

const TemperatureSetting: FC = () => {
  const defaultTemperature = useSelector(
    (state: RootState) => state.app.defaultTemperature,
  );

  const [newTemperature, setNewTemperature] = useState<number>(
    defaultTemperature,
  );

  const dispatch = useDispatch();

  const handleSetDefaultTemperature = (t: number) =>
    dispatch(appReducer.actions.setDefaultTemperature(t));

  return (
    <View style={styles.container}>
      <View style={styles.remainingTime}>
        <Text style={styles.time}>Temperatura por defecto</Text>
        <Text style={styles.time}>{defaultTemperature}</Text>
      </View>
      <View style={styles.buttons}>
        <TextInput
          style={styles.input}
          onChangeText={(v) => setNewTemperature(+v)}
          value={newTemperature + ""}
          placeholder={"Nuevo"}
          placeholderTextColor={alabaster}
        />
        <Button
          title={"Actualizar"}
          onPress={() => handleSetDefaultTemperature(newTemperature)}
          color={lapisLazuli}
        />
      </View>
    </View>
  );
};

export default TemperatureSetting;
