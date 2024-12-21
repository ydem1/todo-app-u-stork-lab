import React, { FC } from "react";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const Home: FC = () => (
  <PageWrapper mainClassName="flex flex-col gap-20">
    <h1 className="text-3xl text-red-600">Home</h1>
  </PageWrapper>
);

export default Home;
