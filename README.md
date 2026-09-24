# 🎙️ ORI TOEIC SW MASTER
### Hệ Thống Luyện Thi & Chấm Điểm TOEIC Speaking & Writing Chuẩn ETS

Một ứng dụng web luyện thi TOEIC Speaking & Writing toàn diện, hiện đại, tích hợp trợ lý AI thông minh (ORI mascot 🦉), hỗ trợ cả giao diện **Mobile App** lẫn **Web Desktop**, cùng kho từ vựng collocations và minigames sinh động.

---

## 🌟 Tính Năng Nổi Bật

### 1. 🎙️ Luyện Thi TOEIC Speaking (Chuẩn ETS)
- Đầy đủ **11 câu hỏi / đề** theo đúng cấu trúc bài thi thật:
  - **Q1-2**: Đọc đoạn văn (Read a text aloud).
  - **Q3-4**: Miêu tả tranh (Describe a picture).
  - **Q5-7**: Trả lời câu hỏi (Respond to questions).
  - **Q8-10**: Trả lời câu hỏi dựa trên thông tin cho sẵn (Respond using information provided).
  - **Q11**: Trình bày quan điểm (Express an opinion).
- Đồng hồ chuẩn ETS: Tự động chuyển đổi giữa thời gian chuẩn bị và thời gian trả lời.
- Ghi âm micro trực tiếp, nghe lại bài nói và chấm điểm ngay.

### 2. ✍️ Luyện Thi TOEIC Writing (Chuẩn ETS)
- Đầy đủ **8 câu hỏi / đề**:
  - **Q1-5**: Viết câu dựa trên bức tranh và 2 từ khóa bắt buộc.
  - **Q6-7**: Phản hồi email công việc.
  - **Q8**: Viết bài luận trình bày quan điểm (300+ từ).
- Bộ đếm từ tự động, kiểm tra thời gian thực.

### 3. 🏛️ ORI Academic — Chuyên Sâu Văn Nghị Luận
- 3 dạng đề nghị luận lớn trong TOEIC Writing Q8:
  - **Opinion**: Bày tỏ quan điểm đồng ý / không đồng ý.
  - **Problem & Solution**: Phân tích vấn đề và đề xuất giải pháp.
  - **Advantage & Disadvantage**: Cân nhắc lợi ích và bất lợi.
- Khung bài viết 4 đoạn chuẩn mực, dàn bài mẫu, bài mẫu band điểm cao và phần luyện dịch song ngữ tương tác.

### 4. 📝 Ngân Hàng Luyện Viết Câu (120 Bài Dịch Song Ngữ)
- 120 bài tập dịch thực chiến từ tiếng Việt sang tiếng Anh bao quát Part 1, Part 2, Part 3 và đoạn văn.
- Gợi ý cấu trúc ngữ pháp, từ khóa bắt buộc và đáp án tham khảo chuẩn xác.

### 5. 🎯 Sân Chơi Từ Vựng & Collocations Theo Chủ Đề (80 Cụm Từ)
- **Word of the Day**: Thẻ học từ vựng mỗi ngày với tranh minh họa 3D ấm cúng, phát âm bản xứ (TTS).
- **Daily Quests**: Checklist nhiệm vụ hàng ngày tích điểm EXP, mở rương bí mật hiệu ứng pháo hoa Confetti.
- **4 Minigames Tương Tác**:
  1. 🎴 **Thẻ Nhớ 3D (Flashcards)**: Lật thẻ tương tác 3 chiều, phát âm và đánh dấu thuộc.
  2. 🔗 **Nối Cụm Từ (Matcher)**: Ghép nửa cụm collocation thần tốc.
  3. ⚡ **Điền Từ Tốc Độ (Speed Blitz)**: Gõ từ còn thiếu vào câu ngữ cảnh.
  4. 🎯 **Trắc Nghiệm Phản Xạ 10s (Speed Quiz)**: Đấu trường 10 giây chọn cụm từ tự nhiên nhất.
- **2 Chế độ hiển thị**: Khung điện thoại [📱 Mobile App] và [💻 Web Desktop] rộng rãi.

### 6. 🤖 Cơ Chế Chấm Điểm Kép (Hoàn Toàn Miễn Phí)
- **Offline / Mặc định**: Bộ máy giả lập giám khảo ETS Heuristic thông minh tính điểm chi tiết từ 0 - 200 kèm thang điểm Level.
- **Online / Nâng cao**: Tích hợp Google Gemini 2.0 Flash API (miễn phí qua Google AI Studio) để nhận xét chi tiết phát âm, từ vựng và ngữ pháp.

---

## 🚀 Triển Khai Miễn Phí (Deploy to Netlify)

### Cách 1: Kết nối GitHub với Netlify (Khuyên dùng)
1. Đăng nhập vào [Netlify](https://app.netlify.com/).
2. Chọn **"Add new site"** -> **"Import an existing project"**.
3. Chọn **GitHub** và chọn repository `ngocdiemtran89/ori-toeic-sw-master`.
4. Cấu hình triển khai:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Nhấn **Deploy site** — Netlify sẽ tự động build và cấp tên miền miễn phí trọn đời!

### Cách 2: Netlify Drop (Kéo thả)
Kéo thả thư mục `dist/` vào [Netlify Drop](https://app.netlify.com/drop).

---

## 💻 Chạy Tại Máy Local

```bash
# Cài đặt thư viện
npm install

# Chạy bản development
npm run dev

# Kiểm thử tự động (18/18 tests)
npm test

# Build production
npm run build

# Hoặc chạy bằng Docker
docker compose up -d
```
