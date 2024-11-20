import { useState } from "react";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  Button,
  ScrollView,
} from "react-native";

export default function TabTwoScreen() {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    return setCounter((c) => c + 1);
  };
  console.log(counter);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
      <Button title="press to increase" onPress={handleCounter} />
      <Text style={styles.text}>{counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "2rem",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
