import React, { FC, useState } from "react";
import { Button, TextInput, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { alabaster, lapisLazuli } from "../../colors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/RootReducer";
import { appReducer } from "../../features/AppReducer";
import styles from "./styles";
import minutesToMinutesAndSeconds from "../../utils/minutesToMinutesAndSeconds";

const TimeSetting: FC = () => {
  const defaultTimeSet = useSelector(
    (state: RootState) => state.app.defaultTimeSet,
  );

  const [newTime, setNewTime] = useState<number | undefined>(defaultTimeSet);

  const [minutes, seconds] = minutesToMinutesAndSeconds(defaultTimeSet);

  const dispatch = useDispatch();

  const handleSetDefaultTime = (t: number) =>
    dispatch(appReducer.actions.setDefaultTimeSet(t));

  return (
    <View style={styles.container}>
      <View style={styles.remainingTime}>
        <Text style={styles.time}>Tiempo por defecto</Text>
        <Text style={styles.time}>{`${String(minutes).padStart(
          2,
          "0",
        )}:${String(seconds).padStart(2, "0")}`}</Text>
      </View>
      <View style={styles.buttons}>
        <TextInput
          style={styles.input}
          onChangeText={(v) => setNewTime(+v)}
          value={newTime + ""}
          placeholder={"Nuevo"}
          placeholderTextColor={alabaster}
        />
        <Button
          title={"Actualizar"}
          onPress={() => handleSetDefaultTime(20)}
          color={lapisLazuli}
        />
      </View>
    </View>
  );
};

export default TimeSetting;
