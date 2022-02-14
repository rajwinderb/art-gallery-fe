import { getUserIdFromList } from "./getUserIdFromList";

const userList = [
  {
    id: 7,
    username: "martha",
  },
  {
    id: 10,
    username: "neill",
  },
  {
    id: 1,
    username: "bob",
  },
  {
    id: 2,
    username: "amy",
  },
  {
    id: 4,
    username: "john",
  },
  {
    id: 8,
    username: "toye",
  },
  {
    id: 9,
    username: "emma",
  },
  {
    id: 11,
    username: "faith",
  },
];

test("if username in list then returns correct id", () => {
  expect(getUserIdFromList("bob", userList)).toBe(1);
  expect(getUserIdFromList("amy", userList)).toBe(2);
  expect(getUserIdFromList("toye", userList)).toBe(8);
});

test("Returns correct id when username in different cases", () => {
  expect(getUserIdFromList("bOb", userList)).toBe(1);
  expect(getUserIdFromList("Amy", userList)).toBe(2);
  expect(getUserIdFromList("toyE", userList)).toBe(8);
});

test("Returns correct id when excess whitespace", () => {
  expect(getUserIdFromList("bOb  ", userList)).toBe(1);
  expect(getUserIdFromList("  Amy", userList)).toBe(2);
  expect(getUserIdFromList("  toyE  ", userList)).toBe(8);
});

test("if username not in the list then returns null", () => {
  expect(getUserIdFromList("Charlotte", userList)).toBe(null);
  expect(getUserIdFromList("chris", userList)).toBe(null);
  expect(getUserIdFromList("kasIa", userList)).toBe(null);
});
