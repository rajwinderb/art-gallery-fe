import { IUser } from "../Interfaces";

export function getUsername(userId: number, userList: IUser[]): string {
  const filteredList = userList.filter((user) => user.id === userId);
  return filteredList.length === 0 ? "unknown" : filteredList[0].username;
}
