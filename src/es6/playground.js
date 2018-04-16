// console.log('Hi from es6');

// var nameVar = 'Andrew';
// console.log(nameVar);

// var fullName = 'Kasia Małek';

// if(fullName) {
//     const firstName = fullName.split(' ')[0];
//     console.log(firstName);
// }

// console.log(firstName); // error, const i let nie ma zasięgu poza blok ifa, gdybym uzyła var miałabym zasięg


const add = (a,b) => {
    //console.log(arguments); a arrow function nie masz dostępu do arguments
    return a + b;
}
console.log(add(5, 9));

const user = {
    name: 'Kasia',
    cities: ['Pulawy', 'Wroclaw'],
    // printPlaces: function() {
    //     this.cities.forEach( function(city) {
    //         console.log(this.name + 'mieszkała w' + city);
    //     }) //teraz nie bedzie dziąłał,  metoda nie ma dostępu do zewnętrznych zmiennych
    // }
    // printPlaces: function() {
    //     this.cities.forEach( (city) => {
    //         console.log(this.name + ' mieszkała w ' + city);
    //     }) //teraz nie bedzie dziąłał,  metoda nie ma dostępu do zewnętrznych zmiennych
    // } //raz uzyłam zwykłej funkcji, a raz arrow function, wyglada to głupio, naprawmy to
    printPlaces() {
    
    const cityMessages = this.cities.map((city) => {
        return 'Hi from: ' + city; 
    });

    this.cities.forEach( (city) => {
        console.log(this.name + ' mieszkała w ' + city);
    })
    return cityMessages;
}
};

user.printPlaces();

const multiplayer = {
    numbers: [2, 5, 60, 57, 3, 8, 9],
    multiplyBy: 4.95,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy );
    }
};

multiplayer.multiply();