import React from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import { CardMedia, CardContent } from '@material-ui/core'

const MemberProfile = props => {
  var file = 'default-male-photo.png'
  if (props.photoFile) {
    file = props.photoFile
  }
  return (
    <Card>
      <CardMedia
        component="img"
        style={{
          height: '200px',
          width: '200px',
          margin: '10px auto 0 auto'
        }}
        image={require('../../images/currentMembers/' + file)}
        title={props.memberName}
      />
      <CardContent>
        <Typography 
          variant="subtitle1" 
          align="center" 
          color="primary"
          >
          {props.memberName}
        </Typography>
        <Typography 
          align="center" 
          color="secondary"
        >
          {props.memberTitle}
        </Typography>
        <Typography
          align="center"
          color="secondary"
          >
          {props.memberTenure}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MemberProfile
