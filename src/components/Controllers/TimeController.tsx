import React, { FC, useState } from "react";
import { Button, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { evaDark, lapisLazuli } from "../../colors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/RootReducer";
import { appReducer } from "../../features/AppReducer";
import minutesToMinutesAndSeconds from "../../utils/minutesToMinutesAndSeconds";
import styles from "./styles";

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
