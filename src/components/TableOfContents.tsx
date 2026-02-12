"use client";

import { useState, useEffect, useRef } from "react";
import { sections } from "@/lib/reportData";
import { List, X, ChevronRight } from "lucide-react";

export default function TableOfContents() {
    const [activeSection, setActiveSection] = useState<string>("");
    const [mobileOpen, setMobileOpen] = useState(false);

    // Use a ref to store the observer so we can disconnect it
    const observer = useRef<IntersectionObserver | null>(null);

    const allSections = [
        { id: "executive-summary", label: "Tổng quan", number: "" },
        ...sections.map((s) => ({
            id: s.id,
            label: s.title,
            number: s.number,
        })),
        { id: "conclusion", label: "Kết luận", number: "" },
        { id: "summary-table", label: "Bảng Tổng hợp", number: "" },
        { id: "references", label: "Trích dẫn", number: "" },
    ];

    useEffect(() => {
        // Cleanup previous observer
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(
            (entries) => {
                // Find the first intersecting entry
                const visibleSection = entries.find((entry) => entry.isIntersecting);
                if (visibleSection) {
                    setActiveSection(visibleSection.target.id);
                }
            },
            {
                // Root margin: trigger when section crosses the top 30% of viewport
                rootMargin: "-10% 0px -80% 0px",
                threshold: 0,
            }
        );

        // Observe all sections
        allSections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.current?.observe(el);
        });

        return () => observer.current?.disconnect();
    }, []);

    // Auto-scroll sidebar to active item
    useEffect(() => {
        if (activeSection) {
            const activeLink = document.getElementById(`toc-link-${activeSection}`);
            if (activeLink) {
                activeLink.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                });
            }
        }
    }, [activeSection]);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setMobileOpen(false);
            // Manually set active to avoid observer lag during scroll
            setActiveSection(id);
        }
    };

    return (
        <>
            {/* Mobile toggle button */}
            <button
                onClick={() => setMobileOpen(true)}
                className="fixed bottom-6 left-6 z-40 lg:hidden flex items-center gap-2 px-4 py-3 rounded-full shadow-lg bg-burgundy text-parchment hover:bg-burgundy-light transition-colors cursor-pointer"
                aria-label="Mở mục lục"
            >
                <List size={20} />
                <span className="text-sm font-heading font-semibold hidden sm:inline">
                    Mục lục
                </span>
            </button>

            {/* Mobile drawer overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/50 lg:hidden animate-fade-in"
                    onClick={() => setMobileOpen(false)}
                >
                    {/* Drawer */}
                    <div
                        className="absolute bottom-0 left-0 right-0 max-h-[70vh] bg-parchment rounded-t-2xl shadow-2xl overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Handle */}
                        <div className="flex items-center justify-between p-4 border-b border-gold/20 sticky top-0 bg-parchment z-10">
                            <h3 className="font-heading text-burgundy font-bold text-lg">
                                Mục lục
                            </h3>
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="text-sepia hover:text-burgundy transition-colors cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Links */}
                        <nav className="p-4 space-y-1">
                            {allSections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollTo(section.id)}
                                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all flex items-center gap-2 cursor-pointer ${activeSection === section.id
                                        ? "bg-burgundy/10 text-burgundy font-bold border-l-4 border-gold pl-3"
                                        : "text-ink-light hover:bg-gold/10 hover:text-burgundy"
                                        }`}
                                >
                                    {section.number && (
                                        <span className="text-gold font-heading text-xs w-6">
                                            {section.number}
                                        </span>
                                    )}
                                    <ChevronRight
                                        size={14}
                                        className={`shrink-0 transition-transform ${activeSection === section.id
                                            ? "text-gold rotate-90"
                                            : "text-sepia/40"
                                            }`}
                                    />
                                    <span>{section.label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            )}

            {/* Desktop sidebar */}
            <aside className="hidden lg:block fixed left-0 top-0 w-72 h-screen bg-parchment/95 backdrop-blur-sm border-r border-gold/15 z-30 overflow-y-auto">
                {/* Header */}
                <div className="p-6 border-b border-gold/20">
                    <a href="/" className="block hover:opacity-80 transition-opacity">
                        <p className="font-heading text-burgundy text-sm font-bold tracking-wide">
                            Giáo Lý Công Giáo
                        </p>
                        <p className="font-heading text-gold text-xs tracking-wider mt-1">
                            Về Sự Chết
                        </p>
                    </a>
                </div>

                {/* Links */}
                <nav className="p-4 space-y-1">
                    {allSections.map((section) => (
                        <button
                            key={section.id}
                            id={`toc-link-${section.id}`}
                            onClick={() => scrollTo(section.id)}
                            className={`toc-link w-full text-left px-3 py-2.5 rounded-r-lg text-sm transition-all flex items-center gap-2 cursor-pointer relative ${activeSection === section.id
                                ? "active bg-burgundy/5 text-burgundy font-bold"
                                : "text-ink-light hover:text-burgundy"
                                }`}
                        >
                            {/* Active indicator line */}
                            {activeSection === section.id && (
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold rounded-r" />
                            )}

                            {section.number && (
                                <span className="text-gold font-heading text-xs font-bold w-5 shrink-0">
                                    {section.number}
                                </span>
                            )}
                            <span className="truncate">{section.label}</span>
                        </button>
                    ))}
                </nav>

                {/* Bottom ornament */}
                <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                    <span className="text-gold/30 text-xl">✦</span>
                </div>
            </aside>
        </>
    );
}
