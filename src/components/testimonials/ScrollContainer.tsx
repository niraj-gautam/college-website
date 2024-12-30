import React, { useEffect, useRef } from 'react';

interface ScrollContainerProps {
  children: React.ReactNode;
}

const ScrollContainer = React.forwardRef<HTMLDivElement, ScrollContainerProps>(
  ({ children }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const container = containerRef.current;
      const content = contentRef.current;

      if (!container || !content) return;

      const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        
        // When we reach the end, jump back to the start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          container.scrollLeft = 1;
        }
        // When we reach the start (scrolling backwards), jump to the end
        else if (scrollLeft <= 0) {
          container.scrollLeft = scrollWidth - clientWidth - 1;
        }
      };

      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <div
        ref={(node) => {
          // Handle both refs
          containerRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        className="flex overflow-x-auto gap-6 py-4 px-2 snap-x snap-mandatory hide-scrollbar scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div ref={contentRef} className="flex gap-6">
          {/* Original items */}
          {children}
          {/* Duplicated items for infinite scroll */}
          {children}
        </div>
      </div>
    );
  }
);

ScrollContainer.displayName = 'ScrollContainer';

export default ScrollContainer;
