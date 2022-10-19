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

function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.score = 0;
    this.login = function () {
        console.log(`${this.email} has logged in.`);
        return this;
    }
}

// function User(email, name){
//     return {
//         email : email,
//         name : name,
//         score : 0,
//         login(){
//             console.log(`${this.email} has logged in.`);
//             return this;
//         },
//         logout(){
//             console.log(`${this.email} has logged out.`);
//             return this;
//         },
//         updateScore(){
//             this.score++;
//             console.log(`${this.email} score is now ${this.score}`);
//             return this;
//         }
//     }
// }

const userOne = new User('rooseveltblow@gmail.com','Roosevelt');
const userTwo = new User('hashbrownz@thebreakfastclub.com', 'Hashbrownz');
const userThree = new User('ninja@gaiden.com', 'Ryu Hayabusa');
// const adminOne = new Admin('kingCandy@candyland.com', 'King Candy');

let users = [userOne, userTwo, userThree];
for(let user of users){
    user.login();
}
// console.log(users);
// //adminOne.deleteUser(userTwo);
// console.log(users);