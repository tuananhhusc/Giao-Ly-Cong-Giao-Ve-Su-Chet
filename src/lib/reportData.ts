export interface SubSection {
    id: string;
    number: string;
    title: string;
    content: string[];
}

export interface Section {
    id: string;
    number: string;
    title: string;
    subtitle: string;
    subsections: SubSection[];
}

export const reportTitle =
    "Báo cáo Nghiên cứu Thần học Chuyên sâu: Sự Chết, Cánh Chung và Ý Nghĩa Hiện Sinh của Đời Người trong Truyền thống Công giáo";

export const executiveSummary: string[] = [
    "Báo cáo này cung cấp một phân tích toàn diện và chuyên sâu về quan điểm của Giáo hội Công giáo đối với sự chết và ý nghĩa của đời người. Được xây dựng dựa trên nền tảng Kinh Thánh, Thánh Truyền, các văn kiện Huấn quyền quan trọng — đặc biệt là các Thông điệp Spe Salvi (2007), Salvifici Doloris (1984), Evangelium Vitae (1995), cùng Hiến chế Mục vụ Gaudium et Spes (1965)[37] — và tư tưởng của các Thánh Tiến sĩ như Augustinô và Tôma Aquinô, báo cáo này không chỉ dừng lại ở việc mô tả các tín điều mà còn đi sâu vào các cấu trúc bản thể luận và hiện sinh của nhân học Kitô giáo.",
    'Sách Giáo Lý Hội Thánh Công Giáo (Catechismus Catholicae Ecclesiae) khẳng định rằng «mầu nhiệm cái chết soi sáng mầu nhiệm sự sống» (x. GLHTCG 1006).[36] Vấn đề sự chết và ý nghĩa cuộc sống được Giáo hội tiếp cận không phải như những câu hỏi rời rạc, mà là những mắt xích không thể tách rời trong một "Hệ thống Cánh chung" (Eschatological System) — bao gồm nguồn gốc thánh thiêng của sự sống, sự gãy đổ do tội lỗi, tính chất cứu chuộc của đau khổ, và đích điểm tối hậu là sự phục sinh thân xác và chiêm ngắm Thiên Chúa (Beatific Vision).',
    "Hiến chế Gaudium et Spes khẳng định: «Trước cái chết, bí ẩn về thân phận con người lên đến tột đỉnh» (GS 18).[37] Báo cáo sẽ làm sáng tỏ cách niềm tin vào sự sống đời sau không hề phủ nhận giá trị của đời sống trần thế, mà trái lại, cung cấp một nền tảng đạo đức và hy vọng vững chắc để định hình thái độ sống, các quyết định luân lý-sinh học, và thực hành mục vụ trong hiện tại.",
];

