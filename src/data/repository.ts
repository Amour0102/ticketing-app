import {
  buildAppInsightsBundle,
  concernOptions,
  experienceOptions,
} from './mockInsights';
import type {
  AppInsightsBundle,
  OnboardingData,
  OnboardingOptions,
} from '../types/onboarding';

const MOCK_DELAY_MS = 220;

const wait = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export async function getOnboardingOptions(): Promise<OnboardingOptions> {
  await wait(80);

  return {
    experienceOptions,
    concernOptions,
  };
}

export async function getAppInsights(
  profile: OnboardingData,
): Promise<AppInsightsBundle> {
  await wait(MOCK_DELAY_MS);

  // Future AI integration:
  // Replace this bundle builder with real API calls while keeping the returned
  // models unchanged. The UI is already structured around product-shaped data
  // rather than hard-coded assistant prompts or chat responses.
  return buildAppInsightsBundle(profile);
}
