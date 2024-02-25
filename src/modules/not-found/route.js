import { NotFound } from "./page";

export const notFoundRoute = [
  {
    path: "*",
    Element: NotFound,
    name: "notfound",
    icon: "",
    children: [],
    meta: { isLoginIf: false, role: new Set(["SuperAdmin"]) },
    hideIfchildern: false,
  },
];
