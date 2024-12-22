import React, { FC } from "react";
import { AddForm } from "src/page-components/add-post/AddForm";
import { PageWrapper } from "src/components/Layouts/PageWrapper";
import { WrapperSidebar } from "src/components/WrapperSidebar";

const AddPost: FC = () => (
  <PageWrapper mainClassName="bg-white-blue" isShownFooter={false}>
    <WrapperSidebar title="Add Post">
      <AddForm />
    </WrapperSidebar>
  </PageWrapper>
);

export default AddPost;
