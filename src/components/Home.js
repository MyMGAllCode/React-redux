import React, { Component } from 'react';
import {Link} from 'react-router-dom';
 


class Home extends Component {
  render() {
    return (
      <div>
       <div>Welocme </div>
        <Link to={'/Login'}>Login</Link>
      </div>
    );
  }
}

export default Home;
