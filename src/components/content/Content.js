import React from "react";
import { MainRoutes } from "../../routes/MainRoutes";

const Content = ({ user }) => {
  return (
    <div className="container min-content-heght">
      <MainRoutes user={user} />
    </div>
  );
};

export default Content;
