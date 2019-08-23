// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.newName = attributes.name;
        this.newAge = attributes.age;
        this.newLocation = attributes.location;
    }
    speak(){
      return `Hello my name is ${this.newName}, I am from ${this.newLocation}`;
    }
}

class Instructor extends Person{
    constructor(instructAttributes){
        super(instructAttributes);
        this.newSpecialty = instructAttributes.specialty;
        this.newFavLanguage = instructAttributes.favLanguage;
        this.newCatchPhrase = instructAttributes.catchPhrase;
        this.newSubject = instructAttributes.subject;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student.newName} recieves a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.newPreviousBackground = studentAttributes.previousBackground;
        this.newClassName = studentAttributes.className;
        this.newFavSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(){
        return `${this.newFavSubjects}`
    }
    PRAssignment(subject){
        return `${this.newName} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.newName} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes);
        this.newGradClassName = pmAttributes.gradClassName;
        this.newFavInstructor = pmAttributes.favInstructor;
    }
    standUp(channel){
        return `${this.newName} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.newName} debugs ${student.newName}'s code on ${subject}`;
    }
}

const john = new Instructor({
    name: 'John',
    location: 'New York',
    age: 28,
    favLanguage: 'JavaScript',
    specialty: 'Full-stack',
    catchPhrase: 'Have a great day'

});

const hannah = new Instructor({
    name: 'Hannah',
    location: 'Chicago',
    age: 28,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Helllooo'

});

const april = new Student({
    name: 'April',
    location: 'California',
    age: 25,
    previousBackground: 'sales',
    className: 'CS132',
    favSubjects: [
        'HTML',
        ' CSS',
        ' Javascript',
    ],
});

const zack = new Student({
    name: 'Zack',
    location: 'Holland',
    age: 22,
    previousBackground: 'medicine',
    className: 'CS132',
    favSubjects: [
        ' HTML',
        ' React',
        ' Node',
    ],
});
const laura = new ProjectManager({
    name: 'Laura',
    location: 'Atlanta',
    age: 32,
    favLanguage: 'React',
    specialty: 'Back-end',
    catchPhrase: 'Good luck',
    gradClassName: 'CS1',
    favInstructor: 'John'
});

const jackson = new ProjectManager({
    name: 'Jackson',
    location: 'Florida',
    age: 40,
    favLanguage: 'React',
    specialty: 'Full-stack',
    catchPhrase: 'Hey there',
    gradClassName: 'CS2',
    favInstructor: 'Hannah'
});
console.log(john.speak());
console.log(laura.speak());
console.log(april.speak());
console.log(hannah.speak());
console.log(zack.speak());
console.log(john.demo("CSS"));
console.log(hannah.demo("CSS"));
console.log(john.grade(april, "Javascript"));
console.log(april.listsSubjects());
console.log(zack.listsSubjects());
console.log(april.PRAssignment("Node"));
console.log(april.sprintChallenge("Advanced Javascript"));
console.log(laura.standUp("web23"));
console.log(jackson.standUp("IOS2"));
console.log(laura.debugsCode(april, "Computer Science"))
