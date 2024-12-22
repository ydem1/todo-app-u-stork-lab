import React, { FC } from "react";
import { PageWrapper } from "src/components/Layouts/PageWrapper";
import { WrapperSidebar } from "src/components/WrapperSidebar";

const AddPost: FC = () => (
  <PageWrapper
    mainClassName="flex flex-col gap-20 bg-white-blue"
    isShownFooter={false}
  >
    <WrapperSidebar title="Add Post">
      <div className="py-10">AddPost</div>
    </WrapperSidebar>
  </PageWrapper>
);

export default AddPost;
