"use client";

import { BookOpen, GraduationCap } from "lucide-react";

interface ScholarModeToggleProps {
    scholarMode: boolean;
    onToggle: () => void;
}

export default function ScholarModeToggle({ scholarMode, onToggle }: ScholarModeToggleProps) {
    return (
        <button
            onClick={onToggle}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl group cursor-pointer"
            style={{
                backgroundColor: scholarMode ? "#780000" : "#FDFBF7",
                color: scholarMode ? "#FDFBF7" : "#780000",
                border: `2px solid ${scholarMode ? "#D4AF37" : "#78000030"}`,
            }}
            aria-label={scholarMode ? "Chuyển sang Chế độ Đọc" : "Chuyển sang Chế độ Nghiên cứu"}
            title={scholarMode ? "Chế độ Nghiên cứu (Đang bật)" : "Chế độ Đọc"}
        >
            {scholarMode ? (
                <>
                    <GraduationCap size={20} />
                    <span className="text-sm font-heading font-semibold hidden sm:inline">
                        Chế độ Nghiên cứu
                    </span>
                </>
            ) : (
                <>
                    <BookOpen size={20} />
                    <span className="text-sm font-heading font-semibold hidden sm:inline">
                        Chế độ Đọc
                    </span>
                </>
            )}
        </button>
    );
}
