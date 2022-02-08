import { getUsername } from "./getUsername";

const userList = [
  {
    id: 1,
    username: "Bob",
  },
  {
    id: 2,
    username: "Amy",
  },
  {
    id: 4,
    username: "John",
  },
  {
    id: 7,
    username: "martha",
  },
  {
    id: 8,
    username: "Toye",
  },
  {
    id: 9,
    username: "Emma",
  },
  {
    id: 10,
    username: "neill",
  },
  {
    id: 11,
    username: "faithh",
  },
];

test("correct username recieved", () => {
  expect(getUsername(1, userList)).toBe("Bob");
  expect(getUsername(2, userList)).toBe("Amy");
  expect(getUsername(4, userList)).toBe("John");
  expect(getUsername(7, userList)).toBe("martha");
});

test("If id not in list returns 'unknown'", () => {
  expect(getUsername(3, userList)).toBe("unknown");
  expect(getUsername(5, userList)).toBe("unknown");
  expect(getUsername(6, userList)).toBe("unknown");
  expect(getUsername(42, userList)).toBe("unknown");
});
