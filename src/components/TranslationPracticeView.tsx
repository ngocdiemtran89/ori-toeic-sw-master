import React, { useState } from 'react';
import {
  PenTool,
  Copy,
  Check,
  Eye,
  EyeOff,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Award,
  Compass,
  FileText,
  Lightbulb
} from 'lucide-react';
import type { TranslationItem, TranslationPart } from '../types';
import { TRANSLATION_BANK, TRANSLATION_PART_FILTERS } from '../data/translationData';

export const TranslationPracticeView: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | TranslationPart>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userTranslations, setUserTranslations] = useState<Record<string, string>>({});
  const [showAnswerMap, setShowAnswerMap] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filter items
  const filteredItems: TranslationItem[] =
    selectedFilter === 'all'
      ? TRANSLATION_BANK
      : TRANSLATION_BANK.filter((item) => item.part === selectedFilter);

  const safeIndex = Math.min(currentIndex, Math.max(0, filteredItems.length - 1));
  const currentItem: TranslationItem = filteredItems[safeIndex] || TRANSLATION_BANK[0];
  const userText = userTranslations[currentItem.id] || '';
  const isAnswerVisible = !!showAnswerMap[currentItem.id];

  const handleNext = () => {
    if (safeIndex < filteredItems.length - 1) {
      setCurrentIndex(safeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (safeIndex > 0) {
      setCurrentIndex(safeIndex - 1);
    }
  };

  const handleFilterChange = (filter: 'all' | TranslationPart) => {
    setSelectedFilter(filter);
    setCurrentIndex(0);
  };

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleShowAnswer = (id: string) => {
    setShowAnswerMap((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleTextChange = (text: string) => {
    setUserTranslations((prev) => ({
      ...prev,
      [currentItem.id]: text
    }));
  };

  // Calculate matched keywords in student's translation
  const matchedKeywords = currentItem.vocabularyHints.filter((hint) => {
    const cleanWord = hint.word.toLowerCase().replace(/[^a-z0-9 ]/g, '');
    const tokens = cleanWord.split(/\s+/);
    return tokens.some((token) => token.length > 3 && userText.toLowerCase().includes(token));
  });

  const wordCount = userText.trim() === '' ? 0 : userText.trim().split(/\s+/).length;

  return (
    <div className="translation-practice-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Top Banner */}
      <div
        className="glass-panel"
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(16, 185, 129, 0.12))',
          borderColor: 'rgba(99, 102, 241, 0.3)',
          padding: '1.25rem 1.5rem',
          borderRadius: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '1.6rem' }}>📝</span>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '20px',
                  background: 'rgba(99, 102, 241, 0.2)',
                  color: 'var(--accent-purple)'
                }}
              >
                SENTENCE & PARAGRAPH LAB
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
                Ngân Hàng 60 Câu Chuẩn ETS
              </span>
            </div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 0.35rem 0', color: 'var(--text-primary)' }}>
              Luyện Viết & Tập Dịch Câu TOEIC Speaking & Writing
            </h1>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.88rem', maxWidth: '850px', lineHeight: 1.6 }}>
              Chuyển ngữ từ ý tưởng tiếng Việt sang tiếng Anh tự nhiên. Chia đều theo từng phần thi: từ viết câu theo tranh, email thương mại,
              miêu tả tranh O-P-B-A, phản xạ 15s/30s cho tới <strong>12 đoạn văn ngắn nền tảng</strong> giúp rèn tư duy ngữ pháp và từ vựng cho task cuối.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-glass)',
              padding: '0.65rem 1rem',
              borderRadius: '12px'
            }}
          >
            <div style={{ fontSize: '1.6rem' }}>🦉</div>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>Mẹo dịch từ ORI:</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                Dịch theo cụm từ (Collocations) & cấu trúc ngữ pháp, không dịch word-by-word nha!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part Filter Bar */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {TRANSLATION_PART_FILTERS.map((f) => {
          const isActive = selectedFilter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => handleFilterChange(f.key)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 0.95rem',
                borderRadius: '10px',
                border: isActive ? `2px solid ${f.color}` : '1px solid var(--border-glass)',
                background: isActive ? 'var(--bg-panel)' : 'var(--bg-glass)',
                color: isActive ? f.color : 'var(--text-primary)',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: isActive ? `0 4px 14px ${f.color}22` : 'none'
              }}
            >
              <span>{f.label}</span>
              <span
                style={{
                  fontSize: '0.7rem',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '6px',
                  background: `${f.color}22`,
                  color: f.color,
                  fontWeight: 800
                }}
              >
                {f.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Question Navigation Bar (Prev / Next & Pills) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-glass)',
          borderRadius: '12px',
          padding: '0.6rem 0.9rem'
        }}
      >
        <button
          className="action-btn"
          onClick={handlePrev}
          disabled={safeIndex === 0}
          style={{ opacity: safeIndex === 0 ? 0.4 : 1, padding: '0.35rem 0.75rem', fontSize: '0.82rem' }}
        >
          <ChevronLeft size={15} /> Câu trước
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', overflowX: 'auto', padding: '0.2rem 0', maxWidth: '65%' }}>
          {filteredItems.map((item, idx) => {
            const isCurrent = idx === safeIndex;
            const hasWritten = !!userTranslations[item.id]?.trim();
            return (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  padding: '0.3rem 0.55rem',
                  borderRadius: '6px',
                  border: isCurrent ? '2px solid var(--accent-blue)' : '1px solid var(--border-glass)',
                  background: isCurrent
                    ? 'rgba(59, 130, 246, 0.2)'
                    : hasWritten
                    ? 'rgba(16, 185, 129, 0.15)'
                    : 'var(--bg-glass)',
                  color: isCurrent ? 'var(--accent-blue)' : hasWritten ? '#10b981' : 'var(--text-secondary)',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
                title={item.title}
              >
                #{item.itemNumber}
              </button>
            );
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>
            {safeIndex + 1} / {filteredItems.length}
          </span>
          <button
            className="action-btn"
            onClick={handleNext}
            disabled={safeIndex === filteredItems.length - 1}
            style={{ opacity: safeIndex === filteredItems.length - 1 ? 0.4 : 1, padding: '0.35rem 0.75rem', fontSize: '0.82rem' }}
          >
            Câu tiếp <ChevronRight size={15} />
          </button>
        </div>
      </div>

      {/* Main Split Grid: Prompt & Hints on Left, Student Input & Answer on Right */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.25rem',
          alignItems: 'stretch'
        }}
      >
        {/* LEFT PANE: Vietnamese Prompt & Vocabulary Hints */}
        <div
          className="glass-panel"
          style={{
            padding: '1.25rem',
            borderRadius: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {/* Header Metadata */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                padding: '0.2rem 0.55rem',
                borderRadius: '6px',
                background: 'rgba(59, 130, 246, 0.15)',
                color: 'var(--accent-blue)'
              }}
            >
              {currentItem.partName} • Bài #{currentItem.itemNumber}
            </span>

            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '0.2rem 0.5rem',
                borderRadius: '6px',
                background:
                  currentItem.difficulty.includes('Nâng cao')
                    ? 'rgba(139, 92, 246, 0.15)'
                    : 'rgba(16, 185, 129, 0.15)',
                color: currentItem.difficulty.includes('Nâng cao') ? 'var(--accent-purple)' : '#10b981'
              }}
            >
              {currentItem.difficulty}
            </span>
          </div>

          <h2 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0', color: 'var(--text-primary)' }}>
            {currentItem.title}
          </h2>

          {/* Vietnamese Prompt Box */}
          <div
            style={{
              background: 'var(--bg-input)',
              borderLeft: '4px solid #10b981',
              borderRadius: '0 10px 10px 0',
              padding: '1rem 1.15rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase' }}>
                {currentItem.partCategory === 'paragraph' ? 'Đoạn văn tiếng Việt cần dịch:' : 'Câu tiếng Việt cần dịch:'}
              </span>
              <button
                className="action-btn"
                style={{ padding: '0.2rem 0.5rem', fontSize: '0.72rem' }}
                onClick={() => handleCopyText(currentItem.vietnamesePrompt, `vi-${currentItem.id}`)}
              >
                {copiedId === `vi-${currentItem.id}` ? <Check size={12} /> : <Copy size={12} />}
                {copiedId === `vi-${currentItem.id}` ? 'Đã chép' : 'Sao chép'}
              </button>
            </div>

            <div
              style={{
                fontSize: '0.96rem',
                lineHeight: 1.7,
                color: 'var(--text-primary)',
                fontWeight: 600
              }}
            >
              {currentItem.vietnamesePrompt}
            </div>
          </div>

          {/* Target Grammar Target Pattern */}
          <div
            style={{
              background: 'rgba(99, 102, 241, 0.08)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: '10px',
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem'
            }}
          >
            <Compass size={18} color="var(--accent-purple)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent-purple)', textTransform: 'uppercase' }}>
                Mục tiêu ngữ pháp:
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', marginTop: '0.15rem', fontWeight: 600 }}>
                {currentItem.targetGrammar}
              </div>
            </div>
          </div>

          {/* Vocabulary Hints Bank */}
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Lightbulb size={15} color="#f59e0b" /> Từ vựng & Collocations gợi ý:
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem' }}>
              {currentItem.vocabularyHints.map((vh, vIdx) => (
                <div
                  key={vIdx}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: '8px',
                    padding: '0.6rem 0.8rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.15rem'
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--accent-blue)' }}>
                    {vh.word}
                  </div>
                  {vh.ipa && (
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {vh.ipa}
                    </div>
                  )}
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    {vh.meaning}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANE: Interactive Typing & Show Answer Reference */}
        <div
          className="glass-panel"
          style={{
            padding: '1.25rem',
            borderRadius: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.45rem', margin: 0, color: 'var(--text-primary)' }}>
              <PenTool size={16} color="var(--accent-blue)" /> Bài Dịch Của Bạn (English Translation):
            </h3>

            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '0.2rem 0.55rem',
                borderRadius: '14px',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-muted)'
              }}
            >
              <FileText size={12} style={{ display: 'inline', marginRight: '4px' }} />
              {wordCount} từ
            </div>
          </div>

          <textarea
            className="writing-textarea"
            style={{
              width: '100%',
              minHeight: currentItem.partCategory === 'paragraph' ? '220px' : '140px',
              padding: '1rem',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              background: 'var(--bg-input)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-glass)',
              borderRadius: '10px',
              resize: 'vertical',
              fontFamily: 'var(--font-sans)'
            }}
            placeholder={`Gõ bản dịch tiếng Anh của bạn tại đây...\n\nGợi ý: Vận dụng các từ vựng và cấu trúc ngữ pháp được gợi ý bên trái nha!`}
            value={userText}
            onChange={(e) => handleTextChange(e.target.value)}
          />

          {/* Keyword Match Feedback */}
          {userText.trim().length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', fontSize: '0.78rem' }}>
              <span style={{ color: 'var(--text-muted)', fontWeight: 700 }}>Đã dùng từ khóa:</span>
              {matchedKeywords.length > 0 ? (
                matchedKeywords.map((mk, mkIdx) => (
                  <span
                    key={mkIdx}
                    style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#10b981',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '6px',
                      fontWeight: 700
                    }}
                  >
                    ✓ {mk.word}
                  </span>
                ))
              ) : (
                <span style={{ color: 'var(--text-dim)', fontStyle: 'italic' }}>
                  Hãy thử lồng ghép các từ vựng gợi ý bên trái vào bài dịch của bạn nhé!
                </span>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button
              className="action-btn"
              onClick={() => handleTextChange('')}
              disabled={userText.trim() === ''}
              style={{ fontSize: '0.8rem' }}
            >
              <RotateCcw size={14} /> Xóa làm lại
            </button>

            <button
              className="action-btn"
              style={{
                background: isAnswerVisible ? 'rgba(16, 185, 129, 0.15)' : 'var(--accent-blue)',
                color: isAnswerVisible ? '#10b981' : '#ffffff',
                fontWeight: 800,
                fontSize: '0.82rem'
              }}
              onClick={() => toggleShowAnswer(currentItem.id)}
            >
              {isAnswerVisible ? <EyeOff size={14} /> : <Eye size={14} />}
              {isAnswerVisible ? 'Ẩn đáp án tham khảo' : '🔍 Đối chiếu Đáp Án Mẫu Level 8-9'}
            </button>
          </div>

          {/* MODEL ANSWER & EXPLANATION BOX */}
          {isAnswerVisible && (
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-glass)',
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                animation: 'fadeIn 0.25s ease-out'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    color: '#10b981',
                    textTransform: 'uppercase'
                  }}
                >
                  <Award size={15} /> Đáp Án Mẫu Chuẩn ETS (Score 200/200):
                </span>

                <button
                  className="action-btn"
                  style={{ padding: '0.2rem 0.5rem', fontSize: '0.72rem' }}
                  onClick={() => handleCopyText(currentItem.sampleEnglishAnswer, `ans-${currentItem.id}`)}
                >
                  {copiedId === `ans-${currentItem.id}` ? <Check size={12} /> : <Copy size={12} />}
                  {copiedId === `ans-${currentItem.id}` ? 'Đã sao chép' : 'Sao chép câu mẫu'}
                </button>
              </div>

              {/* Sample Text */}
              <div
                style={{
                  padding: '0.85rem 1rem',
                  background: 'rgba(16, 185, 129, 0.08)',
                  borderLeft: '4px solid #10b981',
                  borderRadius: '0 8px 8px 0',
                  fontSize: '0.96rem',
                  lineHeight: 1.7,
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  whiteSpace: 'pre-line'
                }}
              >
                "{currentItem.sampleEnglishAnswer}"
              </div>

              {/* Alternative Answers */}
              {currentItem.alternativeAnswers && currentItem.alternativeAnswers.length > 0 && (
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                    Cách dịch tương đương khác:
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {currentItem.alternativeAnswers.map((alt, aIdx) => (
                      <li key={aIdx}>"{alt}"</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Grammar & Stylistic Analysis */}
              <div
                style={{
                  background: 'rgba(139, 92, 246, 0.08)',
                  borderRadius: '8px',
                  padding: '0.75rem 0.95rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6
                }}
              >
                <strong style={{ color: 'var(--accent-purple)' }}>💡 Phân tích & Bẫy cần tránh: </strong>
                {currentItem.analysis}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
