"use client";

import { ChevronDown, Cross } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a0a] via-[#2C1810] to-[#1a0a0a]" />

            {/* Subtle pattern overlay */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #D4AF37 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, #D4AF37 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(120,0,0,0.15)_0%,_transparent_70%)]" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* Cross icon */}
                <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
                    <Cross
                        className="mx-auto text-gold/60"
                        size={40}
                        strokeWidth={1.5}
                    />
                </div>

                {/* Pre-title */}
                {/* Pre-title removed */}

                {/* Main title */}
                <h1
                    className="font-heading text-parchment text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up"
                    style={{ animationDelay: "0.6s", opacity: 0 }}
                >
                    Sự Chết, Cánh Chung
                    <br />
                    <span className="text-gold">Và Ý Nghĩa Hiện Sinh</span>
                    <br />
                    Của Đời Người
                </h1>

                {/* Subtitle */}
                <p
                    className="font-body text-parchment/60 text-base md:text-lg max-w-2xl mx-auto mb-4 leading-relaxed animate-fade-in"
                    style={{ animationDelay: "0.8s", opacity: 0 }}
                >
                    Trong Truyền Thống Công Giáo
                </p>

                {/* Ornamental line */}
                <div
                    className="flex items-center justify-center gap-3 my-8 animate-fade-in"
                    style={{ animationDelay: "1s", opacity: 0 }}
                >
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
                    <span className="text-gold/50 text-sm">✦</span>
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
                </div>

                {/* Description */}
                <p
                    className="font-body text-parchment/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed animate-fade-in"
                    style={{ animationDelay: "1.2s", opacity: 0 }}
                >
                    Nền tảng Kinh Thánh · Thánh Truyền · Huấn Quyền
                    <br />
                    Spe Salvi · Salvifici Doloris · Thánh Augustinô · Thánh Tôma Aquinô
                </p>

                {/* Scroll indicator */}
                <div
                    className="mt-16 animate-fade-in"
                    style={{ animationDelay: "1.5s", opacity: 0 }}
                >
                    <button
                        onClick={() => {
                            document
                                .getElementById("executive-summary")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-parchment/40 hover:text-gold transition-colors duration-300 cursor-pointer"
                        aria-label="Cuộn xuống"
                    >
                        <ChevronDown size={28} className="animate-float" />
                    </button>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-parchment to-transparent" />
        </section>
    );
}
