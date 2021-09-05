import React from 'react';
import Layout from '../components/layout';
const Test = () => {
  console.log(process.env.NEXT_PUBLIC_BASE_URL)
  return (
    <div>
      <Layout isAuth={false} active="home" login={true}>
        <p>Test</p>
      </Layout>
    </div>
  );
};

export default Test;
