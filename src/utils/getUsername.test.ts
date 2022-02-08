import { getUsername } from "./getUsername";

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

test("correct username recieved", () => {
  expect(getUsername(1, userList)).toBe("bob");
  expect(getUsername(2, userList)).toBe("amy");
  expect(getUsername(4, userList)).toBe("john");
  expect(getUsername(7, userList)).toBe("martha");
});

test("If id not in list returns 'unknown'", () => {
  expect(getUsername(3, userList)).toBe("unknown");
  expect(getUsername(5, userList)).toBe("unknown");
  expect(getUsername(6, userList)).toBe("unknown");
  expect(getUsername(42, userList)).toBe("unknown");
});
