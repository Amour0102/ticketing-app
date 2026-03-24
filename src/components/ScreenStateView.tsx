import { StyleSheet, Text, View } from 'react-native';

import { Card } from './Card';
import { PrimaryButton } from './PrimaryButton';
import { colors, spacing, typography } from '../theme';

type ScreenStateViewProps = {
  title: string;
  body: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function ScreenStateView({
  title,
  body,
  actionLabel,
  onAction,
}: ScreenStateViewProps) {
  return (
    <Card style={styles.card}>
      <View style={styles.copy}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
      {actionLabel && onAction ? (
        <PrimaryButton label={actionLabel} onPress={onAction} />
      ) : null}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: spacing.lg,
    marginTop: spacing.xxxl,
  },
  copy: {
    gap: spacing.sm,
  },
  title: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: 26,
    lineHeight: 32,
  },
  body: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 23,
  },
});
