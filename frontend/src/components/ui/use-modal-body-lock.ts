import { useEffect } from 'react';

/**
 * Custom hook to prevent body scroll and content shifting when modals are open
 * Adds 'modal-open' class to body and handles scrollbar preservation
 * Prevents the "black line" effect and content shifting issues
 */
export function useModalBodyLock(isOpen: boolean) {
  useEffect(() => {
    if (isOpen) {
      // Store original body styles
      const originalBodyOverflow = document.body.style.overflow;
      const originalBodyPaddingRight = document.body.style.paddingRight;
      const originalBodyScrollbarGutter = document.body.style.scrollbarGutter;
      
      // Calculate current scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Get current computed padding-right
      const computedStyle = window.getComputedStyle(document.body);
      const currentPaddingRight = parseInt(computedStyle.paddingRight) || 0;
      
      // Apply modal lock
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
      document.body.style.scrollbarGutter = 'stable';
      
      // Only add padding if there's a visible scrollbar
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${currentPaddingRight + scrollbarWidth}px`;
      }
      
      return () => {
        // Restore original styles
        document.body.classList.remove('modal-open');
        document.body.style.overflow = originalBodyOverflow;
        document.body.style.paddingRight = originalBodyPaddingRight;
        document.body.style.scrollbarGutter = originalBodyScrollbarGutter;
      };
    }
  }, [isOpen]);
}