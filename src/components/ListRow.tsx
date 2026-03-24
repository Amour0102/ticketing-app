import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Card } from './Card';
import { colors, spacing, typography } from '../theme';

type ListRowProps = {
  title: string;
  body: string;
  meta?: string;
  onPress?: () => void;
};

export function ListRow({ title, body, meta, onPress }: ListRowProps) {
  const content = (
    <Card style={styles.card}>
      <View style={styles.copy}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
      {meta ? <Text style={styles.meta}>{meta}</Text> : null}
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
    gap: spacing.sm,
  },
  copy: {
    gap: spacing.xs,
  },
  title: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 16,
  },
  body: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 22,
  },
  meta: {
    color: colors.accentStrong,
    fontFamily: typography.label,
    fontSize: 13,
  },
  pressed: {
    opacity: 0.95,
  },
});
