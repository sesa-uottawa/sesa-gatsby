import React from 'react';
import Layout from '../components/layout';
import CourseAdvice from '../components/courseAdvice'
import EnrolmentAdvice from '../components/enrolmentAdvice';

// CSS Imports
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
    <EnrolmentAdvice />
    <CourseAdvice />
  </Layout>
);

export default AdvicePage;
