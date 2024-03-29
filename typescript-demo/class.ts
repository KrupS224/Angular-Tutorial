import { Address, Login, User } from "./interface";

class Employee implements Login{
    #empID: number; // private field
    empName: string;
    empAddress: Address;

    constructor(code: number, name: string, address: Address) {
        this.empName = name;
        this.#empID = code;
        this.empAddress = address;
    }

    login(): User {
        return {name: this.empName, id: this.#empID, age: 30, email: ""};
    }

    getName(): string {
        return this.empName;
    }

    getID(): number {
        return this.#empID;
    }

    getAddress(): string {
        return `{${this.empAddress.street}, ${this.empAddress.city}, ${this.empAddress.country}, ${this.empAddress.postalCode}}`;
    }

    printEmployee(): void {
        console.log(`ID: ${this.#empID}, Name: ${this.empName}, Address: ${this.getAddress()}`);
    }

    static getSalary() : string {
        return "10000 USD";
    }
}

class Manager extends Employee {
    #department: string;

    constructor(code: number, name: string, address: Address, department: string) {
        super(code, name, address);
        this.#department = department;
    }

    getDepartment(): string {
        return this.#department;
    }

    printEmployee(): void {
        console.log(`ID: ${this.getID()}, Name: ${this.getName()}, Address: ${this.getAddress()}, Department: ${this.#department}`);
    }
}

const Steve = new Employee(100, "Steve", {street: "123 Main St", city: "New York", country: "USA", postalCode: "10001"});
Steve.printEmployee();

console.log(Employee.getSalary()); // access static function

const John = new Manager(101, "John", {street: "456 Main St", city: "New York", country: "USA", postalCode: "10034"}, "IT")
John.printEmployee();