import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./GlobalState/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route exact path="/">
                  <h1>Welcome to Slack Clone</h1>
                </Route>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
