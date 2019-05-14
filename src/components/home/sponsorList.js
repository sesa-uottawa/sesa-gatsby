import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import createTypography from '@material-ui/core/styles/createTypography';
import createPalette from '@material-ui/core/styles/createPalette';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

class SponsorList extends React.PureComponent {
  render() {
    var palette = createPalette({
      primary: {
        main: '#990012',
      },
      secondary: {
        main: '#545454',
        light: '#cacaca',
      },
    })

    var typography = createTypography(palette, {
      fontFamily: 'Raleway'
    });

    var theme = createMuiTheme({
      palette: palette,
      typography: typography
    });

    return (
      <div id="home-container-6">
        <MuiThemeProvider theme={theme}>
          <Typography
            variant="h4"
            color="primary"
          >
            Current Sponsors
          </Typography>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={24}
          >
            <Grid item xs={12} sm={6} lg={4}>
              <img src={require('../../images/genatec.png')} alt="Genatec" />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <img
                src={require('../../images/desjardins.png')}
                alt="Desjardins"
              />
            </Grid>
          </Grid>
          <Typography 
          variant="h4"
          color="primary">
            Interested in sponsoring SESA?
          </Typography>
          <Typography variant="subtitle1" color="secondary">
            Please contact us directly at
            <a href="mailto:uottawa.sesa@gmail.com"> uottawa.sesa@gmail.com</a>
          </Typography>
        </MuiThemeProvider>
      </div>
    )
  }
}
export default SponsorList
