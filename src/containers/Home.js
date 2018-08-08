import React, { Component } from 'react';

import './Home.css';

export default class Home extends Component {
  render() {
    return(
      <div className="Home">
        <div className="lander">
          <h1>Scratch</h1>
          <p>Scratch is a simple note taking app built with React and the Serverless platform utilizing a handful of services provided by Amazon Web Services.</p>
        </div>
      </div>
    );
  }
}
