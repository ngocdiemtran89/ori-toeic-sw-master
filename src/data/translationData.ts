import type { TranslationItem, TranslationPart } from '../types';

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
  {
    id: 'trans-w1-13',
    itemNumber: 13,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: "Kỹ sư kiểm tra sơ đồ thiết kế kiến trúc",
    vietnamesePrompt: "Kỹ sư trưởng đang chăm chú nghiên cứu các bản vẽ kiến trúc trên bàn làm việc nhằm đảm bảo dự án tuân thủ tiêu chuẩn an toàn.",
    targetGrammar: "Cụm chỉ mục đích với 'in order to' / 'so as to' (S + be + V-ing + in order to + V-inf)",
    vocabularyHints: [
      { word: "chief engineer", meaning: "Kỹ sư trưởng", ipa: '/tʃiːf ˌen.dʒɪˈnɪər/' },
      { word: "architectural blueprints", meaning: "Bản vẽ thiết kế kiến trúc", ipa: '/ˌɑː.kɪˈtek.tʃər.əl ˈbluː.prɪnts/' },
      { word: "safety standards", meaning: "Tiêu chuẩn an toàn", ipa: '/ˈseɪf.ti ˈstæn.d climbers/' }
    ],
    sampleEnglishAnswer: "The chief engineer is carefully examining the architectural blueprints on the drafting table in order to ensure strict compliance with safety standards.",
    alternativeAnswers: [
      "In the design office, an engineer is studying construction blueprints to verify structural specifications."
    ],
    analysis: "Cụm 'architectural blueprints' và cấu trúc 'in order to ensure' là từ vựng và ngữ pháp ăn điểm tối đa trong Part 1.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w1-14',
    itemNumber: 14,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: "Nhân viên vận hành xe nâng trong kho logistics",
    vietnamesePrompt: "Người vận hành xe nâng đang cẩn thận bốc dỡ các kiện hàng nặng khi một nhân viên khác đang ghi chú trên bảng kẹp hồ sơ.",
    targetGrammar: "Mệnh đề trạng ngữ thời gian với 'as' hoặc 'while' (S + be + V-ing as S + be + V-ing)",
    vocabularyHints: [
      { word: "forklift operator", meaning: "Người lái xe nâng hàng", ipa: '/ˈfɔːk.lɪft ˈɒp.ər.eɪ.tər/' },
      { word: "heavy cargo pallets", meaning: "Các kiện pallet hàng nặng", ipa: '/ˈkɑː.ɡəʊ ˈpæl.əts/' },
      { word: "clipboard", meaning: "Bảng kẹp hồ sơ / kiểm kê", ipa: '/ˈklɪp.bɔːd/' }
    ],
    sampleEnglishAnswer: "A forklift operator is carefully unloading heavy cargo pallets in the distribution center while another warehouse worker takes notes on a clipboard.",
    alternativeAnswers: [
      "Inside the fulfillment warehouse, workers are managing cargo pallets and checking inventory lists."
    ],
    analysis: "Cấu trúc kép với 2 hành động song song thường xuyên xuất hiện trong tranh kho bãi Part 1.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w1-15',
    itemNumber: 15,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: "Khách ngồi thư giãn tại sân hiên quán cà phê",
    vietnamesePrompt: "Vài vị khách đang thưởng thức đồ uống lạnh dưới những tán dù che nắng lớn trên sân hiên ngoài trời của nhà hàng.",
    targetGrammar: "Giới từ chỉ nơi chốn + phân từ rút gọn (S + be + V-ing under... on...)",
    vocabularyHints: [
      { word: "patrons", meaning: "Khách quen / thực khách", ipa: '/ˈpeɪ.trənz/' },
      { word: "outdoor terrace", meaning: "Sân hiên ngoài trời", ipa: '/ˈaʊtˌdɔː ˈter.əs/' },
      { word: "sunshade umbrellas", meaning: "Những chiếc dù che nắng", ipa: '/ˈsʌn.ʃeɪd ʌmˈbrel.əz/' }
    ],
    sampleEnglishAnswer: "Several patrons are relaxing and enjoying iced beverages under large sunshade umbrellas on the restaurant's outdoor terrace.",
    alternativeAnswers: [
      "Customers are seated on an outdoor patio enjoying their drinks on a sunny afternoon."
    ],
    analysis: "Từ 'patrons' là từ vựng trang trọng cực hay để thay thế cho 'people' hoặc 'customers'.",
    difficulty: 'Cơ bản (500+)'
  },
  {
    id: 'trans-w1-16',
    itemNumber: 16,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: "Kỹ thuật viên bảo trì hệ thống máy chủ mạng",
    vietnamesePrompt: "Chuyên viên công nghệ thông tin đang kiểm tra các dây cáp mạng trong phòng máy chủ để ngăn chặn sự cố mất kết nối hệ thống.",
    targetGrammar: "Mệnh đề chỉ kết quả/mục đích với 'so that' hoặc 'to prevent' (S + V + in order to prevent + N)",
    vocabularyHints: [
      { word: "IT technician", meaning: "Kỹ thuật viên công nghệ thông tin", ipa: '/aɪ tiː tekˈnɪʃ.ən/' },
      { word: "server racks", meaning: "Tủ giá đỡ máy chủ", ipa: '/ˈsɜː.vər ræks/' },
      { word: "network outage", meaning: "Sự cố mất mạng / cúp mạng", ipa: '/ˈnet.wɜːk ˈaʊ.tɪdʒ/' }
    ],
    sampleEnglishAnswer: "An IT technician is meticulously inspecting network cables connected to the server racks so that unexpected system outages can be prevented.",
    alternativeAnswers: [
      "In the data center, a technician is checking optical cables to ensure uninterrupted server performance."
    ],
    analysis: "Cấu trúc bị động ở mệnh đề phụ 'so that unexpected system outages can be prevented' thể hiện trình độ ngữ pháp cao.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-w1-17',
    itemNumber: 17,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: "Người mua hàng lựa chọn nông sản tươi sống",
    vietnamesePrompt: "Một phụ nữ đang xem xét kỹ lưỡng các quả táo hữu cơ trước khi bỏ chúng vào giỏ hàng của mình ở quầy nông sản.",
    targetGrammar: "Mệnh đề thời gian với 'before' + V-ing (S + be + V-ing + before + V-ing + O)",
    vocabularyHints: [
      { word: "shoppers", meaning: "Người mua sắm", ipa: '/ˈʃɒp.ərz/' },
      { word: "organic produce", meaning: "Nông sản hữu cơ", ipa: '/ɔːˈɡæn.ɪk ˈprɒd.juːs/' },
      { word: "shopping cart", meaning: "Xe đẩy / giỏ mua sắm", ipa: '/ˈʃɒp.ɪŋ kɑːt/' }
    ],
    sampleEnglishAnswer: "A shopper is carefully inspecting fresh organic produce before placing the selected items into her shopping cart.",
    alternativeAnswers: [
      "At the grocery store, a customer is choosing fresh vegetables from the produce section."
    ],
    analysis: "Lưu ý danh từ không đếm được 'produce' có trọng âm rơi vào âm tiết đầu: /ˈprɒd.juːs/ (nông sản).",
    difficulty: 'Cơ bản (500+)'
  },
  {
    id: 'trans-w1-18',
    itemNumber: 18,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: "Công nhân xây dựng thi công mặt đường",
    vietnamesePrompt: "Các công nhân xây dựng mặc áo phản quang đang rải nhựa đường trong khi các biển báo an toàn được dựng xung quanh khu vực làm việc.",
    targetGrammar: "Mệnh đề chỉ thể trạng bị động đồng thời (while safety signs are placed around...)",
    vocabularyHints: [
      { word: "reflective vests", meaning: "Áo phản quang bảo hộ", ipa: '/rɪˈflek.tɪv vests/' },
      { word: "pave the roadway", meaning: "Rải nhựa / lát mặt đường", ipa: '/peɪv ðə ˈrəʊd.weɪ/' },
      { word: "warning barricades", meaning: "Hàng rào cảnh báo", ipa: '/ˈbær.ɪ.keɪdz/' }
    ],
    sampleEnglishAnswer: "Construction laborers wearing high-visibility reflective vests are paving the roadway while warning barricades are positioned around the work perimeter.",
    alternativeAnswers: [
      "Road workers are resurfacing a street section marked by protective construction barriers."
    ],
    analysis: "Từ vựng trang bị bảo hộ 'high-visibility reflective vests' và động từ 'pave' ghi điểm từ vựng xuất sắc.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w1-19',
    itemNumber: 19,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: "Thủ thư phân loại sách lên các kệ cao",
    vietnamesePrompt: "Người thủ thư đang sử dụng một chiếc thang di động để sắp xếp các cuốn sách mới về theo thứ tự bảng chữ cái trên các giá kệ cao.",
    targetGrammar: "Cụm V-ing làm phương tiện (by using a portable ladder to organize...)",
    vocabularyHints: [
      { word: "librarian", meaning: "Thủ thư thư viện", ipa: '/laɪˈbreə.ri.ən/' },
      { word: "step ladder", meaning: "Thang gấp di động", ipa: '/step ˈlæd.ər/' },
      { word: "alphabetical order", meaning: "Thứ tự bảng chữ cái", ipa: '/ˌæl.fəˈbet.ɪ.kəl ˈɔː.dər/' }
    ],
    sampleEnglishAnswer: "The librarian is standing on a small step ladder to arrange cataloged books in alphabetical order onto the tall wooden shelves.",
    alternativeAnswers: [
      "Using a wooden ladder, a library employee is restocking books on upper shelves."
    ],
    analysis: "Cụm 'in alphabetical order' rất chuẩn xác và đúng ngữ cảnh trường học/thư viện.",
    difficulty: 'Cơ bản (500+)'
  },
  {
    id: 'trans-w1-20',
    itemNumber: 20,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: "Nhà nghiên cứu phân tích mẫu phẩm sinh học",
    vietnamesePrompt: "Nữ nghiên cứu sinh đang điều chỉnh ống kính hiển vi quang học trong khi ghi chép dữ liệu thí nghiệm vào máy tính bảng.",
    targetGrammar: "Mệnh đề phức với liên từ 'as' chỉ hai hành động xảy ra đồng thời (S + be + V-ing as she records...)",
    vocabularyHints: [
      { word: "research scientist", meaning: "Nhà khoa học nghiên cứu", ipa: '/ˈsaɪən.tɪst/' },
      { word: "optical microscope", meaning: "Kính hiển vi quang học", ipa: '/ˈɒp.tɪ.kəl ˈmaɪ.krə.skəʊp/' },
      { word: "experimental findings", meaning: "Các phát hiện / dữ liệu thí nghiệm", ipa: '/ɪkˌsper.ɪˈmen.təl ˈfaɪn.dɪŋz/' }
    ],
    sampleEnglishAnswer: "A research scientist is adjusting an optical microscope as she records experimental findings directly onto her digital tablet.",
    alternativeAnswers: [
      "In the laboratory, a technician examines biological specimens and logs observational data."
    ],
    analysis: "Cặp từ 'optical microscope' và 'records experimental findings' nâng cao điểm Lexical Resource.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w1-21',
    itemNumber: 21,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: "Nhân viên chuyển phát quét mã bưu kiện",
    vietnamesePrompt: "Nhân viên giao hàng đang quét mã vạch trên bưu kiện bằng máy quét cầm tay trước khi chất nó lên xe tải giao hàng.",
    targetGrammar: "Giới từ 'prior to' + V-ing (prior to loading it onto the delivery van)",
    vocabularyHints: [
      { word: "courier", meaning: "Nhân viên chuyển phát nhanh", ipa: '/ˈkʊr.i.ər/' },
      { word: "handheld barcode scanner", meaning: "Máy quét mã vạch cầm tay", ipa: '/ˈbɑː.kəʊd ˈskæn.ər/' },
      { word: "delivery van", meaning: "Xe tải giao hàng nhỏ", ipa: '/dɪˈlɪv.ər.i væn/' }
    ],
    sampleEnglishAnswer: "The courier is scanning a package's barcode with a handheld scanner prior to loading it onto the delivery van.",
    alternativeAnswers: [
      "A delivery driver scans shipment parcels before loading his truck for distribution."
    ],
    analysis: "'Prior to loading' là cách viết học thuật thay thế trang trọng hơn cho 'before loading'.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w1-22',
    itemNumber: 22,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: "Cân hành lý ký gửi tại sân bay",
    vietnamesePrompt: "Nhân viên quầy làm thủ tục hàng không đang cân hành lý của khách hàng trong khi kiểm tra thông tin vé trên máy tính.",
    targetGrammar: "Liên từ 'while' kết hợp 2 động từ tiếp diễn song song (S + be + V-ing while V-ing)",
    vocabularyHints: [
      { word: "check-in agent", meaning: "Nhân viên quầy làm thủ tục", ipa: '/ˈtʃek.ɪn ˈeɪ.dʒənt/' },
      { word: "weighing the luggage", meaning: "Cân hành lý", ipa: '/weɪ.ɪŋ ðə ˈlʌɡ.ɪdʒ/' },
      { word: "boarding credentials", meaning: "Thông tin thẻ lên tàu bay / vé", ipa: '/ˈbɔː.dɪŋ krɪˈden.ʃəlz/' }
    ],
    sampleEnglishAnswer: "An airline check-in agent is weighing a passenger's luggage on the scale while verifying passenger credentials on the desktop terminal.",
    alternativeAnswers: [
      "At the airport counter, an agent checks a traveler's baggage and confirms travel details."
    ],
    analysis: "'Luggage' là danh từ không đếm được (không thêm 's'), rất hay bị thí sinh mắc bẫy.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w1-23',
    itemNumber: 23,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: "Thợ mộc đo đạc tấm ván gỗ trong xưởng mộc",
    vietnamesePrompt: "Người thợ mộc lành nghề đang cẩn thận dùng thước dây để đo một thanh gỗ trước khi dùng cưa cắt nó theo kích thước chuẩn.",
    targetGrammar: "Cụm chỉ mục đích + mệnh đề thời gian (uses a measuring tape to measure... before cutting...)",
    vocabularyHints: [
      { word: "skilled craftsman", meaning: "Thợ thủ công / thợ mộc lành nghề", ipa: '/skɪld ˈkrɑːfts.mən/' },
      { word: "measuring tape", meaning: "Thước cuộn / thước dây", ipa: '/ˈmeʒ.ər.ɪŋ teɪp/' },
      { word: "timber plank", meaning: "Tấm ván gỗ / thanh gỗ", ipa: '/ˈtɪm.bər plæŋk/' }
    ],
    sampleEnglishAnswer: "A skilled craftsman is using a retractable measuring tape to mark a timber plank before cutting it with an electric saw.",
    alternativeAnswers: [
      "In the carpentry workshop, a woodworker measures lumber precisely before cutting."
    ],
    analysis: "'Retractable measuring tape' và 'timber plank' tạo độ chân thực cao cho mô tả tranh nghề nghiệp.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w1-24',
    itemNumber: 24,
    part: 'writing_p1',
    partName: 'Part 1 Writing: Viết Câu Theo Tranh',
    partCategory: 'sentence',
    title: "Thu hoạch nông sản trong nhà kính công nghệ cao",
    vietnamesePrompt: "Các công nhân nông nghiệp đang hái dâu tây chín đỏ trong nhà kính thủy canh nhằm kịp đóng gói cho đợt phân phối buổi chiều.",
    targetGrammar: "Cụm chỉ mục đích trang trọng 'in order that' hoặc 'so as to' (so as to prepare them for...)",
    vocabularyHints: [
      { word: "agricultural workers", meaning: "Công nhân nông nghiệp", ipa: '/ˌæɡ.rɪˈkʌl.tʃər.əl/' },
      { word: "hydroponic greenhouse", meaning: "Nhà kính thủy canh", ipa: '/ˌhaɪ.drəˈpɒn.ɪk ˈɡriːn.haʊs/' },
      { word: "ripe produce", meaning: "Nông sản đã chín", ipa: '/raɪp ˈprɒd.juːs/' }
    ],
    sampleEnglishAnswer: "Agricultural workers are picking ripe strawberries inside a hydroponic greenhouse so as to package them for afternoon retail distribution.",
    alternativeAnswers: [
      "Greenhouse laborers are harvesting berries carefully to meet daily supermarket delivery quotas."
    ],
    analysis: "Cụm từ 'so as to package' thể hiện cấu trúc ngữ pháp chỉ mục đích tinh tế, nâng band điểm Writing.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-w2-1',
    itemNumber: 25,
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
    itemNumber: 26,
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
    itemNumber: 27,
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
    itemNumber: 28,
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
    itemNumber: 29,
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
    itemNumber: 30,
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
    itemNumber: 31,
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
    itemNumber: 32,
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
    itemNumber: 33,
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
    itemNumber: 34,
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
    itemNumber: 35,
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
    itemNumber: 36,
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
  {
    id: 'trans-w2-13',
    itemNumber: 37,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Công Sở',
    partCategory: 'sentence',
    title: "Thông báo bảo trì máy chủ định kỳ cuối tuần",
    vietnamesePrompt: "Vui lòng lưu ý rằng toàn bộ cổng thông tin nội bộ sẽ tạm thời ngừng hoạt động từ 10 giờ tối thứ Bảy để phục vụ công tác nâng cấp cơ sở dữ liệu định kỳ.",
    targetGrammar: "Cấu trúc thông báo trang trọng (Please be advised that S + will be temporarily inaccessible... to facilitate...)",
    vocabularyHints: [
      { word: "please be advised that", meaning: "Xin lưu ý rằng (trang trọng)", ipa: '/pliːz biː ədˈvaɪzd ðæt/' },
      { word: "temporarily inaccessible", meaning: "Tạm thời không truy cập được", ipa: '/ˌtem.pər.ər.əl.i ˌɪn.ækˈses.ə.bəl/' },
      { word: "facilitate routine upgrades", meaning: "Thuận tiện cho việc nâng cấp định kỳ", ipa: '/fəˈsɪl.ɪ.teɪt ruːˈtiːn ʌpˈɡreɪdz/' }
    ],
    sampleEnglishAnswer: "Please be advised that the internal employee portal will be temporarily inaccessible starting this Saturday at 10:00 PM to facilitate routine database upgrades.",
    alternativeAnswers: [
      "We would like to inform all staff that system maintenance is scheduled for Saturday evening, causing brief service interruptions."
    ],
    analysis: "Cụm mở đầu 'Please be advised that...' là mẫu câu thông báo chuẩn mực nhất trong môi trường công sở quốc tế.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w2-14',
    itemNumber: 38,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Công Sở',
    partCategory: 'sentence',
    title: "Thư xin lỗi khách hàng VIP vì sai sót trong hóa đơn",
    vietnamesePrompt: "Chúng tôi thành thật xin lỗi vì sự bất tiện do hóa đơn thanh toán không chính xác gây ra, và chúng tôi đã đính kèm bảng sao kê đã được điều chỉnh đầy đủ vào email này.",
    targetGrammar: "Cấu trúc xin lỗi kèm đính kèm (We sincerely apologize for [N/V-ing] and have enclosed [adjusted statement])",
    vocabularyHints: [
      { word: "sincerely apologize for", meaning: "Thành thật xin lỗi vì", ipa: '/sɪnˈsɪə.li əˈpɒl.ə.dʒaɪz fɔːr/' },
      { word: "billing discrepancy", meaning: "Sự sai lệch / chênh lệch trong hóa đơn", ipa: '/ˈbɪl.ɪŋ dɪˈskrep.ən.si/' },
      { word: "rectified invoice", meaning: "Hóa đơn đã được chỉnh sửa chuẩn xác", ipa: '/ˈrek.tɪ.faɪd ˈɪn.vɔɪs/' }
    ],
    sampleEnglishAnswer: "We sincerely apologize for the inconvenience caused by the recent billing discrepancy and have attached the rectified invoice for your records.",
    alternativeAnswers: [
      "Please accept our genuine apologies for the invoicing error; a corrected statement has been attached to this correspondence."
    ],
    analysis: "Từ 'billing discrepancy' hay hơn nhiều so với 'invoice mistake', thể hiện văn phong thương mại cao cấp.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-w2-15',
    itemNumber: 39,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Công Sở',
    partCategory: 'sentence',
    title: "Yêu cầu báo giá thiết bị văn phòng số lượng lớn",
    vietnamesePrompt: "Bạn có thể vui lòng cung cấp bảng báo giá chi tiết cùng với mức chiết khấu áp dụng cho đơn hàng 50 máy tính xách tay văn phòng trước thứ Sáu này được không?",
    targetGrammar: "Câu hỏi lịch sự yêu cầu báo giá (Could you kindly provide S + along with S + by + time)",
    vocabularyHints: [
      { word: "could you kindly provide", meaning: "Bạn có thể vui lòng cung cấp", ipa: '/kʊd juː ˈkaɪnd.li prəˈvaɪd/' },
      { word: "itemized price quotation", meaning: "Bảng báo giá chi tiết từng khoản mục", ipa: '/ˈaɪ.tə.maɪzd praɪs kwəʊˈteɪ.ʃən/' },
      { word: "volume discount", meaning: "Chiết khấu mua số lượng lớn", ipa: '/ˈvɒl.juːm ˈdɪs.kaʊnt/' }
    ],
    sampleEnglishAnswer: "Could you kindly provide an itemized price quotation along with any applicable volume discounts for an order of fifty workstations by this Friday?",
    alternativeAnswers: [
      "We would appreciate receiving a detailed cost estimate and bulk pricing options for 50 laptops by Friday afternoon."
    ],
    analysis: "Cụm 'itemized price quotation' và 'applicable volume discounts' là cặp collocation đắt giá của Part 2 Writing.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w2-16',
    itemNumber: 40,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Công Sở',
    partCategory: 'sentence',
    title: "Thư mời diễn giả quốc tế tham gia hội nghị thường niên",
    vietnamesePrompt: "Thay mặt cho ban tổ chức, tôi trân trọng kính mời Giáo sư Miller đảm nhận vai trò diễn giả chính tại Diễn đàn Công nghệ Toàn cầu tổ chức vào tháng 11 tới.",
    targetGrammar: "Cụm giới từ đại diện (On behalf of [organization], I would like to cordially invite [Name] to deliver...)",
    vocabularyHints: [
      { word: "on behalf of the organizing committee", meaning: "Thay mặt ban tổ chức", ipa: '/ɒn bɪˈhɑːf əv ðə ˈɔː.ɡən.aɪ.zɪŋ kəˈmɪt.i/' },
      { word: "cordially invite", meaning: "Trân trọng kính mời", ipa: '/ˈkɔː.di.ə.li ɪnˈvaɪt/' },
      { word: "deliver the keynote address", meaning: "Đọc bài phát biểu khai mạc then chốt", ipa: '/dɪˈlɪv.ər ðə ˈkiː.nəʊt əˈdres/' }
    ],
    sampleEnglishAnswer: "On behalf of the organizing committee, I would like to cordially invite you to deliver the keynote address at our upcoming Global Technology Forum this November.",
    alternativeAnswers: [
      "We are honored to invite Professor Miller to serve as our guest keynote speaker at the annual tech convention."
    ],
    analysis: "Collocation chuẩn 'deliver the keynote address' (không dùng 'speak the main speech').",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-w2-17',
    itemNumber: 41,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Công Sở',
    partCategory: 'sentence',
    title: "Đề xuất triển khai mô hình làm việc linh hoạt",
    vietnamesePrompt: "Tôi đề xuất ban lãnh đạo cân nhắc cho phép nhân viên làm việc tại nhà hai ngày mỗi tuần để nâng cao sự cân bằng giữa công việc và cuộc sống mà vẫn duy trì năng suất.",
    targetGrammar: "Động từ đề xuất đi kèm mệnh đề that giả định (I propose that management consider allowing employees to V-inf... while maintaining...)",
    vocabularyHints: [
      { word: "propose that management consider", meaning: "Đề xuất ban quản lý cân nhắc", ipa: '/prəˈpəʊz ðæt ˈmæn.ɪdʒ.mənt/' },
      { word: "hybrid work arrangements", meaning: "Hình thức làm việc linh hoạt kết hợp", ipa: '/ˈhaɪ.brɪd wɜːk əˈreɪndʒ.mənts/' },
      { word: "work-life harmony", meaning: "Sự cân bằng hài hòa giữa công việc và đời sống", ipa: '/wɜːk laɪf ˈhɑː.mə.ni/' }
    ],
    sampleEnglishAnswer: "I propose that management consider implementing hybrid work arrangements allowing two remote days per week to foster work-life harmony while sustaining high productivity.",
    alternativeAnswers: [
      "We recommend adopting a flexible telecommuting schedule so staff members can balance personal wellbeing with workplace objectives."
    ],
    analysis: "Cấu trúc 'foster work-life harmony while sustaining high productivity' là lập luận thuyết phục điển hình trong văn phòng.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-w2-18',
    itemNumber: 42,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Công Sở',
    partCategory: 'sentence',
    title: "Nhắc nhở hoàn thành khảo sát ý kiến nhân viên",
    vietnamesePrompt: "Đây là lời nhắc nhở thân thiện rằng hạn chót gửi phản hồi cho cuộc khảo sát mức độ gắn kết của nhân viên là 5 giờ chiều thứ Sáu này.",
    targetGrammar: "Mẫu câu nhắc nhở nhẹ nhàng (This is a friendly reminder that the deadline for submitting... is [time])",
    vocabularyHints: [
      { word: "friendly reminder", meaning: "Lời nhắc nhở thân thiện", ipa: '/ˈfrend.li rɪˈmaɪn.dər/' },
      { word: "employee engagement survey", meaning: "Khảo sát mức độ gắn kết của nhân viên", ipa: '/ɪnˈɡeɪdʒ.mənt ˈsɜː.veɪ/' },
      { word: "strict deadline", meaning: "Hạn chót nghiêm ngặt", ipa: '/strɪkt ˈded.laɪn/' }
    ],
    sampleEnglishAnswer: "This is a friendly reminder that the deadline for completing the annual employee engagement survey is rapidly approaching at 5:00 PM this Friday.",
    alternativeAnswers: [
      "Please remember to submit your confidential responses to the staff feedback questionnaire before the Friday deadline."
    ],
    analysis: "'Friendly reminder' là cụm từ văn hóa công sở giúp lời hối thúc trở nên lịch thiệp và dễ chịu.",
    difficulty: 'Cơ bản (500+)'
  },
  {
    id: 'trans-w2-19',
    itemNumber: 43,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Công Sở',
    partCategory: 'sentence',
    title: "Giải thích việc chậm giao hàng do thời tiết khắc nghiệt",
    vietnamesePrompt: "Do điều kiện thời tiết mùa đông vô cùng khắc nghiệt làm tê liệt các tuyến đường cao tốc chính, lô hàng linh kiện của quý công ty dự kiến sẽ đến muộn 48 giờ.",
    targetGrammar: "Cụm chỉ nguyên nhân với 'Due to' / 'Owing to' + danh từ (Owing to severe weather conditions..., S + is scheduled to arrive...)",
    vocabularyHints: [
      { word: "owing to inclement weather", meaning: "Do thời tiết khắc nghiệt / xấu", ipa: '/ˈəʊ.ɪŋ tuː ɪnˈklem.ənt ˈweð.ər/' },
      { word: "disrupt regional transportation", meaning: "Gây gián đoạn giao thông trong vùng", ipa: '/dɪsˈrʌpt/' },
      { word: "component shipment", meaning: "Lô hàng linh kiện", ipa: '/kəmˈpəʊ.nənt ˈʃɪp.mənt/' }
    ],
    sampleEnglishAnswer: "Owing to inclement weather conditions that have severely disrupted regional transit routes, your component shipment is unfortunately delayed by approximately forty-eight hours.",
    alternativeAnswers: [
      "Due to severe winter storms impacting freight carriers, delivery of your parts order has experienced an unavoidable delay."
    ],
    analysis: "'Inclement weather' là từ vựng band C1 đặc trưng trong bài thi TOEIC Writing khi giải trình sự cố vận chuyển.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-w2-20',
    itemNumber: 44,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Công Sở',
    partCategory: 'sentence',
    title: "Báo cáo sự cố điều hòa nhiệt độ tại khu làm việc",
    vietnamesePrompt: "Chúng tôi khẩn thiết yêu cầu một kỹ thuật viên tòa nhà đến kiểm tra hệ thống điều hòa tại tầng 4 càng sớm càng tốt vì nhiệt độ phòng đang quá nóng.",
    targetGrammar: "Cấu trúc yêu cầu khẩn cấp (We urgently request that a building technician inspect... as soon as possible)",
    vocabularyHints: [
      { word: "urgently request", meaning: "Khẩn thiết yêu cầu", ipa: '/ˈɜː.dʒənt.li rɪˈkwest/' },
      { word: "building maintenance technician", meaning: "Kỹ thuật viên bảo trì tòa nhà", ipa: '/ˈmeɪn.tən.əns tekˈnɪʃ.ən/' },
      { word: "HVAC system malfunction", meaning: "Trục trặc hệ thống điều hòa thông gió", ipa: '/mælˈfʌŋk.ʃən/' }
    ],
    sampleEnglishAnswer: "We urgently request that a building maintenance technician inspect the fourth-floor HVAC system as soon as possible to resolve the excessive office heat.",
    alternativeAnswers: [
      "Could facilities management please dispatch a repair specialist to examine the malfunctioning air conditioning unit on Level 4?"
    ],
    analysis: "'HVAC system' (Heating, Ventilation, and Air Conditioning) là thuật ngữ cơ sở vật chất chuẩn trong môi trường văn phòng.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w2-21',
    itemNumber: 45,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Công Sở',
    partCategory: 'sentence',
    title: "Mời tham dự hội thảo tập huấn an ninh thông tin",
    vietnamesePrompt: "Tất cả các thành viên trong nhóm dự án được yêu cầu đăng ký tham gia buổi hội thảo đào tạo an ninh mạng bắt buộc được tổ chức vào sáng thứ Tư tuần sau.",
    targetGrammar: "Thể bị động mệnh lệnh nhẹ (All team members are required to enroll in... scheduled for...)",
    vocabularyHints: [
      { word: "are required to enroll in", meaning: "Được yêu cầu đăng ký tham gia", ipa: '/rɪˈkwaɪəd tuː ɪnˈrəʊl/' },
      { word: "mandatory cybersecurity seminar", meaning: "Hội thảo an ninh mạng bắt buộc", ipa: '/ˈmæn.də.tər.i ˈsaɪ.bə.sɪˌkjʊə.rɪ.ti/' },
      { word: "scheduled for next Wednesday", meaning: "Được lên lịch vào thứ Tư tới", ipa: '/ˈʃedʒ.uːld fɔːr/' }
    ],
    sampleEnglishAnswer: "All project personnel are required to register for the mandatory cybersecurity seminar scheduled for next Wednesday morning in the main auditorium.",
    alternativeAnswers: [
      "Staff members must sign up for an essential data privacy training session taking place mid-week."
    ],
    analysis: "'Mandatory seminar' và cấu trúc bị động 'are required to register' rất thường gặp trong email điều hành nội bộ.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w2-22',
    itemNumber: 46,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Công Sở',
    partCategory: 'sentence',
    title: "Xác nhận lịch phỏng vấn tuyển dụng vòng hai",
    vietnamesePrompt: "Chúng tôi vui mừng thông báo rằng bạn đã vượt qua vòng sơ loại và muốn mời bạn tham gia buổi phỏng vấn trực tiếp vòng hai vào thứ Ba tới.",
    targetGrammar: "Cấu trúc thông báo tin vui kèm lời mời (We are pleased to inform you that S + V and would like to invite you...)",
    vocabularyHints: [
      { word: "we are pleased to inform you", meaning: "Chúng tôi rất vui mừng thông báo rằng", ipa: '/pliːzd tuː ɪnˈfɔːm juː/' },
      { word: "preliminary screening", meaning: "Vòng sàng lọc sơ loại hồ sơ", ipa: '/prɪˈlɪm.ɪ.nər.i ˈskriː.nɪŋ/' },
      { word: "in-person interview", meaning: "Buổi phỏng vấn trực tiếp", ipa: '/ɪn ˈpɜː.sən ˈɪn.tə.vjuː/' }
    ],
    sampleEnglishAnswer: "We are pleased to inform you that your initial application was successful, and we cordially invite you to an in-person second-round interview next Tuesday.",
    alternativeAnswers: [
      "Congratulations on advancing to the next recruitment stage; we look forward to meeting with you for a comprehensive panel interview."
    ],
    analysis: "'We are pleased to inform you...' là mẫu câu thư tín trang trọng chuẩn quốc tế trong thư tuyển dụng.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-w2-23',
    itemNumber: 47,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Công Sở',
    partCategory: 'sentence',
    title: "Đề nghị đàm phán gia hạn hợp đồng thuê văn phòng",
    vietnamesePrompt: "Vì hợp đồng thuê văn phòng hiện tại sẽ hết hạn sau ba tháng nữa, chúng tôi muốn thảo luận về khả năng gia hạn hợp đồng thêm hai năm nữa theo các điều khoản tương tự.",
    targetGrammar: "Liên từ chỉ nguyên nhân 'Inasmuch as' hoặc 'Since' (Since our lease expires in... we would welcome the opportunity to discuss...)",
    vocabularyHints: [
      { word: "commercial lease agreement", meaning: "Hợp đồng thuê mặt bằng thương mại", ipa: '/kəˈmɜː.ʃəl liːs əˈɡriː.mənt/' },
      { word: "expires in three months", meaning: "Hết hạn sau 3 tháng", ipa: '/ɪkˈspaɪəz/' },
      { word: "two-year lease extension", meaning: "Gia hạn hợp đồng thuê thêm 2 năm", ipa: '/liːs ɪkˈsten.ʃən/' }
    ],
    sampleEnglishAnswer: "Since our commercial lease agreement is set to expire in three months, we would appreciate the opportunity to discuss terms for a two-year extension under favorable rates.",
    alternativeAnswers: [
      "As our tenancy concludes soon, we would like to negotiate renewal options to maintain our headquarters at this address."
    ],
    analysis: "Từ vựng bất động sản thương mại: 'lease agreement', 'set to expire', 'terms for a two-year extension'.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-w2-24',
    itemNumber: 48,
    part: 'writing_p2',
    partName: 'Part 2 Writing: Email Công Sở',
    partCategory: 'sentence',
    title: "Đề xuất tài trợ thương hiệu cho giải chạy việt dã cộng đồng",
    vietnamesePrompt: "Tập đoàn chúng tôi rất quan tâm đến việc trở thành nhà tài trợ chính cho giải chạy việt dã vì sức khỏe cộng đồng và muốn tìm hiểu thêm về các quyền lợi nhận diện thương hiệu.",
    targetGrammar: "Cấu trúc bày tỏ sự quan tâm đối tác (Our corporation is keenly interested in serving as a premier sponsor and seeks clarification regarding...)",
    vocabularyHints: [
      { word: "keenly interested in", meaning: "Vô cùng quan tâm tới", ipa: '/ˈkiːn.li ˈɪn.trəs.tɪd/' },
      { word: "premier corporate sponsor", meaning: "Nhà tài trợ doanh nghiệp hàng đầu", ipa: '/ˈprem.i.ər ˈkɔː.pər.ət ˈspɒn.sər/' },
      { word: "brand exposure privileges", meaning: "Quyền lợi nhận diện thương hiệu", ipa: '/brænd ɪkˈspəʊ.ʒər ˈprɪv.əl.ɪdʒ.ɪz/' }
    ],
    sampleEnglishAnswer: "Our company is keenly interested in serving as a premier sponsor for the upcoming community marathon and would appreciate receiving detailed information regarding brand exposure packages.",
    alternativeAnswers: [
      "We would welcome the opportunity to support your charity athletic run as a lead partner and review promotional opportunities."
    ],
    analysis: "Cụm 'brand exposure packages' và 'premier sponsor' là thuật ngữ Marketing & PR chuẩn mực.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-s2-1',
    itemNumber: 49,
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
    itemNumber: 50,
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
    itemNumber: 51,
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
    itemNumber: 52,
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
    itemNumber: 53,
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
    itemNumber: 54,
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
    itemNumber: 55,
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
    itemNumber: 56,
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
    itemNumber: 57,
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
    itemNumber: 58,
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
    itemNumber: 59,
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
    itemNumber: 60,
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
  {
    id: 'trans-s2-13',
    itemNumber: 61,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: "Sảnh ga tàu điện ngầm giờ cao điểm (Bustling Subway)",
    vietnamesePrompt: "Bức ảnh chụp một ga tàu điện ngầm đông đúc vào giờ cao điểm, nơi hàng chục hành khách đang vội vã di chuyển về phía các cổng soát vé tự động.",
    targetGrammar: "Công thức Overview + Mệnh đề quan hệ chỉ nơi chốn (This picture captures a bustling subway station during rush hour, where dozens of commuters are rushing towards...)",
    vocabularyHints: [
      { word: "bustling subway station", meaning: "Ga tàu điện ngầm nhộn nhịp đông đúc", ipa: '/ˈbʌs.lɪŋ ˈsʌb.weɪ ˈsteɪ.ʃən/' },
      { word: "rush hour commuters", meaning: "Người đi làm giờ cao điểm", ipa: '/rʌʃ aʊər kəˈmjuː.tərz/' },
      { word: "automated turnstiles", meaning: "Cổng soát vé tự động", ipa: '/ˈɔː.tə.meɪ.tɪd ˈtɜːn.staɪlz/' }
    ],
    sampleEnglishAnswer: "This picture captures a bustling subway station during peak rush hour, where dozens of commuters are briskly making their way toward the automated ticket turnstiles.",
    alternativeAnswers: [
      "In this lively transport hub, a large crowd of passengers can be seen boarding trains and checking electronic transit boards."
    ],
    analysis: "Sử dụng trạng từ 'briskly' mô tả tốc độ di chuyển và danh từ 'turnstiles' nâng cao điểm mô tả tranh Speaking.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s2-14',
    itemNumber: 62,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: "Phòng trưng bày nghệ thuật đương đại (Art Gallery)",
    vietnamesePrompt: "Ở trung tâm bức tranh, một nhóm khách tham quan đang đứng chiêm ngưỡng một bức tranh sơn dầu lớn được chiếu sáng bởi ánh đèn rọi tinh tế.",
    targetGrammar: "Cụm định vị vị trí (In the center of the frame, a group of visitors is standing and admiring...)",
    vocabularyHints: [
      { word: "in the center of the frame", meaning: "Ở trung tâm khung hình", ipa: '/ɪn ðə ˈsen.tər əv ðə freɪm/' },
      { word: "contemplating the artwork", meaning: "Chiêm ngưỡng tác phẩm nghệ thuật", ipa: '/ˈkɒn.təm.pleɪ.tɪŋ ðə ˈɑːt.wɜːk/' },
      { word: "subtle gallery spotlights", meaning: "Ánh đèn rọi phòng trưng bày tinh tế", ipa: '/ˈsʌt.əl ˈspɒt.laɪts/' }
    ],
    sampleEnglishAnswer: "In the center of the frame, several art gallery visitors are quietly contemplating a large contemporary oil painting illuminated by subtle ceiling spotlights.",
    alternativeAnswers: [
      "Museum patrons are observed admiring framed paintings in an exhibition room with polished hardwood flooring."
    ],
    analysis: "Động từ 'contemplating' (trầm ngâm chiêm ngưỡng) giàu sức gợi hình hơn nhiều so với 'looking at'.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s2-15',
    itemNumber: 63,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: "Xưởng sửa chữa ô tô chuyên nghiệp (Auto Workshop)",
    vietnamesePrompt: "Phía bên trái bức ảnh, một người thợ máy mặc bộ đồ bảo hộ màu xanh đang dùng cờ lê kiểm tra phần gầm của một chiếc xe hơi được nâng lên bằng kích thủy lực.",
    targetGrammar: "Mệnh đề rút gọn quá khứ phân từ mô tả vật (a sedan elevated on a hydraulic lift)",
    vocabularyHints: [
      { word: "certified mechanic", meaning: "Thợ máy có chứng chỉ nghề", ipa: '/mɪˈkæn.ɪk/' },
      { word: "hydraulic vehicle lift", meaning: "Cầu nâng xe thủy lực", ipa: '/haɪˈdrɔː.lɪk ˈvɪə.kəl lɪft/' },
      { word: "inspecting the undercarriage", meaning: "Kiểm tra phần gầm xe", ipa: '/ɪnˈspek.tɪŋ ðə ˈʌn.dəˌkær.ɪdʒ/' }
    ],
    sampleEnglishAnswer: "On the left side of the photograph, a mechanic wearing navy blue overalls is inspecting the undercarriage of a car raised high on a hydraulic lift.",
    alternativeAnswers: [
      "Inside the auto repair garage, a technician uses specialized diagnostic tools to service an elevated vehicle."
    ],
    analysis: "Cụm danh từ 'hydraulic lift' và 'undercarriage' thể hiện vốn từ vựng kỹ thuật phong phú của band điểm cao.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-s2-16',
    itemNumber: 64,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: "Chợ nông sản ngoài trời ngày cuối tuần (Farmers Market)",
    vietnamesePrompt: "Bầu không khí ngoài trời trông rất náo nhiệt và vui tươi khi nhiều người mua hàng đang trò chuyện với các tiểu thương bán trái cây tươi dưới những mái bạt rực rỡ.",
    targetGrammar: "Công thức Atmosphere (The overall atmosphere appears lively and cheerful as shoppers engage in conversation with...)",
    vocabularyHints: [
      { word: "lively and cheerful atmosphere", meaning: "Bầu không khí náo nhiệt và vui tươi", ipa: '/ˈlaɪv.li ənd ˈtʃɪə.fəl/' },
      { word: "colorful market canopies", meaning: "Những mái bạt chợ đầy màu sắc", ipa: '/ˈkæn.ə.piz/' },
      { word: "artisan food stalls", meaning: "Các quầy đồ ăn thủ công gia truyền", ipa: '/ˈɑː.tɪ.zæn/' }
    ],
    sampleEnglishAnswer: "The overall atmosphere is lively and inviting, with numerous customers conversing with local vendors beneath colorful market canopies lined with seasonal fruit crates.",
    alternativeAnswers: [
      "This open-air farmers market looks vibrant and crowded as residents shop for fresh regional agricultural produce."
    ],
    analysis: "Câu chốt phần Atmosphere với các tính từ 'lively and inviting' là bí kíp chốt hạ điểm trọn vẹn của Speaking Part 2.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s2-17',
    itemNumber: 65,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: "Phòng tập thể hình công sở hiện đại (Corporate Gym)",
    vietnamesePrompt: "Trong một phòng tập thể dục sáng sủa, vài nhân viên văn phòng đang chạy bộ trên máy chạy bộ điện trong khi những người khác đang nâng tạ tự do.",
    targetGrammar: "Cấu trúc tương phản đồng thời (while others are lifting free weights)",
    vocabularyHints: [
      { word: "fitness facility", meaning: "Phòng tập thể thao", ipa: '/ˈfɪt.nəs fəˈsɪl.ɪ.ti/' },
      { word: "electronic treadmills", meaning: "Máy chạy bộ điện", ipa: '/ˈtred.mɪlz/' },
      { word: "lifting dumbbells", meaning: "Nâng tạ tay", ipa: '/ˈdʌm.belz/' }
    ],
    sampleEnglishAnswer: "Inside a modern fitness facility, several individuals are jogging vigorously on electronic treadmills while others in the background are lifting dumbbells.",
    alternativeAnswers: [
      "Gym-goers are working out in a spacious workout room equipped with stationary bikes and weight stations."
    ],
    analysis: "Cặp từ 'jogging vigorously' và 'lifting dumbbells' bao quát toàn diện các hành động của nhân vật trong ảnh.",
    difficulty: 'Cơ bản (500+)'
  },
  {
    id: 'trans-s2-18',
    itemNumber: 66,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: "Nhà kính vườn thực vật nhiệt đới (Botanical Garden)",
    vietnamesePrompt: "Phía xa ở hậu cảnh, một mái vòm bằng kính cao vút bao trùm hàng trăm loài cây nhiệt đới tươi tốt tạo nên một không gian xanh mát và yên bình.",
    targetGrammar: "Mệnh đề phân từ hiện tại chỉ kết quả (enclosing hundreds of lush tropical plants, creating a tranquil environment)",
    vocabularyHints: [
      { word: "in the background", meaning: "Ở phía hậu cảnh", ipa: '/ɪn ðə ˈbæk.ɡraʊnd/' },
      { word: "towering glass dome", meaning: "Mái vòm kính cao vút", ipa: '/ˈtaʊə.rɪŋ ɡlɑːs dəʊm/' },
      { word: "lush tropical vegetation", meaning: "Thảm thực vật nhiệt đới tươi tốt", ipa: '/lʌʃ ˈtrɒp.ɪ.kəl ˌvedʒ.ɪˈteɪ.ʃən/' }
    ],
    sampleEnglishAnswer: "In the background, a towering glass dome encloses lush tropical vegetation, creating a wonderfully tranquil and natural ambiance for the walking visitors.",
    alternativeAnswers: [
      "Sunlight streams through the greenhouse roof onto exotic flora while visitors stroll along paved stone pathways."
    ],
    analysis: "Cụm 'towering glass dome' và 'tranquil ambiance' mang sắc thái từ vựng cực kỳ trang nhã cho Speaking Level 8.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-s2-19',
    itemNumber: 67,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: "Quầy lễ tân khách sạn năm sao (Hotel Concierge)",
    vietnamesePrompt: "Tại quầy lễ tân bằng đá cẩm thạch sang trọng, một nhân viên hỗ trợ khách hàng lịch lãm đang cúi chào và trao chìa khóa phòng cho một cặp đôi mới nhận phòng.",
    targetGrammar: "Hai hành động nối tiếp nhau bằng liên từ 'and' (is warmly welcoming guests and handing over room keys)",
    vocabularyHints: [
      { word: "polished marble reception desk", meaning: "Quầy tiếp tân bằng đá cẩm thạch bóng loáng", ipa: '/ˈmɑː.bəl rɪˈsep.ʃən desk/' },
      { word: "hotel concierge", meaning: "Nhân viên hướng dẫn khách sạn", ipa: '/ˌkɒn.siˈeəʒ/' },
      { word: "handing over electronic keycards", meaning: "Trao thẻ khóa từ mở phòng", ipa: '/ˈkiː.kɑːdz/' }
    ],
    sampleEnglishAnswer: "At the polished marble reception desk, a sharp concierge is smiling warmly and handing over electronic room keycards to an arriving couple.",
    alternativeAnswers: [
      "Hotel staff are assisting newly arrived guests with their luggage and reservation verification at the grand lobby counter."
    ],
    analysis: "Phát âm chuẩn từ 'concierge' /ˌkɒn.siˈeəʒ/ sẽ giúp bài thi Speaking ghi điểm phát âm tuyệt đối.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s2-20',
    itemNumber: 68,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: "Băng chuyền hành lý nhà ga sân bay (Baggage Claim)",
    vietnamesePrompt: "Nhiều hành khách vừa hạ cánh đang đứng vây quanh băng chuyền hành lý xoay tròn, nóng lòng chờ vali của mình xuất hiện.",
    targetGrammar: "Cụm phân từ hiện tại chỉ tâm trạng (anxiously waiting for their suitcases to emerge)",
    vocabularyHints: [
      { word: "baggage claim area", meaning: "Khu vực nhận hành lý sân bay", ipa: '/ˈbæɡ.ɪdʒ kleɪm ˈeə.ri.ə/' },
      { word: "revolving carousel", meaning: "Băng chuyền xoay vòng tròn", ipa: '/rɪˈvɒl.vɪŋ ˌkær.əˈsel/' },
      { word: "eagerly anticipating", meaning: "Nóng lòng ngóng đợi", ipa: '/ˈiː.ɡəl.i ænˈtɪs.ɪ.peɪ.tɪŋ/' }
    ],
    sampleEnglishAnswer: "A crowd of arriving travelers is clustered around a revolving baggage carousel, eagerly anticipating the appearance of their luggage.",
    alternativeAnswers: [
      "At the airport arrival terminal, passengers are watching the moving luggage belt to retrieve their personal bags."
    ],
    analysis: "'Revolving baggage carousel' là thuật ngữ sân bay chuẩn xác nhất mà ETS luôn muốn nghe trong câu trả lời.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s2-21',
    itemNumber: 69,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: "Công trường xây dựng nhà chọc trời (Skyscraper Site)",
    vietnamesePrompt: "Bức ảnh cho thấy một công trường xây dựng quy mô lớn với hai cần cẩu tháp khổng lồ vươn cao trên khung nhà bê tông đang thi công.",
    targetGrammar: "Mệnh đề phân từ hiện tại rút gọn (towering cranes soaring above the concrete framework under construction)",
    vocabularyHints: [
      { word: "massive construction site", meaning: "Công trường xây dựng đồ sộ", ipa: '/ˈmæs.ɪv kənˈstrʌk.ʃən saɪt/' },
      { word: "towering cranes", meaning: "Những chiếc cần cẩu cao chót vót", ipa: '/ˈtaʊə.rɪŋ kreɪnz/' },
      { word: "reinforced concrete framework", meaning: "Khung bê tông cốt thép", ipa: '/ˌriː.ɪnˈfɔːst ˈkɒŋ.kriːt/' }
    ],
    sampleEnglishAnswer: "This picture showcases a massive urban construction site featuring towering yellow cranes operating above a multi-story concrete building framework.",
    alternativeAnswers: [
      "Scaffolding and heavy machinery dominate the scene as an office skyscraper is steadily erected."
    ],
    analysis: "Từ vựng 'towering yellow cranes' và 'building framework' giúp bức tranh trở nên sống động và chi tiết.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s2-22',
    itemNumber: 70,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: "Giảng đường đại học quy mô lớn (Lecture Hall)",
    vietnamesePrompt: "Trong một giảng đường bậc thang rộng lớn, hàng trăm sinh viên đang tập trung lắng nghe bài giảng và ghi chép trên máy tính xách tay cá nhân.",
    targetGrammar: "Trạng từ chỉ nơi chốn đảo ngữ nhẹ (In a tiered university lecture auditorium, hundreds of students are absorbed in listening...)",
    vocabularyHints: [
      { word: "tiered lecture hall", meaning: "Giảng đường bậc thang xếp tầng", ipa: '/tɪəd ˈlek.tʃər hɔːl/' },
      { word: "deeply absorbed in the lecture", meaning: "Chăm chú lắng nghe bài giảng", ipa: '/əbˈzɔːbd/' },
      { word: "taking digital notes", meaning: "Ghi chép bài trên máy tính", ipa: '/ˈdɪdʒ.ɪ.təl nəʊts/' }
    ],
    sampleEnglishAnswer: "Inside a tiered university lecture hall, hundreds of undergraduates are deeply absorbed in the presentation while taking digital notes on their laptops.",
    alternativeAnswers: [
      "A university professor addresses a crowded auditorium as students follow along with slide displays."
    ],
    analysis: "'Tiered lecture hall' (giảng đường xếp tầng bậc thang) là collocation rất tự nhiên.",
    difficulty: 'Cơ bản (500+)'
  },
  {
    id: 'trans-s2-23',
    itemNumber: 71,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: "Lễ hội ẩm thực đường phố ban đêm (Night Food Fest)",
    vietnamesePrompt: "Khói và mùi thơm bốc lên từ các quầy nướng đồ ăn đường phố dưới những dây đèn vàng lung linh giăng kín khắp khu chợ đêm náo nhiệt.",
    targetGrammar: "Chủ ngữ ghép + cụm phân từ hiện tại (Smoke and steam rising from food stalls under strands of glowing lights...)",
    vocabularyHints: [
      { word: "steam rising from barbecue grills", meaning: "Khói và hơi nước bốc lên từ bếp nướng", ipa: '/stiːm ˈraɪ.zɪŋ/' },
      { word: "strings of glowing fairy lights", meaning: "Những dây đèn đom đóm lung linh", ipa: '/strɪŋz əv laɪts/' },
      { word: "vibrant open-air food market", meaning: "Khu chợ ẩm thực ngoài trời sôi động", ipa: '/ˈvaɪ.brənt/' }
    ],
    sampleEnglishAnswer: "Steam is rising from sizzling barbecue grills beneath strings of glowing decorative lights in this vibrant and bustling open-air night food festival.",
    alternativeAnswers: [
      "Crowds are gathered around street food stalls sampling freshly cooked delicacies under illuminated lanterns."
    ],
    analysis: "Từ tượng thanh 'sizzling barbecue grills' (bếp nướng xèo xèo) tạo ấn tượng cảm giác tuyệt vời trong Speaking.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-s2-24',
    itemNumber: 72,
    part: 'speaking_p2',
    partName: 'Speaking Part 2: Miêu Tả Tranh',
    partCategory: 'sentence',
    title: "Quầy thanh toán tự động tại siêu thị (Self-Checkout)",
    vietnamesePrompt: "Ở góc phải bức hình, một người đàn ông trẻ đang tự tay quét mã vạch trên hộp ngũ cốc tại quầy thanh toán tự động không người phục vụ.",
    targetGrammar: "Cụm danh từ ghép 'self-service checkout kiosk' (is scanning barcodes at an automated self-service checkout kiosk)",
    vocabularyHints: [
      { word: "self-service checkout kiosk", meaning: "Quầy thanh toán tự phục vụ", ipa: '/ˌselfˈsɜː.vɪs ˈtʃek.aʊt ˈkiː.ɒsk/' },
      { word: "scanning the barcode", meaning: "Quét mã vạch hàng hóa", ipa: '/ˈbɑː.kəʊd/' },
      { word: "cashless digital transaction", meaning: "Giao dịch thanh toán không tiền mặt", ipa: '/ˈkæʃ.ləs trænˈzæk.ʃən/' }
    ],
    sampleEnglishAnswer: "On the right side of the picture, a young man is scanning the barcode of a grocery item at a modern self-service checkout kiosk.",
    alternativeAnswers: [
      "Supermarket shoppers are utilizing automated payment stations to complete their purchases independently."
    ],
    analysis: "'Self-service checkout kiosk' là chủ đề công nghệ bán lẻ hiện đại cực kỳ phổ biến trong đề thi gần đây.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s3-1',
    itemNumber: 73,
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
    itemNumber: 74,
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
    itemNumber: 75,
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
    itemNumber: 76,
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
    itemNumber: 77,
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
    itemNumber: 78,
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
    itemNumber: 79,
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
    itemNumber: 80,
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
    itemNumber: 81,
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
    itemNumber: 82,
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
    itemNumber: 83,
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
    itemNumber: 84,
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
  {
    id: 'trans-s34-13',
    itemNumber: 85,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: "Speaking Q5 (15s): Thói quen sử dụng ví điện tử hàng ngày",
    vietnamesePrompt: "Tôi sử dụng các ứng dụng thanh toán di động gần như mỗi ngày vì chúng cho phép tôi mua sắm tiện lợi mà không cần phải mang theo tiền mặt.",
    targetGrammar: "Cấu trúc trả lời trực diện trong 15s + liên từ chỉ lý do 'because / since' (I utilize mobile payment applications on a daily basis because they enable me to...)",
    vocabularyHints: [
      { word: "on a daily basis", meaning: "Hàng ngày (thay thế cho everyday)", ipa: '/ɒn ə ˈdeɪ.li ˈbeɪ.sɪs/' },
      { word: "cashless convenience", meaning: "Sự tiện lợi của thanh toán không tiền mặt", ipa: '/ˈkæʃ.ləs kənˈviː.ni.əns/' },
      { word: "frictionless transactions", meaning: "Các giao dịch thanh toán mượt mà", ipa: '/ˈfrɪk.ʃən.ləs/' }
    ],
    sampleEnglishAnswer: "I utilize mobile payment apps on a daily basis because they provide cashless convenience and allow me to make frictionless purchases without carrying paper money.",
    alternativeAnswers: [
      "Practically every day, I rely on smartphone wallets since they are significantly faster and safer than handling cash."
    ],
    analysis: "Chiến lược 15s: Trả lời thẳng vào câu hỏi trong 3 giây đầu, sau đó phát triển 1 lý do cụ thể với 'because...'.",
    difficulty: 'Cơ bản (500+)'
  },
  {
    id: 'trans-s34-14',
    itemNumber: 86,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: "Speaking Q6 (15s): Thói quen nghe podcast trong lúc đi lại",
    vietnamesePrompt: "Tôi thường nghe các chương trình podcast về công nghệ và kinh doanh trong lúc đi tàu điện ngầm đi làm để cập nhật xu hướng mới nhất trong ngành.",
    targetGrammar: "Mệnh đề chỉ thời điểm lồng ghép (I usually stream podcasts while commuting by train in order to stay abreast of...)",
    vocabularyHints: [
      { word: "stream informative podcasts", meaning: "Nghe/phát các kênh podcast giàu thông tin", ipa: '/striːm ˈpɒd.kɑːsts/' },
      { word: "daily subway commute", meaning: "Chuyến đi làm hàng ngày bằng tàu điện ngầm", ipa: '/kəˈmjuːt/' },
      { word: "stay abreast of market trends", meaning: "Cập nhật kịp thời xu hướng thị trường", ipa: '/steɪ əˈbrest əv/' }
    ],
    sampleEnglishAnswer: "I usually listen to business and technology podcasts during my daily subway commute in order to stay abreast of the latest market innovations.",
    alternativeAnswers: [
      "Whenever I travel to work on public transit, I tune into industry podcasts to maximize my commuting hours productively."
    ],
    analysis: "Cụm C1 'stay abreast of' (bắt kịp / cập nhật) là 'vũ khí bí mật' ghi điểm Lexical Resource của Speaking.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-s34-15',
    itemNumber: 87,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: "Speaking Q7 (30s): Yếu tố hàng đầu khi lựa chọn khách sạn",
    vietnamesePrompt: "Khi đặt phòng khách sạn cho kỳ nghỉ, vị trí thuận tiện gần các điểm giao thông công cộng là ưu tiên hàng đầu của tôi, tiếp theo là tiêu chuẩn vệ sinh phòng sạch sẽ.",
    targetGrammar: "Chiến lược 30s nêu 2 luận điểm (My primary consideration is [Factor 1], closely followed by [Factor 2] because...)",
    vocabularyHints: [
      { word: "primary consideration", meaning: "Yếu tố cân nhắc hàng đầu", ipa: '/ˈpraɪ.mər.i kənˌsɪd.əˈreɪ.ʃən/' },
      { word: "proximity to transit hubs", meaning: "Sự gần gũi / tiện đi lại với các đầu mối giao thông", ipa: '/prɒkˈsɪm.ə.ti/' },
      { word: "impeccable hygiene standards", meaning: "Tiêu chuẩn vệ sinh hoàn hảo không tì vết", ipa: '/ɪmˈpek.ə.bəl ˈhaɪ.dʒiːn/' }
    ],
    sampleEnglishAnswer: "When booking vacation accommodation, my primary consideration is proximity to public transit hubs, closely followed by impeccable hygiene standards, because easy mobility saves substantial travel time.",
    alternativeAnswers: [
      "Central location and pristine cleanliness are the two deciding factors for me whenever I select a hotel room."
    ],
    analysis: "Cấu trúc 'My primary consideration is X, closely followed by Y' giúp câu trả lời 30s mạch lạc và chặt chẽ.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s34-16',
    itemNumber: 88,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: "Speaking Q7 (30s): Mua sắm online hay trải nghiệm tại cửa hàng",
    vietnamesePrompt: "Mặc dù mua sắm trực tuyến rất nhanh chóng và tiện lợi, tôi vẫn thích đến các cửa hàng truyền thống hơn vì tôi có thể tận mắt kiểm tra chất lượng sản phẩm trước khi chi tiền.",
    targetGrammar: "Mệnh đề nhượng bộ so sánh sở thích (Although online shopping offers speed, I personally prefer physical stores because I can inspect items firsthand...)",
    vocabularyHints: [
      { word: "unmatched convenience", meaning: "Sự tiện lợi vô song / không gì sánh bằng", ipa: '/ʌnˈmætʃt/' },
      { word: "brick-and-mortar storefronts", meaning: "Cửa hàng vật lý truyền thống ngoài đời", ipa: '/brɪk ənd ˈmɔː.tər/' },
      { word: "inspect items firsthand", meaning: "Tận tay tận mắt kiểm tra món đồ", ipa: '/ɪnˈspekt ˈfɜːst.hænd/' }
    ],
    sampleEnglishAnswer: "Although e-commerce platforms offer unmatched convenience, I still prefer browsing brick-and-mortar stores because inspecting merchandise firsthand prevents disappointing purchasing errors.",
    alternativeAnswers: [
      "I favor shopping in person because examining the physical texture and fit guarantees complete consumer satisfaction."
    ],
    analysis: "Cụm 'brick-and-mortar stores' và 'inspecting merchandise firsthand' thể hiện trình độ tiếng Anh tự nhiên.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s34-17',
    itemNumber: 89,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: "Speaking Q8 (Schedule 15s): Địa điểm và thời gian phiên khai mạc",
    vietnamesePrompt: "Theo lịch trình hội nghị, lễ khai mạc sẽ chính thức bắt đầu lúc 9 giờ sáng tại Phòng Đại Tiệc Tòa Nhà Trung Tâm, ngay sau phần đăng ký đại biểu.",
    targetGrammar: "Mẫu câu đọc lịch trình Part 4 (According to the schedule, the opening ceremony will commence at [time] in [venue])",
    vocabularyHints: [
      { word: "according to the official schedule", meaning: "Theo lịch trình chính thức", ipa: '/əˈkɔː.dɪŋ tuː/' },
      { word: "will commence promptly at", meaning: "Sẽ bắt đầu đúng giờ vào lúc", ipa: '/kəˈmens ˈprɒmpt.li/' },
      { word: "Grand Ballroom", meaning: "Phòng Đại tiệc / Đại sảnh", ipa: '/ɡrænd ˈbɔːl.ruːm/' }
    ],
    sampleEnglishAnswer: "According to the official schedule, the opening orientation ceremony will commence promptly at 9:00 AM in the Grand Ballroom, immediately following delegate check-in.",
    alternativeAnswers: [
      "The program indicates that opening remarks are scheduled for 9:00 AM in Ballroom A right after registration concludes."
    ],
    analysis: "Dùng 'commence promptly at' thay vì 'start at' tạo phong thái chuyên nghiệp trong bài thi Speaking Part 4.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s34-18',
    itemNumber: 90,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: "Speaking Q9 (Asterisk Trap 15s): Đính chính miễn phí cho hội viên",
    vietnamesePrompt: "Thực ra thông tin đó chưa chính xác đâu ạ; bạn sẽ không phải trả phí tham dự 50 đô la vì bạn đã là hội viên câu lạc bộ rồi, như được ghi chú ở chân trang.",
    targetGrammar: "Công thức đính chính bẫy hoa thị (Actually, that information is not quite accurate; you do not need to pay... as noted at the bottom of the page)",
    vocabularyHints: [
      { word: "that information is not quite correct", meaning: "Thông tin đó chưa hoàn toàn chính xác", ipa: '/nɒt kwaɪt kəˈrekt/' },
      { word: "registration fee is fully waived", meaning: "Phí đăng ký được miễn hoàn toàn", ipa: '/weɪvd/' },
      { word: "indicated in the footnote", meaning: "Được ghi chú ở phần chú thích chân trang (*)", ipa: '/ˈfʊt.nəʊt/' }
    ],
    sampleEnglishAnswer: "Actually, that information is not quite accurate; the fifty-dollar admission fee is completely waived for registered members, as indicated in the footnote with an asterisk.",
    alternativeAnswers: [
      "I am afraid that is incorrect; according to the small note at the bottom, active members are exempt from paying admission."
    ],
    analysis: "Bẫy Q9 Part 4: Luôn bắt đầu bằng câu nói lịch sự 'Actually, that is not quite accurate...' rồi giải thích đúng thông tin có dấu sao (*).",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-s34-19',
    itemNumber: 91,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: "Speaking Q10 (Schedule Detail 30s): Liệt kê 2 hội thảo của diễn giả",
    vietnamesePrompt: "Chắc chắn rồi, có hai phiên thảo luận do Tiến sĩ Angela chủ trì. Phiên đầu tiên về Quản Trị Trí Tuệ Nhân Tạo lúc 10 giờ sáng, và phiên thứ hai về Bảo Mật Dữ Liệu lúc 2 giờ chiều.",
    targetGrammar: "Công thức 30s đọc 2 mục lịch trình (Certainly, there are two sessions hosted by [Speaker]. First,... Second,...)",
    vocabularyHints: [
      { word: "certainly, there are two scheduled sessions", meaning: "Chắc chắn rồi, có 2 phiên thảo luận được lên lịch", ipa: '/ˈsɜː.tən.li/' },
      { word: "AI Governance and Ethics", meaning: "Quản trị và đạo đức trí tuệ nhân tạo", ipa: '/ˈɡʌv.ən.əns/' },
      { word: "breakout workshop", meaning: "Phiên thảo luận nhóm chuyên sâu", ipa: '/ˈbreɪk.aʊt ˈwɜːk.ʃɒp/' }
    ],
    sampleEnglishAnswer: "Certainly, there are two sessions conducted by Dr. Angela. First, she will lead a seminar on AI Governance at 10:00 AM in Room 204. Second, she will facilitate an interactive Data Privacy workshop from 2:00 to 3:30 PM.",
    alternativeAnswers: [
      "Sure, Dr. Angela is leading two presentations: a morning talk on machine learning ethics at 10 AM, followed by an afternoon compliance clinic at 2 PM."
    ],
    analysis: "Cấu trúc 'First,... Second,...' giúp hoàn thành câu hỏi 30s trong thời gian lý tưởng 22-26 giây mà không bị ngập ngừng.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s34-20',
    itemNumber: 92,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: "Speaking Q5 (15s): Thói quen trải nghiệm nhà hàng mới",
    vietnamesePrompt: "Tôi thường thử các quán ăn và nhà hàng mới khoảng một đến hai lần mỗi tháng, đặc biệt là khi bạn bè giới thiệu cho tôi những món ẩm thực độc đáo.",
    targetGrammar: "Tần suất + mệnh đề trạng ngữ điều kiện (I experiment with novel dining spots once or twice a month, especially when...)",
    vocabularyHints: [
      { word: "novel culinary spots", meaning: "Các địa điểm ẩm thực mới mẻ", ipa: '/ˈkʌl.ɪ.nər.i spɒts/' },
      { word: "once or twice a month", meaning: "1 hoặc 2 lần mỗi tháng", ipa: '/wʌns ɔːr twaɪs/' },
      { word: "enthusiastic word-of-mouth recommendations", meaning: "Lời giới thiệu truyền miệng nhiệt tình", ipa: '/wɜːd əv maʊθ/' }
    ],
    sampleEnglishAnswer: "I try out novel culinary spots roughly once or twice a month, especially when close friends give enthusiastic word-of-mouth recommendations.",
    alternativeAnswers: [
      "A couple of times each month, I explore newly opened eateries to discover interesting local flavors."
    ],
    analysis: "'Word-of-mouth recommendations' (lời giới thiệu truyền miệng) là cụm từ rất ghi điểm trong Speaking Part 3.",
    difficulty: 'Cơ bản (500+)'
  },
  {
    id: 'trans-s34-21',
    itemNumber: 93,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: "Speaking Q6 (15s): Không gian rèn luyện thể chất lý tưởng",
    vietnamesePrompt: "Tôi thích tập thể dục tại công viên gần nhà hơn vì tôi có thể tận hưởng không khí trong lành ngoài trời và không gian xanh thoáng đãng hoàn toàn miễn phí.",
    targetGrammar: "Cấu trúc sở thích so sánh (I prefer exercising at a nearby park rather than indoors because I can absorb crisp fresh air...)",
    vocabularyHints: [
      { word: "neighborhood public park", meaning: "Công viên công cộng gần khu dân cư", ipa: '/ˈneɪ.bə.hʊd pɑːk/' },
      { word: "crisp fresh air", meaning: "Không khí trong lành, sảng khoái", ipa: '/krɪsp freʃ eər/' },
      { word: "lush green surroundings", meaning: "Không gian xanh tươi mát xung quanh", ipa: '/lʌʃ ɡriːn/' }
    ],
    sampleEnglishAnswer: "I prefer working out at our neighborhood community park because jogging amidst lush greenery and crisp fresh air rejuvenates my mental energy completely free of charge.",
    alternativeAnswers: [
      "Exercising outdoors in a public green space is ideal for me due to the open atmosphere and invigorating breeze."
    ],
    analysis: "Động từ 'rejuvenates my mental energy' (tái tạo năng lượng tinh thần) tạo ấn tượng rất sâu sắc với giám khảo ETS.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s34-22',
    itemNumber: 94,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: "Speaking Q7 (30s): Tác động tích cực của thói quen đọc sách",
    vietnamesePrompt: "Theo quan điểm của tôi, việc đọc sách mỗi ngày mang lại hai lợi ích vô giá: thứ nhất là mở rộng vốn hiểu biết đa chiều, và thứ hai là rèn luyện khả năng tập trung sâu trong một thế giới đầy phiền nhiễu.",
    targetGrammar: "Cấu trúc phân tích 2 khía cạnh giá trị (In my view, daily reading yields two invaluable benefits: first, it broadens... and second, it cultivates...)",
    vocabularyHints: [
      { word: "yields two invaluable benefits", meaning: "Mang lại hai lợi ích vô giá", ipa: '/jiːldz ɪnˈvæl.jə.bəl ˈben.ɪ.fɪts/' },
      { word: "broadens intellectual horizons", meaning: "Mở rộng chân trời tri thức", ipa: '/ˈbrɔː.dənz ˌɪn.təlˈek.tʃu.əl həˈraɪ.zənz/' },
      { word: "cultivates sustained mental focus", meaning: "Rèn luyện khả năng tập trung trí não bền bỉ", ipa: '/ˈkʌl.tɪ.veɪts səˈsteɪnd/' }
    ],
    sampleEnglishAnswer: "In my view, daily reading yields two invaluable benefits. First, it continually broadens one's intellectual horizons. Second, it cultivates sustained mental focus, which is essential for thriving amidst constant modern digital distractions.",
    alternativeAnswers: [
      "Reading consistently sharpens cognitive analytical skills and serves as a powerful antidote to daily workplace stress."
    ],
    analysis: "Cụm 'broadens intellectual horizons' và 'amidst constant modern digital distractions' đạt điểm Lexical Resource tối đa (Score 3/3).",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-s34-23',
    itemNumber: 95,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: "Speaking Q9 (Asterisk Trap 15s): Đính chính đổi phòng ăn trưa buffet",
    vietnamesePrompt: "Thực ra có một sự thay đổi so với kế hoạch ban đầu; tiệc trưa tự chọn đã được chuyển sang Nhà Ăn Tòa Nhà B do nhà ăn chính đang sửa chữa.",
    targetGrammar: "Mẫu câu đính chính địa điểm di dời (Actually, there has been a minor venue alteration; the buffet lunch has been relocated to...)",
    vocabularyHints: [
      { word: "minor venue alteration", meaning: "Thay đổi nhỏ về địa điểm tổ chức", ipa: '/ˈmaɪ.nər ˈven.juː ˌɔːl.təˈreɪ.ʃən/' },
      { word: "complimentary buffet lunch", meaning: "Bữa trưa tự chọn miễn phí", ipa: '/ˌkɒm.plɪˈmen.tər.i ˈbʊf.eɪ/' },
      { word: "due to ongoing kitchen renovations", meaning: "Do công tác sửa chữa cải tạo bếp đang diễn ra", ipa: '/ˌren.əˈveɪ.ʃənz/' }
    ],
    sampleEnglishAnswer: "Actually, there has been a venue alteration; the complimentary buffet lunch will be served in Dining Hall B instead of the Main Cafeteria due to ongoing renovations.",
    alternativeAnswers: [
      "Please note that the luncheon location has been moved to Building B Annex, as mentioned in the schedule update notes."
    ],
    analysis: "Dùng 'venue alteration' và động từ 'relocated' giải quyết trọn vẹn bẫy chuyển địa điểm thường gặp ở Part 4.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-s34-24',
    itemNumber: 96,
    part: 'speaking_p3_4',
    partName: 'Speaking Part 3 & 4: Phản Xạ & Lịch Trình',
    partCategory: 'sentence',
    title: "Speaking Q10 (Schedule Detail 30s): Lịch trình kiểm định an toàn nhà máy",
    vietnamesePrompt: "Dạ vâng, lịch trình kiểm định an toàn gồm hai hoạt động chính: Buổi sáng có cuộc diễn tập thoát hiểm lúc 8 giờ 30, và buổi chiều là đợt thanh tra thiết bị từ 1 giờ đến 4 giờ.",
    targetGrammar: "Cấu trúc tóm lược 2 mốc sự kiện (Certainly, the safety audit comprises two primary components. In the morning,... Later in the afternoon,...)",
    vocabularyHints: [
      { word: "safety inspection comprises two phases", meaning: "Đợt kiểm tra an toàn gồm hai giai đoạn", ipa: '/kəmˈpraɪ.zɪz tuː ˈfeɪ.zɪz/' },
      { word: "mandatory evacuation fire drill", meaning: "Cuộc diễn tập sơ tán hỏa hoạn bắt buộc", ipa: '/ɪˌvæk.juˈeɪ.ʃən faɪər drɪl/' },
      { word: "regulatory equipment compliance audit", meaning: "Đợt kiểm toán tuân thủ quy chuẩn thiết bị", ipa: '/ˌkɒm.pliˈəns ˈɔː.dɪt/' }
    ],
    sampleEnglishAnswer: "Certainly, the facility inspection comprises two scheduled components. In the morning, a mandatory fire evacuation drill is held at 8:30 AM. Later in the afternoon, certified auditors will conduct equipment compliance checks from 1:00 to 4:00 PM.",
    alternativeAnswers: [
      "Yes, there are two safety procedures slated for that day: an early morning evacuation simulation followed by an afternoon factory floor review."
    ],
    analysis: "Sử dụng từ nối 'In the morning,... Later in the afternoon,...' tạo mạch logic rất tự nhiên và kiểm soát thời gian hoàn hảo.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-1',
    itemNumber: 97,
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
    itemNumber: 98,
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
    itemNumber: 99,
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
    itemNumber: 100,
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
    itemNumber: 101,
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
    itemNumber: 102,
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
    itemNumber: 103,
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
    itemNumber: 104,
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
    itemNumber: 105,
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
    itemNumber: 106,
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
    itemNumber: 107,
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
    itemNumber: 108,
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
  },
  {
    id: 'trans-op-13',
    itemNumber: 109,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: "Đoạn 13: Mở bài & Luận điểm về Trí tuệ nhân tạo (AI) trong giáo dục",
    vietnamesePrompt: "Trong thời đại kỹ thuật số phát triển vượt bậc, sự xuất hiện của các công cụ gia sư trí tuệ nhân tạo đang định hình lại phương pháp giảng dạy truyền thống. Tôi hoàn toàn ủng hộ quan điểm rằng việc tích hợp AI vào trường học sẽ cá nhân hóa lộ trình học tập và giải phóng giáo viên khỏi các công việc hành chính lặp đi lặp lại.",
    targetGrammar: "Cấu trúc Mở bài Hook & Thesis (In an era marked by rapid digitalization, the advent of [Technology] is reshaping... I firmly advocate the premise that integrating [AI] will both [Advantage 1] and [Advantage 2])",
    vocabularyHints: [
      { word: "advent of artificial intelligence tutoring tools", meaning: "Sự xuất hiện của các công cụ gia sư trí tuệ nhân tạo", ipa: '/ˈæd.vent/' },
      { word: "reshaping conventional pedagogical paradigms", meaning: "Định hình lại các mô hình sư phạm truyền thống", ipa: '/ˌped.əˈɡɒdʒ.ɪ.kəl/' },
      { word: "firmly advocate the premise that", meaning: "Kiên định ủng hộ tiền đề rằng", ipa: '/ˈæd.və.keɪt ðə ˈprem.ɪs/' },
      { word: "tailor individualized learning pathways", meaning: "Cá nhân hóa các lộ trình học tập", ipa: '/ˈteɪ.lər ˌɪn.dɪˈvɪdʒ.u.ə.laɪzd/' }
    ],
    sampleEnglishAnswer: "In an era marked by rapid digitalization, the advent of artificial intelligence tutoring tools is profoundly reshaping conventional pedagogy. I firmly advocate the premise that integrating AI platforms into schools tailors individualized learning pathways while liberating educators from repetitive administrative burdens.",
    alternativeAnswers: [
      "As educational technologies advance, intelligent learning software offers unprecedented academic personalization and operational efficiency for modern classrooms."
    ],
    analysis: "Đoạn mở bài 46 từ đạt điểm tối đa nhờ cặp luận điểm song hành 'tailors individualized pathways' và 'liberates educators from administrative burdens'.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-14',
    itemNumber: 110,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: "Đoạn 14: Thân bài PEEL về ưu thế của mô hình văn phòng mở (Collaboration)",
    vietnamesePrompt: "Thứ nhất, thiết kế văn phòng mở thúc đẩy sự cộng tác tự phát và phá vỡ rào cản ngăn cách giữa các phòng ban. Ví dụ, tại các công ty công nghệ đa quốc gia, các kỹ sư phần mềm và chuyên viên tiếp thị có thể nhanh chóng trao đổi ý tưởng mà không cần phải đặt lịch họp trang trọng, từ đó đẩy nhanh tốc độ tung sản phẩm mới ra thị trường.",
    targetGrammar: "Cấu trúc PEEL (Point: First and foremost,... fosters... Explanation: By eliminating physical barriers,... Example: For instance, at tech firms,... Link: Consequently,...)",
    vocabularyHints: [
      { word: "open-plan layout", meaning: "Cách bố trí mặt bằng văn phòng mở", ipa: '/ˈəʊ.pən plæn ˈleɪ.aʊt/' },
      { word: "fosters spontaneous collaboration", meaning: "Thúc đẩy sự hợp tác tự phát không khiên cưỡng", ipa: '/spɒnˈteɪ.ni.əs/' },
      { word: "dismantles departmental silos", meaning: "Phá bỏ các rào cản chia rẽ giữa các phòng ban", ipa: '/dɪsˈmæn.təlz ˈsaɪ.ləʊz/' },
      { word: "accelerates product launch cycles", meaning: "Đẩy nhanh chu kỳ tung sản phẩm mới ra thị trường", ipa: '/əkˈsel.ə.reɪts/' }
    ],
    sampleEnglishAnswer: "First and foremost, an open-plan office layout fosters spontaneous collaboration by dismantling rigid departmental silos. For example, software engineers and product managers can instantly resolve technical roadblocks through informal dialogues, which consequently accelerates overall development cycles without bureaucratic delays.",
    alternativeAnswers: [
      "Open office architectures encourage fluid interpersonal communication, allowing multidisciplinary teams to coordinate seamlessly and expedite project milestones."
    ],
    analysis: "Từ 'dismantling rigid departmental silos' (phá bỏ sự ngăn cách cứng nhắc giữa các phòng ban) là thuật ngữ quản trị doanh nghiệp đắt giá bậc nhất.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-15',
    itemNumber: 111,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: "Đoạn 15: Cấu trúc đảo ngữ C1 về chính sách đãi ngộ nhân tài",
    vietnamesePrompt: "Chính sách lương thưởng và phúc lợi cạnh tranh không chỉ giúp doanh nghiệp thu hút những ứng viên xuất sắc nhất trên thị trường, mà nó còn giảm thiểu đáng kể chi phí đắt đỏ phát sinh từ việc nhân viên nhảy việc. Nhờ vậy, tổ chức có thể duy trì được một đội ngũ ổn định và giàu kinh nghiệm.",
    targetGrammar: "Đảo ngữ với 'Not only does/is...' (Not only does a competitive remuneration package attract top talent, but it also substantially curtails costly turnover...)",
    vocabularyHints: [
      { word: "competitive remuneration package", meaning: "Gói đãi ngộ lương thưởng cạnh tranh", ipa: '/rɪˌmjuː.nərˈeɪ.ʃən/' },
      { word: "attract high-caliber talent", meaning: "Thu hút nhân tài tầm cỡ cao", ipa: '/haɪ ˈkæl.ɪ.bər/' },
      { word: "substantially curtail costly turnover", meaning: "Cắt giảm đáng kể tỷ lệ luân chuyển nhân sự tốn kém", ipa: '/kɜːˈteɪl ˈtɜːnˌəʊ.vər/' },
      { word: "preserve institutional expertise", meaning: "Bảo tồn kinh nghiệm chuyên môn nội bộ", ipa: '/ˌɪn.stɪˈtʃuː.ʃən.əl/' }
    ],
    sampleEnglishAnswer: "Not only does a competitive remuneration package attract high-caliber talent from rival firms, but it also substantially curtails costly employee turnover. As a direct consequence, the enterprise preserves valuable institutional expertise and fosters sustainable organizational continuity.",
    alternativeAnswers: [
      "Offering generous salary and comprehensive benefits not only secures premier recruits but also reinforces loyalty among seasoned personnel."
    ],
    analysis: "Cấu trúc đảo ngữ 'Not only does [S] [V-inf], but it also [V-s/es]' là điểm cộng trực tiếp từ giám khảo ETS cho tiêu chí Grammatical Range.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-16',
    itemNumber: 112,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: "Đoạn 16: Đoạn nhượng bộ Concession về chi phí năng lượng sạch",
    vietnamesePrompt: "Mặc dù việc chuyển đổi sang lắp đặt năng lượng mặt trời đòi hỏi nguồn vốn đầu tư ban đầu rất lớn, những lợi ích lâu dài về việc tiết kiệm tiền điện và bảo vệ môi trường hoàn toàn vượt trội hơn khoản chi phí đó. Nhiều nghiên cứu chỉ ra rằng các doanh nghiệp xanh thu hồi vốn chỉ sau vài năm vận hành.",
    targetGrammar: "Cấu trúc nhượng bộ phản biện (Although/While it is acknowledged that [Counter-point], the long-term economic and ecological dividends far outweigh...)",
    vocabularyHints: [
      { word: "entails substantial upfront capital expenditure", meaning: "Đòi hỏi chi phí vốn đầu tư ban đầu lớn", ipa: '/ɪnˈteɪlz ˈʌp.frʌnt ɪkˈspen.dɪ.tʃər/' },
      { word: "long-term ecological and financial dividends", meaning: "Lợi tức lâu dài về tài chính và sinh thái", ipa: '/ˌiː.kəˈlɒdʒ.ɪ.kəl ˈdɪv.ɪ.dendz/' },
      { word: "far outweigh the preliminary costs", meaning: "Vượt trội hơn hẳn so với chi phí ban đầu", ipa: '/aʊtˈweɪ/' },
      { word: "recoup capital investments", meaning: "Thu hồi vốn đầu tư", ipa: '/rɪˈkuːp/' }
    ],
    sampleEnglishAnswer: "Although transitioning to solar infrastructure entails substantial upfront capital expenditure, the long-term ecological and financial dividends far outweigh these preliminary hurdles. Empirical evidence indicates that forward-thinking corporations consistently recoup initial installations within a few fiscal cycles.",
    alternativeAnswers: [
      "Granted that clean energy conversion requires considerable initial budgets, the ongoing utility reductions and carbon mitigation represent a lucrative investment."
    ],
    analysis: "Cấu trúc nhượng bộ 'Although [A], the long-term dividends far outweigh [B]' chứng tỏ tư duy phản biện hai chiều (Critical Thinking).",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-17',
    itemNumber: 113,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: "Đoạn 17: Đoạn kết bài Punchline về sự chân thành của thương hiệu số",
    vietnamesePrompt: "Tóm lại, trong một thị trường nơi người tiêu dùng ngày càng thông thái và có nhiều lựa chọn, các thương hiệu xây dựng được sự minh bạch thực sự trên truyền thông xã hội sẽ giữ vững được lòng tin yêu lâu bền của khách hàng.",
    targetGrammar: "Cấu trúc Kết luận đúc rút (In summary, within a marketplace characterized by..., enterprises that cultivate... will cement enduring consumer loyalty)",
    vocabularyHints: [
      { word: "in summary, within a discerning marketplace", meaning: "Tóm lại, trong một thị trường đầy sự thông thái của khách hàng", ipa: '/dɪˈsɜː.nɪŋ/' },
      { word: "cultivate authentic digital transparency", meaning: "Nuôi dưỡng sự minh bạch chân thực trên không gian số", ipa: '/ɔːˈθen.tɪk trænˈspær.ən.si/' },
      { word: "cement enduring consumer loyalty", meaning: "Gắn kết lòng trung thành lâu bền của người tiêu dùng", ipa: '/sɪˈment ɪnˈdjʊə.rɪŋ/' }
    ],
    sampleEnglishAnswer: "In summary, within a modern marketplace characterized by discerning consumer expectations, enterprises that cultivate authentic digital transparency will undeniably cement enduring brand loyalty and outshine their competitors.",
    alternativeAnswers: [
      "To conclude, organizations that prioritize candid customer engagement across social networks are destined to retain public trust and achieve sustained prosperity."
    ],
    analysis: "Động từ 'cement enduring brand loyalty' (gắn kết lòng trung thành thương hiệu bền vững) là cái kết đắt giá cho bài viết luận 200/200.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-18',
    itemNumber: 114,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: "Đoạn 18: Thân bài PEEL về phát triển kỹ năng mềm qua hoạt động thể thao",
    vietnamesePrompt: "Mặt khác, việc tham gia các môn thể thao đồng đội rèn luyện cho thanh thiếu niên những kỹ năng mềm vô cùng thiết yếu. Cụ thể, khi cùng thi đấu vì một mục tiêu chung, các bạn trẻ học được cách lắng nghe, chấp nhận thất bại và kiên trì nỗ lực dưới áp lực thời gian.",
    targetGrammar: "Cấu trúc PEEL (On the other hand, engaging in [Activity] instills... Specifically, by striving for..., young individuals learn to...)",
    vocabularyHints: [
      { word: "engaging in competitive team sports", meaning: "Tham gia vào các môn thể thao đồng đội mang tính cạnh tranh", ipa: '/kəmˈpet.ɪ.tɪv tiːm spɔːts/' },
      { word: "instills indispensable interpersonal skills", meaning: "Thấm nhuần những kỹ năng giao tiếp thiết yếu", ipa: '/ɪnˈstɪlz ˌɪn.dɪˈspen.sə.bəl/' },
      { word: "striving for a unified objective", meaning: "Nỗ lực vì một mục tiêu thống nhất", ipa: '/ˈstraɪ.vɪŋ fɔːr/' },
      { word: "demonstrate resilience under intense pressure", meaning: "Thể hiện sự kiên cường dưới áp lực gay gắt", ipa: '/rɪˈzɪl.jəns/' }
    ],
    sampleEnglishAnswer: "On the other hand, participating in competitive team athletics instills indispensable interpersonal proficiencies. Specifically, by striving toward a unified objective, adolescents learn to communicate constructively, resolve disagreements, and demonstrate resilience under intense emotional pressure.",
    alternativeAnswers: [
      "Furthermore, group sports cultivate essential leadership traits, teaching youngsters the value of discipline, collective accountability, and mutual respect."
    ],
    analysis: "'Resilience under intense emotional pressure' và 'striving toward a unified objective' mô tả kỹ năng sống cực kỳ thuyết phục.",
    difficulty: 'Trung cấp (650+)'
  },
  {
    id: 'trans-op-19',
    itemNumber: 115,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: "Đoạn 19: Phản biện Counter-argument về sự cô lập khi làm việc từ xa",
    vietnamesePrompt: "Thừa nhận rằng làm việc từ xa đôi khi có thể gây ra cảm giác xa cách đồng nghiệp, nhưng các kênh liên lạc trực tuyến hiện đại và các buổi họp ảo định kỳ hoàn toàn có thể duy trì sự gắn kết tinh thần mạnh mẽ giữa các nhân sự.",
    targetGrammar: "Cấu trúc thừa nhận và bác bỏ (Granted that telecommuting may occasionally induce feelings of isolation, modern virtual channels can effortlessly preserve...)",
    vocabularyHints: [
      { word: "granted that telecommuting may induce", meaning: "Thừa nhận rằng làm việc từ xa có thể gây ra", ipa: '/ˈɡrɑːn.tɪd ðæt/' },
      { word: "feelings of professional isolation", meaning: "Cảm giác cô lập trong công việc", ipa: '/ˌaɪ.səˈleɪ.ʃən/' },
      { word: "robust digital collaboration platforms", meaning: "Nền tảng cộng tác kỹ thuật số mạnh mẽ", ipa: '/rəʊˈbʌst/' },
      { word: "preserve vibrant camaraderie", meaning: "Duy trì tình đồng nghiệp sôi nổi gắn bó", ipa: '/ˌkæm.əˈrɑː.dər.i/' }
    ],
    sampleEnglishAnswer: "Granted that telecommuting may occasionally induce feelings of professional isolation, robust digital collaboration platforms and weekly virtual check-ins effortlessly preserve vibrant team camaraderie across dispersed geographic regions.",
    alternativeAnswers: [
      "While remote work can momentarily challenge social bonding, structured video huddles effectively sustain organizational cohesion."
    ],
    analysis: "Từ ngữ hiếm 'vibrant team camaraderie' (tình đồng nghiệp sôi nổi gắn kết) đem lại ấn tượng từ vựng C2 hiếm thấy.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-20',
    itemNumber: 116,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: "Đoạn 20: Cấu trúc đảo ngữ C1 phủ định 'Under no circumstances'",
    vietnamesePrompt: "Trong bất kỳ hoàn cảnh nào, các công ty sản xuất cũng không được phép đánh đổi các tiêu chuẩn bảo vệ môi trường để lấy lợi nhuận trước mắt. Việc phớt lờ xử lý rác thải công nghiệp sẽ dẫn đến những tổn hại sinh thái không thể đảo ngược.",
    targetGrammar: "Đảo ngữ phủ định tuyệt đối (Under no circumstances should enterprises sacrifice... for the sake of...)",
    vocabularyHints: [
      { word: "under no circumstances should enterprises sacrifice", meaning: "Trong bất kỳ hoàn cảnh nào doanh nghiệp cũng không nên đánh đổi", ipa: '/ˈsɜː.kəm.stæn.sɪz/' },
      { word: "rigorous ecological compliance", meaning: "Sự tuân thủ nghiêm ngặt về môi trường sinh thái", ipa: '/ˈrɪɡ.ər.əs/' },
      { word: "short-term profitability", meaning: "Khả năng sinh lời trong ngắn hạn", ipa: '/ˌprɒf.ɪ.təˈbɪl.ə.ti/' },
      { word: "irreversible ecological degradation", meaning: "Sự suy thoái sinh thái không thể phục hồi", ipa: '/ˌɪr.ɪˈvɜː.sə.bəl/' }
    ],
    sampleEnglishAnswer: "Under no circumstances should industrial enterprises sacrifice rigorous environmental compliance for the sake of transient quarterly profits. Neglecting sustainable waste management inevitably inflicts irreversible ecological degradation upon surrounding communities.",
    alternativeAnswers: [
      "At no time must corporate profitability supersede environmental stewardship, as ecological damage carries permanent repercussions."
    ],
    analysis: "Đảo ngữ 'Under no circumstances should [S] [V-inf]' là cấu trúc ngữ pháp đỉnh cao thường xuất hiện ở thí sinh đạt điểm tuyệt đối 200/200.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-21',
    itemNumber: 117,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: "Đoạn 21: Mở bài Thesis về đầu tư hạ tầng giao thông công cộng",
    vietnamesePrompt: "Trước tình trạng ùn tắc giao thông và ô nhiễm không khí ngày càng gia tăng tại các đô thị lớn, việc chính quyền thành phố ưu tiên nguồn ngân sách cho các tuyến xe buýt nhanh và tàu điện ngầm là một quyết sách hoàn toàn sáng suốt và cấp thiết.",
    targetGrammar: "Mở bài nghị luận nêu vấn đề và giải pháp (Faced with mounting urban congestion, prioritizing municipal fiscal reserves toward... represents an urgently needed policy)",
    vocabularyHints: [
      { word: "mounting urban traffic gridlock", meaning: "Tình trạng ùn tắc giao thông đô thị ngày càng gia tăng", ipa: '/ˈɡrɪd.lɒk/' },
      { word: "deteriorating atmospheric air quality", meaning: "Chất lượng không khí khí quyển đang xấu đi", ipa: '/dɪˈtɪə.ri.ə.reɪ.tɪŋ/' },
      { word: "allocating municipal fiscal reserves", meaning: "Phân bổ nguồn dự trữ tài chính của thành phố", ipa: '/ˈæləkeɪtɪŋ mjuːˈnɪs.ɪ.pəl/' },
      { word: "high-capacity transit infrastructure", meaning: "Hạ tầng giao thông công cộng sức chứa lớn", ipa: '/ˈtræn.zɪt/' }
    ],
    sampleEnglishAnswer: "Faced with mounting urban gridlock and deteriorating air quality, prioritizing municipal budgets toward high-capacity public transit infrastructure represents an indispensable strategic decision that curtails vehicular emissions and enhances commuter efficiency.",
    alternativeAnswers: [
      "In response to severe metropolitan traffic bottlenecks, modernizing subway networks is significantly more sustainable than widening highways."
    ],
    analysis: "Cặp từ 'mounting urban gridlock' và 'high-capacity transit infrastructure' thể hiện kiến thức chuyên sâu về chủ đề đô thị.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-22',
    itemNumber: 118,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: "Đoạn 22: Thân bài PEEL về chương trình chăm sóc sức khỏe tinh thần",
    vietnamesePrompt: "Thêm vào đó, việc thành lập các chương trình tư vấn tâm lý tại nơi làm việc mang lại lợi ích to lớn cho sức khỏe người lao động. Bằng cách phát hiện sớm tình trạng kiệt sức, ban nhân sự có thể kịp thời hỗ trợ nhân viên giải tỏa căng thẳng, từ đó giảm đáng kể số ngày nghỉ ốm của toàn công ty.",
    targetGrammar: "Cấu trúc PEEL (Additionally, establishing [Program] generates... By proactively identifying..., human resources can intervene..., thereby drastically curbing...)",
    vocabularyHints: [
      { word: "workplace psychological wellness programs", meaning: "Các chương trình chăm sóc sức khỏe tâm lý nơi công sở", ipa: '/ˌsaɪ.kəˈlɒdʒ.ɪ.kəl/' },
      { word: "proactively identifying occupational burnout", meaning: "Chủ động nhận diện tình trạng kiệt sức do nghề nghiệp", ipa: '/ˌɒk.jʊˈpeɪ.ʃən.əl ˈbɜːn.aʊt/' },
      { word: "intervene before chronic distress sets in", meaning: "Can thiệp trước khi nỗi căng thẳng mãn tính hình thành", ipa: '/ˌɪn.təˈviːn/' },
      { word: "drastically curbing employee absenteeism rates", meaning: "Cắt giảm mạnh mẽ tỷ lệ vắng mặt nghỉ ốm của nhân viên", ipa: '/ˌæb.sənˈtiː.ɪ.zəm/' }
    ],
    sampleEnglishAnswer: "Additionally, establishing workplace psychological wellness initiatives yields immense organizational dividends. By proactively diagnosing occupational burnout, managers can intervene with supportive counseling, thereby drastically curbing chronic absenteeism and elevating daily productivity.",
    alternativeAnswers: [
      "Corporate mental health programs protect employee wellbeing, directly reducing stress-induced sick leaves and improving staff retention."
    ],
    analysis: "Cụm 'curbing chronic absenteeism' (cắt giảm tình trạng vắng mặt thường xuyên) là collocation kinh điển của đề thi Quản trị nhân sự TOEIC Writing.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-23',
    itemNumber: 119,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: "Đoạn 23: Nhượng bộ Concession về tự động hóa dây chuyền sản xuất",
    vietnamesePrompt: "Mặc dù tự động hóa dây chuyền lắp ráp không thể tránh khỏi việc cắt giảm một số công việc thủ công, nó lại đồng thời tạo ra hàng ngàn vị trí kỹ thuật mới đòi hỏi chuyên môn cao như lập trình viên robot và chuyên viên bảo trì thông minh.",
    targetGrammar: "Cấu trúc cân bằng tương phản (While industrial automation inevitably displaces certain manual occupations, it simultaneously generates thousands of high-skilled roles...)",
    vocabularyHints: [
      { word: "industrial robotic automation", meaning: "Tự động hóa bằng robot công nghiệp", ipa: '/ˌɔː.təˈmeɪ.ʃən/' },
      { word: "inevitably displaces repetitive manual labor", meaning: "Không thể tránh khỏi việc thay thế lao động thủ công lặp đi lặp lại", ipa: '/dɪsˈpleɪ.sɪz/' },
      { word: "simultaneously generates high-skilled technical vacancies", meaning: "Đồng thời tạo ra các vị trí kỹ thuật đòi hỏi kỹ năng cao", ipa: '/ˌsɪm.əlˈteɪ.ni.əs.li/' },
      { word: "intelligent systems maintenance", meaning: "Bảo trì các hệ thống thông minh", ipa: '/ɪnˈtel.ɪ.dʒənt/' }
    ],
    sampleEnglishAnswer: "While industrial automation inevitably displaces certain repetitive manual roles, it simultaneously generates thousands of high-skilled technical opportunities in software programming, robotics diagnostics, and intelligent systems maintenance.",
    alternativeAnswers: [
      "Although machinery replaces physical laborers in factories, technological transformation creates lucrative career paths in systems engineering."
    ],
    analysis: "Cặp từ đối lập 'displaces repetitive roles' và 'simultaneously generates high-skilled opportunities' thể hiện tư duy phân tích toàn diện.",
    difficulty: 'Nâng cao (800+)'
  },
  {
    id: 'trans-op-24',
    itemNumber: 120,
    part: 'opinion_paragraphs',
    partName: 'Task Cuối: Đoạn Văn Ngắn Nền Tảng',
    partCategory: 'paragraph',
    title: "Đoạn 24: Đoạn kết bài Punchline đỉnh cao cho Speaking Q11 & Writing Q8",
    vietnamesePrompt: "Tóm lại, để phát triển thịnh vượng và bền vững trong kỷ nguyên số, các nhà lãnh đạo phải không ngừng nâng cao năng lực thích ứng, kiên định với các giá trị đạo đức và coi việc bồi dưỡng con người là trọng tâm của mọi chiến lược đổi mới.",
    targetGrammar: "Cấu trúc kết bài chốt hạ cao cấp (In conclusion, sustaining long-term prosperity in the digital age necessitates unyielding adaptability, ethical stewardship, and placing human empowerment at the core of all innovation)",
    vocabularyHints: [
      { word: "in conclusion, sustaining long-term prosperity", meaning: "Tóm lại, việc duy trì sự thịnh vượng lâu dài", ipa: '/prɒsˈper.ə.ti/' },
      { word: "necessitates unyielding adaptability", meaning: "Đòi hỏi khả năng thích ứng không ngừng nghỉ", ipa: '/nəˈses.ɪ.teɪts ʌnˈjiːl.dɪŋ/' },
      { word: "ethical corporate stewardship", meaning: "Tinh thần lãnh đạo và quản trị doanh nghiệp có đạo đức", ipa: '/ˈeθ.ɪ.kəl ˈstjuː.əd.ʃɪp/' },
      { word: "human empowerment at the core of innovation", meaning: "Trao quyền cho con người làm trọng tâm của đổi mới sáng tạo", ipa: '/ɪmˈpaʊə.mənt/' }
    ],
    sampleEnglishAnswer: "In conclusion, sustaining long-term prosperity throughout the digital epoch necessitates unyielding adaptability, ethical corporate stewardship, and placing human empowerment at the very core of every strategic innovation.",
    alternativeAnswers: [
      "Ultimately, visionary leadership that balances technological modernization with human welfare will consistently achieve lasting triumph in the global economy."
    ],
    analysis: "Đoạn kết luận 36 từ mang sức nặng triết lý sâu sắc, hoàn hảo tuyệt đối để kết thúc bài thi Speaking Q11 hoặc Writing Q8 với band điểm tối đa 200/200.",
    difficulty: 'Nâng cao (800+)'
  }
];
