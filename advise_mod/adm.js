/* 
 A. Course Prioritization Filter:
 1. Major requirements + Concomittant (don't forget SD 200 lvl course rule)
    a. Courses with the most satisfied prereqs.
       i. Run satisfied prereq check (1. number of credits needed, 2. courses needed)
    b. Courses with the most dependencies of major requirements
    c. Courses with the most dependencies of general CS courses
    d. Fall/Spring only
 2. Major electives
    *5 year: + 2x400 level
 3. Gen Eds

 B. Flag courses that, if not taken in upcoming semester, will cause push back.
 1. Identify courses that match requirements
     a. Filter out courses that have been taken
      A not taken course will cause push back if:
      1.)it is part of the major requirements
      2.)it has dependencies
      3.)its prereqs have been satisfied
      *push back 2 semesters for fall spring course.

  C. Calculate University and CS GPA
    1. Flag warning if CS GPA below 2.25
    2. Flag warning if University GPA below 2

  D. Identify major req courses with dependencies where grade is less than C
    1. Flag on any courses identified


	
Assumptions:
All 300 level courses require 6 CS credits and CS GPA of >=2.25 
^[125,130,135,136,242,253]it
^[125,135,136,225,235,237]sd
^Special exception of 354, which requires 8.
All 400 level courses have prereqs exempt for GRAD students	
All major requirement courses require a C or better

Questions:
What happens if student gets a D in a major requirement?
What happens if  student gets D in prerequisite, but is already registered for other course? (CSC135=D, registered for 136).
Do grad courses have different grade requirements? No C's etc?
Should I assume specific semester courses, or base more off of courses offered?
Should I ask to see new IT major check sheet?
*/

var deps = require('./dependencies.json');
var stud = require('./student.json');
var courses = require('./courses.json');
var gened = require('./gened_f11.json');
var sequence = require('./sequence.json')
var uit = require('./uit_s16');


 for(var i = 0; i < deps.dependencies.length; i++) {
      console.log(deps.dependencies[i].code);
      console.log(deps.dependencies[i].semOffered);
      console.log(deps.dependencies[i].orCourses);
      console.log(deps.dependencies[i].andCourses);
 }