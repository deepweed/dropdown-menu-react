"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import clsx from "clsx";
import { useHoverMenu } from "./hover-layout";

interface HoverItemProps {
  id: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const HoverItem = ({
  id,
  trigger,
  children,
  className,
}: HoverItemProps) => {
  const { openKey, openPanel, scheduleClose, cancelClose } = useHoverMenu();
  const open = openKey === id;

  const handleEnter = () => openPanel(id);
  const handleLeave = () => scheduleClose();

  return (
    <div className="relative inline-block">
      <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {trigger}
      </div>

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            key={id}
            onMouseEnter={cancelClose}
            onMouseLeave={handleLeave}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={clsx(
              "fixed left-1/2 -translate-x-1/2 top-25 z-40",
              "rounded-2xl bg-white border border-zinc-100 shadow-xl p-8",
              "w-[90vw] max-w-[1200px]" /* === customize styles for your project === */,
              className
            )}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
