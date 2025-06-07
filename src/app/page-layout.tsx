"use client";

import { ReactNode } from 'react';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden">
      {children}
    </div>
  );
}
