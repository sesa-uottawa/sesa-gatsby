import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import { CardMedia, CardContent } from '@material-ui/core';
import createTypography from '@material-ui/core/styles/createTypography';
import createPalette from '@material-ui/core/styles/createPalette';

const palette = createPalette ({
  primary: {
    main:"#990012"
  },
  secondary: {
    main: '#545454',
  }
})

const typography = createTypography(palette, {
  fontFamily: 'Roboto'
})
const theme = createMuiTheme({
  palette: palette,
  typography: typography
});

const MemberProfile = (props) => {
  var file = 'default-male-photo.png'
  if (props.fileName) {
    file = props.fileName;
  }
  return (
    <div>
      <Card
      style= {{
        maxWidth: '207.5px',
        maxHeight: '400px'
      }}>
        <CardMedia
        component="img"
        height="200"
        width="207.5"
        image={ require('../images/currentMembers/'+file) }
        title={ props.memberName }
        />
        <CardContent>
          <MuiThemeProvider theme={theme}>
            <Typography variant="subtitle1" color="primary">{ props.memberName }</Typography>
            <Typography color="secondary">{ props.memberTitle }</Typography>
            <Typography color="secondary">{ props.memberPeriod }</Typography>
          </MuiThemeProvider>
        </CardContent>
      </Card>
    </div>
  )
}

export default MemberProfile
