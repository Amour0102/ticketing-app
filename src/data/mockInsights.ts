import type {
  AppInsightsBundle,
  AssessmentReadinessContent,
  CareerPulseDetail,
  CircleContent,
  ConcernId,
  ExperienceBand,
  HomeContent,
  OnboardingData,
  Option,
  PathwaysContent,
  ProfileContent,
  ProgressContent,
  StrengthMapContent,
} from '../types/onboarding';
import { seniorProcurementOfficerPersona } from './samplePersona';

export const experienceOptions: Array<Option<ExperienceBand>> = [
  {
    value: '10-14',
    label: '10 to 14 years',
    description: 'A strong foundation with room to broaden your leadership edge.',
  },
  {
    value: '15-19',
    label: '15 to 19 years',
    description: 'Deep experience that others already trust and depend on.',
  },
  {
    value: '20-24',
    label: '20 to 24 years',
    description: 'Seasoned judgment shaped by real institutional work.',
  },
  {
    value: '25+',
    label: '25+ years',
    description: 'A mature career story suited to stewardship, mentoring, and advisory work.',
  },
];

export const concernOptions: Array<Option<ConcernId>> = [
  {
    value: 'relevance',
    label: 'Staying relevant',
    description: 'Keeping your experience visible and current as work changes.',
  },
  {
    value: 'pivot',
    label: 'Making a pivot',
    description: 'Turning long experience into a credible adjacent path.',
  },
  {
    value: 'security',
    label: 'Protecting stability',
    description: 'Keeping your next move steady and well-grounded.',
  },
  {
    value: 'balance',
    label: 'Creating better balance',
    description: 'Finding work that fits energy, family, and long-term priorities.',
  },
];

const concernPulseLabels: Record<ConcernId, string> = {
  relevance: 'Your experience remains highly usable',
  pivot: 'Your experience is well positioned to travel',
  security: 'Your experience still carries institutional weight',
  balance: 'Your experience gives you room to shape a steadier next chapter',
};

const concernFocusNotes: Record<ConcernId, string> = {
  relevance:
    'The strongest next move is to show your experience as current and operational, not just senior.',
  pivot:
    'The opportunity is not to start over, but to reframe what already travels well into adjacent work.',
  security:
    'A steadier next step will come from making your reliability, process judgment, and trust visible.',
  balance:
    'The next chapter may be less about title progression and more about role design and sustainability.',
};

function getExperienceLabel(experienceBand: ExperienceBand | null) {
  return (
    experienceOptions.find((option) => option.value === experienceBand)?.label ??
    'many years of experience'
  );
}

function resolveProfile(profile: OnboardingData) {
  return {
    role: profile.currentRole.trim() || seniorProcurementOfficerPersona.role,
    concern: profile.biggestConcern ?? seniorProcurementOfficerPersona.biggestConcern,
    experienceBand:
      profile.experienceBand ?? seniorProcurementOfficerPersona.experienceBand,
  };
}

export function buildHomeContent(profile: OnboardingData): HomeContent {
  const { role, concern, experienceBand } = resolveProfile(profile);
  const strengthMap = buildStrengthMapContent(profile);
  const readiness = buildAssessmentReadinessContent(profile);
  const coveredCount = readiness.areas.filter(
    (area) => area.status === 'steady',
  ).length;

  return {
    heroEyebrow: 'Today in Inzira',
    heroTitle: `A steadier read on ${role}.`,
    heroSummary: `You are bringing forward ${getExperienceLabel(
      experienceBand,
    ).toLowerCase()} in work that still matters. The goal now is to position that value with clarity, not noise.`,
    pulse: {
      label: concernPulseLabels[concern],
      summary:
        'Public-sector procurement work in Rwanda is becoming more visible, more digital, and more tightly reviewed. That increases the value of officers who combine process judgment with calm coordination.',
      focus: concernFocusNotes[concern],
    },
    strengthMapTeaser: {
      title: 'Your value is larger than a list of skills.',
      summary:
        'The strongest parts of your experience are named here as career assets that can keep carrying weight.',
      assets: strengthMap.assets.slice(0, 3).map((asset) => asset.name),
      adjacentHint: strengthMap.assets[1]?.adjacentPath ?? 'Advisory work',
    },
    assessmentTeaser: {
      title: 'You are already partway there.',
      summary:
        'Most of your readiness work is about making existing strengths easier to see and easier to carry forward.',
      coveredCount,
      nextFocus:
        readiness.areas.find((area) => area.status === 'growing')?.label ??
        'Role story clarity',
    },
    weeklyFocus: {
      title: 'This week',
      body:
        'Write down one procurement case where your judgment reduced risk, and one where your coordination helped work move forward cleanly.',
    },
  };
}

