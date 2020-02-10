import React from 'react';
import Layout from '../components/layout';

import EnrolmentAdvice from '../components/enrolmentAdvice';

// CSS Imports
import '../resources/styles/advicePage.css';

const AdvicePage = () => (
  <Layout>
    <div id="banner">
      <h1>FIRST YEAR TIPS</h1>
    </div>
    <EnrolmentAdvice />
  </Layout>
);

export default AdvicePage;
