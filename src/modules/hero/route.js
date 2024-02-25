import { HeroPage } from "./page";

export const heroPageRoute = [
    {
        path: "/",
        Element: HeroPage,
        name: "Hero",
        icon: "",
        children: [],
        meta: { isLoginIf: false, role: new Set(["SuperAdmin"]) },
        hideIfchildern: false,
      },
];
