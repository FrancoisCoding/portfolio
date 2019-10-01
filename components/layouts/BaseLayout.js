import React from "react";
import Header from "../shared/Header";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <p>{children}</p>
    </div>
  );
};

export default BaseLayout;
