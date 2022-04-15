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

  mercury(age) {
    this.mercAge += Math.floor((age / 0.24));
  }

  venus(age) {
    this.venAge += Math.floor((age / 0.62));
  }

  mars(age) {
    this.marAge += Math.floor((age / 1.88));
  }

  jupiter(age) {
    this.jupAge += Math.floor((age / 11.86));
  }

  lifeExpect(age) {
    if(age <= 73) {
      this.lifeExp = (73 - age);
      return("According to my calculations you've still got " + this.lifeExp + "years left!")
    }else {
      this.lifeExp = (age - 73);
      return("You're already " + this.lifeExp + "over the expected life span! Way to go!")
    }
  }
}