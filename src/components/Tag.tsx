import { StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '../theme';

type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return (
    <View style={styles.tag}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    alignSelf: 'flex-start',
    borderRadius: radius.pill,
    backgroundColor: colors.backgroundSoft,
    paddingHorizontal: spacing.md,
    paddingVertical: 10,
  },
  label: {
    color: colors.text,
    fontFamily: typography.label,
    fontSize: 13,
  },
});
