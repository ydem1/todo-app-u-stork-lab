import React, { FC, ReactNode } from "react";
import { Sidebar } from "src/components/Sidebar";

interface Props {
  children: ReactNode;
}

export const WrapperSidebar: FC<Props> = ({ children }) => (
  <div className="flex h-full">
    <Sidebar />
    <div className="flex-1">{children}</div>
  </div>
);
