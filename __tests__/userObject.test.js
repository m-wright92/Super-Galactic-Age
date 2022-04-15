import UserObject from './../src/js/userObject.js'

describe ('userObj', () => {
  let user;

  beforeEach(() => {
    user = new UserObject("mike", 29)
  })

  test('should return the user object age', () => {
    expect(user.age).toEqual(29);
  })

  test('should return the users age in mercury-years', () => {
    user.mercury(user.age);
    expect(user.mercAge).toEqual(120);
  })

  test('should return the users age in venus-years', () => {
    user.venus(user.age)
    expect(user.venAge).toEqual(46);
  })

  test('should return the users age in mars-years', () => {
    user.mars(user.age)
    expect(user.marAge).toEqual(15);
  })
  
  test('should return the users age in jupiter-years', () => {
    user.jupiter(user.age)
    expect(user.jupAge).toEqual(2);
  })

  test('should show remaining years of life expectancy', () => {
    user.lifeExpect();
    expect(user.lifeExp).toEqual(44)
    let oldUser = new UserObject("jim", 84);
    oldUser.lifeExpect();
    expect(oldUser.lifeExp).toEqual(11);
  })
});