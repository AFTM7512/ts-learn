/**
 * 类实例化后,实现内部方法的链式调用
 *  链式调用的关键是再方法中返回 this，意思就是将实例对象返回
 */

class Person {
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
  id: number
  name: string

  eat() {
    console.log(`${this.name} eat`);
    return this
  }

  sleep() {
    console.log(`${this.name} sleep`);
    return this
  }
}

new Person(1, '小明').eat().sleep()

/**
 * 子类继承父类后，覆写了父类的方法，此时再去调用，this 就实现了多肽
 */
class Man extends Person {
  eat() {
    console.log(`This is man, ${this.name} eat`);
    return this
  }
}
new Man(2, '小红').eat().sleep()