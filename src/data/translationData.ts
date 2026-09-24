import type { TranslationItem, TranslationPart } from '../types';

export interface TranslationPartFilter {
  key: 'all' | TranslationPart;
  label: string;
  badge: string;
  color: string;
}

export const TRANSLATION_PART_FILTERS: TranslationPartFilter[] = [
  { key: 'all', label: 'Tất Cả 60 Bài', badge: '60 Câu & Đoạn', color: '#6366f1' },
  { key: 'writing_p1', label: 'Part 1 Writing: Câu Theo Tranh', badge: '12 Câu', color: '#3b82f6' },
  { key: 'writing_p2', label: 'Part 2 Writing: Email Công Sở', badge: '12 Câu', color: '#06b6d4' },
  { key: 'speaking_p2', label: 'Speaking Part 2: Miêu Tả Tranh', badge: '12 Câu', color: '#10b981' },
  { key: 'speaking_p3_4', label: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình', badge: '12 Câu', color: '#f59e0b' },
  { key: 'opinion_paragraphs', label: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng', badge: '12 Đoạn', color: '#8b5cf6' }
];

export const TRANSLATION_BANK: TranslationItem[] = [
  // =========================================================================
  // PHẦN 1: WRITING PART 1 - VIẾT CÂU THEO TRANH & TỪ KHÓA (CÂU 1 - 12)
  // =========================================================================
  {
    id: 'trans-w1-1',
    itemNumber: 1,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: 'Thuyết trình chiến lược & Khách hàng lắng nghe',
    vietnamesePrompt: 'Trong khi chuyên viên tư vấn cấp cao đang trình bày báo cáo tài chính, các khách hàng đang chăm chú lắng nghe xung quanh bàn hội nghị.',
    targetGrammar: 'Mệnh đề trạng ngữ chỉ thời gian với "While" (While + S + be + V-ing, S + be + V-ing)',
    vocabularyHints: [
      { word: 'senior consultant', meaning: 'Chuyên viên tư vấn cấp cao', ipa: '/ˈsiː.njər kənˈsʌl.tənt/' },
      { word: 'financial report', meaning: 'Báo cáo tài chính', ipa: '/faɪˈnæn.ʃəl rɪˈpɔːt/' },
      { word: 'attentively', meaning: 'Một cách chăm chú', ipa: '/əˈten.tɪv.li/' },
      { word: 'conference table', meaning: 'Bàn hội nghị', ipa: '/ˈkɒn.fər.əns ˈteɪ.bəl/' }
    ],
    sampleEnglishAnswer: 'While the senior consultant is presenting the financial report, the clients are listening attentively around the conference table.',
    alternativeAnswers: [
      'While presenting the financial report, the senior consultant is listened to attentively by clients around the conference table.'
    ],
    analysis: 'Sử dụng liên từ "While" kết hợp thì Hiện tại tiếp diễn mô tả hai hành động diễn ra song song trong bức tranh, đảm bảo đúng chuẩn 1 câu duy nhất theo barem ETS.',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w1-2',
    itemNumber: 2,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: 'Phòng họp trống trước khi cuộc họp bắt đầu',
    vietnamesePrompt: 'Phòng hội nghị rộng rãi hoàn toàn trống trải và yên tĩnh trước khi cuộc họp ban giám đốc buổi sáng bắt đầu.',
    targetGrammar: 'Mệnh đề thời gian với "Before" (S + V + before + S + V-s/es)',
    vocabularyHints: [
      { word: 'spacious', meaning: 'Rộng rãi, thoáng đãng', ipa: '/ˈspeɪ.ʃəs/' },
      { word: 'conference room', meaning: 'Phòng hội nghị', ipa: '/ˈkɒn.fər.əns ruːm/' },
      { word: 'executive meeting', meaning: 'Cuộc họp ban giám đốc', ipa: '/ɪɡˈzek.jə.tɪv ˈmiː.tɪŋ/' }
    ],
    sampleEnglishAnswer: 'The spacious conference room remains completely empty and quiet before the morning executive meeting begins.',
    alternativeAnswers: [
      'The large conference room is completely empty before the executive meeting starts.'
    ],
    analysis: 'Động từ "remains" hoặc "is" kết hợp trạng từ "completely", chia đúng ngôi thứ ba số ít "begins" / "starts".',
    difficulty: 'Cơ bản (500+)'
  },
  {
    id: 'trans-w1-3',
    itemNumber: 3,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: 'Kỹ sư kiểm tra máy móc vì sự cố',
    vietnamesePrompt: 'Kỹ sư trưởng đang cẩn thận kiểm tra hệ thống máy chủ vì sự cố mạng đã xảy ra vào sáng nay.',
    targetGrammar: 'Mệnh đề nguyên nhân với "Because" (S + V + because + S + V)',
    vocabularyHints: [
      { word: 'lead engineer', meaning: 'Kỹ sư trưởng', ipa: '/liːd ˌen.dʒɪˈnɪər/' },
      { word: 'inspect', meaning: 'Kiểm tra kỹ lưỡng', ipa: '/ɪnˈspekt/' },
      { word: 'server equipment', meaning: 'Thiết bị máy chủ', ipa: '/ˈsɜː.vər ɪˈkwɪp.mənt/' },
      { word: 'network malfunction', meaning: 'Sự cố trục trặc mạng', ipa: '/ˈnet.wɜːk mælˈfʌŋk.ʃən/' }
    ],
    sampleEnglishAnswer: 'The lead engineer is carefully inspecting the server equipment because a network malfunction occurred this morning.',
    alternativeAnswers: [
      'Because a network malfunction was detected this morning, the engineer is inspecting the server system.'
    ],
    analysis: 'Lưu ý dùng "because" đi với mệnh đề (S + V), tránh nhầm với "because of" đi với danh từ.',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w1-4',
    itemNumber: 4,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: 'Khách hàng thanh toán bằng thẻ tại quầy',
    vietnamesePrompt: 'Một vị khách hàng đang mỉm cười thanh toán tiền hàng bằng thẻ tín dụng không tiếp xúc tại quầy thu ngân.',
    targetGrammar: 'Cụm giới từ công cụ & nơi chốn (with a credit card + at the checkout counter)',
    vocabularyHints: [
      { word: 'merchandise', meaning: 'Hàng hóa mua sắm', ipa: '/ˈmɜː.tʃən.daɪs/' },
      { word: 'contactless credit card', meaning: 'Thẻ tín dụng không tiếp xúc', ipa: '/ˈkɒn.tækt.ləs/' },
      { word: 'checkout counter', meaning: 'Quầy thu ngân thanh toán', ipa: '/ˈtʃek.aʊt ˈkaʊn.tər/' }
    ],
    sampleEnglishAnswer: 'A customer is paying for her merchandise with a contactless credit card at the checkout counter.',
    alternativeAnswers: [
      'At the checkout counter, a woman is paying for her purchases using a credit card.'
    ],
    analysis: 'Cụm từ "pay for something with/by card", mạo từ "a" và "the" dùng chính xác.',
    difficulty: 'Cơ bản (500+)'
  },
  {
    id: 'trans-w1-5',
    itemNumber: 5,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: 'Công nhân sắp xếp kiện hàng để giao',
    vietnamesePrompt: 'Các công nhân kho hàng đang chăm chỉ phân loại các thùng các-tông để chuẩn bị đơn hàng xuất khẩu.',
    targetGrammar: 'Mệnh đề chỉ mục đích với "In order to" (S + V + in order to + V-infinitive)',
    vocabularyHints: [
      { word: 'warehouse workers', meaning: 'Công nhân kho hàng', ipa: '/ˈweə.haʊs ˈwɜː.kərz/' },
      { word: 'diligently', meaning: 'Một cách chăm chỉ, cần mẫn', ipa: '/ˈdɪl.ɪ.dʒənt.li/' },
      { word: 'cardboard boxes', meaning: 'Thùng các-tông', ipa: '/ˈkɑːd.bɔːd ˈbɒks.ɪz/' },
      { word: 'fulfill export orders', meaning: 'Hoàn tất đơn hàng xuất khẩu', ipa: '/fʊlˈfɪl ˈek.spɔːt/' }
    ],
    sampleEnglishAnswer: 'The warehouse workers are diligently sorting cardboard boxes in order to fulfill export orders.',
    alternativeAnswers: [
      'Warehouse staff are organizing inventory packages so that they can fulfill overseas orders.'
    ],
    analysis: 'Cấu trúc "in order to + V" giúp câu văn súc tích, mang tính logic cao phù hợp bối cảnh logistics.',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w1-6',
    itemNumber: 6,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: 'Mặc dù trời mưa, công nhân vẫn tiếp tục xây dựng',
    vietnamesePrompt: 'Mặc dù trời đang mưa rào, các công nhân xây dựng vẫn tiếp tục thi công dự án tòa nhà mới.',
    targetGrammar: 'Mệnh đề nhượng bộ với "Although" (Although + S + be + V-ing, S + V)',
    vocabularyHints: [
      { word: 'heavy rain', meaning: 'Mưa to, mưa rào', ipa: '/ˈhev.i reɪn/' },
      { word: 'construction workers', meaning: 'Công nhân xây dựng', ipa: '/kənˈstrʌk.ʃən/' },
      { word: 'proceed with', meaning: 'Tiếp tục tiến hành', ipa: '/prəˈsiːd wɪð/' }
    ],
    sampleEnglishAnswer: 'Although it is raining heavily, the construction workers are proceeding with the new building project.',
    alternativeAnswers: [
      'Although there is a heavy downpour, the crew continues working on the construction site.'
    ],
    analysis: 'Lưu ý không dùng "but" trong câu đã có "Although" (Lỗi người Việt hay gặp: "Although... but...").',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w1-7',
    itemNumber: 7,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: 'Người quản lý đang ký hợp đồng trước mặt đối tác',
    vietnamesePrompt: 'Vị giám đốc điều hành đang đặt bút ký vào bản hợp đồng chiến lược trước sự chứng kiến của các đối tác quốc tế.',
    targetGrammar: 'Giới từ chỉ sự hiện diện (in the presence of / in front of)',
    vocabularyHints: [
      { word: 'managing director', meaning: 'Giám đốc điều hành', ipa: '/ˈmæn.ɪ.dʒɪŋ daɪˈrek.tər/' },
      { word: 'strategic agreement', meaning: 'Thỏa thuận chiến lược', ipa: '/strəˈtiː.dʒɪk əˈɡriː.mənt/' },
      { word: 'international partners', meaning: 'Đối tác quốc tế', ipa: '/ˌɪn.təˈnæʃ.ən.əl/' }
    ],
    sampleEnglishAnswer: 'The managing director is signing the strategic contract in front of international business partners.',
    alternativeAnswers: [
      'The executive is signing the formal agreement in the presence of overseas representatives.'
    ],
    analysis: 'Chia đúng thì hiện tại tiếp diễn "is signing", danh từ đếm được "a contract" hoặc "the contract".',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w1-8',
    itemNumber: 8,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: 'Nhân viên lễ tân mỉm cười chào đón khách',
    vietnamesePrompt: 'Cô nhân viên lễ tân đang tươi cười trao thẻ phòng khách sạn cho hai vị khách vừa mới tới.',
    targetGrammar: 'Mệnh đề quan hệ rút gọn hoặc liên từ thời gian (who have just arrived)',
    vocabularyHints: [
      { word: 'receptionist', meaning: 'Nhân viên lễ tân', ipa: '/rɪˈsep.ʃən.ɪst/' },
      { word: 'key card', meaning: 'Thẻ từ mở phòng', ipa: '/kiː kɑːd/' },
      { word: 'newly arrived guests', meaning: 'Những vị khách vừa tới', ipa: '/ˈnjuː.li əˈraɪvd/' }
    ],
    sampleEnglishAnswer: 'The friendly receptionist is handing room key cards to two guests who have just arrived at the hotel.',
    alternativeAnswers: [
      'Smiling warmly, the front desk receptionist hands room keys to newly arrived visitors.'
    ],
    analysis: 'Mệnh đề quan hệ "who have just arrived" giúp câu miêu tả tự nhiên và đạt điểm ngữ pháp cao.',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w1-9',
    itemNumber: 9,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: 'Hành khách xếp hàng chờ lên máy bay',
    vietnamesePrompt: 'Nhiều hành khách đang kiên nhẫn xếp hàng tại cổng khởi hành để chuẩn bị lên chuyến bay quốc tế.',
    targetGrammar: 'Cụm động từ (line up / queue up) + giới từ (at the departure gate)',
    vocabularyHints: [
      { word: 'passengers', meaning: 'Hành khách', ipa: '/ˈpæs.ən.dʒərz/' },
      { word: 'line up patiently', meaning: 'Kiên nhẫn xếp hàng', ipa: '/laɪn ʌp ˈpeɪ.ʃənt.li/' },
      { word: 'departure gate', meaning: 'Cổng khởi hành sân bay', ipa: '/dɪˈpɑː.tʃər ɡeɪt/' },
      { word: 'board', meaning: 'Lên máy bay/tàu', ipa: '/bɔːd/' }
    ],
    sampleEnglishAnswer: 'Several passengers are lining up patiently at the departure gate in order to board their international flight.',
    alternativeAnswers: [
      'Travelers are waiting in line at the boarding gate before their flight departs.'
    ],
    analysis: 'Từ vựng chuẩn TOEIC hàng không: departure gate, board a flight.',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w1-10',
    itemNumber: 10,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: 'Nhân viên y tế đo huyết áp cho bệnh nhân',
    vietnamesePrompt: 'Người y tá đang cẩn thận đo huyết áp cho một bệnh nhân cao tuổi trong phòng khám bệnh.',
    targetGrammar: 'Cấu trúc V + O + giới từ chỉ vị trí (in the examination room)',
    vocabularyHints: [
      { word: 'registered nurse', meaning: 'Y tá chính quy', ipa: '/nɜːs/' },
      { word: 'measure blood pressure', meaning: 'Đo huyết áp', ipa: '/ˈmeʒ.ər blʌd ˈpreʃ.ər/' },
      { word: 'elderly patient', meaning: 'Bệnh nhân cao tuổi', ipa: '/ˈel.dəl.i ˈpeɪ.ʃənt/' },
      { word: 'examination room', meaning: 'Phòng khám bệnh', ipa: '/ɪɡˌzæm.ɪˈneɪ.ʃən/' }
    ],
    sampleEnglishAnswer: 'The nurse is carefully measuring the blood pressure of an elderly patient in the examination room.',
    alternativeAnswers: [
      'In the clinic, a healthcare worker is taking an elderly patient’s blood pressure.'
    ],
    analysis: 'Cụm từ chuyên môn "measure blood pressure" / "take blood pressure".',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w1-11',
    itemNumber: 11,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: 'Đầu bếp chuẩn bị món ăn trong bếp nhà hàng',
    vietnamesePrompt: 'Đầu bếp trưởng đang nêm gia vị cho món ăn trong khi các phụ bếp nhanh chóng thái rau củ quả.',
    targetGrammar: 'Mệnh đề phức với liên từ tương phản "while" (While S + V, S + V)',
    vocabularyHints: [
      { word: 'head chef', meaning: 'Bếp trưởng', ipa: '/hed ʃef/' },
      { word: 'seasoning the dish', meaning: 'Nêm nếm gia vị cho món ăn', ipa: '/ˈsiː.zən.ɪŋ/' },
      { word: 'kitchen assistants', meaning: 'Các phụ bếp', ipa: '/əˈsɪs.tənts/' },
      { word: 'chop fresh vegetables', meaning: 'Thái rau củ quả tươi', ipa: '/tʃɒp/' }
    ],
    sampleEnglishAnswer: 'The head chef is seasoning the dish while his assistants are chopping fresh vegetables.',
    alternativeAnswers: [
      'While the kitchen assistants chop vegetables, the chef is preparing the main course.'
    ],
    analysis: 'Hai mệnh đề thì tiếp diễn cân xứng, từ vựng ẩm thực tự nhiên.',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w1-12',
    itemNumber: 12,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: 'Nhân viên bảo trì sửa chữa bóng đèn',
    vietnamesePrompt: 'Người thợ điện đang đứng trên một chiếc thang cao để thay bóng đèn chiếu sáng trên trần văn phòng.',
    targetGrammar: 'Phân từ hiện tại chỉ tư thế (standing on a ladder to replace...)',
    vocabularyHints: [
      { word: 'electrician / technician', meaning: 'Thợ điện / kỹ thuật viên', ipa: '/ɪˌlekˈtrɪʃ.ən/' },
      { word: 'standing on a ladder', meaning: 'Đứng trên một chiếc thang', ipa: '/ˈlæd.ər/' },
      { word: 'ceiling light bulb', meaning: 'Bóng đèn trần', ipa: '/ˈsiː.lɪŋ laɪt bʌlb/' }
    ],
    sampleEnglishAnswer: 'A technician is standing on a tall ladder to replace a broken light bulb on the ceiling.',
    alternativeAnswers: [
      'The maintenance worker is on a ladder in order to change the office ceiling lamp.'
    ],
    analysis: 'Cụm giới từ "on a tall ladder" và mục đích "to replace a broken light bulb".',
    difficulty: 'Cơ bản (500+)'
  },

  // =========================================================================
  // PHẦN 2: WRITING PART 2 - EMAIL THƯƠNG MẠI & YÊU CẦU (CÂU 13 - 24)
  // =========================================================================
  {
    id: 'trans-w2-1',
    itemNumber: 13,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Thương Mại',
    partCategory: 'sentence',
    title: 'Lời cảm ơn thư & Xác nhận tham gia hội thảo',
    vietnamesePrompt: 'Cảm ơn bà đã gửi lời mời; tôi rất vui mừng xác nhận rằng tôi sẽ tham dự trực tiếp buổi hội thảo vào thứ Sáu tới.',
    targetGrammar: 'Cấu trúc xác nhận trang trọng (I am pleased to confirm that S + will + V)',
    vocabularyHints: [
      { word: 'pleased to confirm', meaning: 'Vui mừng xác nhận', ipa: '/pliːzd tuː kənˈfɜːm/' },
      { word: 'attend in person', meaning: 'Tham dự trực tiếp bằng xương bằng thịt', ipa: '/əˈtend ɪn ˈpɜː.sən/' },
      { word: 'upcoming workshop', meaning: 'Buổi hội thảo sắp tới', ipa: '/ˈwɜːk.ʃɒp/' }
    ],
    sampleEnglishAnswer: 'Thank you for your invitation; I am pleased to confirm that I will attend the upcoming workshop in person next Friday.',
    alternativeAnswers: [
      'Thank you for reaching out, and I am glad to confirm my in-person attendance at the workshop next Friday.'
    ],
    analysis: 'Mẫu câu mở đầu chuẩn mực của email thương mại đạt điểm tối đa phong cách trang trọng (Formal Register).',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w2-2',
    itemNumber: 14,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Thương Mại',
    partCategory: 'sentence',
    title: 'Yêu cầu bồi thường phí vận chuyển vì trễ hẹn',
    vietnamesePrompt: 'Vì đơn hàng của chúng tôi bị giao trễ ba ngày, chúng tôi đề nghị quý công ty miễn phí vận chuyển cho đơn hàng này.',
    targetGrammar: 'Mệnh đề nguyên nhân (Since / As) + Cấu trúc yêu cầu (request that S + verb-bare)',
    vocabularyHints: [
      { word: 'delayed by three days', meaning: 'Bị trễ mất ba ngày', ipa: '/dɪˈleɪd/' },
      { word: 'waive the shipping fee', meaning: 'Miễn phí cước vận chuyển', ipa: '/weɪv/' },
      { word: 'delivery charges', meaning: 'Chi phí giao hàng', ipa: '/dɪˈlɪv.ər.i ˈtʃɑː.dʒɪz/' }
    ],
    sampleEnglishAnswer: 'Since our shipment was delayed by three days, we kindly request that you waive the delivery charges for this order.',
    alternativeAnswers: [
      'Because the order arrived three days late, we would appreciate it if you could waive the shipping fees.'
    ],
    analysis: 'Từ vựng thương mại C1: "waive" (miễn thu phí). Dùng "kindly request" vừa lịch thiệp vừa dứt khoát.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-w2-3',
    itemNumber: 15,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Thương Mại',
    partCategory: 'sentence',
    title: 'Hỏi về thời hạn cung cấp tài liệu họp',
    vietnamesePrompt: 'Bạn có thể vui lòng cho tôi biết liệu tài liệu thuyết trình có được phân phát tại phòng họp hay chúng tôi nên tải về trước không?',
    targetGrammar: 'Câu hỏi gián tiếp lịch sự (Could you please clarify whether A or B?)',
    vocabularyHints: [
      { word: 'clarify whether', meaning: 'Làm rõ liệu rằng', ipa: '/ˈklær.ɪ.faɪ ˈweð.ər/' },
      { word: 'handout materials', meaning: 'Tài liệu phát tay', ipa: '/ˈhænd.aʊt/' },
      { word: 'download beforehand', meaning: 'Tải về trước', ipa: '/bɪˈfɔː.hænd/' }
    ],
    sampleEnglishAnswer: 'Could you please clarify whether presentation handouts will be distributed at the venue or if we should download them beforehand?',
    alternativeAnswers: [
      'Would you mind letting me know whether we will receive printed slides at the meeting or download them in advance?'
    ],
    analysis: 'Tránh dùng câu hỏi trực tiếp cộc lốc; dùng "Could you please clarify whether..." đạt chuẩn ETS Part 2 Writing.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-w2-4',
    itemNumber: 16,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Thương Mại',
    partCategory: 'sentence',
    title: 'Đề xuất đổi giờ họp do trùng lịch',
    vietnamesePrompt: 'Thật không may, tôi có một cuộc gọi quan trọng với khách hàng vào lúc 2 giờ chiều, vì vậy tôi muốn đề xuất dời lịch họp sang 4 giờ chiều.',
    targetGrammar: 'Cấu trúc đề xuất dời lịch (propose rescheduling the meeting to + time)',
    vocabularyHints: [
      { word: 'scheduling conflict', meaning: 'Sự trùng lặp lịch trình', ipa: '/ˈʃedʒ.uːl.ɪŋ/' },
      { word: 'propose rescheduling', meaning: 'Đề xuất đổi lịch', ipa: '/prəˈpəʊz ˌriːˈskedʒ.uːl.ɪŋ/' },
      { word: 'prior commitment', meaning: 'Cam kết/cuộc hẹn đã có từ trước', ipa: '/praɪər kəˈmɪt.mənt/' }
    ],
    sampleEnglishAnswer: 'Unfortunately, I have a prior commitment with an overseas client at 2:00 PM, so I would like to propose rescheduling our session to 4:00 PM.',
    alternativeAnswers: [
      'Due to an unexpected scheduling conflict at 2:00 PM, could we please move the meeting to 4:00 PM?'
    ],
    analysis: 'Cụm từ "prior commitment" (lịch hẹn từ trước) thay cho cách diễn đạt non nớt "I am busy".',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-w2-5',
    itemNumber: 17,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Thương Mại',
    partCategory: 'sentence',
    title: 'Xin lỗi vì sự bất tiện của hệ thống bảo trì',
    vietnamesePrompt: 'Chúng tôi chân thành xin lỗi vì bất kỳ sự bất tiện nào mà đợt bảo trì máy chủ đột xuất này có thể gây ra cho doanh nghiệp của quý vị.',
    targetGrammar: 'Mẫu câu tạ lỗi doanh nghiệp (sincerely apologize for any inconvenience caused by...)',
    vocabularyHints: [
      { word: 'sincerely apologize', meaning: 'Chân thành xin lỗi', ipa: '/sɪnˈsɪə.li əˈpɒl.ə.dʒaɪz/' },
      { word: 'inconvenience', meaning: 'Sự bất tiện', ipa: '/ˌɪn.kənˈviː.ni.əns/' },
      { word: 'unscheduled maintenance', meaning: 'Bảo trì không báo trước', ipa: '/ʌnˈʃedʒ.uːld/' }
    ],
    sampleEnglishAnswer: 'We sincerely apologize for any inconvenience this unscheduled server maintenance may cause to your business operations.',
    alternativeAnswers: [
      'Please accept our sincere apologies for any disruption caused by the emergency system maintenance.'
    ],
    analysis: 'Mẫu câu kinh điển trong mọi email chăm sóc khách hàng doanh nghiệp.',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w2-6',
    itemNumber: 18,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Thương Mại',
    partCategory: 'sentence',
    title: 'Yêu cầu kế hoạch dự phòng sao lưu dữ liệu',
    vietnamesePrompt: 'Để bảo vệ an toàn cho hồ sơ của chúng tôi, chúng tôi yêu cầu đội ngũ của bạn cung cấp kế hoạch dự phòng sao lưu dữ liệu tự động.',
    targetGrammar: 'Mục đích (In order to protect...) + Cấu trúc yêu cầu (request that your team provide...)',
    vocabularyHints: [
      { word: 'safeguard our records', meaning: 'Bảo vệ hồ sơ của chúng tôi', ipa: '/ˈseɪf.ɡɑːd/' },
      { word: 'contingency plan', meaning: 'Kế hoạch dự phòng khẩn cấp', ipa: '/kənˈtɪn.dʒən.si plæn/' },
      { word: 'automated backup', meaning: 'Sao lưu tự động', ipa: '/ˈɔː.tə.meɪ.tɪd ˈbæk.ʌp/' }
    ],
    sampleEnglishAnswer: 'In order to safeguard our critical records, we request that your team provide a contingency plan for automated data backups.',
    alternativeAnswers: [
      'To ensure data security, please provide us with a detailed contingency plan before the system upgrade begins.'
    ],
    analysis: '"Contingency plan" là collocations đắt giá bậc nhất trong phần thi Email TOEIC Writing.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-w2-7',
    itemNumber: 19,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Thương Mại',
    partCategory: 'sentence',
    title: 'Hỏi về thời gian phản hồi kỹ thuật khẩn cấp',
    vietnamesePrompt: 'Đội ngũ kỹ thuật của quý công ty sẽ phản hồi nhanh như thế nào nếu xảy ra sự cố gián đoạn dữ liệu sau khi nâng cấp phần mềm?',
    targetGrammar: 'Câu hỏi trực tiếp trong thư (How quickly will your team respond if S + V?)',
    vocabularyHints: [
      { word: 'technical team', meaning: 'Đội ngũ kỹ thuật', ipa: '/ˈtek.nɪ.kəl tiːm/' },
      { word: 'data synchronization issue', meaning: 'Vấn đề đồng bộ hóa dữ liệu', ipa: '/ˌsɪŋ.krə.naɪˈzeɪ.ʃən/' },
      { word: 'post-upgrade outage', meaning: 'Sự cố mất kết nối sau nâng cấp', ipa: '/ˈaʊ.tɪdʒ/' }
    ],
    sampleEnglishAnswer: 'How quickly will your engineering team respond if data synchronization issues arise following the software upgrade?',
    alternativeAnswers: [
      'Could you specify your team’s guaranteed response time if an unexpected system failure occurs after maintenance?'
    ],
    analysis: 'Đảm bảo có dấu chấm hỏi (?) rõ ràng để đạt trọn vẹn điểm tiêu chí Task Completion của ETS.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-w2-8',
    itemNumber: 20,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Thương Mại',
    partCategory: 'sentence',
    title: 'Đề xuất giao hàng từng phần trước hạn chót',
    vietnamesePrompt: 'Chúng tôi mong bạn có thể sắp xếp giao trước một phần số bàn ghế công thái học trước thứ Sáu tuần này.',
    targetGrammar: 'Cấu trúc mong muốn lịch sự (We would appreciate it if you could arrange...)',
    vocabularyHints: [
      { word: 'partial shipment', meaning: 'Chuyến giao hàng từng phần', ipa: '/ˈpɑː.ʃəl ˈʃɪp.mənt/' },
      { word: 'ergonomic chairs', meaning: 'Ghế ngồi công thái học', ipa: '/ˌɜː.ɡəˈnɒm.ɪk/' },
      { word: 'by Friday at the latest', meaning: 'Chậm nhất là trước thứ Sáu', ipa: '/æt ðə ˈleɪ.tɪst/' }
    ],
    sampleEnglishAnswer: 'We would appreciate it if you could arrange an expedited partial shipment of the ergonomic chairs by Friday at the latest.',
    alternativeAnswers: [
      'Could you please deliver a portion of the office furniture before Friday so our new staff have workstations?'
    ],
    analysis: '"We would appreciate it if you could..." là mẫu câu vàng thể hiện sự nhã nhặn và chuyên nghiệp cao cấp.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-w2-9',
    itemNumber: 21,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Thương Mại',
    partCategory: 'sentence',
    title: 'Gửi kèm bản dự toán ngân sách đính kèm',
    vietnamesePrompt: 'Tôi xin gửi kèm bản dự toán chi phí chi tiết trong tệp đính kèm để ban giám đốc xem xét và phê duyệt.',
    targetGrammar: 'Cấu trúc đính kèm tài liệu (Please find attached the + Noun + for your review)',
    vocabularyHints: [
      { word: 'attached document', meaning: 'Tài liệu đính kèm', ipa: '/əˈtætʃt/' },
      { word: 'budget estimate', meaning: 'Bản dự toán ngân sách', ipa: '/ˈbʌdʒ.ɪt ˈes.tɪ.mət/' },
      { word: 'for your review and approval', meaning: 'Để quý vị xem xét và phê duyệt', ipa: '/əˈpruː.vəl/' }
    ],
    sampleEnglishAnswer: 'Please find attached the comprehensive budget estimate for your review and formal approval.',
    alternativeAnswers: [
      'I have attached the itemized cost breakdown for your consideration and sign-off.'
    ],
    analysis: 'Mẫu câu "Please find attached..." là chuẩn mực quốc tế khi gửi file qua email.',
    difficulty: 'Cơ bản (500+)'
  },
  {
    id: 'trans-w2-10',
    itemNumber: 22,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Thương Mại',
    partCategory: 'sentence',
    title: 'Nhắc nhở nhẹ nhàng về hóa đơn quá hạn',
    vietnamesePrompt: 'Đây là lời nhắc nhở lịch sự rằng hóa đơn số #INV-9021 hiện đã quá hạn thanh toán mười lăm ngày.',
    targetGrammar: 'Cấu trúc thư đòi nợ lịch sự (This is a friendly reminder that invoice #... is now overdue)',
    vocabularyHints: [
      { word: 'friendly reminder', meaning: 'Lời nhắc nhở thân thiện', ipa: '/ˈfrend.li rɪˈmaɪn.dər/' },
      { word: 'outstanding invoice', meaning: 'Hóa đơn chưa thanh toán', ipa: '/ˌaʊtˈstæn.dɪŋ ˈɪn.vɔɪs/' },
      { word: 'past due', meaning: 'Quá hạn thanh toán', ipa: '/pɑːst dʒuː/' }
    ],
    sampleEnglishAnswer: 'This is a friendly reminder that invoice #INV-9021 is now fifteen days past due.',
    alternativeAnswers: [
      'We would like to remind you that payment for invoice #INV-9021 is currently overdue by two weeks.'
    ],
    analysis: 'Văn phong tế nhị nhưng rõ ràng, giữ mối quan hệ hợp tác tốt với đối tác.',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w2-11',
    itemNumber: 23,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Thương Mại',
    partCategory: 'sentence',
    title: 'Xác nhận gia hạn thời hạn nộp hồ sơ',
    vietnamesePrompt: 'Theo yêu cầu của bạn, chúng tôi đã đồng ý gia hạn thời hạn nộp đề xuất dự án thêm một tuần.',
    targetGrammar: 'Cụm giới từ dẫn chiếu (Per your request / As requested) + extend the deadline',
    vocabularyHints: [
      { word: 'per your request', meaning: 'Theo yêu cầu của bạn', ipa: '/pɜː jɔː rɪˈkwest/' },
      { word: 'extend the submission deadline', meaning: 'Gia hạn hạn chót nộp bài', ipa: '/ɪkˈstend ðə ˈded.laɪn/' },
      { word: 'project proposal', meaning: 'Đề xuất dự án', ipa: '/ˈprɒdʒ.ekt prəˈpəʊ.zəl/' }
    ],
    sampleEnglishAnswer: 'Per your request, we are pleased to grant a one-week extension on the proposal submission deadline.',
    alternativeAnswers: [
      'As requested, we have extended the deadline for submitting the project proposal by one week.'
    ],
    analysis: 'Từ vựng "grant an extension" (chấp thuận gia hạn) cực kỳ tự nhiên.',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w2-12',
    itemNumber: 24,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Thương Mại',
    partCategory: 'sentence',
    title: 'Lời kết thư mong đợi phản hồi sớm',
    vietnamesePrompt: 'Tôi rất mong sớm nhận được phản hồi của bạn và hy vọng có cơ hội hợp tác trong dự án sắp tới.',
    targetGrammar: 'Cấu trúc mong đợi (look forward to + V-ing)',
    vocabularyHints: [
      { word: 'look forward to', meaning: 'Rất trông đợi', ipa: '/lʊk ˈfɔː.wəd tuː/' },
      { word: 'prompt response', meaning: 'Phản hồi nhanh chóng', ipa: '/prɒmpt rɪˈspɒns/' },
      { word: 'collaborating', meaning: 'Hợp tác cùng nhau', ipa: '/kəˈlæb.ə.reɪ.tɪŋ/' }
    ],
    sampleEnglishAnswer: 'I look forward to hearing from you soon and exploring collaborative opportunities on this upcoming initiative.',
    alternativeAnswers: [
      'We look forward to your prompt response and to working together on the upcoming venture.'
    ],
    analysis: 'Lưu ý bắt buộc: sau "look forward to" phải là V-ing hoặc Danh từ (hearing from you, seeing you).',
    difficulty: 'Cơ bản (500+)'
  },

  // =========================================================================
  // PHẦN 3: SPEAKING PART 2 - MIÊU TẢ TRANH O-P-B-A (CÂU 25 - 36)
  // =========================================================================
  {
    id: 'trans-s2-1',
    itemNumber: 25,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: 'Câu mở đầu tổng quan bức tranh (Overview)',
    vietnamesePrompt: 'Bức ảnh này được chụp tại một văn phòng mở hiện đại, nơi một nhóm đồng nghiệp đang thảo luận quanh bàn làm việc.',
    targetGrammar: 'Mẫu câu mở đầu O-P-B-A (This picture was taken in / depicts a... where S + V)',
    vocabularyHints: [
      { word: 'modern open-plan office', meaning: 'Văn phòng mở hiện đại', ipa: '/ˈəʊ.pən plæn ˈɒf.ɪs/' },
      { word: 'group of colleagues', meaning: 'Nhóm đồng nghiệp', ipa: '/ˈkɒl.iːɡz/' },
      { word: 'gathered around', meaning: 'Tụ tập quanh', ipa: '/ˈɡæð.əd əˈraʊnd/' }
    ],
    sampleEnglishAnswer: 'This picture was taken in a modern open-plan office where a group of colleagues are gathered around a conference table.',
    alternativeAnswers: [
      'This image depicts a lively office setting where several professionals are collaborating around a desk.'
    ],
    analysis: 'Câu mở bài chuẩn 5 giây đầu tiên: vừa xác định địa điểm (office) vừa chỉ ra đối tượng chính (colleagues).',
    difficulty: 'Cơ bản (500+)'
  },
  {
    id: 'trans-s2-2',
    itemNumber: 26,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: 'Miêu tả hành động người ở vị trí trung tâm (People Focus)',
    vietnamesePrompt: 'Ở chính giữa bức hình, một người phụ nữ mặc áo sơ mi trắng đang chỉ tay vào màn hình máy tính xách tay.',
    targetGrammar: 'Vị trí không gian + Mệnh đề Hiện tại tiếp diễn (In the center, a woman wearing... is pointing at...)',
    vocabularyHints: [
      { word: 'in the center of the image', meaning: 'Ở chính giữa bức ảnh', ipa: '/ˈsen.tər/' },
      { word: 'wearing a white blouse', meaning: 'Mặc áo sơ mi nữ màu trắng', ipa: '/blaʊz/' },
      { word: 'pointing at the laptop screen', meaning: 'Chỉ tay vào màn hình laptop', ipa: '/ˈpɔɪn.tɪŋ/' }
    ],
    sampleEnglishAnswer: 'In the center of the image, a woman wearing a white blouse is pointing directly at a laptop screen.',
    alternativeAnswers: [
      'Right in the middle, a female professional in business attire is gesturing toward a computer monitor.'
    ],
    analysis: 'Kết hợp trang phục (wearing a blouse) và hành động chính (pointing at) giúp miêu tả sinh động.',
    difficulty: 'Cơ bản (500+)'
  },
  {
    id: 'trans-s2-3',
    itemNumber: 27,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: 'Miêu tả cử chỉ của người ngồi bên cạnh',
    vietnamesePrompt: 'Bên cạnh cô ấy, một nam nhân viên đang chăm chú nghiêng người về phía trước và ghi chép vào cuốn sổ tay.',
    targetGrammar: 'Hai hành động tiếp diễn nối bằng "and" (is leaning forward attentively and taking notes)',
    vocabularyHints: [
      { word: 'leaning forward', meaning: 'Nghiêng người về phía trước', ipa: '/ˈliː.nɪŋ ˈfɔː.wəd/' },
      { word: 'taking notes in a notepad', meaning: 'Ghi chú vào sổ tay', ipa: '/ˈnəʊt.pæd/' },
      { word: 'listening attentively', meaning: 'Lắng nghe chăm chú', ipa: '/əˈten.tɪv.li/' }
    ],
    sampleEnglishAnswer: 'Beside her, a male coworker is leaning forward attentively while taking notes in a leather notepad.',
    alternativeAnswers: [
      'Next to her, a man is leaning in closely and jotting down notes in his notebook.'
    ],
    analysis: 'Cụm từ "lean forward" diễn tả tư thế rất chân thực trong phòng thi Speaking Part 2.',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s2-4',
    itemNumber: 28,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: 'Miêu tả chi tiết hậu cảnh (Background)',
    vietnamesePrompt: 'Ở hậu cảnh, có những cửa sổ kính lớn từ sàn tới trần cho phép ánh sáng tự nhiên tràn ngập căn phòng.',
    targetGrammar: 'Cấu trúc tồn tại với "There are" + Mệnh đề quan hệ chỉ chức năng (which allow...)',
    vocabularyHints: [
      { word: 'in the background', meaning: 'Ở phía sau / hậu cảnh', ipa: '/ˈbæk.ɡraʊnd/' },
      { word: 'floor-to-ceiling windows', meaning: 'Cửa sổ kính kịch trần', ipa: '/flɔːr tuː ˈsiː.lɪŋ/' },
      { word: 'natural sunlight to flood the room', meaning: 'Ánh sáng tự nhiên tràn ngập phòng', ipa: '/flʌd/' }
    ],
    sampleEnglishAnswer: 'In the background, there are large floor-to-ceiling glass windows that allow bright natural light to fill the entire space.',
    alternativeAnswers: [
      'In the background, sunlight is streaming in through large glass windows, illuminating the office.'
    ],
    analysis: 'Từ vựng "floor-to-ceiling windows" được giám khảo ETS đánh giá rất cao về khả năng quan sát chi tiết.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-s2-5',
    itemNumber: 29,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: 'Cảm nhận chung về không khí làm việc (Atmosphere)',
    vietnamesePrompt: 'Nhìn chung, bầu không khí có vẻ rất năng động, chuyên nghiệp và tràn đầy tinh thần hợp tác.',
    targetGrammar: 'Mẫu câu chốt cảm nhận O-P-B-A (Overall, the atmosphere appears to be...)',
    vocabularyHints: [
      { word: 'overall', meaning: 'Nhìn chung / tổng thể', ipa: '/ˌəʊ.vərˈɔːl/' },
      { word: 'productive atmosphere', meaning: 'Bầu không khí làm việc hiệu quả', ipa: '/prəˈdʌk.tɪv/' },
      { word: 'collaborative spirit', meaning: 'Tinh thần tương trợ cộng tác', ipa: '/kəˈlæb.ər.ə.tɪv ˈspɪr.ɪt/' }
    ],
    sampleEnglishAnswer: 'Overall, the atmosphere appears highly productive, professional, and full of collaborative energy.',
    alternativeAnswers: [
      'Judging from their focused expressions, the overall environment seems very dynamic and teamwork-oriented.'
    ],
    analysis: 'Câu kết hoàn hảo ở giây thứ 25–30 của bài nói Part 2.',
    difficulty: 'Cơ bản (500+)'
  },
  {
    id: 'trans-s2-6',
    itemNumber: 30,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: 'Miêu tả đường phố với dòng xe cộ tấp nập',
    vietnamesePrompt: 'Bức ảnh chụp một ngã tư đường phố sầm uất với nhiều phương tiện giao thông đang di chuyển chậm chạp trong giờ cao điểm.',
    targetGrammar: 'Giới từ chỉ thời gian (during rush hour) + Mệnh đề phân từ',
    vocabularyHints: [
      { word: 'busy intersection', meaning: 'Ngã tư đường sầm uất', ipa: '/ˌɪn.təˈsek.ʃən/' },
      { word: 'moving slowly', meaning: 'Di chuyển chậm chạp', ipa: '/ˈsləʊ.li/' },
      { word: 'rush hour traffic', meaning: 'Giao thông giờ cao điểm', ipa: '/rʌʃ aʊər/' }
    ],
    sampleEnglishAnswer: 'This image captures a bustling street intersection where numerous vehicles are crawling slowly through rush-hour traffic.',
    alternativeAnswers: [
      'The photo shows a crowded urban intersection packed with cars during the evening commute.'
    ],
    analysis: 'Từ vựng "bustling street intersection" và "rush-hour traffic" chuẩn bối cảnh đô thị.',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s2-7',
    itemNumber: 31,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: 'Người đi bộ sang đường trên vạch kẻ',
    vietnamesePrompt: 'Ở tiền cảnh, một số người đi bộ đang rảo bước băng qua đường trên vạch kẻ đường dành cho người đi bộ.',
    targetGrammar: 'Vị trí tiền cảnh (In the foreground) + Giới từ (at the crosswalk / zebra crossing)',
    vocabularyHints: [
      { word: 'in the foreground', meaning: 'Ở phía trước / tiền cảnh', ipa: '/ˈfɔː.ɡraʊnd/' },
      { word: 'pedestrians', meaning: 'Người đi bộ', ipa: '/pəˈdes.tri.ənz/' },
      { word: 'crosswalk / zebra crossing', meaning: 'Vạch kẻ sang đường', ipa: '/ˈkrɒs.wɔːk/' }
    ],
    sampleEnglishAnswer: 'In the foreground, several pedestrians are striding across the road at a designated crosswalk.',
    alternativeAnswers: [
      'In the front of the picture, people are crossing the street on the pedestrian crosswalk.'
    ],
    analysis: 'Dùng "pedestrians" thay vì lặp từ "people" đơn điệu.',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s2-8',
    itemNumber: 32,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: 'Khách hàng đang chọn đồ trên giá siêu thị',
    vietnamesePrompt: 'Một người phụ nữ đẩy xe hàng dọc theo lối đi siêu thị và dừng lại để lựa chọn thực phẩm đóng hộp trên kệ.',
    targetGrammar: 'Hai mệnh đề liên tiếp (pushing a cart along the aisle and stopping to select...)',
    vocabularyHints: [
      { word: 'supermarket aisle', meaning: 'Lối đi giữa các dãy kệ siêu thị', ipa: '/aɪl/' },
      { word: 'shopping cart', meaning: 'Xe đẩy hàng', ipa: '/ˈʃɒp.ɪŋ kɑːt/' },
      { word: 'canned goods', meaning: 'Đồ hộp', ipa: '/kænd ɡʊdz/' },
      { word: 'on the shelves', meaning: 'Trên các kệ giá', ipa: '/ʃelvz/' }
    ],
    sampleEnglishAnswer: 'A shopper is pushing a cart along the supermarket aisle and pausing to inspect canned goods on the shelves.',
    alternativeAnswers: [
      'A woman is browsing food items on the grocery shelves with her shopping cart nearby.'
    ],
    analysis: 'Lưu ý từ "aisle" phát âm câm chữ s: /aɪl/.',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s2-9',
    itemNumber: 33,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: 'Khung cảnh quầy cà phê ngoài trời',
    vietnamesePrompt: 'Nhiều khách hàng đang ngồi thư giãn dưới những chiếc ô che nắng lớn tại một quán cà phê vỉa hè ngoài trời.',
    targetGrammar: 'Giới từ (under large umbrellas) + (at an outdoor sidewalk cafe)',
    vocabularyHints: [
      { word: 'patrons / customers', meaning: 'Thực khách / khách hàng quen', ipa: '/ˈpeɪ.trənz/' },
      { word: 'large sun umbrellas', meaning: 'Những chiếc dù che nắng lớn', ipa: '/ʌmˈbrel.əz/' },
      { word: 'outdoor sidewalk café', meaning: 'Quán cà phê vỉa hè ngoài trời', ipa: '/ˈsaɪd.wɔːk kæfˈeɪ/' }
    ],
    sampleEnglishAnswer: 'Several patrons are sitting comfortably under large umbrellas, enjoying beverages at an outdoor sidewalk café.',
    alternativeAnswers: [
      'People are relaxing at patio tables outside a coffee shop on a sunny afternoon.'
    ],
    analysis: 'Từ "patrons" thể hiện vốn từ vựng phong phú ở band điểm cao Speaking.',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s2-10',
    itemNumber: 34,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: 'Diễn giả đứng cạnh bục phát biểu',
    vietnamesePrompt: 'Người đàn ông đứng sau bục phát biểu, tự tin nhìn về phía khán phòng và vẫy tay chào người nghe.',
    targetGrammar: 'Phân từ chỉ hành động song song (standing behind the podium, addressing the audience)',
    vocabularyHints: [
      { word: 'lectern / podium', meaning: 'Bục phát biểu', ipa: '/ˈpəʊ.di.əm/' },
      { word: 'addressing the audience', meaning: 'Phát biểu trước khán giả', ipa: '/əˈdres.ɪŋ/' },
      { word: 'confidently', meaning: 'Một cách tự tin', ipa: '/ˈkɒn.fɪ.dənt.li/' }
    ],
    sampleEnglishAnswer: 'Standing behind a wooden podium, the speaker is confidently addressing a large audience in an auditorium.',
    alternativeAnswers: [
      'A man is giving a keynote speech from behind a lectern to an attentive crowd.'
    ],
    analysis: 'Từ vựng "podium" hoặc "lectern" miêu tả chính xác đồ vật trong hội trường.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-s2-11',
    itemNumber: 35,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: 'Công nhân nhà máy đeo đồ bảo hộ',
    vietnamesePrompt: 'Tất cả các công nhân trong nhà máy đều đang đội mũ bảo hộ màu vàng và mặc áo khoác có phản quang để đảm bảo an toàn.',
    targetGrammar: 'Mục đích (to ensure compliance with safety standards)',
    vocabularyHints: [
      { word: 'hard hats', meaning: 'Mũ bảo hộ cứng', ipa: '/hɑːd hæts/' },
      { word: 'reflective vests', meaning: 'Áo khoác có phản quang', ipa: '/rɪˈflek.tɪv vests/' },
      { word: 'safety compliance', meaning: 'Sự tuân thủ quy định an toàn', ipa: '/kəmˈplaɪ.əns/' }
    ],
    sampleEnglishAnswer: 'All factory workers are wearing yellow hard hats and high-visibility vests to maintain strict safety standards.',
    alternativeAnswers: [
      'The workers in the manufacturing facility are equipped with protective helmets and safety gear.'
    ],
    analysis: '"Hard hats" và "high-visibility vests" là cụm từ chuẩn mực khi thi Speaking Part 2 về tranh xưởng sản xuất.',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s2-12',
    itemNumber: 36,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: 'Phỏng đoán tâm trạng dựa trên nét mặt (Assumption)',
    vietnamesePrompt: 'Dựa vào nụ cười rạng rỡ của họ, có vẻ như nhóm dự án vừa hoàn thành một cột mốc công việc quan trọng.',
    targetGrammar: 'Mẫu câu phỏng đoán (Judging from their smiles, it appears that S + have + V3)',
    vocabularyHints: [
      { word: 'judging from', meaning: 'Đánh giá từ / Dựa vào', ipa: '/ˈdʒʌdʒ.ɪŋ frɒm/' },
      { word: 'beaming smiles', meaning: 'Nụ cười rạng rỡ', ipa: '/ˈbiː.mɪŋ/' },
      { word: 'major milestone', meaning: 'Cột mốc quan trọng', ipa: '/ˈmeɪ.dʒər ˈmaɪl.stəʊn/' }
    ],
    sampleEnglishAnswer: 'Judging from their cheerful expressions, it seems that the team has just celebrated a major project milestone.',
    alternativeAnswers: [
      'They all look very satisfied, suggesting that their recent presentation was a great success.'
    ],
    analysis: 'Mẫu câu "Judging from their expressions..." giúp câu trả lời tự nhiên và sâu sắc hơn hẳn việc chỉ miêu tả bề nổi.',
    difficulty: 'Nâng cao (800+)'
  },

  // =========================================================================
  // PHẦN 4: SPEAKING PART 3 & 4 - PHẢN XẠ NHANH & LỊCH TRÌNH (CÂU 37 - 48)
  // =========================================================================
  {
    id: 'trans-s3-1',
    itemNumber: 37,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: 'Trả lời trực diện tần suất mua sắm (Q5/Q6 - 15s)',
    vietnamesePrompt: 'Tôi thường mua sắm quần áo trực tuyến khoảng hai lần một tháng vì các trang thương mại điện tử giúp tôi dễ dàng so sánh giá cả.',
    targetGrammar: 'Câu trả lời trực tiếp trong 3s đầu + Mệnh đề lý do (because S + V)',
    vocabularyHints: [
      { word: 'shop for clothing online', meaning: 'Mua sắm quần áo trên mạng', ipa: '/ʃɒp fɔːr ˈkləʊ.ðɪŋ/' },
      { word: 'twice a month', meaning: 'Hai lần một tháng', ipa: '/twaɪs ə mʌnθ/' },
      { word: 'compare prices easily', meaning: 'So sánh giá cả dễ dàng', ipa: '/kəmˈpeər/' }
    ],
    sampleEnglishAnswer: 'I usually purchase clothing online about twice a month because e-commerce platforms allow me to compare prices effortlessly.',
    alternativeAnswers: [
      'I buy clothes online roughly two times each month as it offers convenient price comparisons.'
    ],
    analysis: 'Đạt chuẩn phản xạ 15 giây: Trả lời thẳng tần suất ở câu 1 và đưa ngay lý do thực tế ở câu 2.',
    difficulty: 'Cơ bản (500+)'
  },
  {
    id: 'trans-s3-2',
    itemNumber: 38,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: 'Bày tỏ sở thích giữa đọc sách giấy hay sách điện tử (Q6 - 15s)',
    vietnamesePrompt: 'Tôi chắc chắn thích đọc sách giấy truyền thống hơn sách điện tử vì cảm giác lật giở từng trang giấy giúp tôi tập trung hơn.',
    targetGrammar: 'Cấu trúc so sánh sở thích (prefer A to B because S + V)',
    vocabularyHints: [
      { word: 'definitely prefer', meaning: 'Chắc chắn thích hơn', ipa: '/ˈdef.ɪ.nət.li prɪˈfɜːr/' },
      { word: 'physical printed books', meaning: 'Sách giấy in truyền thống', ipa: '/ˈfɪz.ɪ.kəl/' },
      { word: 'turning physical pages', meaning: 'Lật giở từng trang giấy thực tế', ipa: '/ˈtɜː.nɪŋ/' }
    ],
    sampleEnglishAnswer: 'I definitely prefer reading physical books over electronic ones because turning real pages helps me maintain deeper focus.',
    alternativeAnswers: [
      'I would rather read printed books than e-books since paper pages cause far less eye strain.'
    ],
    analysis: 'Quyết đoán chọn 1 bên và đưa ra 1 lý do sắc sảo hoàn thành trong 11–13 giây.',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s3-3',
    itemNumber: 39,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: 'Đưa ra yếu tố quan trọng nhất khi chọn khách sạn (Q7 - 30s)',
    vietnamesePrompt: 'Theo quan điểm của tôi, vị trí thuận tiện gần các trạm giao thông công cộng là yếu tố quan trọng hàng đầu khi tôi đặt phòng khách sạn.',
    targetGrammar: 'Nhấn mạnh yếu tố (In my opinion, the most crucial factor is... because S + V)',
    vocabularyHints: [
      { word: 'convenient location', meaning: 'Vị trí thuận tiện', ipa: '/kənˈviː.ni.ənt ləʊˈkeɪ.ʃən/' },
      { word: 'proximity to public transit', meaning: 'Khoảng cách gần giao thông công cộng', ipa: '/prɒkˈsɪm.ə.ti/' },
      { word: 'booking accommodations', meaning: 'Đặt chỗ lưu trú / khách sạn', ipa: '/əˌkɒm.əˈdeɪ.ʃənz/' }
    ],
    sampleEnglishAnswer: 'In my opinion, a convenient location with close proximity to public transit is the most crucial consideration when booking a hotel.',
    alternativeAnswers: [
      'I firmly believe that accessibility to the subway is paramount because it saves precious commute time.'
    ],
    analysis: 'Dùng từ vựng "proximity" (sự gần kề) và "paramount" (quan trọng hàng đầu) nâng tầm câu trả lời Part 3 Q7.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-s3-4',
    itemNumber: 40,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: 'Phát triển luận điểm bổ sung cho câu hỏi 30 giây (Q7)',
    vietnamesePrompt: 'Hơn nữa, việc ở gần trung tâm thành phố giúp du khách dễ dàng tiếp cận các nhà hàng địa phương mà không phải tốn tiền taxi đắt đỏ.',
    targetGrammar: 'Liên từ bổ sung (Furthermore / In addition) + Danh động từ làm chủ ngữ (staying near...)',
    vocabularyHints: [
      { word: 'furthermore', meaning: 'Hơn nữa, ngoài ra', ipa: '/ˌfɜː.ðəˈmɔːr/' },
      { word: 'staying in the city center', meaning: 'Ở tại khu vực trung tâm', ipa: '/ˈsɪt.i ˈsen.tər/' },
      { word: 'exorbitant taxi fares', meaning: 'Cước phí taxi đắt đỏ', ipa: '/ɪɡˈzɔː.bɪ.tənt/' }
    ],
    sampleEnglishAnswer: 'Furthermore, staying in the heart of the city allows travelers to explore local dining options without incurring exorbitant taxi fares.',
    alternativeAnswers: [
      'Additionally, a central hotel makes it simple to visit famous attractions on foot, saving significant travel expenses.'
    ],
    analysis: 'Cụm từ "without incurring exorbitant fares" (mà không phải chịu chi phí đắt đỏ) là điểm sáng cho bài nói 30s.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-s3-5',
    itemNumber: 41,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: 'Xác nhận giờ và địa điểm khai mạc hội thảo (Part 4 Q8)',
    vietnamesePrompt: 'Chắc chắn rồi, bài phát biểu khai mạc của Tiến sĩ Evans được lên lịch bắt đầu lúc 9 giờ sáng tại Phòng Đại tiệc A.',
    targetGrammar: 'Cấu trúc lịch trình trang trọng (is scheduled to begin at + time + in + room)',
    vocabularyHints: [
      { word: 'opening keynote address', meaning: 'Bài phát biểu khai mạc then chốt', ipa: '/ˈkiː.nəʊt əˈdres/' },
      { word: 'scheduled to begin', meaning: 'Được lên lịch bắt đầu', ipa: '/ˈʃedʒ.uːld/' },
      { word: 'Grand Ballroom A', meaning: 'Phòng Đại tiệc A', ipa: '/ɡrænd ˈbɔːl.ruːm/' }
    ],
    sampleEnglishAnswer: 'Certainly! The opening keynote address by Dr. Evans is scheduled to begin promptly at 9:00 AM in Grand Ballroom A.',
    alternativeAnswers: [
      'Yes, I can confirm that the keynote speech will start at 9:00 AM and will be held in Grand Ballroom A.'
    ],
    analysis: 'Mở đầu thân thiện "Certainly!", cung cấp chính xác 100% thời gian và tên phòng từ bảng biểu.',
    difficulty: 'Cơ bản (500+)'
  },
  {
    id: 'trans-s3-6',
    itemNumber: 42,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: 'Đính chính thông tin hiểu sai của người gọi (Part 4 Q9 - Bẫy)',
    vietnamesePrompt: 'Thực ra thông tin đó không đúng; buổi thảo luận chuyên đề về an ninh mạng vẫn sẽ diễn ra bình thường vào lúc 2 giờ chiều.',
    targetGrammar: 'Mẫu câu đính chính lịch thiệp (Actually, that information is incorrect; the session will proceed as scheduled...)',
    vocabularyHints: [
      { word: 'actually, that is not correct', meaning: 'Thực tế thì điều đó không đúng', ipa: '/ˈæk.tʃu.ə.li/' },
      { word: 'cybersecurity panel', meaning: 'Phiên thảo luận về an ninh mạng', ipa: '/ˌsaɪ.bə.sɪˈkjʊə.rə.ti/' },
      { word: 'proceed as scheduled', meaning: 'Diễn ra đúng như lịch trình', ipa: '/prəˈsiːd/' }
    ],
    sampleEnglishAnswer: 'Actually, that information is not correct; the panel on cybersecurity is still taking place as scheduled from 2:00 PM in Hall B.',
    alternativeAnswers: [
      'I am afraid you have been misinformed; that session has not been canceled and will proceed at 2:00 PM.'
    ],
    analysis: 'Bẫy kinh điển của câu hỏi 9 Speaking Part 4. Thí sinh phải đính chính lịch sự và nêu rõ giờ mới.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-s3-7',
    itemNumber: 43,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: 'Liệt kê 2 phiên làm việc trong cùng một phòng (Part 4 Q10 - 30s)',
    vietnamesePrompt: 'Vâng, có hai phiên làm việc riêng biệt được tổ chức tại Phòng B: phiên thứ nhất lúc 10 giờ 30 sáng và phiên thứ hai lúc 3 giờ chiều.',
    targetGrammar: 'Cấu trúc đếm số lượng trước (There are two scheduled sessions...) + Liệt kê thứ tự (First... Second...)',
    vocabularyHints: [
      { word: 'two separate sessions', meaning: 'Hai phiên làm việc riêng biệt', ipa: '/ˈsep.ər.ət/' },
      { word: 'first of all', meaning: 'Đầu tiên là', ipa: '/fɜːst əv ɔːl/' },
      { word: 'later in the afternoon', meaning: 'Về sau vào buổi chiều', ipa: '/ˈleɪ.tər/' }
    ],
    sampleEnglishAnswer: 'Sure, there are two separate sessions scheduled in Room B. First, a workflow workshop at 10:30 AM, and later in the afternoon, a leadership panel at 3:00 PM.',
    alternativeAnswers: [
      'Certainly! There are two events taking place in Room B: the morning workshop at 10:30 AM and the afternoon discussion at 3:00 PM.'
    ],
    analysis: 'Cách trả lời chuẩn 30s: Nói trước số lượng (There are two...) rồi liệt kê tuần tự theo thời gian.',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s3-8',
    itemNumber: 44,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: 'Nhắc nhở về điều kiện đăng ký trước (Dấu sao * trong bảng)',
    vietnamesePrompt: 'Xin lưu ý thêm rằng khóa học lãnh đạo yêu cầu học viên phải đăng ký trước do số lượng chỗ ngồi có hạn.',
    targetGrammar: 'Mẫu câu lưu ý điều kiện (Please note that pre-registration is required due to...)',
    vocabularyHints: [
      { word: 'please note that', meaning: 'Xin vui lòng lưu ý rằng', ipa: '/pliːz nəʊt/' },
      { word: 'pre-registration is required', meaning: 'Yêu cầu phải đăng ký trước', ipa: '/ˌpriː.redʒ.ɪˈstreɪ.ʃən/' },
      { word: 'limited seating capacity', meaning: 'Sức chứa chỗ ngồi có hạn', ipa: '/kəˈpæs.ə.ti/' }
    ],
    sampleEnglishAnswer: 'Please also note that pre-registration is strictly required for the leadership masterclass due to limited seating capacity.',
    alternativeAnswers: [
      'Additionally, attendees must register in advance because space inside the hall is limited.'
    ],
    analysis: 'Thí sinh chỉ ra được ghi chú có dấu sao (*) trong bảng biểu sẽ nhận điểm tối đa từ giám khảo.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-s3-9',
    itemNumber: 45,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: 'Báo cáo chi phí tham dự hội thảo (Part 4 Q8)',
    vietnamesePrompt: 'Phí đăng ký tiêu chuẩn là 150 đô la cho mỗi đại biểu, bao gồm cả bữa trưa giao lưu và toàn bộ tài liệu học tập.',
    targetGrammar: 'Mệnh đề phân từ chỉ bao gồm (inclusive of / which includes...)',
    vocabularyHints: [
      { word: 'standard registration fee', meaning: 'Phí đăng ký tiêu chuẩn', ipa: '/ˈstæn.dəd/' },
      { word: 'per delegate', meaning: 'Cho mỗi đại biểu tham dự', ipa: '/ˈdel.ɪ.ɡət/' },
      { word: 'inclusive of conference luncheon', meaning: 'Bao gồm cả bữa trưa hội nghị', ipa: '/ɪnˈkluː.sɪv/' }
    ],
    sampleEnglishAnswer: 'The standard registration fee is $150 per delegate, which includes access to all materials and the networking luncheon.',
    alternativeAnswers: [
      'It costs $150 per person to attend, inclusive of all seminar sessions and lunch.'
    ],
    analysis: 'Từ vựng đại biểu "delegate" và bữa trưa "luncheon" rất chuẩn mực.',
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s3-10',
    itemNumber: 46,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: 'Thông báo diễn giả thay thế (Part 4 Q9)',
    vietnamesePrompt: 'Ông Miller sẽ không thể thuyết trình do bị ốm đột xuất, và bà Sarah Jenkins sẽ phát biểu thay thế ông ấy.',
    targetGrammar: 'Bị động hoặc liên từ chỉ lý do (due to sudden illness, Ms. Jenkins will step in for him)',
    vocabularyHints: [
      { word: 'unable to present', meaning: 'Không thể thuyết trình', ipa: '/ʌnˈeɪ.bəl/' },
      { word: 'sudden illness', meaning: 'Cơn ốm đột xuất', ipa: '/ˈsʌd.ən ˈɪl.nəs/' },
      { word: 'step in to replace him', meaning: 'Bước vào thay thế ông ấy', ipa: '/step ɪn/' }
    ],
    sampleEnglishAnswer: 'Mr. Miller is unable to attend due to a sudden illness, so Ms. Sarah Jenkins will be stepping in to deliver his presentation.',
    alternativeAnswers: [
      'Unfortunately, Mr. Miller is ill today, but Ms. Jenkins has agreed to take over his morning slot.'
    ],
    analysis: 'Cụm từ "step in to deliver the presentation" (bước vào thế chỗ) thể hiện độ nhuần nhuyễn trong giao tiếp.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-s3-11',
    itemNumber: 47,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: 'Câu kết hỗ trợ khách hàng qua điện thoại',
    vietnamesePrompt: 'Tôi hy vọng những thông tin trên đã giải đáp đầy đủ thắc mắc của bạn; vui lòng gọi lại nếu bạn cần thêm bất kỳ sự trợ giúp nào.',
    targetGrammar: 'Câu điều kiện rút gọn (feel free to call back should you require further assistance)',
    vocabularyHints: [
      { word: 'clarify your questions', meaning: 'Làm sáng tỏ thắc mắc của bạn', ipa: '/ˈklær.ɪ.faɪ/' },
      { word: 'feel free to contact us', meaning: 'Cứ tự nhiên liên hệ chúng tôi', ipa: '/fiːl friː/' },
      { word: 'further assistance', meaning: 'Sự hỗ trợ thêm', ipa: '/ˈfɜː.ðər əˈsɪs.təns/' }
    ],
    sampleEnglishAnswer: 'I hope this information answers your questions, and please feel free to reach out again should you need further assistance.',
    alternativeAnswers: [
      'I hope that helps! Do not hesitate to call back if you have any additional inquiries.'
    ],
    analysis: 'Cấu trúc đảo ngữ điều kiện nhẹ nhàng "should you need further assistance" thay cho "if you need".',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-s3-12',
    itemNumber: 48,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: 'Khuyên dùng phương tiện công cộng đến sự kiện',
    vietnamesePrompt: 'Do bãi đậu xe xung quanh trung tâm hội nghị bị hạn chế nghiêm ngặt, chúng tôi đặc biệt khuyên các đại biểu nên di chuyển bằng tàu điện ngầm.',
    targetGrammar: 'Mệnh đề nguyên nhân (As parking is strictly limited...) + strongly recommend that S + V',
    vocabularyHints: [
      { word: 'strictly limited', meaning: 'Bị giới hạn nghiêm ngặt', ipa: '/ˈstrɪkt.li ˈlɪm.ɪ.tɪd/' },
      { word: 'convention center', meaning: 'Trung tâm hội nghị', ipa: '/kənˈven.ʃən ˈsen.tər/' },
      { word: 'strongly advise / recommend', meaning: 'Đặc biệt khuyên dùng', ipa: '/ədˈvaɪz/' }
    ],
    sampleEnglishAnswer: 'Because parking around the venue is strictly limited, we strongly recommend that attendees commute via the subway system.',
    alternativeAnswers: [
      'Since parking spaces are scarce, delegates are highly advised to use public transportation.'
    ],
    analysis: '"Parking is strictly limited" là cụm collocation xuất hiện tần suất cao trong cả Speaking và Listening.',
    difficulty: 'Trung cấp (650+)'
  },

  // =========================================================================
  // PHẦN 5: TASK CUỐI - ĐOẠN VĂN NGẮN NỀN TẢNG (WRITING Q8 & SPEAKING Q11) (CÂU 49 - 60)
  // =========================================================================
  {
    id: 'trans-op-1',
    itemNumber: 49,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: 'Đoạn 1: Mở bài mẫu về Trao quyền cho nhân viên (Empowerment)',
    vietnamesePrompt: 'Trong nền kinh tế toàn cầu đầy biến động ngày nay, mức độ tự chủ được trao cho nhân viên đóng vai trò là một trụ cột then chốt của triết lý quản trị. Trong khi một số nhà lãnh đạo ủng hộ sự giám sát chặt chẽ, tôi kiên quyết cho rằng việc trao quyền cho nhân viên tự ra quyết định sẽ mang lại những lợi ích vượt trội cho năng suất và lòng trung thành.',
    targetGrammar: 'Công thức Mở bài chuẩn: Background Hook + While-Thesis Statement (While some critics argue that [A], I firmly contend that [B])',
    vocabularyHints: [
      { word: 'dynamic global marketplace', meaning: 'Thị trường toàn cầu đầy biến động', ipa: '/daɪˈnæm.ɪk/' },
      { word: 'degree of autonomy', meaning: 'Mức độ tự chủ', ipa: '/dɪˈɡriː əv ɔːˈtɒn.ə.mi/' },
      { word: 'strict managerial oversight', meaning: 'Sự giám sát quản lý chặt chẽ', ipa: '/ˈəʊ.və.saɪt/' },
      { word: 'yields vastly superior benefits', meaning: 'Mang lại lợi ích vượt trội hơn hẳn', ipa: '/jiːldz/' }
    ],
    sampleEnglishAnswer: "In today's dynamic global marketplace, the degree of autonomy granted to corporate employees represents a defining pillar of organizational philosophy. While some executives advocate for strict managerial oversight, I firmly contend that empowering workers to make independent operational decisions yields vastly superior benefits for productivity and staff dedication.",
    analysis: 'Đoạn mở bài đạt 48 từ hoàn hảo: 1 câu dẫn dắt bối cảnh rộng + 1 câu xác lập lập trường 100% rõ ràng, là nền tảng vàng cho cả Speaking Q11 và Writing Q8.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-2',
    itemNumber: 50,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: 'Đoạn 2: Thân bài P.E.E.L về Tốc độ phản hồi & Xóa bỏ rào cản quan liêu',
    vietnamesePrompt: 'Trước hết và quan trọng nhất, việc phi tập trung hóa quyền ra quyết định sẽ nâng cao đáng kể tốc độ phản hồi của doanh nghiệp. Khi nhân viên tuyến đầu phải xin phê duyệt qua nhiều tầng nấc cho mọi vấn đề nhỏ, những cơ hội quý giá sẽ bị lãng phí trong các điểm nghẽn quan liêu. Ngược lại, khi họ có quyền xử lý khiếu nại khách hàng ngay tại chỗ, sự hài lòng của khách hàng sẽ tăng vọt.',
    targetGrammar: 'Công thức P.E.E.L: Topic Sentence (First and foremost...) + Explanation (When...) + Contrast (In stark contrast...)',
    vocabularyHints: [
      { word: 'decentralizing decision-making', meaning: 'Phi tập trung hóa việc ra quyết định', ipa: '/diːˈsen.trə.laɪz/' },
      { word: 'corporate responsiveness', meaning: 'Khả năng phản hồi của doanh nghiệp', ipa: '/rɪˈspɒn.sɪv.nəs/' },
      { word: 'multi-tier managerial approval', meaning: 'Phê duyệt qua nhiều tầng quản lý', ipa: '/mʌl.ti tɪər/' },
      { word: 'bureaucratic bottlenecks', meaning: 'Các điểm nghẽn quan liêu', ipa: '/ˌbjʊə.rəˈkræt.ɪk ˈbɒt.əl.neks/' }
    ],
    sampleEnglishAnswer: 'First and foremost, decentralizing decision-making dramatically enhances corporate responsiveness. When frontline staff must seek multi-tier managerial approval for routine challenges, critical momentum is squandered within bureaucratic bottlenecks. In stark contrast, when professionals possess the authority to resolve client grievances immediately, customer satisfaction surges.',
    analysis: 'Đoạn văn 54 từ sử dụng tương phản sâu sắc giữa "squandered within bureaucratic bottlenecks" và "satisfaction surges". Học thuộc đoạn này giúp nói lưu loát trong Speaking Q11.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-3',
    itemNumber: 51,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: 'Đoạn 3: Dẫn chứng thực tế kèm con số định lượng (Evidence / Example)',
    vietnamesePrompt: 'Chẳng hạn, tại công ty tư vấn trước đây của tôi, việc cho phép các quản lý tài khoản tự điều chỉnh các thay đổi nhỏ trong hợp đồng mà không cần chữ ký của giám đốc đã giúp giảm thời gian xử lý khiếu nại từ ba ngày làm việc xuống dưới hai giờ, qua đó trực tiếp nâng tỷ lệ giữ chân khách hàng lên 25%.',
    targetGrammar: 'Cấu trúc nêu dẫn chứng thực tế (For instance, at my previous firm, [Action] enabled [Subject] to [Verb], which subsequently reduced [X] from [A] to [B])',
    vocabularyHints: [
      { word: 'notable case in point', meaning: 'Một ví dụ điển hình', ipa: '/ˈnəʊ.tə.bəl keɪs/' },
      { word: 'executive sign-off', meaning: 'Chữ ký phê duyệt của cấp giám đốc', ipa: '/saɪn ɒf/' },
      { word: 'turnaround time', meaning: 'Thời gian xử lý hoàn tất công việc', ipa: '/ˈtɜːn.ə.raʊnd taɪm/' },
      { word: 'client retention rate', meaning: 'Tỷ lệ giữ chân khách hàng', ipa: '/rɪˈten.ʃən reɪt/' }
    ],
    sampleEnglishAnswer: 'For instance, at my previous consulting firm, allowing account managers to modify contracts without executive sign-off reduced turnaround time from three business days to under two hours, directly elevating client retention rates by twenty-five percent.',
    analysis: 'Dẫn chứng có số liệu so sánh thời gian (3 days -> 2 hours) và phần trăm (25%) thuyết phục tuyệt đối giám khảo ETS chấm điểm Task Development.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-4',
    itemNumber: 52,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: 'Đoạn 4: Cấu trúc Đảo ngữ C1 nâng tầm luận điểm (Inversion)',
    vietnamesePrompt: 'Việc trao quyền tự chủ không chỉ nuôi dưỡng tinh thần trách nhiệm cá nhân sâu sắc, mà nó còn khơi dậy năng lực tư duy phản biện và khả năng giải quyết vấn đề sáng tạo của các chuyên viên trẻ.',
    targetGrammar: 'Đảo ngữ phủ định C1 (Not only does [S] + [V], but it also + [V])',
    vocabularyHints: [
      { word: 'not only does it cultivate...', meaning: 'Không chỉ nuôi dưỡng...', ipa: '/ˈkʌl.tɪ.veɪt/' },
      { word: 'personal accountability', meaning: 'Tinh thần trách nhiệm cá nhân', ipa: '/əˌkaʊn.təˈbɪl.ə.ti/' },
      { word: 'critical thinking faculties', meaning: 'Năng lực tư duy phản biện', ipa: '/ˈkrɪt.ɪ.kəl ˈθɪŋ.kɪŋ/' },
      { word: 'creative problem-solving tenacity', meaning: 'Sự kiên trì giải quyết vấn đề sáng tạo', ipa: '/təˈnæs.ə.ti/' }
    ],
    sampleEnglishAnswer: 'Not only does employee autonomy cultivate profound personal accountability, but it also sparks critical thinking faculties and creative problem-solving tenacity among junior professionals.',
    analysis: 'Mẫu câu đảo ngữ chuẩn C1: "Not only does [autonomy] cultivate..., but it also sparks..." là vũ khí lấy trọn điểm ngữ pháp 200/200.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-5',
    itemNumber: 53,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: 'Đoạn 5: Kết bài tổng kết & Khẳng định tầm nhìn (Conclusion)',
    vietnamesePrompt: 'Tóm lại, mặc dù các quy tắc giám sát vẫn cần thiết cho định hướng chiến lược vĩ mô, việc nuôi dưỡng quyền tự chủ hàng ngày cho nhân viên là vô cùng quan trọng. Các tổ chức xây dựng được văn hóa tin cậy sẽ luôn vượt qua các đối thủ cạnh tranh cứng nhắc cả về đổi mới sáng tạo lẫn sự gắn kết của nhân viên.',
    targetGrammar: 'Công thức Kết luận: Restatement (In conclusion, while...) + Outlook (Organizations that... will consistently outpace...)',
    vocabularyHints: [
      { word: 'in conclusion', meaning: 'Tóm lại / Kết luận là', ipa: '/ɪn kənˈkluː.ʒən/' },
      { word: 'overarching strategy', meaning: 'Chiến lược bao quát vĩ mô', ipa: '/ˌəʊ.vərˈɑː.tʃɪŋ/' },
      { word: 'culture of mutual trust', meaning: 'Văn hóa tin tưởng lẫn nhau', ipa: '/ˈmjuː.tʃu.əl trʌst/' },
      { word: 'outpace rigid competitors', meaning: 'Vượt xa các đối thủ cứng nhắc', ipa: '/aʊtˈpeɪs ˈrɪdʒ.ɪd/' }
    ],
    sampleEnglishAnswer: 'In conclusion, while supervisory guardrails remain essential for overarching strategy, fostering employee autonomy is undeniably vital. Organizations that cultivate a culture of mutual trust will consistently outpace rigid competitors in innovation, workforce morale, and long-term triumph.',
    analysis: 'Kết bài đắt giá, vừa tái khẳng định lập trường vừa đưa ra tầm nhìn cạnh tranh thị trường.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-6',
    itemNumber: 54,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: 'Đoạn 6: Dạng Lựa chọn (Preference) - So sánh Tập đoàn vs Startup',
    vietnamesePrompt: 'Trái ngược hoàn toàn với các tập đoàn lớn nơi công việc thường bị chia nhỏ và lặp đi lặp lại một cách hạn hẹp, môi trường khởi nghiệp buộc mỗi cá nhân phải đảm nhận nhiều trọng trách khác nhau, từ việc thiết kế sản phẩm cho tới tiếp cận khách hàng, qua đó thúc đẩy sự trưởng thành nghề nghiệp thần tốc.',
    targetGrammar: 'So sánh đối chiếu tương phản sắc bén (In stark contrast to [A] where..., [B] compels [Subject] to wear multiple hats, thereby accelerating...)',
    vocabularyHints: [
      { word: 'in stark contrast to', meaning: 'Trái ngược hoàn toàn với', ipa: '/stɑːk ˈkɒn.trɑːst/' },
      { word: 'hyper-specialized roles', meaning: 'Vai trò chuyên môn hóa quá hẹp', ipa: '/ˈhaɪ.pər/' },
      { word: 'wear multiple hats', meaning: 'Đảm nhận nhiều vai trò cùng lúc', ipa: '/weər ˈmʌl.tɪ.pəl hæts/' },
      { word: 'accelerating professional maturity', meaning: 'Thúc đẩy sự trưởng thành nghề nghiệp nhanh chóng', ipa: '/mờˈtʃʊə.rə.ti/' }
    ],
    sampleEnglishAnswer: 'In stark contrast to large conglomerates where responsibilities are hyper-specialized and repetitive, startup environments compel individuals to wear multiple hats, thereby accelerating professional maturity across product strategy and customer acquisition.',
    analysis: 'Thành ngữ "wear multiple hats" kết hợp liên từ "thereby + V-ing" được giám khảo bản ngữ đặc biệt ưa chuộng.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-7',
    itemNumber: 55,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: 'Đoạn 7: Bác bỏ quan điểm đối lập (Counter-argument Concession)',
    vietnamesePrompt: 'Mặc dù những người chỉ trích thường cho rằng việc thiếu một cơ cấu thứ bậc cứng nhắc sẽ dẫn tới sự hỗn loạn, tôi lại xem sự linh hoạt này như một mảnh đất màu mỡ cho những đổi mới sáng tạo không ngừng nghỉ.',
    targetGrammar: 'Nhượng bộ và phản biện (Although critics often contend that [A] leads to..., I perceive this [Quality] as fertile ground for...)',
    vocabularyHints: [
      { word: 'critics contend that', meaning: 'Các nhà phê bình cho rằng', ipa: '/ˈkrɪt.ɪks kənˈtend/' },
      { word: 'rigid hierarchy', meaning: 'Cơ cấu thứ bậc cứng nhắc', ipa: '/ˈrɪdʒ.ɪd ˈhaɪə.rɑː.ki/' },
      { word: 'fertile ground for innovation', meaning: 'Mảnh đất màu mỡ cho sự đổi mới', ipa: '/ˈfɜː.taɪl ɡraʊnd/' }
    ],
    sampleEnglishAnswer: 'Although critics often contend that the absence of rigid hierarchy creates chaos, I perceive such organizational flexibility as fertile ground for relentless innovation and creative breakthroughs.',
    analysis: 'Cấu trúc biện chứng nhượng bộ (Concession) thể hiện tư duy phản biện ở bậc cao nhất (Level 8 Speaking / Level 9 Writing).',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-8',
    itemNumber: 56,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: 'Đoạn 8: Dạng Ưu & Nhược điểm (Pros/Cons) - Tính hai mặt của AI',
    vietnamesePrompt: 'Sự gia tăng nhanh chóng của các công cụ trí tuệ nhân tạo nơi công sở đại diện cho một con dao hai lưỡi kinh điển. Một mặt, nó mang lại những bước nhảy vọt chưa từng có về hiệu suất tự động hóa; mặt khác, nó tiềm ẩn những rủi ro nghiêm trọng về bảo mật dữ liệu và sự suy giảm kỹ năng tư duy độc lập của người lao động.',
    targetGrammar: 'Công thức Tính hai mặt: A classic double-edged sword (On the one hand... On the other hand...)',
    vocabularyHints: [
      { word: 'rapid proliferation', meaning: 'Sự gia tăng nhanh chóng', ipa: '/prəˌlɪf.ərˈeɪ.ʃən/' },
      { word: 'classic double-edged sword', meaning: 'Con dao hai lưỡi kinh điển', ipa: '/dʌb.əl edʒd sɔːd/' },
      { word: 'unprecedented leaps in efficiency', meaning: 'Những bước nhảy vọt về hiệu suất chưa từng có', ipa: '/ʌnˈpres.ɪ.den.tɪd liːps/' },
      { word: 'workforce deskilling', meaning: 'Sự suy giảm kỹ năng của người lao động', ipa: '/diːˈskɪl.ɪŋ/' }
    ],
    sampleEnglishAnswer: 'The rapid proliferation of artificial intelligence in corporate environments represents a classic double-edged sword. On the one hand, it delivers unprecedented leaps in operational efficiency; on the other hand, it introduces legitimate perils regarding proprietary confidentiality and workforce deskilling.',
    analysis: 'Ẩn dụ "classic double-edged sword" kết hợp hai vế "On the one hand... on the other hand..." dẫn dắt bài luận dạng Ưu & Nhược điểm xuất sắc.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-9',
    itemNumber: 57,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: 'Đoạn 9: Phân tích cơ chế giải thích sâu (Why - Mechanism)',
    vietnamesePrompt: 'Khi nhân viên thường xuyên phải làm việc trong tình trạng căng thẳng kéo dài, năng lực sáng tạo nhận thức của họ sẽ bị xói mòn nghiêm trọng. Các hoạt động giải trí ngoài trời đóng vai trò như một khoảng thời gian nghỉ ngơi thiết yếu giúp não bộ phục hồi và tái tạo năng lượng giải quyết vấn đề.',
    targetGrammar: 'Mệnh đề điều kiện nguyên nhân (When S + V, their cognitive capacity is eroded; therefore, outdoor retreats serve as...)',
    vocabularyHints: [
      { word: 'chronic workplace stress', meaning: 'Căng thẳng nơi công sở kéo dài', ipa: '/ˈkrɒn.ɪk/' },
      { word: 'cognitive creativity is eroded', meaning: 'Sáng tạo nhận thức bị xói mòn', ipa: '/ɪˈrəʊ.dɪd/' },
      { word: 'much-needed respite', meaning: 'Khoảng nghỉ ngơi vô cùng cần thiết', ipa: '/ˈres.paɪt/' },
      { word: 'rejuvenate problem-solving energy', meaning: 'Tái tạo năng lượng giải quyết vấn đề', ipa: '/rɪˈdʒuː.vən.eɪt/' }
    ],
    sampleEnglishAnswer: 'When employees endure chronic workplace stress, their cognitive creativity is severely eroded. Purposeful outdoor retreats provide much-needed respite, enabling the brain to decompress and rejuvenate problem-solving stamina.',
    analysis: 'Từ vựng y khoa tâm lý: "cognitive creativity", "eroded", "respite", "decompress" nâng tầm câu trả lời so với cách nói thông thường "relax".',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-10',
    itemNumber: 58,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: 'Đoạn 10: Nhấn mạnh tầm quan trọng của việc học tập suốt đời (Training)',
    vietnamesePrompt: 'Trong một thị trường mà công nghệ biến đổi theo từng tháng, việc ngừng nâng cấp kỹ năng đồng nghĩa với việc tự đào thải. Các tổ chức đầu tư vào các khóa đào tạo chuyên môn liên tục không chỉ bảo vệ chính họ trước nguy cơ lạc hậu mà còn truyền cảm hứng về lòng trung thành sâu sắc cho toàn thể đội ngũ.',
    targetGrammar: 'Mệnh đề danh động từ làm chủ ngữ (Ceasing to upskill is equivalent to... Organizations that invest in... not only protect... but also instill...)',
    vocabularyHints: [
      { word: 'ceasing to upskill', meaning: 'Ngừng nâng cao kỹ năng', ipa: '/ˈsiː.sɪŋ tuː ʌpˈskɪl/' },
      { word: 'equivalent to obsolescence', meaning: 'Đồng nghĩa với việc trở nên lỗi thời', ipa: '/ɪˈkwɪv.əl.ənt tuː ˌɒb.səˈles.əns/' },
      { word: 'continuous professional development', meaning: 'Phát triển chuyên môn liên tục', ipa: '/kənˈtɪn.ju.əs/' },
      { word: 'instill durable loyalty', meaning: 'Truyền cảm hứng về lòng trung thành bền vững', ipa: '/ɪnˈstɪl/' }
    ],
    sampleEnglishAnswer: 'In a landscape where technological paradigms evolve monthly, ceasing to upskill is equivalent to self-obsolescence. Organizations that invest in continuous professional development not only safeguard themselves against obsolescence but also instill durable loyalty across their workforce.',
    analysis: 'Từ vựng "self-obsolescence" và "instill durable loyalty" mang sắc thái lãnh đạo điều hành (Executive Leadership).',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-11',
    itemNumber: 59,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: 'Đoạn 11: Mẫu câu mở bài cho chủ đề Môi trường & Bền vững (Sustainability)',
    vietnamesePrompt: 'Khi những thách thức về biến đổi khí hậu ngày càng trở nên cấp bách, trách nhiệm môi trường của các doanh nghiệp không còn là một lựa chọn tự nguyện mà đã trở thành một yêu cầu sống còn. Tôi kiên định tin rằng việc áp dụng bao bì thân thiện với môi trường sẽ vừa giúp doanh nghiệp tiết kiệm chi phí lâu dài vừa nâng cao uy tín thương hiệu trong mắt công chúng.',
    targetGrammar: 'Cấu trúc thời gian tiếp tiến (As climate challenges grow increasingly pressing, corporate environmental stewardship is no longer [A] but [B])',
    vocabularyHints: [
      { word: 'increasingly pressing', meaning: 'Ngày càng trở nên cấp bách', ipa: '/ˈpres.ɪŋ/' },
      { word: 'environmental stewardship', meaning: 'Trách nhiệm quản lý môi trường', ipa: '/ˈstjuː.əd.ʃɪp/' },
      { word: 'commercial necessity', meaning: 'Một yêu cầu kinh doanh tất yếu', ipa: '/nəˈses.ə.ti/' },
      { word: 'bolster public brand reputation', meaning: 'Nâng cao danh tiếng thương hiệu công chúng', ipa: '/ˈbəʊl.stər/' }
    ],
    sampleEnglishAnswer: 'As climate challenges grow increasingly pressing, corporate environmental stewardship is no longer an optional luxury but a commercial necessity. I firmly maintain that adopting eco-friendly packaging both reduces long-term operational waste and significantly bolsters public brand reputation.',
    analysis: 'Cấu trúc tương phản "no longer an optional luxury but a commercial necessity" cực kỳ ấn tượng trong bài thi viết luận.',
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-12',
    itemNumber: 60,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: 'Đoạn 12: Đoạn kết luận mẫu đắt giá cho Speaking Part 5 & Writing Q8',
    vietnamesePrompt: 'Xét tất cả các yếu tố trên, việc xây dựng một môi trường làm việc linh hoạt và tin cậy là điều không thể thiếu để duy trì lợi thế cạnh tranh. Những công ty biết trân trọng và đầu tư vào con người sẽ luôn gặt hái được những thành công bền vững trong tương lai.',
    targetGrammar: 'Cấu trúc kết luận đúc rút (Taking all these factors into consideration, it is evident that... Those that invest in... will inevitably reap...)',
    vocabularyHints: [
      { word: 'taking all factors into consideration', meaning: 'Xem xét tất cả các yếu tố', ipa: '/kənˌsɪd.əˈreɪ.ʃən/' },
      { word: 'indispensable to sustaining a competitive edge', meaning: 'Không thể thiếu để duy trì lợi thế cạnh tranh', ipa: '/ˌɪn.dɪˈspen.sə.bəl/' },
      { word: 'inevitably reap sustainable triumph', meaning: 'Chắc chắn sẽ gặt hái thành công bền vững', ipa: '/riːp səˈsteɪ.nə.bəl/' }
    ],
    sampleEnglishAnswer: 'Taking all these factors into consideration, establishing an agile and trust-based work environment is indispensable to sustaining a competitive edge. Enterprises that genuinely invest in their people will inevitably reap sustainable triumph across all future endeavors.',
    analysis: 'Đoạn kết luận 42 từ kết thúc bài nói hoặc bài viết một cách mạnh mẽ, tạo dư âm tích cực cho giám khảo chấm điểm.',
    difficulty: 'Nâng cao (800+)'
  }
];
