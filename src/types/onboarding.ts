export type ExperienceBand = '10-14' | '15-19' | '20-24' | '25+';

export type ConcernId = 'relevance' | 'pivot' | 'security' | 'balance';

export type AppTab = 'home' | 'tickets' | 'reports' | 'more';

export type DetailRoute =
  | 'careerPulse'
  | 'strengthMap'
  | 'assessmentReadiness';

export type OnboardingData = {
  currentRole: string;
  experienceBand: ExperienceBand | null;
  biggestConcern: ConcernId | null;
};

export type Option<TValue extends string> = {
  value: TValue;
  label: string;
  description: string;
};

export type OnboardingOptions = {
  experienceOptions: Array<Option<ExperienceBand>>;
  concernOptions: Array<Option<ConcernId>>;
};

export type HomeContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroSummary: string;
  pulse: {
    label: string;
    summary: string;
    focus: string;
  };
  strengthMapTeaser: {
    title: string;
    summary: string;
    assets: string[];
    adjacentHint: string;
  };
  assessmentTeaser: {
    title: string;
    summary: string;
    coveredCount: number;
    nextFocus: string;
  };
  weeklyFocus: {
    title: string;
    body: string;
  };
};

export type CareerPulseDetail = {
  eyebrow: string;
  title: string;
  summary: string;
  sectorShift: string[];
  roleMeaning: string[];
  whatThisMeans: string[];
  nextStep: {
    title: string;
    body: string;
    actionLabel: string;
  };
};

export type StrengthAsset = {
  id: string;
  name: string;
  currentValue: string;
  futureValue: string;
  whyItMatters: string;
  adjacentPath: string;
};

export type StrengthMapContent = {
  eyebrow: string;
  title: string;
  summary: string;
  centerLabel: string;
  centerValue: string;
  assets: StrengthAsset[];
};

export type AssessmentArea = {
  id: string;
  label: string;
  value: number;
  status: 'steady' | 'growing';
  covered: string;
  remains: string;
  explanation: string;
  nextStep: string;
};

export type AssessmentReadinessContent = {
  eyebrow: string;
  title: string;
  summary: string;
  reassurance: string;
  areas: AssessmentArea[];
};

export type PathwaysContent = {
  headline: string;
  summary: string;
  pathways: Array<{
    id: string;
    title: string;
    description: string;
    direction: string;
    relevance: string;
  }>;
};

export type CircleContent = {
  headline: string;
  summary: string;
  groups: Array<{
    id: string;
    title: string;
    description: string;
    rhythm: string;
  }>;
  quietPrompt: {
    title: string;
    body: string;
  };
};

export type ProgressContent = {
  headline: string;
  summary: string;
  milestones: Array<{
    id: string;
    title: string;
    note: string;
    status: 'done' | 'current' | 'next';
  }>;
  readinessPreview: Array<{
    label: string;
    value: number;
  }>;
};

export type ProfileContent = {
  headline: string;
  summary: string;
  profileRows: Array<{
    id: string;
    label: string;
    value: string;
  }>;
  preferences: Array<{
    id: string;
    label: string;
    value: string;
  }>;
};

export type AppInsightsBundle = {
  home: HomeContent;
  pathways: PathwaysContent;
  circle: CircleContent;
  progress: ProgressContent;
  profile: ProfileContent;
  careerPulse: CareerPulseDetail;
  strengthMap: StrengthMapContent;
  assessmentReadiness: AssessmentReadinessContent;
};
