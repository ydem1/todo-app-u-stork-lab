import React, { FC } from "react";
import { PageWrapper } from "src/components/Layouts/PageWrapper";
import { WrapperSidebar } from "src/components/WrapperSidebar";

const AddTodo: FC = () => (
  <PageWrapper
    mainClassName="flex flex-col gap-20 bg-white-blue"
    isShownFooter={false}
  >
    <WrapperSidebar title="Add Todo">
      <div className="py-10">AddTodo</div>
    </WrapperSidebar>
  </PageWrapper>
);

export default AddTodo;
