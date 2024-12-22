import React, { FC } from "react";
import { Posts } from "src/page-components/post-list/Posts";
import { Search } from "src/page-components/post-list/Search";
import { PageWrapper } from "src/components/Layouts/PageWrapper";
import { WrapperSidebar } from "src/components/WrapperSidebar";

const PostList: FC = () => (
  <PageWrapper mainClassName="bg-white-blue" isShownFooter={false}>
    <WrapperSidebar className="flex flex-col gap-10" title="Post List">
      <Search />
      <Posts />
    </WrapperSidebar>
  </PageWrapper>
);

export default PostList;
