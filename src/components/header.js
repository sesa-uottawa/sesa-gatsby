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
    advice: 'FIRST_YEAR_TIPS'
  };

  return (
    <Navbar fixedToTop>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button className={Classes.MINIMAL} text={siteTitle} />
          </Link>
        </NavbarHeading>
        <NavbarDivider />
        <Link to="/#mission" style={{ textDecoration: 'none' }}>
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
