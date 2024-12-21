import React, { FC } from "react";
import { PageWrapper } from "src/components/Layouts/PageWrapper";
import { WrapperSidebar } from "src/components/WrapperSidebar";

const ListTodos: FC = () => (
  <PageWrapper mainClassName="flex flex-col gap-20 bg-white-blue">
    <WrapperSidebar title="List Todos">
      <div className="py-10">ListTodos</div>
    </WrapperSidebar>
  </PageWrapper>
);

export default ListTodos;
