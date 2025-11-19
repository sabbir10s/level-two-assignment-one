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

const getLength = (value: string | number[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return value;
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age:${this.age}'`;
  }
}

type Books = {
  title: string;
  rating: number;
};

const filterByRating = (books: Books[]): Books[] => {
  return books.filter((book) => book.rating >= 4);
};

type Users = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: Users[]): Users[] => {
  return users.filter((user) => user.isActive);
};

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
