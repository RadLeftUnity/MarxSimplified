import React, { useState, useEffect, useRef } from 'react';
import type { TimelinePhase, Citation } from '../data/history/types';
import { FormattedText } from './FormattedText';
import {
  ArrowDown,
  ArrowUp,
  Clock,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  History as HistoryIcon,
  Users,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';

interface TimelineViewProps {
  timeline: TimelinePhase[];
  sources?: Citation[];
}

export const TimelineView: React.FC<TimelineViewProps> = ({ timeline, sources: _sources }) => {
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
  }, [activeIdx]);

  // JS Wheel event interceptor with throttling (400ms cooldown)
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
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

  const getStageIcon = (tag: TimelinePhase['categoryTag']) => {
    switch (tag) {
      case 'pre-revolution':
        return <Clock className="timeline-icon text-muted" />;
      case 'revolution':
        return <Sparkles className="timeline-icon text-gold" />;
      case 'policies':
        return <HistoryIcon className="timeline-icon text-amber" />;
      case 'successes':
        return <CheckCircle2 className="timeline-icon text-gold" />;
      case 'challenges':
        return <AlertCircle className="timeline-icon text-crimson" />;
      case 'collapse-or-transition':
        return <ShieldAlert className="timeline-icon text-crimson" />;
    }
  };

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
            <div
              key={`${activePhase.id}-${direction}`}
              className={`dynamic-node-card glass-panel ${
                direction === 'next' ? 'anim-spawn-next' : 'anim-spawn-prev'
              }`}
            >
              {/* Card Header */}
              <div className="node-card-header">
                <div className="phase-badge-group">
                  <span className="phase-stage-badge">
                    {getStageIcon(activePhase.categoryTag)}
                    <span className="stage-tag-text">{activePhase.categoryTag.replace(/-/g, ' ')}</span>
                  </span>
                  <span className="node-number-tag">
                    Era {activeIdx + 1} of {timeline.length} ({activePhase.period})
                  </span>
                </div>

                <h3 className="node-card-title">{activePhase.title}</h3>
              </div>

              {/* Summary Callout Box */}
              <div className="node-card-summary glass-panel">
                <FormattedText text={activePhase.summary} paragraphClassName="summary-text" />
              </div>

              {/* Narrative Analysis with Interactive Citations & Glossary Terms */}
              <div className="node-card-details">
                <h5 className="details-header-label">Historical Analysis &amp; Dialectics</h5>
                <div className="details-text-wrapper">
                  <FormattedText text={activePhase.details} paragraphClassName="details-paragraph" />
                </div>
              </div>

              {/* Key Figures Tags */}
              {activePhase.keyFigures && activePhase.keyFigures.length > 0 && (
                <div className="phase-meta-footer glass-panel">
                  <div className="meta-group">
                    <span className="meta-label">
                      <Users className="btn-small-icon text-gold" style={{ marginRight: '4px' }} />
                      Key Figures:
                    </span>
                    <div className="meta-pills">
                      {activePhase.keyFigures.map((f, i) => (
                        <span key={i} className="meta-pill figure-pill">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Scroll / Key Direction Prompt Banner */}
              <div className="timeline-interactive-prompt">
                <div className="prompt-action-hint">
                  {activeIdx > 0 && (
                    <button
                      className="prompt-nav-link"
                      onClick={() => goToIndex(activeIdx - 1)}
                    >
                      <ArrowUp className="btn-small-icon text-gold" />
                      <span>Scroll up for {timeline[activeIdx - 1].period}</span>
                    </button>
                  )}
                  {activeIdx < timeline.length - 1 && (
                    <button
                      className="prompt-nav-link"
                      onClick={() => goToIndex(activeIdx + 1)}
                    >
                      <span>Scroll down for {timeline[activeIdx + 1].period}</span>
                      <ArrowDown className="btn-small-icon text-gold" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
