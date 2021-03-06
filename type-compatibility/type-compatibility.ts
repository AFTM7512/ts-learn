
/**
 * 类型兼容性问题：
 *  1. 结构之间兼容，成员少的兼容成员多的。
 *     如 class, new 出来的实例少的，多了没啥影响，但是缺少的话，可能就导致结构不对。
 *  2. 函数之间兼容，参数多的，兼容参数少的。
 *      因为参数肯定会被使用，可以出现多余参数，但是参数比较少，可能函数就没办法执行。
 *
 * 总结：兼容，必须要保证自己现有结构稳定，能够运行。
 */