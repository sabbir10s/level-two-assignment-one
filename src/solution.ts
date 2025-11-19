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

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
  const availability = book.isAvailable ? "Yes" : "Not";
  const bookDetails = ` Title: ${book.title},
    Author: ${book.author},
    Published: ${book.publishedYear},
    Available: ${availability},`;
  return bookDetails;
};

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

// printBookDetails(myBook);

// Problem 7

const getUniqueValues = (
  collection1: number[],
  collection2: number[]
): number[] => {
  const allCollection = [...collection1, ...collection2];
  const uniqueNumbers: number[] = [];

  allCollection.forEach((item) => {
    if (!uniqueNumbers.includes(item)) {
      uniqueNumbers.push(item);
    }
  });

  return uniqueNumbers;
};

// problem 8

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (products: Product[]): number => {
  if (products.length) {
    const totalPrice = products.reduce((accumulator, product) => {
      const total =
        product.price * product.quantity * (1 - (product.discount ?? 0) / 100);
      return accumulator + total;
    }, 0);
    return totalPrice;
  }
  return 0;
};

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
