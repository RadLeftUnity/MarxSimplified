import React, { useState } from 'react';
import { Image, Check, Loader2 } from 'lucide-react';
import { copyCanvasToClipboard } from '../utils/shareCardCanvas';

interface CopyImageButtonProps {
  onGenerateCanvas: () => Promise<HTMLCanvasElement>;
  label?: string;
  className?: string;
  id?: string;
}

export const CopyImageButton: React.FC<CopyImageButtonProps> = ({
  onGenerateCanvas,
  label = 'Copy Image',
  className = '',
  id,
}) => {
  const [status, setStatus] = useState<'idle' | 'generating' | 'copied'>('idle');

  const handleClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (status !== 'idle') return;

    setStatus('generating');
    try {
      const canvas = await onGenerateCanvas();
      const success = await copyCanvasToClipboard(canvas);

      if (success) {
        setStatus('copied');
        setTimeout(() => setStatus('idle'), 2500);
      } else {
        setStatus('idle');
      }
    } catch (err) {
      console.error('Failed to generate or copy image card:', err);
      setStatus('idle');
    }
  };

  return (
    <button
      type="button"
      id={id}
      className={`copy-image-btn ${status} ${className}`}
      onClick={handleClick}
      disabled={status === 'generating'}
      title="Copy share card PNG image to clipboard"
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
