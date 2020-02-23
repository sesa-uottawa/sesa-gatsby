import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import '@blueprintjs/core/lib/css/blueprint.css';

// Icon Imports
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';

const Header = ({ siteTitle }) => {
  const headerLinks = [
    { buttonText: 'OUR MISSION', link: '/#mission' },
    { buttonText: 'EVENTS', link: '/#events' },
    { buttonText: 'FIRST YEAR TIPS', link: '/advice' },
  ];

  return (
    <Navbar fixedToTop>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button className={Classes.MINIMAL} text={siteTitle} />
          </Link>
        </NavbarHeading>
        <NavbarDivider />
        {headerLinks.map(headerLink => {
          return (
            <Link to={headerLink.link} style={{ textDecoration: 'none' }}>
              <Button
                className={Classes.MINIMAL}
                text={headerLink.buttonText}
              />
            </Link>
          );
        })}
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <a
          href="https://www.facebook.com/UOttawaSESA/"
          style={{ textDecoration: 'none' }}
        >
          <Button className={Classes.MINIMAL}>
            <FacebookIcon />
          </Button>
        </a>
        <a
          href="https://www.instagram.com/uottawasesa/"
          style={{ textDecoration: 'none' }}
        >
          <Button className={Classes.MINIMAL}>
            <InstagramIcon />
          </Button>
        </a>
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
