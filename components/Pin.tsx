import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface PropsPin {
  title: string;
  imageUri: string;
  id: number | string;
}

export const Pin = ({ title, imageUri, id }: PropsPin) => {
  const [ration, setRation] = useState(1);

  const navigation = useNavigation();

  const onLike = () => {};
  const goToPinPage = () => {
    navigation.navigate("Pin", { id });
  };

  useEffect(() => {
    Image.getSize(imageUri, (width, height) => setRation(width / height));
  }, [imageUri]);

  return (
    <Pressable onPress={goToPinPage} style={styles.pinContainer}>
      <View>
        <Image
          source={{
            uri: imageUri,
          }}
          style={[styles.image, { aspectRatio: ration }]}
        />

        <Pressable onPress={onLike} style={styles.heartButton}>
          <AntDesign name="hearto" size={24} color="black" />
        </Pressable>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pinContainer: {
    width: "100%",
    padding: 4,
  },
  image: {
    width: "100%",
    borderRadius: 25,
    aspectRatio: 1 / 1,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    color: "#181818",
    margin: 5,
  },
  heartButton: {
    backgroundColor: "#D3CFD4",
    position: "absolute",
    right: 10,
    bottom: 10,
    padding: 7,
    borderRadius: 20,
  },
});
