import React from 'react';
import Grid from '@material-ui/core/Grid';
import MemberProfile from './memberProfile';
import Typography from '@material-ui/core/Typography';
import createTypography from '@material-ui/core/styles/createTypography';
import createPalette from '@material-ui/core/styles/createPalette';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Helmet from 'react-helmet';

class MembersGrid extends React.PureComponent {
  currentMembers = [
    {
      name: 'Tolu Olubode',
      title: 'President',
      tenure: '2017-Present',
      photoFile: 'tolu.jpg',
    },
    {
      name: 'Harsh Gupta',
      title: 'Vice President',
      tenure: '2018-Present',
      photoFile: 'harsh.jpeg',
    },
    {
      name: 'Faizaan Chishtie',
      title: 'VP Academic',
      tenure: '2018-Present',
      photoFile: 'faiz.jpg',
    },
    {
      name: 'Sanat Nayar',
      title: 'VP Events',
      tenure: '2018-Present',
      photoFile: '',
    },
    {
      name: 'Maulik Shah',
      title: 'VP Events',
      tenure: '2017-Present',
      photoFile: 'maulik.png',
    },
    {
      name: 'Afrah Ali',
      title: 'VP Design',
      tenure: '2019-Present',
      photoFile: 'default-female-photo.jpg',
    },
    {
      name: 'Ian Desson',
      title: 'Web Lead',
      tenure: '2017-Present',
      photoFile: 'ian.jpg',
    },
    {
      name: 'Sagal Maxamud',
      title: 'Academic Coordinator',
      tenure: '2018-Present',
      photoFile: 'default-female-photo.jpg',
    },
    {
      name: 'Daniel Shwan',
      title: 'Web Developer',
      tenure: '2019-Present',
      photoFile: 'dshwan.jpg',
    },
    {
      name: 'Melissa Wu',
      title: 'Web Developer',
      tenure: '2019-Present',
      photoFile: 'default-female-photo.jpg',
    },
    {
      name: 'Haran Jeyachandra',
      title: 'Social Coordinator',
      tenure: '2019-Present',
      photoFile: '',
    },
    {
      name: 'Luka David',
      title: 'Socials Coordinator',
      tenure: '2019-Present',
      photoFile: '',
    },
    {
      name: 'Bhalachandra Malghan',
      title: 'Events Coordinator',
      tenure: '2019-Present',
      photoFile: '',
    },
    {
      name: 'Hrithik Shah',
      title: 'Events Coordinator',
      tenure: '2019-Present',
      photoFile: '',
    },
    {
      name: 'Dharitri Dixit',
      title: 'Events Coordinator',
      tenure: '2019-Present',
      photoFile: 'default-female-photo.jpg',
    },
  ];

  memberProfileGenerator = (startIndex, endIndex) =>
    this.currentMembers
      .slice(startIndex, endIndex)
      .map(function(member, index) {
        return (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            lg={4}
            style={{
              width: '30%',
            }}
          >
            <MemberProfile
              memberName={member.name}
              memberTitle={member.title}
              memberTenure={member.tenure}
              photoFile={member.photoFile}
            />
          </Grid>
        );
      });

  render() {
    var palette = createPalette({
      primary: {
        main: '#990012',
      },
      secondary: {
        main: '#545454',
        light: '#cacaca',
      },
    });

    var typography = createTypography(palette, {
      fontFamily: 'Raleway',
    });

    var theme = createMuiTheme({
      palette: palette,
      typography: typography,
    });
    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{
          textTransform: 'uppercase',
          paddingBottom: '40px',
        }}
      >
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway"
            rel="stylesheet"
          />
        </Helmet>
        <MuiThemeProvider theme={theme}>
          <Typography
            align="center"
            variant="title"
            color="primary"
            style={{
              fontSize: '3rem',
              paddingTop: '40px',
            }}
          >
            Awesome team of execs
            <Typography
              align="center"
              variant="subtitle1"
              color="secondary"
              style={{
                fontSize: '80%',
              }}
            >
              The "A-Team" for Short
            </Typography>
          </Typography>
          <br />
          <br />
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={16}
            style={{
              width: '75%',
            }}
          >
            {this.memberProfileGenerator(0, 6)}
          </Grid>
          <br />
          <br />
          <Typography
            align="center"
            variant="title"
            color="primary"
            style={{
              fontSize: '3rem',
            }}
          >
            Directors
          </Typography>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={16}
            style={{
              width: '75%',
            }}
          >
            {this.memberProfileGenerator(6)}
          </Grid>
        </MuiThemeProvider>
      </Grid>
    );
  }
}
export default MembersGrid;
