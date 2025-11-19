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

const filterByRating = (books: Books[]) => {
  return books.filter((book) => book.rating >= 4);
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));
