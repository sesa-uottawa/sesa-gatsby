import React from 'react';
import { Link } from 'gatsby';
import Grid from '@material-ui/core';
import { Card, CardMedia, CardContent }
  from '@material-ui/core';
import Avatar from '@material-ui/core';
import Typography from '@material-ui/core';


const Profile = ({Image, Name, Title, Tenure}) => (
  <div>
    <Card>
      <CardMedia 
        image = {Image}
      />
      <CardContent>
        <Typography align='center' variant='h2'>
          {Name}
        </Typography>
        <Typography align='center' variant='h3'>
          {Title}
        </Typography>
        <Typography align='center' variant='h4'>
          {Tenure}
        </Typography>
      </CardContent>
    </Card>
  </div>
)

const MembersGrid = () => (
  <div>
    <Typography align='center' variant='title'>
      Awesome Team of Execs
    </Typography>
    <Typography align='center' variant='subtitle'>
      The "A-Team" for Short
    </Typography>
    <Grid>
      
    </Grid>
  </div>
)
export default MembersGrid