import { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { colors, radius, shadows, spacing } from '../theme';

type CardProps = PropsWithChildren<{
  tone?: 'default' | 'accent' | 'muted';
  style?: StyleProp<ViewStyle>;
}>;

export function Card({ children, style, tone = 'default' }: CardProps) {
  return (
    <View
      style={[
        styles.base,
        tone === 'accent' && styles.accent,
        tone === 'muted' && styles.muted,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.lg,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.card,
  },
  accent: {
    backgroundColor: colors.surfaceStrong,
  },
  muted: {
    backgroundColor: colors.surfaceMuted,
  },
});
