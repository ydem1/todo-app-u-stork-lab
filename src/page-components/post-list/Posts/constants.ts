import { Variants } from "framer-motion";
import { FrameMotionState } from "src/@types/framer-motion";

export const COLLAPSE_VARIANTS: Variants = {
  [FrameMotionState.OPEN]: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  [FrameMotionState.CLOSED]: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export const DEBOUNCE_DELAY = 1500;

