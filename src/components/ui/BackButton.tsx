"use client";

import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center justify-center gap-2.5 typography-label-md text-brand-muted hover:text-brand-accent transition-colors duration-200 px-6 py-2.5 rounded-lg hover:bg-brand-surface-container"
    >
      <ArrowLeft size={18} />
      Go Back
    </button>
  );
}
