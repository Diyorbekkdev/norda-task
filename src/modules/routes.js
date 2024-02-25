import { heroPageRoute } from "./hero/route";
import { notFoundRoute } from "./not-found/route";

export const routes = [
    ...heroPageRoute,
    ...notFoundRoute,
];

const rolename = localStorage.getItem("rolename") || "SuperAdmin";
export const filteredRoutes = routes.filter(async (el) => {
  return await el?.meta?.role?.has(rolename);
});
