import React, { FC, ReactNode } from "react";
import { Sidebar } from "src/components/Sidebar";

interface Props {
  title: string;
  children: ReactNode;
}

export const WrapperSidebar: FC<Props> = ({ title, children }) => (
  <div className="flex h-full">
    <Sidebar />

    <section className="bg-white-base flex-1">
      <h2 className="border-blue-base border-b-2 px-20 py-8">{title}</h2>
      <div className="p-15">{children}</div>
    </section>
  </div>
);
