import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders header, logo, and ORI mascot companion', () => {
    render(<App />);

    expect(screen.getByText('TOEIC SW MASTER')).toBeInTheDocument();
    expect(screen.getByText(/Hệ Thống Luyện Thi & Chấm Điểm AI Chuẩn ETS/i)).toBeInTheDocument();

    // Verify mascot ORI is displayed
    const mascotGreeting = screen.getAllByText(/\bORI\b/)[0];
    expect(mascotGreeting).toBeInTheDocument();
  });

  it('switches between Speaking and Writing sections', () => {
    render(<App />);

    const writingBtn = screen.getByRole('button', { name: /Writing/i });
    fireEvent.click(writingBtn);

    expect(screen.getByText(/Khu Vực Soạn Thảo Bài Viết/i)).toBeInTheDocument();
    expect(screen.getByText(/Số từ:/i)).toBeInTheDocument();
  });

  it('switches between Learning Mode and Exam Simulation Mode', () => {
    render(<App />);

    const examBtn = screen.getByRole('button', { name: /Luyện Thi ETS/i });
    fireEvent.click(examBtn);

    expect(screen.getByText(/CHẾ ĐỘ LUYỆN THI THỰC CHIẾN/i)).toBeInTheDocument();
  });

  it('toggles theme between light and dark', () => {
    render(<App />);

    const themeToggle = screen.getByTitle(/Chuyển sang chế độ/i);
    fireEvent.click(themeToggle);

    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    fireEvent.click(themeToggle);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('opens and closes the official ETS format and timing guide modal', () => {
    render(<App />);

    const formatBtn = screen.getByRole('button', { name: /Barem & Cấu Trúc ETS/i });
    fireEvent.click(formatBtn);

    expect(screen.getByText(/Cấu Trúc & Thời Gian Thi TOEIC SW Chuẩn ETS Mới Nhất/i)).toBeInTheDocument();
    expect(screen.getByText(/11 Câu Hỏi \(~20 Phút\)/i)).toBeInTheDocument();
    expect(screen.getByText(/8 Câu Hỏi \(~60 Phút\)/i)).toBeInTheDocument();

    const closeBtn = screen.getByText('✕');
    fireEvent.click(closeBtn);
    expect(screen.queryByText(/Cấu Trúc & Thời Gian Thi TOEIC SW Chuẩn ETS Mới Nhất/i)).not.toBeInTheDocument();
  });

  it('allows starting, pausing, and resetting practice timer in Learning Mode', () => {
    render(<App />);

    // In Learning Mode by default, check that practice timer button is present
    const practiceTimerBtn = screen.getByRole('button', { name: /Bấm giờ canh thử/i });
    expect(practiceTimerBtn).toBeInTheDocument();

    // Start practice timer
    fireEvent.click(practiceTimerBtn);

    // Timer pill appears with prep or practice time
    expect(screen.getByText(/Chuẩn bị: 00:/i)).toBeInTheDocument();

    // Pause and Reset controls are visible
    const pauseBtn = screen.getByRole('button', { name: /Tạm dừng/i });
    expect(pauseBtn).toBeInTheDocument();

    const resetBtn = screen.getByRole('button', { name: /Đặt lại/i });
    expect(resetBtn).toBeInTheDocument();

    // Click pause -> should change to "Tiếp tục"
    fireEvent.click(pauseBtn);
    expect(screen.getByRole('button', { name: /Tiếp tục/i })).toBeInTheDocument();

    // Click reset -> should reset back to initial practice timer button
    fireEvent.click(resetBtn);
    expect(screen.getByRole('button', { name: /Bấm giờ canh thử/i })).toBeInTheDocument();
  });

  it('navigates to ORI Academic section and renders 3 essay types and bilingual learning tabs', () => {
    render(<App />);

    const academicBtn = screen.getByRole('button', { name: /ORI Academic/i });
    fireEvent.click(academicBtn);

    // Verify Academic top banner and headline
    expect(screen.getByText(/Chuyên Sâu Văn Nghị Luận TOEIC Writing/i)).toBeInTheDocument();
    expect(screen.getByText(/ORI ACADEMIC ESSAY ENGINE/i)).toBeInTheDocument();

    // Verify 3 core essay types
    expect(screen.getAllByText(/Agree \/ Disagree/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Preference \/ Choice/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Advantages vs Disadvantages/i)[0]).toBeInTheDocument();

    // Switch to Bilingual Tab
    const bilingualTabBtn = screen.getByRole('button', { name: /4\. Tập Dịch Song Ngữ/i });
    fireEvent.click(bilingualTabBtn);

    expect(screen.getByText(/Tập Dịch Song Ngữ & Phân Tích Bài Mẫu/i)).toBeInTheDocument();
    expect(screen.getByText(/Đang hiện toàn bộ dịch/i)).toBeInTheDocument();

    // Toggle reveal mode
    const toggleRevealBtn = screen.getByRole('button', { name: /Đang hiện toàn bộ dịch/i });
    fireEvent.click(toggleRevealBtn);
    expect(screen.getByText(/Chế độ Tập Dịch \(Ẩn dịch\)/i)).toBeInTheDocument();
  });

  it('switches between test sets (Bộ Đề 1 to 10) dynamically', () => {
    render(<App />);

    const select = screen.getByLabelText('Chọn bộ đề') as HTMLSelectElement;
    expect(select).toBeInTheDocument();
    expect(select.value).toBe('1');

    // Switch to Bộ Đề 2 (Công Nghệ Thông Tin, AI & Chuyển Đổi Số)
    fireEvent.change(select, { target: { value: '2' } });
    expect(select.value).toBe('2');

    // The question prompt should update to Set 2's theme
    expect(screen.getByText(/Summit here in downtown Chicago/i)).toBeInTheDocument();
  });

  it('navigates to Translation Practice (Tập Viết Câu 120 Bài) section, filters parts, and reveals model answers', () => {
    render(<App />);

    const translationNavBtn = screen.getByRole('button', { name: /Tập Viết Câu/i });
    expect(translationNavBtn).toBeInTheDocument();
    fireEvent.click(translationNavBtn);

    // Verify mascot greeting updates
    expect(screen.getByText(/Phòng Luyện Dịch Câu/i)).toBeInTheDocument();

    // Verify header and 120-item title
    expect(screen.getByText(/Luyện Viết & Tập Dịch Câu TOEIC S&W/i)).toBeInTheDocument();
    expect(screen.getByText(/Ngân Hàng 120 Bài/i)).toBeInTheDocument();

    // Verify Part filters
    expect(screen.getByRole('button', { name: /Tất Cả 120 Bài/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Part 1 Writing/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Part 2 Writing/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Speaking Part 2/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Speaking Part 3 & 4/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Task Cuối: Đoạn Văn Ngắn/i })).toBeInTheDocument();

    // Check presence of Vietnamese sentence prompt and vocabulary hints
    expect(screen.getByText(/Câu tiếng Việt cần dịch/i)).toBeInTheDocument();
    expect(screen.getByText(/Từ vựng & Collocations gợi ý/i)).toBeInTheDocument();

    // Type into translation textarea
    const textarea = screen.getByPlaceholderText(/Gõ bản dịch tiếng Anh/i);
    expect(textarea).toBeInTheDocument();
    fireEvent.change(textarea, { target: { value: 'A female technician is meticulously inspecting' } });

    // Toggle reveal model answer
    const revealBtn = screen.getByRole('button', { name: /Đối chiếu Đáp Án Mẫu/i });
    fireEvent.click(revealBtn);

    // Check model answer is visible
    expect(screen.getByText(/Đáp Án Mẫu Chuẩn ETS \(Score 200\/200\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Phân tích ngữ pháp & bẫy ETS/i)).toBeInTheDocument();

    // Switch to Final Task: Short Paragraph
    const paragraphFilterBtn = screen.getByRole('button', { name: /Task Cuối: Đoạn Văn Ngắn/i });
    fireEvent.click(paragraphFilterBtn);
    expect(screen.getByText(/Đoạn văn tiếng Việt cần dịch/i)).toBeInTheDocument();
  });

  it('navigates to Vocabulary & Games section and switches between game modes', () => {
    render(<App />);

    const vocabNavBtn = screen.getByRole('button', { name: /Từ Vựng & Game/i });
    expect(vocabNavBtn).toBeInTheDocument();
    fireEvent.click(vocabNavBtn);

    // Verify mascot greeting updates
    expect(screen.getByText(/Sân Chơi Từ Vựng/i)).toBeInTheDocument();

    // Verify Header
    expect(screen.getByText(/Học Từ Vựng & Collocations Theo Chủ Đề/i)).toBeInTheDocument();
    expect(screen.getByText(/80 Cụm Từ Thực Chiến Song Ngữ/i)).toBeInTheDocument();

    // Verify Theme buttons
    expect(screen.getByRole('button', { name: /Văn Phòng & Nhân Sự/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Dịch Vụ & Khiếu Nại/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Công Nghệ & AI/i })).toBeInTheDocument();

    // Verify Game Mode Tabs
    const flashcardTab = screen.getByRole('button', { name: /1\. Thẻ Nhớ 3D/i });
    const matcherTab = screen.getByRole('button', { name: /2\. Nối Cụm Từ/i });
    const blitzTab = screen.getByRole('button', { name: /3\. Điền Từ Tốc Độ/i });
    const quizTab = screen.getByRole('button', { name: /4\. Trắc Nghiệm Phản Xạ/i });

    expect(flashcardTab).toBeInTheDocument();
    expect(matcherTab).toBeInTheDocument();
    expect(blitzTab).toBeInTheDocument();
    expect(quizTab).toBeInTheDocument();

    // Switch to Matcher Mode
    fireEvent.click(matcherTab);
    expect(screen.getByText(/Thử Thách Ghép Đôi Cụm Collocation/i)).toBeInTheDocument();

    // Switch to Blitz Fill Mode
    fireEvent.click(blitzTab);
    expect(screen.getByText(/ĐIỀN TỪ CÒN THIẾU TRONG CỤM TỪ/i)).toBeInTheDocument();

    // Switch to Speed Quiz Mode
    fireEvent.click(quizTab);
    expect(screen.getByText(/CHỌN CỤM TỪ TIẾNG ANH TỰ NHIÊN CHUẨN XÁC NHẤT/i)).toBeInTheDocument();
  });
});

