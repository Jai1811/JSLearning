class A {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class B extends A {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
}
let b = new B("John", 20, "A");
console.log(b.name); // John
console.log(b.age); // 20
console.log(b.grade); // A  