export const sections: Section[] = [
    {
        id: "anthropology",
        number: "I",
        title: "Nhân học Thần học",
        subtitle: "Bản chất và Phẩm giá của Sự sống Con người",
        subsections: [
            {
                id: "anthropology-1",
                number: "1.1",
                title: 'Sự sống như một "Công trình Kỳ diệu" và Quyền Tối thượng của Thiên Chúa',
                content: [
                    'Nền tảng của mọi suy tư luân lý Công giáo về sự sống bắt nguồn từ xác tín rằng mỗi con người là một "công trình kỳ diệu của Thiên Chúa".[1] Sách Sáng Thế ký ghi: «Thiên Chúa sáng tạo con người theo hình ảnh mình, Thiên Chúa sáng tạo con người theo hình ảnh Thiên Chúa» (St 1,26-27). Sự hiện hữu của mỗi cá nhân không phải là kết quả của sự tình cờ, mà là hoa trái của một ý định yêu thương từ ngàn đời.',
                    "Con người được tạo dựng theo hình ảnh Thiên Chúa (Imago Dei). Sách Giáo Lý dạy rằng «nhờ được tạo dựng theo hình ảnh Thiên Chúa, con người có phẩm giá của một ngôi vị» (GLHTCG 357).[36] Giáo lý khẳng định rằng chỉ riêng Thiên Chúa mới là Chủ tể của sự sống; Ngài ban sự sống và chỉ Ngài mới có quyền lấy lại nó.[1] Nguyên lý này thiết lập một ranh giới đạo đức tuyệt đối: con người không có quyền tự quyết định chấm dứt mạng sống của mình hoặc của người khác.",
                    'Thông điệp Evangelium Vitae (Tin Mừng Sự Sống) của Thánh Giáo hoàng Gioan Phaolô II nhấn mạnh: «Sự sống con người là thánh thiêng và bất khả xâm phạm trong mọi giai đoạn và mọi hoàn cảnh» (EV 34).[38] Các hành vi như phá thai, làm chết êm dịu (euthanasia), tự sát, hay khủng bố không chỉ là những vi phạm về mặt nhân quyền hay pháp luật, mà về mặt bản thể luận, chúng là sự "chống lại công trình tạo dựng trong thần trí của Thiên Chúa".[1] Một xã hội, dù giàu mạnh về kinh tế hay chính trị, nếu coi mạng sống con người như "cỏ rác" hoặc một phương tiện có thể loại bỏ tùy ý, thì xã hội đó đang đi ngược lại trật tự luân lý căn bản.[1]',
                ],
            },
            {
                id: "anthropology-2",
                number: "1.2",
                title: "Tính Liên đới và Ý nghĩa của Sự hiện hữu",
                content: [
                    "Trong thần học Công giáo, ý nghĩa đời người không thể tìm thấy trong sự cô lập của chủ nghĩa cá nhân. Thiên Chúa, Đấng là Ba Ngôi (một cộng đoàn tình yêu), đã tạo dựng con người để sống trong mối tương quan. Hiến chế Gaudium et Spes dạy: «Con người, trên trần gian, là thụ tạo duy nhất mà Thiên Chúa muốn vì chính họ, nên con người chỉ có thể tìm gặp chính mình một cách trọn vẹn khi chân thành hiến dâng bản thân» (GS 24).[37]",
                    'Sự phụ thuộc lẫn nhau là một đặc tính bản thể của nhân loại. Như các tài liệu nghiên cứu chỉ ra, Thiên Chúa muốn con người phải sống lệ thuộc vào nhau; "không ai có thể sống mà không liên kết với người khác".[1] Ý nghĩa cuộc đời được dệt nên từ những sợi dây liên kết của trách nhiệm và tình yêu thương. Sách Giáo Lý nhắc lại: «Mỗi người đều có trách nhiệm với tha nhân. Mọi người đều thực sự là anh em của nhau» (GLHTCG 361).[36]',
                    'Hơn nữa, trong Thông điệp Spe Salvi, Đức Giáo hoàng Bênêđictô XVI nhấn mạnh rằng sự sống đích thực là một mối quan hệ. Nếu con người sống mà "không có Thiên Chúa" (sine Deo), dù họ có đầy đủ vật chất, họ vẫn sống trong một thế giới tối tăm và vô vọng.[2] Do đó, ý nghĩa tối hậu của đời người là thiết lập và nuôi dưỡng mối tương quan với Đấng là Nguồn Sự Sống. Sự sống đời đời, theo nghĩa này, không chỉ là thời gian kéo dài vô tận sau cái chết, mà là «chất lượng của một mối quan hệ hiệp thông trọn vẹn» với Thiên Chúa, bắt đầu ngay từ đời này (x. Ga 17,3).[3]',
                ],
            },
            {
                id: "anthropology-3",
                number: "1.3",
                title: "Thân xác và Linh hồn: Sự Thống nhất Hylomorphic",
                content: [
                    "Khác với quan điểm của phái Ngộ đạo (Gnosticism) hay Platon coi thân xác là vỏ bọc tạm thời, Công giáo - chịu ảnh hưởng của triết học Aristotle và được thánh hóa qua mầu nhiệm Nhập Thể - xem con người là một hợp thể thống nhất giữa linh hồn và thân xác. Linh hồn là mô thể (form) của thân xác.[4]",
                    'Điều này có ý nghĩa quan trọng đối với sự chết. Cái chết không phải là sự giải thoát linh hồn khỏi ngục tù thân xác, mà là một sự chia cắt đau đớn, một sự "xé rách" cấu trúc tự nhiên của con người. Vì vậy, niềm hy vọng của Kitô giáo không dừng lại ở sự bất tử của linh hồn mà hướng tới sự phục sinh của thân xác, nhằm tái lập sự toàn vẹn của nhân vị.[5]',
                ],
            },
        ],
    },
    {
        id: "phenomenology",
        number: "II",
        title: "Hiện tượng học và Thần học về Sự Chết",
        subtitle: "",
        subsections: [
            {
                id: "phenomenology-1",
                number: "2.1",
                title: "Sự Chết như Hậu quả của Tội lỗi và Giới hạn Sinh học",
                content: [
                    "Sự chết là một thực tại lưỡng diện trong thần học Công giáo: nó vừa là kẻ thù xâm nhập thế gian do tội lỗi, vừa là phương dược cứu độ nhờ ân sủng của Đức Kitô. Sách Giáo Lý dạy: «Do tội lỗi, cái chết đã xâm nhập vào thế giới của loài người» (GLHTCG 1008).[36]",
                    "Kinh Thánh và Giáo lý dạy rằng cái chết đã xâm nhập vào thế gian vì sự ghen tương của quỷ dữ và tội lỗi của con người (Kn 2,24; Rm 5,12). Trong trật tự tạo dựng ban đầu, con người được định liệu để không phải chết. Sự chết mang tính chất của một hình phạt, một sự đứt gãy trong mối quan hệ với Nguồn Sống. Tuy nhiên, «Thiên Chúa đã chiến thắng sự chết nhờ Đức Kitô» (GLHTCG 1009).[36] Thư Do Thái viết rằng Đức Kitô đã đến «làm cho kẻ thống trị cõi chết phải bị tiêu diệt» (Dt 2,14-15).",
                    "Thánh Augustinô, trong các suy tư của mình, đặc biệt là trong Thành phố Thiên Chúa (De Civitate Dei), đã phân tích sâu sắc về sự hữu hạn và cái chết. Ngài nhận thấy rằng con người luôn bị giằng xé bởi nỗi sợ hãi cái chết và khao khát sự bất tử. Sự chết đặt dấu chấm hết cho mọi dự phóng trần thế và đặt con người trước sự hư vô nếu không có Thiên Chúa. Thánh Phaolô khẳng định: «Tiền công của tội lỗi là sự chết, nhưng ân huệ của Thiên Chúa là sự sống đời đời trong Đức Kitô Giêsu» (Rm 6,23).[6]",
                ],
            },
            {
                id: "phenomenology-2",
                number: "2.2",
                title: 'Sự Chết như một "Phương Dược" (Remedy)',
                content: [
                    "Tuy nhiên, một cái nhìn sâu sắc hơn được tìm thấy trong truyền thống các Giáo phụ và được Đức Bênêđictô XVI nhắc lại trong Spe Salvi. Ngài trích dẫn Thánh Ambrôsiô để trình bày một nghịch lý: trong tình trạng sa ngã của con người, sự bất tử về thể xác sẽ không phải là ân phúc mà là một lời nguyền rủa.[3] Trong tác phẩm De Bono Mortis (Về Sự Tốt lành của Cái Chết), Thánh Ambrôsiô viết: «Chết không phải là điều xấu... nó là phương thuốc cho những điều xấu».[44]",
                    'Nếu con người phải sống mãi mãi trong một thế giới đầy dẫy tội lỗi, bất công và khổ đau mà không có lối thoát, đó sẽ là địa ngục trần gian. Do đó, Thiên Chúa đã cho phép cái chết xảy ra như một giới hạn cho sự dữ, một "phương dược" để chấm dứt sự lao nhọc. Sách Giáo Lý dạy: «Cái chết là sự kết thúc cuộc lữ hành trần thế, của thời gian ân sủng và lòng thương xót... để hoàn tất đời sống của mình theo ý định của Thiên Chúa» (GLHTCG 1013).[36]',
                ],
            },
            {
                id: "phenomenology-3",
                number: "2.3",
                title: "Mầu nhiệm Vượt qua: Sự Biến đổi của Cái Chết",
                content: [
                    "Điểm cốt lõi làm thay đổi ý nghĩa của sự chết chính là Mầu nhiệm Vượt qua (Tử nạn và Phục sinh) của Đức Giêsu Kitô. Đức Kitô không xóa bỏ cái chết về mặt sinh học ngay lập tức, nhưng Ngài đã đi vào trong lòng cái chết và biến đổi nó từ bên trong. Sách Giáo Lý dạy: «Nhờ Đức Kitô, cái chết của Kitô hữu có một ý nghĩa tích cực... Vì lẽ tôi sống là sống cho Đức Kitô, và chết là một mối lợi» (GLHTCG 1010, x. Pl 1,21).[36]",
                    'Từ một hố thẳm của sự diệt vong, cái chết trở thành "dies natalis" (ngày sinh nhật) vào sự sống đích thực. Những ai chết trong ân sủng của Đức Kitô thì tham dự vào cái chết của Người để rồi cũng sẽ tham dự vào sự phục sinh của Người.[9] Cái chết không còn là tiếng nói cuối cùng; tiếng nói cuối cùng thuộc về Thiên Chúa Tình Yêu và Sự Sống vĩnh cửu. Hiến chế Lumen Gentium khẳng định: «Đức Kitô đã chiến thắng sự chết bằng cái chết của Người và ban cho chúng ta sự sống dồi dào» (LG 48).[39]',
                ],
            },
        ],
    },
    {
        id: "suffering",
        number: "III",
        title: "Đau khổ và Ý nghĩa Cứu độ",
        subtitle: "Phân tích Thông điệp Salvifici Doloris",
        subsections: [
            {
                id: "suffering-1",
                number: "3.1",
                title: "Sự Hiện diện Tất yếu và Đa dạng của Đau khổ",
                content: [
                    "Đau khổ thường được coi là tiền đề của cái chết và là thách đố lớn nhất đối với niềm tin vào một Thiên Chúa nhân lành. Thông điệp Salvifici Doloris (Đau khổ Cứu độ, 1984) của Thánh Giáo hoàng Gioan Phaolô II — đặc biệt các số 1-9 về mầu nhiệm đau khổ — cung cấp một nền tảng thần học vững chắc để giải quyết vấn nạn này.[11]",
                    "Đau khổ gắn liền với thân phận con người từ khi sinh ra cho đến khi chết đi. Nó hiện diện dưới hai hình thức chính: đau khổ thể lý (sinh lão bệnh tử) và đau khổ luân lý/tinh thần (tội lỗi, sự phản bội, nỗi cô đơn, sự bất công).[9] Thánh Gioan Phaolô II nhận định rằng đau khổ luân lý thường sâu sắc và khó chữa lành hơn đau khổ thể xác. Sách Giáo Lý dạy rằng «bệnh tật có thể dẫn đến sự lo âu, khép kín vào mình, thậm chí tuyệt vọng hay nổi loạn chống lại Thiên Chúa; nhưng nó cũng có thể giúp con người trưởng thành hơn» (GLHTCG 1501).[36]",
                    "Trong thế giới hiện đại, con người thường tìm cách trốn tránh đau khổ bằng mọi giá (thuốc giảm đau, giải trí, thậm chí là cái chết êm dịu). Tuy nhiên, Giáo hội dạy rằng việc trốn tránh đau khổ bằng cách rút lui khỏi chân lý và tình yêu chỉ dẫn đến một cuộc sống trống rỗng và vô nghĩa.[3] Thánh Phaolô viết: «Những đau khổ bây giờ không đáng so sánh với vinh quang sẽ tỏ hiện nơi chúng ta» (Rm 8,18).",
                ],
            },
            {
                id: "suffering-2",
                number: "3.2",
                title: 'Ý nghĩa Cứu độ: "Lấp đầy những gì còn thiếu"',
                content: [
                    "Thần học Công giáo không tôn sùng đau khổ vì chính nó (đau khổ tự nó là sự ác), nhưng tôn vinh ý nghĩa mà đau khổ có thể mang lại khi kết hợp với Đức Kitô. Salvifici Doloris (số 19-27) trình bày cách đau khổ được Đức Kitô ban cho ý nghĩa cứu độ.[11]",
                    'Dựa trên lời thánh Phaolô: «Tôi vui sướng trong những đau khổ tôi chịu vì anh em, và tôi lấp đầy nơi thân xác tôi những gì còn thiếu trong các nỗi gian truân của Đức Kitô» (Cl 1,24), Giáo hội dạy rằng đau khổ của con người có khả năng trở thành hy lễ cứu độ.[11] Ngài cũng viết: «Gian truân nhẹ thoáng qua lại sản sinh cho chúng ta một khối vinh quang vô cùng lớn lao, vượt quá mọi sánh ví» (2 Cr 4,17).',
                    "Cơ chế thần học: Đức Kitô đã thực hiện ơn cứu độ hoàn tất qua đau khổ của Ngài. Tuy nhiên, Ngài để ngỏ một \"không gian\" cho đau khổ của con người tham dự vào công trình đó. Khi một người dâng hiến nỗi đau của mình (bệnh tật, bách hại, lao nhọc) vì tình yêu Chúa và Giáo hội, nỗi đau đó không còn vô ích mà trở nên nguồn ân sủng cho người khác (x. GLHTCG 1505).[36]",
                    'Mẫu gương: Thánh Phaolô Lê Bảo Tịnh trong ngục tù đã biến "địa ngục trần gian" thành nơi ngợi khen Chúa, minh chứng rằng đau khổ có thể được "ngọt ngào hóa" nhờ tình yêu và hy vọng. Thánh Phaolô khuyến khích: «Nếu ta cùng chịu đau khổ với Đức Kitô, ta sẽ cùng được hưởng vinh quang với Người» (Rm 8,17).[3]',
                ],
            },
            {
                id: "suffering-3",
                number: "3.3",
                title: 'Đau khổ như "Trường học của Hy vọng" và Tình Liên đới',
                content: [
                    "Đức Bênêđictô XVI trong Spe Salvi coi đau khổ là một trong những môi trường chính để học biết hy vọng.",
                    "Thanh luyện: Đau khổ tước bỏ những điểm tựa giả tạo của trần thế, buộc con người phải đối diện với chính mình và tìm kiếm nền tảng hy vọng đích thực nơi Thiên Chúa.[3]",
                    "Compassion (Chịu khổ cùng): Khả năng chịu khổ cùng với người khác là thước đo của nhân tính. Một xã hội không thể chấp nhận và đồng hành với người đau khổ là một xã hội tàn nhẫn. Kitô giáo mời gọi các tín hữu không chỉ xoa dịu nỗi đau (bác ái y tế) mà còn hiện diện và chia sẻ nỗi đau đó về mặt tinh thần.[3]",
                ],
            },
        ],
    },
    {
        id: "eschatology",
        number: "IV",
        title: "Cánh Chung Học",
        subtitle: "Bốn Sự Sau Cùng (Novissima)",
        subsections: [
            {
                id: "eschatology-1",
                number: "4.1",
                title: "Phán Xét: Công lý và Trách nhiệm",
                content: [
                    'Giáo lý về "Những sự sau cùng" (Novissima) là chìa khóa để giải mã ý nghĩa cuộc đời hiện tại. Sách Giáo Lý dạy: «Mỗi người lãnh nhận phần thưởng đời đời trong linh hồn bất tử ngay sau khi chết, trong một cuộc phán xét riêng» (GLHTCG 1022).[36]',
                    "Sau cái chết, mỗi người sẽ đối diện với Phán xét Riêng (GLHTCG 1021-1022), và vào ngày tận thế là Phán xét Chung (GLHTCG 1038-1041). Đức Giêsu dạy trong dụ ngôn Phán xét cuối cùng: «Khi Con Người đến trong vinh quang... Người sẽ tách biệt họ ra, như mục tử tách chiên ra khỏi dê» (Mt 25,31-33).[36]",
                    "Bối cảnh của Hy vọng: Thông điệp Spe Salvi (số 41-48) trình bày Phán xét như một bối cảnh để học tập hy vọng. Thiên Chúa là Đấng công minh và nhân hậu. Phán xét là lúc sự thật về lịch sử và mỗi cá nhân được phơi bày.[3]",
                    "Sự cần thiết của Công lý: Niềm hy vọng Kitô giáo đòi hỏi sự phục hồi công lý. Nếu không có phán xét, những kẻ gây ra tội ác trong lịch sử sẽ không bao giờ phải trả giá. Tông hiến Benedictus Deus (1336) của Đức Giáo hoàng Bênêđictô XII đã tuyên bố tín điều rằng các linh hồn được nhìn thấy Thiên Chúa ngay sau cái chết (nếu không cần thanh luyện).[40]",
                    "Sự đan xen giữa Công lý và Ân sủng: Nếu chỉ có công lý tuyệt đối, con người sẽ run sợ. Nếu chỉ có ân sủng dễ dãi, công lý sẽ bị bóp méo. Tin Mừng là sự kết hợp của cả hai: Thiên Chúa phán xét tội lỗi nhưng ban ân sủng cho tội nhân biết sám hối.[3]",
                ],
            },
            {
                id: "eschatology-2",
                number: "4.2",
                title: "Luyện ngục: Mầu nhiệm của Sự Thanh Luyện và Tình Yêu",
                content: [
                    'Luyện ngục là một giáo lý đặc thù của Công giáo, thường bị hiểu lầm là một "hỏa ngục tạm thời". Sách Giáo Lý dạy: «Những người chết trong ân sủng và tình thân của Thiên Chúa, nhưng chưa được thanh luyện hoàn toàn... phải trải qua cuộc thanh luyện sau khi chết, để đạt tới sự thánh thiện cần thiết» (GLHTCG 1030).[36]',
                    'Thanh luyện bằng Tình yêu: Rất ít người chết trong tình trạng thánh thiện trọn vẹn để lập tức đối diện với Thiên Chúa. Luyện ngục là trạng thái trung gian nơi "lửa tình yêu" của Thiên Chúa thanh tẩy mọi tàn dư của tội lỗi, sự quy ngã và những dính bén trần tục. Thánh Phaolô viết: «Công trình mỗi người sẽ lộ ra; ngày ấy sẽ phô bày, vì ngày ấy tỏ mình trong lửa; và lửa sẽ thử nghiệm giá trị công trình mỗi người» (1 Cr 3,13-15).[3]',
                    "Hiệp thông các Thánh (Communio Sanctorum): Giáo lý Luyện ngục là biểu hiện cao nhất của tính hiệp thông (x. GLHTCG 946-962). Ranh giới giữa sự sống và sự chết không cắt đứt được tình yêu. Người sống có thể hỗ trợ các linh hồn nơi Luyện ngục qua lời cầu nguyện, hy sinh, làm việc thiện và đặc biệt là dâng Thánh lễ (x. GLHTCG 1032).[15] Điều này khẳng định rằng không ai phải chịu cứu độ hay trầm luân một mình; chúng ta liên đới với nhau trong hành trình về Nhà Cha.[1]",
                ],
            },
            {
                id: "eschatology-3",
                number: "4.3",
                title: "Hỏa ngục: Bi kịch của Tự do",
                content: [
                    "Hỏa ngục là khả năng thực sự của việc con người sử dụng tự do để dứt khoát từ chối tình yêu Thiên Chúa. Sách Giáo Lý dạy: «Chết trong tội trọng mà không thống hối và không đón nhận tình yêu thương xót của Thiên Chúa, đó là tự lựa chọn bị tách khỏi Thiên Chúa mãi mãi» (GLHTCG 1033).[36]",
                    "Tự do chọn lựa: Thiên Chúa không tiền định cho ai xuống hỏa ngục (x. GLHTCG 1037). Hỏa ngục là tình trạng con người tự loại mình ra khỏi sự hiệp thông với Thiên Chúa. Đức Giêsu cảnh báo: «Hãy đi cho khuất mắt Ta, hỡi những kẻ đáng nguyền rủa, mà vào lửa mãi mãi đã dịn sẵn cho tên Quỷ và bọn thuộc hạ của chúng» (Mt 25,41).[18]",
                    "Cảnh tỉnh: Giáo lý này là lời kêu gọi trách nhiệm sử dụng tự do trong cuộc đời hiện tại. Nó nhắc nhở rằng các hành động và lựa chọn của chúng ta có sức nặng vĩnh cửu.[19]",
                ],
            },
            {
                id: "eschatology-4",
                number: "4.4",
                title: "Thiên đàng và Chiêm ngắm Thiên Chúa (Beatific Vision)",
                content: [
                    "Cùng đích của đời người là Thiên đàng, hay Hạnh phúc Vĩnh cửu. Sách Giáo Lý dạy: «Những ai chết trong ân sủng và tình thân của Thiên Chúa và đã được thanh luyện hoàn toàn, sẽ sống muôn đời với Đức Kitô. Họ sẽ vĩnh viễn giống Thiên Chúa, vì họ sẽ nhìn thấy Ngài như Ngài là» (GLHTCG 1023, x. 1 Ga 3,2).[36]",
                    'Chiêm ngắm Thiên Chúa (Beatific Vision): Theo Thánh Tôma Aquinô, hạnh phúc tối thượng của con người không nằm ở khoái lạc hay danh vọng, mà ở hoạt động cao quý nhất của trí tuệ: nhận biết và chiêm ngắm bản thể Thiên Chúa "diện đối diện" (Beatific Vision).[20] Sách Khải Huyền mô tả: «Thiên Chúa sẽ lau sạch nước mắt họ. Sẽ không còn sự chết, cũng chẳng còn tang tóc, kêu la hay đau đớn» (Kh 21,4).',
                    'Sự Sống Đời Đời: Đức Bênêđictô XVI giải thích rằng "sự sống đời đời" không phải là sự kéo dài vô tận của chuỗi ngày tháng (điều sẽ gây nhàm chán), mà là một «khoảnh khắc» viên mãn của tình yêu, giống như việc đắm mình trong đại dương vô tận của sự sống trọn vẹn (GLHTCG 1024-1029).[2]',
                ],
            },
        ],
    },
    {
        id: "resurrection",
        number: "V",
        title: "Sự Phục Sinh Thân Xác",
        subtitle: "Phục hồi Sự Toàn Vẹn Nhân Linh",
        subsections: [
            {
                id: "resurrection-1",
                number: "5.1",
                title: "Nền tảng Kinh Thánh và Thần học",
                content: [
                    "Một điểm khác biệt căn bản giữa Kitô giáo và nhiều triết thuyết cổ đại là niềm tin vào sự phục sinh của thân xác, chứ không chỉ sự bất tử của linh hồn. Sách Giáo Lý dạy: «Tin vào Phục Sinh của người chết là yếu tố cốt yếu của đức tin Kitô giáo từ những buổi sơ khai» (GLHTCG 991).[36] Công đồng Latranô IV (1215) đã tuyên bố: «Mọi người sẽ sống lại với chính thân xác của mình để chịu phán xét».",
                    'Niềm tin này dựa trên sự phục sinh của chính Đức Kitô. Ngôi mộ trống và các lần hiện ra của Ngài chứng minh rằng thân xác không bị hủy bỏ mà được biến đổi.[23] Thánh Phaolô khẳng định: «Nếu kẻ chết không trỗi dậy, thì Đức Kitô cũng đã không trỗi dậy... và đức tin của anh em là hão huyền» (1 Cr 15,16-17). Tertullian trong De Resurrectione Carnis (Về Sự Phục Sinh Thân Xác) viết: «Thân xác sẽ sống lại... chính thân xác này».[45]',
                ],
            },
            {
                id: "resurrection-2",
                number: "5.2",
                title: "Bản chất của Thân xác Phục sinh theo Thánh Tôma Aquinô",
                content: [
                    'Dựa trên các phân tích thần học kinh viện, Thánh Tôma Aquinô (trong Summa Theologica và phần Bổ sung) mô tả thân xác phục sinh sẽ có các đặc tính của "thân xác khí huyết" (spiritual body):[4]',
                    "Sáng láng (Clarity): Thân xác sẽ phản chiếu vinh quang của linh hồn, không còn tối tăm hay mờ đục.",
                    "Bất thụ khổ (Impassibility): Không còn chịu đau đớn, bệnh tật, hay sự chết.",
                    "Lanh lẹ (Agility): Thân xác sẽ tuân phục hoàn toàn sự chỉ huy của linh hồn, di chuyển và hành động không bị cản trở bởi trọng lực hay không gian.",
                    "Tinh tế (Subtlety): Thân xác hoàn toàn chịu sự chi phối của tinh thần, thoát khỏi các nhu cầu sinh học nặng nề (như ăn uống để duy trì sự sống), dù vẫn là thân xác thật.",
                ],
            },
            {
                id: "resurrection-3",
                number: "5.3",
                title: 'Thánh Augustinô và "Thành phố Thiên Chúa"',
                content: [
                    'Trong Quyển 22 của tác phẩm Thành phố Thiên Chúa, Thánh Augustinô biện hộ mạnh mẽ cho sự phục sinh thân xác trước sự chế giễu của người ngoại giáo. Ngài lập luận rằng Thiên Chúa toàn năng, Đấng đã tạo dựng thế giới từ hư vô, chắc chắn có quyền năng tái tạo thân xác con người từ tro bụi. Ngài khẳng định rằng trong Nước Trời, chúng ta sẽ không chỉ là những linh hồn bay lượn mà là những con người trọn vẹn, được "nhìn thấy, yêu mến và ngợi khen" Thiên Chúa với cả thể xác và linh hồn.[25]',
                ],
            },
        ],
    },
    {
        id: "hope",
        number: "VI",
        title: "Hy Vọng",
        subtitle: "Chìa khóa Giải mã Cuộc sống Hiện tại",
        subsections: [
            {
                id: "hope-1",
                number: "6.1",
                title: "Đức Tin là Chất liệu (Hypostasis) của Hy Vọng",
                content: [
                    "Thông điệp Spe Salvi (số 4-15) khẳng định rằng niềm hy vọng về sự sống đời sau không làm con người xa rời thực tại, mà trái lại, cung cấp năng lượng và định hướng cho cuộc sống này. Sách Giáo Lý dạy: «Nhân đức hy vọng đáp ứng khát vọng hạnh phúc mà Thiên Chúa đặt vào lòng con người» (GLHTCG 1818).[36]",
                    'Đức Bênêđictô XVI phân tích câu Kinh Thánh Dt 11,1: «Đức tin là bảo đảm (hypostasis) cho những điều ta hy vọng». Đức tin không chỉ là sự vươn tới cái chưa biết, mà là sự nắm giữ thực tại tương lai ngay trong hiện tại. Thánh Phêrô viết: «Chúc tụng Thiên Chúa... Đấng đã cho chúng ta được tái sinh vào một niềm hy vọng sống động, nhờ Đức Giêsu Kitô đã từ cõi chết sống lại» (1 Pr 1,3). Hy vọng này «iến đổi cuộc đời» (performative) — nó thay đổi cách con người sống, chịu đựng và yêu thương.[2] Như Thư Do Thái nói: «Niềm hy vọng đó như cái neo vững chắc cho tâm hồn» (Dt 6,19).',
                ],
            },
            {
                id: "hope-2",
                number: "6.2",
                title: 'Phê phán các "Niềm hy vọng" Trần thế',
                content: [
                    "Báo cáo cũng ghi nhận sự phê phán của Giáo hội đối với các ý thức hệ hiện đại (như chủ nghĩa Mác, niềm tin mù quáng vào khoa học kỹ thuật) vốn hứa hẹn xây dựng thiên đàng ngay trên trần thế. Lịch sử cho thấy khi con người cố gắng tạo ra thiên đàng mà loại bỏ Thiên Chúa, họ thường tạo ra địa ngục. Hy vọng vào chính trị hay khoa học là không đủ vì chúng không thể giải quyết vấn đề cái chết và tội lỗi. Chỉ có Thiên Chúa mới là niềm hy vọng vững chắc.[2]",
                ],
            },
        ],
    },
    {
        id: "pastoral",
        number: "VII",
        title: "Thực hành Mục vụ và Phụng vụ",
        subtitle: "Đồng hành trong Sự Chết",
        subsections: [
            {
                id: "pastoral-1",
                number: "7.1",
                title: "Bí tích Xức Dầu Bệnh Nhân",
                content: [
                    "Giáo hội Công giáo thể hiện thần học về sự chết qua các thực hành mục vụ và phụng vụ cụ thể, nhằm xoa dịu nỗi đau và củng cố niềm tin. Sách Giáo Lý dạy: «Bí tích Xức Dầu Bệnh Nhân ban ân sủng đặc biệt cho những Kitô hữu đang chịu thử thách vì bệnh tật trầm trọng hay tuổi già» (GLHTCG 1527).[36]",
                    'Đây không phải là "nghi thức cuối cùng" chỉ dành cho người sắp tắt thở, mà là Bí tích chữa lành và củng cố. Tông hiến Sacram Unctionem Infirmorum (1972) của Đức Phaolô VI đã cải tổ Bí tích này, khẳng định nó dành cho người bị bệnh nặng, chứ không chỉ cho người hấp hối.[41]',
                    "Cơ sở Kinh Thánh: Dựa trên thư Giacôbê: «Ai trong anh em đau yếu, hãy mời các niên trưởng đến cầu nguyện và xức dầu cho người ấy nhân danh Chúa» (Gc 5,14-16). Đức Giêsu phán: «Ta là sự phục sinh và là sự sống. Ai tin vào Ta, dầu có chết cũng sẽ sống» (Ga 11,25-26).",
                    "Hiệu quả Thần học: Trao ban ơn Chúa Thánh Thần để người bệnh có sức mạnh chống lại sự chán nản, sợ hãi trước cái chết. Nó mang lại sự chữa lành tâm linh (tha tội) và đôi khi cả sự hồi phục thể lý nếu điều đó tốt cho phần rỗi linh hồn (x. GLHTCG 1520-1523).[28]",
                ],
            },
            {
                id: "pastoral-2",
                number: "7.2",
                title: "Nghi thức An táng (Order of Christian Funerals)",
                content: [
                    "Nghi thứ an táng Công giáo (Ordo Exsequiarum, 1969) là một hành trình phụng vụ gồm ba trạm chính, được thiết kế để diễn tả niềm hy vọng phục sinh (x. GLHTCG 1684-1690):[42]",
                    "Canh thức (Vigil): Cộng đoàn quy tụ cầu nguyện, lắng nghe Lời Chúa và an ủi gia đình.",
                    "Thánh lễ An táng: Trung tâm của nghi thức. Giáo hội dâng hiến người quá cố cho Thiên Chúa, tưởng niệm cái chết và phục sinh của Đức Kitô. Các biểu tượng như Nến Phục sinh, nước thánh, khăn trắng nhắc nhớ đến Bí tích Rửa tội — nguồn gốc của niềm hy vọng phục sinh.[28]",
                    'Nghi thức Phó dâng và Tiễn biệt (Committal): Tại nơi an nghỉ, cộng đoàn tiễn biệt với niềm hy vọng "hẹn gặp lại" trong ngày phục sinh.',
                ],
            },
            {
                id: "pastoral-3",
                number: "7.3",
                title: "Hỏa táng và Địa táng",
                content: [
                    "Giáo hội Công giáo ưu tiên địa táng (chôn cất) vì nó mô phỏng việc mai táng Chúa Giêsu và thể hiện rõ nét sự tôn trọng đối với thân xác chờ ngày phục sinh.",
                    "Quy định về Hỏa táng: Từ năm 1963, Giáo hội cho phép hỏa táng, miễn là không vì lý do chối bỏ đức tin vào sự phục sinh. Bộ Giáo Luật (CIC 1983, Canon 1176 §3) ghi rõ: «Giáo hội tha thiết khủyên dân tín hữu giữ phép đạo chôn cất thân xác, nhưng không cấm hỏa táng».[43] Theo thống kê của Hội đồng Giám mục Hoa Kỳ (USCCB), tỷ lệ hỏa táng tại Mỹ đạt khoảng 60% tính đến những năm 2020.",
                    "Xử lý Tro cốt: Tro cốt sau hỏa táng phải được lưu giữ nơi thánh thiêng (nghĩa trang, nhà thờ). Giáo hội nghiêm cấm việc rải tro cốt ra thiên nhiên, chia nhỏ tro cốt cho người thân, hay chế tác thành đồ trang sức. Những hành động này bị coi là thiếu tôn trọng tính toàn vẹn của thân xác và mang màu sắc của thuyết phiếm thần hoặc chủ nghĩa hư vô.[31]",
                ],
            },
        ],
    },
];

