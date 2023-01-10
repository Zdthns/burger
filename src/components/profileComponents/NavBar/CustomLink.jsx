import React from "react";
import { Link, useMatch } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  const match = useMatch({ path: to, end: true });

  return (
    <Link
      to={to}
      {...props}
      style={{
        color: match ? "white" : "#8585AD",
      }}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
