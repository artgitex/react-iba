import Routes from '../components/Routes/Routes';
import Layout from '../components/Layout/Layout';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (      
      <Layout>
        <Routes />
      </Layout>
    );
  }
}

export default App;
