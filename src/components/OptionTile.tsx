import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '../theme';

type OptionTileProps = {
  label: string;
  description: string;
  selected: boolean;
  onPress: () => void;
};

export function OptionTile({
  label,
  description,
  selected,
  onPress,
}: OptionTileProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.tile,
        selected && styles.tileSelected,
        pressed && styles.tilePressed,
      ]}
    >
      <View style={[styles.indicator, selected && styles.indicatorSelected]} />
      <View style={styles.copy}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    padding: spacing.lg,
  },
  tileSelected: {
    borderColor: colors.accentSoft,
    backgroundColor: colors.surfaceMuted,
  },
  tilePressed: {
    opacity: 0.94,
  },
  indicator: {
    width: 14,
    height: 14,
    marginTop: 4,
    borderWidth: 2,
    borderColor: colors.textMuted,
    borderRadius: radius.pill,
  },
  indicatorSelected: {
    borderColor: colors.accent,
    backgroundColor: colors.accent,
  },
  copy: {
    flex: 1,
    gap: 4,
  },
  label: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 16,
  },
  description: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 21,
  },
});
