import { Slot, Stack} from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function app(){
  return(
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
    </Stack>
  )

  /*
    <View style={styles.container}>
      <Text> Aora adso 2902081 </Text>
      <StatusBar style="auto"/>
    </View>
  */

}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center'
  }
})
  */