export function buildCareerPulseDetail(profile?: OnboardingData): CareerPulseDetail {
  const { role } = resolveProfile(profile ?? {
    currentRole: '',
    experienceBand: null,
    biggestConcern: null,
  });

  return {
    eyebrow: 'Career Pulse',
    title:
      'Public procurement work is becoming more visible, more digital, and more tightly reviewed.',
    summary: `For ${role.toLowerCase()} work in Rwanda’s public sector, this shift is less about disruption and more about clearer standards. Institutions need people who can keep process sound, documentation clean, and decisions explainable.`,
    sectorShift: [
      'Procurement is moving further into structured digital workflows, which means more of the work leaves a visible process trail.',
      'Value for money, audit readiness, and disciplined documentation are under closer attention, so procurement judgment is being seen more clearly.',
      'The role is becoming more cross-functional. Procurement officers increasingly need to coordinate with planning, finance, legal, and delivery teams rather than work in isolation.',
    ],
    roleMeaning: [
      'Experience still matters most where rules and judgment meet. Institutions need people who can spot weak files early and prevent avoidable delays.',
      'The value of your role is no longer only procedural. It is also about keeping a process defensible under public scrutiny.',
      'Calm coordination is becoming more important, not less. Teams rely on officers who can align departments and keep momentum without confusion.',
    ],
    whatThisMeans: [
      'Frame your credibility around procurement integrity, disciplined delivery, and reliable process oversight.',
      'Use concrete examples where you strengthened documentation, reduced delay, or kept a tender process on sound footing.',
      'A useful edge now is confidence with structured digital workflows and clearer communication across departments.',
    ],
    nextStep: {
      title: 'Next step',
      body:
        'Capture two recent examples that show your value clearly: one where you reduced risk, and one where you helped work move forward cleanly and on time.',
      actionLabel: 'Return home',
    },
  };
}

export function buildStrengthMapContent(
  profile: OnboardingData,
): StrengthMapContent {
  const { role, experienceBand } = resolveProfile(profile);

  return {
    eyebrow: 'Strength Map',
    title: 'Your value sits in what you have already carried through real institutions.',
    summary:
      'This map shows named career assets, not abstract skill tags. Each one holds current value now and future value in adjacent paths.',
    centerLabel: 'Experience at the center',
    centerValue: `${role} built over ${getExperienceLabel(experienceBand).toLowerCase()}`,
    assets: [
      {
        id: 'vendor-contract-knowledge',
        name: 'Vendor contract knowledge',
        currentValue:
          'Helps procurement teams manage supplier terms with fewer gaps, fewer disputes, and clearer accountability after award.',
        futureValue:
          'Travels well into supplier oversight, contract management, and compliance support.',
        whyItMatters:
          'Contract knowledge still matters because institutions need people who understand how procurement terms affect delivery after signing, not only during tendering.',
        adjacentPath: 'Contract management and supplier performance oversight',
      },
      {
        id: 'cross-ministerial-negotiation',
        name: 'Cross-ministerial negotiation',
        currentValue:
          'Keeps departments aligned when priorities, approvals, and timelines do not naturally move together.',
        futureValue:
          'Builds a strong base for advisory, coordination, and stakeholder-facing leadership roles.',
        whyItMatters:
          'Institutional work often slows down when departments protect their own process. Calm agreement-building remains a high-value asset.',
        adjacentPath: 'Program coordination and institutional advisory work',
      },
      {
        id: 'contract-risk-assessment',
        name: 'Contract risk assessment',
        currentValue:
          'Protects procurement decisions by spotting weak documentation and unclear obligations before they become audit or delivery problems.',
        futureValue:
          'Opens paths into procurement assurance, compliance, and internal controls.',
        whyItMatters:
          'As scrutiny rises, institutions value people who can prevent risk early rather than clean it up later.',
        adjacentPath: 'Compliance review and procurement assurance',
      },
      {
        id: 'leadership-during-institutional-change',
        name: 'Leadership during institutional change',
        currentValue:
          'Helps teams stay steady when policy, systems, or reporting expectations shift around them.',
        futureValue:
          'Supports movement into change leadership, mentoring, and senior operations support.',
        whyItMatters:
          'Periods of change reward leaders who preserve discipline, calm teams, and keep work moving without confusion.',
        adjacentPath: 'Change management and senior operations support',
      },
    ],
  };
}

