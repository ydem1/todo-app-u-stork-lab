import React, { FC, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import cn from "classnames";
import { motion } from "framer-motion";
import { Button } from "src/components/Button";
import { useDeletePostMutation } from "src/store/posts/postsApiSlice";
import { NotificationService } from "src/helpers/notifications";
import { FrameMotionState } from "src/@types/framer-motion";
import { Post } from "src/@types/post";
import { COLLAPSE_VARIANTS } from "./constants";

export const PostItem: FC<Post> = ({ id, title, body }) => {
  const [deletePost, { isLoading }] = useDeletePostMutation();

  const [isOpen, setIsOpen] = useState(false);

  const onDelete = async () => {
    try {
      await deletePost({ id });
      NotificationService.success();
    } catch {
      NotificationService.error();
    }
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div className="flex items-center justify-between gap-5">
        <span
          className="line-clamp-1 text-base font-semibold text-blue-base hover:cursor-pointer dark:text-white-base"
          onClick={toggleOpen}
        >
          {title}
        </span>

        <div className="flex">
          <Button isDisabled={isLoading} onClick={onDelete}>
            <DeleteIcon className="text-blue-base dark:text-white-base" />
          </Button>

          <Button
            className={cn({
              "rotate-180": isOpen,
            })}
            onClick={toggleOpen}
          >
            <KeyboardDoubleArrowDownIcon className="text-blue-base dark:text-white-base" />
          </Button>
        </div>
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
