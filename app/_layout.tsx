import { UserContext } from "@/context/UserContext";
import { LogtoConfig, LogtoProvider, UserScope } from "@logto/rn";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useState } from "react";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });

  const config: LogtoConfig = {
    endpoint: "https://0xjcno.logto.app/",
    appId: "kd3zo3udu6j5n6f1xlo6m",
    scopes: [UserScope.Email],
  };

  const [user, setUser] = useState();

  return (
    <LogtoProvider config={config}>
      <UserContext.Provider value={{ user, setUser }}>
        <Stack>
          <Stack.Screen
            name="Landing"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </UserContext.Provider>
    </LogtoProvider>
  );
}
