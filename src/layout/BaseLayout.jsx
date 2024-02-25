import { Outlet } from "react-router-dom";
import { MainHeader } from "../components";
import { Content } from "carbon-components-react";
import './layout.scss';
const BaseLayout = () => {
  return (
    <>
      <MainHeader />
      <main className="w-full ">
        <Content id="main-content">
          <Outlet />
        </Content>
      </main>
    </>
  );
};

export default BaseLayout;
