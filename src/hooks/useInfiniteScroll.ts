import { useState, useEffect, useRef, useCallback } from 'react';

interface UseInfiniteScrollOptions<T> {
  items: T[];
  pageSize?: number;
  initialBatch?: number;
}

export function useInfiniteScroll<T>({
  items,
  pageSize = 24,
  initialBatch = 24,
}: UseInfiniteScrollOptions<T>) {
  const [displayedCount, setDisplayedCount] = useState<number>(initialBatch);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Reset when items change (e.g. filter or category switch)
  useEffect(() => {
    setDisplayedCount(initialBatch);
    setIsLoadingMore(false);
  }, [items, initialBatch]);

  const loadMore = useCallback(() => {
    if (displayedCount >= items.length || isLoadingMore) return;

    setIsLoadingMore(true);
    // Smooth micro-delay to allow visual loader state and avoid stutter
    setTimeout(() => {
      setDisplayedCount((prev) => Math.min(prev + pageSize, items.length));
      setIsLoadingMore(false);
    }, 250);
  }, [displayedCount, items.length, isLoadingMore, pageSize]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: '350px' } // Pre-fetch 350px before reaching bottom
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  const displayedItems = items.slice(0, displayedCount);
  const hasMore = displayedCount < items.length;

  return {
    displayedItems,
    hasMore,
    isLoadingMore,
    totalCount: items.length,
    displayedCount: Math.min(displayedCount, items.length),
    sentinelRef,
    loadMore,
  };
}
