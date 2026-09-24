import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  Copy,
  Check,
  Eye,
  EyeOff,
  Layers,
  PenTool,
  CheckCircle2,
  Compass,
  ArrowRight,
  FileText
} from 'lucide-react';
import type { OriEssayTopic, EssayCategory, BilingualParagraph, BilingualSentence } from '../types';
import { ORI_ACADEMIC_TOPICS } from '../data/oriAcademicData';

export const OriAcademicView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<EssayCategory>('agree_disagree');
  const [showAllTranslations, setShowAllTranslations] = useState<boolean>(true);
  const [revealedSentences, setRevealedSentences] = useState<Record<string, boolean>>({});
  const [copiedTemplateIdx, setCopiedTemplateIdx] = useState<number | null>(null);
  const [practiceText, setPracticeText] = useState<string>('');
  const [activeSubTab, setActiveSubTab] = useState<'strategy' | 'formula' | 'templates' | 'bilingual' | 'practice'>('strategy');

  const currentTopic: OriEssayTopic =
    ORI_ACADEMIC_TOPICS.find((t) => t.category === selectedCategory) || ORI_ACADEMIC_TOPICS[0];

  const wordCount = practiceText.trim() === '' ? 0 : practiceText.trim().split(/\s+/).length;

  const handleCopyTemplate = (template: string, idx: number) => {
    navigator.clipboard.writeText(template);
    setCopiedTemplateIdx(idx);
    setTimeout(() => setCopiedTemplateIdx(null), 2000);
  };

  const toggleSentenceReveal = (key: string) => {
    setRevealedSentences((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const categories = [
    {
      key: 'agree_disagree' as EssayCategory,
      title: 'Agree / Disagree',
      subtitle: 'Đồng ý hay Phản đối',
      badge: 'Xuất hiện 50%',
      color: '#3b82f6',
      icon: '⚖️'
    },
    {
      key: 'preference' as EssayCategory,
      title: 'Preference / Choice',
      subtitle: 'Lựa chọn A hay B',
      badge: 'Xuất hiện 30%',
      color: '#8b5cf6',
      icon: '🎯'
    },
    {
      key: 'pros_cons' as EssayCategory,
      title: 'Advantages vs Disadvantages',
      subtitle: 'Ưu & Nhược điểm (Hai mặt)',
      badge: 'Xuất hiện 20%',
      color: '#10b981',
      icon: '🔄'
    }
  ];

  return (
    <div className="ori-academic-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Top Banner */}
      <div
        className="glass-panel"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(139, 92, 246, 0.12))',
          borderColor: 'rgba(139, 92, 246, 0.3)',
          padding: '1.5rem',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '1.8rem' }}>🏛️</span>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '20px',
                  background: 'rgba(139, 92, 246, 0.2)',
                  color: 'var(--accent-purple)'
                }}
              >
                ORI ACADEMIC ESSAY ENGINE
              </span>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '20px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#10b981'
                }}
              >
                Level 9 (200/200 Điểm)
              </span>
            </div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.4rem 0', color: 'var(--text-primary)' }}>
              Chuyên Sâu Văn Nghị Luận TOEIC Writing (Question 8)
            </h1>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.92rem', maxWidth: '850px', lineHeight: 1.6 }}>
              Phân loại 3 dạng bài nghị luận chủ chốt của ETS, giải mã công thức 4 đoạn chuẩn học thuật, cung cấp ngân hàng mẫu câu C1 và
              chế độ <strong>Tập dịch song ngữ Anh - Việt</strong> giúp học viên làm quen với tư duy triển khai ý logic, mạch lạc.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-glass)',
              padding: '0.75rem 1.1rem',
              borderRadius: '12px'
            }}
          >
            <div style={{ fontSize: '1.8rem' }}>🦉</div>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-primary)' }}>Lời khuyên từ ORI:</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                Nắm vững 1 lập trường, phát triển 2 luận điểm sâu sắc và viết tối thiểu 300 từ nha!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Essay Category Selector (3 Dạng Đề) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem'
        }}
      >
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => {
                setSelectedCategory(cat.key);
                setRevealedSentences({});
              }}
              style={{
                background: isSelected ? 'var(--bg-panel)' : 'var(--bg-glass)',
                border: isSelected ? `2px solid ${cat.color}` : '1px solid var(--border-glass)',
                borderRadius: '14px',
                padding: '1.1rem 1.25rem',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: isSelected ? `0 8px 24px ${cat.color}22` : 'none',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{cat.icon}</span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '0.2rem 0.5rem',
                    borderRadius: '8px',
                    background: `${cat.color}22`,
                    color: cat.color
                  }}
                >
                  {cat.badge}
                </span>
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: isSelected ? cat.color : 'var(--text-primary)', marginBottom: '0.2rem' }}>
                {cat.title}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {cat.subtitle}
              </div>
              {isSelected && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: '20%',
                    right: '20%',
                    height: '3px',
                    background: cat.color,
                    borderRadius: '3px 3px 0 0'
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Sub Navigation Bar for Selected Essay Type */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          borderBottom: '1px solid var(--border-glass)',
          paddingBottom: '0.5rem',
          flexWrap: 'wrap'
        }}
      >
        <button
          className={`action-btn ${activeSubTab === 'strategy' ? 'active' : ''}`}
          style={{
            background: activeSubTab === 'strategy' ? 'var(--accent-blue)' : 'var(--bg-glass)',
            color: activeSubTab === 'strategy' ? '#fff' : 'var(--text-primary)',
            fontWeight: 700
          }}
          onClick={() => setActiveSubTab('strategy')}
        >
          <Compass size={16} /> 1. Chiến Lược & Bản Đồ Tư Duy (Brainstorming)
        </button>

        <button
          className={`action-btn ${activeSubTab === 'formula' ? 'active' : ''}`}
          style={{
            background: activeSubTab === 'formula' ? 'var(--accent-blue)' : 'var(--bg-glass)',
            color: activeSubTab === 'formula' ? '#fff' : 'var(--text-primary)',
            fontWeight: 700
          }}
          onClick={() => setActiveSubTab('formula')}
        >
          <Layers size={16} /> 2. Công Thức Vàng 4 Đoạn
        </button>

        <button
          className={`action-btn ${activeSubTab === 'templates' ? 'active' : ''}`}
          style={{
            background: activeSubTab === 'templates' ? 'var(--accent-blue)' : 'var(--bg-glass)',
            color: activeSubTab === 'templates' ? '#fff' : 'var(--text-primary)',
            fontWeight: 700
          }}
          onClick={() => setActiveSubTab('templates')}
        >
          <Sparkles size={16} /> 3. Ngân Hàng Mẫu Câu C1
        </button>

        <button
          className={`action-btn ${activeSubTab === 'bilingual' ? 'active' : ''}`}
          style={{
            background: activeSubTab === 'bilingual' ? '#10b981' : 'var(--bg-glass)',
            color: activeSubTab === 'bilingual' ? '#fff' : 'var(--text-primary)',
            fontWeight: 700
          }}
          onClick={() => setActiveSubTab('bilingual')}
        >
          <BookOpen size={16} /> 4. Tập Dịch Song Ngữ & Bài Mẫu
        </button>

        <button
          className={`action-btn ${activeSubTab === 'practice' ? 'active' : ''}`}
          style={{
            background: activeSubTab === 'practice' ? 'var(--accent-purple)' : 'var(--bg-glass)',
            color: activeSubTab === 'practice' ? '#fff' : 'var(--text-primary)',
            fontWeight: 700
          }}
          onClick={() => setActiveSubTab('practice')}
        >
          <PenTool size={16} /> 5. Góc Luyện Viết Thử
        </button>
      </div>

      {/* Main Content Pane */}
      <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: '16px' }}>
        {/* Topic Header Card */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-glass)',
            padding: '1.25rem',
            borderRadius: '12px',
            marginBottom: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                padding: '0.2rem 0.5rem',
                borderRadius: '6px',
                background: 'rgba(59, 130, 246, 0.15)',
                color: 'var(--accent-blue)'
              }}
            >
              {currentTopic.categoryName}
            </span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>• Đề tài thực chiến TOEIC Q8</span>
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>
            {currentTopic.topicTitle}
          </h2>
          <div
            style={{
              padding: '0.85rem 1rem',
              background: 'var(--bg-input)',
              borderLeft: '4px solid var(--accent-blue)',
              borderRadius: '0 8px 8px 0',
              fontSize: '0.92rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-sans)',
              whiteSpace: 'pre-line'
            }}
          >
            {currentTopic.prompt}
          </div>
        </div>

        {/* TAB 1: STRATEGY & BRAINSTORMING */}
        {activeSubTab === 'strategy' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Overview Strategy */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                <Compass size={18} color="var(--accent-blue)" /> Chiến Lược Tiếp Cận Cho Dạng Bài Này
              </h3>
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-glass)',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  lineHeight: 1.7,
                  fontSize: '0.92rem',
                  whiteSpace: 'pre-line',
                  color: 'var(--text-secondary)'
                }}
              >
                {currentTopic.overviewStrategy}
              </div>
            </div>

            {/* 3-Minute Brainstorming Map */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0, color: 'var(--text-primary)' }}>
                  <Sparkles size={18} color="var(--accent-purple)" /> Bản Đồ Tư Duy 3 Phút (Brainstorming Blueprint)
                </h3>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '8px',
                    background: 'rgba(236, 72, 153, 0.15)',
                    color: '#ec4899'
                  }}
                >
                  Bí quyết không bao giờ bí ý
                </span>
              </div>

              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-glass)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div style={{ padding: '0.75rem 1rem', background: 'rgba(59, 130, 246, 0.08)', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#3b82f6' }}>
                    1. Câu Hỏi Cốt Lõi (Core Question):
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                    {currentTopic.brainstormingMap.coreQuestion}
                  </div>
                </div>

                <div style={{ padding: '0.75rem 1rem', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: '#10b981' }}>
                    2. Lập Trường Khuyến Nghị (Recommended Stance):
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                    {currentTopic.brainstormingMap.recommendedStance}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    3. Hai Luận Điểm Vững Chắc (2 Concrete Pillars):
                  </div>

                  {currentTopic.brainstormingMap.reasons.map((r, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'var(--bg-input)',
                        border: '1px solid var(--border-glass)',
                        borderRadius: '10px',
                        padding: '1rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                        <span
                          style={{
                            background: 'var(--accent-purple)',
                            color: '#fff',
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.78rem',
                            fontWeight: 800
                          }}
                        >
                          {idx + 1}
                        </span>
                        <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                          {r.point}
                        </span>
                      </div>

                      <div style={{ marginLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem' }}>
                        <div>
                          <strong style={{ color: 'var(--accent-blue)' }}>Cơ chế giải thích (Why?):</strong>{' '}
                          <span style={{ color: 'var(--text-secondary)' }}>{r.elaboration}</span>
                        </div>
                        <div>
                          <strong style={{ color: '#10b981' }}>Ví dụ minh họa (Evidence):</strong>{' '}
                          <span style={{ color: 'var(--text-secondary)' }}>{r.example}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MASTER 4-PARAGRAPH FORMULA */}
        {activeSubTab === 'formula' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 0.2rem 0', color: 'var(--text-primary)' }}>
                  Công Thức Vàng 4 Đoạn (The 4-Paragraph Golden Formula)
                </h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Cấu trúc hoàn hảo đạt từ 300 - 350 từ trong đúng 30 phút thi thật.
                </p>
              </div>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '0.3rem 0.7rem',
                  borderRadius: '20px',
                  background: 'rgba(59, 130, 246, 0.15)',
                  color: 'var(--accent-blue)'
                }}
              >
                ETS Rubric: 5/5 Points
              </span>
            </div>

            {/* Introduction Box */}
            <div className="formula-card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-glass)', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                <span style={{ fontWeight: 800, fontSize: '1rem', color: '#3b82f6' }}>
                  Đoạn 1: Mở Bài (Introduction)
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>Mục tiêu: 40 - 50 từ</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {currentTopic.masterFormula.introFormula.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>

            {/* Body 1 Box */}
            <div className="formula-card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-glass)', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                <span style={{ fontWeight: 800, fontSize: '1rem', color: '#8b5cf6' }}>
                  Đoạn 2: Thân Bài 1 (Body Paragraph 1 - Luận Điểm Cốt Lõi)
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>Mục tiêu: 100 - 120 từ (Công thức PEEL)</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {currentTopic.masterFormula.body1Formula.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>

            {/* Body 2 Box */}
            <div className="formula-card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-glass)', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                <span style={{ fontWeight: 800, fontSize: '1rem', color: '#ec4899' }}>
                  Đoạn 3: Thân Bài 2 (Body Paragraph 2 - Luận Điểm Mở Rộng / Đối Chiếu)
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>Mục tiêu: 100 - 120 từ (Công thức PEEL)</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {currentTopic.masterFormula.body2Formula.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>

            {/* Conclusion Box */}
            <div className="formula-card" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-glass)', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                <span style={{ fontWeight: 800, fontSize: '1rem', color: '#10b981' }}>
                  Đoạn 4: Kết Bài (Conclusion - Chốt Hạ Lập Trường)
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>Mục tiêu: 40 - 50 từ</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                {currentTopic.masterFormula.conclusionFormula.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* TAB 3: KEY SENTENCE TEMPLATES */}
        {activeSubTab === 'templates' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 0.2rem 0', color: 'var(--text-primary)' }}>
                  Ngân Hàng Mẫu Câu Học Thuật C1 (Sentence Starter Bank)
                </h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Bấm nút để sao chép mẫu câu chuẩn chỉnh dùng ngay vào bài viết của bạn.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {currentTopic.keySentenceTemplates.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: '12px',
                    padding: '1.1rem 1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '6px',
                        background: 'rgba(139, 92, 246, 0.15)',
                        color: 'var(--accent-purple)'
                      }}
                    >
                      {item.stage}
                    </span>

                    <button
                      className="action-btn"
                      style={{
                        padding: '0.3rem 0.65rem',
                        fontSize: '0.75rem',
                        background: copiedTemplateIdx === idx ? 'rgba(16, 185, 129, 0.2)' : 'var(--bg-glass)',
                        color: copiedTemplateIdx === idx ? '#10b981' : 'var(--text-primary)'
                      }}
                      onClick={() => handleCopyTemplate(item.template, idx)}
                    >
                      {copiedTemplateIdx === idx ? (
                        <>
                          <Check size={13} /> Đã sao chép!
                        </>
                      ) : (
                        <>
                          <Copy size={13} /> Sao chép mẫu câu
                        </>
                      )}
                    </button>
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      lineHeight: 1.5
                    }}
                  >
                    "{item.template}"
                  </div>

                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                    👉 Ý nghĩa: {item.vietnameseMeaning}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: BILINGUAL READER & MODEL ESSAY */}
        {activeSubTab === 'bilingual' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.8rem',
                borderBottom: '1px solid var(--border-glass)',
                paddingBottom: '0.75rem'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 0.2rem 0', color: 'var(--text-primary)' }}>
                  Tập Dịch Song Ngữ & Phân Tích Bài Mẫu (Bilingual Essay Reader)
                </h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Đọc từng câu tiếng Anh, tự nhẩm bản dịch rồi lật mở tiếng Việt để học cách tổ chức và kết nối câu.
                </p>
              </div>

              {/* Toggle Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  className="action-btn"
                  onClick={() => setShowAllTranslations(!showAllTranslations)}
                  style={{
                    background: showAllTranslations ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-glass)',
                    color: showAllTranslations ? '#10b981' : 'var(--text-primary)',
                    fontWeight: 700
                  }}
                >
                  {showAllTranslations ? <Eye size={15} /> : <EyeOff size={15} />}
                  {showAllTranslations ? 'Đang hiện toàn bộ dịch' : 'Chế độ Tập Dịch (Ẩn dịch)'}
                </button>
              </div>
            </div>

            {/* Paragraphs Loop */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {currentTopic.bilingualModelEssay.map((para: BilingualParagraph, pIdx: number) => (
                <div
                  key={pIdx}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: '14px',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem'
                  }}
                >
                  {/* Paragraph Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px dashed var(--border-glass)',
                      paddingBottom: '0.5rem'
                    }}
                  >
                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--accent-blue)' }}>
                      {para.paragraphTitle}
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '6px',
                        background: 'rgba(59, 130, 246, 0.12)',
                        color: 'var(--accent-blue)'
                      }}
                    >
                      {para.role}
                    </span>
                  </div>

                  {/* Sentences */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {para.sentences.map((sent: BilingualSentence, sIdx: number) => {
                      const sentenceKey = `${pIdx}-${sIdx}`;
                      const isRevealed = showAllTranslations || revealedSentences[sentenceKey];

                      return (
                        <div
                          key={sIdx}
                          style={{
                            background: 'var(--bg-input)',
                            border: '1px solid var(--border-glass)',
                            borderRadius: '10px',
                            padding: '0.95rem 1.1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {/* English Sentence */}
                          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem' }}>
                            <div style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-primary)', fontWeight: 600 }}>
                              <span style={{ color: 'var(--accent-purple)', fontWeight: 800, marginRight: '0.4rem' }}>
                                [{sIdx + 1}]
                              </span>
                              {sent.en}
                            </div>

                            {!showAllTranslations && (
                              <button
                                className="action-btn"
                                style={{
                                  padding: '0.25rem 0.55rem',
                                  fontSize: '0.75rem',
                                  flexShrink: 0
                                }}
                                onClick={() => toggleSentenceReveal(sentenceKey)}
                              >
                                {isRevealed ? <EyeOff size={13} /> : <Eye size={13} />}
                                {isRevealed ? 'Ẩn' : 'Xem dịch'}
                              </button>
                            )}
                          </div>

                          {/* Keywords Highlight */}
                          {sent.highlightKeywords && sent.highlightKeywords.length > 0 && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                                Cụm từ C1:
                              </span>
                              {sent.highlightKeywords.map((kw, kwIdx) => (
                                <span
                                  key={kwIdx}
                                  style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    padding: '0.15rem 0.45rem',
                                    borderRadius: '6px',
                                    background: 'rgba(236, 72, 153, 0.12)',
                                    color: '#ec4899'
                                  }}
                                >
                                  ✨ {kw}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Vietnamese Translation */}
                          {isRevealed ? (
                            <div
                              style={{
                                background: 'rgba(16, 185, 129, 0.08)',
                                borderLeft: '3px solid #10b981',
                                padding: '0.6rem 0.85rem',
                                borderRadius: '0 6px 6px 0',
                                fontSize: '0.9rem',
                                lineHeight: 1.6,
                                color: 'var(--text-secondary)'
                              }}
                            >
                              <strong style={{ color: '#10b981' }}>Bản dịch gợi ý: </strong>
                              {sent.vi}
                            </div>
                          ) : (
                            <div
                              onClick={() => toggleSentenceReveal(sentenceKey)}
                              style={{
                                padding: '0.5rem 0.75rem',
                                background: 'var(--bg-glass)',
                                borderRadius: '6px',
                                fontSize: '0.82rem',
                                color: 'var(--text-muted)',
                                cursor: 'pointer',
                                textAlign: 'center',
                                border: '1px dashed var(--border-glass)'
                              }}
                            >
                              👆 Bấm vào đây để đối chiếu bản dịch tiếng Việt của ORI
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: PRACTICE DRAFTING SANDBOX */}
        {activeSubTab === 'practice' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '0 0 0.2rem 0', color: 'var(--text-primary)' }}>
                  Góc Luyện Viết & Triển Khai Ý (Practice Drafting Sandbox)
                </h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Áp dụng công thức 4 đoạn và các mẫu câu C1 để tự viết bài luận theo đề bài trên.
                </p>
              </div>

              {/* Word Count Indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '20px',
                  background: wordCount >= 300 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.12)',
                  color: wordCount >= 300 ? '#10b981' : wordCount >= 250 ? '#f59e0b' : '#ef4444',
                  fontWeight: 800,
                  fontSize: '0.85rem'
                }}
              >
                <FileText size={16} />
                <span>Số từ: {wordCount} / 300 từ tối thiểu</span>
                {wordCount >= 300 && <CheckCircle2 size={16} />}
              </div>
            </div>

            <textarea
              className="writing-textarea"
              style={{
                width: '100%',
                minHeight: '360px',
                padding: '1.25rem',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                background: 'var(--bg-input)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-glass)',
                borderRadius: '12px',
                resize: 'vertical',
                fontFamily: 'var(--font-sans)'
              }}
              placeholder={`Nhập bài viết của bạn tại đây...\n\nGợi ý bắt đầu mở bài (Hook & Thesis):\n"In today's fast-paced corporate environment, the debate over whether..."`}
              value={practiceText}
              onChange={(e) => setPracticeText(e.target.value)}
            />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.8rem' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {wordCount < 250 ? (
                  <span>⚠️ Cảnh báo: Bài viết dưới 250 từ sẽ bị trừ điểm nặng tiêu chí Task Completion.</span>
                ) : wordCount < 300 ? (
                  <span>💡 Bạn đang viết rất tốt, hãy cố gắng viết thêm 1-2 câu ví dụ để đạt mốc 300 từ an toàn nha!</span>
                ) : (
                  <span style={{ color: '#10b981', fontWeight: 700 }}>
                    🎉 Xuất sắc! Bài viết đã đạt độ dài chuẩn chỉnh của bài thi ETS 200 điểm!
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  className="action-btn"
                  onClick={() => setPracticeText('')}
                  disabled={practiceText.trim() === ''}
                >
                  Xóa làm lại
                </button>
                <button
                  className="action-btn"
                  style={{ background: 'var(--accent-blue)', color: '#fff', fontWeight: 700 }}
                  onClick={() => setActiveSubTab('bilingual')}
                >
                  Đối chiếu với Bài Mẫu <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
