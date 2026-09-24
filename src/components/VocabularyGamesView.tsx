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
  Lightbulb
} from 'lucide-react';
import type { ThematicCollocation, VocabGameMode } from '../types';
import { THEMES, THEMATIC_COLLOCATIONS } from '../data/vocabularyCollocationsData';
import { soundEffects } from '../utils/soundEffects';

export const VocabularyGamesView: React.FC = () => {
  const [selectedThemeId, setSelectedThemeId] = useState<string>('all');
  const [gameMode, setGameMode] = useState<VocabGameMode>('flashcards');

  // Overall player stats
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [highestStreak, setHighestStreak] = useState<number>(0);

  // Filtered collocations
  const currentList: ThematicCollocation[] =
    selectedThemeId === 'all'
      ? THEMATIC_COLLOCATIONS
      : THEMATIC_COLLOCATIONS.filter((item) => item.themeId === selectedThemeId);

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

  // Shuffle & pick 5 items for matching round
  const startNewMatcherRound = () => {
    const pool = [...currentList].sort(() => Math.random() - 0.5);
    const chosen = pool.slice(0, 5);
    setMatcherRoundItems(chosen);
    setMatchedIds(new Set());
    setSelectedLeft(null);
    setSelectedRight(null);
  };

  useEffect(() => {
    if (gameMode === 'matcher') {
      startNewMatcherRound();
    }
  }, [gameMode, selectedThemeId]);

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
      // Correct Match!
      soundEffects.playSuccess();
      const nextMatched = new Set(matchedIds);
      nextMatched.add(leftId);
      setMatchedIds(nextMatched);
      setSelectedLeft(null);
      setSelectedRight(null);
      setScore((s) => s + 50);
      setStreak((st) => {
        const nextSt = st + 1;
        if (nextSt >= 3) soundEffects.playCombo();
        if (nextSt > highestStreak) setHighestStreak(nextSt);
        return nextSt;
      });

      // If all matched, celebratory fanfare
      if (nextMatched.size === matcherRoundItems.length) {
        setTimeout(() => {
          soundEffects.playCombo();
        }, 300);
      }
    } else {
      // Wrong Match
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
  const [blitzQuestion, setBlitzQuestion] = useState<{
    item: ThematicCollocation;
    blankSentence: string;
    missingWord: string;
    choices: string[];
  } | null>(null);
  const [blitzAnswered, setBlitzAnswered] = useState<string | null>(null);
  const [blitzTimer, setBlitzTimer] = useState<number>(15);

  const generateBlitzQuestion = () => {
    setBlitzAnswered(null);
    setBlitzTimer(15);
    const item = currentList[Math.floor(Math.random() * currentList.length)];
    const missingWord = item.verbOrFirstPart;
    // Replace missing word in example sentence with blank ________
    const regex = new RegExp(`\\b${missingWord}\\b`, 'i');
    const blankSentence = item.exampleSentenceEn.replace(regex, '________');

    // Generate 3 distractors from other items
    const distractorCandidates = currentList
      .map((c) => c.verbOrFirstPart)
      .filter((w) => w.toLowerCase() !== missingWord.toLowerCase());
    const uniqueDistractors = Array.from(new Set(distractorCandidates)).sort(() => Math.random() - 0.5);
    const choices = [missingWord, ...uniqueDistractors.slice(0, 3)].sort(() => Math.random() - 0.5);

    setBlitzQuestion({
      item,
      blankSentence,
      missingWord,
      choices
    });
  };

  useEffect(() => {
    if (gameMode === 'blitz_fill') {
      generateBlitzQuestion();
    }
  }, [gameMode, selectedThemeId]);

  useEffect(() => {
    if (gameMode !== 'blitz_fill' || blitzAnswered !== null) return;
    const timer = setInterval(() => {
      setBlitzTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setBlitzAnswered('TIME_UP');
          soundEffects.playError();
          setStreak(0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameMode, blitzAnswered, blitzQuestion]);

  const handleBlitzChoice = (choice: string) => {
    if (blitzAnswered !== null || !blitzQuestion) return;
    setBlitzAnswered(choice);
    if (choice.toLowerCase() === blitzQuestion.missingWord.toLowerCase()) {
      soundEffects.playSuccess();
      const points = 50 + blitzTimer * 5;
      setScore((s) => s + points);
      setStreak((st) => {
        const nextSt = st + 1;
        if (nextSt >= 3) soundEffects.playCombo();
        if (nextSt > highestStreak) setHighestStreak(nextSt);
        return nextSt;
      });
    } else {
      soundEffects.playError();
      setStreak(0);
    }
  };

  // =========================================================================
  // GAME 4: SPEED QUIZ (10s Phản Xạ Collocation)
  // =========================================================================
  const [quizQuestion, setQuizQuestion] = useState<{
    target: ThematicCollocation;
    options: { text: string; isCorrect: boolean; reason: string }[];
  } | null>(null);
  const [quizSelected, setQuizSelected] = useState<number | null>(null);

  const generateQuizQuestion = () => {
    setQuizSelected(null);
    const target = currentList[Math.floor(Math.random() * currentList.length)];
    // Distractors: other collocations or word-by-word literal traps
    const otherCandidates = currentList
      .filter((c) => c.id !== target.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const options = [
      {
        text: target.collocation,
        isCorrect: true,
        reason: `Chuẩn cụm từ tự nhiên ETS: "${target.collocation}" mang nghĩa "${target.vietnameseMeaning}".`
      },
      ...otherCandidates.map((oc) => ({
        text: oc.collocation,
        isCorrect: false,
        reason: `Cụm từ "${oc.collocation}" mang nghĩa "${oc.vietnameseMeaning}", không khớp với câu hỏi.`
      }))
    ].sort(() => Math.random() - 0.5);

    setQuizQuestion({ target, options });
  };

  useEffect(() => {
    if (gameMode === 'speed_quiz') {
      generateQuizQuestion();
    }
  }, [gameMode, selectedThemeId]);

  const handleQuizAnswer = (idx: number) => {
    if (quizSelected !== null || !quizQuestion) return;
    setQuizSelected(idx);
    if (quizQuestion.options[idx].isCorrect) {
      soundEffects.playSuccess();
      setScore((s) => s + 60);
      setStreak((st) => {
        const nextSt = st + 1;
        if (nextSt >= 3) soundEffects.playCombo();
        if (nextSt > highestStreak) setHighestStreak(nextSt);
        return nextSt;
      });
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

          {/* Player Score & Streak Counter */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
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

      {/* =================================================================== */}
      {/* GAME 1: 3D INTERACTIVE FLASHCARDS                                   */}
      {/* =================================================================== */}
      {gameMode === 'flashcards' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          {/* Card Progress */}
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

          {/* 3D Flip Card Container */}
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
              {/* Card Header */}
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

              {/* Card Body (Front vs Back) */}
              {!isFlipped ? (
                // FRONT
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
                // BACK (Editorial Layout)
                <div style={{ margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Nghĩa tiếng Việt:
                    </div>
                    <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.01em', marginTop: '0.15rem' }}>
                      {currentCard.vietnameseMeaning}
                    </div>
                  </div>

                  <div
                    className="editorial-quote-box"
                    style={{ padding: '0.85rem 1rem' }}
                  >
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

              {/* Card Footer Controls */}
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

      {/* =================================================================== */}
      {/* GAME 2: COLLOCATION MATCHER (NỐI ĐỘNG TỪ VÀ DANH TỪ)                */}
      {/* =================================================================== */}
      {gameMode === 'matcher' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 0.25rem 0', color: 'var(--text-primary)' }}>
                Thử Thách Ghép Đôi Cụm Collocation
              </h2>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Chọn một từ ở cột Trái, sau đó chọn phần ghép tương ứng ở cột Phải để tạo thành cụm từ tự nhiên.
              </p>
            </div>
            <button className="action-btn" onClick={startNewMatcherRound}>
              <RotateCcw size={14} /> Vòng mới
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {/* Left Column (Verbs / First half) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent-blue)', textTransform: 'uppercase' }}>
                Động từ / Cụm mở đầu:
              </div>
              {matcherRoundItems.map((item) => {
                const isMatched = matchedIds.has(item.id);
                const isSelected = selectedLeft === item.id;
                return (
                  <button
                    key={`left-${item.id}`}
                    onClick={() => handleSelectLeft(item.id)}
                    disabled={isMatched}
                    style={{
                      padding: '1rem 1.15rem',
                      borderRadius: '12px',
                      background: isMatched
                        ? 'rgba(16, 185, 129, 0.15)'
                        : isSelected
                        ? 'var(--accent-blue)'
                        : 'var(--bg-card)',
                      color: isMatched ? '#10b981' : isSelected ? '#ffffff' : 'var(--text-primary)',
                      border: isSelected ? '2px solid var(--accent-blue)' : '1px solid var(--border-glass)',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      cursor: isMatched ? 'default' : 'pointer',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      opacity: isMatched ? 0.6 : 1,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>{item.verbOrFirstPart}</span>
                    {isMatched && <CheckCircle2 size={16} color="#10b981" />}
                  </button>
                );
              })}
            </div>

            {/* Right Column (Nouns / Second half - Shuffled) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent-purple)', textTransform: 'uppercase' }}>
                Danh từ / Cụm kết hợp:
              </div>
              {[...matcherRoundItems]
                .sort((a, b) => a.nounOrSecondPart.localeCompare(b.nounOrSecondPart))
                .map((item) => {
                  const isMatched = matchedIds.has(item.id);
                  const isSelected = selectedRight === item.id;
                  return (
                    <button
                      key={`right-${item.id}`}
                      onClick={() => handleSelectRight(item.id)}
                      disabled={isMatched}
                      style={{
                        padding: '1rem 1.15rem',
                        borderRadius: '12px',
                        background: isMatched
                          ? 'rgba(16, 185, 129, 0.15)'
                          : isSelected
                          ? 'var(--accent-purple)'
                          : 'var(--bg-card)',
                        color: isMatched ? '#10b981' : isSelected ? '#ffffff' : 'var(--text-primary)',
                        border: isSelected ? '2px solid var(--accent-purple)' : '1px solid var(--border-glass)',
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        cursor: isMatched ? 'default' : 'pointer',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        opacity: isMatched ? 0.6 : 1,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <span>{item.nounOrSecondPart}</span>
                      {isMatched && <CheckCircle2 size={16} color="#10b981" />}
                    </button>
                  );
                })}
            </div>
          </div>

          {wrongPair && (
            <div
              style={{
                background: 'rgba(239, 68, 68, 0.15)',
                color: '#ef4444',
                padding: '0.75rem',
                borderRadius: '8px',
                textAlign: 'center',
                fontWeight: 700,
                fontSize: '0.85rem',
                animation: 'shake 0.3s ease'
              }}
            >
              Chưa khớp rồi! Hãy thử một cặp từ khác nha!
            </div>
          )}

          {matchedIds.size === matcherRoundItems.length && matcherRoundItems.length > 0 && (
            <div
              style={{
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#10b981',
                padding: '1rem',
                borderRadius: '12px',
                textAlign: 'center',
                fontWeight: 800,
                fontSize: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Trophy size={28} color="#10b981" />
              Xuất sắc! Bạn đã ghép thành công tất cả cụm từ của vòng này (+250 EXP)!
              <button
                className="action-btn"
                onClick={startNewMatcherRound}
                style={{ background: '#10b981', color: '#fff', border: 'none', fontWeight: 800, marginTop: '0.25rem' }}
              >
                Chơi tiếp vòng mới <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* GAME 3: SPEED BLITZ FILL-IN-THE-BLANK                               */}
      {/* =================================================================== */}
      {gameMode === 'blitz_fill' && blitzQuestion && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '750px', margin: '0 auto', width: '100%' }}>
          {/* Header & Timer Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)' }}>
              ĐIỀN TỪ CÒN THIẾU TRONG CỤM TỪ
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800, color: blitzTimer <= 5 ? '#ef4444' : '#f59e0b' }}>
              <Zap size={16} /> Thời gian: {blitzTimer}s
            </div>
          </div>

          {/* Question Box */}
          <div
            className="glass-panel"
            style={{
              padding: '1.5rem',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <div style={{ fontSize: '1.1rem', lineHeight: 1.7, fontWeight: 700, color: 'var(--text-primary)' }}>
              "{blitzQuestion.blankSentence}"
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <strong>Dịch nghĩa: </strong>"{blitzQuestion.item.exampleSentenceVi}"
            </div>
          </div>

          {/* 4 Choices */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {blitzQuestion.choices.map((choice, cIdx) => {
              const isSelected = blitzAnswered === choice;
              const isCorrect = choice.toLowerCase() === blitzQuestion.missingWord.toLowerCase();
              let btnBg = 'var(--bg-card)';
              let btnColor = 'var(--text-primary)';
              let border = '1px solid var(--border-glass)';

              if (blitzAnswered !== null) {
                if (isCorrect) {
                  btnBg = 'rgba(16, 185, 129, 0.2)';
                  btnColor = '#10b981';
                  border = '2px solid #10b981';
                } else if (isSelected) {
                  btnBg = 'rgba(239, 68, 68, 0.2)';
                  btnColor = '#ef4444';
                  border = '2px solid #ef4444';
                }
              }

              return (
                <button
                  key={cIdx}
                  onClick={() => handleBlitzChoice(choice)}
                  disabled={blitzAnswered !== null}
                  style={{
                    padding: '1rem',
                    borderRadius: '12px',
                    background: btnBg,
                    color: btnColor,
                    border,
                    fontWeight: 800,
                    fontSize: '1rem',
                    cursor: blitzAnswered === null ? 'pointer' : 'default',
                    transition: 'all 0.2s ease',
                    textAlign: 'center'
                  }}
                >
                  {choice}
                </button>
              );
            })}
          </div>

          {/* Explanation when answered */}
          {blitzAnswered !== null && (
            <div
              style={{
                background: 'var(--bg-card)',
                borderRadius: '12px',
                padding: '1rem 1.25rem',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                animation: 'fadeIn 0.25s ease'
              }}
            >
              <div style={{ fontWeight: 800, color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Lightbulb size={16} color="var(--accent-blue)" /> Phân tích cụm Collocation chuẩn:
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                Cụm từ chuẩn là: <strong>"{blitzQuestion.item.collocation}"</strong> ({blitzQuestion.item.vietnameseMeaning}).
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                {blitzQuestion.item.etsContextNote}
              </div>
              <button
                className="action-btn"
                onClick={generateBlitzQuestion}
                style={{
                  alignSelf: 'flex-end',
                  background: 'var(--accent-blue)',
                  color: '#fff',
                  border: 'none',
                  fontWeight: 800,
                  marginTop: '0.5rem'
                }}
              >
                Câu tiếp theo <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* =================================================================== */}
      {/* GAME 4: SPEED QUIZ (10S PHẢN XẠ COLLOCATION)                         */}
      {/* =================================================================== */}
      {gameMode === 'speed_quiz' && quizQuestion && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '750px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)' }}>
              CHỌN CỤM TỪ TIẾNG ANH TỰ NHIÊN CHUẨN XÁC NHẤT
            </span>
            <button className="action-btn" onClick={generateQuizQuestion}>
              <Shuffle size={14} /> Đổi câu
            </button>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: '1.5rem',
              borderRadius: '16px',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
              Cụm từ tiếng Việt:
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-purple)' }}>
              "{quizQuestion.target.vietnameseMeaning}"
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
              Chủ đề: {quizQuestion.target.themeName}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {quizQuestion.options.map((opt, oIdx) => {
              const isSelected = quizSelected === oIdx;
              let bg = 'var(--bg-card)';
              let color = 'var(--text-primary)';
              let border = '1px solid var(--border-glass)';

              if (quizSelected !== null) {
                if (opt.isCorrect) {
                  bg = 'rgba(16, 185, 129, 0.2)';
                  color = '#10b981';
                  border = '2px solid #10b981';
                } else if (isSelected) {
                  bg = 'rgba(239, 68, 68, 0.2)';
                  color = '#ef4444';
                  border = '2px solid #ef4444';
                }
              }

              return (
                <button
                  key={oIdx}
                  onClick={() => handleQuizAnswer(oIdx)}
                  disabled={quizSelected !== null}
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: '12px',
                    background: bg,
                    color,
                    border,
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: quizSelected === null ? 'pointer' : 'default',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{opt.text}</span>
                  {quizSelected !== null && opt.isCorrect && <CheckCircle2 size={18} color="#10b981" />}
                </button>
              );
            })}
          </div>

          {quizSelected !== null && (
            <div
              style={{
                background: 'var(--bg-card)',
                borderRadius: '12px',
                padding: '1rem 1.25rem',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                animation: 'fadeIn 0.25s ease'
              }}
            >
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {quizQuestion.options[quizSelected].reason}
              </div>
              <button
                className="action-btn"
                onClick={generateQuizQuestion}
                style={{
                  alignSelf: 'flex-end',
                  background: 'var(--accent-purple)',
                  color: '#fff',
                  border: 'none',
                  fontWeight: 800,
                  marginTop: '0.5rem'
                }}
              >
                Câu hỏi kế tiếp <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
