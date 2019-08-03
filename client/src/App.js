import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import store from './store';
import Appendix from './components/appendix/Appendix'

import ContactUs from './components/appendix/ContactUS'
import ContactUsList from './components/admin/Appendix'

import AppendixAdd from './components/appendix/AppendixAdd'

class App extends Component {
  render() {
   return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
              <Route exact path="/" component={Appendix} />
              <Route exact path="/add" component={AppendixAdd} />

              <Route exact path="/contact-book" component={ContactUs} />
              <Route exact path="/contactus-list" component={ContactUsList} />
            
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
