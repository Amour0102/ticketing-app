import type { AppTab } from '../types/onboarding';

export const productCopy = {
  brand: {
    name: 'Inzira',
    subtitle: 'Career guidance',
  },
  welcome: {
    eyebrow: 'Inzira',
    title: 'Thoughtful career guidance for the work you have already earned.',
    description:
      'Private, steady, and designed to help experienced professionals reflect on the next professional move with clarity.',
    noteTitle: 'A quiet place to begin',
    noteBody:
      'You will answer a few short questions, then step into a focused view shaped around your experience, opportunities, and current concern.',
    primaryAction: 'Begin',
  },
  onboarding: {
    backToWelcome: 'Back to welcome',
    previousStep: 'Previous step',
    continue: 'Continue',
    complete: 'Enter Inzira',
    roleLabel: 'Current role',
    rolePlaceholder: 'Example: Senior Procurement Officer',
    steps: [
      {
        title: 'What role best describes you today?',
        description: 'Use the title that feels closest to your current work.',
      },
      {
        title: 'How much experience are you bringing forward?',
        description:
          'Choose the range that best reflects your professional journey.',
      },
      {
        title: 'What feels most pressing right now?',
        description:
          'Pick the concern you want Inzira to pay attention to first.',
      },
    ],
  },
  tabs: {
    home: 'Home',
    pathways: 'Pathways',
    circle: 'Circle',
    progress: 'Progress',
    profile: 'Profile',
  } satisfies Record<AppTab, string>,
  home: {
    greeting: 'Good to see you',
    heroPrimaryAction: 'Read the full briefing',
    heroSecondaryAction: 'Open strength map',
    readinessAction: 'Open readiness view',
    refineAction: 'Refine my profile',
  },
  pathways: {
    primaryAction: 'Open Career Pulse',
  },
  circle: {
    primaryAction: 'View quiet circles',
  },
  progress: {
    primaryAction: 'Open readiness detail',
  },
  profile: {
    primaryAction: 'Review onboarding answers',
  },
  detail: {
    back: 'Back',
    returnHome: 'Return home',
    loadingTitle: 'Preparing your view',
    loadingBody:
      'Bringing together a calm summary of your experience and likely next steps.',
    emptyTitle: 'Your view is not ready yet',
    emptyBody:
      'There is not enough profile information to shape this screen. Return home and adjust your answers when you are ready.',
    retry: 'Try again',
  },
} as const;