export const conclusion: string[] = [
    'Qua lăng kính thần học Công giáo, ý nghĩa đời người được định hình bởi chính đích đến của nó: sự hiệp thông vĩnh cửu với Thiên Chúa. Sự chết, dù vẫn là một mầu nhiệm đau thương, đã bị tước mất "nọc độc" nhờ Đức Kitô. Hiến chế Gaudium et Spes đúc kết: «Nhờ Đức Kitô và trong Đức Kitô, bí ẩn của đau khổ và sự chết được soi sáng» (GS 22).[37]',
    'Cuộc sống hiện tại mang tính chất của một cuộc hành hương và chuẩn bị. Mỗi hành động yêu thương, mỗi đau khổ được đón nhận, mỗi nỗ lực bảo vệ sự sống đều mang giá trị vĩnh cửu. Như Thánh Augustinô đã thốt lên trong cuốn Tự Thuật (Confessiones): «Lạy Chúa, Chúa đã dựng nên con cho Chúa, và tâm hồn con khắc khoải cho đến khi được nghỉ yên trong Chúa».[6] Sự "nghỉ yên" đó không phải là sự hủy diệt, mà là sự sống động tột cùng trong tình yêu, nơi sự chết và ý nghĩa đời người tìm thấy câu trả lời cuối cùng.',
];

