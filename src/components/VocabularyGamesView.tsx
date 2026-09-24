import React, { useState, useEffect } from 'react';
import {
  Shuffle,
  Volume2,
  CheckCircle2,
  XCircle,
  Trophy,
  Flame,
  RotateCcw,
  Zap,
  HelpCircle,
  Layers,
  ArrowRight,
  Smartphone,
  Monitor,
  Coins,
  Star,
  Gift,
  Check,
  ChevronRight,
  BookOpen,
  Calendar,
  Grid
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { ThematicCollocation, VocabGameMode, VocabSubTab } from '../types';
import { THEMES, THEMATIC_COLLOCATIONS } from '../data/vocabularyCollocationsData';
import { soundEffects } from '../utils/soundEffects';

export const VocabularyGamesView: React.FC = () => {
  const [selectedThemeId, setSelectedThemeId] = useState<string>('all');
  const [gameMode, setGameMode] = useState<VocabGameMode>('flashcards');
  const [subTab, setSubTab] = useState<VocabSubTab>('today');
  const [viewLayout, setViewLayout] = useState<'responsive' | 'mobile_frame'>('responsive');

  // Overall player stats
  const [score, setScore] = useState<number>(6214);
  const [streak, setStreak] = useState<number>(12);
  const [highestStreak, setHighestStreak] = useState<number>(24);

  // Daily Quests tracking
  const [questGapDone, setQuestGapDone] = useState<boolean>(true);
  const [questMatcherDone, setQuestMatcherDone] = useState<boolean>(false);
  const [questQuizDone, setQuestQuizDone] = useState<boolean>(false);
  const [rewardClaimed, setRewardClaimed] = useState<boolean>(false);

  // Featured Word of the Day index
  const [wordOfDayIndex, setWordOfDayIndex] = useState<number>(0);

  // Filtered collocations
  const currentList: ThematicCollocation[] =
    selectedThemeId === 'all'
      ? THEMATIC_COLLOCATIONS
      : THEMATIC_COLLOCATIONS.filter((item) => item.themeId === selectedThemeId);

  // Featured collocation of the day
  const wordOfTheDay: ThematicCollocation = THEMATIC_COLLOCATIONS[wordOfDayIndex % THEMATIC_COLLOCATIONS.length];

  const handleNextWordOfTheDay = () => {
    soundEffects.playFlip();
    setWordOfDayIndex((prev) => (prev + 1) % THEMATIC_COLLOCATIONS.length);
  };

  // Quests count
  const completedQuestsCount = (questGapDone ? 1 : 0) + (questMatcherDone ? 1 : 0) + (questQuizDone ? 1 : 0);

  const handleClaimReward = () => {
    if (rewardClaimed) return;
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
    soundEffects.playCombo();
    setScore((s) => s + 100);
    setRewardClaimed(true);
  };

  // =========================================================================
  // GAME 1: FLASHCARDS STATE
  // =========================================================================
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());

  const currentCard: ThematicCollocation =
    currentList[Math.min(cardIndex, currentList.length - 1)] || THEMATIC_COLLOCATIONS[0];

  const handleNextCard = () => {
    setIsFlipped(false);
    soundEffects.playFlip();
    if (cardIndex < currentList.length - 1) {
      setCardIndex((prev) => prev + 1);
    } else {
      setCardIndex(0);
    }
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    soundEffects.playFlip();
    if (cardIndex > 0) {
      setCardIndex((prev) => prev - 1);
    } else {
      setCardIndex(currentList.length - 1);
    }
  };

  const handleMarkMastered = (id: string, mastered: boolean) => {
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (mastered) {
        next.add(id);
        setScore((s) => s + 20);
        soundEffects.playSuccess();
      } else {
        next.delete(id);
      }
      return next;
    });
    handleNextCard();
  };

  // =========================================================================
  // GAME 2: COLLOCATION MATCHER STATE
  // =========================================================================
  const [matcherRoundItems, setMatcherRoundItems] = useState<ThematicCollocation[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<Set<string>>(new Set());
  const [wrongPair, setWrongPair] = useState<boolean>(false);

  const startNewMatcherRound = () => {
    const pool = [...currentList].sort(() => Math.random() - 0.5);
    const chosen = pool.slice(0, 5);
    setMatcherRoundItems(chosen);
    setMatchedIds(new Set());
    setSelectedLeft(null);
    setSelectedRight(null);
  };

  useEffect(() => {
    if (gameMode === 'matcher' || subTab === 'games') {
      startNewMatcherRound();
    }
  }, [gameMode, selectedThemeId, subTab]);

  const handleSelectLeft = (id: string) => {
    if (matchedIds.has(id)) return;
    soundEffects.playFlip();
    setSelectedLeft(id);
    if (selectedRight) {
      checkMatch(id, selectedRight);
    }
  };

  const handleSelectRight = (id: string) => {
    if (matchedIds.has(id)) return;
    soundEffects.playFlip();
    setSelectedRight(id);
    if (selectedLeft) {
      checkMatch(selectedLeft, id);
    }
  };

  const checkMatch = (leftId: string, rightId: string) => {
    if (leftId === rightId) {
      soundEffects.playSuccess();
      const nextMatched = new Set(matchedIds);
      nextMatched.add(leftId);
      setMatchedIds(nextMatched);
      setSelectedLeft(null);
      setSelectedRight(null);
      setScore((s) => s + 50);
      setQuestMatcherDone(true);
      setStreak((st) => {
        const nextSt = st + 1;
        if (nextSt >= 3) soundEffects.playCombo();
        if (nextSt > highestStreak) setHighestStreak(nextSt);
        return nextSt;
      });

      if (nextMatched.size === matcherRoundItems.length) {
        setTimeout(() => {
          soundEffects.playCombo();
        }, 300);
      }
    } else {
      soundEffects.playError();
      setWrongPair(true);
      setStreak(0);
      setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
        setWrongPair(false);
      }, 700);
    }
  };

  // =========================================================================
  // GAME 3: BLITZ FILL-IN-THE-BLANK STATE
  // =========================================================================
  const [blitzIndex, setBlitzIndex] = useState<number>(0);
  const [blitzInput, setBlitzInput] = useState<string>('');
  const [blitzFeedback, setBlitzFeedback] = useState<'none' | 'correct' | 'wrong'>('none');
  const [blitzAnswerRevealed, setBlitzAnswerRevealed] = useState<boolean>(false);

  const currentBlitzItem: ThematicCollocation =
    currentList[Math.min(blitzIndex, currentList.length - 1)] || THEMATIC_COLLOCATIONS[0];

  const handleBlitzCheck = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!blitzInput.trim()) return;

    const userAns = blitzInput.trim().toLowerCase();
    const targetPart = currentBlitzItem.verbOrFirstPart.toLowerCase();

    if (userAns === targetPart || currentBlitzItem.collocation.toLowerCase().includes(userAns)) {
      soundEffects.playSuccess();
      setBlitzFeedback('correct');
      setScore((s) => s + 30);
      setQuestGapDone(true);
      setStreak((st) => st + 1);
      setTimeout(() => {
        handleNextBlitz();
      }, 1200);
    } else {
      soundEffects.playError();
      setBlitzFeedback('wrong');
    }
  };

  const handleNextBlitz = () => {
    setBlitzFeedback('none');
    setBlitzInput('');
    setBlitzAnswerRevealed(false);
    if (blitzIndex < currentList.length - 1) {
      setBlitzIndex((prev) => prev + 1);
    } else {
      setBlitzIndex(0);
    }
  };

  // =========================================================================
  // GAME 4: SPEED QUIZ (10s Countdown)
  // =========================================================================
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [quizTimer, setQuizTimer] = useState<number>(10);
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [quizSelectedAnswer, setQuizSelectedAnswer] = useState<string | null>(null);
  const [isQuizAnswered, setIsQuizAnswered] = useState<boolean>(false);

  const currentQuizItem: ThematicCollocation =
    currentList[Math.min(quizIndex, currentList.length - 1)] || THEMATIC_COLLOCATIONS[0];

  useEffect(() => {
    if (gameMode === 'speed_quiz') {
      const correct = currentQuizItem.collocation;
      const otherCollocations = THEMATIC_COLLOCATIONS.filter((item) => item.id !== currentQuizItem.id).map(
        (i) => i.collocation
      );
      const shuffledOthers = otherCollocations.sort(() => Math.random() - 0.5).slice(0, 3);
      const allFour = [correct, ...shuffledOthers].sort(() => Math.random() - 0.5);

      setQuizOptions(allFour);
      setQuizTimer(10);
      setIsQuizAnswered(false);
      setQuizSelectedAnswer(null);
    }
  }, [quizIndex, gameMode, selectedThemeId]);

  useEffect(() => {
    if (gameMode !== 'speed_quiz' || isQuizAnswered) return;

    if (quizTimer <= 0) {
      setIsQuizAnswered(true);
      soundEffects.playError();
      setStreak(0);
      return;
    }

    const interval = setInterval(() => {
      setQuizTimer((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameMode, quizTimer, isQuizAnswered]);

  const handleAnswerQuiz = (selectedOption: string) => {
    if (isQuizAnswered) return;
    setIsQuizAnswered(true);
    setQuizSelectedAnswer(selectedOption);

    if (selectedOption === currentQuizItem.collocation) {
      soundEffects.playSuccess();
      setScore((s) => s + 40);
      setQuestQuizDone(true);
      setStreak((st) => st + 1);
    } else {
      soundEffects.playError();
      setStreak(0);
    }
  };

  // Pronounce TTS (Browser SpeechSynthesis API)
  const speakText = (text: string) => {
    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.95;
        const voices = window.speechSynthesis.getVoices();
        const englishVoice = voices.find((v) => v.lang.startsWith('en'));
        if (englishVoice) {
          utterance.voice = englishVoice;
        }
        window.speechSynthesis.speak(utterance);
      }
    } catch {
      // SpeechSynthesis suppressed or unsupported
    }
  };

  // Switch to specific game mode from Quests or Bento tiles
  const launchGameMode = (mode: VocabGameMode) => {
    setGameMode(mode);
    setSubTab('games');
    soundEffects.playFlip();
  };

  // Today Date formatted like screenshot: "MON • SEP 14"
  const formattedDate = new Date()
    .toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })
    .toUpperCase()
    .replace(',', ' •');

  // =========================================================================
  // VIEW RENDER: TODAY OVERVIEW (Matching User's Reference Screenshot)
  // =========================================================================
  const renderTodayView = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* 1. Header Bar: Date + Streak + Coins + XP */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.65rem',
          padding: '0.2rem 0.1rem'
        }}
      >
        <span
          style={{
            fontSize: '0.82rem',
            fontWeight: 800,
            color: 'var(--text-muted)',
            letterSpacing: '0.06em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}
        >
          <Calendar size={14} color="var(--accent-blue)" /> {formattedDate}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.88rem', fontWeight: 800, color: '#f97316' }}>
            <Flame size={16} fill="#f97316" color="#f97316" /> {streak}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.88rem', fontWeight: 800, color: '#eab308' }}>
            <Coins size={16} color="#eab308" /> {score.toLocaleString()}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.88rem', fontWeight: 800, color: '#06b6d4' }}>
            <Star size={16} fill="#06b6d4" color="#06b6d4" /> 79K
          </div>
        </div>
      </div>

      {/* 2. Hero Card: WORD OF THE DAY (With Warm Illustration & Editorial Typography) */}
      <div className="word-of-day-card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 240px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#d97706'
                }}
              >
                WORD OF THE DAY • CỤM TỪ HÔM NAY
              </span>

              <button
                type="button"
                onClick={handleNextWordOfTheDay}
                title="Đổi sang cụm từ khác"
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.2rem',
                  fontSize: '0.72rem',
                  fontWeight: 700
                }}
              >
                <Shuffle size={12} /> Đổi từ
              </button>
            </div>

            <h2 className="word-hero-title">
              {wordOfTheDay.collocation}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--accent-purple)', fontStyle: 'italic' }}>
                {wordOfTheDay.patternType.toLowerCase()}
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                {wordOfTheDay.ipa}
              </span>
              <button
                type="button"
                className="action-btn"
                style={{ padding: '0.2rem 0.5rem', fontSize: '0.72rem' }}
                onClick={() => speakText(wordOfTheDay.collocation)}
                title="Nghe phát âm chuẩn bản xứ"
              >
                <Volume2 size={13} color="var(--accent-blue)" /> Nghe
              </button>
            </div>

            <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.96rem', fontWeight: 600, color: 'var(--text-main)', lineHeight: 1.5 }}>
              {wordOfTheDay.vietnameseMeaning}
            </p>

            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '0.25rem' }}>
              "{wordOfTheDay.exampleSentenceEn}"
            </div>
          </div>

          {/* Warm 3D Storybook Illustration */}
          <div className="word-hero-image-wrap">
            <img
              src={wordOfDayIndex % 2 === 0 ? '/assets/word_of_day.jpg' : '/assets/teamwork_collocation.jpg'}
              alt={wordOfTheDay.collocation}
              className="word-hero-image"
            />
          </div>
        </div>
      </div>

      {/* 3. QUESTS Section (Daily Tasks Progress & Checklist) */}
      <div className="quests-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)' }}>
            QUESTS • NHIỆM VỤ HÀNG NGÀY
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-blue)' }}>
            {completedQuestsCount}/3
          </span>
        </div>

        {/* Progress Bar (Cyan) */}
        <div style={{ width: '100%', height: '7px', background: 'var(--box-inner-bg)', borderRadius: '999px', overflow: 'hidden' }}>
          <div
            style={{
              height: '100%',
              width: `${(completedQuestsCount / 3) * 100}%`,
              background: 'linear-gradient(90deg, #06b6d4, #10b981)',
              borderRadius: '999px',
              transition: 'width 0.4s ease'
            }}
          />
        </div>

        {/* Checklist Quest Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.25rem' }}>
          {/* Quest 1 */}
          <div
            className={`quest-item ${questGapDone ? 'completed' : ''}`}
            onClick={() => launchGameMode('blitz_fill')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: questGapDone ? '2px solid #10b981' : '2px solid var(--border-subtle)',
                  background: questGapDone ? '#10b981' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}
              >
                {questGapDone && <Check size={13} strokeWidth={3} />}
              </div>
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)' }}>
                Fill the Gaps (Điền từ vào câu)
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', fontWeight: 800, color: '#eab308' }}>
              +10 <Coins size={14} /> <ChevronRight size={14} color="var(--text-muted)" />
            </div>
          </div>

          {/* Quest 2 */}
          <div
            className={`quest-item ${questMatcherDone ? 'completed' : ''}`}
            onClick={() => launchGameMode('matcher')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: questMatcherDone ? '2px solid #10b981' : '2px solid var(--border-subtle)',
                  background: questMatcherDone ? '#10b981' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}
              >
                {questMatcherDone && <Check size={13} strokeWidth={3} />}
              </div>
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)' }}>
                Collocation Matcher (Ghép nối cặp từ)
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', fontWeight: 800, color: '#eab308' }}>
              +10 <Coins size={14} /> <ChevronRight size={14} color="var(--text-muted)" />
            </div>
          </div>

          {/* Quest 3 */}
          <div
            className={`quest-item ${questQuizDone ? 'completed' : ''}`}
            onClick={() => launchGameMode('speed_quiz')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  border: questQuizDone ? '2px solid #10b981' : '2px solid var(--border-subtle)',
                  background: questQuizDone ? '#10b981' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}
              >
                {questQuizDone && <Check size={13} strokeWidth={3} />}
              </div>
              <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)' }}>
                Daily Speed Quiz (Trắc nghiệm 10s)
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', fontWeight: 800, color: '#eab308' }}>
              +10 <Coins size={14} /> <ChevronRight size={14} color="var(--text-muted)" />
            </div>
          </div>
        </div>

        {/* Rewards Box */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid var(--border-subtle)' }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Rewards: <span style={{ fontSize: '1.1rem' }}>🎁</span> + <span style={{ fontSize: '1.1rem' }}>🧪</span>
          </span>
          <button
            type="button"
            className="action-btn"
            disabled={completedQuestsCount < 3 && !rewardClaimed}
            onClick={handleClaimReward}
            style={{
              padding: '0.3rem 0.8rem',
              fontSize: '0.78rem',
              fontWeight: 800,
              background: rewardClaimed ? 'rgba(16, 185, 129, 0.15)' : 'var(--accent-blue)',
              color: rewardClaimed ? '#10b981' : '#fff'
            }}
          >
            <Gift size={13} /> {rewardClaimed ? 'Đã Nhận Thưởng' : 'Mở Hộp Quà (+100 EXP)'}
          </button>
        </div>
      </div>

      {/* 4. "Play with words." Editorial Banner */}
      <div className="play-words-banner">
        <div>
          <h3 className="play-words-headline">Play with words.</h3>
          <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
            Luyện phản xạ 80 cụm từ Collocations mỗi sáng.
          </p>
        </div>
        <button
          type="button"
          className="start-mint-btn"
          onClick={() => launchGameMode('flashcards')}
        >
          Start
        </button>
      </div>

      {/* 5. Bento Mini-Games Grid */}
      <div className="bento-game-grid">
        <div
          className="bento-game-tile"
          onClick={() => launchGameMode('flashcards')}
          style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12), rgba(99, 102, 241, 0.05))' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '1.5rem' }}>🎴</span>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--accent-purple)' }}>80 THẺ</span>
          </div>
          <div>
            <h4 style={{ margin: '0.5rem 0 0.15rem 0', fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Cards (Thẻ Nhớ 3D)
            </h4>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Lật thẻ 2 mặt & phát âm</span>
          </div>
        </div>

        <div
          className="bento-game-tile"
          onClick={() => launchGameMode('matcher')}
          style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(5, 150, 105, 0.05))' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '1.5rem' }}>🔗</span>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#10b981' }}>+50 EXP</span>
          </div>
          <div>
            <h4 style={{ margin: '0.5rem 0 0.15rem 0', fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Matcher (Nối Từ)
            </h4>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Ghép cụm từ thần tốc</span>
          </div>
        </div>

        <div
          className="bento-game-tile"
          onClick={() => launchGameMode('blitz_fill')}
          style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(217, 119, 6, 0.05))' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '1.5rem' }}>⚡</span>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#f59e0b' }}>+30 EXP</span>
          </div>
          <div>
            <h4 style={{ margin: '0.5rem 0 0.15rem 0', fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Gaps (Điền Từ)
            </h4>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Gõ từ còn thiếu vào câu</span>
          </div>
        </div>

        <div
          className="bento-game-tile"
          onClick={() => launchGameMode('speed_quiz')}
          style={{ background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.12), rgba(190, 24, 93, 0.05))' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '1.5rem' }}>🎯</span>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#ec4899' }}>10 GIÂY</span>
          </div>
          <div>
            <h4 style={{ margin: '0.5rem 0 0.15rem 0', fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Quiz (Trắc Nghiệm)
            </h4>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Đấu trường phản xạ</span>
          </div>
        </div>
      </div>
    </div>
  );

  // =========================================================================
  // VIEW RENDER: PLAYABLE MINIGAMES & FLASHCARDS
  // =========================================================================
  const renderGamesView = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Game Mode Navigation Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          background: 'var(--bg-glass)',
          padding: '0.35rem',
          borderRadius: '12px',
          border: '1px solid var(--border-glass)',
          flexWrap: 'wrap'
        }}
      >
        <button
          className={`pill-btn ${gameMode === 'flashcards' ? 'active' : ''}`}
          style={{
            background: gameMode === 'flashcards' ? 'linear-gradient(135deg, #8b5cf6, #6366f1)' : 'transparent',
            color: gameMode === 'flashcards' ? '#fff' : 'var(--text-primary)',
            fontWeight: 700
          }}
          onClick={() => setGameMode('flashcards')}
        >
          <Layers size={15} /> 🎴 1. Thẻ Nhớ 3D (Flashcards)
        </button>

        <button
          className={`pill-btn ${gameMode === 'matcher' ? 'active' : ''}`}
          style={{
            background: gameMode === 'matcher' ? 'linear-gradient(135deg, #10b981, #059669)' : 'transparent',
            color: gameMode === 'matcher' ? '#fff' : 'var(--text-primary)',
            fontWeight: 700
          }}
          onClick={() => setGameMode('matcher')}
        >
          <Shuffle size={15} /> 🔗 2. Nối Cụm Từ (Matcher)
        </button>

        <button
          className={`pill-btn ${gameMode === 'blitz_fill' ? 'active' : ''}`}
          style={{
            background: gameMode === 'blitz_fill' ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'transparent',
            color: gameMode === 'blitz_fill' ? '#fff' : 'var(--text-primary)',
            fontWeight: 700
          }}
          onClick={() => setGameMode('blitz_fill')}
        >
          <Zap size={15} /> ⚡ 3. Điền Từ Tốc Độ (Speed Blitz)
        </button>

        <button
          className={`pill-btn ${gameMode === 'speed_quiz' ? 'active' : ''}`}
          style={{
            background: gameMode === 'speed_quiz' ? 'linear-gradient(135deg, #ec4899, #be185d)' : 'transparent',
            color: gameMode === 'speed_quiz' ? '#fff' : 'var(--text-primary)',
            fontWeight: 700
          }}
          onClick={() => setGameMode('speed_quiz')}
        >
          <HelpCircle size={15} /> 🎯 4. Trắc Nghiệm Phản Xạ 10s
        </button>
      </div>

      {/* GAME 1: 3D INTERACTIVE FLASHCARDS */}
      {gameMode === 'flashcards' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '680px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Thẻ {cardIndex + 1} / {currentList.length} • Đã thuộc: <strong>{masteredIds.size} cụm</strong>
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="action-btn" onClick={handlePrevCard} style={{ padding: '0.3rem 0.7rem' }}>
                Thẻ trước
              </button>
              <button className="action-btn" onClick={handleNextCard} style={{ padding: '0.3rem 0.7rem' }}>
                Thẻ tiếp theo <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div
            onClick={() => {
              setIsFlipped(!isFlipped);
              soundEffects.playFlip();
            }}
            style={{
              width: '100%',
              maxWidth: '680px',
              minHeight: '340px',
              cursor: 'pointer',
              perspective: '1200px'
            }}
          >
            <div
              className="glass-panel"
              style={{
                width: '100%',
                minHeight: '340px',
                borderRadius: '18px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                border: isFlipped ? '2px solid var(--accent-purple)' : '2px solid rgba(99, 102, 241, 0.4)',
                background: isFlipped ? 'var(--bg-card)' : 'linear-gradient(145deg, var(--bg-card), var(--bg-panel))',
                boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '12px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    color: 'var(--accent-blue)'
                  }}
                >
                  {currentCard.themeName} • {currentCard.patternType}
                </span>

                <button
                  className="action-btn"
                  style={{ padding: '0.3rem 0.6rem' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    speakText(currentCard.collocation);
                  }}
                  title="Nghe phát âm chuẩn bản xứ"
                >
                  <Volume2 size={16} color="var(--accent-blue)" /> Nghe
                </button>
              </div>

              {!isFlipped ? (
                <div style={{ textAlign: 'center', margin: '2.5rem 0' }}>
                  <div
                    style={{
                      fontSize: '2.25rem',
                      fontWeight: 800,
                      color: 'var(--text-main)',
                      marginBottom: '0.65rem',
                      letterSpacing: '-0.025em',
                      lineHeight: 1.25
                    }}
                  >
                    {currentCard.collocation}
                  </div>
                  <div
                    style={{
                      fontSize: '1rem',
                      color: 'var(--accent-blue)',
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(59, 130, 246, 0.12)',
                      display: 'inline-block',
                      padding: '0.2rem 0.75rem',
                      borderRadius: '8px',
                      fontWeight: 600
                    }}
                  >
                    {currentCard.ipa}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '1.5rem' }}>
                    💡 Nhấn vào thẻ để lật xem nghĩa & câu ví dụ ETS
                  </div>
                </div>
              ) : (
                <div style={{ margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Nghĩa tiếng Việt:
                    </div>
                    <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.01em', marginTop: '0.15rem' }}>
                      {currentCard.vietnameseMeaning}
                    </div>
                  </div>

                  <div className="editorial-quote-box" style={{ padding: '0.85rem 1rem' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--accent-purple)', textTransform: 'uppercase' }}>
                      Ví dụ ngữ cảnh TOEIC ETS:
                    </div>
                    <div style={{ fontSize: '0.96rem', color: 'var(--text-main)', marginTop: '0.25rem', fontWeight: 600, lineHeight: 1.65 }}>
                      "{currentCard.exampleSentenceEn}"
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem', lineHeight: 1.6 }}>
                      "{currentCard.exampleSentenceVi}"
                    </div>
                  </div>

                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6, background: 'var(--box-inner-bg)', padding: '0.6rem 0.85rem', borderRadius: '8px' }}>
                    <strong style={{ color: '#f59e0b' }}>💡 Bí kíp làm bài: </strong>
                    {currentCard.etsContextNote}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-glass)' }}>
                <button
                  className="action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMarkMastered(currentCard.id, false);
                  }}
                  style={{ color: '#ef4444', fontSize: '0.82rem' }}
                >
                  <XCircle size={15} /> Cần ôn lại
                </button>

                <button
                  className="action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMarkMastered(currentCard.id, true);
                  }}
                  style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', fontWeight: 700, fontSize: '0.82rem' }}
                >
                  <CheckCircle2 size={15} /> Đã thuộc (+20 EXP)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GAME 2: COLLOCATION MATCHER */}
      {gameMode === 'matcher' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 0.2rem 0', color: 'var(--text-primary)' }}>
                Thử Thách Ghép Đôi Cụm Collocation (Matcher)
              </h3>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Ghép từ vế trái (Verb/Adj) với vế phải (Noun/Prep) để tạo cụm đúng!
              </p>
            </div>
            <button className="action-btn" onClick={startNewMatcherRound}>
              <RotateCcw size={14} /> Vòng mới
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
                Vế 1 (Động từ / Tính từ):
              </span>
              {matcherRoundItems.map((item) => {
                const isMatched = matchedIds.has(item.id);
                const isSelected = selectedLeft === item.id;
                return (
                  <button
                    key={`left-${item.id}`}
                    disabled={isMatched}
                    onClick={() => handleSelectLeft(item.id)}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: isSelected
                        ? '2px solid var(--accent-blue)'
                        : isMatched
                        ? '1px solid rgba(16, 185, 129, 0.3)'
                        : '1px solid var(--border-glass)',
                      background: isMatched
                        ? 'rgba(16, 185, 129, 0.15)'
                        : isSelected
                        ? 'rgba(59, 130, 246, 0.2)'
                        : 'var(--bg-card)',
                      color: isMatched ? '#10b981' : isSelected ? 'var(--accent-blue)' : 'var(--text-primary)',
                      fontWeight: 800,
                      fontSize: '0.92rem',
                      textAlign: 'left',
                      cursor: isMatched ? 'default' : 'pointer',
                      opacity: isMatched ? 0.6 : 1,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {item.verbOrFirstPart} {isMatched && '✓'}
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent-purple)', textTransform: 'uppercase' }}>
                Vế 2 (Danh từ / Bổ ngữ):
              </span>
              {[...matcherRoundItems]
                .sort((a, b) => a.nounOrSecondPart.localeCompare(b.nounOrSecondPart))
                .map((item) => {
                  const isMatched = matchedIds.has(item.id);
                  const isSelected = selectedRight === item.id;
                  return (
                    <button
                      key={`right-${item.id}`}
                      disabled={isMatched}
                      onClick={() => handleSelectRight(item.id)}
                      style={{
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        border: isSelected
                          ? '2px solid var(--accent-purple)'
                          : isMatched
                          ? '1px solid rgba(16, 185, 129, 0.3)'
                          : '1px solid var(--border-glass)',
                        background: isMatched
                          ? 'rgba(16, 185, 129, 0.15)'
                          : isSelected
                          ? 'rgba(139, 92, 246, 0.2)'
                          : 'var(--bg-card)',
                        color: isMatched ? '#10b981' : isSelected ? 'var(--accent-purple)' : 'var(--text-primary)',
                        fontWeight: 800,
                        fontSize: '0.92rem',
                        textAlign: 'left',
                        cursor: isMatched ? 'default' : 'pointer',
                        opacity: isMatched ? 0.6 : 1,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {item.nounOrSecondPart} {isMatched && '✓'}
                    </button>
                  );
                })}
            </div>
          </div>
          {wrongPair && (
            <div style={{ textAlign: 'center', color: '#ef4444', fontWeight: 800, fontSize: '0.9rem' }}>
              ❌ Chưa chính xác! Hãy thử kết hợp lại nha!
            </div>
          )}
        </div>
      )}

      {/* GAME 3: SPEED BLITZ FILL-IN */}
      {gameMode === 'blitz_fill' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '680px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
              ⚡ Điền Từ Tốc Độ (Câu {blitzIndex + 1}/{currentList.length})
            </h3>
            <button className="action-btn" onClick={handleNextBlitz}>
              Bỏ qua <ArrowRight size={14} />
            </button>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
              Nghĩa tiếng Việt cần diễn đạt:
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              "{currentBlitzItem.vietnameseMeaning}"
            </div>

            <div style={{ margin: '0.5rem 0', background: 'var(--bg-card)', padding: '1rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b', fontSize: '1.05rem', lineHeight: 1.7 }}>
              {currentBlitzItem.exampleSentenceEn.replace(new RegExp(currentBlitzItem.collocation, 'gi'), '_____')}
            </div>

            <form onSubmit={handleBlitzCheck} style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                className="key-input"
                placeholder="Gõ từ còn thiếu..."
                value={blitzInput}
                onChange={(e) => setBlitzInput(e.target.value)}
                autoFocus
              />
              <button type="submit" className="action-btn" style={{ background: '#f59e0b', color: '#fff', fontWeight: 800 }}>
                Kiểm tra
              </button>
            </form>

            {blitzFeedback === 'correct' && (
              <div style={{ color: '#10b981', fontWeight: 800 }}>
                🎉 Chính xác! +30 EXP
              </div>
            )}
            {blitzFeedback === 'wrong' && (
              <div style={{ color: '#ef4444', fontWeight: 800 }}>
                Chưa đúng rồi! Gợi ý: bắt đầu bằng "{currentBlitzItem.verbOrFirstPart[0]}..."
                <button
                  type="button"
                  onClick={() => setBlitzAnswerRevealed(true)}
                  style={{ marginLeft: '10px', background: 'transparent', border: 'none', color: 'var(--accent-blue)', textDecoration: 'underline', cursor: 'pointer' }}
                >
                  Xem đáp án
                </button>
              </div>
            )}
            {blitzAnswerRevealed && (
              <div style={{ color: '#10b981', fontWeight: 800 }}>
                Đáp án: {currentBlitzItem.collocation}
              </div>
            )}
          </div>
        </div>
      )}

      {/* GAME 4: SPEED QUIZ */}
      {gameMode === 'speed_quiz' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '640px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
              🎯 Trắc Nghiệm Phản Xạ 10s (Câu {quizIndex + 1}/{currentList.length})
            </h3>
            <div style={{ fontSize: '1.15rem', fontWeight: 900, color: quizTimer <= 3 ? '#ef4444' : '#06b6d4' }}>
              ⏱️ {quizTimer}s
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-purple)', textTransform: 'uppercase' }}>
              Chọn cụm Collocation mang nghĩa:
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              "{currentQuizItem.vietnameseMeaning}"
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.65rem' }}>
              {quizOptions.map((opt, idx) => {
                const isSelected = quizSelectedAnswer === opt;
                const isCorrect = opt === currentQuizItem.collocation;
                let bg = 'var(--bg-card)';
                let border = '1px solid var(--border-glass)';
                let color = 'var(--text-primary)';

                if (isQuizAnswered) {
                  if (isCorrect) {
                    bg = 'rgba(16, 185, 129, 0.2)';
                    border = '2px solid #10b981';
                    color = '#10b981';
                  } else if (isSelected) {
                    bg = 'rgba(239, 68, 68, 0.2)';
                    border = '2px solid #ef4444';
                    color = '#ef4444';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isQuizAnswered}
                    onClick={() => handleAnswerQuiz(opt)}
                    style={{
                      padding: '1rem',
                      borderRadius: '12px',
                      background: bg,
                      border,
                      color,
                      fontSize: '0.98rem',
                      fontWeight: 800,
                      textAlign: 'left',
                      cursor: isQuizAnswered ? 'default' : 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {String.fromCharCode(65 + idx)}. {opt}
                  </button>
                );
              })}
            </div>

            {isQuizAnswered && (
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                <button
                  className="action-btn"
                  onClick={() => setQuizIndex((prev) => (prev + 1) % currentList.length)}
                  style={{ background: 'var(--accent-blue)', color: '#fff', fontWeight: 800 }}
                >
                  Câu tiếp theo <ArrowRight size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );

  // =========================================================================
  // VIEW RENDER: COMPLETE LIBRARY CATALOG OF 80 COLLOCATIONS
  // =========================================================================
  const renderLibraryView = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0, color: 'var(--text-main)' }}>
          📚 Kho 80 Cụm Từ Collocations Chuẩn ETS ({currentList.length} cụm)
        </h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem' }}>
        {currentList.map((item) => (
          <div key={item.id} className="bento-card" style={{ padding: '1rem 1.15rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
                  {item.patternType}
                </span>
                <h4 style={{ margin: '0.2rem 0', fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  {item.collocation}
                </h4>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {item.ipa}
                </div>
              </div>

              <button
                type="button"
                className="action-btn"
                style={{ padding: '0.25rem 0.5rem' }}
                onClick={() => speakText(item.collocation)}
                title="Nghe phát âm"
              >
                <Volume2 size={14} color="var(--accent-blue)" />
              </button>
            </div>

            <p style={{ margin: '0.45rem 0 0.2rem 0', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)' }}>
              {item.vietnameseMeaning}
            </p>

            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '0.35rem' }}>
              "{item.exampleSentenceEn}"
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="vocab-games-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Top Banner Header */}
      <div
        className="glass-panel"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.14), rgba(59, 130, 246, 0.14))',
          borderColor: 'rgba(139, 92, 246, 0.3)',
          padding: '1.25rem 1.5rem',
          borderRadius: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '1.6rem' }}>🎯</span>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '20px',
                  background: 'rgba(139, 92, 246, 0.2)',
                  color: 'var(--accent-purple)'
                }}
              >
                THEMATIC COLLOCATION HUB
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '20px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#10b981'
                }}
              >
                80 Cụm Từ Thực Chiến Song Ngữ
              </span>
            </div>

            <h1 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 0.25rem 0', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
              Học Từ Vựng & Collocations Theo Chủ Đề
            </h1>
            <p className="prose-lead" style={{ margin: 0, fontSize: '0.88rem' }}>
              80 cụm từ Collocations đắt giá nhất trong đề thi ETS — Luyện phản xạ qua 4 minigame thông minh.
            </p>
          </div>

          {/* Device Frame View Toggle & Stats */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', background: 'var(--box-inner-bg)', border: '1px solid var(--border-subtle)', borderRadius: '10px', padding: '0.15rem' }}>
              <button
                type="button"
                className={`pill-btn ${viewLayout === 'responsive' ? 'active' : ''}`}
                style={{ fontSize: '0.75rem', padding: '0.3rem 0.65rem' }}
                onClick={() => setViewLayout('responsive')}
                title="Xem giao diện web rộng đa cột"
              >
                <Monitor size={14} /> Web Rộng
              </button>
              <button
                type="button"
                className={`pill-btn ${viewLayout === 'mobile_frame' ? 'active' : ''}`}
                style={{ fontSize: '0.75rem', padding: '0.3rem 0.65rem' }}
                onClick={() => setViewLayout('mobile_frame')}
                title="Mô phỏng giao diện điện thoại iPhone chân thực"
              >
                <Smartphone size={14} /> Mobile App
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--box-inner-bg)',
                border: '1px solid var(--border-subtle)',
                padding: '0.5rem 0.85rem',
                borderRadius: '12px'
              }}
            >
              <Trophy size={18} color="#f59e0b" />
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700 }}>ĐIỂM EXP</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f59e0b' }}>{score}</div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--box-inner-bg)',
                border: '1px solid var(--border-subtle)',
                padding: '0.5rem 0.85rem',
                borderRadius: '12px'
              }}
            >
              <Flame size={18} color="#ef4444" />
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700 }}>STREAK</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ef4444' }}>
                  {streak} <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>(Kỷ lục: {highestStreak})</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progressive Disclosure Guide */}
        <details className="progressive-guide" style={{ marginTop: '0.85rem' }}>
          <summary>
            <span>💡 Xem quy luật ghi nhớ 80 cụm từ & hệ thống cộng điểm EXP</span>
            <span style={{ fontSize: '0.75rem' }}>▼</span>
          </summary>
          <div className="progressive-guide-content">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div>
                <strong style={{ color: 'var(--text-main)' }}>🎯 4 Chế độ Game:</strong>
                <ul style={{ paddingLeft: '1.2rem', marginTop: '0.35rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <li><strong>Thẻ nhớ 3D:</strong> +20 EXP mỗi khi đánh dấu thuộc.</li>
                  <li><strong>Nối cụm từ:</strong> +50 EXP mỗi cặp đúng, combo streak nhận thưởng.</li>
                  <li><strong>Điền từ tốc độ:</strong> +30 EXP mỗi từ điền chính xác.</li>
                  <li><strong>Trắc nghiệm 10s:</strong> +40 EXP phản xạ nhanh trong 10 giây.</li>
                </ul>
              </div>
              <div>
                <strong style={{ color: 'var(--text-main)' }}>🌟 Vì sao cần học Collocations?</strong>
                <p style={{ marginTop: '0.35rem', lineHeight: 1.6 }}>
                  Giám khảo ETS chấm điểm bài Speaking & Writing dựa trên độ chuẩn xác của cụm từ (Lexical Resource).
                  Thay vì dùng từ đơn lẻ dễ sai ngữ pháp, dùng cụm từ cố định giúp bạn đạt trọn vẹn Level 8–9!
                </p>
              </div>
            </div>
          </div>
        </details>
      </div>

      {/* Theme Filters Bar (Single-Row Horizontal Scrollable Pill Container) */}
      <div className="pill-scroll-container">
        <button
          onClick={() => setSelectedThemeId('all')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.48rem 0.85rem',
            borderRadius: '10px',
            border: selectedThemeId === 'all' ? '2px solid #8b5cf6' : '1px solid var(--border-subtle)',
            background: selectedThemeId === 'all' ? 'var(--bg-card)' : 'var(--box-inner-bg)',
            color: selectedThemeId === 'all' ? '#8b5cf6' : 'var(--text-main)',
            fontWeight: 700,
            fontSize: '0.82rem',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'all 0.18s ease'
          }}
        >
          <span>🌟</span> Tất Cả (80 Cụm Từ)
        </button>

        {THEMES.map((theme) => {
          const isActive = selectedThemeId === theme.id;
          return (
            <button
              key={theme.id}
              onClick={() => setSelectedThemeId(theme.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.48rem 0.85rem',
                borderRadius: '10px',
                border: isActive ? `2px solid ${theme.color}` : '1px solid var(--border-subtle)',
                background: isActive ? 'var(--bg-card)' : 'var(--box-inner-bg)',
                color: isActive ? theme.color : 'var(--text-main)',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.18s ease'
              }}
            >
              <span>{theme.icon}</span> {theme.name}
            </button>
          );
        })}
      </div>

      {/* MAIN CONTAINER: Either Wrapped in Phone Shell or Widescreen Bento */}
      <div className={viewLayout === 'mobile_frame' ? 'mobile-device-shell' : 'w-full'}>
        {viewLayout === 'mobile_frame' && (
          <div className="mobile-notch-island">
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0284c7' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#1e293b' }} />
          </div>
        )}

        <div className={viewLayout === 'mobile_frame' ? 'mobile-device-content' : ''}>
          {subTab === 'today' && renderTodayView()}
          {subTab === 'cards' && renderGamesView()}
          {subTab === 'games' && renderGamesView()}
          {subTab === 'library' && renderLibraryView()}

          {/* Bottom Dock App Bar (Native App Style matching reference screenshot) */}
          <div className="mobile-bottom-dock">
            <button
              type="button"
              className={`dock-item-btn ${subTab === 'today' ? 'active' : ''}`}
              onClick={() => {
                setSubTab('today');
                soundEffects.playFlip();
              }}
            >
              <Grid size={18} />
              <span>Today</span>
            </button>

            <button
              type="button"
              className={`dock-item-btn ${subTab === 'cards' ? 'active' : ''}`}
              onClick={() => {
                setSubTab('cards');
                setGameMode('flashcards');
                soundEffects.playFlip();
              }}
            >
              <Layers size={18} />
              <span>Cards</span>
            </button>

            <button
              type="button"
              className={`dock-item-btn ${subTab === 'games' ? 'active' : ''}`}
              onClick={() => {
                setSubTab('games');
                soundEffects.playFlip();
              }}
            >
              <Zap size={18} />
              <span>Games</span>
            </button>

            <button
              type="button"
              className={`dock-item-btn ${subTab === 'library' ? 'active' : ''}`}
              onClick={() => {
                setSubTab('library');
                soundEffects.playFlip();
              }}
            >
              <BookOpen size={18} />
              <span>Library</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
