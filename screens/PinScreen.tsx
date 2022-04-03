import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import pins from "../assets/data/pins";

export default function PinScreen() {
  const [ration, setRation] = useState(1);

  const navigation = useNavigation();
  const route = useRoute();
  const insets = useSafeAreaInsets();

  const pin = pins.find((pin) => pin.id === route.params?.id);

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    Image.getSize(pin.image, (width, height) => setRation(width / height));
  }, [pin]);

	if (!pin) {
		return <Text>Pin not found</Text>
	}

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Image
          source={{ uri: pin.image }}
          style={[styles.image, { aspectRatio: ration }]}
        />
        <Text style={styles.title}>{pin.title}</Text>

        <Pressable
          onPress={goBack}
          style={[styles.pressableBack, { top: insets.top + 20 }]}
        >
          <Ionicons name={"chevron-back"} size={35} color="black" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
  },
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 35,
  },
  image: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
  },
  pressableBack: {
    position: "absolute",
    left: 20,
  },
});
