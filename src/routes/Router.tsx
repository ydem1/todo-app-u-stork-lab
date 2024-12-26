import React, { FC, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { AddPost, Home, NotFound, PostList } from "src/pages";
import { keepTheme } from "src/utils/theme";
import { PATHNAMES } from "src/constants/routes";

const ROUTES = [
  {
    element: <Home />,
    path: PATHNAMES.HOME,
  },
  {
    element: <PostList />,
    path: PATHNAMES.POST_LIST,
  },
  {
    element: <AddPost />,
    path: PATHNAMES.ADD_POST,
  },
  {
    element: <NotFound />,
    path: PATHNAMES.NOT_FOUND,
  },
];

const AppRoutes: FC = () => {
  useEffect(() => {
    keepTheme();
  }, []);

  return useRoutes(ROUTES);
};

export default AppRoutes;
