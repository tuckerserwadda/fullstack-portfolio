import { FC } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../navigation-bar/navigation-bar";

import styles from "./Header.module.scss";

const { header } = styles;

const Header: FC = () => {
  return (
    <>
      <div className={header}>header</div>
      <NavigationBar />
      <Link to={""}></Link>
    </>
  );
};

export default Header;
