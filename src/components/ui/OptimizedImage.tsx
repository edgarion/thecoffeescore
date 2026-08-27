import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  wrapperClassName?: string;
  aspectRatio?: string;
}

/**
 * High-performance progressive lazy image loader with:
 * 1. IntersectionObserver viewport loading
 * 2. Animated shimmer skeleton placeholder while loading
 * 3. Smooth fade-in transition on load
 * 4. Error fallback to pristine local assets
 * 5. Cybersecurity sanitize against malicious data URIs
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallbackSrc = '/assets/products/sage-bambino.png',
  className = '',
  wrapperClassName = '',
  aspectRatio,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const imgRef = useRef<HTMLDivElement | null>(null);

  // Lazy loading observer
  useEffect(() => {
    if (!imgRef.current) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          });
        },
        { rootMargin: '250px' } // Pre-load 250px before entering viewport
      );

      observer.observe(imgRef.current);

      return () => {
        observer.disconnect();
      };
    } else {
      setIsInView(true);
    }
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Sanitize src to prevent malicious javascript: or malformed URIs
  const safeSrc = (hasError ? fallbackSrc : src) || fallbackSrc;
  const isSecuritySafe = safeSrc.startsWith('/') || safeSrc.startsWith('https://') || safeSrc.startsWith('http://');
  const finalSrc = isSecuritySafe ? safeSrc : fallbackSrc;

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden flex items-center justify-center ${wrapperClassName}`}
      style={{ aspectRatio }}
    >
      {/* Animated Shimmer Skeleton while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-stone-100 via-stone-200 to-stone-100 bg-[length:200%_100%] animate-pulse flex items-center justify-center">
          <div className="flex flex-col items-center gap-1.5 opacity-40">
            <span className="w-5 h-5 rounded-full border-2 border-stone-400 border-t-transparent animate-spin" />
            <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">Cargando</span>
          </div>
        </div>
      )}

      {/* Actual Image */}
      {isInView && (
        <img
          src={finalSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};
