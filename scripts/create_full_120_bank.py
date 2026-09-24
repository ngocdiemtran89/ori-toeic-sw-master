# -*- coding: utf-8 -*-
"""
create_full_120_bank.py - Complete 120 items generator.
"""

import re
import json

with open('src/data/translationData.ts', 'r', encoding='utf-8') as f:
    raw_content = f.read()

pattern = re.compile(r'(  \{\s+id:\s*\'([^\']+)\'[\s\S]+?\n  \},?)', re.MULTILINE)
matched = pattern.findall(raw_content)

existing_blocks = {}
for full_block, item_id in matched:
    cleaned = full_block.rstrip().rstrip(',')
    existing_blocks[item_id] = cleaned

print(f"Loaded {len(existing_blocks)} existing item blocks.")

new_w1 = [
    {
        "id": "trans-w1-13",
        "part": "writing_p1",
        "partName": "Part 1 Writing: Viết Câu Theo Tranh",
        "partCategory": "sentence",
        "title": "Kỹ sư kiểm tra sơ đồ thiết kế kiến trúc",
        "vietnamesePrompt": "Kỹ sư trưởng đang chăm chú nghiên cứu các bản vẽ kiến trúc trên bàn làm việc nhằm đảm bảo dự án tuân thủ tiêu chuẩn an toàn.",
        "targetGrammar": "Cụm chỉ mục đích với 'in order to' / 'so as to' (S + be + V-ing + in order to + V-inf)",
        "vocabularyHints": [
            {"word": "chief engineer", "meaning": "Kỹ sư trưởng", "ipa": "/tʃiːf ˌen.dʒɪˈnɪər/"},
            {"word": "architectural blueprints", "meaning": "Bản vẽ thiết kế kiến trúc", "ipa": "/ˌɑː.kɪˈtek.tʃər.əl ˈbluː.prɪnts/"},
            {"word": "safety standards", "meaning": "Tiêu chuẩn an toàn", "ipa": "/ˈseɪf.ti ˈstæn.d climbers/"}
        ],
        "sampleEnglishAnswer": "The chief engineer is carefully examining the architectural blueprints on the drafting table in order to ensure strict compliance with safety standards.",
        "alternativeAnswers": [
            "In the design office, an engineer is studying construction blueprints to verify structural specifications."
        ],
        "analysis": "Cụm 'architectural blueprints' và cấu trúc 'in order to ensure' là từ vựng và ngữ pháp ăn điểm tối đa trong Part 1.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-w1-14",
        "part": "writing_p1",
        "partName": "Part 1 Writing: Viết Câu Theo Tranh",
        "partCategory": "sentence",
        "title": "Nhân viên vận hành xe nâng trong kho logistics",
        "vietnamesePrompt": "Người vận hành xe nâng đang cẩn thận bốc dỡ các kiện hàng nặng khi một nhân viên khác đang ghi chú trên bảng kẹp hồ sơ.",
        "targetGrammar": "Mệnh đề trạng ngữ thời gian với 'as' hoặc 'while' (S + be + V-ing as S + be + V-ing)",
        "vocabularyHints": [
            {"word": "forklift operator", "meaning": "Người lái xe nâng hàng", "ipa": "/ˈfɔːk.lɪft ˈɒp.ər.eɪ.tər/"},
            {"word": "heavy cargo pallets", "meaning": "Các kiện pallet hàng nặng", "ipa": "/ˈkɑː.ɡəʊ ˈpæl.əts/"},
            {"word": "clipboard", "meaning": "Bảng kẹp hồ sơ / kiểm kê", "ipa": "/ˈklɪp.bɔːd/"}
        ],
        "sampleEnglishAnswer": "A forklift operator is carefully unloading heavy cargo pallets in the distribution center while another warehouse worker takes notes on a clipboard.",
        "alternativeAnswers": [
            "Inside the fulfillment warehouse, workers are managing cargo pallets and checking inventory lists."
        ],
        "analysis": "Cấu trúc kép với 2 hành động song song thường xuyên xuất hiện trong tranh kho bãi Part 1.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-w1-15",
        "part": "writing_p1",
        "partName": "Part 1 Writing: Viết Câu Theo Tranh",
        "partCategory": "sentence",
        "title": "Khách ngồi thư giãn tại sân hiên quán cà phê",
        "vietnamesePrompt": "Vài vị khách đang thưởng thức đồ uống lạnh dưới những tán dù che nắng lớn trên sân hiên ngoài trời của nhà hàng.",
        "targetGrammar": "Giới từ chỉ nơi chốn + phân từ rút gọn (S + be + V-ing under... on...)",
        "vocabularyHints": [
            {"word": "patrons", "meaning": "Khách quen / thực khách", "ipa": "/ˈpeɪ.trənz/"},
            {"word": "outdoor terrace", "meaning": "Sân hiên ngoài trời", "ipa": "/ˈaʊtˌdɔː ˈter.əs/"},
            {"word": "sunshade umbrellas", "meaning": "Những chiếc dù che nắng", "ipa": "/ˈsʌn.ʃeɪd ʌmˈbrel.əz/"}
        ],
        "sampleEnglishAnswer": "Several patrons are relaxing and enjoying iced beverages under large sunshade umbrellas on the restaurant's outdoor terrace.",
        "alternativeAnswers": [
            "Customers are seated on an outdoor patio enjoying their drinks on a sunny afternoon."
        ],
        "analysis": "Từ 'patrons' là từ vựng trang trọng cực hay để thay thế cho 'people' hoặc 'customers'.",
        "difficulty": "Cơ bản (500+)"
    },
    {
        "id": "trans-w1-16",
        "part": "writing_p1",
        "partName": "Part 1 Writing: Viết Câu Theo Tranh",
        "partCategory": "sentence",
        "title": "Kỹ thuật viên bảo trì hệ thống máy chủ mạng",
        "vietnamesePrompt": "Chuyên viên công nghệ thông tin đang kiểm tra các dây cáp mạng trong phòng máy chủ để ngăn chặn sự cố mất kết nối hệ thống.",
        "targetGrammar": "Mệnh đề chỉ kết quả/mục đích với 'so that' hoặc 'to prevent' (S + V + in order to prevent + N)",
        "vocabularyHints": [
            {"word": "IT technician", "meaning": "Kỹ thuật viên công nghệ thông tin", "ipa": "/aɪ tiː tekˈnɪʃ.ən/"},
            {"word": "server racks", "meaning": "Tủ giá đỡ máy chủ", "ipa": "/ˈsɜː.vər ræks/"},
            {"word": "network outage", "meaning": "Sự cố mất mạng / cúp mạng", "ipa": "/ˈnet.wɜːk ˈaʊ.tɪdʒ/"}
        ],
        "sampleEnglishAnswer": "An IT technician is meticulously inspecting network cables connected to the server racks so that unexpected system outages can be prevented.",
        "alternativeAnswers": [
            "In the data center, a technician is checking optical cables to ensure uninterrupted server performance."
        ],
        "analysis": "Cấu trúc bị động ở mệnh đề phụ 'so that unexpected system outages can be prevented' thể hiện trình độ ngữ pháp cao.",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-w1-17",
        "part": "writing_p1",
        "partName": "Part 1 Writing: Viết Câu Theo Tranh",
        "partCategory": "sentence",
        "title": "Người mua hàng lựa chọn nông sản tươi sống",
        "vietnamesePrompt": "Một phụ nữ đang xem xét kỹ lưỡng các quả táo hữu cơ trước khi bỏ chúng vào giỏ hàng của mình ở quầy nông sản.",
        "targetGrammar": "Mệnh đề thời gian với 'before' + V-ing (S + be + V-ing + before + V-ing + O)",
        "vocabularyHints": [
            {"word": "shoppers", "meaning": "Người mua sắm", "ipa": "/ˈʃɒp.ərz/"},
            {"word": "organic produce", "meaning": "Nông sản hữu cơ", "ipa": "/ɔːˈɡæn.ɪk ˈprɒd.juːs/"},
            {"word": "shopping cart", "meaning": "Xe đẩy / giỏ mua sắm", "ipa": "/ˈʃɒp.ɪŋ kɑːt/"}
        ],
        "sampleEnglishAnswer": "A shopper is carefully inspecting fresh organic produce before placing the selected items into her shopping cart.",
        "alternativeAnswers": [
            "At the grocery store, a customer is choosing fresh vegetables from the produce section."
        ],
        "analysis": "Lưu ý danh từ không đếm được 'produce' có trọng âm rơi vào âm tiết đầu: /ˈprɒd.juːs/ (nông sản).",
        "difficulty": "Cơ bản (500+)"
    },
    {
        "id": "trans-w1-18",
        "part": "writing_p1",
        "partName": "Part 1 Writing: Viết Câu Theo Tranh",
        "partCategory": "sentence",
        "title": "Công nhân xây dựng thi công mặt đường",
        "vietnamesePrompt": "Các công nhân xây dựng mặc áo phản quang đang rải nhựa đường trong khi các biển báo an toàn được dựng xung quanh khu vực làm việc.",
        "targetGrammar": "Mệnh đề chỉ thể trạng bị động đồng thời (while safety signs are placed around...)",
        "vocabularyHints": [
            {"word": "reflective vests", "meaning": "Áo phản quang bảo hộ", "ipa": "/rɪˈflek.tɪv vests/"},
            {"word": "pave the roadway", "meaning": "Rải nhựa / lát mặt đường", "ipa": "/peɪv ðə ˈrəʊd.weɪ/"},
            {"word": "warning barricades", "meaning": "Hàng rào cảnh báo", "ipa": "/ˈbær.ɪ.keɪdz/"}
        ],
        "sampleEnglishAnswer": "Construction laborers wearing high-visibility reflective vests are paving the roadway while warning barricades are positioned around the work perimeter.",
        "alternativeAnswers": [
            "Road workers are resurfacing a street section marked by protective construction barriers."
        ],
        "analysis": "Từ vựng trang bị bảo hộ 'high-visibility reflective vests' và động từ 'pave' ghi điểm từ vựng xuất sắc.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-w1-19",
        "part": "writing_p1",
        "partName": "Part 1 Writing: Viết Câu Theo Tranh",
        "partCategory": "sentence",
        "title": "Thủ thư phân loại sách lên các kệ cao",
        "vietnamesePrompt": "Người thủ thư đang sử dụng một chiếc thang di động để sắp xếp các cuốn sách mới về theo thứ tự bảng chữ cái trên các giá kệ cao.",
        "targetGrammar": "Cụm V-ing làm phương tiện (by using a portable ladder to organize...)",
        "vocabularyHints": [
            {"word": "librarian", "meaning": "Thủ thư thư viện", "ipa": "/laɪˈbreə.ri.ən/"},
            {"word": "step ladder", "meaning": "Thang gấp di động", "ipa": "/step ˈlæd.ər/"},
            {"word": "alphabetical order", "meaning": "Thứ tự bảng chữ cái", "ipa": "/ˌæl.fəˈbet.ɪ.kəl ˈɔː.dər/"}
        ],
        "sampleEnglishAnswer": "The librarian is standing on a small step ladder to arrange cataloged books in alphabetical order onto the tall wooden shelves.",
        "alternativeAnswers": [
            "Using a wooden ladder, a library employee is restocking books on upper shelves."
        ],
        "analysis": "Cụm 'in alphabetical order' rất chuẩn xác và đúng ngữ cảnh trường học/thư viện.",
        "difficulty": "Cơ bản (500+)"
    },
    {
        "id": "trans-w1-20",
        "part": "writing_p1",
        "partName": "Part 1 Writing: Viết Câu Theo Tranh",
        "partCategory": "sentence",
        "title": "Nhà nghiên cứu phân tích mẫu phẩm sinh học",
        "vietnamesePrompt": "Nữ nghiên cứu sinh đang điều chỉnh ống kính hiển vi quang học trong khi ghi chép dữ liệu thí nghiệm vào máy tính bảng.",
        "targetGrammar": "Mệnh đề phức với liên từ 'as' chỉ hai hành động xảy ra đồng thời (S + be + V-ing as she records...)",
        "vocabularyHints": [
            {"word": "research scientist", "meaning": "Nhà khoa học nghiên cứu", "ipa": "/ˈsaɪən.tɪst/"},
            {"word": "optical microscope", "meaning": "Kính hiển vi quang học", "ipa": "/ˈɒp.tɪ.kəl ˈmaɪ.krə.skəʊp/"},
            {"word": "experimental findings", "meaning": "Các phát hiện / dữ liệu thí nghiệm", "ipa": "/ɪkˌsper.ɪˈmen.təl ˈfaɪn.dɪŋz/"}
        ],
        "sampleEnglishAnswer": "A research scientist is adjusting an optical microscope as she records experimental findings directly onto her digital tablet.",
        "alternativeAnswers": [
            "In the laboratory, a technician examines biological specimens and logs observational data."
        ],
        "analysis": "Cặp từ 'optical microscope' và 'records experimental findings' nâng cao điểm Lexical Resource.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-w1-21",
        "part": "writing_p1",
        "partName": "Part 1 Writing: Viết Câu Theo Tranh",
        "partCategory": "sentence",
        "title": "Nhân viên chuyển phát quét mã bưu kiện",
        "vietnamesePrompt": "Nhân viên giao hàng đang quét mã vạch trên bưu kiện bằng máy quét cầm tay trước khi chất nó lên xe tải giao hàng.",
        "targetGrammar": "Giới từ 'prior to' + V-ing (prior to loading it onto the delivery van)",
        "vocabularyHints": [
            {"word": "courier", "meaning": "Nhân viên chuyển phát nhanh", "ipa": "/ˈkʊr.i.ər/"},
            {"word": "handheld barcode scanner", "meaning": "Máy quét mã vạch cầm tay", "ipa": "/ˈbɑː.kəʊd ˈskæn.ər/"},
            {"word": "delivery van", "meaning": "Xe tải giao hàng nhỏ", "ipa": "/dɪˈlɪv.ər.i væn/"}
        ],
        "sampleEnglishAnswer": "The courier is scanning a package's barcode with a handheld scanner prior to loading it onto the delivery van.",
        "alternativeAnswers": [
            "A delivery driver scans shipment parcels before loading his truck for distribution."
        ],
        "analysis": "'Prior to loading' là cách viết học thuật thay thế trang trọng hơn cho 'before loading'.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-w1-22",
        "part": "writing_p1",
        "partName": "Part 1 Writing: Viết Câu Theo Tranh",
        "partCategory": "sentence",
        "title": "Cân hành lý ký gửi tại sân bay",
        "vietnamesePrompt": "Nhân viên quầy làm thủ tục hàng không đang cân hành lý của khách hàng trong khi kiểm tra thông tin vé trên máy tính.",
        "targetGrammar": "Liên từ 'while' kết hợp 2 động từ tiếp diễn song song (S + be + V-ing while V-ing)",
        "vocabularyHints": [
            {"word": "check-in agent", "meaning": "Nhân viên quầy làm thủ tục", "ipa": "/ˈtʃek.ɪn ˈeɪ.dʒənt/"},
            {"word": "weighing the luggage", "meaning": "Cân hành lý", "ipa": "/weɪ.ɪŋ ðə ˈlʌɡ.ɪdʒ/"},
            {"word": "boarding credentials", "meaning": "Thông tin thẻ lên tàu bay / vé", "ipa": "/ˈbɔː.dɪŋ krɪˈden.ʃəlz/"}
        ],
        "sampleEnglishAnswer": "An airline check-in agent is weighing a passenger's luggage on the scale while verifying passenger credentials on the desktop terminal.",
        "alternativeAnswers": [
            "At the airport counter, an agent checks a traveler's baggage and confirms travel details."
        ],
        "analysis": "'Luggage' là danh từ không đếm được (không thêm 's'), rất hay bị thí sinh mắc bẫy.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-w1-23",
        "part": "writing_p1",
        "partName": "Part 1 Writing: Viết Câu Theo Tranh",
        "partCategory": "sentence",
        "title": "Thợ mộc đo đạc tấm ván gỗ trong xưởng mộc",
        "vietnamesePrompt": "Người thợ mộc lành nghề đang cẩn thận dùng thước dây để đo một thanh gỗ trước khi dùng cưa cắt nó theo kích thước chuẩn.",
        "targetGrammar": "Cụm chỉ mục đích + mệnh đề thời gian (uses a measuring tape to measure... before cutting...)",
        "vocabularyHints": [
            {"word": "skilled craftsman", "meaning": "Thợ thủ công / thợ mộc lành nghề", "ipa": "/skɪld ˈkrɑːfts.mən/"},
            {"word": "measuring tape", "meaning": "Thước cuộn / thước dây", "ipa": "/ˈmeʒ.ər.ɪŋ teɪp/"},
            {"word": "timber plank", "meaning": "Tấm ván gỗ / thanh gỗ", "ipa": "/ˈtɪm.bər plæŋk/"}
        ],
        "sampleEnglishAnswer": "A skilled craftsman is using a retractable measuring tape to mark a timber plank before cutting it with an electric saw.",
        "alternativeAnswers": [
            "In the carpentry workshop, a woodworker measures lumber precisely before cutting."
        ],
        "analysis": "'Retractable measuring tape' và 'timber plank' tạo độ chân thực cao cho mô tả tranh nghề nghiệp.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-w1-24",
        "part": "writing_p1",
        "partName": "Part 1 Writing: Viết Câu Theo Tranh",
        "partCategory": "sentence",
        "title": "Thu hoạch nông sản trong nhà kính công nghệ cao",
        "vietnamesePrompt": "Các công nhân nông nghiệp đang hái dâu tây chín đỏ trong nhà kính thủy canh nhằm kịp đóng gói cho đợt phân phối buổi chiều.",
        "targetGrammar": "Cụm chỉ mục đích trang trọng 'in order that' hoặc 'so as to' (so as to prepare them for...)",
        "vocabularyHints": [
            {"word": "agricultural workers", "meaning": "Công nhân nông nghiệp", "ipa": "/ˌæɡ.rɪˈkʌl.tʃər.əl/"},
            {"word": "hydroponic greenhouse", "meaning": "Nhà kính thủy canh", "ipa": "/ˌhaɪ.drəˈpɒn.ɪk ˈɡriːn.haʊs/"},
            {"word": "ripe produce", "meaning": "Nông sản đã chín", "ipa": "/raɪp ˈprɒd.juːs/"}
        ],
        "sampleEnglishAnswer": "Agricultural workers are picking ripe strawberries inside a hydroponic greenhouse so as to package them for afternoon retail distribution.",
        "alternativeAnswers": [
            "Greenhouse laborers are harvesting berries carefully to meet daily supermarket delivery quotas."
        ],
        "analysis": "Cụm từ 'so as to package' thể hiện cấu trúc ngữ pháp chỉ mục đích tinh tế, nâng band điểm Writing.",
        "difficulty": "Nâng cao (800+)"
    }
]

