import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { ScreenShell } from '../components/ScreenShell';
import { colors, spacing, typography } from '../theme';

type MoreScreenProps = {
  onLogOut: () => void;
};

type SectionItem = {
  label: string;
  onPress?: () => void;
};

const accountItems: SectionItem[] = [
  { label: 'Profile' },
  { label: 'Notifications' },
];

const supportItems: SectionItem[] = [
  { label: 'Help center' },
  { label: 'Contact support' },
];

export function MoreScreen({ onLogOut }: MoreScreenProps) {
  const appItems: SectionItem[] = [
    { label: 'Settings' },
    { label: 'Log out', onPress: onLogOut },
  ];

  return (
    <ScreenShell contentStyle={styles.content}>
      <AppHeader title="More" compact />

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Account</Text>
        <View style={styles.list}>
          {accountItems.map((item) => (
            <MoreRow key={item.label} label={item.label} onPress={item.onPress} />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Support</Text>
        <View style={styles.list}>
          {supportItems.map((item) => (
            <MoreRow key={item.label} label={item.label} onPress={item.onPress} />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>App</Text>
        <View style={styles.list}>
          {appItems.map((item) => (
            <MoreRow key={item.label} label={item.label} onPress={item.onPress} />
          ))}
        </View>
      </View>
    </ScreenShell>
  );
}

function MoreRow({ label, onPress }: SectionItem) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress ?? (() => undefined)}
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
    >
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.lg,
    paddingTop: 18,
    paddingBottom: 164,
  },
  section: {
    gap: spacing.sm,
  },
  sectionLabel: {
    color: colors.textMuted,
    fontFamily: typography.label,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  list: {
    borderRadius: 20,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  rowLabel: {
    color: colors.text,
    fontFamily: typography.body,
    fontSize: 16,
  },
  row: {
    minHeight: 58,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.surface,
  },
  chevron: {
    color: colors.textMuted,
    fontFamily: typography.label,
    fontSize: 22,
  },
  rowPressed: {
    opacity: 0.72,
  },
});
