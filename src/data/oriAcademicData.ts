import type { OriEssayTopic } from '../types';

export const ORI_ACADEMIC_TOPICS: OriEssayTopic[] = [
  // =========================================================================
  // DẠNG 1: AGREE / DISAGREE (ĐỒNG Ý HAY PHẢN ĐỐI)
  // =========================================================================
  {
    id: 'ori-essay-1',
    category: 'agree_disagree',
    categoryName: 'Dạng 1: Agree / Disagree (Đồng ý hay Phản đối)',
    topicTitle: 'Company-Sponsored Team Building vs Performance Bonuses',
    prompt: `Some companies believe that organizing regular team-building activities outside the workplace significantly boosts employee productivity and morale. Others argue that such events consume valuable personal time and do little to improve daily work performance.\n\nDo you agree or disagree with the opinion that team-building activities improve workplace productivity? Give specific reasons and examples to support your opinion.`,
    overviewStrategy: `Đối với dạng Agree / Disagree:
1. Thí sinh cần chọn 1 lập trường rõ ràng (Agree 100% hoặc Disagree 100%) ngay tại câu cuối của Mở bài (Thesis Statement). Tránh chọn lập trường nước đôi 50/50 vì sẽ rất khó viết đủ sâu trong 300 từ.
2. Dùng công thức P.E.E.L cho mỗi đoạn thân bài:
   - P (Point): Câu chủ đề nêu luận điểm 1.
   - E (Explanation): Giải thích cơ chế tại sao luận điểm đó đúng.
   - E (Example): Dẫn chứng thực tế từ kinh nghiệm cá nhân hoặc tình huống doanh nghiệp.
   - L (Link back): Câu chốt khẳng định lại sự hỗ trợ cho luận điểm chính.`,
    brainstormingMap: {
      coreQuestion: 'Hoạt động team-building ngoài công sở có thực sự nâng cao năng suất hay không?',
      recommendedStance: 'AGREE (Đồng ý 100% - Team-building mang lại lợi ích lâu dài cho tổ chức)',
      reasons: [
        {
          point: 'Phá bỏ rào cản thứ bậc & xây dựng lòng tin (Break down hierarchical barriers & build authentic trust).',
          elaboration: 'Khi chơi các trò chơi đồng đội ngoài văn phòng, nhân viên cấp dưới và sếp xóa bỏ khoảng cách hình thức, học cách thấu hiểu điểm mạnh của nhau.',
          example: 'Tại công ty công nghệ cũ, chuyến dã ngoại giúp team Kỹ thuật và team Kinh doanh hiểu tính chất công việc của nhau, giảm 30% thời gian xử lý dự án sau đó.'
        },
        {
          point: 'Giải tỏa kiệt sức nghề nghiệp & tái tạo năng lượng (Alleviate burnout & rejuvenate creativity).',
          elaboration: 'Áp lực công việc tích tụ gây suy giảm nhận thức. Môi trường thiên nhiên giúp phục hồi tinh thần nhanh hơn.',
          example: 'Các giải đấu thể thao hoặc lớp học nấu ăn cuối tuần giúp nhân viên trở lại bàn làm việc với tinh thần sảng khoái và lòng gắn kết cao.'
        }
      ]
    },
    masterFormula: {
      introFormula: [
        'Câu 1 (Hook / Paraphrase): Giới thiệu chủ đề và dẫn dắt 2 luồng quan điểm trong môi trường doanh nghiệp hiện đại.',
        'Câu 2 (Thesis Statement): Khẳng định dứt khoát quan điểm cá nhân: "While some critics argue that [A], I firmly maintain that [B]."'
      ],
      body1Formula: [
        'Câu 1 (Topic Sentence): "First and foremost, company retreats serve as an indispensable catalyst for cultivating interpersonal trust."',
        'Câu 2-3 (Explanation): Phân tích vì sao giao tiếp ngoài văn phòng lại thân mật và chân thành hơn.',
        'Câu 4-5 (Specific Example): "For instance, at my previous technology firm, an annual retreat enabled cross-functional teams to collaborate seamlessly."',
        'Câu 6 (Concluding sentence): Chốt lại lợi ích nâng cao năng suất.'
      ],
      body2Formula: [
        'Câu 1 (Topic Sentence): "Secondly, engaging outdoor activities provide much-needed respite from chronic workplace burnout."',
        'Câu 2-3 (Explanation): Giải thích tác động tâm lý của việc tạm rời xa màn hình máy tính.',
        'Câu 4-5 (Specific Example): "Consequently, employees return with revitalized energy and sharper problem-solving agility."',
        'Câu 6 (Concluding sentence): Khẳng định hiệu suất công việc được nâng tầm rõ rệt.'
      ],
      conclusionFormula: [
        'Câu 1 (Restatement): "In conclusion, far from being a disruption of personal time, well-organized team-building events generate profound dividends for organizational cohesion."',
        'Câu 2 (Final Thought / Outlook): Đưa ra khuyến nghị cân đối để tối đa hóa hiệu quả cho doanh nghiệp.'
      ]
    },
    keySentenceTemplates: [
      {
        stage: 'Mở bài (Thesis Statement)',
        template: 'While critics often contend that [A], I firmly argue that [B] due to its profound impact on long-term productivity.',
        vietnameseMeaning: 'Trong khi các nhà phê bình cho rằng [A], tôi kiên quyết lập luận rằng [B] vì tác động sâu sắc của nó đối với năng suất dài hạn.'
      },
      {
        stage: 'Thân bài (Dẫn chứng cụ thể)',
        template: 'A notable case in point is my experience at [Company], where implementing [Action] led to a remarkable [Percentage]% increase in team efficiency.',
        vietnameseMeaning: 'Một ví dụ điển hình là kinh nghiệm của tôi tại [Công ty], nơi việc áp dụng [Hành động] đã dẫn đến sự gia tăng đáng kể [X]% hiệu quả nhóm.'
      },
      {
        stage: 'Thân bài (Cấu trúc đảo ngữ C1)',
        template: 'Not only does [Action] alleviate stress, but it also fosters durable camaraderie among colleagues.',
        vietnameseMeaning: 'Hành động [X] không chỉ làm giảm căng thẳng mà còn nuôi dưỡng tình đồng chí bền chặt giữa các đồng nghiệp.'
      },
      {
        stage: 'Kết luận (Khẳng định lại)',
        template: 'Taking all these factors into consideration, it is evident that [Point] yields indispensable benefits for both staff and enterprise.',
        vietnameseMeaning: 'Cân nhắc tất cả các yếu tố này, rõ ràng là [Luận điểm] mang lại lợi ích không thể thiếu cho cả nhân viên lẫn doanh nghiệp.'
      }
    ],
    bilingualModelEssay: [
      {
        paragraphTitle: 'Đoạn 1: Mở Bài (Introduction - Hook & Thesis)',
        role: 'Dẫn dắt bối cảnh & Xác lập quan điểm',
        sentences: [
          {
            en: "In today's fast-paced corporate environment, the debate over whether company-sponsored team-building activities truly benefit organizations has garnered substantial attention.",
            vi: 'Trong môi trường doanh nghiệp nhịp độ nhanh ngày nay, cuộc tranh luận về việc liệu các hoạt động xây dựng đội ngũ do công ty tài trợ có thực sự mang lại lợi ích cho tổ chức hay không đã thu hút sự chú ý đáng kể.',
            highlightKeywords: ['fast-paced corporate environment', 'garnered substantial attention']
          },
          {
            en: "While critics often argue that mandatory extracurricular outings encroach upon personal time, I firmly contend that well-designed team retreats significantly bolster employee morale and long-term organizational productivity.",
            vi: 'Mặc dù những người chỉ trích thường cho rằng các buổi dã ngoại ngoại khóa bắt buộc xâm phạm thời gian cá nhân, tôi kiên quyết khẳng định rằng các kỳ nghỉ dưỡng đội ngũ được thiết kế bài bản sẽ củng cố đáng kể tinh thần nhân viên và năng suất lâu dài của tổ chức.',
            highlightKeywords: ['encroach upon personal time', 'firmly contend', 'bolster employee morale']
          }
        ]
      },
      {
        paragraphTitle: 'Đoạn 2: Thân Bài 1 (Body 1 - Xây dựng lòng tin liên phòng ban)',
        role: 'Luận điểm 1: Phá bỏ rào cản thứ bậc & gắn kết',
        sentences: [
          {
            en: 'First and foremost, off-site team-building activities serve as an indispensable catalyst for breaking down hierarchical barriers and cultivating authentic interpersonal trust.',
            vi: 'Trước hết và quan trọng nhất, các hoạt động xây dựng đội ngũ ngoài văn phòng đóng vai trò như một chất xúc tác không thể thiếu để xóa bỏ các rào cản thứ bậc và nuôi dưỡng niềm tin chân thực giữa các cá nhân.',
            highlightKeywords: ['indispensable catalyst', 'hierarchical barriers', 'interpersonal trust']
          },
          {
            en: 'Within traditional office cubicles, interactions between junior employees and senior executives are frequently constrained by corporate formality.',
            vi: 'Bên trong những ô làm việc văn phòng truyền thống, sự tương tác giữa nhân viên cấp dưới và các quản lý cấp cao thường bị hạn chế bởi sự khách sáo lễ nghi công sở.',
            highlightKeywords: ['office cubicles', 'constrained by corporate formality']
          },
          {
            en: "In contrast, when colleagues participate in collaborative outdoor challenges or problem-solving retreats, they learn to communicate with genuine empathy and discover each other's unique strengths.",
            vi: 'Ngược lại, khi các đồng nghiệp tham gia vào các thử thách ngoài trời mang tính cộng tác hoặc các kỳ nghỉ giải quyết vấn đề, họ học cách giao tiếp với sự đồng cảm chân thành và khám phá điểm mạnh độc đáo của nhau.',
            highlightKeywords: ['collaborative outdoor challenges', 'genuine empathy']
          },
          {
            en: 'For instance, at my previous technology firm, an annual strategy retreat enabled cross-functional software engineers and sales representatives to establish mutual rapport, which subsequently reduced project turnaround time by thirty percent.',
            vi: 'Chẳng hạn, tại công ty công nghệ trước đây của tôi, chuyến dã ngoại chiến lược hàng năm đã giúp các kỹ sư phần mềm và đại diện kinh doanh liên phòng ban thiết lập mối quan hệ gắn bó, từ đó giảm 30% thời gian hoàn thành dự án sau đó.',
            highlightKeywords: ['cross-functional', 'establish mutual rapport', 'turnaround time']
          }
        ]
      },
      {
        paragraphTitle: 'Đoạn 3: Thân Bài 2 (Body 2 - Giải tỏa kiệt sức nghề nghiệp)',
        role: 'Luận điểm 2: Tái tạo năng lượng và giảm thiểu căng thẳng',
        sentences: [
          {
            en: 'Secondly, rejuvenating retreats outside the office environment provide much-needed respite from occupational burnout.',
            vi: 'Thứ hai, những kỳ nghỉ tái tạo năng lượng ngoài môi trường công sở mang lại khoảng thời gian nghỉ ngơi vô cùng cần thiết để thoát khỏi tình trạng kiệt sức nghề nghiệp.',
            highlightKeywords: ['rejuvenating retreats', 'much-needed respite', 'occupational burnout']
          },
          {
            en: 'Chronic work-related stress undeniably diminishes cognitive creativity and leads to elevated employee turnover rates.',
            vi: 'Căng thẳng mãn tính liên quan đến công việc chắc chắn làm suy giảm khả năng sáng tạo nhận thức và dẫn đến tỷ lệ nhân viên nghỉ việc tăng cao.',
            highlightKeywords: ['chronic work-related stress', 'diminishes cognitive creativity', 'employee turnover rates']
          },
          {
            en: 'When an enterprise invests resources into organizing enjoyable, non-work-related gatherings, it demonstrates profound appreciation for its workforce.',
            vi: 'Khi một doanh nghiệp đầu tư nguồn lực vào việc tổ chức các buổi tụ họp thú vị, không dính líu đến công việc, điều đó thể hiện sự trân trọng sâu sắc đối với lực lượng lao động của mình.',
            highlightKeywords: ['demonstrates profound appreciation']
          },
          {
            en: 'Consequently, employees return to their desks with revitalized energy and heightened commitment toward corporate milestones.',
            vi: 'Nhờ đó, nhân viên quay trở lại bàn làm việc với nguồn năng lượng được hồi sinh và tinh thần cam kết cao độ hơn đối với các cột mốc của công ty.',
            highlightKeywords: ['revitalized energy', 'heightened commitment']
          }
        ]
      },
      {
        paragraphTitle: 'Đoạn 4: Kết Bài (Conclusion - Chốt hạ & Định hướng)',
        role: 'Khẳng định lại luận điểm & Đưa ra kết luận tổng thể',
        sentences: [
          {
            en: 'In conclusion, far from being a frivolous expenditure of time, purposeful team-building activities foster durable camaraderie and alleviate workplace fatigue.',
            vi: 'Tóm lại, hoàn toàn không phải là sự lãng phí thời gian vô bổ, các hoạt động xây dựng đội ngũ có chủ đích nuôi dưỡng tình đồng đội bền chặt và làm giảm bớt sự mệt mỏi nơi công sở.',
            highlightKeywords: ['frivolous expenditure', 'durable camaraderie', 'workplace fatigue']
          },
          {
            en: 'When orchestrated thoughtfully with respect for personal boundaries, these initiatives yield profound dividends for collective morale and sustainable business performance.',
            vi: 'Khi được dàn dựng chu đáo và tôn trọng ranh giới cá nhân, những sáng kiến này sẽ mang lại cổ tức to lớn cho tinh thần tập thể và hiệu suất kinh doanh bền vững.',
            highlightKeywords: ['orchestrated thoughtfully', 'yield profound dividends', 'sustainable business performance']
          }
        ]
      }
    ]
  },

  // =========================================================================
  // DẠNG 2: PREFERENCE / COMPARISON (LỰA CHỌN A HAY B)
  // =========================================================================
  {
    id: 'ori-essay-2',
    category: 'preference',
    categoryName: 'Dạng 2: Preference / Comparison (Lựa chọn A hay B)',
    topicTitle: 'Working for a Large Corporation vs a Small Startup',
    prompt: `Some people prefer to work for a large, established multinational corporation with clear hierarchy and stable benefits. Others prefer to work for a small startup company with flexible roles and greater creative autonomy.\n\nWhich work environment do you prefer? Use specific reasons and examples to support your decision.`,
    overviewStrategy: `Đối với dạng Preference:
1. Đề bài đưa ra 2 lựa chọn (Option A vs Option B). Bạn PHẢI chọn 1 bên và kiên định bảo vệ lựa chọn đó.
2. Cách so sánh thông minh để đạt điểm cao:
   - Trong mỗi đoạn thân bài, sau khi nêu điểm mạnh của lựa chọn bạn ủng hộ, hãy viết 1 câu nhượng bộ hoặc đối chiếu với lựa chọn còn lại để bài viết có chiều sâu biện chứng (Nuanced Argumentation).
3. Sử dụng các cụm từ so sánh tương phản: "In stark contrast to...", "Whereas A provides X, B fosters Y...", "While established firms offer stability, startups nurture agility."`,
    brainstormingMap: {
      coreQuestion: 'Bạn thích làm việc tại Tập đoàn Đa quốc gia Lớn hay Công ty Khởi nghiệp Nhỏ?',
      recommendedStance: 'PREFER STARTUP (Ủng hộ Công ty Khởi nghiệp Nhỏ vì cơ hội học hỏi nhanh & tính tự chủ)',
      reasons: [
        {
          point: 'Đa dạng hóa kỹ năng & tốc độ thăng tiến vượt bậc (Accelerated learning curve & multifaceted skill development).',
          elaboration: 'Tại startup, nhân viên không bị bó hẹp trong 1 mô tả công việc (job description) đơn điệu mà được tham gia vào nhiều khâu từ sản phẩm đến bán hàng.',
          example: 'Khi làm việc tại 1 startup công nghệ tài chính giai đoạn đầu, tôi vừa viết code vừa trực tiếp tham gia đàm phán với khách hàng, học được nhiều hơn 3 năm làm việc ở công ty cũ.'
        },
        {
          point: 'Quyền tự chủ sáng tạo & tác động trực tiếp lên sản phẩm (Creative autonomy & tangible impact).',
          elaboration: 'Không bị cản trở bởi quy trình phê duyệt quan liêu phức tạp. Các sáng kiến được triển khai và thử nghiệm ngay lập tức.',
          example: 'Một tính năng tôi đề xuất vào buổi sáng có thể được đội ngũ deploy lên hệ thống ngay trong buổi chiều.'
        }
      ]
    },
    masterFormula: {
      introFormula: [
        'Câu 1 (Background): "Choosing between an established multinational corporation and an agile startup represents a pivotal milestone in any professional’s career trajectory."',
        'Câu 2 (Thesis): "While large enterprises offer structured stability, I firmly advocate for beginning one\'s career in a small startup environment due to the rapid skill acquisition and profound creative autonomy it affords."'
      ],
      body1Formula: [
        'Câu 1 (Topic Sentence): "To begin with, working at a startup offers an unparalleled learning curve that cultivates versatile, multifaceted competencies."',
        'Câu 2-3 (Explanation & Contrast): Giải thích sự khác biệt giữa làm việc chuyên môn hóa hẹp ở tập đoàn lớn so với việc "đội nhiều mũ" (wear multiple hats) ở startup.',
        'Câu 4-5 (Example): Đưa ra ví dụ trải nghiệm thực tế học hỏi nhanh.',
        'Câu 6 (Link): Chốt lại giá trị cạnh tranh trên thị trường lao động.'
      ],
      body2Formula: [
        'Câu 1 (Topic Sentence): "Furthermore, small companies empower professionals with creative autonomy and the ability to witness the tangible impact of their contributions."',
        'Câu 2-3 (Explanation & Contrast): Phân tích sự chậm trễ của bộ máy quan liêu (bureaucratic red tape) ở tập đoàn lớn so với tốc độ ra quyết định thần tốc ở startup.',
        'Câu 4-5 (Example): Minh chứng cụ thể về việc ý tưởng được hiện thực hóa.',
        'Câu 6 (Link): Chốt lại cảm giác tự hào và động lực làm việc.'
      ],
      conclusionFormula: [
        'Câu 1 (Restatement): "In conclusion, while large corporations remain appealing for those seeking predictable routines, the dynamic atmosphere of a startup proves vastly superior for personal and professional growth."',
        'Câu 2 (Future Recommendation): Lời khuyên cho các chuyên gia trẻ muốn bứt phá sự nghiệp.'
      ]
    },
    keySentenceTemplates: [
      {
        stage: 'Mở bài (Nêu sở thích cá nhân)',
        template: 'While [Option A] undoubtedly offers [Benefit], I am strongly inclined toward [Option B] because it cultivates [Key Advantage].',
        vietnameseMeaning: 'Mặc dù [Lựa chọn A] chắc chắn mang lại [Lợi ích], tôi nghiêng mạnh về [Lựa chọn B] vì nó nuôi dưỡng [Lợi thế cốt lõi].'
      },
      {
        stage: 'Thân bài (So sánh đối lập sắc bén)',
        template: 'Unlike large corporations where roles are compartmentalized, startups compel individuals to wear multiple hats, thereby accelerating professional maturity.',
        vietnameseMeaning: 'Không giống như các tập đoàn lớn nơi vai trò bị chia tách biệt lập, các công ty khởi nghiệp buộc các cá nhân phải đảm nhận nhiều trọng trách, qua đó đẩy nhanh sự trưởng thành trong nghề nghiệp.'
      },
      {
        stage: 'Thân bài (Bác bỏ mặt tiêu cực)',
        template: 'Although some may view the absence of rigid structure as chaotic, I perceive it as a fertile ground for relentless innovation.',
        vietnameseMeaning: 'Mặc dù một số người có thể xem việc thiếu cấu trúc cứng nhắc là hỗn loạn, tôi lại coi đó là mảnh đất màu mỡ cho sự đổi mới không ngừng.'
      }
    ],
    bilingualModelEssay: [
      {
        paragraphTitle: 'Đoạn 1: Mở Bài (Introduction - Setting the Choice)',
        role: 'Đặt bối cảnh & Chọn lựa phương án',
        sentences: [
          {
            en: 'Choosing between an established multinational corporation and an agile startup represents a pivotal milestone in any professional’s career trajectory.',
            vi: 'Việc lựa chọn giữa một tập đoàn đa quốc gia lâu đời và một công ty khởi nghiệp linh hoạt đại diện cho một cột mốc then chốt trong quỹ đạo sự nghiệp của bất kỳ chuyên gia nào.',
            highlightKeywords: ['pivotal milestone', 'career trajectory', 'agile startup']
          },
          {
            en: 'While established enterprises offer structured stability and comprehensive benefit packages, I firmly advocate for working in a small startup environment due to the rapid skill acquisition and profound creative autonomy it affords.',
            vi: 'Mặc dù các doanh nghiệp lâu đời mang lại sự ổn định có cấu trúc và các gói phúc lợi toàn diện, tôi kiên quyết ủng hộ việc làm việc trong môi trường khởi nghiệp nhỏ vì tốc độ tiếp thu kỹ năng nhanh chóng và sự tự chủ sáng tạo sâu sắc mà nó mang lại.',
            highlightKeywords: ['structured stability', 'rapid skill acquisition', 'creative autonomy']
          }
        ]
      },
      {
        paragraphTitle: 'Đoạn 2: Thân Bài 1 (Body 1 - Tốc độ phát triển kỹ năng toàn diện)',
        role: 'Luận điểm 1: Đảm nhận nhiều vai trò và học hỏi thần tốc',
        sentences: [
          {
            en: 'To begin with, working at an early-stage startup offers an unparalleled learning curve that cultivates versatile, multifaceted competencies.',
            vi: 'Trước hết, làm việc tại một công ty khởi nghiệp giai đoạn đầu mang lại một lộ trình học tập vượt trội giúp nuôi dưỡng các năng lực linh hoạt và đa diện.',
            highlightKeywords: ['unparalleled learning curve', 'multifaceted competencies']
          },
          {
            en: 'In large corporate conglomerates, junior employees are frequently relegated to hyper-specialized, repetitive responsibilities with minimal exposure to high-level strategic decisions.',
            vi: 'Tại các tập đoàn lớn, nhân viên mới thường bị giới hạn vào các trách nhiệm lặp đi lặp lại mang tính chuyên môn hóa hẹp với rất ít cơ hội tiếp cận các quyết định chiến lược cấp cao.',
            highlightKeywords: ['corporate conglomerates', 'hyper-specialized', 'minimal exposure']
          },
          {
            en: 'In stark contrast, startup environments necessitate that team members wear multiple hats, seamlessly navigating from product design to customer acquisition.',
            vi: 'Trái lại hoàn toàn, môi trường khởi nghiệp đòi hỏi các thành viên trong nhóm phải đảm nhận nhiều vai trò khác nhau, chuyển dịch linh hoạt từ thiết kế sản phẩm sang thu hút khách hàng.',
            highlightKeywords: ['in stark contrast', 'wear multiple hats', 'customer acquisition']
          },
          {
            en: 'During my tenure at a tech startup, this broad exposure enabled me to master project management and financial forecasting in just eighteen months, achieving growth that would have taken years in a conventional hierarchy.',
            vi: 'Trong thời gian làm việc tại một công ty công nghệ khởi nghiệp, cơ hội tiếp cận rộng rãi này đã giúp tôi làm chủ kỹ năng quản lý dự án và dự báo tài chính chỉ trong 18 tháng, đạt được sự trưởng thành mà ở một bộ máy thứ bậc thông thường phải mất nhiều năm.',
            highlightKeywords: ['broad exposure', 'financial forecasting', 'conventional hierarchy']
          }
        ]
      },
      {
        paragraphTitle: 'Đoạn 3: Thân Bài 2 (Body 2 - Tự chủ sáng tạo & tác động trực quan)',
        role: 'Luận điểm 2: Không bị cản trở bởi quan liêu và thấy rõ thành quả',
        sentences: [
          {
            en: 'Furthermore, small enterprises empower staff with genuine autonomy and the ability to witness the direct, tangible impact of their everyday labor.',
            vi: 'Hơn nữa, các doanh nghiệp nhỏ trao cho nhân viên quyền tự chủ thực sự và khả năng chứng kiến tác động hữu hình trực tiếp từ lao động hàng ngày của họ.',
            highlightKeywords: ['genuine autonomy', 'tangible impact']
          },
          {
            en: 'In cumbersome corporate machinery, innovative proposals often languish for months beneath endless layers of bureaucratic red tape and administrative approvals.',
            vi: 'Trong bộ máy doanh nghiệp cồng kềnh, các đề xuất đổi mới thường bị đình trệ hàng tháng trời dưới vô số tầng nấc thủ tục hành chính quan liêu.',
            highlightKeywords: ['cumbersome corporate machinery', 'bureaucratic red tape']
          },
          {
            en: 'Conversely, startups foster flat organizational hierarchies where pioneering concepts can be prototyped, tested, and implemented within hours.',
            vi: 'Ngược lại, các công ty khởi nghiệp thúc đẩy các mô hình tổ chức phẳng nơi các khái niệm tiên phong có thể được thử nghiệm mẫu và triển khai chỉ trong vài giờ.',
            highlightKeywords: ['flat organizational hierarchies', 'prototyped and implemented']
          },
          {
            en: 'Knowing that one’s personal efforts directly dictate the survival and triumph of the entire venture instills an extraordinary sense of professional pride and purpose.',
            vi: 'Biết rằng nỗ lực của chính mình trực tiếp quyết định sự tồn vong và thắng lợi của cả dự án kinh doanh sẽ truyền cảm hứng về niềm tự hào nghề nghiệp và mục đích sống phi thường.',
            highlightKeywords: ['directly dictate', 'sense of professional pride']
          }
        ]
      },
      {
        paragraphTitle: 'Đoạn 4: Kết Bài (Conclusion - Chốt quyết định)',
        role: 'Tóm lược và đưa ra định hướng tương lai',
        sentences: [
          {
            en: 'In conclusion, while multinational conglomerates remain suitable for those who prioritize predictable routines, the agility of a startup provides an undeniably superior crucible for ambition.',
            vi: 'Tóm lại, trong khi các tập đoàn đa quốc gia vẫn phù hợp với những ai ưu tiên các thói quen có thể dự đoán được, sự linh hoạt của một công ty khởi nghiệp mang đến một môi trường thử thách rèn luyện vượt trội hơn hẳn cho lòng tham vọng.',
            highlightKeywords: ['predictable routines', 'superior crucible for ambition']
          },
          {
            en: 'By immersing oneself in a nimble entrepreneurial culture, professionals can acquire indispensable problem-solving tenacity that will yield lifelong dividends across their future endeavors.',
            vi: 'Bằng cách đắm mình vào văn hóa khởi nghiệp nhanh nhạy, các chuyên gia có thể thu nhận sự kiên trì giải quyết vấn đề vô giá, mang lại lợi ích suốt đời cho mọi nỗ lực trong tương lai của họ.',
            highlightKeywords: ['nimble entrepreneurial culture', 'problem-solving tenacity', 'lifelong dividends']
          }
        ]
      }
    ]
  },

  // =========================================================================
  // DẠNG 3: PROS & CONS / ADVANTAGES VS DISADVANTAGES (ƯU & NHƯỢC ĐIỂM)
  // =========================================================================
  {
    id: 'ori-essay-3',
    category: 'pros_cons',
    categoryName: 'Dạng 3: Advantages vs Disadvantages (Ưu điểm & Nhược điểm)',
    topicTitle: 'Integrating Generative AI in the Modern Workplace',
    prompt: `Technological advancements have made artificial intelligence (AI) tools increasingly ubiquitous in corporate environments. While some believe generative AI enhances operational efficiency, others express concerns regarding job displacement and data privacy risks.\n\nDiscuss the advantages and disadvantages of integrating artificial intelligence into the workplace. Give specific reasons and examples to support your view.`,
    overviewStrategy: `Đối với dạng Advantages vs Disadvantages:
1. Cấu trúc bài viết cần sự cân bằng và khách quan:
   - Thân bài 1: Trình bày chi tiết các Ưu điểm nổi trội (Advantages) kèm ví dụ cụ thể về năng suất tự động hóa.
   - Thân bài 2: Trình bày các Thách thức / Nhược điểm (Disadvantages / Risks) kèm ví dụ về bảo mật dữ liệu và sự phụ thuộc kỹ năng.
2. Kết bài: Đưa ra nhận định tổng hợp (Synthesis) rằng: Ưu điểm sẽ vượt trội nếu doanh nghiệp thiết lập các khung quản trị (Governance frameworks) có trách nhiệm.`,
    brainstormingMap: {
      coreQuestion: 'Ưu điểm và nhược điểm của việc ứng dụng Trí tuệ nhân tạo (AI) trong công sở là gì?',
      recommendedStance: 'BALANCED SYNTHESIS (Ưu điểm vượt trội nếu có chính sách kiểm soát rủi ro bài bản)',
      reasons: [
        {
          point: 'Ưu điểm: Tự động hóa các tác vụ lặp đi lặp lại & giải phóng năng lực tư duy cấp cao (Automation of mundane tasks & enhanced decision-making).',
          elaboration: 'AI xử lý các công việc tính toán, tổng hợp báo cáo và trả lời email sơ bộ trong vài giây, giúp nhân viên tập trung vào sáng tạo và chiến lược.',
          example: 'Bộ phận Marketing dùng AI để phân tích dữ liệu hành vi của 100.000 khách hàng trong 10 phút thay vì mất 2 tuần làm thủ công.'
        },
        {
          point: 'Nhược điểm: Rủi ro rò rỉ dữ liệu bảo mật & suy giảm tư duy phản biện (Data privacy vulnerabilities & intellectual complacency).',
          elaboration: 'Đưa dữ liệu nội bộ lên các mô hình AI công cộng có thể vi phạm bảo mật; lạm dụng AI khiến nhân viên phụ thuộc và mất dần kỹ năng phân tích độc lập.',
          example: 'Một số công ty tài chính từng bị lộ tài liệu mật do nhân viên tải bản thảo chưa phát hành lên các chatbot ngoài.'
        }
      ]
    },
    masterFormula: {
      introFormula: [
        'Câu 1 (Phenomenon): "The exponential integration of artificial intelligence into commercial operations has fundamentally reshaped the modern workplace paradigm."',
        'Câu 2 (Thesis): "While this transformative technological shift offers remarkable gains in operational efficiency, it simultaneously introduces notable vulnerabilities regarding data confidentiality and intellectual overreliance."'
      ],
      body1Formula: [
        'Câu 1 (Advantages): "On the one hand, deploying AI solutions offers undeniable merits in automating laborious workflows and optimizing cognitive bandwidth."',
        'Câu 2-3 (Explanation): Phân tích khả năng xử lý dữ liệu lớn (big data analytics) và loại bỏ các lỗi do con người (human errors).',
        'Câu 4-5 (Example): Minh chứng cụ thể về việc tăng tốc độ phân tích thị trường.',
        'Câu 6 (Link): Khẳng định sự nhảy vọt về năng suất sản xuất kinh doanh.'
      ],
      body2Formula: [
        'Câu 1 (Disadvantages): "On the other hand, the pervasive adoption of AI tools is not without formidable perils, particularly concerning proprietary security and workforce deskilling."',
        'Câu 2-3 (Explanation): Nguy cơ rò rỉ thông tin bí mật kinh doanh (trade secrets) và hội chứng phụ thuộc máy móc.',
        'Câu 4-5 (Example): Nêu dẫn chứng về các lỗ hổng bảo mật thông tin.',
        'Câu 6 (Link): Nhấn mạnh tầm quan trọng của việc không phó mặc hoàn toàn cho máy móc.'
      ],
      conclusionFormula: [
        'Câu 1 (Synthesis): "In conclusion, the emergence of AI in the commercial sphere is a double-edged sword that promises unparalleled productivity while posing legitimate operational hazards."',
        'Câu 2 (Future Outlook): Doanh nghiệp cần xây dựng đạo đức AI (AI ethical guidelines) để tối ưu hóa thế mạnh và triệt tiêu nguy cơ.'
      ]
    },
    keySentenceTemplates: [
      {
        stage: 'Mở đầu đoạn Ưu điểm',
        template: 'On the one hand, the primary advantage of [Technology/Policy] lies in its ability to dramatically streamline [Operational Area].',
        vietnameseMeaning: 'Một mặt, ưu điểm hàng đầu của [Công nghệ/Chính sách] nằm ở khả năng tinh giản đáng kể [Mảng hoạt động].'
      },
      {
        stage: 'Mở đầu đoạn Nhược điểm',
        template: 'On the other hand, these undeniable benefits must be weighed against significant drawbacks, most notably [Risk Factor].',
        vietnameseMeaning: 'Mặt khác, những lợi ích không thể phủ nhận này phải được cân nhắc so với những hạn chế lớn, đáng chú ý nhất là [Yếu tố rủi ro].'
      },
      {
        stage: 'Kết luận cân bằng (Double-edged sword)',
        template: 'Ultimately, while [Subject] represents a double-edged sword, proactive governance ensures that its advantages comfortably outweigh its inherent perils.',
        vietnameseMeaning: 'Xét cho cùng, dù [Chủ đề] là con dao hai lưỡi, sự quản trị chủ động sẽ đảm bảo các ưu điểm của nó hoàn toàn vượt trội các mối nguy tiềm ẩn.'
      }
    ],
    bilingualModelEssay: [
      {
        paragraphTitle: 'Đoạn 1: Mở Bài (Introduction - Hai mặt của vấn đề)',
        role: 'Dẫn dắt xu thế công nghệ & Nêu rõ tính hai mặt',
        sentences: [
          {
            en: 'The exponential integration of artificial intelligence into commercial operations has fundamentally reshaped the modern workplace paradigm.',
            vi: 'Sự tích hợp theo cấp số nhân của trí tuệ nhân tạo vào các hoạt động thương mại đã định hình lại căn bản khuôn mẫu nơi làm việc hiện đại.',
            highlightKeywords: ['exponential integration', 'workplace paradigm']
          },
          {
            en: 'While this transformative technological shift offers remarkable gains in operational efficiency and data synthesis, it simultaneously introduces notable vulnerabilities regarding proprietary confidentiality and workforce deskilling.',
            vi: 'Trong khi bước chuyển dịch công nghệ mang tính cách mạng này mang lại những bước tiến vượt bậc về hiệu quả vận hành và tổng hợp dữ liệu, nó đồng thời cũng tạo ra những lỗ hổng đáng kể liên quan đến tính bảo mật độc quyền và sự suy giảm kỹ năng của lực lượng lao động.',
            highlightKeywords: ['transformative technological shift', 'proprietary confidentiality', 'workforce deskilling']
          }
        ]
      },
      {
        paragraphTitle: 'Đoạn 2: Thân Bài 1 (Body 1 - Các ưu điểm vượt trội)',
        role: 'Phân tích lợi ích tự động hóa & giải phóng sức sáng tạo',
        sentences: [
          {
            en: 'On the one hand, deploying AI solutions offers undeniable merits in automating laborious, repetitive workflows and optimizing cognitive bandwidth.',
            vi: 'Một mặt, việc triển khai các giải pháp AI mang lại những lợi ích không thể phủ nhận trong việc tự động hóa các luồng công việc nặng nhọc, lặp đi lặp lại và tối ưu hóa băng thông nhận thức.',
            highlightKeywords: ['laborious workflows', 'optimizing cognitive bandwidth']
          },
          {
            en: 'Algorithms can parse massive datasets, detect subtle market anomalies, and draft preliminary correspondence in mere seconds, effectively eliminating human calculation errors.',
            vi: 'Các thuật toán có thể phân tích cú pháp các tập dữ liệu khổng lồ, phát hiện các điểm bất thường tinh vi trên thị trường và soạn thảo các thư từ sơ bộ chỉ trong vài giây, loại bỏ hiệu quả các lỗi tính toán của con người.',
            highlightKeywords: ['parse massive datasets', 'market anomalies', 'human calculation errors']
          },
          {
            en: 'For instance, in financial advisory firms, automating quarterly portfolio rebalancing with intelligent models liberates wealth managers to focus on high-touch client consultations and strategic relationship management.',
            vi: 'Chẳng hạn, tại các công ty tư vấn tài chính, việc tự động hóa tái cân bằng danh mục đầu tư hàng quý bằng các mô hình thông minh giúp giải phóng các nhà quản lý tài sản để tập trung vào việc tư vấn chuyên sâu cho khách hàng và quản lý các mối quan hệ chiến lược.',
            highlightKeywords: ['portfolio rebalancing', 'high-touch client consultations']
          },
          {
            en: 'Consequently, enterprises achieve unprecedented productivity milestones while operating with lower overhead costs.',
            vi: 'Nhờ vậy, các doanh nghiệp đạt được những cột mốc năng suất chưa từng có trong khi hoạt động với chi phí chung thấp hơn.',
            highlightKeywords: ['unprecedented productivity milestones', 'lower overhead costs']
          }
        ]
      },
      {
        paragraphTitle: 'Đoạn 3: Thân Bài 2 (Body 2 - Các rủi ro và nhược điểm tiềm ẩn)',
        role: 'Phân tích các nguy cơ bảo mật và sự phụ thuộc tư duy',
        sentences: [
          {
            en: 'On the other hand, the pervasive adoption of AI tools is not without formidable perils, particularly concerning data privacy breaches and intellectual complacency.',
            vi: 'Mặt khác, việc áp dụng tràn lan các công cụ AI không phải là không có những mối nguy ghê gớm, đặc biệt là liên quan đến các vụ vi phạm quyền riêng tư dữ liệu và sự tự mãn về trí tuệ.',
            highlightKeywords: ['formidable perils', 'data privacy breaches', 'intellectual complacency']
          },
          {
            en: 'When untrained employees inadvertently feed proprietary customer records or confidential trade secrets into public AI interfaces, organizations become susceptible to catastrophic security leaks.',
            vi: 'Khi nhân viên chưa qua đào tạo vô tình đưa các hồ sơ khách hàng độc quyền hoặc bí mật kinh doanh bảo mật vào các giao diện AI công cộng, các tổ chức sẽ trở nên dễ bị tổn thương trước những vụ rò rỉ an ninh thảm khốc.',
            highlightKeywords: ['inadvertently feed', 'proprietary customer records', 'catastrophic security leaks']
          },
          {
            en: 'Furthermore, excessive reliance on automated prose and pre-generated code risks eroding the critical thinking faculties and creative problem-solving tenacity of junior practitioners.',
            vi: 'Hơn nữa, sự phụ thuộc quá mức vào các đoạn văn tự động và mã nguồn được tạo sẵn có nguy cơ làm xói mòn năng lực tư duy phản biện và sự kiên trì giải quyết vấn đề sáng tạo của các chuyên viên mới vào nghề.',
            highlightKeywords: ['eroding critical thinking faculties', 'problem-solving tenacity']
          },
          {
            en: 'Without deliberate cultivation of manual expertise, a workforce risks becoming paralyzed whenever technological systems experience downtime.',
            vi: 'Nếu không có sự trau dồi chuyên môn thủ công có chủ đích, lực lượng lao động có nguy cơ bị tê liệt bất cứ khi nào hệ thống công nghệ gặp sự cố gián đoạn.',
            highlightKeywords: ['manual expertise', 'paralyzed']
          }
        ]
      },
      {
        paragraphTitle: 'Đoạn 4: Kết Bài (Conclusion - Cân bằng & Khuyến nghị quản trị)',
        role: 'Tổng hợp hai mặt và khẳng định giải pháp quản trị',
        sentences: [
          {
            en: 'In conclusion, the proliferation of artificial intelligence in corporate environments represents a classic double-edged sword, presenting immense efficiency dividends alongside genuine operational hazards.',
            vi: 'Tóm lại, sự gia tăng của trí tuệ nhân tạo trong môi trường doanh nghiệp đại diện cho một con dao hai lưỡi kinh điển, mang lại những khoản cổ tức hiệu quả to lớn bên cạnh các mối nguy hiểm vận hành thực sự.',
            highlightKeywords: ['classic double-edged sword', 'immense efficiency dividends', 'operational hazards']
          },
          {
            en: 'To harness its benefits while mitigating vulnerabilities, progressive organizations must establish rigorous governance protocols and continually upskill their workforce in critical oversight.',
            vi: 'Để khai thác các lợi ích đồng thời giảm thiểu các lỗ hổng, các tổ chức tiến bộ phải thiết lập các quy chuẩn quản trị nghiêm ngặt và liên tục nâng cao kỹ năng cho lực lượng lao động của mình trong việc giám sát phản biện.',
            highlightKeywords: ['harness its benefits', 'mitigating vulnerabilities', 'rigorous governance protocols']
          }
        ]
      }
    ]
  }
];
