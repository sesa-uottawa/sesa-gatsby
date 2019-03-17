import React from 'react';
import { Link } from 'gatsby';
import Grid from '@material-ui/core';
import MemberProfile from './memberProfile';
import Avatar from '@material-ui/core';
import Typography from '@material-ui/core';

const MembersGrid = () => (
  <div>
    <Typography align='center' variant='title'>
      Awesome Team of Execs
    </Typography>
    <Typography align='center' variant='subtitle'>
      The "A-Team" for Short
    </Typography>
    <Grid>
      <MemberProfile></MemberProfile>
    </Grid>
  </div>
)
export default MembersGrid