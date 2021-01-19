/**
 * class
 *  与 es6 class 区别：
 *    1. constructor 中，实例化后的对象变量，需要提前声明，切标注类型;
 *    2. ts 中的 class 增加权限修饰符。
 *    3. 无论是ts，还是 es 中的class，类成员的属性都是实例属性，方法均是原型方法
 *    4. 与 es 中不同，ts 中的class，实例的属性，必须具有初始值，或者再 constructor 初始化
 *  权限修饰符：
 *    1. public    : 默认，可以自由的访问程序里定义的成员
 *    2. protected : 类实例化后，不可以访问，但是在子类中可以访问；
 *    3. private   : 不管是类实例化后，还是子类 均不可以访问；
 * 
 *    readonly 与 前三者有区别，前三者是设置是否可以访问， readonly 是设置是否可以修改 
 *    1. readonly  : 将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
 * 
 *    static 类的静态成员只能通过 类名 来调用，而不能通过实例调用，且继承的子类也可以调用
 *    
 */

 // 简单的示例
class Shoe {
  readonly id: number             // 产品编号不可以修改
  public name: string             // 名字任何人都可以知道
  price: number                   // 价格任何人都可以知道，同使用了 public 关键字同样的作用
  protected placeOfOrigin: string // 产地，经销商可以知道，但是消费者可能就不知道了，比如可能是莆田货。
  private factoryPrice: number    // 出厂价只能自己知道，其他任何人都不能说哇
  constructor(id: number, name: string, price: number, placeOfOrigin: string, factoryPrice: number) {
    this.id = id
    this.name = name
    this.price = price
    this.placeOfOrigin = placeOfOrigin
    this.factoryPrice = factoryPrice
  }

  static presentedSocks = true
}

const nike = new Shoe(1, '空军一号', 800, '莆田', 200)
// nike.placeOfOrigin // 属性“placeOfOrigin”受保护，只能在类“Shoe”及其子类中访问
// nike.factoryPrice // 属性“factoryPrice”为私有属性，只能在类“Shoe”中访问
// nike.presentedSocks // 属性“presentedSocks”不是类型为“Shoe”的静态成员

console.log(Shoe.presentedSocks) // 通过类名来调用静态成员

class JoggingShoes extends Shoe {
  constructor(id: number, name: string, price: number, placeOfOrigin: string, factoryPrice: number) {
    super(id, name, price, placeOfOrigin, factoryPrice)
  }

  getPlaceOfOrigin() {
    return this.placeOfOrigin // 可以访问，同时可以通过这种方式获取 protected 的数据
  }
  getFactoryPrice() {
    // return this.factoryPrice // 属性“factoryPrice”为私有属性，只能在类“Shoe”中访问
  }
} 
const addisShoes = new JoggingShoes(1,'金标', 600, '莆田', 200)
console.log(addisShoes.getPlaceOfOrigin()); // 莆田
console.log(JoggingShoes.presentedSocks) // 继承的子类也可以调用父类的静态成员
