import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

interface PropsPin {
    title: string;
    imageUri: string;
}

export const Pin = ({title, imageUri}: PropsPin) => {
    const [ration, setRation] = useState(1);
    const onLike = () => {};

    useEffect(() => {
        Image.getSize(imageUri, (width, height) => setRation(width / height));
    }, [imageUri]);


  return (
    <View style={styles.pinContainer}>
        <View>
            <Image
                source={{
                uri: imageUri,
                }}
                style={[styles.image, {aspectRatio: ration}]}
            />

            <Pressable onPress={onLike} style={styles.heartButton}>
                <AntDesign name="hearto" size={24} color="black" />
            </Pressable>
        </View>

      <Text style={styles.title} numberOfLines={2}>{title}</Text>
    </View>
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
      backgroundColor: '#D3CFD4',
      position: "absolute",
      right: 10,
      bottom: 10,
      padding: 7,
      borderRadius: 20,
  },
});
