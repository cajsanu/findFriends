export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  dogs?: Array<UserDog>;
  userChats?: Array<{ chat: BaseChat }>;
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

export interface BaseChat {
  id: string;
  name?: string;
  messages?: Array<BaseMessage>;
}

export interface BaseMessage {
  id: string;
  senderId: string;
  chatId: string;
  timeStamp: string;
  message: string;
}

export type UserWithoutId = Omit<User, "id">;
export type DogWithoutIds = Omit<UserDog, "id" | "userId">;
