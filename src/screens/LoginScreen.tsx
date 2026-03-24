import { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Card } from '../components/Card';
import { PrimaryButton } from '../components/PrimaryButton';
import { ScreenShell } from '../components/ScreenShell';
import { productCopy } from '../content/productCopy';
import { colors, radius, spacing, typography, typeScale } from '../theme';

type LoginScreenProps = {
  isLoading: boolean;
  onSignIn: (email: string, password: string) => Promise<boolean>;
};

export function LoginScreen({ isLoading, onSignIn }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [showForgotHelp, setShowForgotHelp] = useState(false);

  const clearFeedback = () => {
    if (error) {
      setError('');
    }
  };

  const handleEmailChange = (value: string) => {
    clearFeedback();
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    clearFeedback();
    setPassword(value);
  };

  const handleForgotPassword = () => {
    clearFeedback();
    setShowForgotHelp(true);
  };

  const handleSignIn = async () => {
    if (isLoading) {
      return;
    }

    setError('');
    setShowForgotHelp(false);
    const didSignIn = await onSignIn(email, password);

    if (didSignIn) {
      return;
    }

    setError(productCopy.login.invalidCredentials);
  };

  return (
    <ScreenShell contentStyle={styles.content}>
      <View style={styles.headerBlock}>
        <Text style={styles.eyebrow}>{productCopy.login.eyebrow}</Text>
        <Text style={styles.title}>{productCopy.login.title}</Text>
        <Text style={styles.subtitle}>{productCopy.login.subtitle}</Text>
      </View>

      <Card style={styles.formCard}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>{productCopy.login.emailLabel}</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isLoading}
            keyboardType="email-address"
            placeholder={productCopy.login.emailPlaceholder}
            placeholderTextColor={colors.textMuted}
            style={styles.input}
            textContentType="emailAddress"
            value={email}
            onChangeText={handleEmailChange}
          />
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.passwordHeader}>
            <Text style={styles.inputLabel}>{productCopy.login.passwordLabel}</Text>
            <Pressable
              accessibilityRole="button"
              disabled={isLoading}
              onPress={() => setShowPassword((current) => !current)}
              style={({ pressed }) => [pressed && styles.pressed]}
            >
              <Text style={styles.toggleLabel}>
                {showPassword
                  ? productCopy.login.hidePassword
                  : productCopy.login.showPassword}
              </Text>
            </Pressable>
          </View>

          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isLoading}
            placeholder={productCopy.login.passwordPlaceholder}
            placeholderTextColor={colors.textMuted}
            secureTextEntry={!showPassword}
            style={styles.input}
            textContentType="password"
            value={password}
            onChangeText={handlePasswordChange}
          />
        </View>

        <Pressable
          accessibilityRole="button"
          disabled={isLoading}
          onPress={handleForgotPassword}
          style={({ pressed }) => [styles.forgotButton, pressed && styles.pressed]}
        >
          <Text style={styles.forgotLabel}>{productCopy.login.forgotPassword}</Text>
        </Pressable>

        {showForgotHelp ? (
          <View style={styles.infoBanner}>
            <Text style={styles.infoText}>{productCopy.login.forgotPasswordHelp}</Text>
          </View>
        ) : null}

        {error ? (
          <View style={styles.errorBanner}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}

        <PrimaryButton
          disabled={isLoading}
          label={isLoading ? productCopy.login.signingIn : productCopy.login.signIn}
          onPress={handleSignIn}
        />

        {isLoading ? (
          <View style={styles.loadingRow}>
            <ActivityIndicator color={colors.accentDeep} size="small" />
            <Text style={styles.loadingText}>{productCopy.login.signingIn}</Text>
          </View>
        ) : null}
      </Card>

      <Card tone="muted" style={styles.demoCard}>
        <Text style={styles.demoText}>{productCopy.login.demoHint}</Text>
      </Card>
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    gap: spacing.lg,
    paddingTop: spacing.xxxl,
  },
  headerBlock: {
    gap: spacing.sm,
  },
  eyebrow: {
    color: colors.accentStrong,
    fontFamily: typography.label,
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: typeScale.title.fontSize,
    lineHeight: typeScale.title.lineHeight,
  },
  subtitle: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 23,
  },
  formCard: {
    gap: spacing.md,
  },
  inputGroup: {
    gap: spacing.xs,
  },
  inputLabel: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 14,
  },
  input: {
    minHeight: 56,
    borderRadius: radius.lg,
    backgroundColor: colors.inputBackground,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    color: colors.text,
    fontFamily: typography.body,
    fontSize: 16,
  },
  passwordHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  toggleLabel: {
    color: colors.accentStrong,
    fontFamily: typography.label,
    fontSize: 13,
  },
  forgotButton: {
    alignSelf: 'flex-start',
  },
  forgotLabel: {
    color: colors.textSoft,
    fontFamily: typography.label,
    fontSize: 13,
  },
  infoBanner: {
    borderRadius: radius.md,
    backgroundColor: colors.forestSoft,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  infoText: {
    color: colors.text,
    fontFamily: typography.body,
    fontSize: 14,
    lineHeight: 21,
  },
  errorBanner: {
    borderRadius: radius.md,
    backgroundColor: colors.dangerSoft,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  errorText: {
    color: colors.danger,
    fontFamily: typography.label,
    fontSize: 13,
    lineHeight: 18,
  },
  loadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
  },
  loadingText: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 14,
  },
  demoCard: {
    paddingVertical: spacing.md,
  },
  demoText: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 13,
    lineHeight: 20,
  },
  pressed: {
    opacity: 0.72,
  },
});
