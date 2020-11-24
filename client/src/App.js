import React, { Component } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router';
import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import Contact from "./components/Contact";
import Analytic from "./components/Analytic"

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: localStorage.getItem("isLogged") || false
    }
  }

  toggleLogin = (data) => {
    this.setState({ isLogged: true });
    localStorage.setItem("isLogged", true);
    window.location.assign("/contact");
  }

  render() {
    return (
      <div className="MainContainer">
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"><img src="/images/icons/icon.png" width="32" height="32" alt="Compile Me" />Algo Scale!</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" style={{ marginLeft: "20%" }} id="navbarSupportedContent">
              {
                this.state.isLogged &&
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item" style={{ paddingRight: "30%" }}>
                    <div style={{ width: "max-content" }}>
                      <Link className="nav-link text-dark" to="/contact">Contact Us</Link>
                    </div>
                  </li>
                  <li className="nav-item" style={{ paddingRight: "30%" }}>
                    <div>
                      <Link className="nav-link text-dark" to="/analytic">Analytics</Link>
                    </div>
                  </li>
                  <li className="nav-item" style={{ paddingRight: "30%" }}>
                    <div>
                      <Link className="nav-link text-dark" to="/" onClick={() => { this.setState({ isLogged: false }), localStorage.removeItem("isLogged") }} >Logout</Link>
                    </div>
                  </li>

                </ul>
              }

              {
                !this.state.isLogged &&
                <div>
                  <Link className="nav-link text-dark" to="/">Login</Link>
                </div>
              }
            </div>
          </nav>
          <Switch>
            <Route path="/" exact component={() => <Login setUser={this.toggleLogin.bind(this)} />} />
            <Route path="/contact" exact component={() => <Contact />} />
            <Route path="/analytic" exact component={() => <Analytic />} />
          </Switch>
        </BrowserRouter>


      </div>
    );
  }
}

export default App;
