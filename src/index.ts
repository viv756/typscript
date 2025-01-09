// infer types

// let userName = "vivek"

// Definibg types

// interface Deatails {
//   name: string;
//   age: number;
//   salary: number;
//   getName: () => void;
// }

// let userDetails: Deatails = {
//   name: "vivek",
//   age: 22,
//   salary: 100,
//   getName() {
//     console.log(this.name);
//   },
// };

// type

type Deatails = {
  name: string;
  age: number;
  salary: number;
  getName: () => void;
};

let userDetails: Deatails = {
  name: "vivek",
  age: 22,
  salary: 100,
  getName() {
    console.log(this.name);
  },
};
