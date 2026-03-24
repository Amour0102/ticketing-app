import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Card } from './Card';
import { colors, spacing, typography, typeScale } from '../theme';

type InsightCardProps = {
  eyebrow: string;
  title: string;
  body: string;
  footer?: string;
  actionLabel?: string;
  onPress?: () => void;
  tone?: 'default' | 'accent' | 'muted';
};

export function InsightCard({
  eyebrow,
  title,
  body,
  footer,
  actionLabel,
  onPress,
  tone = 'default',
}: InsightCardProps) {
  const content = (
    <Card tone={tone} style={styles.card}>
      <View style={styles.copy}>
        <Text style={styles.eyebrow}>{eyebrow}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
      {footer ? <Text style={styles.footer}>{footer}</Text> : null}
      {actionLabel ? <Text style={styles.action}>{actionLabel}</Text> : null}
    </Card>
  );

  if (!onPress) {
    return content;
  }

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      {content}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: spacing.md,
  },
  copy: {
    gap: spacing.xs,
  },
  eyebrow: {
    color: colors.textMuted,
    fontFamily: typography.label,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: typeScale.cardTitle.fontSize,
    lineHeight: typeScale.cardTitle.lineHeight,
  },
  body: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 23,
  },
  footer: {
    color: colors.text,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 21,
  },
  action: {
    color: colors.accentStrong,
    fontFamily: typography.label,
    fontSize: 14,
  },
  pressed: {
    opacity: 0.94,
  },
});
