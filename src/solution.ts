const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
  return value;
};

// console.log(formatValue("hello"));
// console.log(formatValue(5));
// console.log(formatValue(true));

const getLength = (value: string | number[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return value;
};

// console.log(getLength("typescript"));
// console.log(getLength([10, 20, 30, 40]));

type Books = {
  title: string;
  rating: number;
};

const filterByRating = (books: Books[]): Books[] => {
  return books.filter((book) => book.rating >= 4);
};

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];

// console.log(filterByRating(books));

type Users = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: Users[]): Users[] => {
  return users.filter((user) => user.isActive);
};

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

// console.log(filterActiveUsers(users));

// console.log(users);
