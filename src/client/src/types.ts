export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  dogs?: Array<Dog>;
}

export interface SignupUser {
  email: string;
  password: string;
  city: string;
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
