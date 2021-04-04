import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Details from "./Pages/Details/Details";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Header />
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={Details} />
          <Route exact path="/checkout" component={Checkout} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
