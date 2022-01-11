import React from "react";
import style from "./ProgressBar.module.css";

const ProgressBar = ({completed}) => {

  return (
    <div className={style.containerStyles}>
      <div style={{width: `${completed}%`}} className={style.fillerStyles}></div>
      <span className={style.labelStyles}>{completed}%</span>
    </div>
  );
};

export default ProgressBar;