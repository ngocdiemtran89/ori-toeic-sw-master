import type { SpeakingQuestion, WritingQuestion } from '../types';

export const SPEAKING_QUESTIONS: SpeakingQuestion[] = [
  // PART 1: Read a Text Aloud (Q1 - Q2)
  {
    id: 'spk-q1',
    questionNumber: 1,
    part: 1,
    partName: 'Part 1: Read a Text Aloud',
    direction: 'In this part of the test, you will read aloud the text on the screen. You will have 45 seconds to prepare. Then you will have 45 seconds to read the text aloud.',
    promptText: `Thank you for tuning in to WXYZ Radio's morning financial brief. Today, shares of Apex Technology surged following the announcement of their new eco-friendly smartphone line. In local news, the annual Riverside Arts Festival kicks off this Friday, featuring live jazz, handmade pottery, and gourmet food trucks. Be sure to arrive early, as parking around the venue is strictly limited. Now, let's head over to David for the weekend weather outlook.`,
    prepTime: 45,
    responseTime: 45,
    hints: {
      structureOutline: [
        'Bước 1: Quét nhanh các từ có đuôi khó (-ed, -s, -ly, compound nouns).',
        'Bước 2: Xác định cụm liệt kê A, B, and C để lên giọng ở A ↗, B ↗ và xuống giọng ở C ↘.',
        'Bước 3: Chia ngắt nhịp (chunking) theo cụm giới từ và mệnh đề phụ thuộc.'
      ],
      keyCollocations: [
        { word: 'eco-friendly', ipa: '/ˌiː.kəʊˈfrend.li/', meaning: 'Thân thiện với môi trường', example: 'eco-friendly smartphone line' },
        { word: 'surged', ipa: '/sɜːdʒd/', meaning: 'Tăng vọt mạnh mẽ', example: 'Apex Technology shares surged' },
        { word: 'strictly limited', ipa: '/ˈstrɪkt.li ˈlɪm.ɪ.tɪd/', meaning: 'Giới hạn nghiêm ngặt', example: 'Parking around the venue is strictly limited' },
        { word: 'gourmet', ipa: '/ˈɡʊə.meɪ/', meaning: 'Ẩm thực cao cấp, sành ăn', example: 'Gourmet food trucks' }
      ],
      grammarTips: [
        'Quy tắc liệt kê (Listing Intonation): "live jazz ↗, handmade pottery ↗, and gourmet food trucks ↘".',
        'Phát âm đuôi -ed: "surged" phát âm là /d/, không đọc thành /id/!'
      ],
      commonPitfalls: [
        'Đọc vấp tên riêng hoặc từ viết tắt (WXYZ: đọc từng chữ cái W-X-Y-Z).',
        'Quên ngắt nghỉ ở dấu phẩy khiến câu bị trôi và hụt hơi.'
      ]
    },
    sampleAnswer: {
      text: "Thank you for tuning in to WXYZ Radio's morning financial brief. Today, shares of Apex Technology surged following the announcement of their new eco-friendly smartphone line. In local news, the annual Riverside Arts Festival kicks off this Friday, featuring live jazz ↗, handmade pottery ↗, and gourmet food trucks ↘. Be sure to arrive early, as parking around the venue is strictly limited. Now, let's head over to David for the weekend weather outlook.",
      scoreLevel: '200/200 (Level 8)',
      analysis: 'Ngắt câu nhịp nhàng, phát âm âm cuối chuẩn xác (-ged, -cks, -ks), ngữ điệu liệt kê chuẩn xác 3 nhịp.'
    }
  },
  {
    id: 'spk-q2',
    questionNumber: 2,
    part: 1,
    partName: 'Part 1: Read a Text Aloud',
    direction: 'In this part of the test, you will read aloud the text on the screen. You will have 45 seconds to prepare. Then you will have 45 seconds to read the text aloud.',
    promptText: `Attention all shoppers! In celebration of our twentieth anniversary, Metro Department Store is offering exclusive discounts throughout the entire weekend. Enjoy up to forty percent off on designer clothing, kitchen cookware, and home electronics. Additionally, customers who spend over one hundred dollars will receive a complimentary gift card at checkout. If you need any assistance, our friendly floor staff members are ready to help. Thank you for choosing Metro, and happy shopping!`,
    prepTime: 45,
    responseTime: 45,
    hints: {
      structureOutline: [
        'Bước 1: Giọng điệu thông báo trong siêu thị (cheerful, welcoming, engaging).',
        'Bước 2: Nhấn trọng âm các số từ và khuyến mãi (twentieth, forty percent off, one hundred dollars).',
        'Bước 3: Lên giọng liệt kê: "designer clothing ↗, kitchen cookware ↗, and home electronics ↘".'
      ],
      keyCollocations: [
        { word: 'exclusive discounts', ipa: '/ɪkˈskluː.sɪv ˈdɪs.kaʊnts/', meaning: 'Ưu đãi độc quyền', example: 'Offering exclusive discounts this weekend.' },
        { word: 'complimentary', ipa: '/ˌkɒm.plɪˈmen.tər.i/', meaning: 'Miễn phí, quà tặng kèm', example: 'Receive a complimentary gift card.' },
        { word: 'at checkout', ipa: '/ət ˈtʃek.aʊt/', meaning: 'Tại quầy thanh toán', example: 'Collect your voucher at checkout.' }
      ],
      grammarTips: [
        'Đọc nối âm (linking): "spend over" -> /spend-oʊ-vər/, "ready to help" -> /redi-tə-help/.',
        'Xuống giọng ở câu kết: "Thank you for choosing Metro, and happy shopping! ↘"'
      ],
      commonPitfalls: [
        'Đọc sai từ "complimentary" thành /kəmˈplaɪ-/.',
        'Đọc từ "anniversary" không chuẩn trọng âm (/ˌæn.ɪˈvɜː.sər.i/).'
      ]
    },
    sampleAnswer: {
      text: "Attention all shoppers! In celebration of our twentieth anniversary, Metro Department Store is offering exclusive discounts throughout the entire weekend. Enjoy up to forty percent off on designer clothing ↗, kitchen cookware ↗, and home electronics ↘. Additionally, customers who spend over one hundred dollars will receive a complimentary gift card at checkout. If you need any assistance, our friendly floor staff members are ready to help. Thank you for choosing Metro, and happy shopping!",
      scoreLevel: '200/200 (Level 8)',
      analysis: 'Văn phong quảng cáo tươi vui, ngữ điệu mời chào tự nhiên, các con số được phát âm rõ ràng.'
    }
  },

  // PART 2: Describe a Picture (Q3 - Q4)
  {
    id: 'spk-q3',
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
        '1. Tổng quan (Where & Who): "This picture was taken in a modern office / collaborative workspace."',
        '2. Tiêu điểm chính (Main focus): 3-4 đồng nghiệp đang tập trung xem màn hình laptop.',
        '3. Đồ vật & Chi tiết phụ (Surroundings): Cốc cà phê, sổ tay, cửa kính lớn đón ánh sáng tự nhiên.',
        '4. Cảm nhận chung (Impression): "Overall, the atmosphere appears productive and energetic."'
      ],
      keyCollocations: [
        { word: 'collaborative workspace', ipa: '/kəˈlæb.ər.ə.tɪv/', meaning: 'Không gian làm việc cộng tác', example: 'They are gathered in a collaborative workspace.' },
        { word: 'brainstorming ideas', ipa: '/ˈbreɪn.stɔː.mɪŋ/', meaning: 'Động não, thảo luận ý tưởng', example: 'They seem to be brainstorming ideas for a project.' },
        { word: 'leaning forward', ipa: '/ˈliː.nɪŋ/', meaning: 'Nghiêng người về phía trước', example: 'The woman on the left is leaning forward attentively.' }
      ],
      grammarTips: [
        'Dùng Thì Hiện Tại Tiếp Diễn (Present Continuous) cho tất cả hành động: "A young woman is pointing at the laptop screen while the man is jotting down notes."',
        'Dùng các cụm định vị: "In the foreground", "On the wooden table", "In the background".'
      ],
      commonPitfalls: [
        'Dành quá 10 giây chỉ để mô tả màu áo của từng người.',
        'Dùng thì quá khứ đơn (Past Simple) thay vì hiện tại tiếp diễn.'
      ]
    },
    sampleAnswer: {
      text: "This picture shows a group of young professionals collaborating in a brightly lit office. In the center, several colleagues are gathered around a wooden table, looking intently at a laptop screen. One woman is smiling and gesturing with her hand, while another person is taking notes. On the table, I can see coffee mugs and paperwork. In the background, large windows let in plenty of natural sunlight. Overall, the atmosphere seems friendly and productive.",
      scoreLevel: '200/200 (Level 8)',
      analysis: 'Cấu trúc bài nói mạch lạc 4 phần, sử dụng đa dạng thì tiếp diễn và từ vựng công sở chuyên nghiệp.'
    }
  },
  {
    id: 'spk-q4',
    questionNumber: 4,
    part: 2,
    partName: 'Part 2: Describe a Picture',
    direction: 'In this part of the test, you will describe the picture on the screen in as much detail as you can. You will have 45 seconds to prepare. Then you will have 30 seconds to speak.',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80',
    promptText: 'Describe the picture shown on the screen.',
    prepTime: 45,
    responseTime: 30,
    hints: {
      structureOutline: [
        '1. Bối cảnh chung: "This photo captures a bustling outdoor market / grocery store produce section."',
        '2. Hành động của người: Một khách hàng đang cẩn thận chọn hoa quả tươi từ các kệ trưng bày.',
        '3. Đồ vật & Bố cục: Các sọt gỗ đầy ắp trái cây tươi (cam, táo, rau củ) được xếp ngay ngắn.',
        '4. Cảm nhận chung: "The scene looks vibrant, lively, and colorful."'
      ],
      keyCollocations: [
        { word: 'wooden crates', ipa: '/ˈwʊd.ən kreɪts/', meaning: 'Các thùng/sọt gỗ', example: 'Fresh produce displayed neatly in wooden crates.' },
        { word: 'inspecting the produce', ipa: '/ɪnˈspekt.ɪŋ/', meaning: 'Kiểm tra nông sản/hoa quả', example: 'A shopper is carefully inspecting the produce.' },
        { word: 'arranged in rows', ipa: '/əˈreɪndʒd/', meaning: 'Được xếp thành từng hàng', example: 'Apples and citrus fruits are arranged in rows.' }
      ],
      grammarTips: [
        'Cấu trúc bị động thể hiện trạng thái: "Fruits are neatly arranged in wooden crates."',
        'Hiện tại tiếp diễn: "The customer is reaching out her hand to pick up an orange."'
      ],
      commonPitfalls: [
        'Quên mô tả màu sắc và sự tươi mới của hoa quả.',
        'Nói quá chậm khiến hết 30s trước khi kịp đưa ra câu nhận xét tổng quát.'
      ]
    },
    sampleAnswer: {
      text: "This picture was taken in an open-air market with vibrant displays of fresh produce. In the foreground, colorful wooden crates are filled with oranges, apples, and lemons. A customer on the right is reaching out to inspect the quality of the fruits. In the background, other shoppers are browsing through the stalls under awnings. Overall, the market looks bustling, wholesome, and inviting.",
      scoreLevel: '200/200 (Level 8)',
      analysis: 'Mô tả từ tiền cảnh (foreground) đến hậu cảnh (background) rất mượt mà, sử dụng từ vựng chỉ màu sắc và chủng loại đa dạng.'
    }
  },

  // PART 3: Respond to Questions (Q5 - Q7)
  {
    id: 'spk-q5',
    questionNumber: 5,
    part: 3,
    partName: 'Part 3: Respond to Questions',
    direction: 'In this part of the test, you will answer three questions. You will have 3 seconds to prepare after you hear each question. You will have 15 seconds to respond to Questions 5 and 6, and 30 seconds to respond to Question 7.',
    promptText: 'Imagine that an international consumer goods company is conducting market research on shopping habits.\n\nQuestion 5: "How often do you go shopping for clothes, and who do you usually go with?"',
    prepTime: 3,
    responseTime: 15,
    hints: {
      structureOutline: [
        'Trả lời thẳng vào 2 câu hỏi trong 3 giây đầu: "I usually go shopping for clothes once or twice a month..."',
        'Nêu đối tượng đi cùng: "and I typically go with my close friends / sister."',
        'Thêm 1 câu bổ trợ ngắn: "because they always give me honest fashion advice."'
      ],
      keyCollocations: [
        { word: 'on a monthly basis', ipa: '/ˈmʌnθ.li ˈbeɪ.sɪs/', meaning: 'Hàng tháng', example: 'I shop for clothes on a monthly basis.' },
        { word: 'valuable fashion advice', ipa: '/ˈvæl.jə.bəl/', meaning: 'Lời khuyên thời trang hữu ích', example: 'They give me valuable fashion advice.' }
      ],
      grammarTips: [
        'Thì hiện tại đơn: "I usually go... / I prefer going..."',
        'Nối 2 vế bằng liên từ: "...not only because... but also..."'
      ],
      commonPitfalls: [
        'Chỉ trả lời tần suất mà quên mất vế "who do you usually go with".'
      ]
    },
    sampleAnswer: {
      text: "I usually shop for clothes about once a month, and I typically go with my best friend because she has great fashion taste and helps me pick the best outfits.",
      scoreLevel: '200/200 (Level 8)',
      analysis: 'Trả lời trọn vẹn cả 2 vế trong 12 giây, phát âm rõ ràng, không ngắc ngứ.'
    }
  },
  {
    id: 'spk-q6',
    questionNumber: 6,
    part: 3,
    partName: 'Part 3: Respond to Questions',
    direction: 'In this part of the test, you will answer three questions. You will have 3 seconds to prepare after you hear each question. You will have 15 seconds to respond to Questions 5 and 6, and 30 seconds to respond to Question 7.',
    promptText: 'Question 6: "Do you prefer shopping at large shopping malls or small local boutiques? Why?"',
    prepTime: 3,
    responseTime: 15,
    hints: {
      structureOutline: [
        'Khẳng định sở thích: "I definitely prefer shopping at large shopping malls..."',
        'Đưa ra 2 lý do nhanh: "because they offer a huge variety of international brands and convenient amenities like dining and parking."'
      ],
      keyCollocations: [
        { word: 'one-stop shopping', ipa: '/wʌn stɒp/', meaning: 'Mua sắm tích hợp tất cả trong một', example: 'Shopping malls offer a convenient one-stop experience.' },
        { word: 'wide assortment of brands', ipa: '/əˈsɔːt.mənt/', meaning: 'Đa dạng các thương hiệu', example: 'They house a wide assortment of global brands.' }
      ],
      grammarTips: [
        'Cấu trúc so sánh hơn: "Large malls are much more convenient than small boutiques."'
      ],
      commonPitfalls: [
        'Ngập ngừng quá 5 giây vì phân vân chọn bên nào. Hãy chọn ngay phương án bạn có nhiều từ vựng nhất!'
      ]
    },
    sampleAnswer: {
      text: "I definitely prefer large shopping malls because they offer a wide variety of brands under one roof, along with convenient dining options and entertainment.",
      scoreLevel: '200/200 (Level 8)',
      analysis: 'Chọn lựa dứt khoát, đưa ra 2 lý do hợp lý, kiểm soát thời gian hoàn hảo (13 giây).'
    }
  },
  {
    id: 'spk-q7',
    questionNumber: 7,
    part: 3,
    partName: 'Part 3: Respond to Questions',
    direction: 'In this part of the test, you will answer three questions. You will have 3 seconds to prepare after you hear each question. You will have 15 seconds to respond to Questions 5 and 6, and 30 seconds to respond to Question 7.',
    promptText: 'Question 7: "What is the most important factor you consider when buying an item of clothing: the price, the brand, or the quality? Why?"',
    prepTime: 3,
    responseTime: 30,
    hints: {
      structureOutline: [
        '1. Stance (3s): "For me, the most crucial factor is undoubtedly the quality of the clothing."',
        '2. Reason 1 (10s): Quần áo chất lượng cao sẽ bền, giữ được phom dáng và mặc thoải mái (durable & comfortable).',
        '3. Reason 2 (10s): Tiết kiệm tiền về lâu dài vì không phải mua đồ mới liên tục (cost-effective in the long run).',
        '4. Conclusion (5s): "Therefore, I would always prioritize quality over price or brand prestige."'
      ],
      keyCollocations: [
        { word: 'durability and comfort', ipa: '/ˌdjʊə.rəˈbɪl.ə.ti/', meaning: 'Độ bền và sự thoải mái', example: 'High quality ensures long-lasting durability.' },
        { word: 'cost-effective in the long run', ipa: '/kɒst ɪˈfek.tɪv/', meaning: 'Tiết kiệm chi phí về lâu dài', example: 'Investing in quality is more cost-effective.' },
        { word: 'brand prestige', ipa: '/preˈstiːʒ/', meaning: 'Danh tiếng thương hiệu', example: 'I care more about craftsmanship than brand prestige.' }
      ],
      grammarTips: [
        'Liên từ nhượng bộ: "Even though high-quality items might be more expensive initially, they last much longer."'
      ],
      commonPitfalls: [
        'Chọn cả 3 yếu tố khiến bài nói lan man và không kịp kết bài trong 30 giây.'
      ]
    },
    sampleAnswer: {
      text: "For me, quality is undoubtedly the most important factor when purchasing clothing. First of all, well-made clothes are far more durable and comfortable to wear throughout the day. Even if they cost slightly more initially, they do not wear out easily, making them much more cost-effective in the long run. In contrast, cheap items quickly lose their shape after a few washes. Therefore, I always prioritize fabric quality over brand prestige.",
      scoreLevel: '200/200 (Level 8)',
      analysis: 'Lập luận chặt chẽ có so sánh tương phản, sử dụng từ vựng C1 sắc bén, hoàn thành đúng 28 giây.'
    }
  },

  // PART 4: Respond Using Information Provided (Q8 - Q10)
  {
    id: 'spk-q8',
    questionNumber: 8,
    part: 4,
    partName: 'Part 4: Respond Using Provided Information',
    direction: 'In this part of the test, you will answer three questions based on the information provided. You will have 45 seconds to read the information. Then you will answer Questions 8, 9, and 10.',
    providedInfo: {
      title: 'Global Tech Leadership Summit 2026 - Conference Schedule',
      tableHeaders: ['Time', 'Session & Topic', 'Speaker', 'Location'],
      tableRows: [
        ['09:00 AM - 10:00 AM', 'Keynote: The Future of AI in Enterprise', 'Dr. Elena Rostova', 'Grand Ballroom'],
        ['10:15 AM - 11:30 AM', 'Panel: Cloud Architecture & Scalability', 'Marcus Vance (CTO, Apex)', 'Room 204'],
        ['11:45 AM - 01:00 PM', 'Lunch & Networking Buffet (Included)', 'All Attendees', 'Dining Hall A'],
        ['01:15 PM - 02:45 PM', 'Workshop: Cybersecurity Best Practices', 'Sarah Jenkins', 'Room 302 (Laptops required)'],
        ['03:00 PM - 04:30 PM', 'Workshop: Mobile App Performance Optimization', 'David Kim', 'Room 304']
      ],
      additionalNotes: '* Note: Pre-registration is required for the Cybersecurity Workshop as seating is limited to 40 participants.'
    },
    promptText: 'Question 8: "Hi, I am planning my morning schedule. Could you please tell me what time the keynote speech starts and where it will be held?"',
    prepTime: 3,
    responseTime: 15,
    hints: {
      structureOutline: [
        'Lời chào mở đầu lịch sự: "Certainly!" hoặc "Sure, I can help with that."',
        'Thông tin thời gian và địa điểm: "The keynote speech is scheduled to begin at 9:00 AM, and it will be held in the Grand Ballroom."',
        'Tên diễn giả: "It will be presented by Dr. Elena Rostova."'
      ],
      keyCollocations: [
        { word: 'scheduled to begin at', ipa: '/ˈskedʒ.uːld/', meaning: 'Được lên lịch bắt đầu lúc', example: 'The session is scheduled to begin at 9:00 AM.' },
        { word: 'take place in', ipa: '/teɪk pleɪs/', meaning: 'Diễn ra tại', example: 'It will take place in the Grand Ballroom.' }
      ],
      grammarTips: [
        'Dùng đúng giới từ chỉ thời gian và nơi chốn: AT 9:00 AM, IN the Grand Ballroom.'
      ],
      commonPitfalls: [
        'Đọc nhầm giờ hoặc đọc sai tên phòng họp.'
      ]
    },
    sampleAnswer: {
      text: "Certainly! The keynote speech on 'The Future of AI in Enterprise' is scheduled to begin at 9:00 AM, and it will take place in the Grand Ballroom.",
      scoreLevel: '200/200 (Level 8)',
      analysis: 'Thông tin hoàn toàn chính xác, cấu trúc câu trang trọng, giọng điệu chuyên nghiệp.'
    }
  },
  {
    id: 'spk-q9',
    questionNumber: 9,
    part: 4,
    partName: 'Part 4: Respond Using Provided Information',
    direction: 'In this part of the test, you will answer three questions based on the information provided. You will have 45 seconds to read the information. Then you will answer Questions 8, 9, and 10.',
    providedInfo: {
      title: 'Global Tech Leadership Summit 2026 - Conference Schedule',
      tableHeaders: ['Time', 'Session & Topic', 'Speaker', 'Location'],
      tableRows: [
        ['09:00 AM - 10:00 AM', 'Keynote: The Future of AI in Enterprise', 'Dr. Elena Rostova', 'Grand Ballroom'],
        ['10:15 AM - 11:30 AM', 'Panel: Cloud Architecture & Scalability', 'Marcus Vance (CTO, Apex)', 'Room 204'],
        ['11:45 AM - 01:00 PM', 'Lunch & Networking Buffet (Included)', 'All Attendees', 'Dining Hall A'],
        ['01:15 PM - 02:45 PM', 'Workshop: Cybersecurity Best Practices', 'Sarah Jenkins', 'Room 302 (Laptops required)'],
        ['03:00 PM - 04:30 PM', 'Workshop: Mobile App Performance Optimization', 'David Kim', 'Room 304']
      ],
      additionalNotes: '* Note: Pre-registration is required for the Cybersecurity Workshop as seating is limited to 40 participants.'
    },
    promptText: 'Question 9: "I was told that attendees have to pay an extra fee for lunch at a nearby restaurant. Is that correct?"',
    prepTime: 3,
    responseTime: 15,
    hints: {
      structureOutline: [
        'Đính chính ngay thông tin sai: "Actually, that information is not correct."',
        'Cung cấp thông tin chuẩn xác từ bảng: "A lunch and networking buffet is included for all attendees from 11:45 AM to 1:00 PM in Dining Hall A."'
      ],
      keyCollocations: [
        { word: 'complimentary buffet', ipa: '/ˌkɒm.plɪˈmen.tər.i/', meaning: 'Tiệc buffet miễn phí đi kèm', example: 'Lunch is included at no extra cost.' },
        { word: 'actually, that is not correct', ipa: '/ˈæk.tʃu.ə.li/', meaning: 'Thực ra thông tin đó không chính xác', example: 'Actually, that is not the case.' }
      ],
      grammarTips: [
        'Cấu trúc đính chính lịch sự: "Actually, no. Lunch is already included in your registration."'
      ],
      commonPitfalls: [
        'Chỉ nói "No" cộc lốc mà không giải thích chi tiết giờ ăn và địa điểm.'
      ]
    },
    sampleAnswer: {
      text: "Actually, that is not correct. A complimentary lunch and networking buffet is already included for all attendees from 11:45 AM to 1:00 PM in Dining Hall A.",
      scoreLevel: '200/200 (Level 8)',
      analysis: 'Sửa thông tin sai khéo léo, cung cấp đầy đủ thời gian và địa điểm ăn trưa.'
    }
  },
  {
    id: 'spk-q10',
    questionNumber: 10,
    part: 4,
    partName: 'Part 4: Respond Using Provided Information',
    direction: 'In this part of the test, you will answer three questions based on the information provided. You will have 45 seconds to read the information. Then you will answer Questions 8, 9, and 10.',
    providedInfo: {
      title: 'Global Tech Leadership Summit 2026 - Conference Schedule',
      tableHeaders: ['Time', 'Session & Topic', 'Speaker', 'Location'],
      tableRows: [
        ['09:00 AM - 10:00 AM', 'Keynote: The Future of AI in Enterprise', 'Dr. Elena Rostova', 'Grand Ballroom'],
        ['10:15 AM - 11:30 AM', 'Panel: Cloud Architecture & Scalability', 'Marcus Vance (CTO, Apex)', 'Room 204'],
        ['11:45 AM - 01:00 PM', 'Lunch & Networking Buffet (Included)', 'All Attendees', 'Dining Hall A'],
        ['01:15 PM - 02:45 PM', 'Workshop: Cybersecurity Best Practices', 'Sarah Jenkins', 'Room 302 (Laptops required)'],
        ['03:00 PM - 04:30 PM', 'Workshop: Mobile App Performance Optimization', 'David Kim', 'Room 304']
      ],
      additionalNotes: '* Note: Pre-registration is required for the Cybersecurity Workshop as seating is limited to 40 participants.'
    },
    promptText: 'Question 10: "I am especially interested in the afternoon workshop sessions. Could you please give me all the details about the workshops scheduled for the afternoon?"',
    prepTime: 3,
    responseTime: 30,
    hints: {
      structureOutline: [
        'Câu mở đầu: "Certainly, there are two workshop sessions scheduled for the afternoon."',
        'Session 1 (12s): "First, from 1:15 PM to 2:45 PM, there is a workshop on Cybersecurity Best Practices led by Sarah Jenkins in Room 302. Please remember that laptops are required."',
        'Session 2 (12s): "Second, from 3:00 PM to 4:30 PM, David Kim will conduct a workshop on Mobile App Performance Optimization in Room 304."',
        'Lưu ý thêm (nếu còn thời gian): "Also note that pre-registration is required for the cybersecurity session."'
      ],
      keyCollocations: [
        { word: 'scheduled for the afternoon', ipa: '/ˈskedʒ.uːld/', meaning: 'Được lên lịch cho buổi chiều', example: 'Two workshops are scheduled for the afternoon.' },
        { word: 'conduct a workshop', ipa: '/kənˈdʌkt/', meaning: 'Chủ trì/hướng dẫn buổi workshop', example: 'David Kim will conduct a workshop in Room 304.' }
      ],
      grammarTips: [
        'Từ nối liệt kê: "First of all, ... Secondly, ..."'
      ],
      commonPitfalls: [
        'Bỏ quên buổi workshop thứ 2 hoặc quên nhắc tên diễn giả.'
      ]
    },
    sampleAnswer: {
      text: "Certainly! There are two workshops scheduled for the afternoon. First, from 1:15 PM to 2:45 PM, Sarah Jenkins will lead a session on 'Cybersecurity Best Practices' in Room 302, and attendees are required to bring their laptops. Second, from 3:00 PM to 4:30 PM, David Kim will conduct a workshop on 'Mobile App Performance Optimization' in Room 304.",
      scoreLevel: '200/200 (Level 8)',
      analysis: 'Liệt kê đầy đủ 100% chi tiết của cả 2 buổi workshop bao gồm thời gian, người hướng dẫn, địa điểm và lưu ý.'
    }
  },

  // PART 5: Express an Opinion (Q11)
  {
    id: 'spk-q11',
    questionNumber: 11,
    part: 5,
    partName: 'Part 5: Express an Opinion',
    direction: 'In this part of the test, you will give your opinion about a specific topic. Be sure to say as much as you can in the time allowed. You will have 45 seconds to prepare. Then you will have 60 seconds to speak.',
    promptText: 'Some companies allow employees to work remotely from home two to three days a week, while other companies require all staff to work in the office full-time. Which approach do you prefer, and why? Support your opinion with reasons and examples.',
    prepTime: 45,
    responseTime: 60,
    hints: {
      structureOutline: [
        '1. Stance (Quan điểm dứt khoát - 8s): "In my opinion, I strongly advocate for the hybrid work model where staff can work from home a few days each week."',
        '2. Reason 1 + Example (20s): Tiết kiệm thời gian đi lại, giảm căng thẳng tắc đường, tăng khả năng tập trung sâu (deep focus).',
        '3. Reason 2 + Example (20s): Duy trì sự gắn kết và họp trực tiếp trong những ngày lên văn phòng (interpersonal bonding & collaboration).',
        '4. Conclusion (10s): "Therefore, a hybrid arrangement achieves the ideal balance between individual productivity and company teamwork."'
      ],
      keyCollocations: [
        { word: 'hybrid work arrangement', ipa: '/ˈhaɪ.brɪd wɜːk/', meaning: 'Mô hình làm việc kết hợp', example: 'A hybrid work arrangement provides flexibility.' },
        { word: 'strike a healthy balance', ipa: '/straɪk ə ˈhel.θi ˈbæl.əns/', meaning: 'Tạo sự cân bằng lành mạnh', example: 'It helps staff strike a healthy work-life balance.' },
        { word: 'commute exhaustion', ipa: '/kəˈmjuːt/', meaning: 'Sự kiệt sức do di chuyển đi làm', example: 'Eliminating daily commute exhaustion boosts focus.' }
      ],
      grammarTips: [
        'Từ nối lập luận: "First and foremost", "Furthermore", "For instance", "In conclusion".',
        'Cấu trúc điều kiện: "When employees have autonomy over their schedules, they perform significantly better."'
      ],
      commonPitfalls: [
        'Nói chung chung mà không đưa ra ví dụ cá nhân hoặc hoàn cảnh thực tế.',
        'Hết 60 giây trước khi kịp nói câu kết luận.'
      ]
    },
    sampleAnswer: {
      text: "In my opinion, I strongly prefer a hybrid work model that combines remote work and office attendance. First of all, working from home two or three days a week significantly reduces commute time and stress. For instance, in my previous role, saving two hours of traffic each day allowed me to begin work feeling refreshed and focused on deep tasks. Furthermore, having scheduled in-office days ensures team collaboration and face-to-face brainstorming remain strong. Therefore, a hybrid schedule strikes the ideal balance between individual productivity and teamwork.",
      scoreLevel: '200/200 (Level 8)',
      analysis: 'Mở bài trực diện, 2 luận điểm kèm minh chứng thuyết phục, kết bài súc tích trong 55 giây.'
    }
  }
];

