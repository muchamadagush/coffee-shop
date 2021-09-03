import React from 'react';
import Layout from '../components/layout';
const Test = () => {
  return (
    <div>
      <Layout isAuth={true} active="home" login={true}>
        <p>Test</p>
      </Layout>
    </div>
  );
};

export default Test;
