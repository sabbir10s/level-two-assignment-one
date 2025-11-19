# Assignment One (Level Two)

## TypeScript-এ interfaces এবং types এর মধ্যে কিছু পার্থক্য নিচে দেওয়া হলো:

### interfaces

১. interfaces কে একদিকবার ডিক্লার কারা যায়, পরে সব প্রপার্টিগুলো একত্রিত হয়ে যায়। <br />
২. সাধারণত অবজেক্ট বা ক্লাস তৈরিত ব্যবহার করা হয়।

### types

১. একই নামের types কে একাদিকবার ডিক্লার করা যায় না। <br />
২. object, union, tuple, primitive সব ধরনের type alias তৈরির ব্যবহার করা হয়।

</br>

## Example of using union and intersection

### Union

```const printID = (id: number | string) => {
  console.log(`The ID is: ${id}`);
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  }
};

printID(39);
printID("abc3");

```

### Interface

```
interface IUser {
  name: string;
  age: number;
}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: IUser = {
  name: "Rakib",
  age: 20,
};
const user2: IUserWithRole = {
  name: "Sabbir",
  age: 100,
  role: "admin",
};
```
