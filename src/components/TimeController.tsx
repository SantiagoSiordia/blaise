import React, { FC, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { alabaster, cerise, evaDark, lapisLazuli } from "../colors";
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
  const timeSet = useSelector((state: RootState) => state.app.timeSet);

  // const isDefaultTimeSet = useSelector(
  //   (state: RootState) => state.app.isDefaultTimeSet,
  // );

  const [isPaused, setIsPaused] = useState<boolean>(true);

  const [minutes, seconds] = minutesToMinutesAndSeconds(timeSet);

  const dispatch = useDispatch();

  // const t = setInterval(() => {
  //   if (!isPaused) {
  //     dispatch(appReducer.actions.decrementTimeSet());
  //   }
  // }, 1000);

  const handleReset = () => {
    dispatch(appReducer.actions.resetDefaultTimeSet());
  };

  const handlePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.remainingTime}>
        <Text style={styles.time}>Tiempo restante</Text>
        <Text style={styles.time}>{`${String(minutes).padStart(
          2,
          "0",
        )}:${String(seconds).padStart(2, "0")}`}</Text>
      </View>
      <View style={styles.buttons}>
        <Button
          title={isPaused ? "Iniciar" : "Pausa"}
          onPress={handlePause}
          color={isPaused ? lapisLazuli : evaDark}
        />
        <Button title={"Reiniciar"} onPress={handleReset} color={lapisLazuli} />
      </View>
    </View>
  );
};

export default TimeController;
