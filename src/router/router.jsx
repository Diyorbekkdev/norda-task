import { Routes, Route } from "react-router-dom";

import BaseLayout from "@/layout/BaseLayout";

import { Fragment } from "react";
import Loading from "../components/loading/Loading";
import { filteredRoutes } from "../modules/routes";
import { authRoute } from "../modules/auth/route";

const nestedRoutes = (routes) =>
  routes.map(({ Element, path, children = [] }) => {
    if (children?.length) {
      return (
        <Fragment key={path}>
          <Route key={path} path={path} element={<Element />} />
          {nestedRoutes(children)}
        </Fragment>
      );
    }
    return <Route key={path} path={path} element={<Element />} />;
  });

export const AuthorizedRoutes = () => {
    console.log(filteredRoutes);
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        {nestedRoutes(filteredRoutes)}
      </Route>
      <Route path="*" element={<Loading />} />
    </Routes>
  );
};

export const UnAuthorizedRoutes = () => (
  <Routes>
    <Route path="*" element={<Loading />} />
    {authRoute.map(({ Element, path }) => (
      <Route key={path} path={path} element={<Element />} />
    ))}
  </Routes>
);
