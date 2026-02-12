"use client";

import { citations } from "@/lib/citations";
import { ExternalLink } from "lucide-react";

export default function ReferencesSection() {
    const citationEntries = Object.values(citations).sort((a, b) => a.id - b.id);

    return (
        <section id="references" className="scroll-mt-24 my-12">
            {/* Header */}
            <div className="ornament-divider">
                <span className="ornament-symbol">✦</span>
            </div>

            <h2 className="font-heading text-burgundy text-2xl md:text-3xl font-bold mb-6">
                Nguồn trích dẫn
            </h2>

            <div className="space-y-3">
                {citationEntries.map((citation) => (
                    <div
                        key={citation.id}
                        id={`ref-${citation.id}`}
                        className="flex gap-3 items-start py-2 px-3 rounded-lg hover:bg-parchment-dark transition-colors group"
                    >
                        <span className="font-heading text-gold font-semibold text-sm mt-0.5 w-8 shrink-0">
                            [{citation.id}]
                        </span>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm text-ink leading-relaxed">
                                {citation.shortTitle}
                            </p>
                            <a
                                href={citation.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 mt-1 text-xs text-burgundy hover:text-gold-dark transition-colors opacity-70 group-hover:opacity-100"
                            >
                                <ExternalLink size={11} />
                                <span className="truncate max-w-md">{citation.url}</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
