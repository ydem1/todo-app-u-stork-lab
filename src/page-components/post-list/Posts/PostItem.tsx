import React, { FC, useState } from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import { FrameMotionState } from "src/@types/framer-motion";
import { Post } from "src/@types/post";
import { COLLAPSE_VARIANTS } from "./constants";

export const PostItem: FC<Omit<Post, "id">> = ({ title, body }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li>
      <div className="flex items-center justify-between gap-5">
        <span className="line-clamp-1 text-base font-semibold">{title}</span>
        <button onClick={() => setIsActive(!isActive)}>OPEN</button>
      </div>

      <motion.p
        className={cn("mt-5 text-base italic", { "pointer-events-none": !isActive })}
        variants={COLLAPSE_VARIANTS}
        initial={FrameMotionState.CLOSED}
        animate={isActive ? FrameMotionState.OPEN : FrameMotionState.CLOSED}
      >
        {body}
      </motion.p>
    </li>
  );
};
