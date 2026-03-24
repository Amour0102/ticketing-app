import { StyleSheet, View } from 'react-native';

import { PrimaryButton } from './PrimaryButton';
import { colors, radius, shadows, spacing } from '../theme';

type BottomActionBarProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

export function BottomActionBar({
  label,
  onPress,
  disabled = false,
}: BottomActionBarProps) {
  return (
    <View style={styles.wrap}>
      <View style={styles.inner}>
        <PrimaryButton label={label} onPress={onPress} disabled={disabled} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
    backgroundColor: 'transparent',
  },
  inner: {
    padding: spacing.sm,
    borderRadius: radius.xl,
    backgroundColor: colors.tabBar,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.floating,
  },
});
