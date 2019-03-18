import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import OutlinedInput from '@material-ui/core/OutlinedInput';
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
  <Navbar className={Classes.DARK}>
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

