import { startTransition, useEffect, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AssessmentReadinessScreen } from './src/screens/AssessmentReadinessScreen';
import { CareerPulseDetailScreen } from './src/screens/CareerPulseDetailScreen';
import { CircleScreen } from './src/screens/CircleScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { OnboardingScreen } from './src/screens/OnboardingScreen';
import { PathwaysScreen } from './src/screens/PathwaysScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { ProgressScreen } from './src/screens/ProgressScreen';
import { StrengthMapScreen } from './src/screens/StrengthMapScreen';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { BottomTabBar } from './src/components/BottomTabBar';
import { ScreenShell } from './src/components/ScreenShell';
import { ScreenStateView } from './src/components/ScreenStateView';
import { productCopy } from './src/content/productCopy';
import { getAppInsights, getOnboardingOptions } from './src/data/repository';
import type {
  AppTab,
  AppInsightsBundle,
  DetailRoute,
  OnboardingData,
  OnboardingOptions,
} from './src/types/onboarding';

type RootPhase = 'welcome' | 'onboarding' | 'app';

const initialProfile: OnboardingData = {
  currentRole: '',
  experienceBand: null,
  biggestConcern: null,
};

export default function App() {
  const [phase, setPhase] = useState<RootPhase>('welcome');
  const [step, setStep] = useState(0);
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [detailRoute, setDetailRoute] = useState<DetailRoute | null>(null);
  const [profile, setProfile] = useState<OnboardingData>(initialProfile);
  const [onboardingOptions, setOnboardingOptions] = useState<OnboardingOptions>({
    experienceOptions: [],
    concernOptions: [],
  });
  const [bundle, setBundle] = useState<AppInsightsBundle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoadError, setHasLoadError] = useState(false);
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    let isActive = true;

    async function loadData() {
      setIsLoading(true);
      setHasLoadError(false);

      try {
        const [options, insights] = await Promise.all([
          getOnboardingOptions(),
          getAppInsights(profile),
        ]);

        if (!isActive) {
          return;
        }

        startTransition(() => {
          setOnboardingOptions(options);
          setBundle(insights);
        });
      } catch {
        if (!isActive) {
          return;
        }

        setHasLoadError(true);
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    }

    void loadData();

    return () => {
      isActive = false;
    };
  }, [profile, reloadCount]);

  const handleStart = () => {
    setStep(0);
    setPhase('onboarding');
  };

  const handleBack = () => {
    if (step === 0) {
      setPhase('welcome');
      return;
    }

    setStep((currentStep) => currentStep - 1);
  };

  const handleNext = () => {
    if (step < 2) {
      setStep((currentStep) => currentStep + 1);
      return;
    }

    setPhase('app');
    setActiveTab('home');
  };

  const handleReset = () => {
    setPhase('onboarding');
    setStep(0);
    setDetailRoute(null);
  };

  const handleOpenCareerPulse = () => {
    setDetailRoute('careerPulse');
  };

  const handleCloseCareerPulse = () => {
    setDetailRoute(null);
  };

  const handleOpenStrengthMap = () => {
    setDetailRoute('strengthMap');
  };

  const handleCloseStrengthMap = () => {
    setDetailRoute(null);
  };

  const handleOpenAssessmentReadiness = () => {
    setDetailRoute('assessmentReadiness');
  };

  const handleCloseAssessmentReadiness = () => {
    setDetailRoute(null);
  };

  const handleRetryLoad = () => {
    setReloadCount((currentCount) => currentCount + 1);
  };

  const tabItems = useMemo(
    () => [
      { key: 'home' as const, label: productCopy.tabs.home, shortLabel: 'Home' },
      {
        key: 'pathways' as const,
        label: productCopy.tabs.pathways,
        shortLabel: 'Path',
      },
      { key: 'circle' as const, label: productCopy.tabs.circle, shortLabel: 'Circle' },
      {
        key: 'progress' as const,
        label: productCopy.tabs.progress,
        shortLabel: 'Progress',
      },
      {
        key: 'profile' as const,
        label: productCopy.tabs.profile,
        shortLabel: 'Profile',
      },
    ],
    [],
  );

  if (phase === 'welcome') {
    return <WelcomeScreen onStart={handleStart} />;
  }

  if (phase === 'onboarding') {
    return (
      <OnboardingScreen
        profile={profile}
        step={step}
        options={onboardingOptions}
        onBack={handleBack}
        onNext={handleNext}
        onProfileChange={setProfile}
      />
    );
  }

  if (isLoading) {
    return (
      <ScreenShell>
        <ScreenStateView
          title={productCopy.detail.loadingTitle}
          body={productCopy.detail.loadingBody}
        />
      </ScreenShell>
    );
  }

  if (hasLoadError || !bundle) {
    return (
      <ScreenShell>
        <ScreenStateView
          title={productCopy.detail.emptyTitle}
          body={productCopy.detail.emptyBody}
          actionLabel={productCopy.detail.retry}
          onAction={handleRetryLoad}
        />
      </ScreenShell>
    );
  }

  if (detailRoute === 'careerPulse') {
    return (
      <CareerPulseDetailScreen
        content={bundle.careerPulse}
        onBack={handleCloseCareerPulse}
      />
    );
  }

  if (detailRoute === 'strengthMap') {
    return (
      <StrengthMapScreen
        content={bundle.strengthMap}
        onBack={handleCloseStrengthMap}
      />
    );
  }

  if (detailRoute === 'assessmentReadiness') {
    return (
      <AssessmentReadinessScreen
        content={bundle.assessmentReadiness}
        onBack={handleCloseAssessmentReadiness}
      />
    );
  }

  return (
    <View style={styles.appShell}>
      {activeTab === 'home' ? (
        <HomeScreen
          content={bundle.home}
          profile={profile}
          onOpenCareerPulse={handleOpenCareerPulse}
          onOpenStrengthMap={handleOpenStrengthMap}
          onOpenAssessmentReadiness={handleOpenAssessmentReadiness}
          onRefineProfile={handleReset}
        />
      ) : null}

      {activeTab === 'pathways' ? (
        <PathwaysScreen
          content={bundle.pathways}
          careerPulse={bundle.careerPulse}
          strengthMap={bundle.strengthMap}
          onOpenCareerPulse={handleOpenCareerPulse}
          onOpenStrengthMap={handleOpenStrengthMap}
        />
      ) : null}

      {activeTab === 'circle' ? <CircleScreen content={bundle.circle} /> : null}

      {activeTab === 'progress' ? (
        <ProgressScreen
          content={bundle.progress}
          onOpenAssessmentReadiness={handleOpenAssessmentReadiness}
        />
      ) : null}

      {activeTab === 'profile' ? (
        <ProfileScreen content={bundle.profile} onRefineProfile={handleReset} />
      ) : null}

      <View style={styles.tabBarWrap}>
        <BottomTabBar
          items={tabItems}
          activeTab={activeTab}
          onTabPress={setActiveTab}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appShell: {
    flex: 1,
  },
  tabBarWrap: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
  },
});