export const comparisonTable = {
    headers: ["Khía cạnh của Sự Chết", "Quan điểm Thế tục/Vô thần", "Quan điểm Công giáo"],
    rows: [
        {
            aspect: "Bản chất",
            secular: "Sự hủy diệt hoàn toàn của ý thức và bản ngã.",
            catholic: "Sự tách biệt tạm thời giữa hồn và xác; cửa ngõ vào sự sống vĩnh cửu.",
        },
        {
            aspect: "Nguyên nhân",
            secular: "Quy luật sinh học tất yếu, lỗi của tiến hóa.",
            catholic: "Hậu quả của Tội Nguyên Tổ, nhưng được Thiên Chúa cho phép như phương dược.",
        },
        {
            aspect: "Thái độ",
            secular: "Sợ hãi, chối bỏ, hoặc chấp nhận phi lý (nihilism).",
            catholic: "Hy vọng, phó thác, tham dự vào Mầu nhiệm Vượt qua của Đức Kitô.",
        },
        {
            aspect: "Hệ quả đạo đức",
            secular: 'Tìm kiếm khoái lạc tối đa trong đời này ("YOLO").',
            catholic: "Sống trách nhiệm, chuẩn bị cho sự phán xét, tích lũy công phúc.",
        },
    ],
};

export const summaryTable = {
    headers: ["Yếu tố", "Nội dung Thần học Cốt lõi", "Nguồn tham chiếu chính"],
    rows: [
        {
            element: "Nguồn gốc Sự sống",
            theology: "Ân ban thần linh, Imago Dei, bất khả xâm phạm.",
            source: "[1]",
        },
        {
            element: "Bản chất Sự chết",
            theology: "Hậu quả tội lỗi, phương dược giới hạn sự dữ, cửa ngõ gặp Chúa.",
            source: "[3]",
        },
        {
            element: "Đau khổ",
            theology: "Tham dự vào Thập giá Đức Kitô, mang tính cứu độ và giáo dục.",
            source: "[9]",
        },
        {
            element: "Thân xác",
            theology: "Đền thờ Thánh Thần, sẽ phục sinh trong vinh quang (không chỉ linh hồn).",
            source: "[5]",
        },
        {
            element: "Cánh chung",
            theology: "Phán xét công minh, Thanh luyện (Luyện ngục), Chiêm ngắm Chúa (Thiên đàng).",
            source: "[14]",
        },
        {
            element: "Thực hành",
            theology: "Cầu nguyện cho người chết, tôn trọng thi hài/tro cốt, Thánh lễ an táng.",
            source: "[16]",
        },
    ],
};
