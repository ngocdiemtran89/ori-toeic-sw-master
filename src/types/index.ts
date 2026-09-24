export type Mode = 'learning' | 'exam';
export type Section = 'speaking' | 'writing' | 'academic' | 'translation';

export type TranslationPart =
  | 'writing_p1' // Part 1 Writing: Viết câu theo tranh & 2 từ khóa
  | 'writing_p2' // Part 2 Writing: Email thương mại & Yêu cầu
  | 'speaking_p2' // Speaking Part 2: Miêu tả tranh O-P-B-A
  | 'speaking_p3_4' // Speaking Part 3 & 4: Trả lời trực diện & Lịch trình
  | 'opinion_paragraphs'; // Task cuối Writing Q8 & Speaking Q11: Đoạn văn ngắn nền tảng

export interface TranslationItem {
  id: string;
  itemNumber: number; // 1 to 60
  part: TranslationPart;
  partName: string;
  partCategory: 'sentence' | 'paragraph';
  title: string;
  vietnamesePrompt: string;
  targetGrammar: string;
  vocabularyHints: { word: string; meaning: string; ipa?: string }[];
  sampleEnglishAnswer: string;
  alternativeAnswers?: string[];
  analysis: string;
  difficulty: 'Cơ bản (500+)' | 'Trung cấp (650+)' | 'Nâng cao (800+)';
}

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
  proStrategyTips?: string[]; // High-level ETS examiner tips
}

export interface SpeakingQuestion {
  id: string;
  testSetId?: number; // 1 to 10
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
  testSetId?: number; // 1 to 10
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

// ==========================================
// ORI ACADEMIC ESSAY MODULE INTERFACES
// ==========================================

export type EssayCategory = 'agree_disagree' | 'preference' | 'pros_cons';

export interface BilingualSentence {
  en: string;
  vi: string;
  highlightKeywords?: string[];
  grammarNote?: string;
}

export interface BilingualParagraph {
  paragraphTitle: string; // e.g. "Đoạn 1: Mở bài (Introduction)"
  role: string; // "Hook & Thesis Statement"
  sentences: BilingualSentence[];
}

export interface OriEssayTopic {
  id: string;
  category: EssayCategory;
  categoryName: string; // "Dạng 1: Agree / Disagree (Đồng ý hay Phản đối)"
  topicTitle: string;
  prompt: string;
  overviewStrategy: string;
  brainstormingMap: {
    coreQuestion: string;
    recommendedStance: string;
    reasons: {
      point: string;
      elaboration: string;
      example: string;
    }[];
  };
  masterFormula: {
    introFormula: string[];
    body1Formula: string[];
    body2Formula: string[];
    conclusionFormula: string[];
  };
  keySentenceTemplates: {
    stage: string;
    template: string;
    vietnameseMeaning: string;
  }[];
  bilingualModelEssay: BilingualParagraph[];
}
