import { faker } from '@faker-js/faker';

export const generateMockPets = (count = 1) => {
  const pets = [];

  for (let i = 0; i < count; i++) {
    pets.push({
      name: faker.animal.dog(),
      specie: faker.animal.type(),
      birthDate: faker.date.past().toISOString(),
    });
  }

  return pets;
};