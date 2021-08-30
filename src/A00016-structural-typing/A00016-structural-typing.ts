type VirefyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VirefyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joao', password: '123456' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
