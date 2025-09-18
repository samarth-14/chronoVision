// frontend/src/components/QRCodeModal.tsx

import { BaseModal } from './ui/base-modal';
import QRCode from 'qrcode.react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

export function QRCodeModal({ isOpen, onClose, url, title }: QRCodeModalProps) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={`QR Code for ${title}`}
      description="Scan this QR code to open the heritage site on your device."
    >
      <div className="flex justify-center p-4">
        <QRCode value={url} size={256} />
      </div>
    </BaseModal>
  );
}