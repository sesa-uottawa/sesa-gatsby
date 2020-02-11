import React from 'react';
import Layout from '../components/layout';
import CourseAdvice from '../components/courseAdvice'
import '../resources/styles/advicePage.css';

const AdvicePage = () => (
  <Layout>
    <div id="banner">
      <h1>FIRST YEAR TIPS</h1>
    </div>
    <CourseAdvice />
  </Layout>
);

export default AdvicePage;
