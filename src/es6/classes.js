class Person {
  constructor(name = 'anonymus', age = 25) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi ${this.name}`;
  }

  getDescription() {
    return `Hi ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if(this.hasMajor()){
      description = description + ` Their major is ${this.major}`
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
      return !!this.homeLocation;
  }

  getGretting() {
    let gretting = super.getGretting();
    if(this.hasHomeLocation()) {
      gretting = gretting + ` I\`m visiting from ${this.homeLocation}`
    }
    return gretting;
  }
}

const me = new Traveler('Kasia Małek', 25, 'Puławy');
console.log(me.getGretting());

const other = new Traveler();
console.log(other.getGretting());
