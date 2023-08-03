"use client";

import { Modal } from "@/components/ui/modal";


export default function SetupPage() {
  return (
    <div className="p-8">
      <Modal title="Test" description="Test Description" isOpen onClose={() => {}}> Children</Modal>
    </div>
  );
}
