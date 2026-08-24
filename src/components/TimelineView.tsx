import React, { useState, useEffect, useRef } from 'react';
import type { TimelinePhase, Citation } from '../data/history/types';
import { FormattedText } from './FormattedText';
import {
  ArrowDown,
  ArrowUp,
  Users,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';

import { CopyImageButton } from './CopyImageButton';
import { generateTimelineEventCardCanvas } from '../utils/shareCardCanvas';

interface TimelineViewProps {
  timeline: TimelinePhase[];
  sources?: Citation[];
  countryName?: string;
  flagUrl?: string;
  coverImage?: string;
}

export const TimelineView: React.FC<TimelineViewProps> = ({
  timeline,
  sources: _sources,
  countryName,
  flagUrl,
  coverImage,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [, setIsAnimating] = useState(false);
  const lastWheelTimeRef = useRef<number>(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const spineNodeRefs = useRef<Map<number, HTMLButtonElement>>(new Map());
  const yearPillRefs = useRef<Map<number, HTMLButtonElement>>(new Map());
  const pillsRowRef = useRef<HTMLDivElement>(null);


  // Navigate to specific index with animation direction
  const goToIndex = (targetIdx: number) => {
    if (targetIdx < 0 || targetIdx >= timeline.length || targetIdx === activeIdx) return;

    setDirection(targetIdx > activeIdx ? 'next' : 'prev');
    setIsAnimating(true);
    setActiveIdx(targetIdx);

    // Reset animation state after transition finishes
    setTimeout(() => {
      setIsAnimating(false);
    }, 380);
  };

  // Auto-scroll active spine node and active year pill into center view
  useEffect(() => {
    const spineEl = spineNodeRefs.current.get(activeIdx);
    if (spineEl) {
      spineEl.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
    const pillEl = yearPillRefs.current.get(activeIdx);
    if (pillEl) {
      pillEl.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    }
    // Reset internal card scroll position to top on era change
    const cardEl = stageRef.current?.querySelector('.dynamic-node-card');
    if (cardEl) {
      cardEl.scrollTop = 0;
    }
  }, [activeIdx]);

  // JS Wheel event interceptor with throttling (400ms cooldown)
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const cardEl = stageRef.current?.querySelector('.dynamic-node-card') as HTMLDivElement | null;
    if (cardEl) {
      const isScrollable = cardEl.scrollHeight > cardEl.clientHeight + 4;
      if (isScrollable) {
        const isAtBottom = cardEl.scrollTop + cardEl.clientHeight >= cardEl.scrollHeight - 10;
        const isAtTop = cardEl.scrollTop <= 10;

        if (e.deltaY > 0 && !isAtBottom) {
          // Allow internal scrolling down inside the card before changing era
          return;
        }
        if (e.deltaY < 0 && !isAtTop) {
          // Allow internal scrolling up inside the card before changing era
          return;
        }
      }
    }

    const now = Date.now();
    if (now - lastWheelTimeRef.current < 400) {
      return; // Throttled
    }

    if (Math.abs(e.deltaY) > 20) {
      if (e.deltaY > 0 && activeIdx < timeline.length - 1) {
        lastWheelTimeRef.current = now;
        goToIndex(activeIdx + 1);
      } else if (e.deltaY < 0 && activeIdx > 0) {
        lastWheelTimeRef.current = now;
        goToIndex(activeIdx - 1);
      }
    }
  };

  // Scroll pills row manually via chevrons
  const scrollPillsRow = (dir: 'left' | 'right') => {
    if (pillsRowRef.current) {
      const scrollAmount = dir === 'left' ? -200 : 200;
      pillsRowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Keyboard navigation support (Arrow Up / Down)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (activeIdx < timeline.length - 1) {
          e.preventDefault();
          goToIndex(activeIdx + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (activeIdx > 0) {
          e.preventDefault();
          goToIndex(activeIdx - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx, timeline.length]);

  const activePhase = timeline[activeIdx];

  return (
    <div
      className="dynamic-timeline-stage"
      ref={stageRef}
      onWheel={handleWheel}
      tabIndex={0}
    >
      {/* Full-Width Responsive Year Selector Bar */}
      <div className="timeline-top-control-bar">
        <div className="full-width-year-bar-wrapper">
          <button
            className="year-nav-arrow-btn"
            onClick={() => scrollPillsRow('left')}
            title="Scroll years left"
          >
            <ChevronUp className="btn-small-icon" style={{ transform: 'rotate(-90deg)' }} />
          </button>

          <div className="timeline-year-pills-row" ref={pillsRowRef}>
            {timeline.map((phase, idx) => (
              <button
                key={phase.id}
                ref={(el) => {
                  if (el) yearPillRefs.current.set(idx, el);
                }}
                className={`timeline-year-pill ${idx === activeIdx ? 'active' : ''}`}
                onClick={() => goToIndex(idx)}
                title={`Jump to ${phase.period}: ${phase.title}`}
              >
                <span>{phase.period}</span>
              </button>
            ))}
          </div>

          <button
            className="year-nav-arrow-btn"
            onClick={() => scrollPillsRow('right')}
            title="Scroll years right"
          >
            <ChevronDown className="btn-small-icon" style={{ transform: 'rotate(-90deg)' }} />
          </button>
        </div>

        <div className="timeline-step-buttons">
          <button
            className="timeline-step-btn"
            onClick={() => goToIndex(activeIdx - 1)}
            disabled={activeIdx === 0}
            title="Previous Era (Scroll Up / Arrow Up)"
          >
            <ChevronUp className="btn-small-icon" />
          </button>
          <button
            className="timeline-step-btn"
            onClick={() => goToIndex(activeIdx + 1)}
            disabled={activeIdx === timeline.length - 1}
            title="Next Era (Scroll Down / Arrow Down)"
          >
            <ChevronDown className="btn-small-icon" />
          </button>
        </div>
      </div>

      {/* Dynamic Interactive Stage Layout (Spine Left + Spawning Card Right) */}
      <div className="dynamic-stage-content-grid">
        {/* Left Interactive Spine Stepper (Always Center-Aligned) */}
        <div className="dynamic-spine-column">
          <div className="spine-vertical-line" />
          {timeline.map((phase, idx) => {
            const isActive = idx === activeIdx;
            const isPassed = idx < activeIdx;
            return (
              <button
                key={phase.id}
                ref={(el) => {
                  if (el) spineNodeRefs.current.set(idx, el);
                }}
                className={`spine-node-button ${isActive ? 'active' : ''} ${isPassed ? 'passed' : ''}`}
                onClick={() => goToIndex(idx)}
                title={`Era ${idx + 1}: ${phase.period} - ${phase.title}`}
              >
                <div className={`spine-node-dot ${isActive ? 'dot-glowing' : ''}`}>
                  <div className="dot-core" />
                </div>
                <div className="spine-node-info">
                  <span className="node-period-label">{phase.period}</span>
                  <span className="node-title-snippet">{phase.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Spawning Content Card Viewport */}
        <div className="dynamic-card-viewport">
          {activePhase && (
            <>
              <div
                key={`${activePhase.id}-${direction}`}
                className={`dynamic-node-card glass-panel ${
                  direction === 'next' ? 'anim-spawn-next' : 'anim-spawn-prev'
                }`}
              >
                {/* Card Header */}
                <div className="node-card-header">
                  <div className="node-card-header-top-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <h3 className="node-card-title" style={{ flex: 1 }}>{activePhase.title}</h3>
                    <CopyImageButton
                      id={`copy-timeline-${activePhase.id}`}
                      onGenerateCanvas={() =>
                        generateTimelineEventCardCanvas({
                          countryName: countryName || 'Socialist History',
                          flagUrl,
                          coverImage,
                          title: activePhase.title,
                          period: activePhase.period,
                          summary: activePhase.summary,
                          details: activePhase.details,
                          keyFigures: activePhase.keyFigures,
                          sources: _sources,
                          citationIds: activePhase.citationIds,
                        })
                      }
                    />
                  </div>
                  {activePhase.keyFigures && activePhase.keyFigures.length > 0 && (
                    <div className="card-header-key-figures">
                      <div className="compact-key-figures-inline">
                        <Users className="btn-small-icon text-gold" style={{ flexShrink: 0 }} />
                        <span className="compact-label">Key Figures:</span>
                        <div className="card-key-figures-pills-wrap">
                          {activePhase.keyFigures.map((f, i) => (
                            <span key={i} className="meta-pill figure-pill">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Summary Callout Box */}
                <div className="node-card-summary glass-panel">
                  <FormattedText text={activePhase.summary} paragraphClassName="summary-text" />
                </div>

                {/* Narrative Analysis with Interactive Citations & Glossary Terms */}
                <div className="node-card-details">
                  <h5 className="details-header-label">Historical Analysis and Dialectics</h5>
                  <div className="details-text-wrapper">
                    <FormattedText text={activePhase.details} paragraphClassName="details-paragraph" />
                  </div>
                </div>
              </div>

              {/* Dedicated Fixed Bottom Era Navigation Bar */}
              <div className="timeline-compact-bottom-bar glass-panel">
                <div className="compact-bar-nav-left">
                  {activeIdx > 0 && (
                    <button
                      className="compact-nav-btn"
                      onClick={() => goToIndex(activeIdx - 1)}
                      title={`Scroll up to ${timeline[activeIdx - 1].period}`}
                    >
                      <ArrowUp className="btn-small-icon text-gold" />
                      <span>Scroll up for {timeline[activeIdx - 1].period}</span>
                    </button>
                  )}
                </div>

                <div className="compact-bar-nav-right">
                  {activeIdx < timeline.length - 1 && (
                    <button
                      className="compact-nav-btn"
                      onClick={() => goToIndex(activeIdx + 1)}
                      title={`Scroll down to ${timeline[activeIdx + 1].period}`}
                    >
                      <span>Scroll down for {timeline[activeIdx + 1].period}</span>
                      <ArrowDown className="btn-small-icon text-gold" />
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