# Part 2 Writing: 12 new items (trans-w2-13 to trans-w2-24)
new_w2 = [
    {
        "id": "trans-w2-13",
        "part": "writing_p2",
        "partName": "Part 2 Writing: Email Công Sở",
        "partCategory": "sentence",
        "title": "Thông báo bảo trì máy chủ định kỳ cuối tuần",
        "vietnamesePrompt": "Vui lòng lưu ý rằng toàn bộ cổng thông tin nội bộ sẽ tạm thời ngừng hoạt động từ 10 giờ tối thứ Bảy để phục vụ công tác nâng cấp cơ sở dữ liệu định kỳ.",
        "targetGrammar": "Cấu trúc thông báo trang trọng (Please be advised that S + will be temporarily inaccessible... to facilitate...)",
        "vocabularyHints": [
            {"word": "please be advised that", "meaning": "Xin lưu ý rằng (trang trọng)", "ipa": "/pliːz biː ədˈvaɪzd ðæt/"},
            {"word": "temporarily inaccessible", "meaning": "Tạm thời không truy cập được", "ipa": "/ˌtem.pər.ər.əl.i ˌɪn.ækˈses.ə.bəl/"},
            {"word": "facilitate routine upgrades", "meaning": "Thuận tiện cho việc nâng cấp định kỳ", "ipa": "/fəˈsɪl.ɪ.teɪt ruːˈtiːn ʌpˈɡreɪdz/"}
        ],
        "sampleEnglishAnswer": "Please be advised that the internal employee portal will be temporarily inaccessible starting this Saturday at 10:00 PM to facilitate routine database upgrades.",
        "alternativeAnswers": [
            "We would like to inform all staff that system maintenance is scheduled for Saturday evening, causing brief service interruptions."
        ],
        "analysis": "Cụm mở đầu 'Please be advised that...' là mẫu câu thông báo chuẩn mực nhất trong môi trường công sở quốc tế.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-w2-14",
        "part": "writing_p2",
        "partName": "Part 2 Writing: Email Công Sở",
        "partCategory": "sentence",
        "title": "Thư xin lỗi khách hàng VIP vì sai sót trong hóa đơn",
        "vietnamesePrompt": "Chúng tôi thành thật xin lỗi vì sự bất tiện do hóa đơn thanh toán không chính xác gây ra, và chúng tôi đã đính kèm bảng sao kê đã được điều chỉnh đầy đủ vào email này.",
        "targetGrammar": "Cấu trúc xin lỗi kèm đính kèm (We sincerely apologize for [N/V-ing] and have enclosed [adjusted statement])",
        "vocabularyHints": [
            {"word": "sincerely apologize for", "meaning": "Thành thật xin lỗi vì", "ipa": "/sɪnˈsɪə.li əˈpɒl.ə.dʒaɪz fɔːr/"},
            {"word": "billing discrepancy", "meaning": "Sự sai lệch / chênh lệch trong hóa đơn", "ipa": "/ˈbɪl.ɪŋ dɪˈskrep.ən.si/"},
            {"word": "rectified invoice", "meaning": "Hóa đơn đã được chỉnh sửa chuẩn xác", "ipa": "/ˈrek.tɪ.faɪd ˈɪn.vɔɪs/"}
        ],
        "sampleEnglishAnswer": "We sincerely apologize for the inconvenience caused by the recent billing discrepancy and have attached the rectified invoice for your records.",
        "alternativeAnswers": [
            "Please accept our genuine apologies for the invoicing error; a corrected statement has been attached to this correspondence."
        ],
        "analysis": "Từ 'billing discrepancy' hay hơn nhiều so với 'invoice mistake', thể hiện văn phong thương mại cao cấp.",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-w2-15",
        "part": "writing_p2",
        "partName": "Part 2 Writing: Email Công Sở",
        "partCategory": "sentence",
        "title": "Yêu cầu báo giá thiết bị văn phòng số lượng lớn",
        "vietnamesePrompt": "Bạn có thể vui lòng cung cấp bảng báo giá chi tiết cùng với mức chiết khấu áp dụng cho đơn hàng 50 máy tính xách tay văn phòng trước thứ Sáu này được không?",
        "targetGrammar": "Câu hỏi lịch sự yêu cầu báo giá (Could you kindly provide S + along with S + by + time)",
        "vocabularyHints": [
            {"word": "could you kindly provide", "meaning": "Bạn có thể vui lòng cung cấp", "ipa": "/kʊd juː ˈkaɪnd.li prəˈvaɪd/"},
            {"word": "itemized price quotation", "meaning": "Bảng báo giá chi tiết từng khoản mục", "ipa": "/ˈaɪ.tə.maɪzd praɪs kwəʊˈteɪ.ʃən/"},
            {"word": "volume discount", "meaning": "Chiết khấu mua số lượng lớn", "ipa": "/ˈvɒl.juːm ˈdɪs.kaʊnt/"}
        ],
        "sampleEnglishAnswer": "Could you kindly provide an itemized price quotation along with any applicable volume discounts for an order of fifty workstations by this Friday?",
        "alternativeAnswers": [
            "We would appreciate receiving a detailed cost estimate and bulk pricing options for 50 laptops by Friday afternoon."
        ],
        "analysis": "Cụm 'itemized price quotation' và 'applicable volume discounts' là cặp collocation đắt giá của Part 2 Writing.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-w2-16",
        "part": "writing_p2",
        "partName": "Part 2 Writing: Email Công Sở",
        "partCategory": "sentence",
        "title": "Thư mời diễn giả quốc tế tham gia hội nghị thường niên",
        "vietnamesePrompt": "Thay mặt cho ban tổ chức, tôi trân trọng kính mời Giáo sư Miller đảm nhận vai trò diễn giả chính tại Diễn đàn Công nghệ Toàn cầu tổ chức vào tháng 11 tới.",
        "targetGrammar": "Cụm giới từ đại diện (On behalf of [organization], I would like to cordially invite [Name] to deliver...)",
        "vocabularyHints": [
            {"word": "on behalf of the organizing committee", "meaning": "Thay mặt ban tổ chức", "ipa": "/ɒn bɪˈhɑːf əv ðə ˈɔː.ɡən.aɪ.zɪŋ kəˈmɪt.i/"},
            {"word": "cordially invite", "meaning": "Trân trọng kính mời", "ipa": "/ˈkɔː.di.ə.li ɪnˈvaɪt/"},
            {"word": "deliver the keynote address", "meaning": "Đọc bài phát biểu khai mạc then chốt", "ipa": "/dɪˈlɪv.ər ðə ˈkiː.nəʊt əˈdres/"}
        ],
        "sampleEnglishAnswer": "On behalf of the organizing committee, I would like to cordially invite you to deliver the keynote address at our upcoming Global Technology Forum this November.",
        "alternativeAnswers": [
            "We are honored to invite Professor Miller to serve as our guest keynote speaker at the annual tech convention."
        ],
        "analysis": "Collocation chuẩn 'deliver the keynote address' (không dùng 'speak the main speech').",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-w2-17",
        "part": "writing_p2",
        "partName": "Part 2 Writing: Email Công Sở",
        "partCategory": "sentence",
        "title": "Đề xuất triển khai mô hình làm việc linh hoạt",
        "vietnamesePrompt": "Tôi đề xuất ban lãnh đạo cân nhắc cho phép nhân viên làm việc tại nhà hai ngày mỗi tuần để nâng cao sự cân bằng giữa công việc và cuộc sống mà vẫn duy trì năng suất.",
        "targetGrammar": "Động từ đề xuất đi kèm mệnh đề that giả định (I propose that management consider allowing employees to V-inf... while maintaining...)",
        "vocabularyHints": [
            {"word": "propose that management consider", "meaning": "Đề xuất ban quản lý cân nhắc", "ipa": "/prəˈpəʊz ðæt ˈmæn.ɪdʒ.mənt/"},
            {"word": "hybrid work arrangements", "meaning": "Hình thức làm việc linh hoạt kết hợp", "ipa": "/ˈhaɪ.brɪd wɜːk əˈreɪndʒ.mənts/"},
            {"word": "work-life harmony", "meaning": "Sự cân bằng hài hòa giữa công việc và đời sống", "ipa": "/wɜːk laɪf ˈhɑː.mə.ni/"}
        ],
        "sampleEnglishAnswer": "I propose that management consider implementing hybrid work arrangements allowing two remote days per week to foster work-life harmony while sustaining high productivity.",
        "alternativeAnswers": [
            "We recommend adopting a flexible telecommuting schedule so staff members can balance personal wellbeing with workplace objectives."
        ],
        "analysis": "Cấu trúc 'foster work-life harmony while sustaining high productivity' là lập luận thuyết phục điển hình trong văn phòng.",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-w2-18",
        "part": "writing_p2",
        "partName": "Part 2 Writing: Email Công Sở",
        "partCategory": "sentence",
        "title": "Nhắc nhở hoàn thành khảo sát ý kiến nhân viên",
        "vietnamesePrompt": "Đây là lời nhắc nhở thân thiện rằng hạn chót gửi phản hồi cho cuộc khảo sát mức độ gắn kết của nhân viên là 5 giờ chiều thứ Sáu này.",
        "targetGrammar": "Mẫu câu nhắc nhở nhẹ nhàng (This is a friendly reminder that the deadline for submitting... is [time])",
        "vocabularyHints": [
            {"word": "friendly reminder", "meaning": "Lời nhắc nhở thân thiện", "ipa": "/ˈfrend.li rɪˈmaɪn.dər/"},
            {"word": "employee engagement survey", "meaning": "Khảo sát mức độ gắn kết của nhân viên", "ipa": "/ɪnˈɡeɪdʒ.mənt ˈsɜː.veɪ/"},
            {"word": "strict deadline", "meaning": "Hạn chót nghiêm ngặt", "ipa": "/strɪkt ˈded.laɪn/"}
        ],
        "sampleEnglishAnswer": "This is a friendly reminder that the deadline for completing the annual employee engagement survey is rapidly approaching at 5:00 PM this Friday.",
        "alternativeAnswers": [
            "Please remember to submit your confidential responses to the staff feedback questionnaire before the Friday deadline."
        ],
        "analysis": "'Friendly reminder' là cụm từ văn hóa công sở giúp lời hối thúc trở nên lịch thiệp và dễ chịu.",
        "difficulty": "Cơ bản (500+)"
    },
    {
        "id": "trans-w2-19",
        "part": "writing_p2",
        "partName": "Part 2 Writing: Email Công Sở",
        "partCategory": "sentence",
        "title": "Giải thích việc chậm giao hàng do thời tiết khắc nghiệt",
        "vietnamesePrompt": "Do điều kiện thời tiết mùa đông vô cùng khắc nghiệt làm tê liệt các tuyến đường cao tốc chính, lô hàng linh kiện của quý công ty dự kiến sẽ đến muộn 48 giờ.",
        "targetGrammar": "Cụm chỉ nguyên nhân với 'Due to' / 'Owing to' + danh từ (Owing to severe weather conditions..., S + is scheduled to arrive...)",
        "vocabularyHints": [
            {"word": "owing to inclement weather", "meaning": "Do thời tiết khắc nghiệt / xấu", "ipa": "/ˈəʊ.ɪŋ tuː ɪnˈklem.ənt ˈweð.ər/"},
            {"word": "disrupt regional transportation", "meaning": "Gây gián đoạn giao thông trong vùng", "ipa": "/dɪsˈrʌpt/"},
            {"word": "component shipment", "meaning": "Lô hàng linh kiện", "ipa": "/kəmˈpəʊ.nənt ˈʃɪp.mənt/"}
        ],
        "sampleEnglishAnswer": "Owing to inclement weather conditions that have severely disrupted regional transit routes, your component shipment is unfortunately delayed by approximately forty-eight hours.",
        "alternativeAnswers": [
            "Due to severe winter storms impacting freight carriers, delivery of your parts order has experienced an unavoidable delay."
        ],
        "analysis": "'Inclement weather' là từ vựng band C1 đặc trưng trong bài thi TOEIC Writing khi giải trình sự cố vận chuyển.",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-w2-20",
        "part": "writing_p2",
        "partName": "Part 2 Writing: Email Công Sở",
        "partCategory": "sentence",
        "title": "Báo cáo sự cố điều hòa nhiệt độ tại khu làm việc",
        "vietnamesePrompt": "Chúng tôi khẩn thiết yêu cầu một kỹ thuật viên tòa nhà đến kiểm tra hệ thống điều hòa tại tầng 4 càng sớm càng tốt vì nhiệt độ phòng đang quá nóng.",
        "targetGrammar": "Cấu trúc yêu cầu khẩn cấp (We urgently request that a building technician inspect... as soon as possible)",
        "vocabularyHints": [
            {"word": "urgently request", "meaning": "Khẩn thiết yêu cầu", "ipa": "/ˈɜː.dʒənt.li rɪˈkwest/"},
            {"word": "building maintenance technician", "meaning": "Kỹ thuật viên bảo trì tòa nhà", "ipa": "/ˈmeɪn.tən.əns tekˈnɪʃ.ən/"},
            {"word": "HVAC system malfunction", "meaning": "Trục trặc hệ thống điều hòa thông gió", "ipa": "/mælˈfʌŋk.ʃən/"}
        ],
        "sampleEnglishAnswer": "We urgently request that a building maintenance technician inspect the fourth-floor HVAC system as soon as possible to resolve the excessive office heat.",
        "alternativeAnswers": [
            "Could facilities management please dispatch a repair specialist to examine the malfunctioning air conditioning unit on Level 4?"
        ],
        "analysis": "'HVAC system' (Heating, Ventilation, and Air Conditioning) là thuật ngữ cơ sở vật chất chuẩn trong môi trường văn phòng.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-w2-21",
        "part": "writing_p2",
        "partName": "Part 2 Writing: Email Công Sở",
        "partCategory": "sentence",
        "title": "Mời tham dự hội thảo tập huấn an ninh thông tin",
        "vietnamesePrompt": "Tất cả các thành viên trong nhóm dự án được yêu cầu đăng ký tham gia buổi hội thảo đào tạo an ninh mạng bắt buộc được tổ chức vào sáng thứ Tư tuần sau.",
        "targetGrammar": "Thể bị động mệnh lệnh nhẹ (All team members are required to enroll in... scheduled for...)",
        "vocabularyHints": [
            {"word": "are required to enroll in", "meaning": "Được yêu cầu đăng ký tham gia", "ipa": "/rɪˈkwaɪəd tuː ɪnˈrəʊl/"},
            {"word": "mandatory cybersecurity seminar", "meaning": "Hội thảo an ninh mạng bắt buộc", "ipa": "/ˈmæn.də.tər.i ˈsaɪ.bə.sɪˌkjʊə.rɪ.ti/"},
            {"word": "scheduled for next Wednesday", "meaning": "Được lên lịch vào thứ Tư tới", "ipa": "/ˈʃedʒ.uːld fɔːr/"}
        ],
        "sampleEnglishAnswer": "All project personnel are required to register for the mandatory cybersecurity seminar scheduled for next Wednesday morning in the main auditorium.",
        "alternativeAnswers": [
            "Staff members must sign up for an essential data privacy training session taking place mid-week."
        ],
        "analysis": "'Mandatory seminar' và cấu trúc bị động 'are required to register' rất thường gặp trong email điều hành nội bộ.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-w2-22",
        "part": "writing_p2",
        "partName": "Part 2 Writing: Email Công Sở",
        "partCategory": "sentence",
        "title": "Xác nhận lịch phỏng vấn tuyển dụng vòng hai",
        "vietnamesePrompt": "Chúng tôi vui mừng thông báo rằng bạn đã vượt qua vòng sơ loại và muốn mời bạn tham gia buổi phỏng vấn trực tiếp vòng hai vào thứ Ba tới.",
        "targetGrammar": "Cấu trúc thông báo tin vui kèm lời mời (We are pleased to inform you that S + V and would like to invite you...)",
        "vocabularyHints": [
            {"word": "we are pleased to inform you", "meaning": "Chúng tôi rất vui mừng thông báo rằng", "ipa": "/pliːzd tuː ɪnˈfɔːm juː/"},
            {"word": "preliminary screening", "meaning": "Vòng sàng lọc sơ loại hồ sơ", "ipa": "/prɪˈlɪm.ɪ.nər.i ˈskriː.nɪŋ/"},
            {"word": "in-person interview", "meaning": "Buổi phỏng vấn trực tiếp", "ipa": "/ɪn ˈpɜː.sən ˈɪn.tə.vjuː/"}
        ],
        "sampleEnglishAnswer": "We are pleased to inform you that your initial application was successful, and we cordially invite you to an in-person second-round interview next Tuesday.",
        "alternativeAnswers": [
            "Congratulations on advancing to the next recruitment stage; we look forward to meeting with you for a comprehensive panel interview."
        ],
        "analysis": "'We are pleased to inform you...' là mẫu câu thư tín trang trọng chuẩn quốc tế trong thư tuyển dụng.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-w2-23",
        "part": "writing_p2",
        "partName": "Part 2 Writing: Email Công Sở",
        "partCategory": "sentence",
        "title": "Đề nghị đàm phán gia hạn hợp đồng thuê văn phòng",
        "vietnamesePrompt": "Vì hợp đồng thuê văn phòng hiện tại sẽ hết hạn sau ba tháng nữa, chúng tôi muốn thảo luận về khả năng gia hạn hợp đồng thêm hai năm nữa theo các điều khoản tương tự.",
        "targetGrammar": "Liên từ chỉ nguyên nhân 'Inasmuch as' hoặc 'Since' (Since our lease expires in... we would welcome the opportunity to discuss...)",
        "vocabularyHints": [
            {"word": "commercial lease agreement", "meaning": "Hợp đồng thuê mặt bằng thương mại", "ipa": "/kəˈmɜː.ʃəl liːs əˈɡriː.mənt/"},
            {"word": "expires in three months", "meaning": "Hết hạn sau 3 tháng", "ipa": "/ɪkˈspaɪəz/"},
            {"word": "two-year lease extension", "meaning": "Gia hạn hợp đồng thuê thêm 2 năm", "ipa": "/liːs ɪkˈsten.ʃən/"}
        ],
        "sampleEnglishAnswer": "Since our commercial lease agreement is set to expire in three months, we would appreciate the opportunity to discuss terms for a two-year extension under favorable rates.",
        "alternativeAnswers": [
            "As our tenancy concludes soon, we would like to negotiate renewal options to maintain our headquarters at this address."
        ],
        "analysis": "Từ vựng bất động sản thương mại: 'lease agreement', 'set to expire', 'terms for a two-year extension'.",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-w2-24",
        "part": "writing_p2",
        "partName": "Part 2 Writing: Email Công Sở",
        "partCategory": "sentence",
        "title": "Đề xuất tài trợ thương hiệu cho giải chạy việt dã cộng đồng",
        "vietnamesePrompt": "Tập đoàn chúng tôi rất quan tâm đến việc trở thành nhà tài trợ chính cho giải chạy việt dã vì sức khỏe cộng đồng và muốn tìm hiểu thêm về các quyền lợi nhận diện thương hiệu.",
        "targetGrammar": "Cấu trúc bày tỏ sự quan tâm đối tác (Our corporation is keenly interested in serving as a premier sponsor and seeks clarification regarding...)",
        "vocabularyHints": [
            {"word": "keenly interested in", "meaning": "Vô cùng quan tâm tới", "ipa": "/ˈkiːn.li ˈɪn.trəs.tɪd/"},
            {"word": "premier corporate sponsor", "meaning": "Nhà tài trợ doanh nghiệp hàng đầu", "ipa": "/ˈprem.i.ər ˈkɔː.pər.ət ˈspɒn.sər/"},
            {"word": "brand exposure privileges", "meaning": "Quyền lợi nhận diện thương hiệu", "ipa": "/brænd ɪkˈspəʊ.ʒər ˈprɪv.əl.ɪdʒ.ɪz/"}
        ],
        "sampleEnglishAnswer": "Our company is keenly interested in serving as a premier sponsor for the upcoming community marathon and would appreciate receiving detailed information regarding brand exposure packages.",
        "alternativeAnswers": [
            "We would welcome the opportunity to support your charity athletic run as a lead partner and review promotional opportunities."
        ],
        "analysis": "Cụm 'brand exposure packages' và 'premier sponsor' là thuật ngữ Marketing & PR chuẩn mực.",
        "difficulty": "Nâng cao (800+)"
    }
]

