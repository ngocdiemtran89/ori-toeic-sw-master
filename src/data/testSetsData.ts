import type { SpeakingQuestion, WritingQuestion } from '../types';

export interface TestSetMeta {
  id: number;
  name: string;
  titleVi: string;
  theme: string;
  difficulty: 'Cơ bản - Trung cấp (500-650)' | 'Trung cấp - Khá (650-800)' | 'Nâng cao (800-990)';
  badgeColor: string;
  descriptionVi: string;
}

export const TEST_SETS_METADATA: TestSetMeta[] = [
  {
    id: 1,
    name: 'Bộ Đề 1',
    titleVi: 'Quản Trị Doanh Nghiệp & Năng Suất Công Sở',
    theme: 'Corporate Operations & Workplace Efficiency',
    difficulty: 'Trung cấp - Khá (650-800)',
    badgeColor: '#3b82f6',
    descriptionVi: 'Chủ đề văn phòng, giao tiếp đồng nghiệp, hội nghị khách hàng, và quản lý thời gian.'
  },
  {
    id: 2,
    name: 'Bộ Đề 2',
    titleVi: 'Công Nghệ Thông Tin, AI & Chuyển Đổi Số',
    theme: 'Information Technology, AI & Automation',
    difficulty: 'Nâng cao (800-990)',
    badgeColor: '#8b5cf6',
    descriptionVi: 'Chủ đề phần mềm, trí tuệ nhân tạo nơi công sở, bảo mật dữ liệu và thiết bị hiện đại.'
  },
  {
    id: 3,
    name: 'Bộ Đề 3',
    titleVi: 'Marketing, Quảng Cáo & Hành Vi Tiêu Dùng',
    theme: 'Marketing, Advertising & Consumer Experience',
    difficulty: 'Trung cấp - Khá (650-800)',
    badgeColor: '#ec4899',
    descriptionVi: 'Chủ đề chiến dịch quảng bá, sự kiện ra mắt sản phẩm, khảo sát thị trường và bán lẻ.'
  },
  {
    id: 4,
    name: 'Bộ Đề 4',
    titleVi: 'Nhân Sự, Tuyển Dụng & Đào Tạo Nhân Tài',
    theme: 'Human Resources, Recruiting & Staff Development',
    difficulty: 'Trung cấp - Khá (650-800)',
    badgeColor: '#10b981',
    descriptionVi: 'Chủ đề phỏng vấn ứng viên, chính sách phúc lợi, đánh giá KPI và hội thảo nội bộ.'
  },
  {
    id: 5,
    name: 'Bộ Đề 5',
    titleVi: 'Du Lịch Công Tác, Hàng Không & Khách Sạn',
    theme: 'Business Travel, Aviation & Hospitality Management',
    difficulty: 'Cơ bản - Trung cấp (500-650)',
    badgeColor: '#f59e0b',
    descriptionVi: 'Chủ đề đặt vé máy bay, đặt phòng khách sạn, hoãn chuyến bay và dịch vụ hội nghị.'
  },
  {
    id: 6,
    name: 'Bộ Đề 6',
    titleVi: 'Tài Chính, Ngân Hàng & Đầu Tư Doanh Nghiệp',
    theme: 'Corporate Finance, Banking & Budgeting',
    difficulty: 'Nâng cao (800-990)',
    badgeColor: '#06b6d4',
    descriptionVi: 'Chủ đề báo cáo doanh thu quý, cắt giảm ngân sách, kiểm toán và đàm phán hợp đồng.'
  },
  {
    id: 7,
    name: 'Bộ Đề 7',
    titleVi: 'Sức Khỏe Nghề Nghiệp, Công Thái Học & An Toàn',
    theme: 'Occupational Health, Ergonomics & Workplace Safety',
    difficulty: 'Cơ bản - Trung cấp (500-650)',
    badgeColor: '#14b8a6',
    descriptionVi: 'Chủ đề an toàn lao động xưởng sản xuất, bàn làm việc công thái học và bảo hiểm y tế.'
  },
  {
    id: 8,
    name: 'Bộ Đề 8',
    titleVi: 'Phát Triển Bền Vững & Chuỗi Cung Ứng Xanh',
    theme: 'Environmental Sustainability & Green Logistics',
    difficulty: 'Nâng cao (800-990)',
    badgeColor: '#84cc16',
    descriptionVi: 'Chủ đề năng lượng tái tạo, bao bì thân thiện môi trường và giảm phát thải carbon.'
  },
  {
    id: 9,
    name: 'Bộ Đề 9',
    titleVi: 'Thương Mại Điện Tử, Kho Bãi & Chăm Sóc Khách Hàng',
    theme: 'E-Commerce, Warehousing & Customer Relations',
    difficulty: 'Trung cấp - Khá (650-800)',
    badgeColor: '#f97316',
    descriptionVi: 'Chủ đề xử lý đơn hàng trực tuyến, giao hàng trễ, khiếu nại sản phẩm và hoàn tiền.'
  },
  {
    id: 10,
    name: 'Bộ Đề 10',
    titleVi: 'Giáo Dục, Phát Triển Kỹ Năng & Lãnh Đạo Toàn Cầu',
    theme: 'Lifelong Learning, Leadership & Executive Strategy',
    difficulty: 'Nâng cao (800-990)',
    badgeColor: '#6366f1',
    descriptionVi: 'Chủ đề khóa học lãnh đạo cao cấp, nâng cao kỹ năng mềm và quản lý khủng hoảng.'
  }
];

