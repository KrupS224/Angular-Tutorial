"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_empID, _Manager_department;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(code, name, address) {
        _Employee_empID.set(this, void 0); // private field
        this.empName = name;
        __classPrivateFieldSet(this, _Employee_empID, code, "f");
        this.empAddress = address;
    }
    login() {
        return { name: this.empName, id: __classPrivateFieldGet(this, _Employee_empID, "f"), age: 30, email: "" };
    }
    getName() {
        return this.empName;
    }
    getID() {
        return __classPrivateFieldGet(this, _Employee_empID, "f");
    }
    getAddress() {
        return `{${this.empAddress.street}, ${this.empAddress.city}, ${this.empAddress.country}, ${this.empAddress.postalCode}}`;
    }
    printEmployee() {
        console.log(`ID: ${__classPrivateFieldGet(this, _Employee_empID, "f")}, Name: ${this.empName}, Address: ${this.getAddress()}`);
    }
    static getSalary() {
        return "10000 USD";
    }
}
_Employee_empID = new WeakMap();
class Manager extends Employee {
    constructor(code, name, address, department) {
        super(code, name, address);
        _Manager_department.set(this, void 0);
        __classPrivateFieldSet(this, _Manager_department, department, "f");
    }
    getDepartment() {
        return __classPrivateFieldGet(this, _Manager_department, "f");
    }
    printEmployee() {
        console.log(`ID: ${this.getID()}, Name: ${this.getName()}, Address: ${this.getAddress()}, Department: ${__classPrivateFieldGet(this, _Manager_department, "f")}`);
    }
}
_Manager_department = new WeakMap();
const Steve = new Employee(100, "Steve", { street: "123 Main St", city: "New York", country: "USA", postalCode: "10001" });
Steve.printEmployee();
console.log(Employee.getSalary()); // access static function
const John = new Manager(101, "John", { street: "456 Main St", city: "New York", country: "USA", postalCode: "10034" }, "IT");
John.printEmployee();
