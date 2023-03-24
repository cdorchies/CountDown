import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import CountDownTimer from "./components/countdown";

export default function App() {
  return (
    <View>
      <CountDownTimer />
      <StatusBar style="auto" />
    </View>
  );
}
