import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../src/constants/theme';
import AppNavigator from '../src/Navigation/AppNavigator';
import { StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <AppNavigator />
    </SafeAreaView>
    </>
  );
}
