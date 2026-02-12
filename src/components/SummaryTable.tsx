"use client";

import { RenderText } from "./CitationSystem";
import { summaryTable } from "@/lib/reportData";

interface SummaryTableProps {
    scholarMode: boolean;
}

export default function SummaryTable({ scholarMode }: SummaryTableProps) {
    return (
        <div id="summary-table" className="scroll-mt-24 my-12">
            {/* Header */}
            <div className="ornament-divider">
                <span className="ornament-symbol">✦</span>
            </div>

            <h2 className="font-heading text-burgundy text-2xl md:text-3xl font-bold mb-6">
                Bảng Tổng hợp
            </h2>
            <p className="text-sepia text-sm mb-4 italic">
                Các Yếu tố Cấu thành Quan điểm Công giáo về Sự Chết
            </p>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                    <thead>
                        <tr>
                            {summaryTable.headers.map((h, i) => (
                                <th
                                    key={i}
                                    className="px-4 py-3 text-left font-heading font-bold bg-gradient-to-r from-burgundy to-burgundy-dark text-parchment border-b-2 border-gold"
                                >
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {summaryTable.rows.map((row, i) => (
                            <tr
                                key={i}
                                className={`${i % 2 === 0 ? "bg-parchment" : "bg-parchment-dark"
                                    } border-b border-gold/10 hover:bg-gold/5 transition-colors`}
                            >
                                <td className="px-4 py-3 font-heading font-semibold text-burgundy whitespace-nowrap">
                                    {row.element}
                                </td>
                                <td className="px-4 py-3 text-ink leading-relaxed">
                                    <RenderText text={row.theology} scholarMode={scholarMode} />
                                </td>
                                <td className="px-4 py-3 text-ink-light">
                                    <RenderText text={row.source} scholarMode={scholarMode} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
