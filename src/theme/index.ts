import { Platform } from 'react-native';

const selectFont = (ios: string, android: string) =>
  (Platform.select({
    ios,
    android,
    default: 'System',
  }) ?? 'System') as string;

export const colors = {
  background: '#0B0D10',
  backgroundSoft: '#12161B',
  surface: '#151A20',
  surfaceMuted: '#191F27',
  surfaceStrong: '#1C2532',
  inputBackground: '#12171E',
  text: '#F7FAFC',
  textSoft: '#A4AFBC',
  textMuted: '#6F7B88',
  accent: '#2F7CFF',
  accentStrong: '#62A0FF',
  accentSoft: 'rgba(47, 124, 255, 0.18)',
  accentDeep: '#1C61D6',
  forest: '#39C98A',
  forestSoft: 'rgba(57, 201, 138, 0.16)',
  gold: '#FFCC66',
  goldSoft: 'rgba(255, 204, 102, 0.16)',
  border: 'rgba(255, 255, 255, 0.07)',
  divider: 'rgba(255, 255, 255, 0.10)',
  overlay: 'rgba(0, 0, 0, 0.32)',
  tabBar: 'rgba(18, 22, 27, 0.92)',
  danger: '#FF7B7B',
  dangerSoft: 'rgba(255, 123, 123, 0.14)',
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
  lg: 22,
  xl: 30,
  pill: 999,
};

export const typography = {
  display: selectFont('Avenir Next Demi Bold', 'sans-serif-medium'),
  body: selectFont('Avenir Next', 'sans-serif'),
  label: selectFont('Avenir Next Demi Bold', 'sans-serif-medium'),
};

export const typeScale = {
  hero: {
    fontSize: 38,
    lineHeight: 42,
  },
  title: {
    fontSize: 30,
    lineHeight: 34,
  },
  section: {
    fontSize: 24,
    lineHeight: 28,
  },
  cardTitle: {
    fontSize: 22,
    lineHeight: 27,
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
  },
  caption: {
    fontSize: 13,
    lineHeight: 18,
  },
};

export const shadows = {
  card: {
    shadowColor: '#000000',
    shadowOpacity: 0.28,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    elevation: 8,
  },
  floating: {
    shadowColor: '#000000',
    shadowOpacity: 0.38,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    elevation: 12,
  },
};
