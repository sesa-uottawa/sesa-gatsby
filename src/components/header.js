import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import '@blueprintjs/core/lib/css/blueprint.css'

import {
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
} from "@blueprintjs/core";

const Header = ({ siteTitle }) => {
  const clickObject = {mission: 'OUR_MISSION', events: 'EVENTS', newsLetter: 'NEWS_LETTER'}
  function handleClick(clickedButton) {
    if (clickObject.mission === clickedButton){
      document.getElementById('home-container-3').scrollIntoView();
    } else if (clickObject.events === clickedButton){
      document.getElementById('events').scrollIntoView();
    } else if (clickObject.newsLetter === clickedButton){
      //We need the newsletter page
    }
  }
  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>{siteTitle}</NavbarHeading>
        <NavbarDivider />
        <Button className={Classes.MINIMAL} text="OUR MISSION" onClick={() => handleClick(clickObject.mission)}/>
        <Button className={Classes.MINIMAL} text="EVENTS" onClick={() => handleClick(clickObject.events)}/>
        <Button className={Classes.MINIMAL} text="NEWS LETTER" onClick={() => handleClick(clickObject.newsLetter)} />
      </NavbarGroup>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
export default Header

