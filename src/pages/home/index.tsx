import React, { FC } from "react";
import { MainTechnologies } from "src/page-components/home/MainTechnologies";
import { Title } from "src/page-components/home/Title";
import { PageWrapper } from "src/components/Layouts/PageWrapper";

const Home: FC = () => (
  <PageWrapper mainClassName="bg-white-blue py-10 dark:bg-blue-base">
    <section className="container flex h-full flex-col items-center justify-center">
      <Title />
      <MainTechnologies />
    </section>
  </PageWrapper>
);

export default Home;
