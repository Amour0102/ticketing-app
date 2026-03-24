import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, shadows, spacing, typography } from '../theme';
import type { AppTab } from '../types/onboarding';

type TabItem = {
  key: AppTab;
  label: string;
  shortLabel: string;
};

type BottomTabBarProps = {
  items: TabItem[];
  activeTab: AppTab;
  onTabPress: (tab: AppTab) => void;
};

export function BottomTabBar({
  items,
  activeTab,
  onTabPress,
}: BottomTabBarProps) {
  return (
    <View style={styles.outer}>
      <View style={styles.bar}>
        {items.map((item) => {
          const isActive = item.key === activeTab;

          return (
            <Pressable
              key={item.key}
              accessibilityRole="button"
              onPress={() => onTabPress(item.key)}
              style={({ pressed }) => [
                styles.tab,
                isActive && styles.tabActive,
                pressed && styles.tabPressed,
              ]}
            >
              <View style={[styles.dot, isActive && styles.dotActive]} />
              <Text style={[styles.label, isActive && styles.labelActive]}>
                {item.shortLabel}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
    backgroundColor: 'transparent',
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.xs,
    padding: 6,
    borderRadius: radius.xl,
    backgroundColor: colors.tabBar,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.floating,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 5,
    minHeight: 56,
    justifyContent: 'center',
    borderRadius: 18,
  },
  tabActive: {
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  tabPressed: {
    opacity: 0.82,
  },
  dot: {
    width: 18,
    height: 4,
    borderRadius: radius.pill,
    backgroundColor: colors.textMuted,
  },
  dotActive: {
    backgroundColor: colors.accent,
  },
  label: {
    color: colors.textMuted,
    fontFamily: typography.label,
    fontSize: 12,
  },
  labelActive: {
    color: colors.text,
  },
});
