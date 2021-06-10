import * as React from "react";

import logo from "../../assets/images/logo.svg";
import styles from "./XHeader.module.scss";
import XSearchBox from "../XSearchBox/XSearchBox";

class XHeader extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <div className={styles.headerTitle}>Stackify</div>
        <div className={styles.searchBoxContainer}>
          <XSearchBox />
        </div>
      </div>
    );
  }
}

export default XHeader;
