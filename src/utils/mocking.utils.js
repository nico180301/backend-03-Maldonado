import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

export const generateUsers = (num) => {
  let users = [];
  for (let i = 0; i < num; i++) {
    const passwordHash = bcrypt.hashSync('coder123', 10);
    const role = Math.random() > 0.5 ? 'user' : 'admin';
    users.push({
      username: faker.internet.userName(),
      password: passwordHash,
      role: role,
      pets: []
    });
  }
  return users;
};

export const generatePets = (num) => {
  let pets = [];
  for (let i = 0; i < num; i++) {
    pets.push({
      name: faker.animal.dog(),
      species: 'Dog'
    });
  }
  return pets;
};