export interface User {
  id: string;
  firstName: string;
  lastName: string;
  city: string;
  dogs?: Array<Dog>;
}

export enum Sex {
  male = "male",
  female = "female",
}

export interface Dog {
  id: string;
  ownerId: User["id"];
  name: string;
  breed: string;
  sex: Sex;
}

export type UserWithoutId = Omit<User, "id">;
export type DogWithoutId = Omit<Dog, "id">;
