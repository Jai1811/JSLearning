//Object literal
const obj = {
    "objects": [
        {
            "name": "object1",
            "type": "type1",
            "properties": {
                "property1": "value1",
                "property2": "value2"
            }
        },
        {
            "name": "object2",
            "type": "type2",
            "properties": {
                "property1": "value1",
                "property2": "value2"
            }
        }
    ]
}

//2. Object constructor via constructor function
function MyObject(name, type, properties) {
    this.name = name;
    this.type = type;
    this.properties = properties;
}

const object1 = new MyObject("object1", "type1", {"property1": "value1", "property2": "value2"});
const object2 = new MyObject("object2", "type2", {"property1": "value1", "property2": "value2"});

console.log(obj);
console.log(object1.name);
console.log(object2);

//instance of class
class MyObjectClass {
    constructor(name, type, properties) {
        this.name = name;
        this.type = type;
        this.properties = properties;
    }

    addValue(){
        console.log(`Adding value to object: ${this.name}`);
    }

}
 const object3 = new MyObjectClass("object3", "type3", {"property1": "value1", "property2": "value2"});

 object3.addValue();


 // 4. Object.create() method
const prototypeObject = {
    greet: function() {
        console.log(`Hello, I am ${this.name} of type ${this.type}`);
    }
};

const object4 = Object.create(prototypeObject);
object4.name = "object4";
object4.type = "type4";
object4.properties = {"property1": "value1", "property2": "value2"};

object4.greet();

//5. factory function : returns a new object
function createObject(name, type, properties) {
    return {
        name: name,
        type: type,
        properties: properties,
        greet: function() {
            console.log(`Hello, I am ${this.name} of type ${this.type}`);
        }
    };
}

const object5 = createObject("afcvbasd", "asda", {"fasf": "fasf", "fas": "fsdf"});
object5.greet();