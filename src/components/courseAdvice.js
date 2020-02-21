import React from 'react';
import '../resources/styles/courseAdvice.css';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';

const courses = [
   {
      title: 'Introduction to Linear Algebra',
      body: `  
         Intro to Linear Algebra (MAT 1341) starts off as one of the most difficult 
         courses in 1st year. In MAT 1341 you will be learning about complex numbers, 
         vector and scalar product, projections, vector spaces, linear independence, 
         function spaces, solutions to systems of linear equations, matrix algebra, determinants, eigenvalues, eigenvectors, projections and linear transformations. 
         The course can move very quickly since it has a lot of material to cover. 
         <br><br>
         For the mathematically inclined, the first half of the course will offer a good challenge. For those who struggle with math, you may find it quite difficult. However the second part of the course is much easier. If you are struggling with the first midterm's material, we encourage you to keep working at it, as it will get easier as the semester progresses. 
         The assignments can be very challenging but offer good practice for the midterms/final. 
         We suggest to head down to the math help centre located in the basement of Marion and work on the assignments there. 
         You will be able to ask questions to the tutors as well as to other fellow classmates.
      `
   },
   {
      title: `Introduction to Computing I`,
      body: `  
         Introduction to Computing I (ITI 1120), for most people this will be their first
         programming experience. This course uses the Python programming language. You will be learning about variable
         types, classes, conditions, parameters, methods, loops, recursion, arrays, 2d
         arrays and a small introduction to object oriented programming. This class at first
         seems simple and straightforward, however for those who have relatively no previous
         coding experience, it can prove to be quite challenging.
         <br><br>
            It's no lie that when learning how to code you MUST practice. If you don't
         understand a concept presented in class, there is no better way to clarify it for
         yourself than to jump in and play around with some code. However if you're
         still having difficulty understanding a concept or completing an assignment don't
         be afraid to ask someone for help. You can ask a TA, your professor, a friend or
         even us here at SESA. SESA also offers academic study sessions for this course.<br><br>
         If you want to prepare, practice or just get ahead of the game check out the following learn-to-code sites:

         <a target="_blank" href="https://buckysroom.org/videos.php?cat=31">buckysroom.com</a>,
         <a target="_blank" href="http://www.codecademy.com/">codecademy.com</a>, and
         <a target="_blank" href="http://codingbat.com/">codingbat.com</a>.
      `
   },
   {
      title: `Introduction to Computing II`,
      body: `
         Introduction to Computing II (ITI 1121) starts off where Introduction to Computing I (ITI
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
         <a target="_blank" href="http://www.informit.com/articles/article.aspx?p=2436668">Comparing Python Object-Oriented Code with Java</a>
      `
   },
   {
      title: 'Engineering Mechanics',
      body: `  
         Engineering mechanics requires a very technical mindset and a lot of patience as well to solve problems. 
         One mistake in any calculation will throw the answer off completely and do not expect all professors to be lenient in giving part marks. 
         To be fair, in the real world, that one small mistake can result in severe consequences (bridges/structures collapsing). 
         We advise you to double or even triple check your answers before finishing midterms/exams. 
         A solutions manual will definitely come in handy for assignments (most questions will be assigned from the textbook). 
         A little bit of googling may even help you find some solutions online 😉. Make sure to understand all questions thoroughly though. 
         Your exams/midterms will most likely consist of a few long answer questions combining all the concepts learnt throughout the course, 
         so make sure not to miss out on any topics.
      `
   },
   {
      title: 'Physics 1',
      body: `  
      <strong>We highly recommend that you attend all classes for this course.</strong>
      <br>
      Many practice problems and important examples will be discussed during lectures. 
      From our experience, Engineering Physics is significantly harder than the type of physics learnt throughout highschool. 
      Just memorizing examples will not fly by in this course. 
      You will have to read up and understand the concepts and theory behind all questions. 
      Doing well in this class will take up a significant amount of your study time so do not be afraid to consult the professor 
      for extra help after class.
      <br><br>
      Watch out for weekly assignments and quizzes each week which can be time consuming, 
      don't leave them to the last minute. Some profs offer bonus points, so keep a look out for them! 
      If you’re having trouble, there’s a Physics help center in Tabaret. 
      To get the most out of your visit to the physics center, make sure that you’ve tried solving the problem 
      (aka don’t bring your blank assignment expecting people to help you fill in the blanks), 
      and pinpoint where exactly what you don't understand of where you got stuck.
      `
   },
   {
      title: 'Calculus',
      body: `  
         <strong>Calculus I</strong><br><br>
         The best advice we can give for Calculus I is <em>practice, practice, practice.</em> Don’t fall behind on
         the homework questions, some of this material may start off as high school calculus but as new material is introduced the course gets significantly harder to handle if you don't start off with a good work ethic. Do ALL the homework questions as the material is covered in class and try to tackle extra problems if you have time. A lot of questions are going
         to be assigned so last minute crunching will not work with this course. Wolframalpha will be extra handy
         especially if you are stuck on what steps to do when integrating. The majority of your study hours will be
         spent on this course so make sure to stay organized and not fall behind in class. <br><br>

         <strong>Calculus II</strong><br><br>
         Things become even more difficult with Calculus II. If you did poorly in Calculus I, prepare yourself for
         the worst in Calculus II. If you did well in Calculus I, still expect the content to be extremely tedious and difficult.
         Once again, practice, practice, practice. You’ll be diving into new concepts such as power series,
         directional derivatives, and eulers method for differential equations. Make sure to show up to all classes
         and solve problems using the specific technique taught by the professor. Your answer may be correct
         but there’s a possibility you will lose marks for not following their method.
         <br><br>
         
         <strong>Note:</strong><br>Exams and tests will generally include one question from each section covered, so it's important to understand the material and be able to solve the math problems related to them. Online assignments are a great way to improve your grades, so don't skip out on them!<br>
         DGD's are usually mandatory for both these classes, they will either take attendance or have pop quizzes, so go to the class from start to finish to be sure you won't miss out.
      `
   },
   {
      title: 'Digital Systems',
      body: `  
         We will admit this is one of the easier courses for the semester but that does not mean you should take it lightly. 
         Logic functions may seem simple at first but things will become more complex as you start building sequential circuits. 
         Expect to be stuck waiting in lab tutorials for an extended period of time. 
         The TAs will be scarce and even if you have completed your objectives, you will spend the majority of time 
         waiting for the TAs to come over to verify your results. A solution to this situation would be to complete 
         the labs prior to the lab on one of the SITE computers and show the TAs when the lab starts. 
         Very little theory is required in this course, just finish all questions and assignments assigned and 
         you should be able to pass with a decent grade. The solutions manual will be very handy to have in the course as well.
      `
   },
   {
      title: 'Discrete Mathematics for Computing',
      body: `  
         If you have taken discrete mathematics in highschool this course should be fairly easy for you. 
         However, most people find discrete to be one of the more difficult first year courses. 
         It begins simple with truth tables and propositional logic and then becomes more difficult when 'proofs' come into play. 
         Students find 'proofs' difficult because this will be the first time for most of you to prove a mathematical statement 
         formally.
         <br><br>
         <b>For example:</b> prove that two odd numbers always add to an even number. 
         The latter statement is extremely simple but chances are that if you havent taken discrete you would know how to answer that 
         question as fast as you should. <br><br>

         <span style="color: #3c763d;"><strong>Answer:</strong> An odd number can be written as '2k + 1' where k is an arbitrary integer. 
         Then for arbitrary integers m and n, (2m + 1) + (2n + 1) = 2(m + n + 1), which is even divisible by two and therefore even.</span>
         
         <br><br>
			This course is an introduction to the math that is most commonly used in computing. You will be using and developing from these basics in many courses during your undergrad. If you need help see your prof, a TA, a friend or a SESA member. 
      `
   },
   {
      title: 'Principles of Chemistry',
      body: `  
			Principles of Chemistry (CHM 1311) consists mostly of a review from High
			school. In CHM 1311 you will be learning about: chemical bonding, molecular
			geometry, chemical equations, matter, solutions, redox reactions, electrochemistry, kinetics and equilibrium, ionic equilibria and acids and bases. Principles of Chemistry seems to aim at being a review from high school while increasing the difficulty.
            
         <br><br>


			CHM 1311 consists of <b>two parts</b>: a lab and a lecture. Every week
			students will have a 3 hour lab along with a lab report, 3 hours of lectures
			and an assignment on the infamous Mastering Chemistry. Principles
			of Chemistry is probably the most time consuming course you will encounter in your
			first year. While the midterms/final can be quite difficult (can depend on professors sometimes), doing well on the
			assignments, lab reports and in class participation marks can give you a much
			needed grade boost. We <em>recommend</em> working on the homework questions with some friends, it
			will make them much easier, less time consuming and maybe a little fun. For some
			chemistry can be quite difficult, however luckily there is a lot of help available
			if your having a hard time. Make sure to get help as soon as possible before you
			fall too far behind.
      `
   },
   {
      title: 'Technical Report Writing',
      body: `  
         The focal point of this course is to teach you how to structure and write technical reports. Which is why,
         our final exam will be replaced by a final report in which you will demonstrate all the skills you have learned over the 
         course of the semester. This course will be easy if you attend your lectures and DGDs, 
         the profs will give examples in class as to their expectations, 
         so if you don't show up, you will miss out on some good tips! 
         <br><br>
         If you’re stuck while writing your report, don’t fret because there are tons of resources to help you out: 
         check out the library (you can book a researching session with the librarian), make an appointment at the 
         <a href="https://sass.uottawa.ca/en/writing">Academic Writing Help Center</a> and as always ask questions in class to your prof or TA. 
         course will be very helpful for writing your CO-OP report and techical writing during your CO-OP placement.
      `
   },
   {
      title: 'General Advice',
      body: `  

      If you’re having trouble with concepts and course material, you can visit your prof/TAs during office hours. 
      They’re here for you and ready to help!
      <br><br>
      Actually listen in lectures. This seems like a no brainer but 
      listening in class and taking notes can save you hours of reading on your own time. 
      <br><br>
      You’ve heard this a million times now (all you procrastinators) and you’ll hear it again: it really pays to start early. 
      University courses place a lot of weight on exams so you don't want to start studying the night before a midterm worth 30% of your overall grade. 
      This being said the course syllabus will often show a breakdown of how your final grade will be determined (as well as important test dates). 
      Use this to your advantage!
      <br><br>
      University life should not only be about studying and trying to get good grades. 
      Get involved! Tons of options: volunteering, work-study, clubs, hackathons, conferences, research, school events, international exchange... 
      the list is endless. Remember, balance is important.
      <br><br>
      You’re not in high school anymore, and you’re no longer confined by the limitations that high schools have placed around you. 
      Keep that in mind as you get involved and explore your interests.<br><br>
      There are SO many resources on campus (academic help centres, etc), and not all of them are always used. 
      Make sure to check them out and use them!
      <br><br>
      If you’re worried about failing a class, talk to your prof and undergrad office. 
      Undergrad office peeps are super nice and will help you guys (a lot), because we don’t want you dropped from the program. 
      But don't put this off, the undergrad office works with defined deadlines, be responsible and look it up ahead of time.
      <br><br>
      Group studying sessions are amazing (if you dont get distracted)!! 
      <br><br>

      `
   },
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
      courseIndex: 0
   };
  
   handleClickOpen = (index) => {
      this.setState({ open: true, courseIndex: index});
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
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ () => {this.handleClickOpen(0)} }>
                     Linear Algebra
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ () => {this.handleClickOpen(1)} }>
                     Intro to Computing I
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ () => {this.handleClickOpen(2)} }>
                     Intro to Computing II
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ () => {this.handleClickOpen(3)} }>
                     Engineering Mechanics
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ () => {this.handleClickOpen(4)} }>
                     Physics
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ () => {this.handleClickOpen(5)} }>
                     Calculus I / Calculus II
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ () => {this.handleClickOpen(6)} }>
                     Digital Systems
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ () => {this.handleClickOpen(7)} }>
                     Discrete Mathematics
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ () => {this.handleClickOpen(8)} }>
                     Chemistry
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ () => {this.handleClickOpen(9)} }>
                     Technical Report Writing
                  </Button>
               </Grid>
               <Grid item xs={3} spacing={2}>
                  <Button className='button' classes={{ root: this.props.classes.root}} onClick={ () => {this.handleClickOpen(10)} }>
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
               <DialogTitle id="alert-dialog-title" style={{fontFamily: "'Raleway', sans-serif", fontSize:'1.25em'}}>{ courses[this.state.courseIndex].title }</DialogTitle>
               <DialogContent>
                  <DialogContentText 
                     id="alert-dialog-description" 
                     style={{fontFamily: "'Raleway', sans-serif", fontSize:'1.20em'}}
                     dangerouslySetInnerHTML={{ __html: courses[this.state.courseIndex].body }}
                  >
                  </DialogContentText>
               </DialogContent>
               <DialogActions>
                  <Button variant="outlined" color="primary" style={{fontFamily: "'Raleway', sans-serif", fontSize:'1em'}} onClick={this.handleClose} autoFocus>
                  Ok
                  </Button>
               </DialogActions>
            </Dialog>
         </div>
      );
   };
}

export default withStyles(styles)(CourseAdvice);
