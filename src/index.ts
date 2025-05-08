//-----------------------------------------------------------------------------------------

function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || typeof toUpper === "undefined") {
    return input.toLocaleUpperCase();
  } else {
    return input.toLowerCase();
  }
}

console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));

//-----------------------------------------------------------------------------------------

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter(
    (value: { title: string; rating: number }) => value.rating > 4
  );
}

// console.log(filterByRating(books));
//-----------------------------------------------------------------------------------------

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let arr: T[] = [];
  return arr.concat(...arrays);
}
console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
//-----------------------------------------------------------------------------------------

class Vehicle {
  make: string;
  year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  private _model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this._model = model;
  }

  getModel() {
    console.log(`Model: ${this._model}`);
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();
//-----------------------------------------------------------------------------------------

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value * 2;
  }
}
console.log(processValue("hello"));
console.log(processValue(10));
//-----------------------------------------------------------------------------------------

interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  let arr = products[0];
  if (products.length === 0) {
    return null;
  } else {
    products.forEach((item) => {
      if (item.price > arr.price) {
        arr = item;
      }
    });

    return arr;
  }
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];
// getMostExpensiveProduct(products);
console.log(getMostExpensiveProduct(products));
//-----------------------------------------------------------------------------------------

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
      return "Weekend";
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));
//-----------------------------------------------------------------------------------------

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject(new Error("Negative number not allowed"));
    }

    if (n) {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    }
  });
}
squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
