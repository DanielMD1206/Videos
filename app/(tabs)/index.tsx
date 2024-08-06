import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function app() {
  return (
    <View style={style.container}>
      <Text>Aora ADSO!!!!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color: 'black'}}>Go to profile</Link>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
