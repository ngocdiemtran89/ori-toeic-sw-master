# -*- coding: utf-8 -*-
import sys

# We will generate the 120 items directly with top linguistic quality.
# Let's write the full TypeScript file.

header = """import type { TranslationItem, TranslationPart } from '../types';

export interface TranslationPartFilter {
  key: 'all' | TranslationPart;
  label: string;
  badge: string;
  color: string;
}

export const TRANSLATION_PART_FILTERS: TranslationPartFilter[] = [
  { key: 'all', label: 'Tất Cả 120 Bài', badge: '120 Câu & Đoạn', color: '#6366f1' },
  { key: 'writing_p1', label: 'Part 1 Writing: Câu Theo Tranh', badge: '24 Câu', color: '#3b82f6' },
  { key: 'writing_p2', label: 'Part 2 Writing: Email Công Sở', badge: '24 Câu', color: '#06b6d4' },
  { key: 'speaking_p2', label: 'Speaking Part 2: Miêu Tả Tranh', badge: '24 Câu', color: '#10b981' },
  { key: 'speaking_p3_4', label: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình', badge: '24 Câu', color: '#f59e0b' },
  { key: 'opinion_paragraphs', label: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng', badge: '24 Đoạn', color: '#8b5cf6' }
];

export const TRANSLATION_BANK: TranslationItem[] = [
"""

print("Writing generator script...")
