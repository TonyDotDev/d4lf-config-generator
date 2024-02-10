import { Modal } from "@mantine/core";
import { ReactNode } from "react";

interface GearFormModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function GearFormModal({ opened, onClose }: GearFormModalProps) {
  <Modal.Root opened={opened} onClose={onClose}>
    <Modal.Header>Test</Modal.Header>
    <Modal.Body>TEST</Modal.Body>
  </Modal.Root>;
}
