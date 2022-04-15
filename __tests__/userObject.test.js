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
    expect(user.venAge).toEqual(46);
  })
});