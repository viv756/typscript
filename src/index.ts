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

// type Deatails = {
//   name: string;
//   // union operator
//   age: number | string;
//   salary: number;
//   getName: () => void;
// };

// let userDetails: Deatails = {
//   name: "vivek",
//   age: "twenty two",
//   salary: 100,
//   getName() {
//     console.log(this.name);
//   },
// };

// let skills : (string| number)[] = ["js","ts",12,34]




function getUsername({name,age} :{name:string, age:number}) {
  return age
}

getUsername({name:"vivek",age:22})