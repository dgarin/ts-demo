// Define vars
let sales: number = 123_456_789;
let course: string ='Typescript';
let is_published: boolean = true;
let level;


// Define a function
function render(document: any){
    console.log(document)
}

// Arrays
let numbers: number[] = [1, 2, 3];

// Tuples
let user: [number, string] = [1,'Dante'];

// const small = 1;
// const medium = 2;
// const large = 3;

// Enum
// PascalCase
enum Size { Small = 1, Medium, Large } // 1 , 2 , 3 (automatic for numbers)

let mySize: Size = Size.Medium
console.log(mySize)



//  Functions

function calculateTax(income: number, taxYear = 2022) : number{
    //let x;
    if (taxYear < 2022)
        return income*1.2;
    return income*1.3;
}

console.log(calculateTax(10_000))

// Objects
let employee: {
    readonly id: number, //dont modify id
    name: string, //name? optional
    retire: (date: Date) => void
} = { 
    id:1, 
    name: 'Dante',
    retire: (date: Date) => {
        console.log(date);
    }
};

// Types
type Employees = {
    readonly id: number, //dont modify id
    name: string, //name? optional
    retire: (date: Date) => void
}

let employees: Employees = { 
    id:1, 
    name: 'Dante',
    retire: (date: Date) => {
        console.log(date);
    }
};

// Union Types

function kgToLbs(weight: number|string) {
    // Narrowing
    if (typeof weight === 'number' ){
        return weight * 2.2
    } else {
        return parseInt(weight) * 2.2
    }
}

kgToLbs(10);
kgToLbs('10kg');

// Intersection Types

let weight: number & string;
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}, 
}

// Literal types
// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

// Nullable values
function greet(name: string |null |undefined){
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!')
}

greet(undefined)

type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null |undefined {
    return id === 0 ? null : { birthday: new Date()}
}

let customer = getCustomer(1);
// Optional property access operator
console.log(customer?.birthday?.getFullYear())

// Optional element access operator
// customer?.[0]

// Optional call
let log: any = null;
log?.('a');