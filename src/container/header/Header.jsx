import React from "react";
import News from "../../components/news/News";
import Highlight from "../../components/highlight/Highlight";
import Articles from "../../components/articles/Articles";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <Highlight />
      <News />
      <Articles />
    </div>
  );
};

export default Header;
