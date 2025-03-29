class Animal {
    constructor(name) {
        this.name = Animal.capatilize(name);
        console.log("Animal : " + this.name);
    }
    static capatilize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1);
    }
}
let pet = new Animal("wolf");