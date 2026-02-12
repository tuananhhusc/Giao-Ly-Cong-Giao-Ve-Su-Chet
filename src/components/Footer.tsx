"use client";

import { Cross } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-16 py-10 border-t border-gold/20 bg-parchment-dark">
            <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Ornament */}
                <Cross className="mx-auto text-gold/40 mb-4" size={20} strokeWidth={1.5} />

                <p className="font-heading text-sepia text-sm tracking-wide">
                    © 2026 · Giáo Lý Công Giáo Về Sự Chết
                </p>
                <p className="text-sepia-light text-xs mt-2 italic">
                    Ad Majorem Dei Gloriam
                </p>
            </div>
        </footer>
    );
}