# Speaking Part 2: 12 new items (trans-s2-13 to trans-s2-24)
new_s2 = [
    {
        "id": "trans-s2-13",
        "part": "speaking_p2",
        "partName": "Speaking Part 2: Miêu Tả Tranh",
        "partCategory": "sentence",
        "title": "Sảnh ga tàu điện ngầm giờ cao điểm (Bustling Subway)",
        "vietnamesePrompt": "Bức ảnh chụp một ga tàu điện ngầm đông đúc vào giờ cao điểm, nơi hàng chục hành khách đang vội vã di chuyển về phía các cổng soát vé tự động.",
        "targetGrammar": "Công thức Overview + Mệnh đề quan hệ chỉ nơi chốn (This picture captures a bustling subway station during rush hour, where dozens of commuters are rushing towards...)",
        "vocabularyHints": [
            {"word": "bustling subway station", "meaning": "Ga tàu điện ngầm nhộn nhịp đông đúc", "ipa": "/ˈbʌs.lɪŋ ˈsʌb.weɪ ˈsteɪ.ʃən/"},
            {"word": "rush hour commuters", "meaning": "Người đi làm giờ cao điểm", "ipa": "/rʌʃ aʊər kəˈmjuː.tərz/"},
            {"word": "automated turnstiles", "meaning": "Cổng soát vé tự động", "ipa": "/ˈɔː.tə.meɪ.tɪd ˈtɜːn.staɪlz/"}
        ],
        "sampleEnglishAnswer": "This picture captures a bustling subway station during peak rush hour, where dozens of commuters are briskly making their way toward the automated ticket turnstiles.",
        "alternativeAnswers": [
            "In this lively transport hub, a large crowd of passengers can be seen boarding trains and checking electronic transit boards."
        ],
        "analysis": "Sử dụng trạng từ 'briskly' mô tả tốc độ di chuyển và danh từ 'turnstiles' nâng cao điểm mô tả tranh Speaking.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-s2-14",
        "part": "speaking_p2",
        "partName": "Speaking Part 2: Miêu Tả Tranh",
        "partCategory": "sentence",
        "title": "Phòng trưng bày nghệ thuật đương đại (Art Gallery)",
        "vietnamesePrompt": "Ở trung tâm bức tranh, một nhóm khách tham quan đang đứng chiêm ngưỡng một bức tranh sơn dầu lớn được chiếu sáng bởi ánh đèn rọi tinh tế.",
        "targetGrammar": "Cụm định vị vị trí (In the center of the frame, a group of visitors is standing and admiring...)",
        "vocabularyHints": [
            {"word": "in the center of the frame", "meaning": "Ở trung tâm khung hình", "ipa": "/ɪn ðə ˈsen.tər əv ðə freɪm/"},
            {"word": "contemplating the artwork", "meaning": "Chiêm ngưỡng tác phẩm nghệ thuật", "ipa": "/ˈkɒn.təm.pleɪ.tɪŋ ðə ˈɑːt.wɜːk/"},
            {"word": "subtle gallery spotlights", "meaning": "Ánh đèn rọi phòng trưng bày tinh tế", "ipa": "/ˈsʌt.əl ˈspɒt.laɪts/"}
        ],
        "sampleEnglishAnswer": "In the center of the frame, several art gallery visitors are quietly contemplating a large contemporary oil painting illuminated by subtle ceiling spotlights.",
        "alternativeAnswers": [
            "Museum patrons are observed admiring framed paintings in an exhibition room with polished hardwood flooring."
        ],
        "analysis": "Động từ 'contemplating' (trầm ngâm chiêm ngưỡng) giàu sức gợi hình hơn nhiều so với 'looking at'.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-s2-15",
        "part": "speaking_p2",
        "partName": "Speaking Part 2: Miêu Tả Tranh",
        "partCategory": "sentence",
        "title": "Xưởng sửa chữa ô tô chuyên nghiệp (Auto Workshop)",
        "vietnamesePrompt": "Phía bên trái bức ảnh, một người thợ máy mặc bộ đồ bảo hộ màu xanh đang dùng cờ lê kiểm tra phần gầm của một chiếc xe hơi được nâng lên bằng kích thủy lực.",
        "targetGrammar": "Mệnh đề rút gọn quá khứ phân từ mô tả vật (a sedan elevated on a hydraulic lift)",
        "vocabularyHints": [
            {"word": "certified mechanic", "meaning": "Thợ máy có chứng chỉ nghề", "ipa": "/mɪˈkæn.ɪk/"},
            {"word": "hydraulic vehicle lift", "meaning": "Cầu nâng xe thủy lực", "ipa": "/haɪˈdrɔː.lɪk ˈvɪə.kəl lɪft/"},
            {"word": "inspecting the undercarriage", "meaning": "Kiểm tra phần gầm xe", "ipa": "/ɪnˈspek.tɪŋ ðə ˈʌn.dəˌkær.ɪdʒ/"}
        ],
        "sampleEnglishAnswer": "On the left side of the photograph, a mechanic wearing navy blue overalls is inspecting the undercarriage of a car raised high on a hydraulic lift.",
        "alternativeAnswers": [
            "Inside the auto repair garage, a technician uses specialized diagnostic tools to service an elevated vehicle."
        ],
        "analysis": "Cụm danh từ 'hydraulic lift' và 'undercarriage' thể hiện vốn từ vựng kỹ thuật phong phú của band điểm cao.",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-s2-16",
        "part": "speaking_p2",
        "partName": "Speaking Part 2: Miêu Tả Tranh",
        "partCategory": "sentence",
        "title": "Chợ nông sản ngoài trời ngày cuối tuần (Farmers Market)",
        "vietnamesePrompt": "Bầu không khí ngoài trời trông rất náo nhiệt và vui tươi khi nhiều người mua hàng đang trò chuyện với các tiểu thương bán trái cây tươi dưới những mái bạt rực rỡ.",
        "targetGrammar": "Công thức Atmosphere (The overall atmosphere appears lively and cheerful as shoppers engage in conversation with...)",
        "vocabularyHints": [
            {"word": "lively and cheerful atmosphere", "meaning": "Bầu không khí náo nhiệt và vui tươi", "ipa": "/ˈlaɪv.li ənd ˈtʃɪə.fəl/"},
            {"word": "colorful market canopies", "meaning": "Những mái bạt chợ đầy màu sắc", "ipa": "/ˈkæn.ə.piz/"},
            {"word": "artisan food stalls", "meaning": "Các quầy đồ ăn thủ công gia truyền", "ipa": "/ˈɑː.tɪ.zæn/"}
        ],
        "sampleEnglishAnswer": "The overall atmosphere is lively and inviting, with numerous customers conversing with local vendors beneath colorful market canopies lined with seasonal fruit crates.",
        "alternativeAnswers": [
            "This open-air farmers market looks vibrant and crowded as residents shop for fresh regional agricultural produce."
        ],
        "analysis": "Câu chốt phần Atmosphere với các tính từ 'lively and inviting' là bí kíp chốt hạ điểm trọn vẹn của Speaking Part 2.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-s2-17",
        "part": "speaking_p2",
        "partName": "Speaking Part 2: Miêu Tả Tranh",
        "partCategory": "sentence",
        "title": "Phòng tập thể hình công sở hiện đại (Corporate Gym)",
        "vietnamesePrompt": "Trong một phòng tập thể dục sáng sủa, vài nhân viên văn phòng đang chạy bộ trên máy chạy bộ điện trong khi những người khác đang nâng tạ tự do.",
        "targetGrammar": "Cấu trúc tương phản đồng thời (while others are lifting free weights)",
        "vocabularyHints": [
            {"word": "fitness facility", "meaning": "Phòng tập thể thao", "ipa": "/ˈfɪt.nəs fəˈsɪl.ɪ.ti/"},
            {"word": "electronic treadmills", "meaning": "Máy chạy bộ điện", "ipa": "/ˈtred.mɪlz/"},
            {"word": "lifting dumbbells", "meaning": "Nâng tạ tay", "ipa": "/ˈdʌm.belz/"}
        ],
        "sampleEnglishAnswer": "Inside a modern fitness facility, several individuals are jogging vigorously on electronic treadmills while others in the background are lifting dumbbells.",
        "alternativeAnswers": [
            "Gym-goers are working out in a spacious workout room equipped with stationary bikes and weight stations."
        ],
        "analysis": "Cặp từ 'jogging vigorously' và 'lifting dumbbells' bao quát toàn diện các hành động của nhân vật trong ảnh.",
        "difficulty": "Cơ bản (500+)"
    },
    {
        "id": "trans-s2-18",
        "part": "speaking_p2",
        "partName": "Speaking Part 2: Miêu Tả Tranh",
        "partCategory": "sentence",
        "title": "Nhà kính vườn thực vật nhiệt đới (Botanical Garden)",
        "vietnamesePrompt": "Phía xa ở hậu cảnh, một mái vòm bằng kính cao vút bao trùm hàng trăm loài cây nhiệt đới tươi tốt tạo nên một không gian xanh mát và yên bình.",
        "targetGrammar": "Mệnh đề phân từ hiện tại chỉ kết quả (enclosing hundreds of lush tropical plants, creating a tranquil environment)",
        "vocabularyHints": [
            {"word": "in the background", "meaning": "Ở phía hậu cảnh", "ipa": "/ɪn ðə ˈbæk.ɡraʊnd/"},
            {"word": "towering glass dome", "meaning": "Mái vòm kính cao vút", "ipa": "/ˈtaʊə.rɪŋ ɡlɑːs dəʊm/"},
            {"word": "lush tropical vegetation", "meaning": "Thảm thực vật nhiệt đới tươi tốt", "ipa": "/lʌʃ ˈtrɒp.ɪ.kəl ˌvedʒ.ɪˈteɪ.ʃən/"}
        ],
        "sampleEnglishAnswer": "In the background, a towering glass dome encloses lush tropical vegetation, creating a wonderfully tranquil and natural ambiance for the walking visitors.",
        "alternativeAnswers": [
            "Sunlight streams through the greenhouse roof onto exotic flora while visitors stroll along paved stone pathways."
        ],
        "analysis": "Cụm 'towering glass dome' và 'tranquil ambiance' mang sắc thái từ vựng cực kỳ trang nhã cho Speaking Level 8.",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-s2-19",
        "part": "speaking_p2",
        "partName": "Speaking Part 2: Miêu Tả Tranh",
        "partCategory": "sentence",
        "title": "Quầy lễ tân khách sạn năm sao (Hotel Concierge)",
        "vietnamesePrompt": "Tại quầy lễ tân bằng đá cẩm thạch sang trọng, một nhân viên hỗ trợ khách hàng lịch lãm đang cúi chào và trao chìa khóa phòng cho một cặp đôi mới nhận phòng.",
        "targetGrammar": "Hai hành động nối tiếp nhau bằng liên từ 'and' (is warmly welcoming guests and handing over room keys)",
        "vocabularyHints": [
            {"word": "polished marble reception desk", "meaning": "Quầy tiếp tân bằng đá cẩm thạch bóng loáng", "ipa": "/ˈmɑː.bəl rɪˈsep.ʃən desk/"},
            {"word": "hotel concierge", "meaning": "Nhân viên hướng dẫn khách sạn", "ipa": "/ˌkɒn.siˈeəʒ/"},
            {"word": "handing over electronic keycards", "meaning": "Trao thẻ khóa từ mở phòng", "ipa": "/ˈkiː.kɑːdz/"}
        ],
        "sampleEnglishAnswer": "At the polished marble reception desk, a sharp concierge is smiling warmly and handing over electronic room keycards to an arriving couple.",
        "alternativeAnswers": [
            "Hotel staff are assisting newly arrived guests with their luggage and reservation verification at the grand lobby counter."
        ],
        "analysis": "Phát âm chuẩn từ 'concierge' /ˌkɒn.siˈeəʒ/ sẽ giúp bài thi Speaking ghi điểm phát âm tuyệt đối.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-s2-20",
        "part": "speaking_p2",
        "partName": "Speaking Part 2: Miêu Tả Tranh",
        "partCategory": "sentence",
        "title": "Băng chuyền hành lý nhà ga sân bay (Baggage Claim)",
        "vietnamesePrompt": "Nhiều hành khách vừa hạ cánh đang đứng vây quanh băng chuyền hành lý xoay tròn, nóng lòng chờ vali của mình xuất hiện.",
        "targetGrammar": "Cụm phân từ hiện tại chỉ tâm trạng (anxiously waiting for their suitcases to emerge)",
        "vocabularyHints": [
            {"word": "baggage claim area", "meaning": "Khu vực nhận hành lý sân bay", "ipa": "/ˈbæɡ.ɪdʒ kleɪm ˈeə.ri.ə/"},
            {"word": "revolving carousel", "meaning": "Băng chuyền xoay vòng tròn", "ipa": "/rɪˈvɒl.vɪŋ ˌkær.əˈsel/"},
            {"word": "eagerly anticipating", "meaning": "Nóng lòng ngóng đợi", "ipa": "/ˈiː.ɡəl.i ænˈtɪs.ɪ.peɪ.tɪŋ/"}
        ],
        "sampleEnglishAnswer": "A crowd of arriving travelers is clustered around a revolving baggage carousel, eagerly anticipating the appearance of their luggage.",
        "alternativeAnswers": [
            "At the airport arrival terminal, passengers are watching the moving luggage belt to retrieve their personal bags."
        ],
        "analysis": "'Revolving baggage carousel' là thuật ngữ sân bay chuẩn xác nhất mà ETS luôn muốn nghe trong câu trả lời.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-s2-21",
        "part": "speaking_p2",
        "partName": "Speaking Part 2: Miêu Tả Tranh",
        "partCategory": "sentence",
        "title": "Công trường xây dựng nhà chọc trời (Skyscraper Site)",
        "vietnamesePrompt": "Bức ảnh cho thấy một công trường xây dựng quy mô lớn với hai cần cẩu tháp khổng lồ vươn cao trên khung nhà bê tông đang thi công.",
        "targetGrammar": "Mệnh đề phân từ hiện tại rút gọn (towering cranes soaring above the concrete framework under construction)",
        "vocabularyHints": [
            {"word": "massive construction site", "meaning": "Công trường xây dựng đồ sộ", "ipa": "/ˈmæs.ɪv kənˈstrʌk.ʃən saɪt/"},
            {"word": "towering cranes", "meaning": "Những chiếc cần cẩu cao chót vót", "ipa": "/ˈtaʊə.rɪŋ kreɪnz/"},
            {"word": "reinforced concrete framework", "meaning": "Khung bê tông cốt thép", "ipa": "/ˌriː.ɪnˈfɔːst ˈkɒŋ.kriːt/"}
        ],
        "sampleEnglishAnswer": "This picture showcases a massive urban construction site featuring towering yellow cranes operating above a multi-story concrete building framework.",
        "alternativeAnswers": [
            "Scaffolding and heavy machinery dominate the scene as an office skyscraper is steadily erected."
        ],
        "analysis": "Từ vựng 'towering yellow cranes' và 'building framework' giúp bức tranh trở nên sống động và chi tiết.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-s2-22",
        "part": "speaking_p2",
        "partName": "Speaking Part 2: Miêu Tả Tranh",
        "partCategory": "sentence",
        "title": "Giảng đường đại học quy mô lớn (Lecture Hall)",
        "vietnamesePrompt": "Trong một giảng đường bậc thang rộng lớn, hàng trăm sinh viên đang tập trung lắng nghe bài giảng và ghi chép trên máy tính xách tay cá nhân.",
        "targetGrammar": "Trạng từ chỉ nơi chốn đảo ngữ nhẹ (In a tiered university lecture auditorium, hundreds of students are absorbed in listening...)",
        "vocabularyHints": [
            {"word": "tiered lecture hall", "meaning": "Giảng đường bậc thang xếp tầng", "ipa": "/tɪəd ˈlek.tʃər hɔːl/"},
            {"word": "deeply absorbed in the lecture", "meaning": "Chăm chú lắng nghe bài giảng", "ipa": "/əbˈzɔːbd/"},
            {"word": "taking digital notes", "meaning": "Ghi chép bài trên máy tính", "ipa": "/ˈdɪdʒ.ɪ.təl nəʊts/"}
        ],
        "sampleEnglishAnswer": "Inside a tiered university lecture hall, hundreds of undergraduates are deeply absorbed in the presentation while taking digital notes on their laptops.",
        "alternativeAnswers": [
            "A university professor addresses a crowded auditorium as students follow along with slide displays."
        ],
        "analysis": "'Tiered lecture hall' (giảng đường xếp tầng bậc thang) là collocation rất tự nhiên.",
        "difficulty": "Cơ bản (500+)"
    },
    {
        "id": "trans-s2-23",
        "part": "speaking_p2",
        "partName": "Speaking Part 2: Miêu Tả Tranh",
        "partCategory": "sentence",
        "title": "Lễ hội ẩm thực đường phố ban đêm (Night Food Fest)",
        "vietnamesePrompt": "Khói và mùi thơm bốc lên từ các quầy nướng đồ ăn đường phố dưới những dây đèn vàng lung linh giăng kín khắp khu chợ đêm náo nhiệt.",
        "targetGrammar": "Chủ ngữ ghép + cụm phân từ hiện tại (Smoke and steam rising from food stalls under strands of glowing lights...)",
        "vocabularyHints": [
            {"word": "steam rising from barbecue grills", "meaning": "Khói và hơi nước bốc lên từ bếp nướng", "ipa": "/stiːm ˈraɪ.zɪŋ/"},
            {"word": "strings of glowing fairy lights", "meaning": "Những dây đèn đom đóm lung linh", "ipa": "/strɪŋz əv laɪts/"},
            {"word": "vibrant open-air food market", "meaning": "Khu chợ ẩm thực ngoài trời sôi động", "ipa": "/ˈvaɪ.brənt/"}
        ],
        "sampleEnglishAnswer": "Steam is rising from sizzling barbecue grills beneath strings of glowing decorative lights in this vibrant and bustling open-air night food festival.",
        "alternativeAnswers": [
            "Crowds are gathered around street food stalls sampling freshly cooked delicacies under illuminated lanterns."
        ],
        "analysis": "Từ tượng thanh 'sizzling barbecue grills' (bếp nướng xèo xèo) tạo ấn tượng cảm giác tuyệt vời trong Speaking.",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-s2-24",
        "part": "speaking_p2",
        "partName": "Speaking Part 2: Miêu Tả Tranh",
        "partCategory": "sentence",
        "title": "Quầy thanh toán tự động tại siêu thị (Self-Checkout)",
        "vietnamesePrompt": "Ở góc phải bức hình, một người đàn ông trẻ đang tự tay quét mã vạch trên hộp ngũ cốc tại quầy thanh toán tự động không người phục vụ.",
        "targetGrammar": "Cụm danh từ ghép 'self-service checkout kiosk' (is scanning barcodes at an automated self-service checkout kiosk)",
        "vocabularyHints": [
            {"word": "self-service checkout kiosk", "meaning": "Quầy thanh toán tự phục vụ", "ipa": "/ˌselfˈsɜː.vɪs ˈtʃek.aʊt ˈkiː.ɒsk/"},
            {"word": "scanning the barcode", "meaning": "Quét mã vạch hàng hóa", "ipa": "/ˈbɑː.kəʊd/"},
            {"word": "cashless digital transaction", "meaning": "Giao dịch thanh toán không tiền mặt", "ipa": "/ˈkæʃ.ləs trænˈzæk.ʃən/"}
        ],
        "sampleEnglishAnswer": "On the right side of the picture, a young man is scanning the barcode of a grocery item at a modern self-service checkout kiosk.",
        "alternativeAnswers": [
            "Supermarket shoppers are utilizing automated payment stations to complete their purchases independently."
        ],
        "analysis": "'Self-service checkout kiosk' là chủ đề công nghệ bán lẻ hiện đại cực kỳ phổ biến trong đề thi gần đây.",
        "difficulty": "Trung cấp (650+)"
    }
]

