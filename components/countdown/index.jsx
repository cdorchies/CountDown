import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import styles from "./styles";

export default function RandomCountDownTimer() {
  const [countDownDate, setCountDownDate] = useState(
    new Date().getTime() + Math.floor(Math.random() * 1000000000)
  ); // Génère une date et heure aléatoire
  const [timeRemaining, setTimeRemaining] = useState({});

  const calculateTimeRemaining = () => {
    let difference = +countDownDate - +new Date();
    let timeRemaining = {};

    if (difference > 0) {
      timeRemaining = {
        ans: Math.floor(difference / (365 * 24 * 60 * 60)),
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60),
      };
    }

    setTimeRemaining(timeRemaining);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeRemaining();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <View style={styles.container}>
        {timeRemaining.jours && (
          <>
            <View style={styles.bloc1}>
              <Image
                source={require("../../assets/img/unnamed.png")}
                style={styles.logo}
              />
            </View>

            <View style={styles.bloc2}>
              <Text
                style={timeRemaining.ans === 0 ? styles.textRed : styles.text}
              >
                {timeRemaining.ans} <Text style={styles.span}>yrs</Text>
              </Text>
              <Text
                style={
                  timeRemaining.jours === 0 && timeRemaining.ans === 0
                    ? styles.textRed
                    : styles.text
                }
              >
                {timeRemaining.jours} <Text style={styles.span}>day</Text>
              </Text>
              <Text
                style={
                  timeRemaining.heures === 0 &&
                  timeRemaining.jours === 0 &&
                  timeRemaining.ans === 0
                    ? styles.textRed
                    : styles.text
                }
              >
                {timeRemaining.heures} <Text style={styles.span}>hrs</Text>
              </Text>
              <Text
                style={
                  timeRemaining.minutes === 0 &&
                  timeRemaining.heures === 0 &&
                  timeRemaining.jours === 0 &&
                  timeRemaining.ans === 0
                    ? styles.textRed
                    : styles.text
                }
              >
                {timeRemaining.minutes} <Text style={styles.span}>min</Text>
              </Text>
              <Text
                style={
                  timeRemaining.secondes === 0 &&
                  timeRemaining.minutes === 0 &&
                  timeRemaining.heures === 0 &&
                  timeRemaining.jours === 0 &&
                  timeRemaining.ans === 0
                    ? styles.textRed
                    : styles.text
                }
              >
                {timeRemaining.secondes} <Text style={styles.span}>sec</Text>
              </Text>
            </View>
          </>
        )}
      </View>
    </>
  );
}
