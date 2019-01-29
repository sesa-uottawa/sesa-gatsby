import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
    background: 'rebeccapurple'
  },
};

const Header = ({ siteTitle }) => (
  <div>
    <AppBar position={'static'} style={{backgroundColor: 'rebeccapurple'}}>
      <Toolbar>
        <Typography variant={'h6'} color={'inherit'}>
          {siteTitle}
        </Typography>
        <Button style={{position: 'absolute', right: 5}} color={'inherit'}>Sample Button</Button>
      </Toolbar>
    </AppBar>
  </div>
)
export default Header
