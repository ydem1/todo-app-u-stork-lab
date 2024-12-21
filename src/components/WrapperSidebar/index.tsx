import React, { FC, ReactNode } from "react";
import { Sidebar } from "src/components/Sidebar";

interface Props {
  title: string;
  children: ReactNode;
}

export const WrapperSidebar: FC<Props> = ({ title, children }) => (
  <div className="flex h-full">
    <Sidebar />

    <div className="flex-1">
      <h2 className="px-20 py-8 border-b-2 border-blue-base">{title}</h2>
      {children}
    </div>
  </div>
);
