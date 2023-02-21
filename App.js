import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={
        (styles = { flex: 1, alignItems: "center", justifyContent: "center" })
      }
    >
      <Text>Hello World</Text>
    </View>
  );
}
