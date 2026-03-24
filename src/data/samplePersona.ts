import type { ConcernId, ExperienceBand, OnboardingData } from '../types/onboarding';

export type SamplePersona = {
  id: string;
  label: string;
  sector: string;
  role: string;
  location: string;
  experienceBand: ExperienceBand;
  biggestConcern: ConcernId;
};

export const seniorProcurementOfficerPersona: SamplePersona = {
  id: 'rw-senior-procurement-officer',
  label: 'Senior procurement officer',
  sector: 'Rwanda public-sector procurement',
  role: 'Senior Procurement Officer',
  location: 'Rwanda',
  experienceBand: '20-24',
  biggestConcern: 'relevance',
};

export const sampleProfile: OnboardingData = {
  currentRole: seniorProcurementOfficerPersona.role,
  experienceBand: seniorProcurementOfficerPersona.experienceBand,
  biggestConcern: seniorProcurementOfficerPersona.biggestConcern,
};
