import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  title?: string;
  titleFontColor?: string;
  titleFontSize?: string;
  borderTitle?: boolean;
  children: React.ReactNode;
  onClose: () => void;
  backgroundColor?: string;
  backgroundOpacity?: number;
  modalBackgroundColor?: string;
  modalBorderColor?: string;
  modalBorderWidth?: number;
  modalBorderRadius?: number;
  modalMaxWidth?: string;
  insideBorderColor?: string;
  insideBorderWidth?: number;
  closeColor?: string;
  positionTitle?: 'left' | 'center' | 'right';
  positionCloseButton?: 'left' | 'right';
  blurAmount?: number;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  children,
  onClose,
  borderTitle = true,
  titleFontColor = 'black',
  titleFontSize = '1.25rem',
  backgroundColor = 'black',
  backgroundOpacity = 50,
  modalBackgroundColor = 'white',
  modalBorderColor = '#e5e7eb',
  modalBorderWidth = 1,
  modalBorderRadius = 8,
  modalMaxWidth = '28rem',
  insideBorderColor = '#e5e7eb',
  insideBorderWidth = 1,
  closeColor = '#6b7280',
  positionTitle = 'left',
  positionCloseButton = 'right',
  blurAmount = 0,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    // Close modal when pressing ESC
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Close modal when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      const modalElement = document.getElementById('modal-content');
      if (modalElement && !modalElement.contains(e.target as Node)) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.body.style.overflow = ''; // Re-enable scrolling
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const blurredBackgroundStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backdropFilter: `blur(${blurAmount}px)`,
    WebkitBackdropFilter: `blur(${blurAmount}px)`,
    zIndex: 39,
  };

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: backgroundColor,
    opacity: backgroundOpacity / 100,
    zIndex: 40,
  };

  const modalContainerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50,
  };

  const modalStyle: React.CSSProperties = {
    position: 'relative',
    width: '90%',
    maxWidth: modalMaxWidth,
    margin: 'auto',
    backgroundColor: modalBackgroundColor,
    borderColor: modalBorderColor,
    borderWidth: `${modalBorderWidth}px`,
    borderRadius: `${modalBorderRadius}px`,
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
    transform: 'scale(1)',
    opacity: 1,
    zIndex: 50,
  };

  const modalHeaderStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: positionTitle,
    alignItems: 'center',
    padding: title ? '1rem' : '0',
    borderBottom:
      title && borderTitle
        ? `${insideBorderWidth}px solid ${insideBorderColor}`
        : 'none',
  };

  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    ...(positionCloseButton === 'right' ? { right: '1rem' } : { left: '1rem' }),
    top: '1rem',
    color: closeColor,
    cursor: 'pointer',
    transition: 'opacity 0.15s ease-in-out',
  };

  const closeButtonHoverStyle: React.CSSProperties = {
    opacity: 0.5,
  };

  const modalBodyStyle: React.CSSProperties = {
    padding: '1rem',
  };

  return (
    <div style={modalContainerStyle}>
      {blurAmount > 0 && <div style={blurredBackgroundStyle} />}
      <div style={overlayStyle} />
      <div id="modal-content" style={modalStyle}>
        <div style={modalHeaderStyle}>
          {title ? (
            <div
              style={{
                fontSize: titleFontSize,
                fontWeight: '600',
                color: titleFontColor,
              }}
            >
              {title}
            </div>
          ) : null}
          <button
            aria-label="Close Modal"
            onClick={onClose}
            style={closeButtonStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.opacity =
                closeButtonHoverStyle.opacity?.toString() || '')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.opacity =
                closeButtonStyle.opacity?.toString() || '')
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={'currentColor'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div style={modalBodyStyle}>{children}</div>
      </div>
    </div>
  );
};
