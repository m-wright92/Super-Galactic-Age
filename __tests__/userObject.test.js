import UserObject from './../src/js/userObject.js'

describe ('userObj', () => {
  let user;
  let oldUser;

  beforeEach(() => {
    user = new UserObject("mike", 29);
    oldUser = new UserObject("jim", 84);

  })

  test('should return the user object age', () => {
    expect(user.age).toEqual(29);
  })

  test('should return the users age in mercury-years', () => {
    user.mercury();
    expect(user.mercAge).toEqual(120);
  })

  test('should return the users age in venus-years', () => {
    user.venus()
    expect(user.venAge).toEqual(46);
  })

  test('should return the users age in mars-years', () => {
    user.mars()
    expect(user.marAge).toEqual(15);
  })
  
  test('should return the users age in jupiter-years', () => {
    user.jupiter()
    expect(user.jupAge).toEqual(2);
  })

  test('should show remaining years of life expectancy', () => {
    user.lifeExpect(user.age);
    expect(user.lifeExp).toEqual(44)
    oldUser.lifeExpect(oldUser.age);
    expect(oldUser.lifeExp).toEqual(11);
  })

  test('should return remaining years of life based off different planetary age', () => {
    user.mercury();
    user.lifeExpect(user.mercAge);
    expect(user.lifeExp).toEqual(120-73);
    oldUser.mercury();
    oldUser.lifeExpect(oldUser.mercAge);
    expect(oldUser.lifeExp).toEqual(350-73)
    user.venus();
    user.lifeExpect(user.venAge);
    expect(user.lifeExp).toEqual((73-46))
    oldUser.venus();
    oldUser.lifeExpect(oldUser.venAge);
    expect(oldUser.lifeExp).toEqual((135-73))
  })

  test('should allow methods to chain/cascade', () => {
    user.mercury().venus().mars().jupiter();
    expect(user.mercAge).toEqual(120);
    expect(user.venAge).toEqual(46);
    expect(user.marAge).toEqual(15);
    expect(user.jupAge).toEqual(2)
  })
});