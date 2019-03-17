import React, { Component } from 'react';

class Home extends Component {

    componentDidMount(){
   // alert("componentDidMount called");
  }

  componentWillMount(){
 // alert("componentWillMount called");
  }
componentWillUpdate(){
//alert("componentWillUpdate called");
}
componentDidUpdate(){
//alert("componentDidUpdate called");
}
componentWillUnmount (){
//alert("componentWillUnmount called");
}
componentWillReceiveProps(){
//alert("componentWillReceiveProps called");
}
shouldComponentUpdate(){
//alert("shouldComponentUpdate called");
}






  render() {
    alert("render called");
    return (
      <div >
      <h1>Welcome</h1>

      </div>
    );
  }
}

export default Home;