export function buildAssessmentReadinessContent(
  profile?: OnboardingData,
): AssessmentReadinessContent {
  const { role } = resolveProfile(
    profile ?? {
      currentRole: '',
      experienceBand: null,
      biggestConcern: null,
    },
  );

  return {
    eyebrow: 'Assessment Readiness',
    title: 'You are already partway there. This is a practical check, not a judgment.',
    summary: `For ${role.toLowerCase()} work in Rwanda, readiness is less about learning everything new and more about showing existing value in a clearer way.`,
    reassurance:
      'Most of this work is about sharpening what you already do well. The gaps below are manageable and can be addressed through small, role-based steps.',
    areas: [
      {
        id: 'process-judgment',
        label: 'Process judgment',
        value: 88,
        status: 'steady',
        covered:
          'You already understand how procurement decisions should move through formal process and where files typically weaken.',
        remains:
          'The next step is making that judgment easier to describe in your professional story.',
        explanation:
          'Institutions trust officers who can tell the difference between a routine delay and a real process risk.',
        nextStep:
          'Write one short example of a procurement file you strengthened before it became a problem.',
      },
      {
        id: 'documentation-discipline',
        label: 'Documentation discipline',
        value: 82,
        status: 'steady',
        covered:
          'You already keep records, approvals, and supporting detail in working order because that is part of the role.',
        remains:
          'What remains is showing how that discipline protects the institution, not just how it satisfies procedure.',
        explanation:
          'Documentation matters more when oversight is high. Clear files create trust.',
        nextStep:
          'Note one moment when good documentation saved time during review or follow-up.',
      },
      {
        id: 'cross-team-influence',
        label: 'Cross-team influence',
        value: 76,
        status: 'steady',
        covered:
          'You already work across finance, user departments, leadership, and suppliers.',
        remains:
          'The next step is naming that coordination as a real strength rather than invisible background work.',
        explanation:
          'Senior procurement officers often create progress by keeping several teams aligned.',
        nextStep:
          'Capture one example where your follow-up helped a process move forward cleanly.',
      },
      {
        id: 'digital-workflow-confidence',
        label: 'Digital workflow confidence',
        value: 68,
        status: 'growing',
        covered:
          'You already understand the logic of approvals, procurement steps, and records, which makes digital systems easier to adapt to than they first appear.',
        remains:
          'The main work left is showing confidence inside structured digital workflows.',
        explanation:
          'This is not about becoming technical. It is about being seen as steady when procurement becomes more system-based.',
        nextStep:
          'List one digital workflow you already handle confidently from start to finish.',
      },
      {
        id: 'role-story',
        label: 'Role story clarity',
        value: 63,
        status: 'growing',
        covered:
          'Your experience is already substantial, even if it is not yet shaped into a concise professional story.',
        remains:
          'What remains is a clearer way of explaining your contribution in terms of outcomes and trusted oversight.',
        explanation:
          'When people understand your contribution quickly, your experience travels better.',
        nextStep:
          'Write three lines: what you protect, what you improve, and what others rely on you for.',
      },
      {
        id: 'forward-positioning',
        label: 'Forward positioning',
        value: 66,
        status: 'growing',
        covered:
          'You already hold experience that can support adjacent work such as compliance, advisory, contract management, or coordination.',
        remains:
          'The remaining step is naming one or two realistic directions so your next move feels deliberate.',
        explanation:
          'This is not about rushing into a major career change. It is about seeing where your background still carries weight next.',
        nextStep:
          'Choose one adjacent direction that feels credible now and write down why your current role already prepares you for it.',
      },
    ],
  };
}

