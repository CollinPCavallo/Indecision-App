//arguments object

const add = (a,b) => {
    // console.log(arguments)
    return a + b;
}
console.log(add(55,1))

const user = {
    name: 'Collin',
    cities: ['Houston', 'New York', 'Dublin'],
    printPlacesLives() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}
console.log(user.printPlacesLives());

const multiplier = {
    numArr: [10, 20, 30],
    multiplyBy: 5,
    multiply() {
        return this.numArr.map((num) => this.multiplyBy * num)
    }
}
console.log(multiplier.multiply());
