import React, { useState, useEffect, useRef } from 'react';
import {
  Mic,
  MicOff,
  PenTool,
  Clock,
  Sparkles,
  BookOpen,
  Award,
  AlertTriangle,
  Lightbulb,
  RotateCcw,
  Settings,
  Play,
  Pause,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Flame,
  Heart,
  HelpCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Mode, Section, SpeakingQuestion, WritingQuestion, EvaluationResult } from './types';
import {
  TEST_SETS_METADATA,
  getSpeakingQuestions,
  getWritingQuestions
} from './data/mockQuestions';
import { OriAcademicView } from './components/OriAcademicView';
import { TranslationPracticeView } from './components/TranslationPracticeView';
import { VocabularyGamesView } from './components/VocabularyGamesView';
import { playExamTone, AudioRecorderManager } from './utils/audio';
import { evaluateToeicResponse } from './utils/aiEvaluator';

export const App: React.FC = () => {
  // Theme State (Light & Dark Mode)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('toeic_theme') as 'dark' | 'light') || 'dark';
  });

  // Global States
  const [section, setSection] = useState<Section>('speaking');
  const [mode, setMode] = useState<Mode>('learning');
  const [selectedSetId, setSelectedSetId] = useState<number>(1);
  const [speakingIndex, setSpeakingIndex] = useState<number>(0);
  const [writingIndex, setWritingIndex] = useState<number>(0);

  // Input & Recording States
  const [writtenText, setWrittenText] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioBase64, setAudioBase64] = useState<string | null>(null);
  const [volumeLevel, setVolumeLevel] = useState<number>(0);

  // Timer & Exam Simulation States
  const [timerPhase, setTimerPhase] = useState<'idle' | 'prep' | 'response' | 'completed'>('idle');
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);

  // UI Scaffolding States (Learning Mode)
  const [showSampleAnswer, setShowSampleAnswer] = useState<boolean>(false);
  const [showHints, setShowHints] = useState<boolean>(true);

  // Modals States
  const [showResultModal, setShowResultModal] = useState<boolean>(false);
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const [showFormatModal, setShowFormatModal] = useState<boolean>(false);

  // Evaluation States
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [evaluationResult, setEvaluationResult] = useState<EvaluationResult | null>(null);
  const [geminiApiKey, setGeminiApiKey] = useState<string>(() => localStorage.getItem('gemini_api_key') || '');

  // Audio Recorder Reference
  const recorderRef = useRef<AudioRecorderManager | null>(null);
  const timerIntervalRef = useRef<number | null>(null);

  const speakingQuestions: SpeakingQuestion[] = getSpeakingQuestions(selectedSetId);
  const writingQuestions: WritingQuestion[] = getWritingQuestions(selectedSetId);

  const currentSpeakingQ: SpeakingQuestion = speakingQuestions[speakingIndex] || speakingQuestions[0];
  const currentWritingQ: WritingQuestion = writingQuestions[writingIndex] || writingQuestions[0];

  const totalQuestions = section === 'speaking' ? speakingQuestions.length : writingQuestions.length;
  const currentIndex = section === 'speaking' ? speakingIndex : writingIndex;

  const handleSetChange = (newSetId: number) => {
    setSelectedSetId(newSetId);
    setSpeakingIndex(0);
    setWritingIndex(0);
    resetQuestionState();
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    setTimerPhase('idle');
    setTimeLeft(0);
  };

  // Apply Theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('toeic_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Dynamic Cute Greeting generator
  const getCuteGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return {
        mascot: '☀️🦉',
        title: 'Chào buổi sáng rực rỡ nha bạn yêu!',
        quote: 'Một tách cà phê thơm và 1 bài Speaking để ngày mới tràn đầy tự tin nha! ORI tin bạn làm được nè ✨'
      };
    } else if (hour >= 12 && hour < 18) {
      return {
        mascot: '🌿🦉',
        title: 'Chào buổi chiều năng lượng nè!',
        quote: 'Uống một ngụm nước rồi cùng ORI làm 1 câu Writing ăn trọn điểm 10 nha bạn iu! 🥰'
      };
    } else if (hour >= 18 && hour < 23) {
      return {
        mascot: '🌙🦉',
        title: 'Chào buổi tối ấm áp!',
        quote: 'Cố gắng thêm một chút là chạm mốc 200/200 điểm TOEIC rồi đó. ORI luôn ở đây đồng hành cùng bạn!'
      };
    } else {
      return {
        mascot: '⭐🦉',
        title: 'Khuya rồi đó bạn ơi!',
        quote: 'Bạn học chăm chỉ đỉnh của chóp luôn á! Luyện nốt bài này rồi nghỉ ngơi sớm cho mắt khỏe nha!'
      };
    }
  };

  const greeting = getCuteGreeting();

  // Reset inputs when switching questions or sections
  const resetQuestionState = () => {
    setWrittenText('');
    setAudioUrl(null);
    setAudioBase64(null);
    setIsRecording(false);
    setTimerPhase('idle');
    setShowSampleAnswer(false);
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }
  };

  useEffect(() => {
    resetQuestionState();
  }, [section, speakingIndex, writingIndex, mode]);

  // Exam Simulation Timer Management
  useEffect(() => {
    if (timerPhase === 'idle' || timerPhase === 'completed' || isTimerPaused) {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      return;
    }

    timerIntervalRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerPhase === 'prep') {
            playExamTone('speak_start');
            const nextDuration = section === 'speaking' ? currentSpeakingQ.responseTime : currentWritingQ.timeLimit;
            setTimerPhase('response');
            if (section === 'speaking') {
              handleStartAudioRecording();
            }
            return nextDuration;
          } else if (timerPhase === 'response') {
            playExamTone('stop');
            setTimerPhase('completed');
            if (section === 'speaking' && isRecording) {
              handleStopAudioRecording();
            }
            return 0;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [timerPhase, isTimerPaused, section, currentSpeakingQ, currentWritingQ, isRecording]);

  // Audio Recording Handlers
  const handleStartAudioRecording = async () => {
    try {
      recorderRef.current = new AudioRecorderManager();
      await recorderRef.current.startRecording((volume) => {
        setVolumeLevel(volume);
      });
      setIsRecording(true);
      setAudioUrl(null);
    } catch (err) {
      alert('Không thể truy cập Microphone. Vui lòng cho phép quyền truy cập mic trên trình duyệt.');
      console.error(err);
    }
  };

  const handleStopAudioRecording = async () => {
    if (recorderRef.current && isRecording) {
      try {
        const { url, base64 } = await recorderRef.current.stopRecording();
        setAudioUrl(url);
        setAudioBase64(base64);
      } catch (err) {
        console.error('Stop recording failed:', err);
      } finally {
        setIsRecording(false);
        setVolumeLevel(0);
      }
    }
  };

  // Start Timer for Learning Practice Mode
  const handleStartPracticeTimer = () => {
    setIsTimerPaused(false);
    if (section === 'speaking') {
      if (currentSpeakingQ.prepTime > 0) {
        playExamTone('prep_start');
        setTimerPhase('prep');
        setTimeLeft(currentSpeakingQ.prepTime);
      } else {
        playExamTone('speak_start');
        setTimerPhase('response');
        setTimeLeft(currentSpeakingQ.responseTime);
      }
    } else {
      playExamTone('prep_start');
      setTimerPhase('response');
      setTimeLeft(currentWritingQ.timeLimit);
    }
  };

  // Start Exam Simulation Flow (Strict ETS)
  const handleStartExamSimulation = () => {
    setIsTimerPaused(false);
    if (section === 'speaking') {
      playExamTone('prep_start');
      setTimerPhase('prep');
      setTimeLeft(currentSpeakingQ.prepTime);
    } else {
      playExamTone('prep_start');
      setTimerPhase('response');
      setTimeLeft(currentWritingQ.timeLimit);
    }
  };

  // Skip Preparation and start speaking immediately
  const handleSkipPrepToSpeak = () => {
    playExamTone('speak_start');
    setTimerPhase('response');
    setTimeLeft(currentSpeakingQ.responseTime);
    if (!isRecording) {
      handleStartAudioRecording();
    }
  };

  // Reset Timer to Idle
  const handleResetTimer = () => {
    setTimerPhase('idle');
    setTimeLeft(0);
    setIsTimerPaused(false);
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
  };

  // Next / Previous Question Navigation
  const handlePrevQuestion = () => {
    if (section === 'speaking') {
      setSpeakingIndex((prev) => Math.max(0, prev - 1));
    } else {
      setWritingIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const handleNextQuestion = () => {
    if (section === 'speaking') {
      setSpeakingIndex((prev) => Math.min(speakingQuestions.length - 1, prev + 1));
    } else {
      setWritingIndex((prev) => Math.min(writingQuestions.length - 1, prev + 1));
    }
  };

  // Submit and Evaluate
  const handleSubmitResponse = async () => {
    if (section === 'academic' || section === 'translation' || section === 'vocabulary') return;
    setIsEvaluating(true);
    try {
      const q = section === 'speaking' ? currentSpeakingQ : currentWritingQ;
      const submission = {
        textContent: writtenText,
        audioBase64: audioBase64 || undefined
      };

      const result = await evaluateToeicResponse(section, q, submission, {
        userApiKey: geminiApiKey
      });

      setEvaluationResult(result);
      setShowResultModal(true);

      // Celebrate high scores!
      if (result.scaledScore >= 160) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    } catch (err) {
      alert('Có lỗi xảy ra trong quá trình chấm bài. Vui lòng thử lại.');
      console.error(err);
    } finally {
      setIsEvaluating(false);
    }
  };

  const formatSeconds = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const wordsCount = writtenText.trim() ? writtenText.trim().split(/\s+/).length : 0;

  // Accurate Timing Subtitle based on ETS official specifications
  const getQuestionTimingSubtitle = () => {
    if (section === 'speaking') {
      const qNum = currentSpeakingQ.questionNumber;
      if (qNum <= 2) {
        return `Part 1 • Câu ${qNum}/11: Đọc to đoạn văn | Chuẩn bị: 45s • Nói: 45s (Tiêu chí: Phát âm, Trọng âm, Ngữ điệu)`;
      } else if (qNum <= 4) {
        return `Part 2 • Câu ${qNum}/11: Miêu tả bức tranh | Chuẩn bị: 45s • Nói: 30s (Tiêu chí: Ngữ pháp, Từ vựng, Tính gắn kết)`;
      } else if (qNum <= 7) {
        const respTime = qNum === 7 ? '30s' : '15s';
        return `Part 3 • Câu ${qNum}/11: Trả lời phỏng vấn | Chuẩn bị: 3s • Nói: ${respTime} (Tiêu chí: Độ trôi chảy, Trực tiếp, Tự nhiên)`;
      } else if (qNum <= 10) {
        const respTime = qNum === 10 ? '30s' : '15s';
        return `Part 4 • Câu ${qNum}/11: Dùng thông tin có sẵn | Đọc bảng: 45s • Chuẩn bị: 3s • Nói: ${respTime} (Tiêu chí: Độ chính xác thông tin)`;
      } else {
        return `Part 5 • Câu 11/11: Bày tỏ quan điểm | Chuẩn bị: 45s • Nói: 60s (Tiêu chí: Lập luận, Dẫn chứng, Độ mạch lạc)`;
      }
    } else {
      const qNum = currentWritingQ.questionNumber;
      if (qNum <= 5) {
        return `Part 1 • Câu ${qNum}/8: Viết câu theo tranh | Thời gian quy định: 8 phút cho cả 5 câu (Khuyên dùng: ~1.5 phút/câu) • Đúng 1 câu duy nhất`;
      } else if (qNum <= 7) {
        return `Part 2 • Câu ${qNum}/8: Phản hồi email thương mại | Thời gian quy định: 10 phút riêng cho email này • Giải quyết đủ 3 yêu cầu`;
      } else {
        return `Part 3 • Câu 8/8: Viết bài luận quan điểm | Thời gian quy định: 30 phút • Độ dài tối thiểu: 300 từ`;
      }
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="logo-badge">
          <div className="logo-icon">🎙️</div>
          <div className="logo-text">
            <h1>TOEIC SW MASTER</h1>
            <p>Hệ Thống Luyện Thi & Chấm Điểm AI Chuẩn ETS</p>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="nav-controls">
          {/* Section Selector */}
          <div className="pill-group">
            <button
              className={`pill-btn ${section === 'speaking' ? 'active' : ''}`}
              onClick={() => {
                setSection('speaking');
                resetQuestionState();
              }}
            >
              <Mic size={15} /> Speaking (11 Câu)
            </button>
            <button
              className={`pill-btn ${section === 'writing' ? 'active' : ''}`}
              onClick={() => {
                setSection('writing');
                resetQuestionState();
              }}
            >
              <PenTool size={15} /> Writing (8 Câu)
            </button>
            <button
              className={`pill-btn ${section === 'academic' ? 'active mode-academic' : ''}`}
              onClick={() => {
                setSection('academic');
                resetQuestionState();
              }}
              style={{
                background: section === 'academic' ? 'linear-gradient(135deg, #8b5cf6, #6366f1)' : undefined,
                color: section === 'academic' ? '#fff' : undefined,
                fontWeight: 700
              }}
            >
              <span>🏛️</span> ORI Academic (Văn Nghị Luận)
            </button>
            <button
              className={`pill-btn ${section === 'translation' ? 'active mode-translation' : ''}`}
              onClick={() => {
                setSection('translation');
                resetQuestionState();
              }}
              style={{
                background: section === 'translation' ? 'linear-gradient(135deg, #10b981, #059669)' : undefined,
                color: section === 'translation' ? '#fff' : undefined,
                fontWeight: 700
              }}
            >
              <span>📝</span> Tập Viết Câu (120 Bài)
            </button>
            <button
              className={`pill-btn ${section === 'vocabulary' ? 'active mode-vocab' : ''}`}
              onClick={() => {
                setSection('vocabulary');
                resetQuestionState();
              }}
              style={{
                background: section === 'vocabulary' ? 'linear-gradient(135deg, #8b5cf6, #6366f1)' : undefined,
                color: section === 'vocabulary' ? '#fff' : undefined,
                fontWeight: 700
              }}
            >
              <span>🎯</span> Từ Vựng & Game (80 Collocations)
            </button>
          </div>

          {/* 10 Test Sets Selector (Bộ Đề 1 - 10) */}
          {section !== 'academic' && section !== 'translation' && section !== 'vocabulary' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-glass)',
                borderRadius: '10px',
                padding: '0.35rem 0.75rem'
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)' }}>
                {mode === 'learning' ? '📚 BỘ ĐỀ HỌC:' : '⏱️ BỘ ĐỀ THI:'}
              </span>
              <select
                className="test-set-select"
                aria-label="Chọn bộ đề"
                value={selectedSetId}
                onChange={(e) => handleSetChange(Number(e.target.value))}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-primary)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                {TEST_SETS_METADATA.map((setMeta) => (
                  <option
                    key={setMeta.id}
                    value={setMeta.id}
                    style={{ background: 'var(--bg-card)', color: 'var(--text-primary)' }}
                  >
                    {setMeta.name}: {setMeta.titleVi} ({setMeta.theme})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Mode Selector */}
          <div className="pill-group">
            <button
              className={`pill-btn ${mode === 'learning' ? 'active mode-learning' : ''}`}
              onClick={() => setMode('learning')}
            >
              <BookOpen size={15} /> Chế Độ Học
            </button>
            <button
              className={`pill-btn ${mode === 'exam' ? 'active mode-exam' : ''}`}
              onClick={() => setMode('exam')}
            >
              <Clock size={15} /> Luyện Thi ETS
            </button>
          </div>

          {/* Official ETS Format Guide Button */}
          <button className="action-btn" onClick={() => setShowFormatModal(true)}>
            <HelpCircle size={15} /> Barem & Cấu Trúc ETS
          </button>

          {/* Theme Toggle (Sáng / Tối) */}
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Chuyển sang chế độ Sáng' : 'Chuyển sang chế độ Tối'}
          >
            {theme === 'dark' ? <Sun size={17} color="#fbbf24" /> : <Moon size={17} color="#3b82f6" />}
          </button>

          {/* Settings Button */}
          <button className="action-btn" onClick={() => setShowSettingsModal(true)}>
            <Settings size={15} /> Cấu hình AI
          </button>
        </div>
      </header>

      {/* Cute Mascot Companion Greeting Bar */}
      <div className="mascot-companion-bar">
        <div className="mascot-profile">
          <span className="mascot-avatar">{greeting.mascot}</span>
          <div className="mascot-bubble">
            {section === 'academic' ? (
              <>
                <strong>🏛️ ORI Academic Hub:</strong> Làm chủ công thức 4 đoạn và tư duy bài luận Level 9 nha! ✨
              </>
            ) : section === 'translation' ? (
              <>
                <strong>📝 Phòng Luyện Dịch Câu:</strong> 120 bài tập thực chiến giúp nói & viết tự nhiên như người bản xứ! ✨
              </>
            ) : section === 'vocabulary' ? (
              <>
                <strong>🎯 Sân Chơi Từ Vựng:</strong> 80 collocations cốt lõi và 4 minigame phản xạ đang đợi bạn! ✨
              </>
            ) : (
              <>
                <strong>{greeting.title}</strong> — {greeting.quote}
              </>
            )}
          </div>
        </div>
        <div className="streak-badge">
          <Flame size={14} color="#f59e0b" />
          <span>Chuỗi 3 Ngày Chăm Chỉ!</span>
        </div>
      </div>

      {/* Mode Banner Indicator */}
      {section !== 'academic' && section !== 'translation' && section !== 'vocabulary' && (
        <div className={`mode-banner ${mode}`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="mode-badge">
              {mode === 'learning' ? '🎓 CHẾ ĐỘ HỌC' : '⏱️ CHẾ ĐỘ LUYỆN THI THỰC CHIẾN'}
            </span>
            <span>
              {mode === 'learning'
                ? 'Được hỗ trợ dàn ý chi tiết, từ vựng ăn điểm (Collocations), bài mẫu Level 8-9 và thời gian linh hoạt.'
                : 'Mô phỏng 100% phòng thi ETS: Đồng hồ đếm ngược, tiếng Beep chuyển pha, khóa sao chép (No Copy-Paste).'}
            </span>
          </div>
          {mode === 'learning' && (
            <button
              className="action-btn"
              style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}
              onClick={() => setShowHints(!showHints)}
            >
              {showHints ? <EyeOff size={13} /> : <Eye size={13} />} {showHints ? 'Ẩn gợi ý' : 'Hiện gợi ý'}
            </button>
          )}
        </div>
      )}

      {/* Main Workspace */}
      <main className="main-workspace">
        {section === 'academic' ? (
          <OriAcademicView />
        ) : section === 'translation' ? (
          <TranslationPracticeView />
        ) : section === 'vocabulary' ? (
          <VocabularyGamesView />
        ) : (
          <>
            {/* Question Navigation Bar with Next / Prev arrows */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
              <button
                className="action-btn"
                onClick={handlePrevQuestion}
                disabled={currentIndex === 0}
                style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}
              >
                <ChevronLeft size={16} /> Câu trước
              </button>

              <div className="question-nav-bar" style={{ flex: 1, justifyContent: 'center' }}>
                {section === 'speaking'
                  ? speakingQuestions.map((q, idx) => (
                      <button
                        key={q.id}
                        className={`q-tab ${idx === speakingIndex ? 'active' : ''}`}
                        onClick={() => setSpeakingIndex(idx)}
                      >
                        <span>Q{q.questionNumber}</span>
                        <span style={{ opacity: 0.6, fontSize: '0.72rem' }}>P{q.part}</span>
                      </button>
                    ))
                  : writingQuestions.map((q, idx) => (
                      <button
                        key={q.id}
                        className={`q-tab ${idx === writingIndex ? 'active' : ''}`}
                        onClick={() => setWritingIndex(idx)}
                      >
                        <span>Q{q.questionNumber}</span>
                        <span style={{ opacity: 0.6, fontSize: '0.72rem' }}>P{q.part}</span>
                      </button>
                    ))}
              </div>

              <button
                className="action-btn"
                onClick={handleNextQuestion}
                disabled={currentIndex === totalQuestions - 1}
                style={{ opacity: currentIndex === totalQuestions - 1 ? 0.4 : 1 }}
              >
                Câu tiếp theo <ChevronRight size={16} />
              </button>
            </div>

        {/* Split Pane Grid */}
        <div className="split-pane-grid">
          {/* Left Pane: Question Prompt & Reference Info */}
          <div className="glass-panel">
            <div className="panel-header">
              <div>
                <h2 className="part-title">
                  {section === 'speaking' ? currentSpeakingQ.partName : currentWritingQ.partName}
                </h2>
                <p className="part-subtitle" style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>
                  {getQuestionTimingSubtitle()}
                </p>
              </div>

              {/* Timer Widget & Controls */}
              {timerPhase !== 'idle' ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                  <div className={`timer-pill ${timeLeft <= 5 ? 'urgent' : ''}`}>
                    <Clock size={16} />
                    <span>
                      {timerPhase === 'prep' ? `Chuẩn bị: ${formatSeconds(timeLeft)}` : `Làm bài: ${formatSeconds(timeLeft)}`}
                    </span>
                  </div>

                  {/* Flexible Controls for Learning Mode */}
                  {mode === 'learning' && (
                    <>
                      <button
                        className="action-btn"
                        style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem' }}
                        onClick={() => setIsTimerPaused(!isTimerPaused)}
                        title={isTimerPaused ? 'Tiếp tục đếm giờ' : 'Tạm dừng đếm giờ'}
                      >
                        {isTimerPaused ? <Play size={13} /> : <Pause size={13} />}
                        {isTimerPaused ? 'Tiếp tục' : 'Tạm dừng'}
                      </button>

                      {section === 'speaking' && timerPhase === 'prep' && (
                        <button
                          className="action-btn"
                          style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem', color: 'var(--accent-blue)' }}
                          onClick={handleSkipPrepToSpeak}
                          title="Bỏ qua thời gian chuẩn bị để vào nói ngay"
                        >
                          Vào nói luôn
                        </button>
                      )}

                      <button
                        className="action-btn"
                        style={{ padding: '0.35rem 0.65rem', fontSize: '0.78rem' }}
                        onClick={handleResetTimer}
                        title="Đặt lại đồng hồ"
                      >
                        <RotateCcw size={13} /> Đặt lại
                      </button>
                    </>
                  )}
                </div>
              ) : mode === 'learning' ? (
                <button
                  className="action-btn"
                  style={{
                    background: 'rgba(16, 185, 129, 0.12)',
                    borderColor: 'rgba(16, 185, 129, 0.35)',
                    color: '#059669',
                    fontWeight: 700
                  }}
                  onClick={handleStartPracticeTimer}
                >
                  <Clock size={14} /> Bấm giờ canh thử ({section === 'speaking' ? `Prep: ${currentSpeakingQ.prepTime}s • Nói: ${currentSpeakingQ.responseTime}s` : `${Math.round(currentWritingQ.timeLimit / 60)} phút`})
                </button>
              ) : (
                <button
                  className="action-btn"
                  style={{ background: 'rgba(244, 63, 94, 0.15)', borderColor: 'var(--accent-rose)', color: '#fb7185', fontWeight: 700 }}
                  onClick={handleStartExamSimulation}
                >
                  <Play size={14} /> Bắt đầu bấm giờ ETS
                </button>
              )}
            </div>

            {/* Question Directions & Prompts */}
            <div className="question-content-box">
              <p className="direction-box">
                {section === 'speaking' ? currentSpeakingQ.direction : currentWritingQ.direction}
              </p>

              {/* Image if available */}
              {section === 'speaking' && currentSpeakingQ.imageUrl && (
                <img
                  src={currentSpeakingQ.imageUrl}
                  alt="TOEIC Speaking Scene"
                  className="prompt-image"
                />
              )}
              {section === 'writing' && currentWritingQ.imageUrl && (
                <img
                  src={currentWritingQ.imageUrl}
                  alt="TOEIC Writing Scene"
                  className="prompt-image"
                />
              )}

              {/* Text Prompt */}
              <div style={{ marginTop: '0.85rem', fontWeight: 500, whiteSpace: 'pre-line' }}>
                {section === 'speaking' ? currentSpeakingQ.promptText : currentWritingQ.promptText}
              </div>

              {/* Keywords for Writing Part 1 */}
              {section === 'writing' && currentWritingQ.givenKeywords && (
                <div className="keyword-chips">
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Từ khoá bắt buộc:</span>
                  {currentWritingQ.givenKeywords.map((kw, i) => (
                    <span key={i} className="keyword-chip">{kw}</span>
                  ))}
                </div>
              )}

              {/* Incoming Email for Writing Part 2 */}
              {section === 'writing' && currentWritingQ.incomingEmail && (
                <div className="email-view" style={{ marginTop: '1rem' }}>
                  <div className="email-meta">
                    <div><strong>From:</strong> {currentWritingQ.incomingEmail.from}</div>
                    <div><strong>To:</strong> {currentWritingQ.incomingEmail.to}</div>
                    <div><strong>Subject:</strong> {currentWritingQ.incomingEmail.subject}</div>
                    <div><strong>Date:</strong> {currentWritingQ.incomingEmail.date}</div>
                  </div>
                  <div className="email-body">{currentWritingQ.incomingEmail.body}</div>
                  <div className="email-requirements">
                    <strong>Nhiệm vụ thư phản hồi:</strong>
                    <ul>
                      {currentWritingQ.incomingEmail.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Schedule Table for Speaking Part 4 */}
              {section === 'speaking' && currentSpeakingQ.providedInfo && (
                <div style={{ marginTop: '1rem' }}>
                  <h4 style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                    {currentSpeakingQ.providedInfo.title}
                  </h4>
                  <table className="info-table">
                    {currentSpeakingQ.providedInfo.tableHeaders && (
                      <thead>
                        <tr>
                          {currentSpeakingQ.providedInfo.tableHeaders.map((h, i) => (
                            <th key={i}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                    )}
                    <tbody>
                      {currentSpeakingQ.providedInfo.tableRows?.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {currentSpeakingQ.providedInfo.additionalNotes && (
                    <p style={{ fontSize: '0.78rem', color: 'var(--accent-amber)', marginTop: '0.4rem' }}>
                      {currentSpeakingQ.providedInfo.additionalNotes}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Scaffolding & Hints Box (Learning Mode Only) */}
            {mode === 'learning' && showHints && (
              <div className="hints-scaffold">
                <div className="hints-header">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Lightbulb size={16} /> Gợi Ý Làm Bài & Dàn Ý Ăn Điểm
                  </span>
                  <button
                    className="action-btn"
                    style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'transparent' }}
                    onClick={() => setShowSampleAnswer(!showSampleAnswer)}
                  >
                    {showSampleAnswer ? 'Ẩn câu mẫu' : 'Xem câu mẫu 200/200'}
                  </button>
                </div>

                {/* Outline */}
                <div className="hint-section">
                  <span className="hint-title">Chiến thuật làm bài (Strategy):</span>
                  <ul className="hint-list">
                    {(section === 'speaking' ? currentSpeakingQ.hints.structureOutline : currentWritingQ.hints.structureOutline).map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>

                {/* Collocations */}
                <div className="hint-section">
                  <span className="hint-title">Từ vựng & Cụm từ đắt giá (High-Scoring Collocations):</span>
                  <div className="collocation-grid">
                    {(section === 'speaking' ? currentSpeakingQ.hints.keyCollocations : currentWritingQ.hints.keyCollocations).map((c, i) => (
                      <div key={i} className="colloc-card">
                        <div>
                          <span className="colloc-word">{c.word}</span>
                          {c.ipa && <span className="colloc-ipa">{c.ipa}</span>}
                        </div>
                        <div className="colloc-meaning">{c.meaning}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pro Strategy & Examiner Secret Tips */}
                {((section === 'speaking' ? currentSpeakingQ.hints : currentWritingQ.hints).proStrategyTips?.length ?? 0) > 0 && (
                  <div
                    className="hint-section"
                    style={{
                      background: 'rgba(139, 92, 246, 0.08)',
                      padding: '0.85rem',
                      borderRadius: '10px',
                      borderLeft: '4px solid var(--accent-purple)'
                    }}
                  >
                    <span className="hint-title" style={{ color: 'var(--accent-purple)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800 }}>
                      <Sparkles size={15} /> Bí Quyết Giám Khảo ETS (Pro Examiner Secrets):
                    </span>
                    <ul className="hint-list" style={{ marginTop: '0.4rem' }}>
                      {(section === 'speaking' ? currentSpeakingQ.hints : currentWritingQ.hints).proStrategyTips!.map((tip, i) => (
                        <li key={i} style={{ color: 'var(--text-secondary)' }}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Sample Model Answer Box */}
                {showSampleAnswer && (
                  <div className="sample-answer-box">
                    <span className="sample-badge">
                      <Award size={13} /> Bài mẫu chuẩn {section === 'speaking' ? currentSpeakingQ.sampleAnswer.scoreLevel : currentWritingQ.sampleAnswer.scoreLevel}
                    </span>
                    <p style={{ fontSize: '0.88rem', whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                      {section === 'speaking' ? currentSpeakingQ.sampleAnswer.text : currentWritingQ.sampleAnswer.text}
                    </p>
                    <p style={{ fontSize: '0.78rem', color: '#8b5cf6', marginTop: '0.5rem', fontStyle: 'italic' }}>
                      💡 Phân tích: {section === 'speaking' ? currentSpeakingQ.sampleAnswer.analysis : currentWritingQ.sampleAnswer.analysis}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Pane: Interactive Student Response Area */}
          <div className="glass-panel interactive-panel">
            <div className="panel-header">
              <h3 style={{ fontSize: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {section === 'speaking' ? <Mic size={18} color="#3b82f6" /> : <PenTool size={18} color="#06b6d4" />}
                {section === 'speaking' ? 'Khu Vực Ghi Âm Bài Nói' : 'Khu Vực Soạn Thảo Bài Viết'}
              </h3>

              {section === 'writing' && (
                <div className="word-count-badge">
                  Số từ: <strong>{wordsCount}</strong>
                  {currentWritingQ.minWords ? ` / Tối thiểu ${currentWritingQ.minWords} từ` : ''}
                </div>
              )}
            </div>

            {/* Speaking Section: Waveform & Recording Area */}
            {section === 'speaking' && (
              <div className="audio-visualizer-box">
                <div className="waveform-container">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className={`wave-bar ${isRecording ? 'active' : ''}`}
                      style={{
                        height: isRecording
                          ? `${Math.max(12, Math.min(60, (volumeLevel * 1.5) + (Math.sin(i + Date.now() / 200) * 15)))}px`
                          : '12px'
                      }}
                    />
                  ))}
                </div>

                <div className="record-btn-group">
                  {!isRecording ? (
                    <button
                      className="record-btn"
                      onClick={handleStartAudioRecording}
                      title="Bắt đầu ghi âm"
                    >
                      <Mic size={24} />
                    </button>
                  ) : (
                    <button
                      className="record-btn recording"
                      onClick={handleStopAudioRecording}
                      title="Dừng ghi âm"
                    >
                      <MicOff size={24} />
                    </button>
                  )}
                </div>

                <div style={{ fontSize: '0.85rem', color: isRecording ? '#f43f5e' : 'var(--text-dim)', fontWeight: 600 }}>
                  {isRecording ? 'ORI đang chăm chú nghe bạn nói nè... Hãy nói to và tự tin!' : 'Nhấn nút đỏ để bắt đầu ghi âm'}
                </div>

                {/* Audio Playback Player if recorded */}
                {audioUrl && (
                  <div style={{ width: '100%', marginTop: '0.75rem' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                      Nghe lại bài nói của bạn:
                    </p>
                    <audio src={audioUrl} controls style={{ width: '100%', height: '40px' }} />
                  </div>
                )}
              </div>
            )}

            {/* Writing Section: Text Area with Anti-Paste for Exam Mode */}
            {section === 'writing' && (
              <div className="writing-editor-container">
                <textarea
                  className="writing-textarea"
                  placeholder={
                    mode === 'exam'
                      ? 'Nhập câu trả lời của bạn tại đây... (Lưu ý: Không thể dán văn bản từ ngoài trong phòng thi ETS)'
                      : 'Nhập câu trả lời hoặc đoạn văn của bạn tại đây... Hãy vận dụng các từ vựng ăn điểm bên trái nha!'
                  }
                  value={writtenText}
                  onChange={(e) => setWrittenText(e.target.value)}
                  onPaste={(e) => {
                    if (mode === 'exam') {
                      e.preventDefault();
                      alert('Cảnh báo phòng thi ETS: Chế độ Luyện Thi đã khóa tính năng Dán (Copy-Paste) để đảm bảo tính xác thực!');
                    }
                  }}
                />
              </div>
            )}

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
              <button
                className="action-btn"
                style={{ flex: 1, justifyContent: 'center' }}
                onClick={resetQuestionState}
              >
                <RotateCcw size={15} /> Làm lại
              </button>

              <button
                className="submit-btn"
                style={{ flex: 2 }}
                disabled={isEvaluating || (section === 'speaking' && !audioUrl && !isRecording) || (section === 'writing' && !writtenText.trim())}
                onClick={handleSubmitResponse}
              >
                {isEvaluating ? (
                  <>
                    <Sparkles className="spin" size={17} /> Đang chấm điểm theo Rubric ETS...
                  </>
                ) : (
                  <>
                    <Award size={17} /> Nộp bài & Nhận Bảng Điểm AI
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </>
    )}
  </main>

      {/* Official ETS Structure & Timing Modal */}
      {showFormatModal && (
        <div className="modal-overlay" onClick={() => setShowFormatModal(false)}>
          <div className="modal-content" style={{ maxWidth: '820px' }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={22} color="#3b82f6" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Cấu Trúc & Thời Gian Thi TOEIC SW Chuẩn ETS Mới Nhất</h3>
              </div>
              <button className="action-btn" onClick={() => setShowFormatModal(false)}>✕</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.88rem' }}>
              {/* Speaking Table */}
              <div>
                <h4 style={{ color: '#38bdf8', marginBottom: '0.4rem', fontWeight: 700 }}>
                  🎙️ TOEIC Speaking: 11 Câu Hỏi (~20 Phút) • Thang Điểm 0 - 200
                </h4>
                <table className="info-table">
                  <thead>
                    <tr>
                      <th>Phần thi</th>
                      <th>Số câu</th>
                      <th>Thời gian chuẩn bị</th>
                      <th>Thời gian trả lời</th>
                      <th>Tiêu chí chấm điểm</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Part 1:</strong> Đọc to đoạn văn</td>
                      <td>Câu 1–2</td>
                      <td>45 giây/câu</td>
                      <td>45 giây/câu</td>
                      <td>Phát âm, Trọng âm, Ngữ điệu</td>
                    </tr>
                    <tr>
                      <td><strong>Part 2:</strong> Miêu tả tranh</td>
                      <td>Câu 3–4</td>
                      <td>45 giây/câu</td>
                      <td>30 giây/câu</td>
                      <td>Ngữ pháp, Từ vựng, Bố cục cảnh</td>
                    </tr>
                    <tr>
                      <td><strong>Part 3:</strong> Trả lời câu hỏi</td>
                      <td>Câu 5–7</td>
                      <td>3 giây/câu</td>
                      <td>Q5-Q6: 15s • Q7: 30s</td>
                      <td>Trôi chảy, Trực diện, Đầy đủ ý</td>
                    </tr>
                    <tr>
                      <td><strong>Part 4:</strong> Dùng thông tin có sẵn</td>
                      <td>Câu 8–10</td>
                      <td>45s đọc bảng • 3s/câu</td>
                      <td>Q8-Q9: 15s • Q10: 30s</td>
                      <td>Độ chính xác thông tin, Lịch thiệp</td>
                    </tr>
                    <tr>
                      <td><strong>Part 5:</strong> Bày tỏ quan điểm</td>
                      <td>Câu 11</td>
                      <td>45 giây</td>
                      <td>60 giây</td>
                      <td>Lập luận, Dẫn chứng, Liên kết ý</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Writing Table */}
              <div>
                <h4 style={{ color: '#06b6d4', marginBottom: '0.4rem', fontWeight: 700 }}>
                  ✍️ TOEIC Writing: 8 Câu Hỏi (~60 Phút) • Thang Điểm 0 - 200
                </h4>
                <table className="info-table">
                  <thead>
                    <tr>
                      <th>Phần thi</th>
                      <th>Số câu</th>
                      <th>Thời gian làm bài</th>
                      <th>Quy định đề bài</th>
                      <th>Tiêu chí chấm điểm</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Part 1:</strong> Viết câu theo tranh</td>
                      <td>Câu 1–5</td>
                      <td><strong>8 phút</strong> cho cả 5 câu (~1.5p/câu)</td>
                      <td>ĐÚNG 1 CÂU duy nhất, dùng đủ 2 từ khoá</td>
                      <td>Độ chính xác ngữ pháp, Quan hệ với tranh</td>
                    </tr>
                    <tr>
                      <td><strong>Part 2:</strong> Phản hồi email</td>
                      <td>Câu 6–7</td>
                      <td><strong>10 phút</strong> riêng cho mỗi email</td>
                      <td>Thư thương mại giải quyết 3 yêu cầu</td>
                      <td>Văn phong, Bố cục, Ngữ pháp, Từ vựng</td>
                    </tr>
                    <tr>
                      <td><strong>Part 3:</strong> Viết bài luận</td>
                      <td>Câu 8</td>
                      <td><strong>30 phút</strong></td>
                      <td>Bài luận hoàn chỉnh tối thiểu 300 từ</td>
                      <td>Mạch lạc, Cấu trúc câu phức, Từ vựng C1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Result & Evaluation Modal */}
      {showResultModal && evaluationResult && (
        <div className="modal-overlay" onClick={() => setShowResultModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Award size={24} color="#38bdf8" />
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>BẢNG CHẨN ĐOÁN KẾT QUẢ THEO BAREM ETS</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                    Kỹ năng: {section.toUpperCase()} | Câu hỏi #{section === 'speaking' ? currentSpeakingQ.questionNumber : currentWritingQ.questionNumber}
                  </p>
                </div>
              </div>
              <button className="action-btn" onClick={() => setShowResultModal(false)}>✕ Đóng</button>
            </div>

            {/* Score Hero Card */}
            <div className="score-hero-card">
              <div className="scaled-score-circle">
                <span className="score-huge">{evaluationResult.scaledScore}</span>
                <span className="score-max">/ 200 Điểm Chuẩn ETS</span>
                <div className="proficiency-badge">{evaluationResult.proficiencyLevel}</div>
              </div>

              {/* Criteria Progress Bars */}
              <div className="criteria-bars">
                <div className="bar-row">
                  <div className="bar-labels">
                    <span>Task Completion (Độ hoàn thành yêu cầu):</span>
                    <span>{evaluationResult.scores.taskCompletion}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${evaluationResult.scores.taskCompletion}%` }} />
                  </div>
                </div>

                <div className="bar-row">
                  <div className="bar-labels">
                    <span>Grammar Accuracy (Độ chính xác ngữ pháp):</span>
                    <span>{evaluationResult.scores.grammarAccuracy}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${evaluationResult.scores.grammarAccuracy}%` }} />
                  </div>
                </div>

                <div className="bar-row">
                  <div className="bar-labels">
                    <span>Lexical Resource (Độ phong phú từ vựng):</span>
                    <span>{evaluationResult.scores.lexicalResource}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${evaluationResult.scores.lexicalResource}%` }} />
                  </div>
                </div>

                <div className="bar-row">
                  <div className="bar-labels">
                    <span>{section === 'speaking' ? 'Pronunciation & Fluency:' : 'Coherence & Cohesion:'}</span>
                    <span>{section === 'speaking' ? evaluationResult.scores.pronunciationFluency : evaluationResult.scores.coherenceCohesion}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${section === 'speaking' ? evaluationResult.scores.pronunciationFluency : evaluationResult.scores.coherenceCohesion}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Examiner Summary */}
            <div style={{ background: 'var(--box-inner-bg)', padding: '1rem', borderRadius: '10px', fontSize: '0.9rem', borderLeft: '4px solid #3b82f6' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#059669', fontWeight: 700, marginBottom: '0.3rem' }}>
                <Heart size={16} /> Nhận xét yêu thương từ Giám khảo ORI & ETS:
              </div>
              <p style={{ color: 'var(--text-main)', lineHeight: 1.6 }}>{evaluationResult.summary}</p>
            </div>

            {/* Diagnostics Cards */}
            <div className="diagnostics-grid">
              {/* Grammar Corrections */}
              {evaluationResult.grammarCorrections.length > 0 && (
                <div className="diag-card">
                  <div className="diag-card-title" style={{ color: '#dc2626' }}>
                    <AlertTriangle size={16} /> Điểm cần nâng cấp ngữ pháp & cấu trúc câu:
                  </div>
                  {evaluationResult.grammarCorrections.map((corr, idx) => (
                    <div key={idx} className="correction-item">
                      <div className="correction-original">Nguyên văn: "{corr.original}"</div>
                      <div className="correction-better">Sửa lại: "{corr.corrected}"</div>
                      <div className="correction-reason">Giải thích: {corr.explanation}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Vocabulary Upgrades */}
              {evaluationResult.vocabularyUpgrades.length > 0 && (
                <div className="diag-card">
                  <div className="diag-card-title" style={{ color: '#059669' }}>
                    <Sparkles size={16} /> Gợi ý nâng cấp từ vựng C1/C2 (Lexical Upgrades):
                  </div>
                  {evaluationResult.vocabularyUpgrades.map((upg, idx) => (
                    <div key={idx} style={{ marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{upg.original}</span> ➔ <strong style={{ color: '#059669' }}>{upg.suggested}</strong>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>{upg.context}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Actionable Advice */}
              {evaluationResult.actionableAdvice.length > 0 && (
                <div className="diag-card">
                  <div className="diag-card-title" style={{ color: '#d97706' }}>
                    <Lightbulb size={16} /> Lời khuyên hành động để tăng điểm trong lần thi tới:
                  </div>
                  <ul style={{ paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                    {evaluationResult.actionableAdvice.map((adv, idx) => (
                      <li key={idx} style={{ marginBottom: '0.3rem' }}>{adv}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal (Free Gemini API Key) */}
      {showSettingsModal && (
        <div className="modal-overlay" onClick={() => setShowSettingsModal(false)}>
          <div className="modal-content" style={{ maxWidth: '540px' }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Cấu Hình AI Chấm Điểm 100% Miễn Phí</h3>
              <button className="action-btn" onClick={() => setShowSettingsModal(false)}>✕</button>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
              Hệ thống đã tích hợp sẵn <strong>Simulated ETS Examiner Engine</strong> (chấm điểm phân tích tức thì không cần key). Nếu bạn muốn sử dụng mô hình trí tuệ nhân tạo <strong>Google Gemini 2.0 Flash</strong> (hỗ trợ nghe trực tiếp âm thanh bài nói):
            </p>

            <ol style={{ fontSize: '0.82rem', color: 'var(--text-muted)', paddingLeft: '1.25rem', lineHeight: 1.6 }}>
              <li>Truy cập <a href="https://aistudio.google.com/" target="_blank" rel="noreferrer" style={{ color: '#3b82f6', fontWeight: 600 }}>Google AI Studio</a> (hoàn toàn miễn phí, hạn mức 15 requests/phút).</li>
              <li>Tạo 1 API key mới và dán vào ô bên dưới.</li>
            </ol>

            <input
              type="password"
              className="key-input"
              placeholder="Dán Google Gemini API Key tại đây (vd: AIzaSy...)"
              value={geminiApiKey}
              onChange={(e) => {
                setGeminiApiKey(e.target.value);
                localStorage.setItem('gemini_api_key', e.target.value);
              }}
            />

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
              <button
                className="submit-btn"
                style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
                onClick={() => setShowSettingsModal(false)}
              >
                Lưu cấu hình
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
