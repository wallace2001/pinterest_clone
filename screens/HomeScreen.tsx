import { ScrollView, StyleSheet } from "react-native";
import pins from "../assets/data/pins";
import { Pin } from "../components/Pin";

import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.column}>
          {pins
            .filter((_, index) => index % 2 === 0)
            .map((pin) => (
              <Pin
                key={pin.id}
                id={pin.id}
                title={pin.title}
                imageUri={pin.image}
              />
            ))}
        </View>

        <View style={styles.column}>
          {pins
            .filter((_, index) => index % 2 === 1)
            .map((pin) => (
              <Pin
                key={pin.id}
                id={pin.id}
                title={pin.title}
                imageUri={pin.image}
              />
            ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
});
