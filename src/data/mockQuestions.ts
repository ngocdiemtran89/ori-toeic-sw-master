import type { SpeakingQuestion, WritingQuestion } from '../types';

export const SPEAKING_QUESTIONS: SpeakingQuestion[] = [
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
      text: "Thank you for tuning in to WXYZ Radio's morning financial brief. [nghỉ 0.5s] Today, shares of Apex Technology surged... [nhấn mạnh 'surged']",
      scoreLevel: '200/200 (Level 8)',
      analysis: 'Ngắt câu nhịp nhàng, phát âm âm cuối chuẩn xác (-ged, -cks, -ks), ngữ điệu liệt kê chuẩn xác 3 nhịp.'
    }
  },
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
        '1. Bức tranh tổng quan (Where & Who): "This picture was taken in a modern office / collaborative workspace."',
        '2. Nhân vật chính giữa (Main focus): 3-4 đồng nghiệp đang cùng xem laptop và thảo luận sôi nổi.',
        '3. Chi tiết xung quanh (Background & Objects): Cốc cà phê, sổ tay, cửa sổ lớn đón ánh sáng tự nhiên.',
        '4. Cảm nhận chung (Atmosphere / Impression): "Overall, the atmosphere appears productive and energetic."'
      ],
      keyCollocations: [
        { word: 'collaborative workspace', ipa: '/kəˈlæb.ər.ə.tɪv/', meaning: 'Không gian làm việc cộng tác', example: 'They are gathered in a collaborative workspace.' },
        { word: 'brainstorming ideas', ipa: '/ˈbreɪn.stɔː.mɪŋ/', meaning: 'Động não, thảo luận ý tưởng', example: 'They seem to be brainstorming ideas for a project.' },
        { word: 'leaning forward', ipa: '/ˈliː.nɪŋ/', meaning: 'Nghiêng người về phía trước', example: 'The woman on the left is leaning forward attentively.' }
      ],
      grammarTips: [
        'Dùng Thì Hiện Tại Tiếp Diễn (Present Continuous) cho tất cả hành động: "A young woman is pointing at the laptop screen while the man is jotting down notes."',
        'Dùng các giới từ vị trí: "In the foreground", "On the wooden table", "In the background".'
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
    id: 'spk-q5',
    questionNumber: 5,
    part: 3,
    partName: 'Part 3: Respond to Questions',
    direction: 'In this part of the test, you will answer three questions. You will have 3 seconds to prepare after you hear each question. You will have 15 seconds to respond to Questions 5 and 6, and 30 seconds to respond to Question 7.',
    promptText: 'Imagine that an international marketing company is doing research on online shopping habits. Answer the question:\n\n"How often do you shop online, and what kinds of items do you usually purchase?"',
    prepTime: 3,
    responseTime: 15,
    hints: {
      structureOutline: [
        'Trả lời thẳng vào câu hỏi trong 3 giây đầu: "I usually shop online about [tần suất]..."',
        'Nêu rõ 2-3 món đồ hay mua: "and I typically buy [sách, quần áo, đồ công nghệ]."',
        'Thêm 1 câu giải thích ngắn: "because it saves me a lot of time."'
      ],
      keyCollocations: [
        { word: 'on a regular basis', ipa: '/ˈreɡ.jə.lər ˈbeɪ.sɪs/', meaning: 'Thường xuyên, đều đặn', example: 'I purchase tech gadgets on a regular basis.' },
        { word: 'doorstep delivery', ipa: '/ˈdɔː.step dɪˈlɪv.ər.i/', meaning: 'Giao hàng tận cửa', example: 'I love the convenience of doorstep delivery.' }
      ],
      grammarTips: [
        'Sử dụng thì Hiện Tại Đơn (Present Simple) để diễn tả thói quen.',
        'Liên từ ghép: "I usually buy ... not only because ... but also because ..."'
      ],
      commonPitfalls: [
        'Ngập ngừng quá lâu ở câu mở đầu làm mất 5-7 giây (trong khi tổng thời gian chỉ có 15 giây!).',
        'Chỉ trả lời "Yes, I like it" mà không nêu tần suất và món đồ.'
      ]
    },
    sampleAnswer: {
      text: "I shop online on a weekly basis, usually twice a week. I mostly purchase everyday clothing and technical accessories because online platforms offer great discounts and quick doorstep delivery.",
      scoreLevel: '200/200 (Level 8)',
      analysis: 'Trả lời trọn vẹn cả 2 vế trong đúng 12 giây, câu cú hoàn chỉnh và từ vựng tự nhiên.'
    }
  },
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
        ['01:15 PM - 02:45 PM', 'Workshop: Cybersecurity Best Practices', 'Sarah Jenkins', 'Room 302 (Laptops required)']
      ],
      additionalNotes: '* Note: Pre-registration is required for the Cybersecurity Workshop as seating is limited to 40 participants.'
    },
    promptText: 'Question 8: "Hi, I am planning my morning schedule. Could you please tell me what time the keynote speech starts and where it will be held?"',
    prepTime: 3,
    responseTime: 15,
    hints: {
      structureOutline: [
        'Nêu rõ thời gian và địa điểm: "Certainly! The keynote speech on [chủ đề] is scheduled to begin at [giờ] and will take place in [địa điểm]."',
        'Nhắc tên diễn giả nếu còn 3-4 giây: "It will be delivered by Dr. Elena Rostova."'
      ],
      keyCollocations: [
        { word: 'scheduled to begin', ipa: '/ˈskedʒ.uːld/', meaning: 'Được lên lịch bắt đầu', example: 'The session is scheduled to begin at 9:00 AM.' },
        { word: 'will take place in', ipa: '/teɪk pleɪs/', meaning: 'Sẽ diễn ra tại', example: 'It will take place in the Grand Ballroom.' }
      ],
      grammarTips: [
        'Dùng đúng giới từ: "AT 9:00 AM", "IN the Grand Ballroom".',
        'Cách nói lịch trình trang trọng: "is held in / will be presented by".'
      ],
      commonPitfalls: [
        'Nhầm lẫn giữa các phòng họp hoặc đọc sai số giờ (AM/PM).'
      ]
    },
    sampleAnswer: {
      text: "Certainly! The keynote speech titled 'The Future of AI in Enterprise' is scheduled to begin at 9:00 AM, and it will be held in the Grand Ballroom.",
      scoreLevel: '200/200 (Level 8)',
      analysis: 'Trả lời lễ phép, thông tin chính xác tuyệt đối, ngữ điệu tự tin và chuyên nghiệp.'
    }
  },
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
        '1. Stance (Quan điểm rõ ràng): "In my opinion, I strongly prefer the hybrid working model where employees can work remotely a few days a week."',
        '2. Reason 1 + Example: Tăng tính linh hoạt và tiết kiệm thời gian đi lại (commute time). Ví dụ: Không bị kẹt xe, có nhiều thời gian tập trung làm báo cáo chất lượng cao.',
        '3. Reason 2 + Example: Duy trì gắn kết đồng đội khi lên công ty (team bonding & face-to-face meetings).',
        '4. Conclusion: "Therefore, I believe hybrid work offers the perfect balance between productivity and collaboration."'
      ],
      keyCollocations: [
        { word: 'hybrid work arrangement', ipa: '/ˈhaɪ.brɪd wɜːk/', meaning: 'Mô hình làm việc kết hợp', example: 'A hybrid work arrangement provides flexibility.' },
        { word: 'strike a healthy balance', ipa: '/straɪk ə ˈhel.θi ˈbæl.əns/', meaning: 'Tạo sự cân bằng lành mạnh', example: 'It helps staff strike a healthy work-life balance.' },
        { word: 'commute exhaustion', ipa: '/kəˈmjuːt/', meaning: 'Sự kiệt sức do di chuyển đi làm', example: 'Eliminating daily commute exhaustion boosts focus.' }
      ],
      grammarTips: [
        'Sử dụng các cụm liên kết lập luận: "First of all", "Furthermore", "For instance", "As a result".',
        'Câu điều kiện loại 1 hoặc cấu trúc giả định: "If workers have the option to stay home, they can manage their energy more effectively."'
      ],
      commonPitfalls: [
        'Nói chung chung mà không đưa ra ví dụ cá nhân hoặc tình huống cụ thể.',
        'Hết giờ trước khi kịp đưa ra kết luận (cần chừa 8-10 giây cuối để tóm lại).'
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
  {
    id: 'wrt-q1',
    questionNumber: 1,
    part: 1,
    partName: 'Part 1: Write a Sentence Based on a Picture',
    direction: 'In this part of the test, you will write ONE sentence that is based on a picture. With each picture, you will be given TWO words or phrases that you must use in your sentence. You can change the forms of the words and you can use the words in any order.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
    promptText: 'Write ONE sentence based on the picture using the two given words.',
    givenKeywords: ['client', 'assist'],
    timeLimit: 120, // 2 minutes per sentence in learning mode, 8 mins total in exam
    hints: {
      structureOutline: [
        'Xác định cấu trúc: S + V + O + (Prepositional Phrase).',
        'Chủ ngữ: "The professional woman / customer service representative".',
        'Động từ "assist": Dùng thì hiện tại tiếp diễn "is assisting" hoặc hiện tại đơn.',
        'Tân ngữ "client": "a prospective client / her client".'
      ],
      keyCollocations: [
        { word: 'assist a client', ipa: '/əˈsɪst/', meaning: 'Hỗ trợ khách hàng', example: 'She is assisting a client with inquiries.' },
        { word: 'professional demeanor', ipa: '/dɪˈmiː.nər/', meaning: 'Thái độ chuyên nghiệp', example: 'With a warm and professional demeanor.' }
      ],
      grammarTips: [
        'Cả 2 từ "client" và "assist" BẮT BUỘC phải xuất hiện trong 1 câu duy nhất.',
        'Có thể biến đổi từ loại hoặc thì: assist -> is assisting / assisted.'
      ],
      commonPitfalls: [
        'Viết thành 2 câu riêng biệt (Bị trừ điểm nặng hoặc nhận 0 điểm theo chuẩn ETS!).',
        'Sai sự hòa hợp chủ vị: "The woman assist..." (thiếu s/es hoặc be + V-ing).'
      ]
    },
    sampleAnswer: {
      text: 'A professional consultant is attentively assisting her client with financial documents.',
      scoreLevel: '200/200 (Level 9)',
      analysis: 'Câu ghép mạch lạc, đúng ngữ pháp 100%, sử dụng trọn vẹn cả 2 từ khoá và miêu tả chính xác bối cảnh.'
    }
  },
  {
    id: 'wrt-q6',
    questionNumber: 6,
    part: 2,
    partName: 'Part 2: Respond to a Written Request',
    direction: 'In this part of the test, you will show how well you can write a response to an email. You will have 10 minutes to read and answer each email.',
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
    timeLimit: 600, // 10 minutes
    hints: {
      structureOutline: [
        '1. Lời chào trang trọng: "Dear Mr. Miller,"',
        '2. Mở đầu & Xác nhận: Cảm ơn và xác nhận ngày diễn ra (18/12).',
        '3. Cung cấp thông tin khách: Khoảng 150 khách, một số khách ăn chay/không gluten.',
        '4. Đặt 2 câu hỏi kỹ thuật: Về micro không dây, máy chiếu 4K hoặc thời gian bàn giao sân khấu.',
        '5. Kết thư chuyên nghiệp: "Best regards, [Tên của bạn]".'
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
    id: 'wrt-q8',
    questionNumber: 8,
    part: 3,
    partName: 'Part 3: Write an Opinion Essay',
    direction: 'In this part of the test, you will write an essay in response to a question that asks you to state, explain, and support your opinion. Typically, an effective essay will contain a minimum of 300 words. You will have 30 minutes to plan and write your essay.',
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
