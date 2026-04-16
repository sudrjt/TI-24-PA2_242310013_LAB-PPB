import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Index = () => {
  const biodata = {
    nama: "Nefer MBG (My Bini Gue)",
    npm: "7777777",
    alamat: "My Heart",
    email: "mybinigue@gmail.com",
    no_telp: "123123132",
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.headers.img}
        source={require("../../../assets/avatar/Nefer.png")}
      ></Image>
      <Text style={styles.headers.title}>{biodata.nama}</Text>
      <Text style={styles.headers.subtitle}>{biodata.npm}</Text>

      <View style={styles.identity.container}>
        <View style={styles.identity.card_input}>
          <Text style={styles.identity.title}>Phone</Text>
          <TextInput
            style={styles.identity.input_text}
            value={biodata.no_telp}
            autoFocus
          ></TextInput>
        </View>
      </View>

      <View style={styles.identity.container}>
        <View style={styles.identity.card_input}>
          <Text style={styles.identity.title}>Alamat</Text>
          <TextInput
            style={styles.identity.input_text}
            value={biodata.alamat}
            autoFocus
          ></TextInput>
        </View>
      </View>

      <View style={styles.identity.container}>
        <View style={styles.identity.card_input}>
          <Text style={styles.identity.title}>Email</Text>
          <TextInput
            style={styles.identity.input_text}
            value={biodata.email}
            autoFocus
          ></TextInput>
        </View>
      </View>
      <View style={{ marginTop: 15 }}>
        <TouchableOpacity style={styles.identity.button}>
          <Text style={styles.identity.button_text}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headers: {
    title: {
      fontWeight: "bold",
      fontSize: 40,
    },
    subtitle: {
      fontWeight: "bold",
      fontSize: 20,
      color: "blue",
    },
    img: {
      width: 150,
      height: 150,
      borderRadius: 100,
      borderColor: "black",
      borderWidth: 4,
      padding: 2,
      backgroundColor: "#f2f2f2",
    },
  },
  identity: {
    container: {
      alignSelf: "stretch",
      padding: 10,
      // marginTop: 20,
    },
    card_input: {
      borderWidth: 1,
      borderColor: "#9b9d9f",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginBottom: 10,
    },
    title: {
      color: "#9b9d9f",
      fontSize: 16,
      marginBottom: 0,
    },
    input_text: {
      color: "#000",
      fontSize: 16,
      padding: 0,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#0ea6d0",
      padding: 15,
      paddingHorizontal: 50,
      borderRadius: 10,
    },
    button_text: {
      fontSize: 18,
      color: "white",
      fontWeight: "bold",
    },
  },
});

export default Index;
