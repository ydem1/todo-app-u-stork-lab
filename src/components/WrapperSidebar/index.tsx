import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { Sidebar } from "src/components/Sidebar";

interface Props {
  className?: string;
  title: string;
  children: ReactNode;
}

export const WrapperSidebar: FC<Props> = ({ className, title, children }) => (
  <div className="flex h-full">
    <Sidebar />

    <section className="flex flex-1 flex-col bg-white-base dark:bg-blue-base">
      <h2 className="border-b-2 border-blue-base px-20 py-8 dark:border-white-base">
        {title}
      </h2>
      <div className={cn("flex-1 p-15", className)}>{children}</div>
    </section>
  </div>
);