# Speaking Part 3 & 4: 12 new items (trans-s34-13 to trans-s34-24)
new_s34 = [
    {
        "id": "trans-s34-13",
        "part": "speaking_p3_4",
        "partName": "Speaking Part 3 & 4: Phản Xạ & Lịch Trình",
        "partCategory": "sentence",
        "title": "Speaking Q5 (15s): Thói quen sử dụng ví điện tử hàng ngày",
        "vietnamesePrompt": "Tôi sử dụng các ứng dụng thanh toán di động gần như mỗi ngày vì chúng cho phép tôi mua sắm tiện lợi mà không cần phải mang theo tiền mặt.",
        "targetGrammar": "Cấu trúc trả lời trực diện trong 15s + liên từ chỉ lý do 'because / since' (I utilize mobile payment applications on a daily basis because they enable me to...)",
        "vocabularyHints": [
            {"word": "on a daily basis", "meaning": "Hàng ngày (thay thế cho everyday)", "ipa": "/ɒn ə ˈdeɪ.li ˈbeɪ.sɪs/"},
            {"word": "cashless convenience", "meaning": "Sự tiện lợi của thanh toán không tiền mặt", "ipa": "/ˈkæʃ.ləs kənˈviː.ni.əns/"},
            {"word": "frictionless transactions", "meaning": "Các giao dịch thanh toán mượt mà", "ipa": "/ˈfrɪk.ʃən.ləs/"}
        ],
        "sampleEnglishAnswer": "I utilize mobile payment apps on a daily basis because they provide cashless convenience and allow me to make frictionless purchases without carrying paper money.",
        "alternativeAnswers": [
            "Practically every day, I rely on smartphone wallets since they are significantly faster and safer than handling cash."
        ],
        "analysis": "Chiến lược 15s: Trả lời thẳng vào câu hỏi trong 3 giây đầu, sau đó phát triển 1 lý do cụ thể với 'because...'.",
        "difficulty": "Cơ bản (500+)"
    },
    {
        "id": "trans-s34-14",
        "part": "speaking_p3_4",
        "partName": "Speaking Part 3 & 4: Phản Xạ & Lịch Trình",
        "partCategory": "sentence",
        "title": "Speaking Q6 (15s): Thói quen nghe podcast trong lúc đi lại",
        "vietnamesePrompt": "Tôi thường nghe các chương trình podcast về công nghệ và kinh doanh trong lúc đi tàu điện ngầm đi làm để cập nhật xu hướng mới nhất trong ngành.",
        "targetGrammar": "Mệnh đề chỉ thời điểm lồng ghép (I usually stream podcasts while commuting by train in order to stay abreast of...)",
        "vocabularyHints": [
            {"word": "stream informative podcasts", "meaning": "Nghe/phát các kênh podcast giàu thông tin", "ipa": "/striːm ˈpɒd.kɑːsts/"},
            {"word": "daily subway commute", "meaning": "Chuyến đi làm hàng ngày bằng tàu điện ngầm", "ipa": "/kəˈmjuːt/"},
            {"word": "stay abreast of market trends", "meaning": "Cập nhật kịp thời xu hướng thị trường", "ipa": "/steɪ əˈbrest əv/"}
        ],
        "sampleEnglishAnswer": "I usually listen to business and technology podcasts during my daily subway commute in order to stay abreast of the latest market innovations.",
        "alternativeAnswers": [
            "Whenever I travel to work on public transit, I tune into industry podcasts to maximize my commuting hours productively."
        ],
        "analysis": "Cụm C1 'stay abreast of' (bắt kịp / cập nhật) là 'vũ khí bí mật' ghi điểm Lexical Resource của Speaking.",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-s34-15",
        "part": "speaking_p3_4",
        "partName": "Speaking Part 3 & 4: Phản Xạ & Lịch Trình",
        "partCategory": "sentence",
        "title": "Speaking Q7 (30s): Yếu tố hàng đầu khi lựa chọn khách sạn",
        "vietnamesePrompt": "Khi đặt phòng khách sạn cho kỳ nghỉ, vị trí thuận tiện gần các điểm giao thông công cộng là ưu tiên hàng đầu của tôi, tiếp theo là tiêu chuẩn vệ sinh phòng sạch sẽ.",
        "targetGrammar": "Chiến lược 30s nêu 2 luận điểm (My primary consideration is [Factor 1], closely followed by [Factor 2] because...)",
        "vocabularyHints": [
            {"word": "primary consideration", "meaning": "Yếu tố cân nhắc hàng đầu", "ipa": "/ˈpraɪ.mər.i kənˌsɪd.əˈreɪ.ʃən/"},
            {"word": "proximity to transit hubs", "meaning": "Sự gần gũi / tiện đi lại với các đầu mối giao thông", "ipa": "/prɒkˈsɪm.ə.ti/"},
            {"word": "impeccable hygiene standards", "meaning": "Tiêu chuẩn vệ sinh hoàn hảo không tì vết", "ipa": "/ɪmˈpek.ə.bəl ˈhaɪ.dʒiːn/"}
        ],
        "sampleEnglishAnswer": "When booking vacation accommodation, my primary consideration is proximity to public transit hubs, closely followed by impeccable hygiene standards, because easy mobility saves substantial travel time.",
        "alternativeAnswers": [
            "Central location and pristine cleanliness are the two deciding factors for me whenever I select a hotel room."
        ],
        "analysis": "Cấu trúc 'My primary consideration is X, closely followed by Y' giúp câu trả lời 30s mạch lạc và chặt chẽ.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-s34-16",
        "part": "speaking_p3_4",
        "partName": "Speaking Part 3 & 4: Phản Xạ & Lịch Trình",
        "partCategory": "sentence",
        "title": "Speaking Q7 (30s): Mua sắm online hay trải nghiệm tại cửa hàng",
        "vietnamesePrompt": "Mặc dù mua sắm trực tuyến rất nhanh chóng và tiện lợi, tôi vẫn thích đến các cửa hàng truyền thống hơn vì tôi có thể tận mắt kiểm tra chất lượng sản phẩm trước khi chi tiền.",
        "targetGrammar": "Mệnh đề nhượng bộ so sánh sở thích (Although online shopping offers speed, I personally prefer physical stores because I can inspect items firsthand...)",
        "vocabularyHints": [
            {"word": "unmatched convenience", "meaning": "Sự tiện lợi vô song / không gì sánh bằng", "ipa": "/ʌnˈmætʃt/"},
            {"word": "brick-and-mortar storefronts", "meaning": "Cửa hàng vật lý truyền thống ngoài đời", "ipa": "/brɪk ənd ˈmɔː.tər/"},
            {"word": "inspect items firsthand", "meaning": "Tận tay tận mắt kiểm tra món đồ", "ipa": "/ɪnˈspekt ˈfɜːst.hænd/"}
        ],
        "sampleEnglishAnswer": "Although e-commerce platforms offer unmatched convenience, I still prefer browsing brick-and-mortar stores because inspecting merchandise firsthand prevents disappointing purchasing errors.",
        "alternativeAnswers": [
            "I favor shopping in person because examining the physical texture and fit guarantees complete consumer satisfaction."
        ],
        "analysis": "Cụm 'brick-and-mortar stores' và 'inspecting merchandise firsthand' thể hiện trình độ tiếng Anh tự nhiên.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-s34-17",
        "part": "speaking_p3_4",
        "partName": "Speaking Part 3 & 4: Phản Xạ & Lịch Trình",
        "partCategory": "sentence",
        "title": "Speaking Q8 (Schedule 15s): Địa điểm và thời gian phiên khai mạc",
        "vietnamesePrompt": "Theo lịch trình hội nghị, lễ khai mạc sẽ chính thức bắt đầu lúc 9 giờ sáng tại Phòng Đại Tiệc Tòa Nhà Trung Tâm, ngay sau phần đăng ký đại biểu.",
        "targetGrammar": "Mẫu câu đọc lịch trình Part 4 (According to the schedule, the opening ceremony will commence at [time] in [venue])",
        "vocabularyHints": [
            {"word": "according to the official schedule", "meaning": "Theo lịch trình chính thức", "ipa": "/əˈkɔː.dɪŋ tuː/"},
            {"word": "will commence promptly at", "meaning": "Sẽ bắt đầu đúng giờ vào lúc", "ipa": "/kəˈmens ˈprɒmpt.li/"},
            {"word": "Grand Ballroom", "meaning": "Phòng Đại tiệc / Đại sảnh", "ipa": "/ɡrænd ˈbɔːl.ruːm/"}
        ],
        "sampleEnglishAnswer": "According to the official schedule, the opening orientation ceremony will commence promptly at 9:00 AM in the Grand Ballroom, immediately following delegate check-in.",
        "alternativeAnswers": [
            "The program indicates that opening remarks are scheduled for 9:00 AM in Ballroom A right after registration concludes."
        ],
        "analysis": "Dùng 'commence promptly at' thay vì 'start at' tạo phong thái chuyên nghiệp trong bài thi Speaking Part 4.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-s34-18",
        "part": "speaking_p3_4",
        "partName": "Speaking Part 3 & 4: Phản Xạ & Lịch Trình",
        "partCategory": "sentence",
        "title": "Speaking Q9 (Asterisk Trap 15s): Đính chính miễn phí cho hội viên",
        "vietnamesePrompt": "Thực ra thông tin đó chưa chính xác đâu ạ; bạn sẽ không phải trả phí tham dự 50 đô la vì bạn đã là hội viên câu lạc bộ rồi, như được ghi chú ở chân trang.",
        "targetGrammar": "Công thức đính chính bẫy hoa thị (Actually, that information is not quite accurate; you do not need to pay... as noted at the bottom of the page)",
        "vocabularyHints": [
            {"word": "that information is not quite correct", "meaning": "Thông tin đó chưa hoàn toàn chính xác", "ipa": "/nɒt kwaɪt kəˈrekt/"},
            {"word": "registration fee is fully waived", "meaning": "Phí đăng ký được miễn hoàn toàn", "ipa": "/weɪvd/"},
            {"word": "indicated in the footnote", "meaning": "Được ghi chú ở phần chú thích chân trang (*)", "ipa": "/ˈfʊt.nəʊt/"}
        ],
        "sampleEnglishAnswer": "Actually, that information is not quite accurate; the fifty-dollar admission fee is completely waived for registered members, as indicated in the footnote with an asterisk.",
        "alternativeAnswers": [
            "I am afraid that is incorrect; according to the small note at the bottom, active members are exempt from paying admission."
        ],
        "analysis": "Bẫy Q9 Part 4: Luôn bắt đầu bằng câu nói lịch sự 'Actually, that is not quite accurate...' rồi giải thích đúng thông tin có dấu sao (*).",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-s34-19",
        "part": "speaking_p3_4",
        "partName": "Speaking Part 3 & 4: Phản Xạ & Lịch Trình",
        "partCategory": "sentence",
        "title": "Speaking Q10 (Schedule Detail 30s): Liệt kê 2 hội thảo của diễn giả",
        "vietnamesePrompt": "Chắc chắn rồi, có hai phiên thảo luận do Tiến sĩ Angela chủ trì. Phiên đầu tiên về Quản Trị Trí Tuệ Nhân Tạo lúc 10 giờ sáng, và phiên thứ hai về Bảo Mật Dữ Liệu lúc 2 giờ chiều.",
        "targetGrammar": "Công thức 30s đọc 2 mục lịch trình (Certainly, there are two sessions hosted by [Speaker]. First,... Second,...)",
        "vocabularyHints": [
            {"word": "certainly, there are two scheduled sessions", "meaning": "Chắc chắn rồi, có 2 phiên thảo luận được lên lịch", "ipa": "/ˈsɜː.tən.li/"},
            {"word": "AI Governance and Ethics", "meaning": "Quản trị và đạo đức trí tuệ nhân tạo", "ipa": "/ˈɡʌv.ən.əns/"},
            {"word": "breakout workshop", "meaning": "Phiên thảo luận nhóm chuyên sâu", "ipa": "/ˈbreɪk.aʊt ˈwɜːk.ʃɒp/"}
        ],
        "sampleEnglishAnswer": "Certainly, there are two sessions conducted by Dr. Angela. First, she will lead a seminar on AI Governance at 10:00 AM in Room 204. Second, she will facilitate an interactive Data Privacy workshop from 2:00 to 3:30 PM.",
        "alternativeAnswers": [
            "Sure, Dr. Angela is leading two presentations: a morning talk on machine learning ethics at 10 AM, followed by an afternoon compliance clinic at 2 PM."
        ],
        "analysis": "Cấu trúc 'First,... Second,...' giúp hoàn thành câu hỏi 30s trong thời gian lý tưởng 22-26 giây mà không bị ngập ngừng.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-s34-20",
        "part": "speaking_p3_4",
        "partName": "Speaking Part 3 & 4: Phản Xạ & Lịch Trình",
        "partCategory": "sentence",
        "title": "Speaking Q5 (15s): Thói quen trải nghiệm nhà hàng mới",
        "vietnamesePrompt": "Tôi thường thử các quán ăn và nhà hàng mới khoảng một đến hai lần mỗi tháng, đặc biệt là khi bạn bè giới thiệu cho tôi những món ẩm thực độc đáo.",
        "targetGrammar": "Tần suất + mệnh đề trạng ngữ điều kiện (I experiment with novel dining spots once or twice a month, especially when...)",
        "vocabularyHints": [
            {"word": "novel culinary spots", "meaning": "Các địa điểm ẩm thực mới mẻ", "ipa": "/ˈkʌl.ɪ.nər.i spɒts/"},
            {"word": "once or twice a month", "meaning": "1 hoặc 2 lần mỗi tháng", "ipa": "/wʌns ɔːr twaɪs/"},
            {"word": "enthusiastic word-of-mouth recommendations", "meaning": "Lời giới thiệu truyền miệng nhiệt tình", "ipa": "/wɜːd əv maʊθ/"}
        ],
        "sampleEnglishAnswer": "I try out novel culinary spots roughly once or twice a month, especially when close friends give enthusiastic word-of-mouth recommendations.",
        "alternativeAnswers": [
            "A couple of times each month, I explore newly opened eateries to discover interesting local flavors."
        ],
        "analysis": "'Word-of-mouth recommendations' (lời giới thiệu truyền miệng) là cụm từ rất ghi điểm trong Speaking Part 3.",
        "difficulty": "Cơ bản (500+)"
    },
    {
        "id": "trans-s34-21",
        "part": "speaking_p3_4",
        "partName": "Speaking Part 3 & 4: Phản Xạ & Lịch Trình",
        "partCategory": "sentence",
        "title": "Speaking Q6 (15s): Không gian rèn luyện thể chất lý tưởng",
        "vietnamesePrompt": "Tôi thích tập thể dục tại công viên gần nhà hơn vì tôi có thể tận hưởng không khí trong lành ngoài trời và không gian xanh thoáng đãng hoàn toàn miễn phí.",
        "targetGrammar": "Cấu trúc sở thích so sánh (I prefer exercising at a nearby park rather than indoors because I can absorb crisp fresh air...)",
        "vocabularyHints": [
            {"word": "neighborhood public park", "meaning": "Công viên công cộng gần khu dân cư", "ipa": "/ˈneɪ.bə.hʊd pɑːk/"},
            {"word": "crisp fresh air", "meaning": "Không khí trong lành, sảng khoái", "ipa": "/krɪsp freʃ eər/"},
            {"word": "lush green surroundings", "meaning": "Không gian xanh tươi mát xung quanh", "ipa": "/lʌʃ ɡriːn/"}
        ],
        "sampleEnglishAnswer": "I prefer working out at our neighborhood community park because jogging amidst lush greenery and crisp fresh air rejuvenates my mental energy completely free of charge.",
        "alternativeAnswers": [
            "Exercising outdoors in a public green space is ideal for me due to the open atmosphere and invigorating breeze."
        ],
        "analysis": "Động từ 'rejuvenates my mental energy' (tái tạo năng lượng tinh thần) tạo ấn tượng rất sâu sắc với giám khảo ETS.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-s34-22",
        "part": "speaking_p3_4",
        "partName": "Speaking Part 3 & 4: Phản Xạ & Lịch Trình",
        "partCategory": "sentence",
        "title": "Speaking Q7 (30s): Tác động tích cực của thói quen đọc sách",
        "vietnamesePrompt": "Theo quan điểm của tôi, việc đọc sách mỗi ngày mang lại hai lợi ích vô giá: thứ nhất là mở rộng vốn hiểu biết đa chiều, và thứ hai là rèn luyện khả năng tập trung sâu trong một thế giới đầy phiền nhiễu.",
        "targetGrammar": "Cấu trúc phân tích 2 khía cạnh giá trị (In my view, daily reading yields two invaluable benefits: first, it broadens... and second, it cultivates...)",
        "vocabularyHints": [
            {"word": "yields two invaluable benefits", "meaning": "Mang lại hai lợi ích vô giá", "ipa": "/jiːldz ɪnˈvæl.jə.bəl ˈben.ɪ.fɪts/"},
            {"word": "broadens intellectual horizons", "meaning": "Mở rộng chân trời tri thức", "ipa": "/ˈbrɔː.dənz ˌɪn.təlˈek.tʃu.əl həˈraɪ.zənz/"},
            {"word": "cultivates sustained mental focus", "meaning": "Rèn luyện khả năng tập trung trí não bền bỉ", "ipa": "/ˈkʌl.tɪ.veɪts səˈsteɪnd/"}
        ],
        "sampleEnglishAnswer": "In my view, daily reading yields two invaluable benefits. First, it continually broadens one's intellectual horizons. Second, it cultivates sustained mental focus, which is essential for thriving amidst constant modern digital distractions.",
        "alternativeAnswers": [
            "Reading consistently sharpens cognitive analytical skills and serves as a powerful antidote to daily workplace stress."
        ],
        "analysis": "Cụm 'broadens intellectual horizons' và 'amidst constant modern digital distractions' đạt điểm Lexical Resource tối đa (Score 3/3).",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-s34-23",
        "part": "speaking_p3_4",
        "partName": "Speaking Part 3 & 4: Phản Xạ & Lịch Trình",
        "partCategory": "sentence",
        "title": "Speaking Q9 (Asterisk Trap 15s): Đính chính đổi phòng ăn trưa buffet",
        "vietnamesePrompt": "Thực ra có một sự thay đổi so với kế hoạch ban đầu; tiệc trưa tự chọn đã được chuyển sang Nhà Ăn Tòa Nhà B do nhà ăn chính đang sửa chữa.",
        "targetGrammar": "Mẫu câu đính chính địa điểm di dời (Actually, there has been a minor venue alteration; the buffet lunch has been relocated to...)",
        "vocabularyHints": [
            {"word": "minor venue alteration", "meaning": "Thay đổi nhỏ về địa điểm tổ chức", "ipa": "/ˈmaɪ.nər ˈven.juː ˌɔːl.təˈreɪ.ʃən/"},
            {"word": "complimentary buffet lunch", "meaning": "Bữa trưa tự chọn miễn phí", "ipa": "/ˌkɒm.plɪˈmen.tər.i ˈbʊf.eɪ/"},
            {"word": "due to ongoing kitchen renovations", "meaning": "Do công tác sửa chữa cải tạo bếp đang diễn ra", "ipa": "/ˌren.əˈveɪ.ʃənz/"}
        ],
        "sampleEnglishAnswer": "Actually, there has been a venue alteration; the complimentary buffet lunch will be served in Dining Hall B instead of the Main Cafeteria due to ongoing renovations.",
        "alternativeAnswers": [
            "Please note that the luncheon location has been moved to Building B Annex, as mentioned in the schedule update notes."
        ],
        "analysis": "Dùng 'venue alteration' và động từ 'relocated' giải quyết trọn vẹn bẫy chuyển địa điểm thường gặp ở Part 4.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-s34-24",
        "part": "speaking_p3_4",
        "partName": "Speaking Part 3 & 4: Phản Xạ & Lịch Trình",
        "partCategory": "sentence",
        "title": "Speaking Q10 (Schedule Detail 30s): Lịch trình kiểm định an toàn nhà máy",
        "vietnamesePrompt": "Dạ vâng, lịch trình kiểm định an toàn gồm hai hoạt động chính: Buổi sáng có cuộc diễn tập thoát hiểm lúc 8 giờ 30, và buổi chiều là đợt thanh tra thiết bị từ 1 giờ đến 4 giờ.",
        "targetGrammar": "Cấu trúc tóm lược 2 mốc sự kiện (Certainly, the safety audit comprises two primary components. In the morning,... Later in the afternoon,...)",
        "vocabularyHints": [
            {"word": "safety inspection comprises two phases", "meaning": "Đợt kiểm tra an toàn gồm hai giai đoạn", "ipa": "/kəmˈpraɪ.zɪz tuː ˈfeɪ.zɪz/"},
            {"word": "mandatory evacuation fire drill", "meaning": "Cuộc diễn tập sơ tán hỏa hoạn bắt buộc", "ipa": "/ɪˌvæk.juˈeɪ.ʃən faɪər drɪl/"},
            {"word": "regulatory equipment compliance audit", "meaning": "Đợt kiểm toán tuân thủ quy chuẩn thiết bị", "ipa": "/ˌkɒm.pliˈəns ˈɔː.dɪt/"}
        ],
        "sampleEnglishAnswer": "Certainly, the facility inspection comprises two scheduled components. In the morning, a mandatory fire evacuation drill is held at 8:30 AM. Later in the afternoon, certified auditors will conduct equipment compliance checks from 1:00 to 4:00 PM.",
        "alternativeAnswers": [
            "Yes, there are two safety procedures slated for that day: an early morning evacuation simulation followed by an afternoon factory floor review."
        ],
        "analysis": "Sử dụng từ nối 'In the morning,... Later in the afternoon,...' tạo mạch logic rất tự nhiên và kiểm soát thời gian hoàn hảo.",
        "difficulty": "Nâng cao (800+)"
    }
]

