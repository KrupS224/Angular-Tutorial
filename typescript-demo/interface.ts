export interface User {
    name: string;
    id: number;
    age: number;
    email: string;
}
let user: User = { name: "John", id: 1, age: 30, email: ""};

interface AppUser extends User {
    phone: string;
    appName: string;
}
let appUser: AppUser = { name: "John", id: 1, age: 30, email: "", phone: "1234567890", appName: "MyApp"};

export interface Address {
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

export interface Login {
    login() : User;
}