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
    <div id="course-advice">
      <h2>COURSE ADVICE</h2>
      <div id="container">
      </div>
    </div>
    <EnrolmentAdvice />
  </Layout>
);

export default AdvicePage;