# Opinion Paragraphs: 12 new items (trans-op-13 to trans-op-24)
new_op = [
    {
        "id": "trans-op-13",
        "part": "opinion_paragraphs",
        "partName": "Task Cuối: Đoạn Văn Ngắn Nền Tảng",
        "partCategory": "paragraph",
        "title": "Đoạn 13: Mở bài & Luận điểm về Trí tuệ nhân tạo (AI) trong giáo dục",
        "vietnamesePrompt": "Trong thời đại kỹ thuật số phát triển vượt bậc, sự xuất hiện của các công cụ gia sư trí tuệ nhân tạo đang định hình lại phương pháp giảng dạy truyền thống. Tôi hoàn toàn ủng hộ quan điểm rằng việc tích hợp AI vào trường học sẽ cá nhân hóa lộ trình học tập và giải phóng giáo viên khỏi các công việc hành chính lặp đi lặp lại.",
        "targetGrammar": "Cấu trúc Mở bài Hook & Thesis (In an era marked by rapid digitalization, the advent of [Technology] is reshaping... I firmly advocate the premise that integrating [AI] will both [Advantage 1] and [Advantage 2])",
        "vocabularyHints": [
            {"word": "advent of artificial intelligence tutoring tools", "meaning": "Sự xuất hiện của các công cụ gia sư trí tuệ nhân tạo", "ipa": "/ˈæd.vent/"},
            {"word": "reshaping conventional pedagogical paradigms", "meaning": "Định hình lại các mô hình sư phạm truyền thống", "ipa": "/ˌped.əˈɡɒdʒ.ɪ.kəl/"},
            {"word": "firmly advocate the premise that", "meaning": "Kiên định ủng hộ tiền đề rằng", "ipa": "/ˈæd.və.keɪt ðə ˈprem.ɪs/"},
            {"word": "tailor individualized learning pathways", "meaning": "Cá nhân hóa các lộ trình học tập", "ipa": "/ˈteɪ.lər ˌɪn.dɪˈvɪdʒ.u.ə.laɪzd/"}
        ],
        "sampleEnglishAnswer": "In an era marked by rapid digitalization, the advent of artificial intelligence tutoring tools is profoundly reshaping conventional pedagogy. I firmly advocate the premise that integrating AI platforms into schools tailors individualized learning pathways while liberating educators from repetitive administrative burdens.",
        "alternativeAnswers": [
            "As educational technologies advance, intelligent learning software offers unprecedented academic personalization and operational efficiency for modern classrooms."
        ],
        "analysis": "Đoạn mở bài 46 từ đạt điểm tối đa nhờ cặp luận điểm song hành 'tailors individualized pathways' và 'liberates educators from administrative burdens'.",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-op-14",
        "part": "opinion_paragraphs",
        "partName": "Task Cuối: Đoạn Văn Ngắn Nền Tảng",
        "partCategory": "paragraph",
        "title": "Đoạn 14: Thân bài PEEL về ưu thế của mô hình văn phòng mở (Collaboration)",
        "vietnamesePrompt": "Thứ nhất, thiết kế văn phòng mở thúc đẩy sự cộng tác tự phát và phá vỡ rào cản ngăn cách giữa các phòng ban. Ví dụ, tại các công ty công nghệ đa quốc gia, các kỹ sư phần mềm và chuyên viên tiếp thị có thể nhanh chóng trao đổi ý tưởng mà không cần phải đặt lịch họp trang trọng, từ đó đẩy nhanh tốc độ tung sản phẩm mới ra thị trường.",
        "targetGrammar": "Cấu trúc PEEL (Point: First and foremost,... fosters... Explanation: By eliminating physical barriers,... Example: For instance, at tech firms,... Link: Consequently,...)",
        "vocabularyHints": [
            {"word": "open-plan layout", "meaning": "Cách bố trí mặt bằng văn phòng mở", "ipa": "/ˈəʊ.pən plæn ˈleɪ.aʊt/"},
            {"word": "fosters spontaneous collaboration", "meaning": "Thúc đẩy sự hợp tác tự phát không khiên cưỡng", "ipa": "/spɒnˈteɪ.ni.əs/"},
            {"word": "dismantles departmental silos", "meaning": "Phá bỏ các rào cản chia rẽ giữa các phòng ban", "ipa": "/dɪsˈmæn.təlz ˈsaɪ.ləʊz/"},
            {"word": "accelerates product launch cycles", "meaning": "Đẩy nhanh chu kỳ tung sản phẩm mới ra thị trường", "ipa": "/əkˈsel.ə.reɪts/"}
        ],
        "sampleEnglishAnswer": "First and foremost, an open-plan office layout fosters spontaneous collaboration by dismantling rigid departmental silos. For example, software engineers and product managers can instantly resolve technical roadblocks through informal dialogues, which consequently accelerates overall development cycles without bureaucratic delays.",
        "alternativeAnswers": [
            "Open office architectures encourage fluid interpersonal communication, allowing multidisciplinary teams to coordinate seamlessly and expedite project milestones."
        ],
        "analysis": "Từ 'dismantling rigid departmental silos' (phá bỏ sự ngăn cách cứng nhắc giữa các phòng ban) là thuật ngữ quản trị doanh nghiệp đắt giá bậc nhất.",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-op-15",
        "part": "opinion_paragraphs",
        "partName": "Task Cuối: Đoạn Văn Ngắn Nền Tảng",
        "partCategory": "paragraph",
        "title": "Đoạn 15: Cấu trúc đảo ngữ C1 về chính sách đãi ngộ nhân tài",
        "vietnamesePrompt": "Chính sách lương thưởng và phúc lợi cạnh tranh không chỉ giúp doanh nghiệp thu hút những ứng viên xuất sắc nhất trên thị trường, mà nó còn giảm thiểu đáng kể chi phí đắt đỏ phát sinh từ việc nhân viên nhảy việc. Nhờ vậy, tổ chức có thể duy trì được một đội ngũ ổn định và giàu kinh nghiệm.",
        "targetGrammar": "Đảo ngữ với 'Not only does/is...' (Not only does a competitive remuneration package attract top talent, but it also substantially curtails costly turnover...)",
        "vocabularyHints": [
            {"word": "competitive remuneration package", "meaning": "Gói đãi ngộ lương thưởng cạnh tranh", "ipa": "/rɪˌmjuː.nərˈeɪ.ʃən/"},
            {"word": "attract high-caliber talent", "meaning": "Thu hút nhân tài tầm cỡ cao", "ipa": "/haɪ ˈkæl.ɪ.bər/"},
            {"word": "substantially curtail costly turnover", "meaning": "Cắt giảm đáng kể tỷ lệ luân chuyển nhân sự tốn kém", "ipa": "/kɜːˈteɪl ˈtɜːnˌəʊ.vər/"},
            {"word": "preserve institutional expertise", "meaning": "Bảo tồn kinh nghiệm chuyên môn nội bộ", "ipa": "/ˌɪn.stɪˈtʃuː.ʃən.əl/"}
        ],
        "sampleEnglishAnswer": "Not only does a competitive remuneration package attract high-caliber talent from rival firms, but it also substantially curtails costly employee turnover. As a direct consequence, the enterprise preserves valuable institutional expertise and fosters sustainable organizational continuity.",
        "alternativeAnswers": [
            "Offering generous salary and comprehensive benefits not only secures premier recruits but also reinforces loyalty among seasoned personnel."
        ],
        "analysis": "Cấu trúc đảo ngữ 'Not only does [S] [V-inf], but it also [V-s/es]' là điểm cộng trực tiếp từ giám khảo ETS cho tiêu chí Grammatical Range.",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-op-16",
        "part": "opinion_paragraphs",
        "partName": "Task Cuối: Đoạn Văn Ngắn Nền Tảng",
        "partCategory": "paragraph",
        "title": "Đoạn 16: Đoạn nhượng bộ Concession về chi phí năng lượng sạch",
        "vietnamesePrompt": "Mặc dù việc chuyển đổi sang lắp đặt năng lượng mặt trời đòi hỏi nguồn vốn đầu tư ban đầu rất lớn, những lợi ích lâu dài về việc tiết kiệm tiền điện và bảo vệ môi trường hoàn toàn vượt trội hơn khoản chi phí đó. Nhiều nghiên cứu chỉ ra rằng các doanh nghiệp xanh thu hồi vốn chỉ sau vài năm vận hành.",
        "targetGrammar": "Cấu trúc nhượng bộ phản biện (Although/While it is acknowledged that [Counter-point], the long-term economic and ecological dividends far outweigh...)",
        "vocabularyHints": [
            {"word": "entails substantial upfront capital expenditure", "meaning": "Đòi hỏi chi phí vốn đầu tư ban đầu lớn", "ipa": "/ɪnˈteɪlz ˈʌp.frʌnt ɪkˈspen.dɪ.tʃər/"},
            {"word": "long-term ecological and financial dividends", "meaning": "Lợi tức lâu dài về tài chính và sinh thái", "ipa": "/ˌiː.kəˈlɒdʒ.ɪ.kəl ˈdɪv.ɪ.dendz/"},
            {"word": "far outweigh the preliminary costs", "meaning": "Vượt trội hơn hẳn so với chi phí ban đầu", "ipa": "/aʊtˈweɪ/"},
            {"word": "recoup capital investments", "meaning": "Thu hồi vốn đầu tư", "ipa": "/rɪˈkuːp/"}
        ],
        "sampleEnglishAnswer": "Although transitioning to solar infrastructure entails substantial upfront capital expenditure, the long-term ecological and financial dividends far outweigh these preliminary hurdles. Empirical evidence indicates that forward-thinking corporations consistently recoup initial installations within a few fiscal cycles.",
        "alternativeAnswers": [
            "Granted that clean energy conversion requires considerable initial budgets, the ongoing utility reductions and carbon mitigation represent a lucrative investment."
        ],
        "analysis": "Cấu trúc nhượng bộ 'Although [A], the long-term dividends far outweigh [B]' chứng tỏ tư duy phản biện hai chiều (Critical Thinking).",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-op-17",
        "part": "opinion_paragraphs",
        "partName": "Task Cuối: Đoạn Văn Ngắn Nền Tảng",
        "partCategory": "paragraph",
        "title": "Đoạn 17: Đoạn kết bài Punchline về sự chân thành của thương hiệu số",
        "vietnamesePrompt": "Tóm lại, trong một thị trường nơi người tiêu dùng ngày càng thông thái và có nhiều lựa chọn, các thương hiệu xây dựng được sự minh bạch thực sự trên truyền thông xã hội sẽ giữ vững được lòng tin yêu lâu bền của khách hàng.",
        "targetGrammar": "Cấu trúc Kết luận đúc rút (In summary, within a marketplace characterized by..., enterprises that cultivate... will cement enduring consumer loyalty)",
        "vocabularyHints": [
            {"word": "in summary, within a discerning marketplace", "meaning": "Tóm lại, trong một thị trường đầy sự thông thái của khách hàng", "ipa": "/dɪˈsɜː.nɪŋ/"},
            {"word": "cultivate authentic digital transparency", "meaning": "Nuôi dưỡng sự minh bạch chân thực trên không gian số", "ipa": "/ɔːˈθen.tɪk trænˈspær.ən.si/"},
            {"word": "cement enduring consumer loyalty", "meaning": "Gắn kết lòng trung thành lâu bền của người tiêu dùng", "ipa": "/sɪˈment ɪnˈdjʊə.rɪŋ/"}
        ],
        "sampleEnglishAnswer": "In summary, within a modern marketplace characterized by discerning consumer expectations, enterprises that cultivate authentic digital transparency will undeniably cement enduring brand loyalty and outshine their competitors.",
        "alternativeAnswers": [
            "To conclude, organizations that prioritize candid customer engagement across social networks are destined to retain public trust and achieve sustained prosperity."
        ],
        "analysis": "Động từ 'cement enduring brand loyalty' (gắn kết lòng trung thành thương hiệu bền vững) là cái kết đắt giá cho bài viết luận 200/200.",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-op-18",
        "part": "opinion_paragraphs",
        "partName": "Task Cuối: Đoạn Văn Ngắn Nền Tảng",
        "partCategory": "paragraph",
        "title": "Đoạn 18: Thân bài PEEL về phát triển kỹ năng mềm qua hoạt động thể thao",
        "vietnamesePrompt": "Mặt khác, việc tham gia các môn thể thao đồng đội rèn luyện cho thanh thiếu niên những kỹ năng mềm vô cùng thiết yếu. Cụ thể, khi cùng thi đấu vì một mục tiêu chung, các bạn trẻ học được cách lắng nghe, chấp nhận thất bại và kiên trì nỗ lực dưới áp lực thời gian.",
        "targetGrammar": "Cấu trúc PEEL (On the other hand, engaging in [Activity] instills... Specifically, by striving for..., young individuals learn to...)",
        "vocabularyHints": [
            {"word": "engaging in competitive team sports", "meaning": "Tham gia vào các môn thể thao đồng đội mang tính cạnh tranh", "ipa": "/kəmˈpet.ɪ.tɪv tiːm spɔːts/"},
            {"word": "instills indispensable interpersonal skills", "meaning": "Thấm nhuần những kỹ năng giao tiếp thiết yếu", "ipa": "/ɪnˈstɪlz ˌɪn.dɪˈspen.sə.bəl/"},
            {"word": "striving for a unified objective", "meaning": "Nỗ lực vì một mục tiêu thống nhất", "ipa": "/ˈstraɪ.vɪŋ fɔːr/"},
            {"word": "demonstrate resilience under intense pressure", "meaning": "Thể hiện sự kiên cường dưới áp lực gay gắt", "ipa": "/rɪˈzɪl.jəns/"}
        ],
        "sampleEnglishAnswer": "On the other hand, participating in competitive team athletics instills indispensable interpersonal proficiencies. Specifically, by striving toward a unified objective, adolescents learn to communicate constructively, resolve disagreements, and demonstrate resilience under intense emotional pressure.",
        "alternativeAnswers": [
            "Furthermore, group sports cultivate essential leadership traits, teaching youngsters the value of discipline, collective accountability, and mutual respect."
        ],
        "analysis": "'Resilience under intense emotional pressure' và 'striving toward a unified objective' mô tả kỹ năng sống cực kỳ thuyết phục.",
        "difficulty": "Trung cấp (650+)"
    },
    {
        "id": "trans-op-19",
        "part": "opinion_paragraphs",
        "partName": "Task Cuối: Đoạn Văn Ngắn Nền Tảng",
        "partCategory": "paragraph",
        "title": "Đoạn 19: Phản biện Counter-argument về sự cô lập khi làm việc từ xa",
        "vietnamesePrompt": "Thừa nhận rằng làm việc từ xa đôi khi có thể gây ra cảm giác xa cách đồng nghiệp, nhưng các kênh liên lạc trực tuyến hiện đại và các buổi họp ảo định kỳ hoàn toàn có thể duy trì sự gắn kết tinh thần mạnh mẽ giữa các nhân sự.",
        "targetGrammar": "Cấu trúc thừa nhận và bác bỏ (Granted that telecommuting may occasionally induce feelings of isolation, modern virtual channels can effortlessly preserve...)",
        "vocabularyHints": [
            {"word": "granted that telecommuting may induce", "meaning": "Thừa nhận rằng làm việc từ xa có thể gây ra", "ipa": "/ˈɡrɑːn.tɪd ðæt/"},
            {"word": "feelings of professional isolation", "meaning": "Cảm giác cô lập trong công việc", "ipa": "/ˌaɪ.səˈleɪ.ʃən/"},
            {"word": "robust digital collaboration platforms", "meaning": "Nền tảng cộng tác kỹ thuật số mạnh mẽ", "ipa": "/rəʊˈbʌst/"},
            {"word": "preserve vibrant camaraderie", "meaning": "Duy trì tình đồng nghiệp sôi nổi gắn bó", "ipa": "/ˌkæm.əˈrɑː.dər.i/"}
        ],
        "sampleEnglishAnswer": "Granted that telecommuting may occasionally induce feelings of professional isolation, robust digital collaboration platforms and weekly virtual check-ins effortlessly preserve vibrant team camaraderie across dispersed geographic regions.",
        "alternativeAnswers": [
            "While remote work can momentarily challenge social bonding, structured video huddles effectively sustain organizational cohesion."
        ],
        "analysis": "Từ ngữ hiếm 'vibrant team camaraderie' (tình đồng nghiệp sôi nổi gắn kết) đem lại ấn tượng từ vựng C2 hiếm thấy.",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-op-20",
        "part": "opinion_paragraphs",
        "partName": "Task Cuối: Đoạn Văn Ngắn Nền Tảng",
        "partCategory": "paragraph",
        "title": "Đoạn 20: Cấu trúc đảo ngữ C1 phủ định 'Under no circumstances'",
        "vietnamesePrompt": "Trong bất kỳ hoàn cảnh nào, các công ty sản xuất cũng không được phép đánh đổi các tiêu chuẩn bảo vệ môi trường để lấy lợi nhuận trước mắt. Việc phớt lờ xử lý rác thải công nghiệp sẽ dẫn đến những tổn hại sinh thái không thể đảo ngược.",
        "targetGrammar": "Đảo ngữ phủ định tuyệt đối (Under no circumstances should enterprises sacrifice... for the sake of...)",
        "vocabularyHints": [
            {"word": "under no circumstances should enterprises sacrifice", "meaning": "Trong bất kỳ hoàn cảnh nào doanh nghiệp cũng không nên đánh đổi", "ipa": "/ˈsɜː.kəm.stæn.sɪz/"},
            {"word": "rigorous ecological compliance", "meaning": "Sự tuân thủ nghiêm ngặt về môi trường sinh thái", "ipa": "/ˈrɪɡ.ər.əs/"},
            {"word": "short-term profitability", "meaning": "Khả năng sinh lời trong ngắn hạn", "ipa": "/ˌprɒf.ɪ.təˈbɪl.ə.ti/"},
            {"word": "irreversible ecological degradation", "meaning": "Sự suy thoái sinh thái không thể phục hồi", "ipa": "/ˌɪr.ɪˈvɜː.sə.bəl/"}
        ],
        "sampleEnglishAnswer": "Under no circumstances should industrial enterprises sacrifice rigorous environmental compliance for the sake of transient quarterly profits. Neglecting sustainable waste management inevitably inflicts irreversible ecological degradation upon surrounding communities.",
        "alternativeAnswers": [
            "At no time must corporate profitability supersede environmental stewardship, as ecological damage carries permanent repercussions."
        ],
        "analysis": "Đảo ngữ 'Under no circumstances should [S] [V-inf]' là cấu trúc ngữ pháp đỉnh cao thường xuất hiện ở thí sinh đạt điểm tuyệt đối 200/200.",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-op-21",
        "part": "opinion_paragraphs",
        "partName": "Task Cuối: Đoạn Văn Ngắn Nền Tảng",
        "partCategory": "paragraph",
        "title": "Đoạn 21: Mở bài Thesis về đầu tư hạ tầng giao thông công cộng",
        "vietnamesePrompt": "Trước tình trạng ùn tắc giao thông và ô nhiễm không khí ngày càng gia tăng tại các đô thị lớn, việc chính quyền thành phố ưu tiên nguồn ngân sách cho các tuyến xe buýt nhanh và tàu điện ngầm là một quyết sách hoàn toàn sáng suốt và cấp thiết.",
        "targetGrammar": "Mở bài nghị luận nêu vấn đề và giải pháp (Faced with mounting urban congestion, prioritizing municipal fiscal reserves toward... represents an urgently needed policy)",
        "vocabularyHints": [
            {"word": "mounting urban traffic gridlock", "meaning": "Tình trạng ùn tắc giao thông đô thị ngày càng gia tăng", "ipa": "/ˈɡrɪd.lɒk/"},
            {"word": "deteriorating atmospheric air quality", "meaning": "Chất lượng không khí khí quyển đang xấu đi", "ipa": "/dɪˈtɪə.ri.ə.reɪ.tɪŋ/"},
            {"word": "allocating municipal fiscal reserves", "meaning": "Phân bổ nguồn dự trữ tài chính của thành phố", "ipa": "/ˈæləkeɪtɪŋ mjuːˈnɪs.ɪ.pəl/"},
            {"word": "high-capacity transit infrastructure", "meaning": "Hạ tầng giao thông công cộng sức chứa lớn", "ipa": "/ˈtræn.zɪt/"}
        ],
        "sampleEnglishAnswer": "Faced with mounting urban gridlock and deteriorating air quality, prioritizing municipal budgets toward high-capacity public transit infrastructure represents an indispensable strategic decision that curtails vehicular emissions and enhances commuter efficiency.",
        "alternativeAnswers": [
            "In response to severe metropolitan traffic bottlenecks, modernizing subway networks is significantly more sustainable than widening highways."
        ],
        "analysis": "Cặp từ 'mounting urban gridlock' và 'high-capacity transit infrastructure' thể hiện kiến thức chuyên sâu về chủ đề đô thị.",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-op-22",
        "part": "opinion_paragraphs",
        "partName": "Task Cuối: Đoạn Văn Ngắn Nền Tảng",
        "partCategory": "paragraph",
        "title": "Đoạn 22: Thân bài PEEL về chương trình chăm sóc sức khỏe tinh thần",
        "vietnamesePrompt": "Thêm vào đó, việc thành lập các chương trình tư vấn tâm lý tại nơi làm việc mang lại lợi ích to lớn cho sức khỏe người lao động. Bằng cách phát hiện sớm tình trạng kiệt sức, ban nhân sự có thể kịp thời hỗ trợ nhân viên giải tỏa căng thẳng, từ đó giảm đáng kể số ngày nghỉ ốm của toàn công ty.",
        "targetGrammar": "Cấu trúc PEEL (Additionally, establishing [Program] generates... By proactively identifying..., human resources can intervene..., thereby drastically curbing...)",
        "vocabularyHints": [
            {"word": "workplace psychological wellness programs", "meaning": "Các chương trình chăm sóc sức khỏe tâm lý nơi công sở", "ipa": "/ˌsaɪ.kəˈlɒdʒ.ɪ.kəl/"},
            {"word": "proactively identifying occupational burnout", "meaning": "Chủ động nhận diện tình trạng kiệt sức do nghề nghiệp", "ipa": "/ˌɒk.jʊˈpeɪ.ʃən.əl ˈbɜːn.aʊt/"},
            {"word": "intervene before chronic distress sets in", "meaning": "Can thiệp trước khi nỗi căng thẳng mãn tính hình thành", "ipa": "/ˌɪn.təˈviːn/"},
            {"word": "drastically curbing employee absenteeism rates", "meaning": "Cắt giảm mạnh mẽ tỷ lệ vắng mặt nghỉ ốm của nhân viên", "ipa": "/ˌæb.sənˈtiː.ɪ.zəm/"}
        ],
        "sampleEnglishAnswer": "Additionally, establishing workplace psychological wellness initiatives yields immense organizational dividends. By proactively diagnosing occupational burnout, managers can intervene with supportive counseling, thereby drastically curbing chronic absenteeism and elevating daily productivity.",
        "alternativeAnswers": [
            "Corporate mental health programs protect employee wellbeing, directly reducing stress-induced sick leaves and improving staff retention."
        ],
        "analysis": "Cụm 'curbing chronic absenteeism' (cắt giảm tình trạng vắng mặt thường xuyên) là collocation kinh điển của đề thi Quản trị nhân sự TOEIC Writing.",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-op-23",
        "part": "opinion_paragraphs",
        "partName": "Task Cuối: Đoạn Văn Ngắn Nền Tảng",
        "partCategory": "paragraph",
        "title": "Đoạn 23: Nhượng bộ Concession về tự động hóa dây chuyền sản xuất",
        "vietnamesePrompt": "Mặc dù tự động hóa dây chuyền lắp ráp không thể tránh khỏi việc cắt giảm một số công việc thủ công, nó lại đồng thời tạo ra hàng ngàn vị trí kỹ thuật mới đòi hỏi chuyên môn cao như lập trình viên robot và chuyên viên bảo trì thông minh.",
        "targetGrammar": "Cấu trúc cân bằng tương phản (While industrial automation inevitably displaces certain manual occupations, it simultaneously generates thousands of high-skilled roles...)",
        "vocabularyHints": [
            {"word": "industrial robotic automation", "meaning": "Tự động hóa bằng robot công nghiệp", "ipa": "/ˌɔː.təˈmeɪ.ʃən/"},
            {"word": "inevitably displaces repetitive manual labor", "meaning": "Không thể tránh khỏi việc thay thế lao động thủ công lặp đi lặp lại", "ipa": "/dɪsˈpleɪ.sɪz/"},
            {"word": "simultaneously generates high-skilled technical vacancies", "meaning": "Đồng thời tạo ra các vị trí kỹ thuật đòi hỏi kỹ năng cao", "ipa": "/ˌsɪm.əlˈteɪ.ni.əs.li/"},
            {"word": "intelligent systems maintenance", "meaning": "Bảo trì các hệ thống thông minh", "ipa": "/ɪnˈtel.ɪ.dʒənt/"}
        ],
        "sampleEnglishAnswer": "While industrial automation inevitably displaces certain repetitive manual roles, it simultaneously generates thousands of high-skilled technical opportunities in software programming, robotics diagnostics, and intelligent systems maintenance.",
        "alternativeAnswers": [
            "Although machinery replaces physical laborers in factories, technological transformation creates lucrative career paths in systems engineering."
        ],
        "analysis": "Cặp từ đối lập 'displaces repetitive roles' và 'simultaneously generates high-skilled opportunities' thể hiện tư duy phân tích toàn diện.",
        "difficulty": "Nâng cao (800+)"
    },
    {
        "id": "trans-op-24",
        "part": "opinion_paragraphs",
        "partName": "Task Cuối: Đoạn Văn Ngắn Nền Tảng",
        "partCategory": "paragraph",
        "title": "Đoạn 24: Đoạn kết bài Punchline đỉnh cao cho Speaking Q11 & Writing Q8",
        "vietnamesePrompt": "Tóm lại, để phát triển thịnh vượng và bền vững trong kỷ nguyên số, các nhà lãnh đạo phải không ngừng nâng cao năng lực thích ứng, kiên định với các giá trị đạo đức và coi việc bồi dưỡng con người là trọng tâm của mọi chiến lược đổi mới.",
        "targetGrammar": "Cấu trúc kết bài chốt hạ cao cấp (In conclusion, sustaining long-term prosperity in the digital age necessitates unyielding adaptability, ethical stewardship, and placing human empowerment at the core of all innovation)",
        "vocabularyHints": [
            {"word": "in conclusion, sustaining long-term prosperity", "meaning": "Tóm lại, việc duy trì sự thịnh vượng lâu dài", "ipa": "/prɒsˈper.ə.ti/"},
            {"word": "necessitates unyielding adaptability", "meaning": "Đòi hỏi khả năng thích ứng không ngừng nghỉ", "ipa": "/nəˈses.ɪ.teɪts ʌnˈjiːl.dɪŋ/"},
            {"word": "ethical corporate stewardship", "meaning": "Tinh thần lãnh đạo và quản trị doanh nghiệp có đạo đức", "ipa": "/ˈeθ.ɪ.kəl ˈstjuː.əd.ʃɪp/"},
            {"word": "human empowerment at the core of innovation", "meaning": "Trao quyền cho con người làm trọng tâm của đổi mới sáng tạo", "ipa": "/ɪmˈpaʊə.mənt/"}
        ],
        "sampleEnglishAnswer": "In conclusion, sustaining long-term prosperity throughout the digital epoch necessitates unyielding adaptability, ethical corporate stewardship, and placing human empowerment at the very core of every strategic innovation.",
        "alternativeAnswers": [
            "Ultimately, visionary leadership that balances technological modernization with human welfare will consistently achieve lasting triumph in the global economy."
        ],
        "analysis": "Đoạn kết luận 36 từ mang sức nặng triết lý sâu sắc, hoàn hảo tuyệt đối để kết thúc bài thi Speaking Q11 hoặc Writing Q8 với band điểm tối đa 200/200.",
        "difficulty": "Nâng cao (800+)"
    }
]

