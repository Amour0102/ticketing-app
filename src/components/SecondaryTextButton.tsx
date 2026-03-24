import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, spacing, typography } from '../theme';

type SecondaryTextButtonProps = {
  label: string;
  onPress: () => void;
};

export function SecondaryTextButton({
  label,
  onPress,
}: SecondaryTextButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    minHeight: 32,
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  pressed: {
    opacity: 0.7,
  },
  label: {
    color: colors.textSoft,
    fontFamily: typography.label,
    fontSize: 13,
  },
});
