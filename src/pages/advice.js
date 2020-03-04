import React from 'react';
import Layout from '../components/layout';
import '../resources/styles/advicePage.css';
import GeneralAdvice from '../components/generalAdvice'

const AdvicePage = () => (
  <Layout>
    <div id="banner">
      <h1>FIRST YEAR TIPS</h1>
    </div>
    <div>
      <GeneralAdvice /> 
    </div>
  </Layout>
);

export default AdvicePage;
