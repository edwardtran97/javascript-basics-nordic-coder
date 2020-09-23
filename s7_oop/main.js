
class Animal {
    constructor(name) {    // tạo object bằng constructor()
       this.name = name;
    } 

    chay() {
       console.log(`${this.name} chay`);
    }

    keu() {
       throw new Error('Khong biet keu');
    } 
}

// const animal = new Animal();
// animal.keu();


class Dog extends Animal {

    constructor(name, nickName) {
        super(name);   // gọi super() để kế thừa từ class cha

        this.nickName = nickName;
    }

    keu() {
        console.log('gau gau');
    }
}


class Cat extends Animal {

    // constructor(name) {
    //     super(name);   // gọi super() để kế thừa từ class cha

    // }

    keu() {
        console.log('meo meo');
    }
}


const cat = new Cat('meo');
console.log(cat.name);
cat.chay();
cat.keu();


const dog = new Dog('ga', 'ga quay');
console.log(dog.name, dog.nickName);
dog.chay();
dog.keu();

const meo = new Animal('heo');
// console.log(meo.name);
meo.chay();

const cho = new Animal('ga');
cho.chay();



class Stack {
    constructor() {
        this.list = [];
    }

    getCurrent() {
        return [...this.list];
    }

    push(item) {
        this.list.push(item);
        return this;
    }


    pop(item) {
        this.list.pop(item);
        return this;
    }
}

const numberStack = new Stack();
// numberStack.push(2);
// numberStack.push(4);
// numberStack.push(6);
// console.log(numberStack.getCurrent());
// numberStack.pop();


numberStack.push(2).push(4).push(6).pop();   // Muốn nối chuỗi thì khi định nghĩa phương thức mình cho return về chính nó

console.log(numberStack.getCurrent());
