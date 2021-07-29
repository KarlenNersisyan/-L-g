import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import CssBaseline from '@material-ui/core/CssBaseline';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline /> 
        {/* You might be familiar with normalize.css, a collection of HTML element and attribute style-normalizations. */}
        <Router>
          <Blog />
        </Router>
      </React.Fragment>
    );
  }
}

