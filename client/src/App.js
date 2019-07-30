import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import store from './store';
import Appendix from './components/appendix/Appendix'

import ContactUs from './components/appendix/ContactUS'

class App extends Component {
  render() {
   return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
              <Route exact path="/" component={Appendix} />
              <Route exact path="/contact-book" component={ContactUs} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
