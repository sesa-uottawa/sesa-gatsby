import React from 'react';
import '../resources/styles/courseAdvice.css';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';

const course = [
   {
      title: 'Introduction to Linear Algebra',
      body: 
      `Intro to Linear Algebra (MAT 1341) starts off as one of the most difficult 
      courses in 1st year. In MAT 1341 you will be learning about complex numbers, 
      vector and scalar product, projections, vector spaces, linear independence, 
      function spaces, solutions to systems of linear equations, matrix algebra, determinants, eigenvalues, eigenvectors, projections and linear transformations. 
      The course can move very quickly since it has a lot of material to cover. 

      For the mathematically inclined, the first half of the course will offer a good challenge. For those who struggle with math, you may find it quite difficult. However the second part of the course is much easier. If you are struggling with the first midterm's material, we encourage you to keep working at it, as it will get easier as the semester progresses. 
      The assignments can be very challenging but offer good practice for the midterms/final. 
      We suggest to head down to the math help centre located in the basement of Marion and work on the assignments there. 
      You will be able to ask questions to the tutors as well as to other fellow classmates.`
   },
   {
      title: `Introduction to Computing I`,
      body:
      `Introduction to Computing I (ITI 1120), for most people this will be their first
      programming experience. This course uses the Python programming language. You will be learning about variable
      types, classes, conditions, parameters, methods, loops, recursion, arrays, 2d
      arrays and a small introduction to object oriented programming. This class at first
      seems simple and straightforward, however for those who have relatively no previous
      coding experience, it can prove to be quite challenging.

      It's no lie that when learning how to code you MUST practice. If you don't
      understand a concept presented in class, there is no better way to clarify it for
      yourself than to jump in and play around with some code. However if you're
      still having difficulty understanding a concept or completing an assignment don't
      be afraid to ask someone for help. You can ask a TA, your professor, a friend or
      even us here at SESA. SESA also offers academic study sessions for this course.<br><br>
      If you want to prepare, practice or just get ahead of the game check out the following learn-to-code sites:

      <a target="_blank" href="https://buckysroom.org/videos.php?cat=31">buckysroom.com</a>,
      <a target="_blank" href="http://www.codecademy.com/">codecademy.com</a>, and
      <a target="_blank" href="http://codingbat.com/">codingbat.com</a>.`
   },
   {
      title: `Introduction to Computing II`,
      body:
      `Introduction to Computing II (ITI 1121) starts off where Introduction to Computing I (ITI
      1120) ended. Unlike ITI 1120, ITI 1121 uses Java as the main programming language instead of Python. No need to panic,
      Introduction to Computing II starts off with a quick introduction of Java followed by a review of object-oriented programming (OOP)
      then continues on to Abstraction principles, and finally finishes off with an
      introduction to data structures such as lists, stacks, queues, binary search trees,
      and processing of data structures. ITI 1121 builds off of the principles that you
      learned in ITI 1120 and teaches you more advanced principles to further develop
      your programming knowledge.<br><br>
      Also the assignments can be done in
      teams of two. Since
      the assignments are designed to be done in teams, they can be quite difficult and
      time consuming. The assignments get exponentially more time consuming and more difficult, make time for them and start earlier than you think you should! We suggest that you do NOT leave it to the last minute as you WILL
      have a hard time to complete it on time. Again if you need help with an assignment
      or understanding a concept from class, don't hesitate to ask a TA, your professor,
      a friend or even us here at SESA.
      <br><br>

      We cannot emphasize enough that this course IS difficult, and it WILL take a lot of time and effort, do not underestimate this course, it is a prerequisite for other courses later on so it is important that you understand the content.
      <br><br>

      Here are some useful links to help you make the transition from Python to Java:
      <br>
      <a target="_blank" href="http://javarevisited.blogspot.ca/2013/11/java-vs-python-which-programming-laungage-to-learn-first.html">Java vs Python</a>
      <br>
      <a target="_blank" href="http://math-cs.gordon.edu/courses/cps122/handouts-2014/From%20Python%20to%20Java%20Lecture/A%20Comparison%20of%20the%20Syntax%20of%20Python%20and%20Java.pdf">A comparison of the syntax of Python and Java</a>
       <br>
       <a target="_blank" href="http://home.wlu.edu/~lambertk/pythontojava/">From Python to Java</a>
       <br>
       <a target="_blank" href="http://www.informit.com/articles/article.aspx?p=2436668">Comparing Python Object-Oriented Code with Java</a>`
   }
];


const styles = {
   root: {
      backgroundColor: '#3f51b5',
      fontFamily: 'inherit',
      color: 'white',
      border: '0.20rem solid #3f51b5',
      height: "12rem",
      width: "12rem",
      fontSize: '1rem',
      lineHeight: 'normal',
      cursor: 'pointer',
      transition: "150ms linear",
      textTransform: "uppercase",
   }
};



class CourseAdvice extends React.Component{

   state = {
      open: false,
   };
  
   handleClickOpen = () => {
      this.setState({ open: true });
   };
  
   handleClose = () => {
      this.setState({ open: false });
   };
   render() {
      return(
         <div id='courseAdvice'>
            <h1>COURSE ADVICE</h1>
            <Grid container style= {{ width: `50rem`, margin: `0 auto`}} spacing={24}>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ this.handleClickOpen }>
                     Linear Algebra
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ this.handleClickOpen}>
                     Intro to Computing I
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ this.handleClickOpen}>
                     Intro to Computing II
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ this.handleClickOpen}>
                     Engineering Mechanics
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ this.handleClickOpen }>
                     Physics
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ this.handleClickOpen}>
                     Calculus I / Calculus II
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ this.handleClickOpen}>
                     Digital Systems
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ this.handleClickOpen}>
                     Discrete Mathematics
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ this.handleClickOpen}>
                     Chemistry
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ this.handleClickOpen }>
                     Technical Report Writing
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ this.handleClickOpen}>
                     General Advice
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} /* onClick={ this.handleClickOpen}*/>
                  </Button>
               </Grid>
            </Grid>

            <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" >{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" color="primary" style={{'font-family': 'inherited', 'font-size':'1em'}} onClick={this.handleClose} autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
         </div>

         
      );
   };
}

export default withStyles(styles)(CourseAdvice);
