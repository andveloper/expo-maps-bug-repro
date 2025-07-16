import {
  AppleMaps,
  getPermissionsAsync,
  requestPermissionsAsync,
} from "expo-maps";
import { Button, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppleMaps.View style={{ flex: 1 }} />

      <View style={{ flex: 1, justifyContent: "center" }}>
        <Button
          title="requestPermissionsAsync"
          onPress={() => requestPermissionsAsync()}
        />
        <Button
          title="getPermissionsAsync"
          onPress={() => getPermissionsAsync()}
        />
      </View>
    </View>
  );
}
