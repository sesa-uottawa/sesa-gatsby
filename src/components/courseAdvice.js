import React from 'react';
import '../resources/styles/courseAdvice.css';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

const styles = theme =>({
   root: {
      background: '#ffa000',
      color: 'whitesmoke',
      border: '0.20rem solid #ffa000',
      height: "12rem",
      width: "12rem",
      fontSize: '1.5rem',
      cursor: 'pointer',
      transition: "200ms linear",
      textTransform: "uppercase",
   }
 });

const CourseAdvice = (props) => {

   const { classes } = props;

   return(
      <div id='courseAdvice'>
         <h1>COURSE ADVICE</h1>
         <div>
            <div id='courseSelection'>
               <Grid container spacing={24}>
                  <Grid item xs={3} spacing={2}>
                     <Paper hover className="Paper" classes={{ root: classes.root }}>
                        paper
                     </Paper>
                  </Grid>
                  <Grid item xs={3} spacing={2}>
                     <Paper hover className="Paper" classes={{ root: classes.root }}>
                        paper
                     </Paper>
                  </Grid>
                  <Grid item xs={3} spacing={2}>
                     <Paper hover className="Paper" classes={{ root: classes.root }}>
                        paper
                     </Paper>
                  </Grid>
                  <Grid item xs={3} spacing={2}>
                     <Paper hover className="Paper" classes={{ root: classes.root }}>
                        paper
                     </Paper>
                  </Grid>
                  <Grid item xs={3} spacing={2}>
                     <Paper hover className="Paper" classes={{ root: classes.root }}>
                        paper
                     </Paper>
                  </Grid>
                  <Grid item xs={3} spacing={2}>
                     <Paper hover className="Paper" classes={{ root: classes.root }}>
                        paper
                     </Paper>
                  </Grid>
                  <Grid item xs={3} spacing={2}>
                     <Paper hover className="Paper" classes={{ root: classes.root }}>
                        paper
                     </Paper>
                  </Grid>
                  <Grid item xs={3} spacing={2}>
                     <Paper hover className="Paper" classes={{ root: classes.root }}>
                        paper
                     </Paper>
                  </Grid>
                  <Grid item xs={3} spacing={2}>
                     <Paper hover className="Paper" classes={{ root: classes.root }}>
                        paper
                     </Paper>
                  </Grid>
                  <Grid item xs={3} spacing={2}>
                     <Paper hover className="Paper" classes={{ root: classes.root }}>
                        paper
                     </Paper>
                  </Grid>
                  <Grid item xs={3} spacing={2}>
                     <Paper hover className="Paper" classes={{ root: classes.root }}>
                        paper
                     </Paper>
                  </Grid>
                  <Grid item xs={3} spacing={2}>
                     <Paper hover className="Paper" classes={{ root: classes.root }}>
                        paper
                     </Paper>
                  </Grid>
               </Grid>
            </div>
         </div>
      </div>
   );
}

export default withStyles(styles)(CourseAdvice)