/**
 * 用 interface 定义 类的结构
 *   1. 使用 implements 关键字；
 *   2. 接口只能约束类的公有成员，不包括私有成员和静态属性；
 *   3. 类可以定义接口中没有的属性和方法，包括私有成员；
 *   4. 接口不可以定义类的构造函数
 */
interface Human {
  readonly id: number,
  name: string,
  sleep(): void,
}
class Person implements Human {
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
  id: number
  name: string

  sleep(): void {
    console.log('sleep');
    /**
     * interface 中定义的 readonly 再这里并没有生效
     */
    // this.id = 123 
  }
}

/**
 * 此时 Man 继承 Person，同时 Person 是使用 Human 约束的，
 * 所以 Man 不需要
 */
class Man extends Person implements Human {

}

/**
 * 接口的继承：
 *  1. 接口可以像类一样继承，而且可以继承多个接口，继承多个接口时，要用 逗号 分割；
 *  2. 接口可以继承类，此时，接口会将类中的成员抽象出来，值得注意的是，
 *      此时不仅抽离了类的公有成员，还抽离了私有...成员
 *  3.
 */
interface Animal {
  type: string,
  eat(food: string): void
}
class TomCat implements Animal {
  constructor(type: string) {
    this.type = type
  }
  type: string

  eat(fish: string): void {
    console.log('eat' + fish);
  }

  climbTree() {}
}

// 接口 继承 类
interface Cat extends TomCat {

}
let tom: Cat = {
  type: 'cat',
  eat(fish: string) {
    console.log('eat' + fish);
  },
  climbTree() {}
}
