"use client";

import React, { createContext, useContext, useRef, useState } from "react";

interface Ctx {
  openKey: string | null;
  openPanel: (key: string) => void;
  scheduleClose: () => void;
  cancelClose: () => void;
}

const HoverMenuCtx = createContext<Ctx | null>(null);

export const HoverLayout = ({
  children,
  hideDelay = 1000 /* === default 1000ms === */,
}: React.PropsWithChildren<{ hideDelay?: number }>) => {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    timer.current = setTimeout(() => setOpenKey(null), hideDelay);
  };

  const openPanel = (key: string) => {
    cancelClose();
    setOpenKey(key);
  };

  return (
    <HoverMenuCtx.Provider
      value={{ openKey, openPanel, scheduleClose, cancelClose }}
    >
      {children}
    </HoverMenuCtx.Provider>
  );
};

export const useHoverMenu = () => {
  const ctx = useContext(HoverMenuCtx);
  if (!ctx) throw new Error("useHoverMenu must be used inside HoverLayout!");
  return ctx;
};
