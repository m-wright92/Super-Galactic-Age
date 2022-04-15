export default class UserObject {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.mercAge = 0;
    this.venAge = 0;
    this.marAge = 0;
    this.jupAge = 0;
    this.lifeExp = 0;
  }

  mercury() {
    this.mercAge += Math.floor((this.age / 0.24));
  }

  venus() {
    this.venAge += Math.floor((this.age / 0.62));
  }

  mars() {
    this.marAge += Math.floor((this.age / 1.88));
  }

  jupiter() {
    this.jupAge += Math.floor((this.age / 11.86));
  }

  lifeExpect(age) {
    if(age <= 73) {
      this.lifeExp = (73 - age);
      return("According to my calculations you've still got " + this.lifeExp + "years left!");
    }else {
      this.lifeExp = (age - 73);
      return("You're already " + this.lifeExp + "over the expected life span! Way to go!");
    }
  }
}