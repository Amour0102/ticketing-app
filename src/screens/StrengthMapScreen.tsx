import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { BottomActionBar } from '../components/BottomActionBar';
import { Card } from '../components/Card';
import { ScreenShell } from '../components/ScreenShell';
import { SectionBlock } from '../components/SectionBlock';
import { SecondaryTextButton } from '../components/SecondaryTextButton';
import { Tag } from '../components/Tag';
import { productCopy } from '../content/productCopy';
import { colors, spacing, typography, typeScale } from '../theme';
import type { StrengthAsset, StrengthMapContent } from '../types/onboarding';

type StrengthMapScreenProps = {
  content: StrengthMapContent;
  onBack: () => void;
};

const fallbackAsset: StrengthAsset = {
  id: 'fallback',
  name: 'Career asset',
  currentValue: '',
  futureValue: '',
  whyItMatters: '',
  adjacentPath: '',
};

export function StrengthMapScreen({
  content,
  onBack,
}: StrengthMapScreenProps) {
  const [selectedAsset, setSelectedAsset] = useState<StrengthAsset>(
    content.assets[0] ?? fallbackAsset,
  );

  return (
    <ScreenShell contentStyle={styles.content}>
      <View style={styles.topBlock}>
        <SecondaryTextButton label={productCopy.detail.back} onPress={onBack} />
        <AppHeader
          eyebrow={content.eyebrow}
          title={content.title}
          subtitle={content.summary}
        />
      </View>

      <Card tone="accent" style={styles.centerCard}>
        <Tag label={content.centerLabel} />
        <Text style={styles.centerValue}>{content.centerValue}</Text>
        <Text style={styles.centerBody}>
          Your strongest value sits in experience that has already been tested in real institutional work.
        </Text>
      </Card>

      <SectionBlock
        title="Career assets"
        body="Tap one asset at a time. The goal is clarity, not complexity."
      >
        <View style={styles.assetGrid}>
          {content.assets.map((asset) => {
            const isSelected = selectedAsset.id === asset.id;

            return (
              <Pressable
                key={asset.id}
                accessibilityRole="button"
                onPress={() => setSelectedAsset(asset)}
                style={({ pressed }) => [
                  styles.assetButton,
                  isSelected && styles.assetButtonSelected,
                  pressed && styles.assetButtonPressed,
                ]}
              >
                <Text
                  style={[styles.assetName, isSelected && styles.assetNameSelected]}
                >
                  {asset.name}
                </Text>
                <Text style={styles.assetHint}>Tap to view detail</Text>
              </Pressable>
            );
          })}
        </View>
      </SectionBlock>

      <Card style={styles.detailCard}>
        <Tag label="Selected asset" />
        <Text style={styles.detailTitle}>{selectedAsset.name}</Text>

        <View style={styles.copyBlock}>
          <Text style={styles.sectionLabel}>Current value</Text>
          <Text style={styles.paragraph}>{selectedAsset.currentValue}</Text>
        </View>

        <View style={styles.copyBlock}>
          <Text style={styles.sectionLabel}>Future value</Text>
          <Text style={styles.paragraph}>{selectedAsset.futureValue}</Text>
        </View>

        <Card tone="muted" style={styles.innerCard}>
          <Text style={styles.sectionLabel}>Why this still matters</Text>
          <Text style={styles.paragraph}>{selectedAsset.whyItMatters}</Text>
        </Card>

        <View style={styles.copyBlock}>
          <Text style={styles.sectionLabel}>Adjacent path hint</Text>
          <Text style={styles.paragraph}>{selectedAsset.adjacentPath}</Text>
        </View>
      </Card>

      <BottomActionBar label={productCopy.detail.returnHome} onPress={onBack} />
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.xxl,
    paddingBottom: 120,
  },
  topBlock: {
    gap: spacing.sm,
  },
  centerCard: {
    gap: spacing.md,
  },
  centerValue: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: typeScale.section.fontSize,
    lineHeight: typeScale.section.lineHeight,
  },
  centerBody: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 23,
  },
  assetGrid: {
    gap: spacing.sm,
  },
  assetButton: {
    gap: spacing.xs,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 26,
    backgroundColor: colors.surface,
  },
  assetButtonSelected: {
    borderColor: colors.accentSoft,
    backgroundColor: colors.surfaceMuted,
  },
  assetButtonPressed: {
    opacity: 0.94,
  },
  assetName: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 16,
  },
  assetNameSelected: {
    color: colors.accentStrong,
  },
  assetHint: {
    color: colors.textMuted,
    fontFamily: typography.body,
    fontSize: 13,
  },
  detailCard: {
    gap: spacing.lg,
  },
  detailTitle: {
    color: colors.text,
    fontFamily: typography.display,
    fontSize: typeScale.title.fontSize,
    lineHeight: typeScale.title.lineHeight,
  },
  copyBlock: {
    gap: spacing.xs,
  },
  sectionLabel: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 15,
  },
  paragraph: {
    color: colors.textSoft,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 23,
  },
  innerCard: {
    gap: spacing.xs,
    padding: spacing.md,
  },
});
