/**
 * 抽象类
 *  做为其它派生类的基类使用,不可以直接实例化;
 *  通过关键字 abstract 定义抽象类
 * 
 *  同时,再抽象类中,也可以不指定方法的实现,构成抽象方法,具体实现再子类中去写
 */

// 1. 通过关键字 abstract 定义一个抽象类
abstract class Animal {
  eat() {
    console.log('eat');
  }
  // 2. 通过方法
  abstract move(): void
}

class Dog extends Animal {
  constructor() {
    super()
  }

  // 子类中需要手动实现父类中的抽象方法
  move() {
    console.log('Dog move');
  }
}

class Cat extends Animal {
  constructor() {
    super()
  }
  move() {
    console.log('Cat move');
  }
}

const animals = [new Dog(), new Cat()]

animals.forEach((item) => {
  item.move()
})