// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.newName = attributes.name;
        this.newAge = attributes.age;
        this.newLocation = attributes.location;
    }
    speak(){
      return `Hello my name is ${this.name}, I am from ${this.location}`;
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
    demo(){
        return `Today we are learning about ${this.subject}`;
    }
    grade(student, subject){
        return `${student.name} recieves a perfect score on ${subject}`;
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
        return `${this.favSubjects}`
    }
    PRAssignment(){
        return `${this.name} has submitted a PR for ${this.subject}`;
    }
    sprintChallenge(){
        return `${this.name} has begun sprint challenge on ${this.subject}`;
    }
}

class ProjectManagers extends Instructors{
    constructor(pmAttributes){
        super(pmAttributes);
        this.newGradClassName = pmAttributes.gradClassName;
        this.newFavInstr
    }
}