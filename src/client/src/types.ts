export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  dogs?: Array<UserDog>;
  chats?: Array<Chat>;
}

export interface SignupUser {
  email: string;
  password: string;
}

export interface UserInfo {
  firstName: string;
  lastName: string;
  city: string;
}

export type Sex = "male" | "female";

export interface BaseDog {
  name: string;
  breed: string;
  sex: Sex;
}

export interface UserDog extends BaseDog {
  id: string;
  userId: string;
}

export interface Chat {
  id: string;
  name?: string;
  messages?: Array<string>;
}

export type UserWithoutId = Omit<User, "id">;
export type DogWithoutIds = Omit<UserDog, "id" | "userId">;
