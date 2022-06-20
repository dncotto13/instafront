import React from "react";
import "../Css/Loading.css";

export const Loading = ({ className, ...others }) => {
  const cls = className ? className + " loading" : "loading";

  return <div className={cls} {...others} />;
};