// Helper to generate Set-specific speaking questions
export function generateSpeakingSet(setId: number): SpeakingQuestion[] {
  const meta = TEST_SETS_METADATA.find(s => s.id === setId) || TEST_SETS_METADATA[0];

  const part1Texts = [
    {
      p1: `Welcome to the annual ${meta.theme} Summit here in downtown Chicago. Today's program includes keynote presentations by leading industry pioneers, interactive technology exhibits, and an exclusive networking banquet this evening. Please verify that your participant badge is visible at all times, and make sure to silence your cellular devices during speaker sessions. Now, let us give a warm welcome to our opening keynote speaker, Dr. Evelyn Vance.`,
      p2: `Attention all valued attendees! The workshop on modern workplace innovation will commence promptly at two fifteen in Conference Room C. Space inside the auditorium is strictly limited to eighty seats, which will be allocated on a first-come, first-served basis. If you require specialized translation equipment or hearing assistance devices, please notify the concierge desk near the main entrance immediately. Thank you for your cooperation!`,
      colloc1: [
        { word: 'keynote presentations', ipa: '/ˈkiː.nəʊt/', meaning: 'Bài phát biểu khai mạc then chốt', example: 'Keynote presentations by leading pioneers' },
        { word: 'cellular devices', ipa: '/ˈsel.jə.lər/', meaning: 'Thiết bị điện thoại di động', example: 'Silence your cellular devices' },
        { word: 'networking banquet', ipa: '/ˈbæŋ.kwɪt/', meaning: 'Tiệc tối giao lưu kết nối', example: 'Join the networking banquet this evening' }
      ]
    }
  ];

  const currentP1 = part1Texts[0];

  return [
    // Q1
    {
      id: `spk-s${setId}-q1`,
      testSetId: setId,
      questionNumber: 1,
      part: 1,
      partName: 'Part 1: Read a Text Aloud',
      direction: 'In this part of the test, you will read aloud the text on the screen. You will have 45 seconds to prepare. Then you will have 45 seconds to read the text aloud.',
      promptText: currentP1.p1,
      prepTime: 45,
      responseTime: 45,
      hints: {
        structureOutline: [
          'Bước 1: Quét nhanh các từ có đuôi khó (-ed, -s, -ly, compound nouns).',
          'Bước 2: Xác định cụm liệt kê A ↗, B ↗, and C ↘.',
          'Bước 3: Chia ngắt nhịp (chunking) theo cụm giới từ.'
        ],
        keyCollocations: currentP1.colloc1,
        grammarTips: [
          'Lên giọng ở các mục liệt kê: keynote presentations ↗, interactive exhibits ↗, and an exclusive banquet ↘.',
          'Đọc rõ âm đuôi: devices (/ɪz/), pioneers (/z/).'
        ],
        commonPitfalls: ['Đọc vấp tên riêng Dr. Evelyn Vance', 'Hụt hơi do không ngắt nghỉ ở dấu phẩy.'],
        proStrategyTips: [
          'Bí quyết ETS: Trong 45s chuẩn bị, hãy phát âm to thành tiếng ít nhất 1 lần để cơ miệng quen với các âm khó.',
          'Nếu đọc nhầm một từ, hãy bình tĩnh đọc lại từ đó một lần duy nhất rồi tiếp tục, giám khảo ETS sẽ chấm âm sửa sau cùng.'
        ]
      },
      sampleAnswer: {
        text: currentP1.p1,
        scoreLevel: '200/200 (Level 8)',
        analysis: 'Phát âm chuẩn xác các âm đuôi, ngữ điệu liệt kê 3 nhịp chuẩn ETS, ngắt nghỉ câu tự nhiên.'
      }
    },
    // Q2
    {
      id: `spk-s${setId}-q2`,
      testSetId: setId,
      questionNumber: 2,
      part: 1,
      partName: 'Part 1: Read a Text Aloud',
      direction: 'In this part of the test, you will read aloud the text on the screen. You will have 45 seconds to prepare. Then you will have 45 seconds to read the text aloud.',
      promptText: currentP1.p2,
      prepTime: 45,
      responseTime: 45,
      hints: {
        structureOutline: [
          'Bước 1: Giọng điệu thông báo trang trọng, rõ ràng và có điểm nhấn.',
          'Bước 2: Nhấn trọng âm các số từ và địa điểm (two fifteen, Room C, eighty seats).',
          'Bước 3: Hạ giọng dứt khoát ở câu kết.'
        ],
        keyCollocations: [
          { word: 'commence promptly', ipa: '/kəˈmens ˈprɒmpt.li/', meaning: 'Bắt đầu đúng giờ', example: 'Will commence promptly at two fifteen.' },
          { word: 'first-served basis', ipa: '/ˈfɜːst.sɜːvd/', meaning: 'Ưu tiên ai đến trước phục vụ trước', example: 'Allocated on a first-come, first-served basis.' },
          { word: 'concierge desk', ipa: '/ˌkɒn.siˈeəʒ/', meaning: 'Bàn lễ tân/hướng dẫn', example: 'Notify the concierge desk.' }
        ],
        grammarTips: ['Đọc chuẩn nối âm: "first-come, first-served" và "two fifteen".'],
        commonPitfalls: ['Đọc sai trọng âm từ concierge (/ˌkɒn.siˈeəʒ/).'],
        proStrategyTips: ['Tránh đọc đều đều như đọc văn bản; hãy nhập vai một phát thanh viên hội nghị chuyên nghiệp.']
      },
      sampleAnswer: {
        text: currentP1.p2,
        scoreLevel: '200/200 (Level 8)',
        analysis: 'Giọng đọc tự tin, trường độ âm tiết chuẩn, nhấn mạnh chính xác vào thời gian và quy định.'
      }
    },
    // Q3
    {
      id: `spk-s${setId}-q3`,
      testSetId: setId,
      questionNumber: 3,
      part: 2,
      partName: 'Part 2: Describe a Picture',
      direction: 'In this part of the test, you will describe the picture on the screen in as much detail as you can. You will have 45 seconds to prepare. Then you will have 30 seconds to speak.',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
      promptText: 'Describe the picture shown on the screen.',
      prepTime: 45,
      responseTime: 30,
      hints: {
        structureOutline: [
          '1. Tổng quan: "This picture was taken in a modern corporate setting / collaborative meeting area."',
          '2. Chủ thể chính: 3 chuyên viên trẻ đang cùng nhìn vào màn hình máy tính xách tay.',
          '3. Hậu cảnh: Kệ tài liệu, bảng trắng có ghi chú chiến lược, ánh sáng ban ngày qua cửa sổ kính.',
          '4. Kết luận cảm nhận: "Overall, they seem deeply engaged in productive teamwork."'
        ],
        keyCollocations: [
          { word: 'deeply engaged', ipa: '/ɪnˈɡeɪdʒd/', meaning: 'Tập trung cao độ', example: 'They are deeply engaged in discussion.' },
          { word: 'collaborative spirit', ipa: '/kəˈlæb.ər.ə.tɪv/', meaning: 'Tinh thần hợp tác', example: 'The atmosphere reflects a strong collaborative spirit.' }
        ],
        grammarTips: ['Dùng thì Hiện tại tiếp diễn (Present Continuous) cho các hành động: "are reviewing", "is pointing", "are discussing".'],
        commonPitfalls: ['Mô tả liệt kê đồ vật rời rạc mà không có liên kết không gian.'],
        proStrategyTips: ['Bí quyết O-P-B-A: Overview (5s) -> People/Actions (15s) -> Background (5s) -> Atmosphere (5s).']
      },
      sampleAnswer: {
        text: 'This picture depicts a modern workplace where three colleagues are gathered around a wooden table. In the center, a woman is pointing at a laptop screen while her two teammates lean in attentively to review data. In the background, there is an open-plan office with bright natural lighting. Overall, the atmosphere seems highly collaborative and focused.',
        scoreLevel: '200/200 (Level 8)',
        analysis: 'Cấu trúc mô tả không gian chặt chẽ (center -> background -> overall), ngữ pháp thì tiếp diễn chính xác.'
      }
    },
    // Q4
    {
      id: `spk-s${setId}-q4`,
      testSetId: setId,
      questionNumber: 4,
      part: 2,
      partName: 'Part 2: Describe a Picture',
      direction: 'In this part of the test, you will describe the picture on the screen in as much detail as you can. You will have 45 seconds to prepare. Then you will have 30 seconds to speak.',
      imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80',
      promptText: 'Describe the picture shown on the screen.',
      prepTime: 45,
      responseTime: 30,
      hints: {
        structureOutline: [
          '1. Tổng quan: Khung cảnh một buổi thuyết trình hoặc hội đàm đối tác.',
          '2. Chi tiết người nói: Diễn giả đang đứng cạnh màn chiếu, cử chỉ tay tự tin.',
          '3. Khán thính giả: Các đồng nghiệp ngồi lắng nghe chăm chú, một số ghi chép vào sổ.',
          '4. Cảm nhận chung: Không khí chuyên nghiệp và tính tương tác cao.'
        ],
        keyCollocations: [
          { word: 'delivering a presentation', ipa: '/dɪˈlɪv.ər.ɪŋ/', meaning: 'Thuyết trình bài báo cáo', example: 'A professional delivering a presentation' },
          { word: 'attentive audience', ipa: '/əˈten.tɪv/', meaning: 'Khán giả chăm chú lắng nghe', example: 'Speaking before an attentive audience' }
        ],
        grammarTips: ['Dùng giới từ chỉ vị trí chuẩn xác: "in the foreground", "standing beside the projector screen", "seated across the table".'],
        commonPitfalls: ['Nói ngắc ngứ vì cố nghĩ từ vựng phức tạp thay vì giữ độ trôi chảy.'],
        proStrategyTips: ['Nếu không biết từ chỉ đồ vật, hãy dùng từ bao quát (paraphrase): ví dụ không biết "flip chart" thì nói "a large paper board".']
      },
      sampleAnswer: {
        text: 'This image captures a formal business presentation taking place in an executive boardroom. On the left, a presenter in professional attire is gesturing toward a presentation slide, explaining key metrics. Meanwhile, several executives are seated across the conference table, listening intently. The room appears sleek and well-lit, conveying an atmosphere of executive decision-making.',
        scoreLevel: '200/200 (Level 8)',
        analysis: 'Từ vựng đa dạng (gesturing, executives, executive decision-making), hoàn thành trọn vẹn trong 28 giây.'
      }
    },
    // Q5
    {
      id: `spk-s${setId}-q5`,
      testSetId: setId,
      questionNumber: 5,
      part: 3,
      partName: 'Part 3: Respond to Questions',
      direction: 'In this part of the test, you will answer three questions about a familiar topic. You will have 3 seconds to prepare after each question. Then you will have 15 seconds to respond to Questions 5 and 6, and 30 seconds to respond to Question 7.',
      promptText: `Imagine that a marketing research firm is interviewing you about your daily habits related to ${meta.theme.toLowerCase()}.\n\nHow often do you interact with digital communication tools in your daily work, and what do you primarily use them for?`,
      prepTime: 3,
      responseTime: 15,
      hints: {
        structureOutline: [
          '1. Trả lời trực tiếp tần suất (every single day / multiple times an hour).',
          '2. Nêu mục đích chính (messaging colleagues, sharing project files).'
        ],
        keyCollocations: [
          { word: 'on a daily basis', ipa: '/ˈdeɪ.li/', meaning: 'Hàng ngày', example: 'I utilize messaging tools on a daily basis.' },
          { word: 'streamline communication', ipa: '/ˈstriːm.laɪn/', meaning: 'Hợp lý hóa giao tiếp', example: 'To streamline team communication.' }
        ],
        grammarTips: ['Trả lời thẳng vào trọng tâm trong 3 giây đầu tiên, không dùng câu mở bài dài dòng.'],
        commonPitfalls: ['Chỉ trả lời một vế (nói tần suất nhưng quên nói mục đích sử dụng).'],
        proStrategyTips: ['15 giây chỉ cần đúng 2 câu hoàn chỉnh: Câu 1 (Direct Answer) + Câu 2 (Quick Detail).']
      },
      sampleAnswer: {
        text: 'I interact with digital communication tools constantly throughout the workday, primarily utilizing platforms like Slack and email to coordinate project updates and exchange files with my teammates.',
        scoreLevel: '200/200 (Level 8)',
        analysis: 'Trả lời trúng cả 2 vế trong 12 giây, ngữ pháp thì hiện tại đơn hoàn hảo.'
      }
    },
    // Q6
    {
      id: `spk-s${setId}-q6`,
      testSetId: setId,
      questionNumber: 6,
      part: 3,
      partName: 'Part 3: Respond to Questions',
      direction: 'In this part of the test, you will answer three questions about a familiar topic. You will have 3 seconds to prepare after each question. Then you will have 15 seconds to respond to Questions 5 and 6, and 30 seconds to respond to Question 7.',
      promptText: 'Do you prefer communicating with colleagues via instant messaging or in-person conversations? Why?',
      prepTime: 3,
      responseTime: 15,
      hints: {
        structureOutline: [
          '1. Chọn 1 trong 2 lựa chọn dứt khoát.',
          '2. Đưa ra 1 lý do thuyết phục (tính nhanh gọn hoặc tính rõ ràng).'
        ],
        keyCollocations: [
          { word: 'instant feedback', ipa: '/ˈɪn.stənt/', meaning: 'Phản hồi tức thì', example: 'Provides instant feedback without meetings.' },
          { word: 'written record', ipa: '/ˈrɪt.ən/', meaning: 'Lưu vết bằng văn bản', example: 'Leaves a clear written record for reference.' }
        ],
        grammarTips: ['Dùng cấu trúc so sánh: "I prefer A to B because..." hoặc "I definitely lean toward A as it allows..."'],
        commonPitfalls: ['Chọn cả hai hoặc trả lời ấp úng quá 5 giây đầu.'],
        proStrategyTips: ['Đừng suy nghĩ điều gì là sự thật, hãy chọn phương án nào bạn có sẵn từ vựng tiếng Anh nhất!']
      },
      sampleAnswer: {
        text: 'I definitely prefer instant messaging because it creates an organized written record of our discussions and allows colleagues to respond asynchronously without interrupting their focused workflows.',
        scoreLevel: '200/200 (Level 8)',
        analysis: 'Chọn phương án rõ ràng, lý do giàu tính chuyên môn (asynchronously, focused workflows).'
      }
    },
    // Q7
    {
      id: `spk-s${setId}-q7`,
      testSetId: setId,
      questionNumber: 7,
      part: 3,
      partName: 'Part 3: Respond to Questions',
      direction: 'In this part of the test, you will answer three questions about a familiar topic. You will have 3 seconds to prepare after each question. Then you will have 15 seconds to respond to Questions 5 and 6, and 30 seconds to respond to Question 7.',
      promptText: 'What is the most important factor when choosing a collaborative project management platform for a team: cost, ease of use, or mobile accessibility? Why?',
      prepTime: 3,
      responseTime: 30,
      hints: {
        structureOutline: [
          '1. Khẳng định yếu tố quan trọng nhất (ví dụ: ease of use).',
          '2. Lý do 1: Giảm thiểu thời gian đào tạo (minimizes training time).',
          '3. Lý do 2: Đảm bảo mọi thành viên áp dụng nhanh chóng (ensures swift adoption).',
          '4. Tóm tắt nhanh: "That is why usability is paramount."'
        ],
        keyCollocations: [
          { word: 'user-friendly interface', ipa: '/ˈjuː.zə ˈfrend.li/', meaning: 'Giao diện thân thiện người dùng', example: 'A user-friendly interface is essential.' },
          { word: 'steep learning curve', ipa: '/stiːp/', meaning: 'Khó học lúc ban đầu', example: 'Avoids a steep learning curve for new members.' },
          { word: 'widespread adoption', ipa: '/əˈdɒp.ʃən/', meaning: 'Sự áp dụng rộng rãi', example: 'Guarantees widespread adoption across departments.' }
        ],
        grammarTips: ['Dùng các liên từ chuyển ý: "First and foremost", "Moreover", "Consequently".'],
        commonPitfalls: ['Chỉ nói 1 ý rồi im lặng suốt 15 giây còn lại.'],
        proStrategyTips: ['Công thức 30s: Lựa chọn (5s) -> Lý do 1 + Giải thích (12s) -> Lý do 2 hoặc Ví dụ (10s) -> Chốt (3s).']
      },
      sampleAnswer: {
        text: 'In my view, ease of use is undeniably the most crucial factor. First, an intuitive platform eliminates a steep learning curve, enabling team members to start collaborating immediately without extensive training sessions. Second, when software is seamless and user-friendly, team compliance and daily adoption remain consistently high. Therefore, usability far outweighs cost or mobile features.',
        scoreLevel: '200/200 (Level 8)',
        analysis: 'Lập luận sắc sảo, cấu trúc 3 phần chặt chẽ, phát triển ý hoàn hảo trong 28 giây.'
      }
    },
    // Q8
    {
      id: `spk-s${setId}-q8`,
      testSetId: setId,
      questionNumber: 8,
      part: 4,
      partName: 'Part 4: Respond Using Information Provided',
      direction: 'In this part of the test, you will answer three questions based on the information provided. You will have 45 seconds to read the information before the questions begin. You will have 3 seconds to prepare and 15 seconds to respond to Questions 8 and 9, and 30 seconds for Question 10.',
      providedInfo: {
        title: `${meta.name} - Executive Conference Itinerary`,
        tableHeaders: ['Time', 'Session / Event', 'Speaker / Facilitator', 'Room Location'],
        tableRows: [
          ['09:00 AM - 10:15 AM', 'Keynote: Next-Gen Industry Trends', 'Dr. Evelyn Vance, VP of Strategy', 'Grand Ballroom A'],
          ['10:30 AM - 11:45 AM', 'Workshop: Digital Workflow Automation', 'Marcus Thorne, Chief Architect', 'Seminar Hall B'],
          ['12:00 PM - 01:15 PM', 'Networking Lunch & Product Demo', 'All Attendees', 'Dining Pavilion'],
          ['01:30 PM - 02:45 PM', 'Panel: Data Governance & Compliance', 'Sarah Jenkins & Team', 'Seminar Hall B'],
          ['03:00 PM - 04:30 PM', 'Interactive Masterclass: Executive Leadership', 'Elena Rostova, Senior Director', 'Grand Ballroom A']
        ],
        additionalNotes: '* Note: Pre-registration is required for the afternoon leadership masterclass due to limited seating capacity.'
      },
      promptText: 'Hello, this is Kevin calling regarding the upcoming conference. Could you please tell me when the morning keynote speech begins and where it will be held?',
      prepTime: 3,
      responseTime: 15,
      hints: {
        structureOutline: [
          '1. Lịch sự xác nhận thông tin.',
          '2. Nêu rõ thời gian bắt đầu và địa điểm chính xác từ bảng dữ liệu.'
        ],
        keyCollocations: [
          { word: 'scheduled to begin', ipa: '/ˈʃedʒ.uːld/', meaning: 'Được lên lịch bắt đầu', example: 'The keynote is scheduled to begin at 9:00 AM.' },
          { word: 'will be hosted in', ipa: '/həʊst/', meaning: 'Sẽ được tổ chức tại', example: 'It will be hosted in Grand Ballroom A.' }
        ],
        grammarTips: ['Dùng thì tương lai hoặc cấu trúc lịch trình: "The keynote session is scheduled from 9:00 AM to 10:15 AM in Grand Ballroom A."'],
        commonPitfalls: ['Nói nhầm phòng hoặc nhầm giờ.'],
        proStrategyTips: ['Luôn bắt đầu bằng câu xác nhận thân thiện: "Certainly, I would be happy to help with that!"']
      },
      sampleAnswer: {
        text: 'Certainly! The morning keynote presentation by Dr. Evelyn Vance is scheduled to begin at 9:00 AM and will be held in Grand Ballroom A.',
        scoreLevel: '200/200 (Level 8)',
        analysis: 'Trả lời nhanh, chuẩn xác 100% dữ liệu, văn phong hỗ trợ khách hàng chuyên nghiệp.'
      }
    },
    // Q9
    {
      id: `spk-s${setId}-q9`,
      testSetId: setId,
      questionNumber: 9,
      part: 4,
      partName: 'Part 4: Respond Using Information Provided',
      direction: 'In this part of the test, you will answer three questions based on the information provided. You will have 3 seconds to prepare after the question and 15 seconds to respond.',
      providedInfo: {
        title: `${meta.name} - Executive Conference Itinerary`,
        tableHeaders: ['Time', 'Session / Event', 'Speaker / Facilitator', 'Room Location'],
        tableRows: [
          ['09:00 AM - 10:15 AM', 'Keynote: Next-Gen Industry Trends', 'Dr. Evelyn Vance, VP of Strategy', 'Grand Ballroom A'],
          ['10:30 AM - 11:45 AM', 'Workshop: Digital Workflow Automation', 'Marcus Thorne, Chief Architect', 'Seminar Hall B'],
          ['12:00 PM - 01:15 PM', 'Networking Lunch & Product Demo', 'All Attendees', 'Dining Pavilion'],
          ['01:30 PM - 02:45 PM', 'Panel: Data Governance & Compliance', 'Sarah Jenkins & Team', 'Seminar Hall B'],
          ['03:00 PM - 04:30 PM', 'Interactive Masterclass: Executive Leadership', 'Elena Rostova, Senior Director', 'Grand Ballroom A']
        ],
        additionalNotes: '* Note: Pre-registration is required for the afternoon leadership masterclass due to limited seating capacity.'
      },
      promptText: 'I heard that the afternoon session on Data Governance has been canceled. Can you verify if that information is accurate?',
      prepTime: 3,
      responseTime: 15,
      hints: {
        structureOutline: [
          '1. Đính chính thông tin hiểu lầm một cách lịch sự.',
          '2. Khẳng định phiên thảo luận vẫn diễn ra bình thường từ 1:30 PM tại Seminar Hall B.'
        ],
        keyCollocations: [
          { word: 'actually, according to the schedule', ipa: '/ˈæk.tʃu.ə.li/', meaning: 'Thực ra, theo lịch trình', example: 'Actually, according to the schedule, that is not correct.' },
          { word: 'proceed as planned', ipa: '/prəˈsiːd/', meaning: 'Diễn ra đúng như kế hoạch', example: 'The panel will proceed as planned.' }
        ],
        grammarTips: ['Đính chính lịch sự: "Actually, that information is incorrect..." hoặc "I am afraid you have been misinformed..."'],
        commonPitfalls: ['Đồng ý nhầm với người gọi thay vì kiểm tra bảng dữ liệu.'],
        proStrategyTips: ['Câu hỏi 9 gần như luôn là dạng "người gọi hiểu sai thông tin" (bị hủy, bị đổi giờ). Hãy sẵn sàng mẫu câu đính chính!']
      },
      sampleAnswer: {
        text: 'Actually, that information is incorrect. The panel on Data Governance and Compliance is still taking place as scheduled from 1:30 PM to 2:45 PM in Seminar Hall B.',
        scoreLevel: '200/200 (Level 8)',
        analysis: 'Đính chính tự tin, cung cấp chính xác thời gian và địa điểm.'
      }
    },
    // Q10
    {
      id: `spk-s${setId}-q10`,
      testSetId: setId,
      questionNumber: 10,
      part: 4,
      partName: 'Part 4: Respond Using Information Provided',
      direction: 'In this part of the test, you will answer three questions based on the information provided. You will have 3 seconds to prepare after the question and 30 seconds to respond.',
      providedInfo: {
        title: `${meta.name} - Executive Conference Itinerary`,
        tableHeaders: ['Time', 'Session / Event', 'Speaker / Facilitator', 'Room Location'],
        tableRows: [
          ['09:00 AM - 10:15 AM', 'Keynote: Next-Gen Industry Trends', 'Dr. Evelyn Vance, VP of Strategy', 'Grand Ballroom A'],
          ['10:30 AM - 11:45 AM', 'Workshop: Digital Workflow Automation', 'Marcus Thorne, Chief Architect', 'Seminar Hall B'],
          ['12:00 PM - 01:15 PM', 'Networking Lunch & Product Demo', 'All Attendees', 'Dining Pavilion'],
          ['01:30 PM - 02:45 PM', 'Panel: Data Governance & Compliance', 'Sarah Jenkins & Team', 'Seminar Hall B'],
          ['03:00 PM - 04:30 PM', 'Interactive Masterclass: Executive Leadership', 'Elena Rostova, Senior Director', 'Grand Ballroom A']
        ],
        additionalNotes: '* Note: Pre-registration is required for the afternoon leadership masterclass due to limited seating capacity.'
      },
      promptText: 'I am particularly interested in any sessions hosted in Seminar Hall B. Could you provide full details about all events occurring in that room?',
      prepTime: 3,
      responseTime: 30,
      hints: {
        structureOutline: [
          '1. Mở đầu: "Sure, there are two separate sessions scheduled in Seminar Hall B."',
          '2. Phiên 1: Giờ + Tên workshop + Người phụ trách (Marcus Thorne).',
          '3. Phiên 2: Giờ + Tên panel + Người phụ trách (Sarah Jenkins & Team).',
          '4. Kết thúc: "I hope this information is helpful!"'
        ],
        keyCollocations: [
          { word: 'there are two scheduled sessions', ipa: '/ˈtuː ˈʃedʒ.uːld/', meaning: 'Có hai phiên làm việc được lên lịch', example: 'There are two scheduled sessions in that hall.' },
          { word: 'led by', ipa: '/led baɪ/', meaning: 'Được dẫn dắt bởi', example: 'A workshop led by Marcus Thorne.' }
        ],
        grammarTips: ['Sử dụng liên từ chỉ thứ tự: "First of all, from 10:30 AM...", "Secondly, from 1:30 PM..."'],
        commonPitfalls: ['Bỏ sót 1 trong 2 phiên hoặc không nêu tên diễn giả.'],
        proStrategyTips: ['Khi gặp câu hỏi liệt kê, hãy đếm số lượng trước (There are two events...) rồi trình bày tuần tự theo mốc thời gian.']
      },
      sampleAnswer: {
        text: 'Certainly! There are two sessions taking place in Seminar Hall B. First, from 10:30 AM to 11:45 AM, there will be a workshop on Digital Workflow Automation conducted by Chief Architect Marcus Thorne. Later in the afternoon, from 1:30 PM to 2:45 PM, Sarah Jenkins and her team will host a panel discussion focusing on Data Governance and Compliance.',
        scoreLevel: '200/200 (Level 8)',
        analysis: 'Liệt kê đầy đủ 2 phiên, dùng từ nối mượt mà, phát âm rõ ràng trong 26 giây.'
      }
    },
    // Q11
    {
      id: `spk-s${setId}-q11`,
      testSetId: setId,
      questionNumber: 11,
      part: 5,
      partName: 'Part 5: Express an Opinion',
      direction: 'In this part of the test, you will give your opinion about a specific topic. You will have 45 seconds to prepare. Then you will have 60 seconds to speak.',
      promptText: `Do you agree or disagree with the following statement?\n\n"Organizations should require all staff members to participate in continuous professional development training programs throughout the year."\n\nSupport your opinion with specific reasons and examples.`,
      prepTime: 45,
      responseTime: 60,
      hints: {
        structureOutline: [
          '1. Mở bài (0-8s): Nêu lập trường rõ ràng: "I strongly agree with the idea that ongoing professional training should be mandatory."',
          '2. Thân bài 1 (8-30s): Luận điểm 1 - Bắt kịp sự đổi mới công nghệ (keep pace with technological innovation). Ví dụ về AI hoặc công cụ mới.',
          '3. Thân bài 2 (30-52s): Luận điểm 2 - Tăng sự gắn kết nhân viên và năng lực cạnh tranh (enhances employee retention & company competitiveness).',
          '4. Kết luận (52-60s): Khẳng định lại giá trị chiến lược dài hạn.'
        ],
        keyCollocations: [
          { word: 'continuous professional development', ipa: '/kənˈtɪn.ju.əs/', meaning: 'Phát triển chuyên môn liên tục', example: 'Continuous professional development is vital.' },
          { word: 'rapidly evolving industry', ipa: '/ɪˈvɒl.vɪŋ/', meaning: 'Ngành công nghiệp phát triển nhanh chóng', example: 'Thrive in a rapidly evolving industry.' },
          { word: 'foster job satisfaction', ipa: '/ˈfɒs.tər/', meaning: 'Nuôi dưỡng sự hài lòng công việc', example: 'Training programs foster job satisfaction.' }
        ],
        grammarTips: ['Sử dụng câu phức và từ nối liên kết ý: "Not only does it upgrade technical competence, but it also fosters..."'],
        commonPitfalls: ['Nói lan man không có ví dụ thực tế hoặc dừng nói trước giây thứ 45.'],
        proStrategyTips: [
          '45s chuẩn bị: Chọn 1 hướng đi (Agree hoặc Disagree). Ghi nhanh 2 từ khóa luận điểm ra giấy nháp.',
          'Phân bổ 60s: Mở bài 1 câu (5s) -> Lý do 1 + Ví dụ (25s) -> Lý do 2 + Ví dụ (25s) -> Kết luận 1 câu (5s).'
        ]
      },
      sampleAnswer: {
        text: 'In my opinion, I strongly agree that organizations should mandate regular professional training for their employees. First and foremost, industries today evolve at an unprecedented speed, especially with advances in automation and artificial intelligence. When workers receive continuous upskilling, they maintain high technical competence, which directly protects the company against obsolescence. For instance, at my organization, regular digital literacy workshops helped our marketing department double campaign output in six months. Furthermore, investing in employee growth significantly elevates staff morale and job retention. When employees realize their employer cares about their career trajectory, they demonstrate far greater loyalty. For these compelling reasons, ongoing training is an indispensable investment.',
        scoreLevel: '200/200 (Level 8)',
        analysis: 'Lập trường kiên định, hai luận điểm có ví dụ thực tế thuyết phục, từ vựng C1 chuẩn mực, phân bổ thời gian chuẩn 56 giây.'
      }
    }
  ];
}

