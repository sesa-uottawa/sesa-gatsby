import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import '@blueprintjs/core/lib/css/blueprint.css';

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
} from '@blueprintjs/core';

const Header = ({ siteTitle }) => {
  const clickObject = {
    mission: 'OUR_MISSION',
    events: 'EVENTS',
    newsLetter: 'NEWS_LETTER',
  };

  return (
    <Navbar fixedToTop>
      <NavbarGroup align={Alignment.LEFT}>

        <div className={"container"}>
          <div className={"header-poly"} >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <img
                className={"header-poly-logo"}
                src={require('../resources/images/black-sesa-logo-simple.png')}
                alt="SESA"
              />
            </Link>
          </div>
        </div>

        <Link to="/#home-container-3" style={{ textDecoration: 'none' }}>
          <Button className={Classes.MINIMAL} text="OUR MISSION" />
        </Link>
        <Link to="/#events" style={{ textDecoration: 'none' }}>
          <Button className={Classes.MINIMAL} text="EVENTS" />
        </Link>
        <Link to="/newsletter" style={{ textDecoration: 'none' }}>
          <Button className={Classes.MINIMAL} text="NEWS LETTER" />
        </Link>
      </NavbarGroup>
    </Navbar>
  );

};


Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
export default Header;
