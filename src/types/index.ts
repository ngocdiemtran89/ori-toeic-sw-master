export type Mode = 'learning' | 'exam';
export type Section = 'speaking' | 'writing';

export interface VocabularyHint {
  word: string;
  ipa?: string;
  meaning: string;
  example: string;
}

export interface HintData {
  structureOutline: string[];
  keyCollocations: VocabularyHint[];
  grammarTips: string[];
  commonPitfalls: string[];
}

export interface SpeakingQuestion {
  id: string;
  questionNumber: number; // 1 to 11
  part: number; // 1 to 5
  partName: string;
  direction: string;
  promptText?: string;
  imageUrl?: string;
  providedInfo?: {
    title: string;
    tableHeaders?: string[];
    tableRows?: string[][];
    additionalNotes?: string;
  };
  prepTime: number; // in seconds (e.g. 45, 3)
  responseTime: number; // in seconds (e.g. 45, 30, 15, 60)
  hints: HintData;
  sampleAnswer: {
    text: string;
    scoreLevel: string; // e.g. "200/200 (Level 8)"
    analysis: string;
  };
}

export interface WritingQuestion {
  id: string;
  questionNumber: number; // 1 to 8
  part: number; // 1 to 3
  partName: string;
  direction: string;
  promptText: string;
  imageUrl?: string;
  givenKeywords?: string[]; // for Part 1 (Q1-Q5)
  incomingEmail?: {
    from: string;
    to: string;
    subject: string;
    date: string;
    body: string;
    requirements: string[];
  };
  minWords?: number; // e.g. 300 for Part 3
  timeLimit: number; // in seconds
  hints: HintData;
  sampleAnswer: {
    text: string;
    scoreLevel: string; // e.g. "200/200 (Level 9)"
    analysis: string;
  };
}

export interface GrammarCorrection {
  original: string;
  corrected: string;
  explanation: string;
}

export interface VocabularyUpgrade {
  original: string;
  suggested: string;
  context: string;
}

export interface PhoneticFeedback {
  word: string;
  issue: string;
  ipaCorrection: string;
}

export interface EvaluationResult {
  rawScore: number;
  maxRawScore: number;
  scaledScore: number; // 0 to 200
  proficiencyLevel: string; // e.g. "Level 7 (160-180) - Advanced"
  summary: string;
  scores: {
    taskCompletion: number; // 0 - 100
    grammarAccuracy: number; // 0 - 100
    lexicalResource: number; // 0 - 100
    pronunciationFluency: number; // 0 - 100
    coherenceCohesion: number; // 0 - 100
  };
  grammarCorrections: GrammarCorrection[];
  vocabularyUpgrades: VocabularyUpgrade[];
  phoneticFeedback?: PhoneticFeedback[];
  modelAnswer: string;
  actionableAdvice: string[];
}
