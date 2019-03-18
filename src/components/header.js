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

const styles = {
  root: {
    flexGrow: 1,
  },
};



const handleChange = event => {
  this.setState({ [event.target.name]: event.target.value });
};

const Header = ({ siteTitle }) => (
  <Navbar>
    <NavbarGroup align={Alignment.LEFT}>
      <NavbarHeading>SESA</NavbarHeading>
      <NavbarDivider />
      <Button className={Classes.MINIMAL} text="OUR MISSION" />
      <Button className={Classes.MINIMAL} text="EVENTS" />
      <Button className={Classes.MINIMAL} text="NEWS LETTER" />
    </NavbarGroup>
  </Navbar>
)
export default Header

