import { PropsWithChildren, useEffect, useRef } from 'react';
import {
  Animated,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { colors, spacing } from '../theme';

type ScreenShellProps = PropsWithChildren<{
  contentStyle?: StyleProp<ViewStyle>;
}>;

export function ScreenShell({ children, contentStyle }: ScreenShellProps) {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 320,
      useNativeDriver: true,
    }).start();
  }, [fade]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.root}>
        <View style={styles.glowTop} />
        <View style={styles.glowBottom} />
        <Animated.View
          style={[
            styles.animatedLayer,
            {
              opacity: fade,
              transform: [
                {
                  translateY: fade.interpolate({
                    inputRange: [0, 1],
                    outputRange: [18, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <ScrollView
            bounces={false}
            contentContainerStyle={[styles.content, contentStyle]}
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  glowTop: {
    position: 'absolute',
    top: -80,
    right: -20,
    width: 220,
    height: 220,
    borderRadius: 999,
    backgroundColor: colors.accentSoft,
    opacity: 0.28,
  },
  glowBottom: {
    position: 'absolute',
    bottom: -80,
    left: -60,
    width: 200,
    height: 200,
    borderRadius: 999,
    backgroundColor: colors.goldSoft,
    opacity: 0.42,
  },
  animatedLayer: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
});
