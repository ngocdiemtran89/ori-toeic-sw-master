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
  Lightbulb,
  Grid,
  Info,
  ChevronDown,
  Sparkles,
  Plus
} from 'lucide-react';
import type { TranslationItem, TranslationPart } from '../types';
import { TRANSLATION_BANK, TRANSLATION_PART_FILTERS } from '../data/translationData';

export const TranslationPracticeView: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | TranslationPart>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userTranslations, setUserTranslations] = useState<Record<string, string>>({});
  const [showAnswerMap, setShowAnswerMap] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showGridDrawer, setShowGridDrawer] = useState<boolean>(false);

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

  // Click on a vocabulary chip to insert it into translation textarea
  const handleInsertWord = (word: string) => {
    const trimmed = userText.trim();
    const newText = trimmed ? `${trimmed} ${word} ` : `${word} `;
    handleTextChange(newText);
  };

  // Calculate matched keywords in student's translation
  const matchedKeywords = currentItem.vocabularyHints.filter((hint) => {
    const cleanWord = hint.word.toLowerCase().replace(/[^a-z0-9 ]/g, '');
    const tokens = cleanWord.split(/\s+/);
    return tokens.some((token) => token.length > 3 && userText.toLowerCase().includes(token));
  });

  const wordCount = userText.trim() === '' ? 0 : userText.trim().split(/\s+/).length;

  // Pagination neighborhood (shows current ± 2 buttons)
  const paginationRange = () => {
    const total = filteredItems.length;
    const delta = 2;
    const start = Math.max(0, safeIndex - delta);
    const end = Math.min(total - 1, safeIndex + delta);
    const pages: number[] = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="translation-practice-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Top Editorial Banner */}
      <div
        className="glass-panel"
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(16, 185, 129, 0.08))',
          borderColor: 'rgba(99, 102, 241, 0.25)',
          padding: '1.25rem 1.5rem',
          borderRadius: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
              <span style={{ fontSize: '1.4rem' }}>📝</span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '20px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  color: 'var(--accent-purple)',
                  letterSpacing: '0.05em'
                }}
              >
                SENTENCE & PARAGRAPH LAB
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '20px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#10b981'
                }}
              >
                Ngân Hàng 120 Bài
              </span>
            </div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 0.25rem 0', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
              Luyện Viết & Tập Dịch Câu TOEIC S&W
            </h1>
            <p className="prose-lead" style={{ margin: 0, fontSize: '0.88rem' }}>
              Chuyển ngữ ý tưởng tự nhiên, đúng ngữ pháp và bám sát tiêu chí chấm điểm ETS Level 8–9.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'var(--box-inner-bg)',
              border: '1px solid var(--border-subtle)',
              padding: '0.6rem 0.95rem',
              borderRadius: '12px'
            }}
          >
            <div style={{ fontSize: '1.5rem' }}>🦉</div>
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-main)' }}>Mẹo dịch từ ORI:</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Dịch theo <strong>Collocations</strong>, tuyệt đối tránh dịch word-by-word nhé!
              </div>
            </div>
          </div>
        </div>

        {/* Progressive Disclosure Guide (Declutters the main UI) */}
        <details className="progressive-guide" style={{ marginTop: '0.85rem' }}>
          <summary>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Info size={15} color="var(--accent-blue)" /> Xem phương pháp dịch 3 bước & phân bổ 5 phần thi
            </span>
            <ChevronDown size={14} color="var(--text-muted)" />
          </summary>
          <div className="progressive-guide-content">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div>
                <strong style={{ color: 'var(--text-main)' }}>📌 3 Bước chuyển ngữ chuẩn:</strong>
                <ol style={{ paddingLeft: '1.2rem', marginTop: '0.35rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <li>Xác định <strong>Thì (Tense)</strong> & <strong>Chủ ngữ cốt lõi</strong>.</li>
                  <li>Chọn <strong>Cụm động từ/Tính từ</strong> (Collocation) tương đương.</li>
                  <li>Rà soát <strong>S-V Agreement</strong> và mạo từ (a/an/the).</li>
                </ol>
              </div>
              <div>
                <strong style={{ color: 'var(--text-main)' }}>📊 Phân bổ 120 bài luyện:</strong>
                <ul style={{ paddingLeft: '1.2rem', marginTop: '0.35rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <li>24 câu Writing Part 1 (2 từ cho trước)</li>
                  <li>24 câu Writing Part 2 (Email phản hồi)</li>
                  <li>24 câu Speaking Part 2 (O-P-B-A miêu tả tranh)</li>
                  <li>24 câu Speaking Part 3/4 (Phản xạ 15s/30s)</li>
                  <li><strong>24 đoạn văn ngắn</strong> (Tư duy bài luận Task 8)</li>
                </ul>
              </div>
            </div>
          </div>
        </details>
      </div>

      {/* Part Filter Bar (Scrollable Pill Container) */}
      <div className="pill-scroll-container">
        {TRANSLATION_PART_FILTERS.map((f) => {
          const isActive = selectedFilter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => handleFilterChange(f.key)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.48rem 0.85rem',
                borderRadius: '10px',
                border: isActive ? `2px solid ${f.color}` : '1px solid var(--border-subtle)',
                background: isActive ? 'var(--bg-card)' : 'var(--box-inner-bg)',
                color: isActive ? f.color : 'var(--text-main)',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.18s ease',
                boxShadow: isActive ? `0 4px 14px ${f.color}22` : 'none'
              }}
            >
              <span>{f.label}</span>
              <span
                style={{
                  fontSize: '0.7rem',
                  padding: '0.12rem 0.45rem',
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

      {/* Smart Question Navigation Bar (Prev / Next, Neighborhood, & Grid Drawer Toggle) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
          padding: '0.6rem 0.9rem',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <button
            className="action-btn"
            onClick={handlePrev}
            disabled={safeIndex === 0}
            style={{ opacity: safeIndex === 0 ? 0.4 : 1, padding: '0.35rem 0.75rem', fontSize: '0.82rem' }}
          >
            <ChevronLeft size={15} /> Trước
          </button>

          {/* Neighborhood Quick Jump Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            {paginationRange().map((idx) => {
              const item = filteredItems[idx];
              const isCurrent = idx === safeIndex;
              const hasWritten = !!userTranslations[item.id]?.trim();
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    padding: '0.3rem 0.55rem',
                    borderRadius: '8px',
                    border: isCurrent ? '2px solid var(--accent-blue)' : '1px solid var(--border-subtle)',
                    background: isCurrent
                      ? 'rgba(59, 130, 246, 0.2)'
                      : hasWritten
                      ? 'rgba(16, 185, 129, 0.15)'
                      : 'var(--box-inner-bg)',
                    color: isCurrent ? 'var(--accent-blue)' : hasWritten ? '#10b981' : 'var(--text-muted)',
                    fontWeight: 800,
                    fontSize: '0.76rem',
                    cursor: 'pointer'
                  }}
                >
                  #{item.itemNumber}
                </button>
              );
            })}
          </div>

          <button
            className="action-btn"
            onClick={handleNext}
            disabled={safeIndex === filteredItems.length - 1}
            style={{ opacity: safeIndex === filteredItems.length - 1 ? 0.4 : 1, padding: '0.35rem 0.75rem', fontSize: '0.82rem' }}
          >
            Tiếp <ChevronRight size={15} />
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)' }}>
            Bài {safeIndex + 1} / {filteredItems.length}
          </span>

          <button
            className="action-btn"
            onClick={() => setShowGridDrawer(!showGridDrawer)}
            style={{
              padding: '0.35rem 0.75rem',
              fontSize: '0.8rem',
              background: showGridDrawer ? 'rgba(99, 102, 241, 0.2)' : undefined,
              borderColor: showGridDrawer ? 'var(--accent-purple)' : undefined
            }}
          >
            <Grid size={14} /> {showGridDrawer ? 'Đóng lưới' : 'Xem lưới 120 bài'}
          </button>
        </div>
      </div>

      {/* Collapsible 120 Question Matrix Drawer */}
      {showGridDrawer && (
        <div
          className="bento-card"
          style={{
            animation: 'fadeIn 0.2s ease-out',
            border: '2px dashed var(--accent-purple)',
            padding: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-main)' }}>
              📑 Danh Sách Tất Cả {filteredItems.length} Bài Luyện:
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              (Màu xanh: đã viết • Khung xanh: đang chọn)
            </span>
          </div>

          <div className="modal-grid-120">
            {filteredItems.map((item, idx) => {
              const isCurrent = idx === safeIndex;
              const hasWritten = !!userTranslations[item.id]?.trim();
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setShowGridDrawer(false);
                  }}
                  style={{
                    padding: '0.4rem 0.2rem',
                    borderRadius: '6px',
                    border: isCurrent ? '2px solid var(--accent-blue)' : '1px solid var(--border-subtle)',
                    background: isCurrent
                      ? 'rgba(59, 130, 246, 0.25)'
                      : hasWritten
                      ? 'rgba(16, 185, 129, 0.2)'
                      : 'var(--box-inner-bg)',
                    color: isCurrent ? 'var(--accent-blue)' : hasWritten ? '#10b981' : 'var(--text-main)',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    cursor: 'pointer'
                  }}
                  title={item.title}
                >
                  #{item.itemNumber}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Split Grid: Prompt & Hints on Left, Student Input & Answer on Right */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.25rem',
          alignItems: 'stretch'
        }}
      >
        {/* LEFT PANE: Vietnamese Prompt & Interactive Vocabulary Chips */}
        <div
          className="bento-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.1rem'
          }}
        >
          {/* Header Metadata */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                padding: '0.2rem 0.55rem',
                borderRadius: '6px',
                background: 'rgba(59, 130, 246, 0.12)',
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
                    ? 'rgba(139, 92, 246, 0.12)'
                    : 'rgba(16, 185, 129, 0.12)',
                color: currentItem.difficulty.includes('Nâng cao') ? 'var(--accent-purple)' : '#10b981'
              }}
            >
              {currentItem.difficulty}
            </span>
          </div>

          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
            {currentItem.title}
          </h2>

          {/* Vietnamese Prompt Box (Optimal Reading Measure & Typography) */}
          <div
            style={{
              background: 'var(--box-inner-bg)',
              borderLeft: '4px solid #10b981',
              borderRadius: '0 12px 12px 0',
              padding: '1rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem'
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
              className="prose-reading"
              style={{
                color: 'var(--text-main)',
                fontWeight: 600,
                whiteSpace: 'pre-line'
              }}
            >
              {currentItem.vietnamesePrompt}
            </div>
          </div>

          {/* Target Grammar Pill */}
          <div
            style={{
              background: 'rgba(99, 102, 241, 0.08)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: '10px',
              padding: '0.65rem 0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Compass size={17} color="var(--accent-purple)" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.84rem', color: 'var(--text-main)', fontWeight: 600 }}>
              <span style={{ color: 'var(--accent-purple)', fontWeight: 800, marginRight: '6px' }}>Mục tiêu:</span>
              {currentItem.targetGrammar}
            </div>
          </div>

          {/* Interactive Vocabulary Chips (Bento Style & Click-to-Insert) */}
          <div>
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                marginBottom: '0.6rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Lightbulb size={15} color="#f59e0b" /> Từ vựng & Collocations gợi ý:
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'none' }}>
                (Nhấn chip để chèn vào bài)
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
              {currentItem.vocabularyHints.map((vh, vIdx) => (
                <button
                  key={vIdx}
                  type="button"
                  className="vocab-chip"
                  onClick={() => handleInsertWord(vh.word)}
                  title={`Nhấn để chèn "${vh.word}" vào bài dịch`}
                >
                  <Plus size={13} color="var(--accent-blue)" />
                  <span className="word-title">{vh.word}</span>
                  {vh.ipa && <span className="word-ipa">{vh.ipa}</span>}
                  <span className="word-meaning">• {vh.meaning}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANE: Interactive Typing & Model Answer Reference */}
        <div
          className="bento-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.45rem', margin: 0, color: 'var(--text-main)' }}>
              <PenTool size={16} color="var(--accent-blue)" /> Bản Dịch Của Bạn:
            </h3>

            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '0.2rem 0.55rem',
                borderRadius: '14px',
                background: 'var(--box-inner-bg)',
                border: '1px solid var(--border-subtle)',
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
              minHeight: currentItem.partCategory === 'paragraph' ? '200px' : '130px',
              padding: '1rem',
              fontSize: '0.98rem',
              lineHeight: 1.75,
              background: 'var(--input-bg)',
              color: 'var(--text-main)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '10px',
              resize: 'vertical',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '-0.01em'
            }}
            placeholder={`Gõ bản dịch tiếng Anh của bạn tại đây...\n\nMẹo: Nhấn vào các chip từ vựng bên trái để chèn nhanh từ khóa!`}
            value={userText}
            onChange={(e) => handleTextChange(e.target.value)}
          />

          {/* Keyword Match Feedback */}
          {userText.trim().length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', fontSize: '0.78rem' }}>
              <span style={{ color: 'var(--text-muted)', fontWeight: 700 }}>Đã dùng từ gợi ý:</span>
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
                  Hãy thử chèn thêm các từ vựng gợi ý bên trái để câu văn tự nhiên hơn nhé!
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
              {isAnswerVisible ? 'Ẩn đáp án tham khảo' : '🔍 Đối chiếu Đáp Án Mẫu ETS'}
            </button>
          </div>

          {/* MODEL ANSWER & EXPLANATION (Editorial Style) */}
          {isAnswerVisible && (
            <div
              className="editorial-quote-box"
              style={{
                marginTop: '0.5rem',
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
                  {copiedId === `ans-${currentItem.id}` ? 'Đã sao chép' : 'Sao chép'}
                </button>
              </div>

              {/* Sample Text */}
              <div className="quote-text" style={{ whiteSpace: 'pre-line' }}>
                "{currentItem.sampleEnglishAnswer}"
              </div>

              {/* Collapsible Grammar & Trap Analysis Accordion */}
              <details className="progressive-guide" style={{ background: 'var(--box-inner-bg)' }}>
                <summary style={{ padding: '0.6rem 0.85rem', fontSize: '0.8rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Sparkles size={14} color="var(--accent-purple)" />
                    Xem phân tích ngữ pháp & các cách dịch tương đương
                  </span>
                  <ChevronDown size={14} />
                </summary>
                <div className="progressive-guide-content" style={{ padding: '0.85rem', fontSize: '0.82rem' }}>
                  {/* Alternative Answers */}
                  {currentItem.alternativeAnswers && currentItem.alternativeAnswers.length > 0 && (
                    <div style={{ marginBottom: '0.75rem' }}>
                      <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.3rem' }}>
                        Cách dịch tương đương khác:
                      </strong>
                      <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        {currentItem.alternativeAnswers.map((alt, aIdx) => (
                          <li key={aIdx}>"{alt}"</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Grammar Analysis */}
                  <div>
                    <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '0.3rem' }}>
                      Phân tích ngữ pháp & bẫy ETS:
                    </strong>
                    <div style={{ lineHeight: 1.6, color: 'var(--text-muted)' }}>
                      {currentItem.analysis}
                    </div>
                  </div>
                </div>
              </details>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
