// // CODE here for your Lambda Classes
// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person  {
    constructor (attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    
  }
    
      speak() {
        return console.log (`Hello my name is ${this.name}, I am from ${this.location}`)
      }
    };
  
// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'


class Instructor extends Person {
    constructor (attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
   
  }
        demo(subject) {
            return console.log(`Today we are learning about ${subject}`);

           }

           grade(student,subject='PE') {
            
                return console.log(`${student.name} receives a perfect score on ${subject}`)
 
               
    
           }
        }


  // #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`


class Student extends Person {
    constructor (attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubject = attributes.favSubject;
   
  }
       listSubjects(favSubject) {
           for(let i = 0; i < favSubject.length; i++) {
               return console.log(favSubject[i]);
           };
       }

       PRAssignment(subject) { 
            return  console.log(`${this.name} has submitted a PR for ${subject}`);
       }

       sprintChallenge(subject) {
            return console.log(`${this.name} has begun sprint challenge on ${subject}`)      

  }};

  

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

    class ProjectManager extends Instructor {
        constructor (attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
        
     }
       standUp (channel) {
            return console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
            }

       debugsCode (student,subject) { 
            return console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
       }

       
  };



  const Stacy = new Student ({
    name: 'Stacy',
    age: 39,
    location: 'Batesville',
    previousBackground: 'Associates Degree in CIS',
    className: 'web20',
  
    }
  )
    
  const Bailey = new Student ({
    name: 'Bailey',
    age: 17,
    location: 'Pine Bluff',
    previousBackground: 'none',
    className: 'web6pt',
  
    }
  )
  const Autumn = new Student ({
    name: 'Autumn',
    age: 15,
    location: 'Cave City',
    previousBackground: 'none',
    className: 'web5pt',
  
    }
  )
  const Dan = new Instructor({
    name: 'Dan',
    age: 31,
    location: 'Denver',
    previousBackground: '20+ years',
    className: 'all',
    specialty: 'Front-end',
    favLanguage:'JavaScript',
    catchPhrase: 'Here kitty kitty'
    }
  )
  const Josh = new Instructor({
    name: 'Josh',
    age: 33,
    location: 'Philly',
    previousBackground: '10+ years',
    className: 'Web 17',
    specialty: 'REACT',
    favLanguage:'Java',
    catchPhrase: 'You got this!'
    }
  )
  const Olympia = new Instructor({
    name: 'Olympia',
    age: 29,
    location: 'Seattle',
    previousBackground: '7 years',
    className: 'all',
    specialty: 'Student Success',
    favLanguage:'JavaScript',
    catchPhrase: 'Here kitty kitty'
    }
  )
    
  const Omar = new ProjectManager({
    name: 'Omar',
    age: 26,
    location: 'Tampa',
    previousBackground: '2 years',
    className: 'web20',
    specialty: 'debugging',
    favLanguage:'Python',
    catchPhrase: 'Did you turn in your stand up?',
    gradClassName:'CS401',
    favInstructor:'Samuel L Jackson',
    }
  )

  const William = new ProjectManager({
    name: 'William',
    age: 29,
    location: 'Atlanta',
    previousBackground: '11 years',
    className: 'ECON203',
    specialty: 'array',
    favLanguage:'C#',
    catchPhrase: 'Winter is coming',
    gradClassName:'web4pt',
    favInstructor:'Steve Jobs',
    }
  )
    
    
  Stacy.PRAssignment('Civics');
  Autumn.sprintChallenge("Dark Arts");
  Omar.standUp('web20');
  William.debugsCode(Bailey,'JavaScript');
  Stacy.listSubjects('History');
  Bailey.speak();
  Dan.grade(Stacy, 'PE');
  Josh.demo('Python');
  Olympia.grade(Autumn,'Transfiguration');
  

// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
