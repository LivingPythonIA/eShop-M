import {Header} from "../components/Header/Header"
import { Outlet } from "react-router-dom";

export const MainLayouts = () => {
  return (
    <>
      <Header/>
           {/* <div className="main-content"></div> */}
      <main className="container">
      <h1>Panadería "eShop"</h1>
        <Outlet />
      </main>
    </>
  );
};