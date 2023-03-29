import React, { FC } from "react";
import { Link } from "react-router-dom";

import pageNotFound from "../../images/1587631265_2.jpg";

const NotFound: FC = () => {
  return (
    <div>
      <div>
        <img alt="page not found" src={pageNotFound} />
        <br />
        <Link to="/">Перейти на главную страницу</Link>
      </div>
    </div>
  );
};

export default NotFound;
