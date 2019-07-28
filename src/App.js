import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import Contact from "./components/Contact";
import ForgotPassword from "./components/ForgotPassword";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Post from "./components/Post";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/post" component={Post} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
