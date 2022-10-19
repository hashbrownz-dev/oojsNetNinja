// const userOne = {
//     email: "rooseveltblow@gmail.com",
//     name: 'Roosevelt',
//     login(){
//         console.log(`${this.email} has logged in.`);
//     },
//     logout(){
//         console.log(`${this.email} has logged out.`);
//     }
// }

// const prop = 'name';

// userOne.email = 'hashbrownz@breakfastcity.com';
// userOne['email'] = 'hashbrownz@breakfastcity.com';
// userOne[prop] = 'Hashbrownz';

// console.log(userOne);

// userOne.age = 25;
// userOne.logInfo = function(){
//     console.log(this.name, this.age, this.email);
// };

// userOne.logInfo();
// userOne.login();
// userOne.logout();

// class User{
//     constructor(email, name){
//         this.email = email;
//         this.name = name;
//         this.score = 0;
//     }
//     login(){
//         console.log(`${this.email} has logged in.`);
//         return this;
//     }
//     logout(){
//         console.log(`${this.email} has logged out.`);
//         return this;
//     }
//     updateScore(){
//         this.score++;
//         console.log(`${this.email} score is now ${this.score}`);
//         return this;
//     }
// }

// class Admin extends User{
//     deleteUser(user){
//         users = users.filter(u => {
//             return u.email != user.email
//         });
//     }
// }

//Create a constructor function
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.score = 0;
}

//Add methods to the User class via its prototype
User.prototype.login = function(){
    this.online = true;
    console.log(`${this.email} has logged in.`);
    return this;
}

User.prototype.logout = function(){
    this.online = false;
    console.log(`${this.email} has logged out.`);
}

function Admin(...args){
    User.apply(this,args);
    this.role = 'super admin';
}

//set the Admin prototype to the User prototype, giving access to the methods contained within the User class
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(user){
    users = users.filter( u => { return u.email != user.email });
};

const userOne = new User('rooseveltblow@gmail.com','Roosevelt');
const userTwo = new User('hashbrownz@thebreakfastclub.com', 'Hashbrownz');
const userThree = new User('ninja@gaiden.com', 'Ryu Hayabusa');
const adminOne = new Admin('kingCandy@candyland.com', 'King Candy');

//Log everyone in
let users = [userOne, userTwo, userThree, adminOne];
for(let user of users){
    user.login();
}
//Log everyone out
for(let user of users){
    user.logout();
}
//Test Admin
console.log(adminOne);
console.log(users);
adminOne.deleteUser(userTwo);
console.log(users);