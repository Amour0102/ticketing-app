import { StyleSheet, View } from 'react-native';

import { colors, radius, spacing } from '../theme';

type ProgressDotsProps = {
  activeIndex: number;
  total: number;
};

export function ProgressDots({ activeIndex, total }: ProgressDotsProps) {
  return (
    <View style={styles.row}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[styles.dot, index === activeIndex && styles.dotActive]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceStrong,
  },
  dotActive: {
    width: 28,
    backgroundColor: colors.accent,
  },
});
