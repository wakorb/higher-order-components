import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './header';
import Resources from './resources';
import Authentication from './require_authentication';

export default class App extends Component {
  render() {
    const Authentication_Resources = Authentication(Resources);

    return (
      <div>
        <Header />
        <Route path="/resources" component={Authentication_Resources} />
      </div>
    );
  }
}
