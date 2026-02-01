import { SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { colors } from "./constants/theme";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <HomeScreen />
    </SafeAreaView>
  );
}
