import { useFetchList } from "./hooks";
import { AuthorizedRoutes, UnAuthorizedRoutes } from "./router/router";

function App() {
  const { data } = useFetchList({
    url: "https://jsonplaceholder.typicode.com/posts",
  });
  const isAuth = true;
  return isAuth ? <AuthorizedRoutes/> : <UnAuthorizedRoutes/>;
}

export default App;
