import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import MembersGrid from '../components/home/membersGrid'

import '../components/home/home-container.css'

const IndexPage = () => (
  <>
    <Layout>
      <div class = "main-container">
        <div id = 'home-container-1'>
          <img src= {require("../images/white-sesa-logo.png")}/>
          <hr/>
          <div class = 'subtitle'>
            Software Engineering Student Association
          </div>
        </div>
        <div id = 'home-container-2'>
          Make The Opportunities
          <br/>
          <br/>
          Find Your People
          <br/>
          <br/>
          Hustle > Role Definition
        </div>
        <div id = 'home-container-3'>
          <div class = 'title'>
            Our Mission
          </div>
          <hr/>
          <p>
            Our mission is to provide a support group for software engineers and to define a group of people who see themselves connected in an important way.
            SESA strives to enrich student life while building a networking platform in order to aid students in landing real world experiences.
          </p>
        </div>
        <MembersGrid />
      </div>
    </Layout>
  </>
)

export default IndexPage
