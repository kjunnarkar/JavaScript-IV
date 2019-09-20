// CODE here for your Lambda Classes
class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

const Jack = new Person({
    name: "Jack",
    age: 12,
    location: "San Diego",
});

const Jill = new Person({
    name: "Jill",
    age: 14,
    location: "Los Angeles"
});

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student,subject) {
        return `${student.name} receives a perfect score on ${subject}.`; 
    }
}

const missJames = new Instructor({
    specialty: "Math",
    favLanguage: "Mandarin",
    catchPhrase: "Just do it",
});

const mrSmith = new Instructor({
    specialty: "History",
    favLanguage: "Spanish",
    catchPhrase: "Catch me if you can",
});

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects; 
    }
    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}.`;
    
    }
    sprintChallenge(subject) {
        return `${this.name} has begun Sprint Challenge on ${subject}.`;
    }
}

const Ken = new Student ({
    name: "Ken",
    previousBackground: "Was a student in college.",
    className: "CS 236",
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});

const Barbie = new Student ({
    name: "Barbie",
    previousBackground: "Worked at the University.",
    className: "Math 162",
    favSubjects: ['C++', 'Java', 'Python'],
});

class ProjectManagers extends Instructor {
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to @ ${channel} Stand Up time.`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }

}
const David = new ProjectManagers ({
    name: "David",
    gradClassName: "CS 112",
    favInstructor: "Brit",
});

const Elizabeth = new ProjectManagers ({
    name: "Elizabeth",
    gradClassName: "CS 236",
    favInstructor: "John",
});


console.log(Jack.name);
console.log(Jack.speak());
console.log(Jill.age);
console.log(Jill.speak());
console.log(missJames.catchPhrase);
console.log(mrSmith.favLanguage);
console.log(missJames.demo("Mandarin"));
console.log(mrSmith.grade(Ken, "history"));
Barbie.listsSubjects();
console.log(Ken.sprintChallenge("Math"));
console.log(David.favInstructor);
console.log(David.standUp("web24"));
console.log(Elizabeth.debugsCode(Barbie,"Computer Science"));
