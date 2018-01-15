// const square = function (a) {
//     return a*a
// };
// console.log(square(9))

// const squareArrow = (a) => a*a;

// console.log(squareArrow(7))
// let firstName;
// const getFirstName = (fullname) => {
//     let fullName = fullname
//     firstName = fullName.split(' ')[0]
//     return firstName;

// }
const getFirstName = (fullName) => fullName.split(' ')[0]
console.log(getFirstName('Collin Cavallo'))