var nameVar = 'Collin';
var nameVar = 'David';
console.log('nameVar', nameVar);

let nameLet = 'Brad';
nameLet = 'Anita';
console.log('nameLet', nameLet);

const nameConst = 'Avery';
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Dobby'
    return petName;
}
const petName = getPetName();
console.log(petName);

//block scoping

const fullName = 'Collin Cavallo';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName)