//-----------------------------------------------------------------------------------------

function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || typeof toUpper === "undefined") {
    return input.toLocaleUpperCase();
  } else {
    return input.toLowerCase();
  }
}

// console.log(formatString("Hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));

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
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