print(f"Defined new items: W1={len(new_w1)}, W2={len(new_w2)}, S2={len(new_s2)}, S34={len(new_s34)}, OP={len(new_op)}")

def format_dict_item(d, item_num):
    lines = ["  {"]
    lines.append(f"    id: '{d['id']}',")
    lines.append(f"    itemNumber: {item_num},")
    lines.append(f"    part: '{d['part']}',")
    lines.append(f"    partName: '{d['partName']}',")
    lines.append(f"    partCategory: '{d['partCategory']}',")
    lines.append(f"    title: {json.dumps(d['title'], ensure_ascii=False)},")
    lines.append(f"    vietnamesePrompt: {json.dumps(d['vietnamesePrompt'], ensure_ascii=False)},")
    lines.append(f"    targetGrammar: {json.dumps(d['targetGrammar'], ensure_ascii=False)},")
    
    # vocab hints
    lines.append("    vocabularyHints: [")
    for vh in d['vocabularyHints']:
        ipa_part = f", ipa: '{vh['ipa']}'" if 'ipa' in vh and vh['ipa'] else ""
        lines.append(f"      {{ word: {json.dumps(vh['word'], ensure_ascii=False)}, meaning: {json.dumps(vh['meaning'], ensure_ascii=False)}{ipa_part} }},")
    # remove trailing comma from last hint
    if lines[-1].endswith(','):
        lines[-1] = lines[-1][:-1]
    lines.append("    ],")

    lines.append(f"    sampleEnglishAnswer: {json.dumps(d['sampleEnglishAnswer'], ensure_ascii=False)},")
    if 'alternativeAnswers' in d and d['alternativeAnswers']:
        lines.append("    alternativeAnswers: [")
        for alt in d['alternativeAnswers']:
            lines.append(f"      {json.dumps(alt, ensure_ascii=False)},")
        if lines[-1].endswith(','):
            lines[-1] = lines[-1][:-1]
        lines.append("    ],")

    lines.append(f"    analysis: {json.dumps(d['analysis'], ensure_ascii=False)},")
    lines.append(f"    difficulty: '{d['difficulty']}'")
    lines.append("  }")
    return "\n".join(lines)

