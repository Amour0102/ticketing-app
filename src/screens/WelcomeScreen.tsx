import { StyleSheet, Text, View } from 'react-native';

import { BottomActionBar } from '../components/BottomActionBar';
import { Card } from '../components/Card';
import { AppHeader } from '../components/AppHeader';
import { ScreenShell } from '../components/ScreenShell';
import { productCopy } from '../content/productCopy';
import { colors, spacing, typography } from '../theme';

type WelcomeScreenProps = {
  onStart: () => void;
};

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <ScreenShell contentStyle={styles.content}>
      <AppHeader
        eyebrow={productCopy.welcome.eyebrow}
        title={productCopy.welcome.title}
        subtitle={productCopy.welcome.description}
      />

      <Card tone="muted" style={styles.noteCard}>
        <Text style={styles.noteTitle}>{productCopy.welcome.noteTitle}</Text>
        <Text style={styles.noteBody}>{productCopy.welcome.noteBody}</Text>
      </Card>

      <View style={styles.spacer} />

      <BottomActionBar
        label={productCopy.welcome.primaryAction}
        onPress={onStart}
      />
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.xl,
  },
  noteCard: {
    gap: spacing.sm,
  },
  noteTitle: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 16,
  },
  noteBody: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 23,
  },
  spacer: {
    flex: 1,
    minHeight: spacing.xxxl,
  },
});
