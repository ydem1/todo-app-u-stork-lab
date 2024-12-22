import React, { FC } from "react";
import { Posts } from "src/page-components/post-list/Posts";
import { PageWrapper } from "src/components/Layouts/PageWrapper";
import { WrapperSidebar } from "src/components/WrapperSidebar";

const PostList: FC = () => (
  <PageWrapper
    mainClassName="flex flex-col gap-20 bg-white-blue"
    isShownFooter={false}
  >
    <WrapperSidebar title="Post List">
      <Posts />
    </WrapperSidebar>
  </PageWrapper>
);

export default PostList;
