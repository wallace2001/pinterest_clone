import { ScrollView, StyleSheet } from "react-native";
import pins from "../assets/data/pins";
import { Pin } from "../components/Pin";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {pins.map((pin) => (
          <Pin key={pin.id} title={pin.title} imageUri={pin.image} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
