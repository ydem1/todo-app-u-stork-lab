import React, { FC, useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import cn from "classnames";
import { motion } from "framer-motion";
import { FrameMotionState } from "src/@types/framer-motion";
import { Post } from "src/@types/post";
import { COLLAPSE_VARIANTS } from "./constants";

export const PostItem: FC<Omit<Post, "id">> = ({ title, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div className="flex items-center justify-between gap-5">
        <span
          className="line-clamp-1 text-base font-semibold hover:cursor-pointer"
          onClick={toggleOpen}
        >
          {title}
        </span>

        <button
          className={cn("transition-all duration-300 hover:scale-105", {
            "rotate-180": isOpen,
          })}
          onClick={toggleOpen}
        >
          <KeyboardDoubleArrowDownIcon />
        </button>
      </div>

      <motion.p
        className={cn("mt-5 text-base italic", {
          "pointer-events-none": !isOpen,
        })}
        variants={COLLAPSE_VARIANTS}
        initial={FrameMotionState.CLOSED}
        animate={isOpen ? FrameMotionState.OPEN : FrameMotionState.CLOSED}
      >
        {body}
      </motion.p>
    </li>
  );
};