export const WRITING_QUESTIONS: WritingQuestion[] = [
  // PART 1: Write a Sentence Based on a Picture (Q1 - Q5) -> Tổng thời gian: 8 phút cho cả 5 câu
  {
    id: 'wrt-q1',
    questionNumber: 1,
    part: 1,
    partName: 'Part 1: Write a Sentence Based on a Picture',
    direction: 'In Questions 1-5, you will write ONE sentence based on a picture using TWO given words or phrases. You have 8 minutes for all 5 questions. (Recommended: ~1.5 minutes per question).',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
    promptText: 'Write ONE sentence based on the picture using the two given words.',
    givenKeywords: ['client', 'assist'],
    timeLimit: 480, // 8 minutes total in real exam
    hints: {
      structureOutline: [
        'Cấu trúc chuẩn: S + V + O + (Prepositional Phrase).',
        'Chủ ngữ: "The financial consultant / The businesswoman".',
        'Động từ "assist": Chia thì tiếp diễn "is assisting" hoặc hiện tại đơn.',
        'Tân ngữ "client": "her prospective client / a client".'
      ],
      keyCollocations: [
        { word: 'assist a client', ipa: '/əˈsɪst/', meaning: 'Hỗ trợ khách hàng', example: 'She is assisting a client with inquiries.' },
        { word: 'professional demeanor', ipa: '/dɪˈmiː.nər/', meaning: 'Thái độ chuyên nghiệp', example: 'With a warm and professional demeanor.' }
      ],
      grammarTips: [
        'Cả 2 từ "client" và "assist" BẮT BUỘC phải xuất hiện trong ĐÚNG 1 CÂU.',
        'Được phép biến đổi dạng từ: assist -> assisting / assisted.'
      ],
      commonPitfalls: [
        'Viết thành 2 câu riêng biệt (nhận 0 điểm theo chuẩn ETS).',
        'Quên chia động từ hòa hợp chủ ngữ số ít.'
      ]
    },
    sampleAnswer: {
      text: 'A professional consultant is attentively assisting her client with financial documents.',
      scoreLevel: '200/200 (Level 9)',
      analysis: 'Câu đơn hoàn chỉnh ngữ pháp, liên kết chính xác với bối cảnh trong ảnh.'
    }
  },
  {
    id: 'wrt-q2',
    questionNumber: 2,
    part: 1,
    partName: 'Part 1: Write a Sentence Based on a Picture',
    direction: 'In Questions 1-5, you will write ONE sentence based on a picture using TWO given words or phrases. You have 8 minutes for all 5 questions. (Recommended: ~1.5 minutes per question).',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
    promptText: 'Write ONE sentence based on the picture using the two given words.',
    givenKeywords: ['laptop', 'while'],
    timeLimit: 480,
    hints: {
      structureOutline: [
        'Cấu trúc mệnh đề trạng ngữ chỉ thời gian với "while": "S1 + V1 + while + S2 + V2".',
        'Hành động 1: Một người đang gõ phím trên laptop.',
        'Hành động 2: Đồng nghiệp bên cạnh đang quan sát hoặc ghi chép.'
      ],
      keyCollocations: [
        { word: 'type on a laptop', ipa: '/taɪp/', meaning: 'Gõ phím trên máy tính', example: 'Typing notes on a laptop.' },
        { word: 'collaborate on a project', ipa: '/kəˈlæb.ə.reɪt/', meaning: 'Hợp tác trong dự án', example: 'Collaborating while reviewing data.' }
      ],
      grammarTips: [
        'Mệnh đề sau "while" thường dùng thì tiếp diễn: "...while her colleague is looking at the screen."'
      ],
      commonPitfalls: [
        'Viết thiếu một trong hai từ "laptop" hoặc "while".'
      ]
    },
    sampleAnswer: {
      text: 'One student is typing on her laptop while the other attentively listens to the lecture.',
      scoreLevel: '200/200 (Level 9)',
      analysis: 'Câu phức hoàn hảo sử dụng liên từ "while" kết nối 2 hành động song song.'
    }
  },
  {
    id: 'wrt-q3',
    questionNumber: 3,
    part: 1,
    partName: 'Part 1: Write a Sentence Based on a Picture',
    direction: 'In Questions 1-5, you will write ONE sentence based on a picture using TWO given words or phrases. You have 8 minutes for all 5 questions. (Recommended: ~1.5 minutes per question).',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    promptText: 'Write ONE sentence based on the picture using the two given words.',
    givenKeywords: ['presentation', 'although'],
    timeLimit: 480,
    hints: {
      structureOutline: [
        'Cấu trúc chỉ sự nhượng bộ với "although": "Although + Clause 1, Clause 2."',
        'Mệnh đề 1: Mặc dù buổi thuyết trình đã kết thúc / diễn ra trong phòng họp nhỏ.',
        'Mệnh đề 2: Các thính giả vẫn tích cực đặt câu hỏi trao đổi.'
      ],
      keyCollocations: [
        { word: 'deliver a presentation', ipa: '/dɪˈlɪv.ər/', meaning: 'Trình bày một bài thuyết trình', example: 'Delivering a presentation to team members.' },
        { word: 'engaged audience', ipa: '/ɪnˈɡeɪdʒd/', meaning: 'Khán giả chăm chú lắng nghe', example: 'The audience remained engaged.' }
      ],
      grammarTips: [
        'Tuyệt đối KHÔNG dùng cả "Although" và "But" trong cùng một câu: "Although S + V, S + V" (ĐÚNG).'
      ],
      commonPitfalls: [
        'Viết "Although..., but..." (Lỗi kinh điển của thí sinh Việt Nam!).'
      ]
    },
    sampleAnswer: {
      text: 'Although the room was crowded, all participants paid close attention to the slide presentation.',
      scoreLevel: '200/200 (Level 9)',
      analysis: 'Cấu trúc nhượng bộ chuẩn mực, không mắc bẫy ngữ pháp "although... but".'
    }
  },
  {
    id: 'wrt-q4',
    questionNumber: 4,
    part: 1,
    partName: 'Part 1: Write a Sentence Based on a Picture',
    direction: 'In Questions 1-5, you will write ONE sentence based on a picture using TWO given words or phrases. You have 8 minutes for all 5 questions. (Recommended: ~1.5 minutes per question).',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
    promptText: 'Write ONE sentence based on the picture using the two given words.',
    givenKeywords: ['commute', 'because'],
    timeLimit: 480,
    hints: {
      structureOutline: [
        'Cấu trúc chỉ nguyên nhân với "because": "Clause 1 + because + Clause 2."',
        'Từ "commute" có thể làm danh từ (daily commute) hoặc động từ (commute to work).',
        'Hình ảnh: Hành khách đi xe buýt / tàu điện công cộng.'
      ],
      keyCollocations: [
        { word: 'daily commute', ipa: '/ˈdeɪ.li kəˈmjuːt/', meaning: 'Chuyến đi làm hàng ngày', example: 'Tired from the daily commute.' },
        { word: 'public transit', ipa: '/ˈpʌb.lɪk ˈtræn.zɪt/', meaning: 'Phương tiện công cộng', example: 'Taking public transit to work.' }
      ],
      grammarTips: [
        '"Because" đi với mệnh đề (S + V), phân biệt với "Because of" đi với danh từ.'
      ],
      commonPitfalls: [
        'Quên dấu phẩy nếu đặt mệnh đề "Because" ở đầu câu.'
      ]
    },
    sampleAnswer: {
      text: 'Many passengers commute by public bus every morning because it is affordable and reliable.',
      scoreLevel: '200/200 (Level 9)',
      analysis: 'Sử dụng "commute" như một động từ chỉ thói quen đi làm, vế nguyên nhân mạch lạc.'
    }
  },
  {
    id: 'wrt-q5',
    questionNumber: 5,
    part: 1,
    partName: 'Part 1: Write a Sentence Based on a Picture',
    direction: 'In Questions 1-5, you will write ONE sentence based on a picture using TWO given words or phrases. You have 8 minutes for all 5 questions. (Recommended: ~1.5 minutes per question).',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
    promptText: 'Write ONE sentence based on the picture using the two given words.',
    givenKeywords: ['contract', 'sign'],
    timeLimit: 480,
    hints: {
      structureOutline: [
        'Bối cảnh: Ký kết hợp đồng kinh doanh với bút ký sang trọng.',
        'Cấu trúc: "The executive / client is signing a commercial contract with a fountain pen."'
      ],
      keyCollocations: [
        { word: 'sign a contract', ipa: '/saɪn ə ˈkɒn.trækt/', meaning: 'Ký kết hợp đồng', example: 'Signing an official contract.' },
        { word: 'business agreement', ipa: '/əˈɡriː.mənt/', meaning: 'Thỏa thuận thương mại', example: 'Finalizing the business agreement.' }
      ],
      grammarTips: [
        'Có thể dùng câu bị động: "An official contract was signed after successful negotiations."'
      ],
      commonPitfalls: [
        'Chia sai thì hoặc thiếu mạo từ (a/the) trước danh từ đếm được "contract".'
      ]
    },
    sampleAnswer: {
      text: 'The business partners are carefully reviewing and signing the employment contract at the desk.',
      scoreLevel: '200/200 (Level 9)',
      analysis: 'Câu văn tự nhiên, đầy đủ cả 2 từ khoá và sử dụng thì tiếp diễn chuẩn mực.'
    }
  },

  // PART 2: Respond to a Written Request (Q6 - Q7) -> Thời gian: 10 phút CHO MỖI CÂU
  {
    id: 'wrt-q6',
    questionNumber: 6,
    part: 2,
    partName: 'Part 2: Respond to a Written Request',
    direction: 'In Questions 6-7, you will show how well you can write a response to an email. You will have 10 minutes to read and answer each email.',
    incomingEmail: {
      from: 'Jonathan Miller (Events Director, Horizon Hotel & Suites)',
      to: 'Corporate Event Coordinator',
      subject: 'Inquiry regarding your Annual Gala Dinner Reservation',
      date: 'October 14, 2026',
      body: `Dear Event Coordinator,\n\nThank you for choosing Horizon Hotel for your upcoming Annual Gala Dinner. We received your preliminary request for the Grand Ballroom for December 18th.\n\nTo ensure we prepare an accurate proposal and menu options, could you please provide more details about your expected guest count and technical requirements?\n\nWe look forward to collaborating with your company.\n\nSincerely,\nJonathan Miller`,
      requirements: [
        'Acknowledge the email and confirm the date of the event.',
        'Provide the estimated number of attendees and specify dietary requirements.',
        'Ask two questions about audiovisual equipment and stage setup.'
      ]
    },
    promptText: 'Directions: Respond to the email as the Corporate Event Coordinator. Address all three bullet requirements in your reply.',
    timeLimit: 600, // 10 minutes per email
    hints: {
      structureOutline: [
        '1. Lời chào trang trọng: "Dear Mr. Miller,"',
        '2. Mở đầu & Xác nhận: Cảm ơn và xác nhận ngày diễn ra (18/12).',
        '3. Cung cấp thông tin khách: Khoảng 150 khách, một số khách ăn chay/không gluten.',
        '4. Đặt 2 câu hỏi kỹ thuật: Về micro không dây, máy chiếu 4K hoặc thời gian bàn giao sân khấu.',
        '5. Kết thư chuyên nghiệp: "Sincerely, [Tên của bạn]".'
      ],
      keyCollocations: [
        { word: 'dietary accommodations', ipa: '/ˌdaɪ.əˈter.i/', meaning: 'Các yêu cầu chế độ ăn kiêng', example: 'We require dietary accommodations for vegetarian guests.' },
        { word: 'audiovisual equipment', ipa: '/ˌɔː.di.əʊˈvɪʒ.u.əl/', meaning: 'Thiết bị âm thanh ánh sáng trình chiếu', example: 'Does the venue provide on-site audiovisual equipment?' },
        { word: 'stage setup', ipa: '/steɪdʒ ˈset.ʌp/', meaning: 'Dàn dựng sân khấu', example: 'Could you clarify the timing for stage setup?' }
      ],
      grammarTips: [
        'Dùng câu hỏi gián tiếp hoặc lịch sự: "Could you please inform me whether...?" thay vì "Do you have...?"',
        'Phân đoạn rõ ràng thành 3 đoạn văn ngắn tương ứng 3 yêu cầu.'
      ],
      commonPitfalls: [
        'Chỉ đặt 1 câu hỏi thay vì đúng 2 câu hỏi theo yêu cầu đề bài.',
        'Quên chào hỏi hoặc dùng văn phong quá suồng sã (như chat tin nhắn).'
      ]
    },
    sampleAnswer: {
      text: `Dear Mr. Miller,

Thank you for your prompt response regarding our Annual Gala Dinner reservation. I am delighted to confirm that our event will indeed take place on the evening of December 18th in the Grand Ballroom.

We anticipate approximately 150 guests in attendance. Could your catering team provide a selection of vegetarian and gluten-free dietary options for roughly 20 attendees? 

Additionally, I would like to inquire about the technical setup. Does the ballroom rental package include wireless microphones and dual 4K projectors? Furthermore, what time will our production crew be granted access to the stage for sound checks?

Thank you for your assistance, and I look forward to receiving your revised proposal.

Sincerely,
Alex Nguyen
Corporate Event Coordinator`,
      scoreLevel: '200/200 (Level 9)',
      analysis: 'Hoàn thành 100% cả 3 gạch đầu dòng, văn phong thư thương mại cao cấp, sử dụng từ vựng chuẩn mực.'
    }
  },
  {
    id: 'wrt-q7',
    questionNumber: 7,
    part: 2,
    partName: 'Part 2: Respond to a Written Request',
    direction: 'In Questions 6-7, you will show how well you can write a response to an email. You will have 10 minutes to read and answer each email.',
    incomingEmail: {
      from: 'Rachel Green (Customer Support Specialist, Apex Office Supplies)',
      to: 'Valued Customer',
      subject: 'Apology & update regarding your delayed furniture shipment (#ORD-8821)',
      date: 'November 05, 2026',
      body: `Dear Customer,\n\nWe sincerely apologize for the delay in delivering your recent order of ergonomic office chairs and conference tables (Order #ORD-8821).\n\nDue to unexpected supply chain disruptions at our regional warehouse, your shipment has been rescheduled. To help us rectify this situation, please let us know how this delay impacts your office operations and how you would prefer us to proceed.\n\nThank you for your patience and understanding.\n\nWarm regards,\nRachel Green`,
      requirements: [
        'Explain the specific problems caused by the delivery delay at your office.',
        'Request an expedited delivery date or partial delivery.',
        'Ask two questions regarding compensation or discount policies for delayed orders.'
      ]
    },
    promptText: 'Directions: Respond to the customer service email. Address all three bullet requirements in your reply.',
    timeLimit: 600, // 10 minutes per email
    hints: {
      structureOutline: [
        '1. Lời chào: "Dear Ms. Green,"',
        '2. Mô tả vấn đề: Các nhân viên mới bắt đầu đi làm vào tuần tới nhưng chưa có bàn ghế làm việc.',
        '3. Đưa ra yêu cầu: Giao trước các ghế công thái học trước thứ Hai tới.',
        '4. Đặt 2 câu hỏi bồi thường: Về chính sách hoàn phí vận chuyển hoặc phiếu giảm giá cho đơn hàng tiếp theo.',
        '5. Kết thư: "Best regards, [Tên]".'
      ],
      keyCollocations: [
        { word: 'expedited delivery', ipa: '/ˈek.spə.daɪ.tɪd/', meaning: 'Giao hàng hỏa tốc', example: 'We kindly request expedited delivery.' },
        { word: 'operational disruption', ipa: '/ˌɒp.ərˈeɪ.ʃən.əl/', meaning: 'Sự gián đoạn hoạt động', example: 'This delay causes severe operational disruption.' },
        { word: 'partial shipment', ipa: '/ˈpɑː.ʃəl/', meaning: 'Giao hàng từng phần', example: 'Could you arrange a partial shipment first?' }
      ],
      grammarTips: [
        'Dùng câu điều kiện hoặc mong muốn lịch sự: "We would appreciate it if you could prioritize our delivery."',
        'Đặt 2 câu hỏi rõ ràng có dấu chấm hỏi (?).'
      ],
      commonPitfalls: [
        'Quên mã số đơn hàng hoặc chỉ phàn nàn mà không đưa ra giải pháp giải quyết.'
      ]
    },
    sampleAnswer: {
      text: `Dear Ms. Green,

Thank you for notifying me regarding the delay of order #ORD-8821. 

Unfortunately, this delay presents a serious challenge for our company, as ten new employees are scheduled to commence work next Monday without workstations. Therefore, I request that you arrange an expedited partial shipment of the ergonomic chairs by Friday at the latest.

Furthermore, I would like to inquire about your compensation policy. Will Apex Office Supplies waive the delivery charges for this delayed order? Additionally, can our account be credited with a discount voucher for future purchases?

I look forward to your urgent confirmation.

Sincerely,
Michael Tran
Office Operations Manager`,
      scoreLevel: '200/200 (Level 9)',
      analysis: 'Văn phong chuyên nghiệp, vừa thể hiện tính cấp thiết vừa lịch thiệp, hoàn thành đủ 3 yêu cầu.'
    }
  },

  // PART 3: Write an Opinion Essay (Q8) -> Thời gian: 30 phút, tối thiểu 300 từ
  {
    id: 'wrt-q8',
    questionNumber: 8,
    part: 3,
    partName: 'Part 3: Write an Opinion Essay',
    direction: 'In Question 8, you will write an essay in response to a question that asks you to state, explain, and support your opinion. Typically, an effective essay will contain a minimum of 300 words. You will have 30 minutes to plan and write your essay.',
    promptText: `Some companies believe that organizing regular team-building activities outside the workplace significantly boosts employee productivity and morale. Others argue that such events consume valuable personal time and do little to improve daily work performance.\n\nWhich view do you agree with? Give specific reasons and examples to support your opinion.`,
    minWords: 300,
    timeLimit: 1800, // 30 minutes
    hints: {
      structureOutline: [
        '1. Introduction (40-50 words): Paraphrase đề bài -> Đưa ra Thesis Statement rõ ràng ủng hộ team-building ngoài công ty.',
        '2. Body Paragraph 1 (100-120 words): Luận điểm 1 - Xóa bỏ rào cản phân cấp và tăng cường thấu hiểu giao tiếp (Break down hierarchical barriers & improve rapport). Ví dụ: Các trò chơi thử thách giải quyết vấn đề.',
        '3. Body Paragraph 2 (100-120 words): Luận điểm 2 - Giải tỏa căng thẳng (Burnout reduction) và tái tạo năng lượng sáng tạo. Ví dụ: Dã ngoại cuối tuần giúp nhân viên phục hồi tinh thần.',
        '4. Conclusion (40-50 words): Tóm tắt 2 luận điểm và khẳng định lại giá trị chiến lược dài hạn cho doanh nghiệp.'
      ],
      keyCollocations: [
        { word: 'interpersonal rapport', ipa: '/ˌɪn.təˈpɜː.sən.əl ræpˈɔːr/', meaning: 'Mối quan hệ gắn kết giữa các cá nhân', example: 'Fosters stronger interpersonal rapport among team members.' },
        { word: 'workplace burnout', ipa: '/ˈbɜːn.aʊt/', meaning: 'Kiệt sức chán nản công việc', example: 'Outdoor retreats effectively alleviate workplace burnout.' },
        { word: 'cross-functional collaboration', ipa: '/krɒs ˈfʌŋk.ʃən.əl/', meaning: 'Hợp tác liên phòng ban', example: 'It paves the way for seamless cross-functional collaboration.' }
      ],
      grammarTips: [
        'Dùng câu phức (Complex Sentences) với các liên từ nhượng bộ: "While some skeptics consider team-building a disruption, evidence suggests..."',
        'Đảo ngữ để tạo ấn tượng cho Examiner: "Not only do these retreats foster morale, but they also enhance problem-solving agility."'
      ],
      commonPitfalls: [
        'Viết dưới 250 từ (sẽ bị trừ điểm nặng Task Achievement).',
        'Lặp đi lặp lại từ "good", "team-building", "happy" mà không paraphrase.'
      ]
    },
    sampleAnswer: {
      text: `In today's fast-paced corporate environment, the debate over whether company-sponsored team-building activities truly benefit organizations has garnered substantial attention. While critics often argue that mandatory extracurricular outings encroach upon personal time, I firmly contend that well-designed team-building events significantly bolster employee morale and long-term organizational productivity.

First and foremost, off-site team-building activities serve as an indispensable catalyst for breaking down hierarchical barriers and cultivating authentic interpersonal trust. Within traditional office cubicles, interactions between junior employees and senior executives are frequently constrained by formality. In contrast, when colleagues participate in collaborative outdoor challenges or problem-solving retreats, they learn to communicate with genuine empathy and discover each other's unique problem-solving styles. For instance, at my previous technology firm, an annual strategy retreat enabled cross-functional engineers and sales representatives to establish mutual rapport, which subsequently reduced project turnaround time by thirty percent.

Secondly, rejuvenating retreats outside the office environment provide much-needed respite from occupational burnout. Chronic work-related stress undeniably diminishes cognitive creativity and leads to high employee turnover. When a company invests resources into organizing enjoyable, non-work-related gatherings—such as sports tournaments or culinary workshops—it demonstrates profound appreciation for its workforce. Consequently, employees return to their desks with revitalized energy and heightened commitment toward corporate objectives.

In conclusion, far from being a frivolous expenditure of time, purposeful team-building activities foster durable camaraderie and alleviate workplace fatigue. When orchestrated thoughtfully with respect for personal boundaries, these initiatives yield profound dividends for collective morale and sustainable business performance.`,
      scoreLevel: '200/200 (Level 9)',
      analysis: 'Bài viết đạt 320 từ, cấu trúc 4 đoạn chuẩn mực Academic, từ vựng phong phú, sử dụng các cấu trúc câu phức và đảo ngữ đỉnh cao.'
    }
  }
];
