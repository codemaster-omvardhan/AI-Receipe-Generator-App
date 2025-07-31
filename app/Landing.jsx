import { Marquee } from "@animatereactnative/marquee";
import { useLogto } from "@logto/rn";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Colors from "../services/Colors";

export default function Landing() {
  const { signIn, signOut, isAuthenticated } = useLogto();
  const imageList = [
    require("./../assets/images/1.jpg"),
    require("./../assets/images/c1.jpg"),
    require("./../assets/images/2.jpg"),
    require("./../assets/images/c2.jpg"),
    require("./../assets/images/3.jpg"),
    require("./../assets/images/c3.jpg"),
    require("./../assets/images/4.jpg"),
    require("./../assets/images/5.jpg"),
    require("./../assets/images/6.jpg"),
  ];

  return (
    <GestureHandlerRootView>
      <View>
        <Marquee
          spacing={10}
          speed={0.7}
          style={{ transform: [{ rotate: "-4deg" }] }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image source={image} key={index} style={styles.image} />
            ))}
          </View>
        </Marquee>
        <Marquee
          spacing={10}
          speed={0.4}
          style={{ transform: [{ rotate: "-4deg" }], marginTop: 10 }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image source={image} key={index} style={styles.image} />
            ))}
          </View>
        </Marquee>
        <Marquee
          spacing={8}
          speed={0.7}
          style={{ transform: [{ rotate: "-4deg" }], marginTop: 10 }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image source={image} key={index} style={styles.image} />
            ))}
          </View>
        </Marquee>
      </View>

      <View
        style={{
          backgroundColor: Colors.WHITE,
          height: "100%",
          padding: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 25,
            textAlign: "center",
          }}
        >
          Cookmate AI 🔍🍚 | Find, Create & Enjoy Delicious Receipes!
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            textAlign: "center",
            color: "gray",
            marginTop: 10,
          }}
        >
          Generate delicious receipes in seconds with the power of AI!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => signIn("exp://192.168.226.221:8081")}
        >
          <Text
            style={{
              textAlign: "center",
              color: Colors.WHITE,
              fontSize: 17,
              fontFamily: "outfit",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 25,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
  },
});
