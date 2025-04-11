import React, { FC } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

interface IMainLayout {
  children: React.ReactNode;
}
const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <>
      <Header />
      <div className='grid-container'>
        <div className='grid-x'>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
