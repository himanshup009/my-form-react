class Person{
  constructor(name){
    this.name = name;
  }
}
class Student extends Person{
  constructor(name, subject){
    super(name);      
    this.subject = subject;
  }
  greet() {
    console.log(`Hello, I'm ${this.name} and I study ${this.subject}`);
  }
}
const student = new Student("Alice", "Math");
student.greet(); 
