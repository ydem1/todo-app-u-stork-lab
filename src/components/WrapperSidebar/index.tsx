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
      <h2 className="border-b-2 border-blue-base px-5 py-2 dark:border-white-base md:px-10 md:py-4 xl:px-20 xl:py-8">
        {title}
      </h2>
      <div className={cn("flex-1 p-5 md:p-10 xl:p-15", className)}>
        {children}
      </div>
    </section>
  </div>
);
