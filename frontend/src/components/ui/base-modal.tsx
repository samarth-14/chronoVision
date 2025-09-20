import { ReactNode } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './dialog';
import { ModalCloseButton } from './modal-close-button';
import { useModalBodyLock } from './use-modal-body-lock';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  showCloseButton?: boolean;
  closeButtonPosition?: 'header' | 'absolute';
  className?: string;
  customScrollbar?: boolean | 'thin' | 'visible';
  scrollableContentClassName?: string;
}

/**
 * Base modal template providing consistent structure and styling
 * Use this as a foundation for all modal components in the application
 * 
 * Features:
 * - Standardized close button
 * - Consistent backdrop and border styling
 * - Flexible content area
 * - Configurable max width
 * - Accessibility support
 * - Optional custom scrollbar styling
 */
export function BaseModal({
  isOpen,
  onClose,
  title,
  description,
  children,
  maxWidth = '4xl',
  showCloseButton = true,
  closeButtonPosition = 'absolute',
  className = '',
  customScrollbar = false,
  scrollableContentClassName = ''
}: BaseModalProps) {
  // Prevent body scroll and content shifting when modal is open
  useModalBodyLock(isOpen);
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
  };

  // Get scrollbar class based on customScrollbar prop
  const getScrollbarClass = () => {
    if (customScrollbar === 'thin') return 'modal-scroll-thin';
    if (customScrollbar === 'visible') return 'modal-scroll-visible';
    if (customScrollbar === true) return 'modal-scroll';
    return '';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
  className={`${maxWidthClasses[maxWidth]} max-h-[95vh] p-0 modal-background-consistent shadow-2xl [&>button]:hidden ${className} rounded-lg overflow-hidden`}
>
        <DialogTitle className="sr-only">{title}</DialogTitle>
        {description && (
          <DialogDescription className="sr-only">
            {description}
          </DialogDescription>
        )}
        
        <div className="relative flex flex-col h-[95vh]">
          {/* Absolute positioned close button */}
          {showCloseButton && closeButtonPosition === 'absolute' && (
            <ModalCloseButton 
              onClick={onClose}
              className="absolute top-4 right-4 z-20"
            />
          )}
          
          {/* Modal content with proper scrolling */}
          <div className={`flex-1 overflow-y-auto ${customScrollbar ? `${getScrollbarClass()} ${scrollableContentClassName}` : 'modal-scroll'}`}>
            <div className="modal-content-centered">
              {children}
            </div>
          </div>
          
          {/* Header positioned close button area - can be used by child components */}
          {showCloseButton && closeButtonPosition === 'header' && (
            <div className="header-close-button-slot" style={{ display: 'none' }}>
              <ModalCloseButton onClick={onClose} />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}