import React from 'react';
import { Link } from 'gatsby';
import Grid from '@material-ui/core';
import MemberProfile from './memberProfile';
import Avatar from '@material-ui/core';
import Typography from '@material-ui/core';

const currentMembers = [
  {
    name: "Anushka Paliwal",
    title: "President",
    tenure: "2015-Present",
    photoFile: ""
  },
  {
    name: "Tole Olubode",
    title: "Vice President",
    tenure: "2017-Present",
    photoFile: ""
  },
  {
    name: "Faizaan Christie",
    title: "VP Academic",
    tenure: "2018-Present",
    photoFile: ""
  },
  {
    name: "Anthony Nader",
    title: "VP Marketing",
    tenure: "2016-Present",
    photoFile: ""
  },
  {
    name: "Melody Habbouche",
    title: "VP Communication",
    tenure: "2015-Present",
    photoFile: ""
  },
  {
    name: "Harsh Gupta",
    title: "VP Events",
    tenure: "2018-Present",
    photoFile: ""
  },
  {
    name: "Amelie Khan",
    title: "VP Community Engagement",
    tenure: "2017-Present",
    photoFile: ""
  },
  {
    name: "Munir Aljawahari",
    title: "Graphic Designer",
    tenure: "2017-Present",
    photoFile: ""
  },
  {
    name: "Sagal Maxamud",
    title: "Academic Coordinator",
    tenure: "2018-Present",
    photoFile: ""
  },
  {
    name: "Maulik Shah",
    title: "Event Coordinator",
    tenure: "2018-Present",
    photoFile: ""
  },
  {
    name: "Sanat Nayar",
    title: "Event Coordinator",
    tenure: "2018-Present",
    photoFile: ""
  },
  {
    name: "Ian Desson",
    title: "Web Master",
    tenure: "2017-Present",
    photoFile: ""
  },
  {
    name: "Timi Owoturo",
    title: "Web Director",
    tenure: "2018-Present",
    photoFile: ""
  },
  {
    name: "Owen Anderson",
    title: "Web Director",
    tenure: "2018-Present",
    photoFile: ""
  }
]


const MembersGrid = () => (
  <div>
    <Typography align='center' variant='title'>
      Awesome Team of Execs
    </Typography>
    <Typography align='center' variant='subtitle'>
      The "A-Team" for Short
    </Typography>
    <Grid>
      {
        currentMembers.slice(0,6).map(function(member, index){
          return (<MemberProfile
            memberName={member.name}
            memberTitle={member.title}
            memberTenure={member.tenure}
            photoFile={member.photoFile}>
            </MemberProfile>
          )
        }
       )
      }
    </Grid>
  </div>
)
export default MembersGrid