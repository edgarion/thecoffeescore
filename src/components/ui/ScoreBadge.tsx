import React from 'react';
import { CoffeeScore } from '../../core/domain/Score';

interface ScoreBadgeProps {
  score: CoffeeScore | number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export const ScoreBadge: React.FC<ScoreBadgeProps> = ({
  score,
  size = 'md',
  showLabel = false,
  className = '',
}) => {
  const scoreObj = typeof score === 'number' ? new CoffeeScore(score) : score;
  const val = scoreObj.getValue();

  const sizeClasses = {
    sm: 'text-xs px-1.5 py-0.5 min-w-[28px]',
    md: 'text-sm px-2.5 py-1 min-w-[36px]',
    lg: 'text-lg px-4 py-2 min-w-[54px] text-base',
  };

  // Editorial color tone
  let bgClass = 'bg-editorial-blue text-white';
  if (val >= 9.0) {
    bgClass = 'bg-editorial-blue text-white';
  } else if (val >= 8.0) {
    bgClass = 'bg-editorial-blue/90 text-white';
  } else {
    bgClass = 'bg-stone-700 text-white';
  }

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <span
        className={`font-mono font-bold rounded-editorial text-center shadow-sm tracking-tight ${sizeClasses[size]} ${bgClass}`}
        title={`The Coffee Score: ${scoreObj.getFormatted()}/10 (${scoreObj.getRatingLabel()})`}
      >
        {scoreObj.getFormatted()}
      </span>
      {showLabel && (
        <span className="text-xs text-ink-muted font-sans">
          / 10 · <strong className="text-ink font-semibold">{scoreObj.getRatingLabel()}</strong>
        </span>
      )}
    </div>
  );
};
