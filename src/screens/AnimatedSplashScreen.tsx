import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

interface AnimatedSplashScreenProps {
  onFinish?: () => void;
}

const AnimatedSplashScreen: React.FC<AnimatedSplashScreenProps> = ({ onFinish }) => {
  // Animation Values
  const containerOpacity = useRef(new Animated.Value(1)).current;
  const contentOpacity = useRef(new Animated.Value(0)).current;
  const contentScale = useRef(new Animated.Value(0.9)).current;
  const floatingAnim = useRef(new Animated.Value(0)).current;
  const planeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 1. Initial Entry Animation
    const entryAnimation = Animated.parallel([
      Animated.timing(contentOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(contentScale, {
        toValue: 1,
        tension: 20,
        friction: 7,
        useNativeDriver: true,
      }),
    ]);

    // 2. Loop for floating icons
    const floatingLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(floatingAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(floatingAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    );

    // 3. Plane movement
    const planeMove = Animated.timing(planeAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    });

    // Start Entry and Loops
    Animated.parallel([entryAnimation, floatingLoop, planeMove]).start();

    // 4. Sequence for exit
    const timer = setTimeout(() => {
      Animated.timing(containerOpacity, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        if (onFinish) onFinish();
      });
    }, 2000); // Total display time before fade out starts

    return () => clearTimeout(timer);
  }, []);

  // Interpolations
  const floatY = floatingAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -15],
  });

  const planeTranslateX = planeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 50],
  });

  const planeTranslateY = planeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [20, -20],
  });

  return (
    <Animated.View style={[styles.container, { opacity: containerOpacity }]}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        
        {/* Background Decorative Elements */}
        <Animated.View 
          style={[
            styles.sun, 
            { opacity: contentOpacity, transform: [{ translateY: floatY }] }
          ]}
        >
          <MaterialCommunityIcons name="brightness-5" size={80} color="#F3E5AB" />
        </Animated.View>

        <Animated.View 
          style={[
            styles.plane, 
            { 
              opacity: contentOpacity,
              transform: [
                { translateX: planeTranslateX }, 
                { translateY: planeTranslateY },
                { rotate: '-15deg' }
              ] 
            }
          ]}
        >
          <MaterialCommunityIcons name="airplane" size={40} color="#D4AF37" />
        </Animated.View>

        {/* Main Content */}
        <Animated.View 
          style={[
            styles.content, 
            { 
              opacity: contentOpacity, 
              transform: [{ scale: contentScale }] 
            }
          ]}
        >
          <Text style={styles.title}>Safarnama</Text>
          <View style={styles.divider} />
          <Text style={styles.subtitle}>Discover your next escape</Text>
        </Animated.View>

        {/* Bottom Illustration */}
        <Animated.View style={[styles.mountains, { opacity: contentOpacity }]}>
          <MaterialCommunityIcons name="summit" size={120} color="#E5E0D8" />
        </Animated.View>

      </SafeAreaView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFBF7', // Premium champagne/cream background
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    zIndex: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '300',
    letterSpacing: 8,
    color: '#1A1A1A',
    marginBottom: 10,
    fontFamily: 'System',
  },
  divider: {
    width: 40,
    height: 1,
    backgroundColor: '#D4AF37', // Gold accent
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 14,
    color: '#8E8E93',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontWeight: '400',
  },
  sun: {
    position: 'absolute',
    top: height * 0.15,
    right: width * 0.1,
  },
  plane: {
    position: 'absolute',
    top: height * 0.25,
    left: width * 0.15,
  },
  mountains: {
    position: 'absolute',
    bottom: -20,
    alignSelf: 'center',
  },
});

export default AnimatedSplashScreen;