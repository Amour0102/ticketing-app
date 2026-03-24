import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, spacing, typography, typeScale } from '../theme';

type AppHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onActionPress?: () => void;
  compact?: boolean;
};

export function AppHeader({
  eyebrow,
  title,
  subtitle,
  actionLabel,
  onActionPress,
  compact = false,
}: AppHeaderProps) {
  return (
    <View style={[styles.wrap, compact && styles.wrapCompact]}>
      <View style={styles.copy}>
        {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
        <Text style={[styles.title, compact && styles.titleCompact]}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      {actionLabel && onActionPress ? (
        <Pressable
          accessibilityRole="button"
          onPress={onActionPress}
          style={({ pressed }) => [styles.action, pressed && styles.actionPressed]}
        >
          <Text style={styles.actionText}>{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: spacing.md,
  },
  wrapCompact: {
    gap: spacing.sm,
  },
  copy: {
    gap: spacing.xs,
  },
  eyebrow: {
    color: colors.textMuted,
    fontFamily: typography.label,
    fontSize: 12,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: typeScale.title.fontSize,
    lineHeight: typeScale.title.lineHeight,
  },
  titleCompact: {
    fontSize: typeScale.section.fontSize,
    lineHeight: typeScale.section.lineHeight,
  },
  subtitle: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: typeScale.body.fontSize,
    lineHeight: typeScale.body.lineHeight,
  },
  action: {
    alignSelf: 'flex-start',
  },
  actionPressed: {
    opacity: 0.7,
  },
  actionText: {
    color: colors.accentStrong,
    fontFamily: typography.label,
    fontSize: 14,
  },
});
