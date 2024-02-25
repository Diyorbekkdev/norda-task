import {useLocation, useNavigate,} from "react-router";

export const useRouterQuery = () => {
  const {pathname, search} = useLocation()
  const NavLink = useNavigate()
  let routerQuery = (query) => new URLSearchParams(query);
  const GetRouterQuery = function (removeKey) {
    let set = {};
    const searchParams = routerQuery(search);
    if (Array.isArray(removeKey)) {
      const isHas = new Set(removeKey)
      for (const [key, value] of searchParams) {
        if (!isHas.has(key)) {
          set[key] = value;
        }
      }
    } else {
      for (const [key, value] of searchParams) {
        if (key !== removeKey) {
          set[key] = value;
        }
      }
    }
    return set;
  };
  const SetRouterQuery = function (newSetQuery) {
    const router = routerQuery(newSetQuery)
    return NavLink(`${pathname}?${router.toString()}`)
  }

  return {
    SetRouterQuery,
    GetRouterQuery
  }
}
