/**
 * 能实现类型推断的方法：
 *  1. 使用类型断言
 *  2. instanceof   如：判断某个实例原来与哪个类
 *  3. in           如：判断对象中是否有这个方法
 *  4. typeof       如：判断联合类型变量的类型，这个变量下有什么方法
 *  5. is           如：判断一个变量属于某个接口|类型
 */

class Java {
  helloJava() {
    console.log('hello java!');
  }
}

class Javascript {
  helloJavascript() {
    console.log('hello javascript');
  }
}

enum Type {
  Strong,
  Weak
}
function getLanguage(type: Type, arg: number | string) {
  const lang = type === Type.Strong ? new Java() : new Javascript()

  // 直接使用 lang 不能直接点出每个实例的方法
  // if (lang.helloJava) {
  //   lang.helloJava() // 类型“Javascript”上不存在属性“helloJava”
  // } else {
  //   lang.helloJavascript()
  // }
  

  // 1. 使用类型断言
  if ((lang as Java).helloJava) {
    (lang as Java).helloJava()
  } else {
    (lang as Javascript).helloJavascript()
  }

  // 2. 使用 instanceof
  if (lang instanceof Java) {
    lang.helloJava()
  } else {
    lang.helloJavascript()
  }

  // 3. 使用 in 判断实例上是否有改方法
  if ('helloJava' in lang) {
    lang.helloJava()
  } else {
    lang.helloJavascript()
  }

  // 4. typeof
  if (typeof arg === 'string') {
    console.log(arg.length);
  } else {
    console.log(arg.toFixed(2))
  }

  // 5. is
  if (isJava(lang)) {
    lang.helloJava()
  } else {
    lang.helloJavascript()
  }
}

function isJava(lang: Java | Javascript): lang is Java {
  return lang instanceof Java
}