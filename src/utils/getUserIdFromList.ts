import { IUser } from "./Interfaces";

export function getUserIdFromList(
  username: string,
  userList: IUser[]
): number | null {
  const filteredList = userList.filter((user) => user.username === username);
  return filteredList.length === 0 ? null : filteredList[0].id;
}
