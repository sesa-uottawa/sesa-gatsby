import React, { useState } from 'react';
import {Grid, Button} from '@material-ui/core';


const adviceText = [
  {
    heading: 'Tuition',
    shortBody: "University fees can be quite expensive, especially when pursuing a degree in engineering or other software related programs. On top of tuition, textbooks will leave a heavy dent in your wallet as well.",
    expandedBody: "University fees can be quite expensive, especially when pursuing a degree in engineering or other software related programs. On top of tuition, textbooks will leave a heavy dent in your wallet as well. As members of SESA we've taken a look back at our previous years and have compiled a list of tips and methods that you can use to help reduce these fees and save some extra cash on hand (to maybe spend on that macbook pro you've had your eyes on :p ). Take it or leave it, we sure as hell wish we'd been given these pointers early on!",
    
  },
  {
    heading: 'Time Management',
    shortBody: "Developing time management skills is a journey that can be quite overwhelming especially in Engineering. You'll notice your Arts and Business friends having the time of their life while you spend endless hours and late nights studying away or pulling your hair out over that one compilation error that you can't seem to get rid of.",
    expandedBody: "Developing time management skills is a journey that can be quite overwhelming especially in Engineering. You'll notice your Arts and Business friends having the time of their life while you spend endless hours and late nights studying away or pulling your hair out over that one compilation error that you can't seem to get rid of. Plan out your time and prioritize. It’s okay if you have to give up time working on an assignment worth 5% to spend time studying for your midterm worth 20%. Do what works best for you. Don't be worried though, members of SESA have been through the ups and downs and will definitely help guide you to the right direction in developing effective study habits whilst still enjoying your University life. Work hard, play hard!",
  },
  {
    heading: 'Co-op',
    shortBody: "The Software Engineering program includes a mandatory co-op experience to develop practical and solution-driven thinking. That means that upon graduating, you will have a good amount of real life experience under your belt that will further increase your chances of landing a job.",
    expandedBody: "The Software Engineering program includes a mandatory co-op experience to develop practical and solution-driven thinking. That means that upon graduating, you will have a good amount of real life experience under your belt that will further increase your chances of landing a job. Some students even get offered full-time positions from previous employers. We at SESA understand the importance of CO-OP and will therefore do our best to prepare you for the interviewing process:",
  
  },
];


const AdviceBox = props => {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <Grid container direction="column" alignItems="center"
    xs = {12}
    sm = {6}
    lg = {4}
    style = {{
        padding: "0 15px 0 15px"
    }}>
      <h3>{props.heading}</h3>
      <p> {isExpanded ? props.expandedBody : props.shortBody} </p>
      <Button variant="outlined" color="primary" onClick={() => setExpanded(!isExpanded)}>

        Read {isExpanded ? "Less" : "More"}
      </Button>
    </Grid>
  );
};

const GeneralAdvice = () => {
  return (
    <Grid container direction="row" justify="space-between" alignItems="center" style={{maxWidth:"90%", margin:"0 auto"}}>
      {adviceText.map((advice, index) => {
        return <AdviceBox heading={advice.heading} expandedBody={advice.expandedBody} shortBody={advice.shortBody} />;
      })}
    </Grid>
  );
};

export default GeneralAdvice; //export-can import anywhere else
