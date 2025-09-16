import { useEffect } from 'react';

/**
 * Global Scrollbar Component
 * Applies custom scrollbar behavior to the entire website
 * - Disappearing scrollbars that only show on hover/scroll
 * - Consistent gradient styling across all browsers
 * - Removes arrows and background for clean appearance
 */
export function GlobalScrollbar() {
  useEffect(() => {
    // Simple approach - just add the class and let CSS handle the rest
    try {
      const htmlElement = document.documentElement;
      const bodyElement = document.body;
      
      if (htmlElement) {
        htmlElement.classList.add('global-scroll');
      }
      
      if (bodyElement) {
        bodyElement.classList.add('global-scroll-enabled');
      }

      // Cleanup function
      return () => {
        try {
          if (htmlElement) {
            htmlElement.classList.remove('global-scroll', 'is-scrolling');
          }
          if (bodyElement) {
            bodyElement.classList.remove('global-scroll-enabled');
          }
        } catch (error) {
          // Silently ignore cleanup errors
          console.warn('GlobalScrollbar cleanup error:', error);
        }
      };
    } catch (error) {
      console.warn('GlobalScrollbar initialization error:', error);
      return () => {}; // Return empty cleanup function
    }
  }, []);

  return null; // This component doesn't render anything
}