import React, { useState, useRef } from 'react';
import { Image, Check, Loader2 } from 'lucide-react';
import { toBlob } from 'html-to-image';
import { copyCanvasToClipboard, copyBlobToClipboard } from '../utils/shareCardCanvas';

interface CopyImageButtonProps {
  onGenerateCanvas?: () => Promise<HTMLCanvasElement>;
  targetRef?: React.RefObject<HTMLElement | null>;
  targetSelector?: string;
  label?: string;
  className?: string;
  id?: string;
  preferScreenshot?: boolean;
  excludeSelectors?: string[];
}

export const CopyImageButton: React.FC<CopyImageButtonProps> = ({
  onGenerateCanvas,
  targetRef,
  targetSelector,
  label = 'Copy Image',
  className = '',
  id,
  preferScreenshot = true,
  excludeSelectors = [],
}) => {
  const [status, setStatus] = useState<'idle' | 'generating' | 'copied'>('idle');
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (status !== 'idle') return;

    setStatus('generating');
    try {
      let success = false;

      // Look up target DOM element for direct screenshot capture
      let targetEl: HTMLElement | null = null;
      if (preferScreenshot) {
        if (targetRef?.current) {
          targetEl = targetRef.current;
        } else if (targetSelector) {
          targetEl = document.querySelector<HTMLElement>(targetSelector);
        } else if (buttonRef.current) {
          targetEl = buttonRef.current.closest<HTMLElement>(
            '.topic-annotation-card, .glossary-card, .concept-card, .timeline-card, .glossary-detail-card, .glossary-term-card, .annotation-card, [data-screenshot-target]'
          );
        }
      }

      if (targetEl) {
        // Capture live rendered DOM element
        const blob = await toBlob(targetEl, {
          pixelRatio: 2,
          cacheBust: true,
          backgroundColor: '#0f0e0d',
          filter: (node) => {
            if (node instanceof HTMLElement) {
              // Hide action buttons and interactive controls from screenshot
              if (
                node === buttonRef.current ||
                node.classList.contains('screenshot-hide') ||
                node.classList.contains('glossary-card-action-btns') ||
                node.classList.contains('glossary-card-footer') ||
                node.classList.contains('card-source-actions') ||
                node.hasAttribute('data-screenshot-hide')
              ) {
                return false;
              }
              if (excludeSelectors && excludeSelectors.length > 0) {
                for (const sel of excludeSelectors) {
                  if (node.matches(sel)) {
                    return false;
                  }
                }
              }
            }
            return true;
          },
        });

        if (blob) {
          success = await copyBlobToClipboard(blob);
        }
      }

      // Fall back to canvas generation if DOM snapshot was not taken or failed
      if (!success && onGenerateCanvas) {
        const canvas = await onGenerateCanvas();
        success = await copyCanvasToClipboard(canvas);
      }

      if (success) {
        setStatus('copied');
        setTimeout(() => setStatus('idle'), 2500);
      } else {
        setStatus('idle');
      }
    } catch (err) {
      console.error('Failed to generate or copy image card:', err);
      // Attempt canvas fallback on error
      if (onGenerateCanvas) {
        try {
          const canvas = await onGenerateCanvas();
          const fallbackSuccess = await copyCanvasToClipboard(canvas);
          if (fallbackSuccess) {
            setStatus('copied');
            setTimeout(() => setStatus('idle'), 2500);
            return;
          }
        } catch (fallbackErr) {
          console.error('Fallback canvas generation also failed:', fallbackErr);
        }
      }
      setStatus('idle');
    }
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      id={id}
      className={`copy-image-btn ${status} ${className}`}
      onClick={handleClick}
      disabled={status === 'generating'}
      title="Copy card screenshot to clipboard"
    >
      {status === 'generating' ? (
        <>
          <Loader2 className="btn-small-icon spin-icon" />
          <span>Generating...</span>
        </>
      ) : status === 'copied' ? (
        <>
          <Check className="btn-small-icon text-green" />
          <span>Copied Image!</span>
        </>
      ) : (
        <>
          <Image className="btn-small-icon" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};
