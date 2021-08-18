import Login from "./containers/Login";
import Category from "./containers/Category";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
