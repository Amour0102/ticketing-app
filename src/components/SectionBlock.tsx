import { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing, typography, typeScale } from '../theme';

type SectionBlockProps = PropsWithChildren<{
  eyebrow?: string;
  title: string;
  body?: string;
}>;

export function SectionBlock({
  eyebrow,
  title,
  body,
  children,
}: SectionBlockProps) {
  return (
    <View style={styles.block}>
      <View style={styles.header}>
        {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
        <Text style={styles.title}>{title}</Text>
        {body ? <Text style={styles.body}>{body}</Text> : null}
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    gap: spacing.md,
  },
  header: {
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
    fontFamily: typography.label,
    fontSize: typeScale.section.fontSize,
    lineHeight: typeScale.section.lineHeight,
  },
  body: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 23,
  },
});