export function buildPathwaysContent(profile: OnboardingData): PathwaysContent {
  const { role } = resolveProfile(profile);

  return {
    headline: 'Where your experience can travel next',
    summary: `${role} work can move in more than one direction without losing its institutional value.`,
    pathways: [
      {
        id: 'assurance',
        title: 'Procurement assurance',
        description:
          'A strong fit for experience grounded in process discipline, review, and risk awareness.',
        direction: 'Compliance, internal controls, oversight',
        relevance: 'Best when your strength is spotting weakness early.',
      },
      {
        id: 'contract-management',
        title: 'Contract management',
        description:
          'Builds on supplier terms, follow-through, and practical oversight after award.',
        direction: 'Supplier performance, delivery follow-up, contract stewardship',
        relevance: 'Best when your strength is keeping obligations clear and workable.',
      },
      {
        id: 'coordination',
        title: 'Institutional coordination',
        description:
          'Leans on your ability to move teams, approvals, and stakeholders forward calmly.',
        direction: 'Program coordination, advisory support, cross-team operations',
        relevance: 'Best when your strength is alignment across departments.',
      },
    ],
  };
}

export function buildCircleContent(): CircleContent {
  return {
    headline: 'A quieter professional circle',
    summary:
      'Circle is designed for calm peer contact, not noisy networking. Think trusted professional rooms, not a feed.',
    groups: [
      {
        id: 'procurement-peers',
        title: 'Senior procurement peers',
        description:
          'Experienced professionals comparing how institutional work is changing and what still carries weight.',
        rhythm: 'Monthly exchange',
      },
      {
        id: 'public-service-transition',
        title: 'Public service transitions',
        description:
          'A space for those considering adjacent work in compliance, coordination, or advisory support.',
        rhythm: 'Small guided circle',
      },
      {
        id: 'leadership-stewardship',
        title: 'Leadership and stewardship',
        description:
          'Focused on mature leadership, institutional memory, and practical decision-making under scrutiny.',
        rhythm: 'Quiet quarterly notes',
      },
    ],
    quietPrompt: {
      title: 'A gentler way to stay connected',
      body:
        'You do not need constant posting to stay professionally visible. Small, credible contact often matters more.',
    },
  };
}

export function buildProgressContent(profile: OnboardingData): ProgressContent {
  const readiness = buildAssessmentReadinessContent(profile);

  return {
    headline: 'Measured progress, not pressure',
    summary:
      'Progress tracks the small pieces that make your experience easier to carry into the next chapter.',
    milestones: [
      {
        id: 'story',
        title: 'Role story drafted',
        note: 'Turn your experience into three clear lines others can understand quickly.',
        status: 'current',
      },
      {
        id: 'examples',
        title: 'Two practical examples captured',
        note: 'Keep one example for reduced risk and one for smoother delivery.',
        status: 'next',
      },
      {
        id: 'paths',
        title: 'Adjacent path selected',
        note: 'Choose one realistic direction your background already supports.',
        status: 'done',
      },
    ],
    readinessPreview: readiness.areas.slice(0, 4).map((area) => ({
      label: area.label,
      value: area.value,
    })),
  };
}

export function buildProfileContent(profile: OnboardingData): ProfileContent {
  const { role, experienceBand, concern } = resolveProfile(profile);

  return {
    headline: 'Your profile',
    summary:
      'A quiet summary of what Inzira is using to shape your view. This can evolve as your next chapter becomes clearer.',
    profileRows: [
      {
        id: 'role',
        label: 'Current role',
        value: role,
      },
      {
        id: 'experience',
        label: 'Experience',
        value: getExperienceLabel(experienceBand),
      },
      {
        id: 'concern',
        label: 'Current concern',
        value:
          concernOptions.find((option) => option.value === concern)?.label ??
          'Staying relevant',
      },
      {
        id: 'sector',
        label: 'Sector lens',
        value: seniorProcurementOfficerPersona.sector,
      },
    ],
    preferences: [
      {
        id: 'tone',
        label: 'Guidance style',
        value: 'Calm, plain language, practical next steps',
      },
      {
        id: 'pace',
        label: 'Pace',
        value: 'Small steps over heavy action plans',
      },
    ],
  };
}

export function buildAppInsightsBundle(profile: OnboardingData): AppInsightsBundle {
  return {
    home: buildHomeContent(profile),
    pathways: buildPathwaysContent(profile),
    circle: buildCircleContent(),
    progress: buildProgressContent(profile),
    profile: buildProfileContent(profile),
    careerPulse: buildCareerPulseDetail(profile),
    strengthMap: buildStrengthMapContent(profile),
    assessmentReadiness: buildAssessmentReadinessContent(profile),
  };
}
