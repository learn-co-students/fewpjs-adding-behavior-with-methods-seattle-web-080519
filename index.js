document.addEventListener("DOMContentLoaded", function() {
    afterLoad();
})


class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        return `${this.name} says meow!`
    }
}

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    
    speak() {
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
        if (this.sex == "male") {
            return `It's me! ${this.name}, the parrot!`
        } else {
            return `${this.name} says squawk!`
        }
    }
}




function afterLoad() {
    console.log("Loaded!")
    let cc = new Cat("Matto", "Male");

    console.log(cc.name)
    console.log(cc.sex)
}

