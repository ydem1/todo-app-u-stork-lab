import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Paragraph } from "src/page-components/not-found/Paragraph";
import { Title } from "src/page-components/not-found/Title";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { PageWrapper } from "src/components/Layouts/PageWrapper";
import { PATHNAMES } from "src/constants/routes";

const NotFound: FC = () => (
  <PageWrapper mainClassName="bg-white-blue dark:bg-blue-base">
    <section className="container flex h-full flex-col items-center justify-center gap-10 py-10">
      <Title />
      <Paragraph />

      <Button variant={ButtonVariants.PRIMARY}>
        <Link className="px-5 py-2" to={PATHNAMES.HOME}>
          Go Home
        </Link>
      </Button>
    </section>
  </PageWrapper>
);

export default NotFound;
