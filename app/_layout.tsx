// import { SafeAreaView } from 'react-native-safe-area-context';
// import { colors } from '../src/constants/theme';
// import AppNavigator from '../src/Navigation/AppNavigator';
// import { StatusBar } from 'react-native';

// export default function RootLayout() {
//   return (
//     <>
//     <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
//     <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
//       <AppNavigator />
//     </SafeAreaView>
//     </>
//   );
// }



import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { colors } from '../src/constants/theme';
import AppNavigator from '../src/Navigation/AppNavigator';
import AnimatedSplashScreen from '../src/screens/AnimatedSplashScreen';

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return (
      <AnimatedSplashScreen
        onFinish={() => setShowSplash(false)}
      />
    );
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <AppNavigator />
      </SafeAreaView>
    </>
  );
}