// Helper to generate Set-specific writing questions
export function generateWritingSet(setId: number): WritingQuestion[] {
  const meta = TEST_SETS_METADATA.find(s => s.id === setId) || TEST_SETS_METADATA[0];

  return [
    // Q1 - Picture 1
    {
      id: `wrt-s${setId}-q1`,
      testSetId: setId,
      questionNumber: 1,
      part: 1,
      partName: 'Part 1: Write a Sentence Based on a Picture',
      direction: 'In this part of the test, you will write ONE sentence that is based on a picture. With each picture, you will be given two words or phrases that you must use in your sentence. You can change the forms of the words and you can use the words in any order.',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      promptText: 'Write ONE sentence based on the picture using the two words given.',
      givenKeywords: ['consultant / present', 'while / client / listen'],
      timeLimit: 96,
      hints: {
        structureOutline: [
          '1. Xác định hai từ khóa bắt buộc: consultant / present và while / client / listen.',
          '2. Dùng liên từ "while" để ghép thành 1 câu phức hoàn chỉnh.',
          '3. Chia thì Hiện tại tiếp diễn hoặc Quá khứ đơn nhất quán.'
        ],
        keyCollocations: [
          { word: 'present findings', ipa: '/prɪˈzent/', meaning: 'Trình bày các phát hiện/báo cáo', example: 'The consultant is presenting strategic findings.' }
        ],
        grammarTips: ['BẮT BUỘC: Viết đúng 1 câu duy nhất. Cấu trúc gợi ý: "While the consultant is presenting financial charts, the clients are listening attentively."'],
        commonPitfalls: ['Viết thành 2 câu tách biệt bằng dấu chấm (.) -> Bị trừ điểm nặng!'],
        proStrategyTips: ['Kiểm tra nhanh 3 yếu tố trước khi chuyển câu: 1) Đủ 2 từ khóa chưa? 2) Đúng 1 câu chưa? 3) Chủ ngữ và động từ đã hòa hợp chưa?']
      },
      sampleAnswer: {
        text: 'While the senior consultant is presenting the project roadmap, the clients are listening attentively around the conference table.',
        scoreLevel: '200/200 (Level 9)',
        analysis: 'Sử dụng cấu trúc câu phức với "While", chia đúng thì tiếp diễn, dùng đúng cả 2 từ khóa.'
      }
    },
    // Q2 - Picture 2
    {
      id: `wrt-s${setId}-q2`,
      testSetId: setId,
      questionNumber: 2,
      part: 1,
      partName: 'Part 1: Write a Sentence Based on a Picture',
      direction: 'Write ONE sentence based on the picture using the two words given.',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      promptText: 'Write ONE sentence based on the picture using the two words given.',
      givenKeywords: ['empty / room', 'before / meeting / start'],
      timeLimit: 96,
      hints: {
        structureOutline: [
          '1. Từ khóa: empty / room và before / meeting / start.',
          '2. Ghép bằng liên từ thời gian "before".'
        ],
        keyCollocations: [
          { word: 'tidy and prepared', ipa: '/ˈtaɪ.di/', meaning: 'Ngăn nắp và sẵn sàng', example: 'The conference room is empty and fully prepared.' }
        ],
        grammarTips: ['Dùng "before" làm liên từ: "The spacious conference room is completely empty before the morning meeting starts."'],
        commonPitfalls: ['Quên thêm "s" ở động từ ngôi thứ ba số ít (starts).'],
        proStrategyTips: ['Đừng cố viết câu quá phức tạp; độ chính xác ngữ pháp 100% là ưu tiên số 1 của Part 1.']
      },
      sampleAnswer: {
        text: 'The large conference room remains empty and quiet before the executive strategy meeting starts.',
        scoreLevel: '200/200 (Level 9)',
        analysis: 'Câu văn tự nhiên, chính xác tuyệt đối về thì và hòa hợp chủ vị.'
      }
    },
    // Q3 - Picture 3
    {
      id: `wrt-s${setId}-q3`,
      testSetId: setId,
      questionNumber: 3,
      part: 1,
      partName: 'Part 1: Write a Sentence Based on a Picture',
      direction: 'Write ONE sentence based on the picture using the two words given.',
      imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      promptText: 'Write ONE sentence based on the picture using the two words given.',
      givenKeywords: ['engineer / inspect', 'because / malfunction'],
      timeLimit: 96,
      hints: {
        structureOutline: [
          '1. Từ khóa: engineer / inspect và because / malfunction.',
          '2. Dùng mệnh đề nguyên nhân "because".'
        ],
        keyCollocations: [
          { word: 'inspect thoroughly', ipa: '/ɪnˈspekt/', meaning: 'Kiểm tra kỹ lưỡng', example: 'The engineer is inspecting the server racks.' }
        ],
        grammarTips: ['Cấu trúc: "The certified engineer is inspecting the hardware system because a minor malfunction occurred earlier."'],
        commonPitfalls: ['Dùng "because of" thay vì "because" khi đi kèm mệnh đề.'],
        proStrategyTips: ['Kiểm tra đuôi số ít/số nhiều của danh từ.']
      },
      sampleAnswer: {
        text: 'The engineer is carefully inspecting the server equipment because a network malfunction was detected this morning.',
        scoreLevel: '200/200 (Level 9)',
        analysis: 'Sử dụng liên từ "because" chuẩn xác nối 2 mệnh đề có nghĩa chặt chẽ.'
      }
    },
    // Q4 - Picture 4
    {
      id: `wrt-s${setId}-q4`,
      testSetId: setId,
      questionNumber: 4,
      part: 1,
      partName: 'Part 1: Write a Sentence Based on a Picture',
      direction: 'Write ONE sentence based on the picture using the two words given.',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
      promptText: 'Write ONE sentence based on the picture using the two words given.',
      givenKeywords: ['customer / pay', 'credit card / counter'],
      timeLimit: 96,
      hints: {
        structureOutline: [
          '1. Từ khóa: customer / pay và credit card / counter.',
          '2. Dùng giới từ chỉ nơi chốn "at the counter" và phương thức "with a credit card".'
        ],
        keyCollocations: [
          { word: 'pay by credit card', ipa: '/peɪ baɪ/', meaning: 'Thanh toán bằng thẻ tín dụng', example: 'Paying with a contactless credit card.' }
        ],
        grammarTips: ['"The customer is paying for her purchases with a credit card at the checkout counter."'],
        commonPitfalls: ['Quên mạo từ "a" trước credit card hoặc "the" trước counter.'],
        proStrategyTips: ['Mẹo đạt điểm tối đa Part 1: Danh từ đếm được luôn phải có mạo từ (a/an/the) hoặc ở dạng số nhiều (-s).']
      },
      sampleAnswer: {
        text: 'A smiling customer is paying for her merchandise with a credit card at the checkout counter.',
        scoreLevel: '200/200 (Level 9)',
        analysis: 'Câu hoàn chỉnh, từ vựng tự nhiên, miêu tả chân thực bức ảnh.'
      }
    },
    // Q5 - Picture 5
    {
      id: `wrt-s${setId}-q5`,
      testSetId: setId,
      questionNumber: 5,
      part: 1,
      partName: 'Part 1: Write a Sentence Based on a Picture',
      direction: 'Write ONE sentence based on the picture using the two words given.',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      promptText: 'Write ONE sentence based on the picture using the two words given.',
      givenKeywords: ['worker / organize', 'warehouse / order'],
      timeLimit: 96,
      hints: {
        structureOutline: [
          '1. Từ khóa: worker / organize và warehouse / order.',
          '2. Dùng mệnh đề quan hệ hoặc cụm từ chỉ mục đích "in order to".'
        ],
        keyCollocations: [
          { word: 'logistics warehouse', ipa: '/ləˈdʒɪs.tɪks/', meaning: 'Kho vận hậu cần', example: 'Organizing parcels in the warehouse.' }
        ],
        grammarTips: ['"The warehouse worker is organizing cardboard boxes in order to prepare shipments for dispatch."'],
        commonPitfalls: ['Sai dạng động từ sau "in order to" (phải là V-nguyên mẫu).'],
        proStrategyTips: ['Tận dụng các liên từ chỉ mục đích (so that, in order to) để câu văn mang tính logic cao.']
      },
      sampleAnswer: {
        text: 'The warehouse workers are diligently organizing inventory packages in order to fulfill overseas customer orders.',
        scoreLevel: '200/200 (Level 9)',
        analysis: 'Sử dụng cấu trúc "in order to fulfill" kết hợp hoàn hảo cả 2 từ khóa.'
      }
    },
    // Q6 - Email 1
    {
      id: `wrt-s${setId}-q6`,
      testSetId: setId,
      questionNumber: 6,
      part: 2,
      partName: 'Part 2: Respond to a Written Request',
      direction: 'In this part of the test, you will show how well you can write a response to an email. You will have 10 minutes to read and answer each email.',
      incomingEmail: {
        from: 'hannah.schmidt@globalventures.com',
        to: 'participants@globalventures.com',
        subject: `Upcoming ${meta.theme} Workshop Registration`,
        date: 'October 12, 10:15 AM',
        body: `Dear Colleagues,\n\nWe are finalizing the roster for our upcoming workshop on "${meta.titleVi}". Due to room capacity constraints, we need to confirm your participation by tomorrow afternoon.\n\nCould you please let us know:\n1. Will you be attending in person or joining virtually via our streaming link?\n2. What specific topic or case study would you like our guest speaker to address?\n\nThank you for your prompt cooperation.\n\nBest regards,\nHannah Schmidt\nEvent Coordinator`,
        requirements: [
          'State your preferred attendance mode (in-person or virtual) with a reason.',
          'Propose one specific topic or case study for the speaker.',
          'Ask one question regarding workshop materials or schedule.'
        ]
      },
      promptText: 'Respond to the email as if you are a participant. In your email, respond to Hannah Schmidt and address all 3 requirements.',
      timeLimit: 600,
      hints: {
        structureOutline: [
          '1. Lời chào trang trọng: "Dear Ms. Schmidt,"',
          '2. Cảm ơn thư và khẳng định hình thức tham gia (Yêu cầu 1).',
          '3. Đề xuất chủ đề/case study quan tâm (Yêu cầu 2).',
          '4. Đặt 1 câu hỏi về tài liệu hoặc lịch trình (Yêu cầu 3).',
          '5. Lời kết và ký tên: "Best regards, [Tên của bạn]"'
        ],
        keyCollocations: [
          { word: 'attend in person', ipa: '/əˈtend/', meaning: 'Tham dự trực tiếp', example: 'I plan to attend in person.' },
          { word: 'practical case study', ipa: '/ˈpræk.tɪ.kəl/', meaning: 'Nghiên cứu tình huống thực tế', example: 'A practical case study on digital workflows.' }
        ],
        grammarTips: ['Đảm bảo có dấu chấm hỏi (?) cho câu hỏi ở Yêu cầu 3. Giám khảo chấm rất kỹ chi tiết này.'],
        commonPitfalls: ['Quên hoàn thành 1 trong 3 yêu cầu trong đề bài -> Mất điểm Task Completion.'],
        proStrategyTips: ['10 phút viết thư: 2 phút đọc & vạch ý -> 6 phút viết -> 2 phút soát lỗi ngữ pháp và dấu câu.']
      },
      sampleAnswer: {
        text: `Dear Ms. Schmidt,

Thank you for reaching out regarding the upcoming workshop. 

I am pleased to confirm that I will be attending the session in person, as I believe direct face-to-face interaction during the breakout activities will be immensely valuable. Regarding the guest speaker's presentation, I would greatly appreciate it if they could present a practical case study examining how mid-sized enterprises successfully manage workflow transitions.

Additionally, could you please clarify whether printed handout materials will be distributed at the venue, or if we should download the digital slides beforehand?

Thank you for organizing this event, and I look forward to participating.

Best regards,
Alexander Nguyen
Project Specialist`,
        scoreLevel: '200/200 (Level 9)',
        analysis: 'Trả lời đầy đủ cả 3 yêu cầu, văn phong thư thương mại lịch sự, bố cục mạch lạc.'
      }
    },
    // Q7 - Email 2
    {
      id: `wrt-s${setId}-q7`,
      testSetId: setId,
      questionNumber: 7,
      part: 2,
      partName: 'Part 2: Respond to a Written Request',
      direction: 'In this part of the test, you will show how well you can write a response to an email. You will have 10 minutes to read and answer each email.',
      incomingEmail: {
        from: 'support@apexcloudservices.com',
        to: 'michael.tran@innovatech.com',
        subject: 'Scheduled System Maintenance Notification',
        date: 'October 15, 03:45 PM',
        body: `Dear Client,\n\nPlease be advised that our primary database servers will undergo urgent scheduled maintenance this Saturday between 11:00 PM and 04:00 AM UTC. During this maintenance window, your cloud administrative portal may experience brief intermittent outages.\n\nWe apologize for any inconvenience. If this schedule interferes with critical ongoing operations, please contact our support team immediately.\n\nSincerely,\nApex Technical Support Team`,
        requirements: [
          'Acknowledge the notification and express an operational concern about weekend workflows.',
          'Request an alternative timeframe or contingency plan for data backups.',
          'Ask two specific questions regarding emergency support availability.'
        ]
      },
      promptText: 'Respond to the email as Michael Tran. Address all 3 requirements clearly and professionally.',
      timeLimit: 600,
      hints: {
        structureOutline: [
          '1. Lời chào: "Dear Apex Technical Support Team,"',
          '2. Bày tỏ lo ngại về công việc cuối tuần (Yêu cầu 1).',
          '3. Yêu cầu phương án dự phòng sao lưu dữ liệu (Yêu cầu 2).',
          '4. Đặt đúng 2 câu hỏi về hỗ trợ khẩn cấp (Yêu cầu 3).',
          '5. Lời kết: "Sincerely, Michael Tran"'
        ],
        keyCollocations: [
          { word: 'intermittent outages', ipa: '/ˌɪn.təˈmɪt.ənt/', meaning: 'Mất kết nối chập chờn ngắt quãng', example: 'Experience intermittent outages.' },
          { word: 'contingency plan', ipa: '/kənˈtɪn.dʒən.si/', meaning: 'Kế hoạch dự phòng', example: 'Request a contingency plan for our database.' }
        ],
        grammarTips: ['Dùng câu hỏi gián tiếp lịch sự: "Could you please inform me whether...?" và câu hỏi trực tiếp: "Will a dedicated technician be on call...?"'],
        commonPitfalls: ['Chỉ hỏi 1 câu thay vì 2 câu như đề bài yêu cầu.'],
        proStrategyTips: ['Đếm kỹ số lượng câu hỏi trước khi nộp bài. Đề bài yêu cầu "two questions" thì phải có đúng 2 dấu ? rõ ràng.']
      },
      sampleAnswer: {
        text: `Dear Apex Technical Support Team,

Thank you for notifying us in advance about the upcoming server maintenance on Saturday.

While we understand the necessity of regular system upgrades, this timeframe raises serious concerns for our operations, as our overseas sales division processes substantial transaction volumes during those specific hours. Therefore, we kindly request that you provide a comprehensive contingency plan to ensure our automated data backups remain uninterrupted.

Furthermore, I have two specific questions regarding your emergency support:
1. Will a dedicated technical support specialist be available via telephone should an unexpected outage occur?
2. How quickly will your engineering team respond if data synchronization issues arise post-maintenance?

We appreciate your prompt attention to this matter.

Sincerely,
Michael Tran
IT Operations Director`,
        scoreLevel: '200/200 (Level 9)',
        analysis: 'Đáp ứng chính xác 100% yêu cầu đề bài, văn phong chuyên nghiệp và quyết đoán.'
      }
    },
    // Q8 - Opinion Essay
    {
      id: `wrt-s${setId}-q8`,
      testSetId: setId,
      questionNumber: 8,
      part: 3,
      partName: 'Part 3: Write an Opinion Essay',
      direction: 'In Question 8, you will write an essay in response to a question that asks you to state, explain, and support your opinion. Typically, an effective essay will contain a minimum of 300 words. You will have 30 minutes to plan and write your essay.',
      promptText: `Some people believe that modern organizations should encourage their employees to make independent decisions without constantly consulting managers. Other people think that all major operational choices should be strictly approved by supervisors.\n\nWhich view do you agree with? Give specific reasons and examples to support your opinion.`,
      minWords: 300,
      timeLimit: 1800,
      hints: {
        structureOutline: [
          '1. Introduction (40-50 words): Dẫn dắt bối cảnh quản trị -> Thesis Statement: Ủng hộ trao quyền quyết định độc lập (Employee Empowerment).',
          '2. Body 1 (100-120 words): Luận điểm 1 - Nâng cao tốc độ phản hồi và năng suất kinh doanh (Accelerates operational agility and client responsiveness).',
          '3. Body 2 (100-120 words): Luận điểm 2 - Nuôi dưỡng tinh thần trách nhiệm và lòng trung thành (Fosters workplace accountability & leadership readiness).',
          '4. Conclusion (40-50 words): Tóm lược 2 luận điểm và khuyến nghị cân đối với các chính sách kiểm soát.'
        ],
        keyCollocations: [
          { word: 'employee empowerment', ipa: '/ɪmˈpaʊə.mənt/', meaning: 'Sự trao quyền cho nhân viên', example: 'Employee empowerment drives rapid innovation.' },
          { word: 'bureaucratic bottlenecks', ipa: '/ˌbjʊə.rəˈkræt.ɪk/', meaning: 'Điểm nghẽn quan liêu', example: 'Eliminates cumbersome bureaucratic bottlenecks.' },
          { word: 'operational agility', ipa: '/əˈdʒɪl.ə.ti/', meaning: 'Sự linh hoạt trong vận hành', example: 'Maintains high operational agility in competitive markets.' }
        ],
        grammarTips: [
          'Dùng cấu trúc câu chẻ (Cleft sentence) để nhấn mạnh: "It is autonomy, rather than micromanagement, that unlocks creative potential."',
          'Dùng đảo ngữ C1: "Not only does autonomy accelerate problem resolution, but it also elevates job satisfaction."'
        ],
        commonPitfalls: ['Viết dưới 280 từ (sẽ khó đạt điểm 5/5 ETS).', 'Không chia thành 4 đoạn rõ ràng.'],
        proStrategyTips: [
          'Phân bổ 30 phút viết bài:',
          '- Phút 0-3: Đọc đề & lập dàn ý (Brainstorming map).',
          '- Phút 3-25: Viết 4 đoạn theo công thức PEEL.',
          '- Phút 25-30: Soát lỗi ngữ pháp, thì động từ và liên từ.'
        ]
      },
      sampleAnswer: {
        text: `In today's dynamic global marketplace, the degree of autonomy granted to corporate employees represents a defining pillar of organizational philosophy. While some executives advocate for strict managerial oversight to minimize mistakes, I firmly contend that empowering workers to make independent operational decisions yields vastly superior benefits for agility and employee dedication.

First and foremost, decentralizing decision-making dramatically enhances corporate responsiveness and problem-solving efficiency. When frontline staff must seek multi-tier managerial approval for every routine challenge, critical momentum is squandered within bureaucratic bottlenecks. In stark contrast, when professionals possess the authority to resolve client grievances or optimize internal workflows immediately, customer satisfaction surges. For instance, at my previous consulting agency, permitting account managers to authorize project modifications without executive sign-off reduced client resolution time from three business days to under two hours, directly elevating client retention rates.

Secondly, granting autonomy serves as a profound catalyst for cultivating personal accountability and nurturing future leadership talent. When staff members are micromanaged, they inevitably develop intellectual complacency, viewing their roles merely as mechanical task execution. Conversely, when employees recognize that management genuinely trusts their judgment, they demonstrate heightened psychological ownership over their outcomes. This empowerment motivates individuals to hone their critical thinking faculties and proactively identify operational innovations.

In conclusion, while clear supervisory guardrails remain essential for overarching corporate strategy, fostering day-to-day employee autonomy is undeniably vital. Organizations that cultivate a culture of trust and decentralized initiative will consistently outpace rigid competitors in innovation, workforce morale, and long-term commercial success.`,
        scoreLevel: '200/200 (Level 9)',
        analysis: 'Độ dài 335 từ, từ vựng C1 phong phú, cấu trúc 4 đoạn chặt chẽ, luận cứ thuyết phục đạt điểm tối đa ETS.'
      }
    }
  ];
}
