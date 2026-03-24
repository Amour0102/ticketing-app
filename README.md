# Axion

Axion is a mobile-first Expo React Native app for experienced professionals in Rwanda aged 40+ who want calm, focused career guidance without chat-style UI.

## What is built

- Welcome screen
- Three-step onboarding
- Home screen with a Career Pulse card, Strength Map teaser, and Assessment Readiness preview

## Run the app

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start Expo:

   ```bash
   npm run start
   ```

3. Open the app in your preferred target:

- Press `i` for the iOS simulator
- Press `a` for the Android emulator
- Press `w` for the web preview

## Project structure

```text
.
├── App.tsx
├── app.json
├── package.json
├── tsconfig.json
└── src
    ├── components
    │   ├── Card.tsx
    │   ├── OptionTile.tsx
    │   ├── PrimaryButton.tsx
    │   ├── ProgressDots.tsx
    │   ├── ReadinessMeter.tsx
    │   ├── ScreenShell.tsx
    │   ├── SecondaryTextButton.tsx
    │   └── Tag.tsx
    ├── data
    │   └── mockInsights.ts
    ├── screens
    │   ├── HomeScreen.tsx
    │   ├── OnboardingScreen.tsx
    │   └── WelcomeScreen.tsx
    ├── theme
    │   └── index.ts
    └── types
        └── onboarding.ts
```
