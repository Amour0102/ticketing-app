import { Dispatch, SetStateAction } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { BottomActionBar } from '../components/BottomActionBar';
import { Card } from '../components/Card';
import { OptionTile } from '../components/OptionTile';
import { ProgressDots } from '../components/ProgressDots';
import { ScreenShell } from '../components/ScreenShell';
import { SecondaryTextButton } from '../components/SecondaryTextButton';
import { productCopy } from '../content/productCopy';
import { colors, radius, spacing, typography } from '../theme';
import type { OnboardingData, OnboardingOptions } from '../types/onboarding';

type OnboardingScreenProps = {
  step: number;
  profile: OnboardingData;
  options: OnboardingOptions;
  onBack: () => void;
  onNext: () => void;
  onProfileChange: Dispatch<SetStateAction<OnboardingData>>;
};

export function OnboardingScreen({
  step,
  profile,
  options,
  onBack,
  onNext,
  onProfileChange,
}: OnboardingScreenProps) {
  const currentStep =
    productCopy.onboarding.steps[step] ?? productCopy.onboarding.steps[0];
  const isStepComplete =
    step === 0
      ? profile.currentRole.trim().length > 0
      : step === 1
        ? profile.experienceBand !== null
        : profile.biggestConcern !== null;

  return (
    <ScreenShell contentStyle={styles.content}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboard}
      >
        <SecondaryTextButton
          label={
            step === 0
              ? productCopy.onboarding.backToWelcome
              : productCopy.onboarding.previousStep
          }
          onPress={onBack}
        />

        <Card style={styles.stepCard}>
          <View style={styles.progressRow}>
            <Text style={styles.stepLabel}>Step {step + 1} of 3</Text>
            <ProgressDots activeIndex={step} total={3} />
          </View>
          <Text style={styles.title}>{currentStep.title}</Text>
          <Text style={styles.description}>{currentStep.description}</Text>
        </Card>

        {step === 0 ? (
          <Card style={styles.fieldCard}>
            <Text style={styles.inputLabel}>{productCopy.onboarding.roleLabel}</Text>
            <TextInput
              autoCapitalize="words"
              placeholder={productCopy.onboarding.rolePlaceholder}
              placeholderTextColor={colors.textMuted}
              style={styles.input}
              value={profile.currentRole}
              onChangeText={(value) =>
                onProfileChange((currentProfile) => ({
                  ...currentProfile,
                  currentRole: value,
                }))
              }
            />
          </Card>
        ) : null}

        {step === 1 ? (
          <View style={styles.optionList}>
            {options.experienceOptions.map((option) => (
              <OptionTile
                key={option.value}
                description={option.description}
                label={option.label}
                selected={profile.experienceBand === option.value}
                onPress={() =>
                  onProfileChange((currentProfile) => ({
                    ...currentProfile,
                    experienceBand: option.value,
                  }))
                }
              />
            ))}
          </View>
        ) : null}

        {step === 2 ? (
          <View style={styles.optionList}>
            {options.concernOptions.map((option) => (
              <OptionTile
                key={option.value}
                description={option.description}
                label={option.label}
                selected={profile.biggestConcern === option.value}
                onPress={() =>
                  onProfileChange((currentProfile) => ({
                    ...currentProfile,
                    biggestConcern: option.value,
                  }))
                }
              />
            ))}
          </View>
        ) : null}

        <View style={styles.spacer} />

        <BottomActionBar
          label={
            step === 2
              ? productCopy.onboarding.complete
              : productCopy.onboarding.continue
          }
          onPress={onNext}
          disabled={!isStepComplete}
        />
      </KeyboardAvoidingView>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.lg,
  },
  keyboard: {
    flex: 1,
  },
  stepCard: {
    gap: spacing.md,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepLabel: {
    color: colors.textMuted,
    fontFamily: typography.label,
    fontSize: 12,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: 30,
    lineHeight: 36,
  },
  description: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 23,
  },
  fieldCard: {
    gap: spacing.sm,
  },
  inputLabel: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 15,
  },
  input: {
    minHeight: 56,
    borderRadius: radius.lg,
    backgroundColor: colors.backgroundSoft,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    color: colors.text,
    fontFamily: typography.body,
    fontSize: 16,
  },
  optionList: {
    gap: spacing.sm,
  },
  spacer: {
    flex: 1,
    minHeight: spacing.xl,
  },
});
