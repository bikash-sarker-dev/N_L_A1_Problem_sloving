
# What are some differences between interfaces and types in TypeScript?




## Inferface
Interface When we declare a type, it looks like a class. We can use this in objects and classes.When we can extend the interface. We can use interfaces to add implements to classes.

**Example:**

```ts
interface Person {
  name: string;
  age: number;
  gender: boolean;
}
```

```ts
interface Car {
  name: string;
  year: number;
  model: string;
}
```

## Type
Well, we can use any primitive data type. Moreover, we use unions and tuples. If we want to extend the type then we have to use intersection.

**Example:**
```ts
type Man = {name: string}
```

```ts
type User = {
    name: string,
    age: number
}
```

```ts
type Car = {
  name: string;
  year: number;
  model: string;
}
```

```ts
type BloodGroup = "A+" | "O" |"B"
```
# What is the use of the keyof keyword in TypeScript? Provide an example.

When we want to create a key from an object of any type, we can easily do it by using our keyof. We can all work together as a union, which benefits us greatly. When this returns me, it inferred me and returns me. We can also work on arrays if we want, we can also work on functions.


**Example:**


```ts
type Car = {
  name: string;
  year: number;
  model: string;
  light: boolean;
}

type MyCarKeys = keyof Car
```

```ts
functions myCarFun<T, T2 extends keyof T>(parmas: T, key: T2):T[T2]{

return parmas[key]
}

const car: Car = { name: "toyta", year: 2025, model: "ks-254", light: ture };

const name = myCarFun(car, "name")
const name = myCarFun(car, "light")
```