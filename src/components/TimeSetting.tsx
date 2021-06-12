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
    alignItems: "center",
  },
  remainingTime: {
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
  },
  time: {
    fontSize: 20,
    fontWeight: "bold",
    fontVariant: ["tabular-nums"],
  },
});

const minutesToMinutesAndSeconds = (minutes: number) => [
  Math.floor((minutes * 60) / 60),
  Math.floor((minutes * 60) % 60),
];

const TimeController: FC = () => {
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

export default TimeController;
