import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

export const authRoute = [
  {
    path: "/login",
    Element: LoginPage,
    name: "Login",
    icon: "",
    children: [],
    meta: { isLoginIf: false, role: new Set(["SuperAdmin"]) },
    hideIfchildern: false,
  },
  {
    path: "/register",
    Element: RegisterPage,
    name: "Register",
    icon: "",
    children: [],
    meta: { isLoginIf: false, role: new Set(["SuperAdmin"]) },
    hideIfchildern: true,
  },
];
