export default class UserObject {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.mercAge = 0;
    this.venAge = 0;
    this.marAge = 0;
  }

  mercury(age) {
    this.mercAge += Math.floor((age / 0.24));
  }

  venus(age) {
    this.venAge += Math.floor((age / 0.62));
  }

  mars(age) {
    this.marAge += Math.floor((age / 1.88));
  }
}