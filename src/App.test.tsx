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
});
