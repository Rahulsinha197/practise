import * as React from "react";
import sharedStyles from "../../assets/styles/XSharedStyles.module.scss";

class XHomePage extends React.Component {
  render() {
    return (
      <div className={sharedStyles.page}>
        <div className={sharedStyles.pageTitle}>Stack Exchange Search</div>
        <div className={sharedStyles.mainCard}>
          <p>This will search Stack Exchange questions for given title text.</p>
          <p>Enter your question and hit the seacrh key.</p>
          <p>After that, you can click on a question to see the answers.</p>
        </div>
      </div>
    );
  }
}

export default XHomePage;
