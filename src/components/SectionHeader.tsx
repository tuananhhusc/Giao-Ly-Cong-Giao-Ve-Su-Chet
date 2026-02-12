"use client";

interface SectionHeaderProps {
    number: string;
    title: string;
    subtitle?: string;
    id?: string;
}

export default function SectionHeader({ number, title, subtitle, id }: SectionHeaderProps) {
    return (
        <div id={id} className="scroll-mt-24 mb-8 pt-12">
            {/* Ornamental divider */}
            <div className="ornament-divider">
                <span className="ornament-symbol">✦</span>
            </div>

            {/* Section number */}
            <p className="font-heading text-gold text-sm tracking-[0.3em] uppercase mb-2 font-semibold">
                Chương {number}
            </p>

            {/* Title */}
            <h2 className="font-heading text-burgundy text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2">
                {title}
            </h2>

            {/* Subtitle */}
            {subtitle && (
                <p className="font-body text-sepia text-base md:text-lg italic">
                    {subtitle}
                </p>
            )}

            {/* Bottom rule */}
            <div className="mt-4 h-px bg-gradient-to-r from-gold via-gold-light to-transparent w-48" />
        </div>
    );
}
