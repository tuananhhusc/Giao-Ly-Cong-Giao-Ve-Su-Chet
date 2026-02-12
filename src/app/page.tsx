"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import TableOfContents from "@/components/TableOfContents";
import SectionHeader from "@/components/SectionHeader";
import ContentRenderer, { RenderText } from "@/components/CitationSystem";
import ScholarModeToggle from "@/components/ScholarModeToggle";
import ComparisonTable from "@/components/ComparisonTable";
import SummaryTable from "@/components/SummaryTable";
import ReferencesSection from "@/components/ReferencesSection";
import Footer from "@/components/Footer";
import { sections, executiveSummary, conclusion } from "@/lib/reportData";
import { BookOpen } from "lucide-react";

export default function Home() {
  const [scholarMode, setScholarMode] = useState(false);

  return (
    <>
      {/* TOC (fixed sidebar / mobile drawer) */}
      <TableOfContents />

      {/* Scholar Mode Toggle */}
      <ScholarModeToggle
        scholarMode={scholarMode}
        onToggle={() => setScholarMode(!scholarMode)}
      />

      {/* Main content area — offset for desktop sidebar */}
      <main className="lg:ml-72">
        {/* Hero */}
        <Hero />

        {/* Content container */}
        <div className="max-w-3xl mx-auto px-6 md:px-8 pb-12">
          {/* ── Executive Summary ────────────────────────────── */}
          <section id="executive-summary" className="scroll-mt-24 pt-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-gold" size={24} strokeWidth={1.5} />
              <h2 className="font-heading text-burgundy text-2xl md:text-3xl font-bold">
                Dẫn Nhập
              </h2>
            </div>
            <div className="pl-4 border-l-2 border-gold/30">
              <ContentRenderer
                paragraphs={executiveSummary}
                scholarMode={scholarMode}
              />
            </div>
          </section>

          {/* ── Main Sections I–VII ──────────────────────────── */}
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="relative scroll-mt-24">
              <SectionHeader
                number={section.number}
                title={section.title}
                subtitle={section.subtitle || undefined}
              />

              {/* Subsections */}
              <div className="space-y-10">
                {section.subsections.map((sub) => (
                  <div key={sub.id} id={sub.id} className="scroll-mt-24">
                    {/* Subsection heading */}
                    <h3 className="font-heading text-burgundy-light text-lg md:text-xl font-semibold mb-4 flex items-baseline gap-2">
                      {sub.title}
                    </h3>

                    {/* Content */}
                    <ContentRenderer
                      paragraphs={sub.content}
                      scholarMode={scholarMode}
                    />
                  </div>
                ))}
              </div>

              {/* Comparison table inside Section II (phenomenology) */}
              {section.id === "phenomenology" && (
                <div className="mt-8">
                  <h3 className="font-heading text-burgundy-light text-lg font-semibold mb-4">
                    Bảng so sánh: Quan điểm về Sự Chết
                  </h3>
                  <ComparisonTable scholarMode={scholarMode} />
                </div>
              )}
            </section>
          ))}

          {/* ── Conclusion ───────────────────────────────────── */}
          <section id="conclusion" className="scroll-mt-24">
            <div className="ornament-divider">
              <span className="ornament-symbol">✦</span>
            </div>

            <h2 className="font-heading text-burgundy text-2xl md:text-3xl font-bold mb-6">
              Kết luận
            </h2>

            <div className="pl-4 border-l-2 border-burgundy/20">
              <ContentRenderer
                paragraphs={conclusion}
                scholarMode={scholarMode}
              />
            </div>
          </section>

          {/* ── Summary Table ────────────────────────────────── */}
          <SummaryTable scholarMode={scholarMode} />

          {/* ── References ───────────────────────────────────── */}
          <ReferencesSection />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
