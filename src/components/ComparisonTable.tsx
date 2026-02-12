"use client";

import { RenderText } from "./CitationSystem";

interface ComparisonTableProps {
    scholarMode: boolean;
}

export default function ComparisonTable({ scholarMode }: ComparisonTableProps) {
    const headers = ["Khía cạnh", "Quan điểm Thế tục / Vô thần", "Quan điểm Công giáo"];

    const rows = [
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
            secular: "Tìm kiếm khoái lạc tối đa trong đời này (\"YOLO\").",
            catholic: "Sống trách nhiệm, chuẩn bị cho sự phán xét, tích lũy công phúc.",
        },
    ];

    return (
        <div className="my-8 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
                <thead>
                    <tr>
                        {headers.map((h, i) => (
                            <th
                                key={i}
                                className="px-4 py-3 text-left font-heading font-bold text-parchment bg-burgundy border-b-2 border-gold"
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr
                            key={i}
                            className={`${i % 2 === 0 ? "bg-parchment" : "bg-parchment-dark"
                                } border-b border-gold/10`}
                        >
                            <td className="px-4 py-3 font-heading font-semibold text-burgundy whitespace-nowrap">
                                {row.aspect}
                            </td>
                            <td className="px-4 py-3 text-ink-light">
                                <RenderText text={row.secular} scholarMode={scholarMode} />
                            </td>
                            <td className="px-4 py-3 text-ink">
                                <RenderText text={row.catholic} scholarMode={scholarMode} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
