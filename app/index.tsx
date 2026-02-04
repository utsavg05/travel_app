import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../src/constants/theme';
import AppNavigator from '../src/Navigation/AppNavigator';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <AppNavigator />
    </SafeAreaView>
  );
}
