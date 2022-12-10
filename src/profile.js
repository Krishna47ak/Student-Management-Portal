import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import Attendence from "./pages/Attendence"
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";
import { Diagram } from "./components/Diagram";
// import AttendenceTable from "./components/attendanceTable";

function App() {
  const authCtx = useContext(AuthContext);
  

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/start" exact>
          <HomePage />
        </Route>
        <Route path="/attendence" exact>
          <Attendence />
        </Route>
        <Route path="/chart" exact>
          <Diagram />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
