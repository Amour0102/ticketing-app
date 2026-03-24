import { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PrimaryButton } from './PrimaryButton';
import { ScreenShell } from './ScreenShell';
import { SecondaryTextButton } from './SecondaryTextButton';
import { colors, spacing, typography } from '../theme';

type DetailScreenFrameProps = PropsWithChildren<{
  eyebrow: string;
  title: string;
  summary: string;
  backLabel: string;
  primaryActionLabel: string;
  onBack: () => void;
}>;

export function DetailScreenFrame({
  eyebrow,
  title,
  summary,
  backLabel,
  primaryActionLabel,
  onBack,
  children,
}: DetailScreenFrameProps) {
  return (
    <ScreenShell contentStyle={styles.content}>
      <SecondaryTextButton label={backLabel} onPress={onBack} />

      <View style={styles.header}>
        <Text style={styles.eyebrow}>{eyebrow}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.summary}>{summary}</Text>
      </View>

      {children}

      <View style={styles.spacer} />

      <PrimaryButton label={primaryActionLabel} onPress={onBack} />
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.lg,
  },
  header: {
    gap: spacing.md,
  },
  eyebrow: {
    color: colors.accent,
    fontFamily: typography.label,
    fontSize: 12,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: 31,
    lineHeight: 38,
  },
  summary: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 24,
  },
  spacer: {
    flex: 1,
    minHeight: spacing.md,
  },
});
