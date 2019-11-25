import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardMedia, CardContent } from '@material-ui/core';

const MemberProfile = ({
  memberName,
  memberTitle,
  memberTenure,
  photoFile,
}) => {
  var file = 'default-male-photo.png';
  if (photoFile) {
    file = photoFile;
  }
  return (
    <Card>
      <CardMedia
        component="img"
        style={{
          height: '200px',
          width: '200px',
          borderRadius: '50%',
          margin: '10px auto 0 auto',
        }}
        image={require('../../resources/images/currentMembers/' + file)}
        title={memberName}
      />
      <CardContent>
        <Typography variant="subtitle1" align="center" color="primary">
          {memberName}
        </Typography>
        <Typography align="center" color="secondary">
          {memberTitle}
        </Typography>
        <Typography align="center" color="secondary">
          {memberTenure}
        </Typography>
      </CardContent>
    </Card>
  );
};

MemberProfile.propTypes = {
  /* Name of Member */
  memberName: PropTypes.string.isRequired,
  /* Their position/title in SESA */
  memberTitle: PropTypes.string.isRequired,
  /* How long they have been a part of SESA (format: Year-Year) */
  memberTenure: PropTypes.string.isRequired,
  /* Name of image file in resources/images/currentMembers that will be displayed*/
  photoFile: PropTypes.string,
};

export default MemberProfile;
