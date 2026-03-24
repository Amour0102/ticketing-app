import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenShell } from '../components/ScreenShell';
import { colors, radius, spacing, typography } from '../theme';

export function TicketsScreen() {
  return (
    <ScreenShell contentStyle={styles.content}>
      <AppHeader
        title="New ticket"
        subtitle="Capture an issue from the field"
        compact
      />

      <View style={styles.formGroup}>
        <Text style={styles.label}>Category</Text>
        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.inputShell, pressed && styles.pressed]}
        >
          <Text style={styles.placeholder}>Select issue type</Text>
          <Text style={styles.chevron}>⌄</Text>
        </Pressable>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Location</Text>
        <TextInput
          placeholder="Where did this happen?"
          placeholderTextColor={colors.textMuted}
          style={styles.input}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          multiline
          placeholder="What happened? Include clear details"
          placeholderTextColor={colors.textMuted}
          style={[styles.input, styles.textarea]}
          textAlignVertical="top"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Attachment (optional)</Text>
        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.inputShell, pressed && styles.pressed]}
        >
          <Text style={styles.placeholder}>Attach file or photo</Text>
          <Text style={styles.chevron}>+</Text>
        </Pressable>
      </View>

      <View style={styles.bottomBlock}>
        <Text style={styles.helper}>
          Clear details help resolve issues faster.
        </Text>
        <PrimaryButton label="Submit ticket" onPress={() => undefined} />
      </View>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 16,
    paddingTop: 18,
    paddingBottom: 164,
  },
  formGroup: {
    gap: spacing.xs,
  },
  label: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 14,
    marginLeft: 2,
  },
  inputShell: {
    minHeight: 58,
    borderRadius: radius.lg,
    backgroundColor: colors.inputBackground,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    minHeight: 58,
    borderRadius: radius.lg,
    backgroundColor: colors.inputBackground,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    color: colors.text,
    fontFamily: typography.body,
    fontSize: 15,
  },
  textarea: {
    minHeight: 148,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
  },
  placeholder: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 15,
  },
  chevron: {
    color: colors.accentStrong,
    fontFamily: typography.label,
    fontSize: 20,
  },
  bottomBlock: {
    gap: spacing.sm,
    paddingTop: spacing.sm,
  },
  helper: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.86,
  },
});
