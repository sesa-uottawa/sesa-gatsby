import React, { useState } from 'react';

import '../resources/styles/enrolment-advice.css';

const adviceText = [
  {
    title: 'Understanding your Course Sequence',
    body: `
      The course sequence for students starting the program in Fall 2020 is outlined
      <a target="_blank" href="https://engineering.uottawa.ca/undergraduate-programs/courses/software-2019">here</a>.
      It is highly recommended to follow this sequence exactly,
      as some courses are only offered in fall, winter or spring, or are prerequisites.
      For example, a course only offered in the winter may have a prerequisite only offered in the fall,
      you may need to wait another year (or two if your coop prevents you from taking the prerequisite)
      to take the course if you don't take the prerequisite in the fall you were meant to.
      <br/>
      <span>IMPORTANT:</span> Before making changes to your course sequence meet with an academic advisor.
      If you don’t there may be some issues with your CO-OP status (and no one wants that).
      <br/>
      You can also always contact the
      <a target="_blank" href="https://engineering.uottawa.ca/undergraduate-programs/software-engineering">Software Engineering Program Director</a>
      (should be listed under 'contact us') for help
    `,
  },
  {
    title: 'Choosing Sections',
    body: `
    Some courses, especially 1000 and 2000 level, will have more than one section.
    Some may have more than one lab or tutorial.
    You may choose whichever section fits your schedule best or whichever section has a
    <a target="_blank" href="https://www.ratemyprofessors.com/campusRatings.jsp?sid=1452">recommended prof</a>.
    It is unwise to choose your schedule based on rooms or buildings, those are subject to change (even once the semester starts).
    Always remember it is possible to change sections or courses in the first few weeks.
    Deadlines can be found on the
    <a target="_blank" href="https://www.uottawa.ca/important-academic-dates-and-deadlines/">uottawa dates and deadlines page</a>.
    Keep track of these dates if you think you'll be changing your schedule.
    `,
  },
  {
    title: 'Planning your Schedule',
    body: `
    You can view the
    <a target="_blank" href="https://www.uottawa.ca/course-timetable/">timetables</a>
    for all offered courses usually a month before enrollment.
    Using scheduling tools such as
    <a target="_blank" href="https://digized.github.io/schedule-generator/">Schedule Generator</a>
    you can plan different versions of schedules based on sections offered and courses you may want to take.
    Once the schedule is released you are able to add courses to your shopping cart in enrol.
    You cannot yet register but if you have the courses and sections in your shopping cart,
    the registration takes 2 minutes, logging on and simply registering in all the courses in your cart.
    <br/>
    <span>BE CAREFUL</span>! Classes fill up fast! To guarantee a spot you need to register right away.
    `,
  },
  {
    title: 'My mandatory class is full!',
    body: `
    First add yourself to the waitlist.
    Then email your
    <a target="_blank" href="https://engineering.uottawa.ca/undergraduate-studies-office">academic advisor</a>
    or the prof to find out next steps.
    Sometimes they have the ability to register you in your course.
    The wait list allows the advisors to change rooms to allow more students
    or open up more sections so stay vigilant and keep in contact with the prof or advisor.
    If you don't get into the class talk to your academic advisor about what courses they recommend you take in the place of the mandatory one.
    As a last resort you can also take the equivalent course at Carleton if you don't want to fall behind.
    `,
  },
];

const EnrolmentAdvice = () => {
  const [selectedTextIndex, setSelectedTextIndex] = useState(0);

  return (
    <div id="enrolment-advice">
      <h1 id="enrolment-title">Enrolment Advice</h1>
      <div class="advice-select">
        {adviceText.map((advice, index) => {
          return (
            <div
              class={
                'advice-title' +
                (index === selectedTextIndex ? ' selected' : '')
              }
              onClick={() => setSelectedTextIndex(index)}
            >
              <h2>{advice.title}</h2>
            </div>
          );
        })}
      </div>
      <div
        class="advice-body"
        dangerouslySetInnerHTML={{ __html: adviceText[selectedTextIndex].body }}
      />
    </div>
  );
};
export default EnrolmentAdvice;
