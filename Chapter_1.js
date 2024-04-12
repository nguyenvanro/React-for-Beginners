// Exe 1
var Name = 'Ro';
console.log('Name: ', Name); // Outputs "Name: Ro"

let x = 10;
console.log('x: ', x); // Outputs "x

const y = {};
y.foo = 'bar';
console.log('y: ', y); //

// exe 3
const person = {
    name: 'Ro',
    age: 25,
}
console.log(person); // Outputs "{name: "Ro

test = () => {
    console.log("This is a test function")

}

// Exe 4
test(); // Outputs "This is a test

const hello = () => {
    'Hello World';

}

// Exe 5: Arrow Func Map, Filter
const myArr = [1,2,3,4];
// const myList = myArr.map((item) => `<p> ${item*2} </p>`);
const myList = myArr.map((item, index) => {
    console.log(item, index);
    item*2
})
console.log(myList); // Outputs "[<p>


const newArray = [];
for (let i = 0; i < myArr.length; i++) {
    let item = myArr[i] * 2;
    newArray.push(item);
}
console.log(newArray); // Outputs [2, 


const ages = [15, 22, 33, 55]
const result = ages.filter(checkAge);
function checkAge(age) {
    return age >= 18;
}
console.log(result); // Outputs [22, 


const resulta = ages.filter((item) => {
    return item >= 18;
})

console.log(resulta);

// Exe 6: Template Literals: Template strings
const a = `Nguyen Van 
Ro`;
console.log(a);

// Exe 7: Spread syntax
const firstArr = [1, 2, 3]
const secondArr = [4, 5, 6]
const resultArr = [...firstArr, ...secondArr]
console.log(resultArr); // Outputs [1, 

let myArrr = ['Ro', 'Nguyen'];
myA = [...myArr, 'acd']
console.log(myA); // Outputs ["Ro", "

const ObjA = {
    name: 'Ro',
    age: 12,
}

const  ObjB = {
    job: 'Developer',
    city: 'Dn'
}

const myObj = {...ObjA, ...ObjB}
console.log(myObj);

// Exe 8: Destructering assignment
// 1. Destructering: phá hủy các giá trị từ một object và gán chúng cho biến riêng
const persona = { teche: "Ro", age: 20, subject: "Math" }
const {teche, age} = persona
console.log(teche + ", " + age); // Output

const city = ['Ha noi', 'Da nang', 'HCM', 'Can Tho']
const [hanoi, danang, , cantho] = city;
console.log(hanoi);

const react = ['html', 'css', 'js']
const [, , js] = react
console.log(js);

const dev = {
    name: 'Ro',
    salary: 2000,
    bugs: 2
}

const {bugs: newbugs} = dev
console.log(newbugs); // gán biến mới

// Exe 9: Ternary Operator: toan tu dieu kien
const c = 20;
if (c > 5) {
    console.log('C > 5');
} else {
    console.log('C < 5');
}


x > 5 ? console.log(true) : console.log(false); //

// Exe 10:
let user = {}
console.log(user.address);
// user.address =>  undefined
// undefined.props => error
console.log(user?.address?.street);

let userAdmin = {    
    admin() {
        return 'you are admin!'

    }
}
// obj?.func?.()
console.log(userAdmin?.admin?.());

let obj = {
    name: 'abc',
    chanel: 'ab',
    address: {
        street: '12 hai chau',
        code: 12
    }
}
console.log(obj?.name?.address ?? 'not found');

const myVar = undefined;
console.log(myVar?.map?.(item => item) ?? 'Not return');