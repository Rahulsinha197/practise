import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import styles from "./App.module.scss";
import XAnswersPage from "./pages/XAnswersPage/XAnswersPage";
import XHeader from "./components/XHeader/XHeader";
import XHomePage from "./pages/XHomePage/XHomePage";
import XPageNotFoundPage from "./pages/XPageNotFoundPage/XPageNotFoundPage";
import XQuestionsPage from "./pages/XQuestionsPage/XQuestionsPage";

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Router basename={process.env.PUBLIC_URL}>
          <XHeader />
          <div>
            <Switch>
              <Route exact path="/" component={XHomePage} />
              <Route path="/answers/:id" component={XAnswersPage} />
              <Route path="/questions" component={XQuestionsPage} />
              <Route component={XPageNotFoundPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
