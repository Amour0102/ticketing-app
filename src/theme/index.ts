import { Platform } from 'react-native';

const selectFont = (ios: string, android: string) =>
  (Platform.select({
    ios,
    android,
    default: 'System',
  }) ?? 'System') as string;

export const colors = {
  background: '#F5EEE4',
  backgroundSoft: '#FBF7F1',
  surface: '#FFFDFC',
  surfaceMuted: '#F2E6DA',
  surfaceStrong: '#E9D6C9',
  text: '#2F241E',
  textSoft: '#6E5D53',
  textMuted: '#927E72',
  accent: '#BD6D53',
  accentStrong: '#9F583F',
  accentSoft: '#EBC4B3',
  forest: '#6B7B61',
  forestSoft: '#DDE5D9',
  gold: '#B49158',
  goldSoft: '#ECE1C8',
  border: 'rgba(68, 42, 28, 0.08)',
  divider: 'rgba(68, 42, 28, 0.10)',
  overlay: 'rgba(34, 24, 20, 0.08)',
  tabBar: 'rgba(255, 253, 252, 0.94)',
  danger: '#A35646',
};

export const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  xxxl: 56,
};

export const radius = {
  sm: 12,
  md: 18,
  lg: 26,
  xl: 34,
  pill: 999,
};

export const typography = {
  display: selectFont('Georgia', 'serif'),
  body: selectFont('Avenir Next', 'sans-serif'),
  label: selectFont('Avenir Next Demi Bold', 'sans-serif-medium'),
};

export const typeScale = {
  hero: {
    fontSize: 36,
    lineHeight: 42,
  },
  title: {
    fontSize: 30,
    lineHeight: 36,
  },
  section: {
    fontSize: 22,
    lineHeight: 28,
  },
  cardTitle: {
    fontSize: 20,
    lineHeight: 25,
  },
  body: {
    fontSize: 15,
    lineHeight: 23,
  },
  caption: {
    fontSize: 13,
    lineHeight: 18,
  },
};

export const shadows = {
  card: {
    shadowColor: '#7D5B49',
    shadowOpacity: 0.06,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 2,
  },
  floating: {
    shadowColor: '#7D5B49',
    shadowOpacity: 0.12,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    elevation: 4,
  },
};
