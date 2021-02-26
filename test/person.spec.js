import Person from '../src/person';

describe('profile', () => {
  let jiro;

  beforeAll(() => {
    jiro = new Person('Jiro');
  });

  test('name is Jiro', () => {
    expect(jiro.hello()).toBe("Hello, I'm Jiro !");
  });
});
