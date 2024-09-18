import React, { useEffect, useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Overlay, ModalContent } from './styled/ModalStyled';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // state to keep track of where the modal will be rendered (the modal root element)
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  // close the modal when ESC key is pressed
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  // set up the modal root once the component loads
  useEffect(() => {
    const root = document.getElementById('modal-root');
    if (root) {
      setModalRoot(root);
    } else {
      console.error('Modal root element not found');
    }
  }, []);

  // listen for the ESC key press to close the modal when it's open
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }

    // clean up the event listener when the modal closes or component unmounts
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleEscape]);

  // if the modal isn't open or the modal root isn't found, don't render anything
  if (!isOpen || !modalRoot) return null;

  // render the modal content in the modal root element
  return ReactDOM.createPortal(
    <Overlay onClick={onClose} aria-modal="true" role="dialog">
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </Overlay>,
    modalRoot
  );
};
