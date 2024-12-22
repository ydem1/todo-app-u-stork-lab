import React, { FC } from "react";
import { Posts } from "src/page-components/list-todos/Posts";
import { PageWrapper } from "src/components/Layouts/PageWrapper";
import { WrapperSidebar } from "src/components/WrapperSidebar";

const ListTodos: FC = () => (
  <PageWrapper
    mainClassName="flex flex-col gap-20 bg-white-blue"
    isShownFooter={false}
  >
    <WrapperSidebar title="List Todos">
      <Posts />
    </WrapperSidebar>
  </PageWrapper>
);

export default ListTodos;
