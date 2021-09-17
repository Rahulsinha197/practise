import { lazy, Suspense } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const AddUser = lazy(() => import("./pages/AddUser"));
const EditUser = lazy(() => import("./pages/EditUser"));
const ClickCounter = lazy(() => import("./components/ClickCounter"));
const HoverCounter = lazy(() => import("./components/HoverCounter"));
const Visit = lazy(() => import("./pages/Visit.js"));

function App() {
  return (
    <div className="App">
      <Suspense fallback="...loading">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/addUser" component={AddUser} />
          <Route exact path="/editUser/:id" component={EditUser} />
          <Route exact path="/clickCounter" component={ClickCounter} />
          <Route exact path="/hoverCounter" component={HoverCounter} />
          <Route exact path="/visit" component={Visit} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