def update_existing_block_num(block, new_num):
    # replace itemNumber: \d+ with itemNumber: new_num
    return re.sub(r'itemNumber:\s*\d+,', f'itemNumber: {new_num},', block)

# Group 1: Part 1 Writing (12 existing + 12 new = 24 items, #1 - #24)
part1_items = []
for i in range(1, 13):
    block = existing_blocks[f'trans-w1-{i}']
    part1_items.append(update_existing_block_num(block, len(part1_items) + 1))
for d in new_w1:
    part1_items.append(format_dict_item(d, len(part1_items) + 1))

# Group 2: Part 2 Writing (12 existing + 12 new = 24 items, #25 - #48)
part2_items = []
for i in range(1, 13):
    block = existing_blocks[f'trans-w2-{i}']
    part2_items.append(update_existing_block_num(block, 24 + len(part2_items) + 1))
for d in new_w2:
    part2_items.append(format_dict_item(d, 24 + len(part2_items) + 1))

# Group 3: Speaking Part 2 (12 existing + 12 new = 24 items, #49 - #72)
part3_items = []
for i in range(1, 13):
    block = existing_blocks[f'trans-s2-{i}']
    part3_items.append(update_existing_block_num(block, 48 + len(part3_items) + 1))
for d in new_s2:
    part3_items.append(format_dict_item(d, 48 + len(part3_items) + 1))

