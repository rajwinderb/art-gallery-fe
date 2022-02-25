import { formatSearchTerm } from "../functions/formatSearchTerm";

test("a single lowercase word doesn't change", () => {
  expect(formatSearchTerm("sun")).toBe("sun");
  expect(formatSearchTerm("stars")).toBe("stars");
  expect(formatSearchTerm("green")).toBe("green");
  expect(formatSearchTerm("plane")).toBe("plane");
});

test("A single word is changed to lowercase", () => {
  expect(formatSearchTerm("Sun")).toBe("sun");
  expect(formatSearchTerm("StaRs")).toBe("stars");
  expect(formatSearchTerm("Green")).toBe("green");
  expect(formatSearchTerm("plAnE")).toBe("plane");
});

test("multiple lowercase words joined by '+'", () => {
  expect(formatSearchTerm("yellow sun")).toBe("yellow+sun");
  expect(formatSearchTerm("bright stars")).toBe("bright+stars");
  expect(formatSearchTerm("lots of green")).toBe("lots+of+green");
  expect(formatSearchTerm("plane in the sky")).toBe("plane+in+the+sky");
});

test("multiple words joined by '+'", () => {
  expect(formatSearchTerm("yelLow Sun")).toBe("yellow+sun");
  expect(formatSearchTerm("bRight stArs")).toBe("bright+stars");
  expect(formatSearchTerm("loTs Of Green")).toBe("lots+of+green");
  expect(formatSearchTerm("plaNe in tHe Sky")).toBe("plane+in+the+sky");
});
test("excess whitespace trimmed", () => {
  expect(formatSearchTerm("  yelLow Sun")).toBe("yellow+sun");
  expect(formatSearchTerm("bRight stArs  ")).toBe("bright+stars");
  expect(formatSearchTerm("  loTs   Of Green  ")).toBe("lots+of+green");
  expect(formatSearchTerm("  plaNe    in tHe Sky  ")).toBe("plane+in+the+sky");
});
