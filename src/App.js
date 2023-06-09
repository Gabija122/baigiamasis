import { Route, Switch } from "react-router-dom";
import Kita from "./pages/Kitapage";
import Aboutuspage from "./pages/Aboutuspage";
import Contactspage from "./pages/Contactspage";
import Newspage from "./pages/Newspage";
import Welcomepage from "./pages/Welcomepage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Welcomepage />
      </Route>
      <Route path="/news">
        <Newspage />
      </Route>
      <Route path="/contacts">
        <Contactspage />
      </Route>
      <Route path="/aboutus">
        <Aboutuspage />
      </Route>
      <Route path="/kita">
        <Kita />
      </Route>
    </Switch>
  );
}

export default App;