# Group 4: Speaking Part 3 & 4 (12 existing + 12 new = 24 items, #73 - #96)
part4_items = []
for i in range(1, 13):
    block = existing_blocks[f'trans-s3-{i}']
    part4_items.append(update_existing_block_num(block, 72 + len(part4_items) + 1))
for d in new_s34:
    part4_items.append(format_dict_item(d, 72 + len(part4_items) + 1))

# Group 5: Opinion Paragraphs (12 existing + 12 new = 24 items, #97 - #120)
part5_items = []
for i in range(1, 13):
    block = existing_blocks[f'trans-op-{i}']
    part5_items.append(update_existing_block_num(block, 96 + len(part5_items) + 1))
for d in new_op:
    part5_items.append(format_dict_item(d, 96 + len(part5_items) + 1))

all_items = part1_items + part2_items + part3_items + part4_items + part5_items
print(f"Total compiled items: {len(all_items)}")

file_header = """import type { TranslationItem, TranslationPart } from '../types';

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

file_body = ",\n".join(all_items)
file_footer = "\n];\n"

output_content = file_header + file_body + file_footer

with open('src/data/translationData.ts', 'w', encoding='utf-8') as f:
    f.write(output_content)

print(f"Successfully generated src/data/translationData.ts! Total chars: {len(output_content)}")

