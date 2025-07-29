import { useLogto } from "@logto/rn";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function Index() {
  const { getIdTokenClaims, isAuthenticated } = useLogto();
  useEffect(() => {
    if (isAuthenticated) {
      getIdTokenClaims().then((userData) => {
        console.log("--", userData);
      });
    }
  }, [isAuthenticated]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Redirect href={"/Landing"} />
    </View>
  );
}
