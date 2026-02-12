"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { citations } from "@/lib/citations";
import { ExternalLink } from "lucide-react";

interface CitationTooltipProps {
    citationId: number;
    scholarMode: boolean;
}

function CitationTooltip({ citationId, scholarMode }: CitationTooltipProps) {
    const [show, setShow] = useState(false);
    const tooltipRef = useRef<HTMLSpanElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const citation = citations[citationId];

    const handleEnter = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setShow(true);
    }, []);

    const handleLeave = useCallback(() => {
        timeoutRef.current = setTimeout(() => setShow(false), 200);
    }, []);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    if (!citation) {
        return <sup className="citation-ref">[{citationId}]</sup>;
    }

    return (
        <span className="relative inline" ref={tooltipRef}>
            <sup
                className="citation-ref"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                onClick={() => setShow(!show)}
                role="button"
                aria-label={`Trích dẫn ${citationId}`}
                tabIndex={0}
            >
                [{citationId}]
            </sup>

            {/* Tooltip */}
            {show && (
                <span
                    className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-3 bg-white rounded-lg shadow-xl border border-gold/30 animate-fade-in"
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                >
                    <span className="block text-xs text-gold font-heading font-semibold mb-1">
                        Trích dẫn [{citationId}]
                    </span>
                    <span className="block text-sm text-ink leading-relaxed">
                        {citation.shortTitle}
                    </span>
                    <a
                        href={citation.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-xs text-burgundy hover:text-gold-dark transition-colors"
                    >
                        <ExternalLink size={12} />
                        Xem nguồn
                    </a>
                    {/* Tooltip arrow */}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-white" />
                </span>
            )}

            {/* Side-note in Scholar Mode (desktop only) */}
            {scholarMode && (
                <span className="hidden xl:block absolute left-full ml-8 top-0 w-56 text-xs text-sepia leading-relaxed pl-3 border-l-2 border-gold/40">
                    <span className="font-semibold text-gold">[{citationId}]</span>{" "}
                    {citation.shortTitle}
                </span>
            )}
        </span>
    );
}

interface RenderTextProps {
    text: string;
    scholarMode: boolean;
}

const THEOLOGICAL_KEYWORDS = [
    "Imago Dei",
    "Beatific Vision",
    "Mầu nhiệm Vượt qua",
    "Spe Salvi",
    "Salvifici Doloris",
    "Communio Sanctorum",
    "dies natalis",
    "Hylomorphic",
    "Novissima",
    "sine Deo",
    "hypostasis",
    "Summa Theologica",
    "Evangelium Vitae",
    "Gaudium et Spes",
    "Lumen Gentium",
    "Benedictus Deus",
    "De Civitate Dei",
    "Confessiones",
    "De Bono Mortis",
    "De Resurrectione Carnis",
    "Ordo Exsequiarum",
    "Sacram Unctionem",
];

export function RenderText({ text, scholarMode }: RenderTextProps) {
    // Split text by citation markers [n] and render them as tooltips
    const parts = text.split(/(\[\d+\])/g);

    const rendered = parts.map((part, i) => {
        const match = part.match(/^\[(\d+)\]$/);
        if (match) {
            return (
                <CitationTooltip
                    key={i}
                    citationId={parseInt(match[1])}
                    scholarMode={scholarMode}
                />
            );
        }

        // In scholar mode, highlight theological keywords
        if (scholarMode) {
            let highlighted: React.ReactNode = part;
            for (const keyword of THEOLOGICAL_KEYWORDS) {
                if (typeof highlighted === "string" && highlighted.includes(keyword)) {
                    const keyParts = highlighted.split(keyword);
                    const elements: React.ReactNode[] = [];
                    keyParts.forEach((kp, ki) => {
                        if (ki > 0) {
                            elements.push(
                                <span key={`kw-${i}-${ki}`} className="scholar-keyword">
                                    {keyword}
                                </span>
                            );
                        }
                        elements.push(kp);
                    });
                    highlighted = <>{elements}</>;
                }
            }
            return <span key={i}>{highlighted}</span>;
        }

        return <span key={i}>{part}</span>;
    });

    return <>{rendered}</>;
}

interface ContentRendererProps {
    paragraphs: string[];
    scholarMode: boolean;
}

export default function ContentRenderer({ paragraphs, scholarMode }: ContentRendererProps) {
    return (
        <div className="prose-sacred space-y-4">
            {paragraphs.map((para, idx) => (
                <p key={idx} className="text-ink leading-[1.8] text-[1.0625rem]">
                    <RenderText text={para} scholarMode={scholarMode} />
                </p>
            ))}
        </div>
    );
}
