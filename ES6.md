---

---

## 语言基础

### 变量

---

#### var关键字

##### 作用域

+ var定义的变量会成为包含它的**函数**的局部变量
+ 声明变量后未进行初始化的情况下，变量是undefined
+ 省略var操作符创建变量时会成为全局变量（严格模式下不行）

##### var声明提升

+ var声明变量时，会将变量提升到函数作用域顶部。
+ var在全局作用域中声明的变量会成为window的属性。

```js
function foo(){
    console.log(age);
    var age = 100
}
foo() //undefined
```

---

#### let声明

##### let关键字

+ let 声明的是**块**作用域，只在当前代码块中起作用
+ let 不允许在**`同一作用域中`**重复声明同一变量。

 ##### 暂时性死区

+ let声明的变量不会在作用域中被提升

##### 全局声明

+ let 在全局作用域中声明的变量不会成为window的属性。

##### 条件声明

+ let 不依赖条件声明模式



##### for循环中的let声明

```js
for(var i =0 ; i<6 ;i++){
    
}
console.log(i) //6，迭代变量渗透到循环体外部


for(let i =0 ; i<6 ;i++){
    
}
console.log(i) //ReferenceError i  没有定义i
```



```js
for(var i =0 ; i<5 ;i++){
    setTimeout(()=> console.log(i))
}
//迭代变量保存的是导致循环退出的值，在之后执行，所有i都是同一个变量
// 5 5 5 5 5



for(let i =0 ; i<6 ;i++){
    setTimeout(()=> console.log(i))
}
//使用let声明变量时。js在后台为每个迭代循环声明一个新的迭代变量，每个setTimeout引用的都是不同的变量实例
//0 1 2 3 4
```

---

#### const声明

+ 变量的声明与初始化必须同时进行
+ 声明的作用域是块级作用域
+ const声明的限制只适用于它指向变量的引用，如果const变量引用的是一个对象，那么可以修改对象内部的属性及属性值

##### const循环

+ const key in Object 	遍历对象内的所有属性
+ const key of Array       遍历数组内的所有属性

```js
for(const key in {a:1,b:2}){
    console.log(key)
}
// a   b

for(const value of [1,2,3,4,5]){
    console.log(value)
}
//1 2 3 4 5
```



### 数据类型                                                                                                                                                                                                                                                                                              

##### typeof操作符

+ 返回数据类型

##### undefined类型（假值）

+ 当使用var或let声明了变量但没有初始化时，此时变量为undefined
+ 对未声明的变量，只能进行**typeof**操作，返回的结果是undefined

##### Null类型（假值）

+ Null类型只有一个值，即特殊值null，null值表示一个空对象指针。（typeof null 返回object）
+ null == undefined 返回true

##### Boolean

+ 将其他类型的值转换为布尔值，调用特定的Boolean( )转型函数

| 数据类型  | 转换为true的值        | 转换为false的值 |
| --------- | --------------------- | --------------- |
| Boolean   | true                  | false           |
| String    | 非空字符串            | “  ” 空字符串   |
| Number    | 非0数值（包括无穷值） | 0、NaN          |
| Object    | 任意对象              | null            |
| Undefined | N/A (不存在)          | undefined       |

##### Number

###### 浮点值

+ 存储浮点数占用内存空间，ES6默认返回整数
+ 浮点值存在误差，特殊值不建议去比较

###### 值的范围

+ 最小值 Number.MIN_VALUE
+ 最大值 Number.MAX_VALUE

+ 超出这个范围，数值自动转换为 **Infinity**
+ 判断数字是否在范围之内，可以使用函数 isFinite( )函数

###### NaN

+ 表示不是数值
+ 0除其他数，0、+0、-0相除返回NaN,分子是0时
+ 判断参数是否可以转换为数值，isNaN(参数)

###### 数值转换

+ Number( ) 

  函数将非数值类型数据转换为数值类型，true->1,false->0,转换的数值为10进制，**null->0**,undefined->NaN,对象调用valueof( )

方法，进行转换。                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

+ parseInt(参数1，参数2)

  函数将非数值类型数据转换为整数型数值类型，

  参数2可以设置解析的进制类型

  ```js
  let num1 = parseInt("10",2) //按二进制类型进行解析 
  //输出 2
  ```

  空字符串返回NaN

+ parseFloat( )

  函数将非数值类型数据转换为浮点型数值类型

  只解析10进制的数，十六进制数会返回 0

##### String类型

+ 转换为字符串

  - toString( ) 将当前值转换为字符串等价物  null和undefined值没有toString( )方法

    在对数值调用这个方法时，toString可以接收一个底数参数，即以什么底数输出数值的字符串表示

  - String( ) 方法所有数据类型都适用

  - 用加号操作符加空字符串也可以将其转换为字符串。

+ 模板字面量

  ``可以跨行定义字符串

+ 字符串插值

  ```js
  let value = 5;
  let exponent = 'second';
  let interpolate = `${value} +to the ${exponent} power is ${value*value}`;
  ```

+ 原始字符串

  使用模板字面量可以直接获取原始的模板字面量内容，使用String.raw标签函数

  ```js
  console.log(`\u00A9`)  //@
  console.log(String.raw`\u00A9`)  // \u00A9
  ```

##### Symbol类型

+ 是ES6的新增数据类型。符号是原始值，且符号实例是唯一、不可变的。符号的用途是确保对象属性使用唯一标识符，不会发生**属性冲突**的危险。

+ 符号就是用来创建唯一记号，进而作为非字符串形式的对象属性。

```js
let sym = Symbol()
```

+ Symbol()函数不能与new关键字一起作为构造函数使用

###### 全局符号注册表

Symbol.for( ) 对每个字符串都执行幂等操作

```js
let fooGlobalSymbol = Symbol.for('foo')//创建新符号
let otherGlobalSymbol = Symbol.for('foo') //重用已有符号
```

+ Symbol.keyFor( )

  查询全局注册表，这个方法接收符号，返回该全局符号对应的字符串键。如果查询的不是全局符号，则返回undefined

  ```js
  let s1 = Symbol.for('foo')//全局符号
  
  let s2 = Symbol('foo')    //普通符号
  ```

+ 使用符号作为属性

  凡是使用字符串或数值作为属性的地方都可以使用符号。

  **Object.getOwnPropertyNames( )** 返回对象实例的常规属性数组

  **Object.getOwnPropertySymbol( )**返回对象实例的符号属性数组

  **Reflect.ownKeys( )** 返回两种类型的键

---



### 操作符

#### 一元操作符

##### 递增/递减操作符

```js
let age = 29
++age

//等价于

age =age + 1


age = age-1
//等价于
--age


age++
age--
//与上面不同地是，先取age的原值进行操作，再对age自增

let num = 11
let num1 = num++ + 5   //num1 = 16  此时num=6
```



##### 一元加和减

+ +

  无任何变化，在数值前面加

+ -

  将数值变为负值



##### 位操作符

+ 用于数值的底层操作

+ 有符号整数使用32位的前31位表示整数值，第32位表示数值的符号，0表示正，1表示负

+ 负值以一种称为二补数的二进制编码存储。

  - 二补数的步骤

    1 确定绝对值的二进制表示；

    2 找到数值的一补数，0变成1，1变成0

    3 结果加1

###### 按位非

+ 0变1，1变0



###### 按位与

+ 同1为1，其余为0



###### 按位或

+ 同0为0，其余为1



###### 按位异或

+ 同数为0，不同为1



###### 左移

+ 左移操作符号 <<

  ```js
  let num = 2   //二进制为10
  let num1 = num << 4   //向左移4位    100000   num1=32
  ```



###### 有符号右移

+ 右移操作符号 >>

+ 右移后出现的空位在左侧，且在符号位之后，对其用0进行补全，保留位数完整



###### 无符号右移

+ 无符号右移 >>>
+ 对于负数，差异会很大，无符号右移会给空位补0



##### 布尔操作符

###### 逻辑非

+ 逻辑非操作符由一个！表示



###### 逻辑与

+ 逻辑与操作符 &&



###### 逻辑或

+ 逻辑或操作符 ||



##### 乘性操作符

乘法 （*）  除法（/） 取模（%）



##### 指数操作符

Math.pow( 参数1,参数2)  ==  **

```js
Math.pow(3,2)

let num = 3
num **=2  //3的平方
```



##### 加性操作符

###### 加法操作符

+ 若遇到是字符串则进行字符串拼接，在哪遇到则从那开始进行拼接



###### 减法操作符

+ 减法操作符-



##### 关系操作符

小于 <  、大于 >  、小于等于  <= 、大于等于 >=



##### 相等操作符

###### 等于与不等于

+ 先进性强制类型转换，再确定操作数是否相等

+ 等于 ( == )  、不等于( != )

+ null和undefined相等
+ null和undefined不能进行强制类型转换
+ **如果有任一操作数是NaN,则相等操作符返回false，不想等操作符返回true**（NaN == NaN  返回false）



###### 全等与不全等

+ 全等( === )、不全等( !== )
+ 不进行强制类型转换，进行比较参数,(先比较参数类型，再比较参数值)

+ 不全等是在不转换的前提下不相等，才返回true
+ null === undefined 返回false



##### 条件操作符

+  variable = boolean_expression ? true_value : false_value;



##### 赋值操作符

```js
let num =10
```



乘后赋值 (*=)

除后赋值 (/=)

取模后赋值 (%=)

加后赋值 (+=)

减后赋值 (-=)

左移后赋值 ( <<= )

右移后赋值 ( >>= )

无符号右移后赋值 ( >>>= )



##### 逗号操作符

```js
let num1 =2,num2=3,num4 =4

let num =(1,2,34,5)  //num =5,取最后一个值
```



### 语句

##### if语句

if( condition ) statement1 else statement2



##### do-while 语句

+ do-while是一种后测试循环语句

```js
do {
    statement
}while(expression);
//至少执行一次才退出
```



##### while语句

+ 先测试循环语句，不满时跳出循环

```js
while(expression ){

statement

}
```



##### for语句

```js
for ( initialization; expression; post-loop-expression){
    statement
}

//建议用let 初始化循环变量，控制变量的作用域

for( ; ; ){
    do
}//无限循环

let count = 10
let i = 0
for(; i<count){
    i++
}
```



##### for-in语句

+ 用于枚举对象中的非符号键属性
+ 对象的属性是无序的

```js
for(const key in object){
    do key
}
```



##### for-of语句

+ 遍历可迭代对象的元素

```js
for(const value of 可迭代对象){
    do value
}
```



##### 标签语句

+ 用于给语句加标签

```js
start : for (let i=0 ; i< count; i++){
    console.log(i)
}
//在后面可以通过break或continue语句进行引用
//应用场景循环嵌套

```



##### break 和continue语句

+ break跳出循环部分，执行之后的语句
+ continue跳出当前循环，执行下一次循环



##### with语句

+ 将代码作用域设置为特定的对象
+ 主要使用场景，针对一个对象反复操作，将代码作用域设为该对象

```js
with(location){
    let qs = search.substring(1)
    let name = hostname
    let url =herf
}

//等价于
let qs = location.search.substring(1)
let name = location.hostname
let url = location.herf

```



##### switch语句

+ 适用于所有数据类型
+ 比较每个条件的值时使用全等操作符，不进行类型转换

```js
switch(expression){
    case value1: 
        statement
        break;
    case value2:
        statement
        break;
}
```



### 函数

+ 函数只要碰到return语句就立刻停止执行并退出

```js
function funname(arg1,arg2,....){
    statement
}
```

---



## 变量、作用域与内存

### 原始值与引用值

#### 原始值

+ 最简单的数据，不能有属性，保存在**栈内存**上

#### 引用值

+ 由多个值构成的对象，按引用访问的，可以动态添加/删除属性，保存在**堆内存**上



#### 复制值

+ 原始值会被复制到新变量的位置，切复制后的值与原值完全独立，互不干扰。
+ 引用值从一个变量赋值给另一个变量时，存储在变量中的值也会被复制到新变量存储值的位置，此时的值时一个指针，指向存储中堆内存的对象



#### 传递参数

+ **所有函数的参数都是按值传递的**，函数内部的参数是局部变量。
+ 按值传递参数时，值会被复制到一个局部变量
+ 在按引用传递参数时，值在内存中的位置会被保存到一个局部变量，这意味着对本地变量的修改会反映到函数外部。
+ typeof操作符确定值的原始类型，instanceof操作符用于确保值的引用类型



### 执行上下文与作用域

+ 变量和函数的上下文决定了他们可以访问那些数据，每一个上下文都有一个关联的变量对象。
+ 全局上下文是window对象
+ 全局上下文在应用程序退出前才会被销毁
+ 全局上下文的变量对象始终是作用域链的最后一个变量对象



```js
var color = "red"

function fun1(){
	let num1 = "yellow"
    function fun2(){
        let num2 = 'blue'
        num1 = color
        color = num2
    }
    fun2()
}

fun1()
//作用域链
window (color)-> fun1(color,num1) -> fun2(color,num1,num2)
```

+ 任何上下文都不能到下一级上下文中去搜索变量



#### 作用域链增强

+ try/catch语句的catch块
  - 会创建一个新的变量对象，这个变量对象包含要抛出的错误

+ with语句

  - ```js
    function buildUrl(){
        let qs = "?dsadsa"
        with(location){
             let url = href+qs
        }
        return url
    }

#### 变量声明

+ 如果使用const声明对象后，想让对象不能修改，使用Object.freeze()

  ```js 
  const ob = Object.freeze({})
  ob.name = 'dasd'
  console.log(ob.name) //undefined
  ```

  

### 垃圾回收

#### 标记清理

+ 垃圾回收程序在运行时，会标记内存中存储的所有的变量，然后会将所有在上下文中的变量，以及被在上下文中的变量引用的变量的标记去掉，在此之后再被加上标记的变量就是待删除的。

#### 引用计数（弃用）

+ 对每个值记录它被引用的次数，如果保存对该值引用的变量被其他值给覆盖了，引用数-1，当引用数为0时，就无法访问该值，进行回收。

#### 性能

+ 123



#### 内存管理

+ 在数据不在需要时，将它设置为null。

  ##### 隐藏类(提升性能)

  + V8 js引擎将创建的对象与隐藏类关联起来。

    ```js
    function fun(){
        this.title ="hello"    
    }
    let a1 = new fun()
    let a2 = new fun()
    //两个实例共享一个隐藏类
    ```

  + 为保持共享隐藏类，对实例对象删除属性时，设置为null

  ##### 内存泄漏

  ```js
  function fun(){
      name ="dsa"
  }
  //在window对象创建的属性，直到浏览器关闭才消失
  
  
  
  let name = "jack"
  setInterval(()=>{
      console.log(name)
  },100)
  //定时器的回调通过闭包引用了外部变量，只要定时器一直运行，name就一直占用内存
  
  let outer = function(){
      let name = 'jack'
      return function(){
          return name
      }
  }
  //形成闭包，只要返回函数存在就不能清理name，因为闭包一直在使用它
  ```

  ##### 静态分配与对象池

  + 间接控制触发垃圾回收的条件

  

## 基本引用类型

+ 对象被认为是某个特定引用类型的实例，新对象通过使用new操作符后跟一个构造函数来创建。构造函数就是用来创建新对象的函数。

### Date

+ parse( ) ：方法表示接收一个表示日期的字符串参数
+ now( ) : 返回执行日期和时间的毫秒数

#### 继承的方法

+ toLocalString( )
+ toString( )
+ valueOf( ) 返回日期的毫秒表示

#### 日期格式化方法

+ toDateString( ) 周几、月、日、年
+ toTimeString( ) 时分秒，时区
+ toLocaeDateString( )
+ toLocaleTimeString( )
+ toUTCString( )

#### 组件方法：网上找



### RegExp

+ 匹配模式的标记：g / i / m / y / u / s

#### 实例方法

+ exec( )

  - 参数：要应用模式的字符串
  - 返回：第一个匹配信息的数组
  - index:  是字符串中匹配模式的起始位置
  - input : 是要查找的字符串

  ```js
  let text = 'hello world'
  let parttern = /llo/g
  let match = pattern.exec(text)
  // 返回匹配数组信息
  ```

  - 在使用g标记后，进行全局搜索，每次调用exec( )都会在字符串中向前搜索下一个匹配项
  - 每次调用exec( )都会更新lastIndex值
  - 如果使用y标记，每次调用exec( )就只会在lastIndex的位置上寻找匹配项

+ test( )

  - 接受一个字符串参数，如果输入文本与模式匹配返回true，否则返回false



#### RegExp构造函数属性

+ 访问属性有两种方式，全名，简写

| 全名         | 简写 | 说明                                 |
| ------------ | ---- | ------------------------------------ |
| input        | $_   | 最后搜索的字符串                     |
| lastMatch    | $&   | 最后匹配的文本                       |
| lastParen    | $+   | 最后匹配的捕获组                     |
| leftContext  | $`   | input字符串出现在lastMatch前面的文本 |
| rightContext | $'   | input字符串出现在lastMatch后面的文本 |



### 原始值包装类

+ 使用new调用原始值包装类型的构造函数，与调用同名的转型函数不一样

```js
let value = '25'
let number = Number(value)

let obj = new Number(value)
 obj != number
```



#### String

##### 提取子串的方法

+ slice：参数1: 开始提取的位置，参数2 :  结束提取的位置，将所有负参数转为字符串长度加上负值
+ substr：表示返回子字符串的数量，第一个负参数转为长度加该值，(倒着数)，第二个参数换为0
+ substring : 同slice，将所有负参数转为0

##### 查找字符串的位置

+ indexOf():从头开始找
+ lastIndexOf()：从尾部开始找
  - 参数2：开始搜索的位置

##### 字符串包含的方法

+ startWidth：检索开始于索引为0的匹配项，参数2：作为字符串开始搜索的位置
+ endsWith：检索开始于索引为尾部的匹配项, 参数2：作为字符串结束的位置
+ includes：检查整个字符串

##### trim()

+ 返回的是字符串的副本，删除字符串前后的空格
+ trimLeft()
+ trimRight()

##### repeat()

+ 接收一个参数，表示要将字符串复制多少次，然后将拼接所有副本后的结果。

+ padStart() : 参数1：字符串长度，参数2：填充的字符串

+ padEnd() ：参数1：字符串长度，参数2：填充的字符串

+ ```js
  let stringValue = "foo"
  console.log(stringValue。padStart(2,'!'))  //!!foo
  console.log(stringValue。padEnd(2,'!'))    //foo!!
  ```

##### 字符串结构与迭代

```js
for( const c in string){
    do c
}


let str = 'dasds'
let array = [...str]
```

+ toLowerCase()
+ toUpperCase()

##### 字符串匹配模式

+ match( ) : 方法接收一个参数，与exec( ) 方法相同
+ search( ) : 唯一参数与match( )一致，**返回模式第一个匹配的位置索引，没找到就返回-1**
+ replace( ) : 第一个参数是正则或字符串，第二个参数可以是一个字符串或一个函数。
+ split( ) ：根据传入的分隔符将字符串拆为数组。

##### localeCompare( )

+ 比较两个字符串的顺序
+ 相等返回0，前面1，后面2

#### Number

+  toFixed( ) : 返回包含指定小数点位数的数值字符串
+  toExponential( ) : 返回科学计数法
+  toPrecision( ) : 返回最合理的输出结果
+ isSafeInteger( ) : 判断数值是否在范围内

#### Boolean



### 内置对象

#### Global

+ encodeURI（）：不会编码特殊字符
+ encodeURIComponent（）: 编码特殊字符
+ eval( ) : 完整的ECMAcript解释器 



#### window对象

+ 全局作用域中声明的变量和函数都变成了window的属性



### Math

+ min( ),max( ):接收任意多个参数
+ 舍入方法：**舍为整数**
+ Math.ceil( ):方法始终向上舍入为最接近的整数。
+ Math.floor( )：方法始终向下舍入为最接近的整数
+ Math.round( )：方法执行四舍五入
+ Math.fround( )：方法返回最接近的单精度浮点值表示
+ random( ) : 返回0~1任意随机数



## 集合引用类型

### Object

+ 使用构造函数或字面量创建对象

### 数组

+ 使用构造函数或字面量创建数组

#### 数组空位

+ 初始化数组是，使用一串逗号来创建空位，值为undefined

```js
const options = [,,,,]
//options.length = 5
```

#### 数组索引

+ 从0开始
+ 检测数组 instanceof Array

#### 迭代器方法

+ keys():  返回数组索引
+ values()：返回数组元素的迭代器
+ entries()：返回索引/值对的迭代器

```js
const a = ['foo','bar','baz','qux']
 for(const [idx element] of a.entries()){
     alert(idx)
     alert(element)
 }
```

+ copyWithin( ) : 批量复制，指定位置潜复制数组中的部分内容
+ fill( ) : 填充数组，向一个数组中插入全部或部分相同的值，开始索引用于指定开始填充的位置，不提供结束索引，则一直填充到末尾。

#### 转换方法

+ toLocalString() 
+ toString()
+ valueof()
+ join():指定字符分隔数组元素



#### 栈方法与队列方法

+ push( )
+ pop( )
+ shift()
+ unshift()

#### 排序方法

+ reverse( ) : 数组元素反向排列
+ sort( ) : 可以接受一个函数，判断值的排列顺序

```js
array.sort((a,b)=>a-b)
```

#### 其他操作方法



### 定型数组（大概了解）

#### ArrayBuffer（）

+ 是所有定型数组及视图引用的基本单位，用于在内存中分配特定数量的字节空间，一经创建不能改变大小

#### DataView

+ 位文件I/O和网络I/O设计



### Map

+ 新的集合类型，键值对来保存数据，**可以使用任何数据类型作为键**

 #### Map初始化

```js
const m1 = new Map([['dsa','dsa'],['dsa','das']]) //嵌套数组初始化
```

+ set( ) ：添加键值对,可以连续操作
+ get()
+ has()
+ size()
+ delete()
+ clear( )

```js
const m = new Map()
const obj1 = {},obj2 = {},arr1=[],arr2=[]

m.set(obj1,obj2)
m.set(arr1,arr2)
obj1.a = 'a'
obj2.b = 'b'
arr1.push(1)
arr2.push(2)

console.log(m)

console.log(m.get(obj1))
console.log(m.get(arr1))
```

#### 顺序迭代

+ 维护键值对的插入顺序，可根据插入顺序进行迭代
+ entries() 获取迭代器

```js
for (let pair of map.entries()){
    pair//就是每一个键值对
}

```

+ 也可以使用类似数组结构的方式进行分解

```js
[...map]

map.foreach((val,key) =>do(key,value))
```

+ keys()与values() 分别生成键和值的迭代器

+ 作为键的字符串的原始值不能修改

  - ```js
    for(let key of map.keys()){
        key ='ds'
        console.log(map.get(key))//不变
    }
    ```

+ 修改了作为键的对象的属性，但对象在映射内部仍然引用相同的值

```js
//key位对象
for(let key of map.keys()){
    key.id ='ds'
    console.log(map.get(key))//不变，但key发生了改变
}
```



#### Object与Map之间的选择

+ 内存占用：map比object节约空间
+ 插入性能：插入操作量大时，选择map性能佳
+ 查找速度：性能差不多
+ 删除性能：选择map



## WeakMap

+ ES6新增的“弱映射”集合，与Map是“兄弟类型”。
+ 弱映射的键只能是Object或者继承自Object的类型

```js
const key1={id:1},
	  key2={id:2}

const wmp = new WeakMap([[key1,'d'],[key2,'a']])

//初始化是全有全无的操作
```

### 操作

+ set( )
+ get( )
+ has( )
+ delete( )

### 弱键

```js
const wm = new WeakMap()
wm.set({},"val")

//这里键是一个空对象，当这行代码执行完后，这个对象键会被回收，键值对也会消失，wm成为空映射
```



#### 私有变量

+ 弱映射造就了一种js中私有变量的新方式，前提：私有变量会存储在弱映射中，以对象实例为键，以私有成员的字典为值

```js
const wm = new WeakMap()
class User{
    constructor(id){
    	this.idProperty = Symbol('id')
    	this.setId(id)
    }

    setPrivate(property,value){
    	const privateMembers = wm.get(this) || {}
    	privateMembers[property] = value
    	wm.set(this, privateMembers)

    }

    getPrivate(property){
    	return wm.get(this)[property]
    }

    setId(id){
    	this.setPrivate(this.idProperty)
    }

    getId(){
    	return this.getPrivate(this.idProperty)
    }
}
```



#### DOM节点元元素

## Set

+ 加强的Map
+ add( )
+ has( )
+ size( )
+ delete( ): 返回布尔值，表示删除的元素是否在
+ clear( )

### 顺序与迭代

+ Set会维护值插入时的顺序，因此支持按顺序迭代



```js
const s = new Set(['val1','val2','val3'])

for(let value of s.values()){
    do value
}

console.log([...s])

for(let pair of s.entries()){
    do pair
}
//pair = [val1,val1],产生两个元素的数组
s.forEach((val,dupVal)=> do(val,dupVal))
```

+ 修改对象的值，但对象仍处于集合中

+ entries( ): 按照插入顺序产生包含两个元素的数组，这两个元素是集合中每个值的重复出现。



### 定义正式集合的操作

```js
class XSet extends Set{
    //交叉并补
}
```



### WeakSet

+ 弱集合的一种新类型

+ 不可迭代



## 迭代器与生成器

+ 迭代之前需要事先直到如何使用数据结构

### 迭代器模式







## 对象

+ 一组属性的无序组合

### 属性

#### 属性的类型

##### 数据属性

修改属性的特性，必须使用Object.defineProperty( ) 方法

+ [[ Configurable ]] :表示属性是否可以通过delete删除并重新定义

```js
let person ={}
Object.defineProperty(person,'name',{
    configurable:false,
    value:"Nicholas"
})

//Object.defineProperty(),对于同一个属性多次调用，但设置为false之后就不可以调用了
```



+ [[ Enumberable ]] : 表示属性可以通过for-in循环返回
+ [[ Writable ]] : 表示值是否可以被修改
+ [[ value ]] : 包含属性实际的值



##### 访问器属性

+ [[ Configurable ]] : 同上
+ [[ Enumberable ]] ： 同上

+ [[ Get ]] ： 获取函数，读取属性值调用
+ [[ Set ]]：设置函数，写入属性值时调用

访问器属性不能直接定义，必须使用Object.defineProperty( ) 方法

```js
let book={
    year_:2017,
    edition:1
}
Object.defineProperty(book,"year",{
    get(){
        return this.year_
    }
    set(newValue){
        if(newValue>2017){
			this.year_=newValue
            this.edition += newValue - 2017
        }
	}
}) 

book.year = 2018
// book.edition = 2
```

##### 定义多个属性

Object.defineProperty(要添加属性的对象，描述符对象 )

``` js
let book = {} 
Object.defineProperties(book,{
    year_:{
        value:2017
    },
    edition:{
        value:1
    },
    year:{
        get(){
            return this.year_
        }
        set(newValue){
    		if(newValue>2017){
			this.year_=newValue
            this.edition += newValue - 2017
        		}
			}
    }
    
})
```



#### 读取属性的特例

+ 获取指定属性的属性描述符

```js
let des = Object.getOwnPropertyDescriptor(book,"year_")

console.log(des.value) //des.configurable des.get des.set等等
```



+ 新增：Object.getOwnPropertiyDescriptors()静态方法

```js
Object.getOwnPropertiyDescriptors(Object)
// 将所有属性的属性描述符列出来
{
    属性名:{
        configurable:false,
        enumerble:false,
        value:1,
        writable:fasle
    }
    
}
```



#### 合并对象

+ Object.assign(目标对象，多个元对象[参数]),将源对象的get获取的值，然后使用目标对象上的set设置属性的值。实际上执行的是对每个源对象的浅复制。如果多个源对象有相同属性，则按最后一个为主。

```js
let dest ,src,result;

dest = {}
src = {id:'src'}
res = object.assign(dest,src)

//dest == res  des != res  res = dest = {id：'src'}
```



#### 对象标识符及相等判断

+ 新增：Object.is(),接收两个参数

```js
console.log(true,1) //fasle
```





#### 属性值简写

```js
let name ='Matt'
let person ={
    name
}
```



#### 可计算属性

```js
const name = 'name'
let person = {
    [name]:'ranmaoran'
}
```



#### 简写方法名

```js
let person ={
    sayName(name){
        console.log('dhsajhj')
    }
}
```



#### 对象解构

```js
let person ={name:'hello', age:15}
let {name:personName, age:personAge} = person
```

+ 左边和右边的属性名必须一一对应

+ 解构在内部使用函数ToObject()，把源数据结构转换为对象。**null和undefined不能被解构**。

****



##### 嵌套解构

```js
let person = {
    name:'Matt'
    age:27,
    job:{
    title:'software engineer'
}
}

let personCopy ={}
({
    name:personCopy.name,
    age:personCopy.age
    job:personCopy.job
}=person)
```

+ 外层属性在没有定义的情况下不能使用嵌套解构



##### 部分解构

+ 如果一个解构表达式涉及多种赋值，开始赋值成功而后面出错，则整个解构赋值只会完成一部分。



##### 参数上下文匹配

+ 在函数参数列表也可以进行解构赋值。

```js
let person = {
    name:'matt',
    age:219
}
function fun(foo,{name,age},bar){
    console.log(arguments)
}

fun('ds',person,'dsa')
//['ds',{name:'matt',age:219},'dsa']
```



### 创建对象

#### 工厂模式

```js
//创建对象函数，没有解决对象标识的问题，创建的都是Object
function createPerson(name,age,job){
    let o = new Object()
    o.name = name
    o.age=age
    o.job=job
    o.sayname(){
        console.log(this.name)
    }
    return o
}
```



#### 构造函数模式

```js
function Person(name,age,job){
    this.name= name
    this.age = age
    this.job = job
    this.sayNmae(){
        console.log(this.name)
    }
}

let person1 = new Person('hello',24,'coder')
```

+ 没有显示地创建对象
+ 属性和方法值赋值给了this
+ 没有return
+ 如果构造函数返回空对象，则返回空对象；否则返回刚创建的对象。
+ constructor用于标识对象类型，实例的constructor都指向构造函数，不想传参时，构造函数后的括号可以不加。

```js
let o = new Object()
Person.call(o,'hello',24,'nurse') // 这里将o作为this
```





##### 构造函数问题

+ 实现复用构造函数内的方法，而不是每一个实例生成一个实例方法

+ 将函数定义转移到构造函数外部，通过引用来实现方法

```js
function Person(name,age,job){
    this.name= name
    this.age = age
    this.job = job
    this.sayame = sayname
}
function sayname(){
    console.log(this.name)
}
```

+ **会造成全局作用域的污染，多个实例调用方法时，会产生混论**



#### 原型模式

+ **原型对象定义的属性和方法都可以被实例共享。**
+ 每个函数都会创建一个prototype属性，这个属性是一个对象，包含由特定引用类型的实例共享的方法和属性。
+ prototype是构造函数的原型对象
+ __ proto __是对应的构造函数的原型对象



##### 原型

```text
无论何时，只要创建一个函数，就会按照特定规则为这个函数创建一个prototype属性(指向原型对象)。默认情况下，所有原型对象会自动获得一个名为constructor的属性，指回与之关联的构造函数。
```

+ 在自定义构造函数时，原型对象回默认只获得constructor属性，其他方法属性都继承自Object。
+ 原型链都会终止于Object的原型对象，Object原型的原型是null

```tex
实例通过_proto_链接到原型对象
它实际上指向隐藏特性[[Prototype]]（__proto__）
构造函数通过prototype属性链接到原型对象
实例与构造函数没有直接联系，与原型对象有直接联系  
```

+ Object.getPrototypeOf()返回对象就是传入对象的原型对象
+ **Object.create( )来创建新对象，同时指定原型**
+ 在实例上写一个与原型中相同的属性，会遮盖原型的属性。**通过delete删除属性可以恢复**在原型链上查找属性。
+ hasOwnProperty(): 用于确定某个属性是在**实例**还是在**原型对象**上，属性在实例上返回true。
+ hasPrototypeProperty(): 用于确定某个属性是在**实例**还是在**原型对象**上，属性在原型上返回true，当实例上的属性遮盖了原型上的属性时返回false。



##### in操作符

+ 无论是在单独使用还是for-in循环使用时，都可以通过对象访问指定属性时返回true,无论是在实例还是在原型对象中。
+ Object.keys():方法接收一个对象作为参数，返回包含该对象所有可枚举**属性名称**的字符串数组



##### 属性枚举顺序

+ for-in,和Object.keys()的枚举顺序是不确定的
+ Object.getOwnPropertyNames()、Object.getOwnPrototypeSymbols()、和Object.assign()的枚举顺序是确定的，先以升序枚举数值键，然后一插入顺序枚举字符串和符号键。在对象字面量中定义的键以他们的逗号分隔的顺序插入。



#### 对象迭代

+ Object.values():返回对象值的**数组**
+ Object.entries():返回键/值对的**数组**

这两个方法执行的都是浅复制。



+ 对象字面量重写原型

```js
function Person(){
 
}
Person.protorype = {
    name:'das',
    age:23,
    job:'dasds',
    syaname(){
        console.log(this.name)
    }
}

//其constructor属性指向新对象Object构造函数。


//恢复原来的constructor指向原构造函数
function Person(){
 
}
Person.protorype = {
    constructor:Person，
    name:'das',
    age:23,
    job:'dasds',
    syaname(){
        console.log(this.name)
    }
}
//这里的constructor的可枚举属性被打开，需要通过defineProperty去关闭

Object.defineProperty(Person.prototype, 'constructor',{
    enumberable:false,
    value:Person
})
```

+ **重写原型会切断构造函数与最初原型的联系。重写原型之前的实例仍连接之前的原型**



```js
function Person(){}

let  friend = new Person()

Person.prototype ={
    constructor:Person，
    name:'sd',
    age:26,
    job:'dsdas',
    sayname(){
        console.log('das')
    }
}

friend.sayname() //报错
```

---

  ![new](C:\Users\Administrator\Desktop\学习\图片\new.png)

+ 重写原型后

![old](C:\Users\Administrator\Desktop\学习\图片\old.png)



#### 原生对象原型

+ 所有原生引用类型的构造函数都在原型上定义了实例方法。
+ 通过原生对象的原型可以取得所有默认方法的引用。



##### 原型模式问题

+ 弱化了构造函数传递参数的能力
+ 共享特性，实例向原型属性（引用值）中添加值时，另一个实例的相同属性也会改变。



### 继承

+ 原型链是ES6的主要继承方式，原理是通过原型链继承多个引用类型的属性和方法。

#### 原型继承

```js
//sub通过prototype继承sup
//sup的实例是sub的原型
function sup(){
	this.property = true
}

sup.prototype.getval = function(){
	return this.property
}

function sub(){
	this.subproperty = false
}

//继承
sub.prototype = new sup()

sub.prototype.getsubval = function(){
	return this.subproperty
}

let a = new sub
console.log(a.getval())
console.log(sup.prototype)
```





![原型链](C:\Users\Administrator\Desktop\学习\图片\原型链.png)



+ **所有引用类型都继承自Object**

#### 原型与继承关系

+ instanceof方法：如果一个实例的原型链中出现过相应的构造函数，返回true
+ **isPrototypeOf(): 原型链中包含这个原型就返回true**



##### 方法

+ 子类覆盖或增加父类没有的方法时，必须在原型赋值之后再添加到原型上。
+ 以对象字面量的方式创建原型方法会破坏之前的原型链，因为这相互于重写了原型链。

+ 子类型在实例化过程中无法给父类构造函数传参



#### 盗用构造函数（对象伪装、经典继承）

+ 解决原型包含引用值导致的继承问题
+ 在子类构造函数中调用父类构造函数，使用apply(),call()方法以新创建的对象为上下文执行构造函数

```js
function sup(){
    this.colors = ['red','green']
}

function sub(){
    //在上下文执行构造函数，每个实例都会有自己的属性，不会互相影响
    sup.call(this)
}

```

##### 传递参数

```js
function sup(color){
    this.colors = color
}

function sub(){
    //继承并传参，参数对应构造函数需要的参数
    sup.call(this,'参数')
}
```

+ 在父类构造函数之后再给子类实例添加额外属性



##### 问题

+ 必须在构造函数中定义方法，因此函数不能重用
+ 子类无法访问**父类原型**上的方法



#### 组合继承

+ 使用原型链继承**原型上的属性和方法**，通过对象伪装继承**实例属性**

```js
function sup(color){
    this.colors = color
}
//父类原型的方法
sup.prototype.sayname=function(){
    console.log(this.name)
}

function sub(){
    //继承父类属性并传参，参数对应构造函数需要的参数
    sup.call(this,'参数')
}
//子类原型为父类实例，将子类加到原型链上，使之能访问父类原型上的方法
sub.prototype = new sup()

```



#### 原型式继承

```js
let person = {
    name:'hello',
    //引用值属性
    friends:['f1','f2']
}

let aperson = object(person)
aperson.name = 'name1'
aperson.friends.push('f3')

let bperson = object(person)  //object生成的新对象的原型是person
bperson.name='name2'
bperson.friends.push('f4')

console.log(person.friends)//['f1','f2','f3','f4']
```

+ object.create():与object( ) 方法效果相同。

+ 原型式继承适合不需要单独创建构造函数，但仍需要在对象空间中共享信息的场合。属性中包含的引用值始终会在相关对象间共享，和原型模式是一样的。



##### 寄生式继承

+ 创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象。

```js
function createAnother(orginal){
    let clone = object(original)  //创建新对象
    clone.sayhi = function(){    //增强新对象，这里的函数难以重用
        console.log('das')
    }
    return clone  
}
```



##### 寄生式组合继承

```js
//继承函数
function inheritPrototype(childrenObj,fatherObj){
    let prototype = Object(fatherObj.prototype)  //创建新对象，赋值父类原型函数
    prototype.constructor = childrenObj          //将子类的构造器指向子类构造函数
    childernObj.prototype = prototype			 //子类的原型函数为创建的新对象
}
function sup(color){
    this.colors = color
}
//父类原型的方法
sup.prototype.sayname=function(){
    console.log(this.name)
}

function sub(color){
    //继承父类属性并传参，参数对应构造函数需要的参数
    sup.call(this,color)
}

inheritPrototype(sub,sup)

```

+ 只调用了一次父类构造函数，是引用类型的最佳模式





##### 原型链经典图

![原型链实例](C:\Users\Administrator\Desktop\学习\图片\原型链实例.png)

+ 所有函数和对象的原型都是对象

+ Function优先是一个**函数实例**

+ ```
  自身是构造函数,自身又是自身构造函数的实例
  ```

+ ```
  其次才是广义的对象.
  ```

---



  

### 类

+ ES6新新引入的基础语法糖结构，使用的是原型和构造函数

#### 类定义

+ 类声明

```js
class person{}
```

+ 类表达式

```js
const Animal = class {}
```

+ 与函数表达式相同，在被求值之前无法被引用，类声明无法提升。
+ 作用域：函数受函数作用于限制，类受块作用域限制

```js
{
    function fun(){}
    class person{}
}

console.log(fun) //函数表达式
console.log(person) //报错
```

##### 类的构成

+ 类可以包括函数方法，实例方法，获取函数，设置函数，静态函数，静态类方法 
+ 可以通过name属性获取类名



##### 类构造函数

+ constructor关键字用于在类定义块内部创建类的构造函数。不定义构造函数将视其为空函数。



##### 实例化

+ 使用new操作符实例化

```text
//使用new调用类的构造函数会执行如下操作
1.在内存中创建一个新对象
2.在新对象内部的[[prototype]]指针被赋值为构造函数的prototype属性
3.构造函数内部的this赋值为这个新对象（this指向新对象）
4.执行构造函数内部的代码
5.如果构造函数返回非空对象，则返回该对象，否则，返回刚创建的新对象
```



+ 调用类构造函数必须使用new操作符。
+ 类标识符有prototype属性，而这个原型也有一个constructor属性指向类本身。

+ **instanceof:可以检测构造函数原型是否在实例的原型链中**

+ constructor():为类构造函数

#### 实例、原型和类成员

##### 实例成员

+ 在每次调用new标识符时，会执行构造函数
+ 每个实例都对应唯一的成员对象，所有对象都不会在原型上共享。

```js
class Person{
    constructor(){
        //使用对象类型包装字符串
        this.name = new String('he')
        this.sayname = ()=>console.log(this.name)
        this.nickname = ['red','fes']
    }
}

let p1 = new Person,
    p2 = new Person;

console.log(p1.name === p2.name) //false,说明所有成员都不在原型上共享
```



##### 原型方法与访问器

+ 类块中定义的方法为原型方法

+ 可以在类构造函数或者类块中定义方法**，但不能在类块中给原型添加原始值或对象作为成员数据**。

```js
class Person{
    name:'dsa'// 报错
}
```



+ 类定义也支持获取和设置访问器

```js
class Person{
    set name(newname){
        this.name_=newname
    }
    get name(){
        return this.name_
    }
}
```



##### 静态类方法

+ 使用static关键字作为前缀，在静态类成员中，this引用类自生。

```js
class Person{
    constructor(){
    //添加到this的所有内容会存在于不同的实例中
        this.locate = ()=>console.log(this)
    }
    //定义在类的原型对象上
    locate(){
        console.log(this)
    }
    //定义在类本身
    static locate(){
        console.log(this)
    }
}
```



###### 静态方法实现实例工厂的例子

```js
class Person{
    constructor(age){
        this.age_ = age
    }
    
    static create(){
        return new Person(Math.random(*100))
    }
}
//随即年龄创建实例
Person.create()
```



##### 非原型函数和类成员

+ 在类外部手动添加属性

```js
class Person{
    
}
//在类上添加属性
Person.name = 'dsadas'
//在原型函数上添加属性
Person.prototype.name = 'das'
```



##### 迭代器与生成器方法

```js
class Person{
    //在原型上定义生成器
    *createIterator1(){
         yield 'name1'
         yield 'name2'
         yield 'name1'
    }
    //在类上定义生成器
    static *createIterator2(){
         yield 'name1'
         yield 'name2'
         yield 'name1'
    }
}
```



+ 迭代器

```js
class Person {
    constructor(){
        this.nickname = ['name1','name2','name3']
    }
    
    *[Symbol.iterator](){
        yield *this.nickname.entries()
    }
    //只返回迭代器实例
    [Symbol.iterator](){
       return this.nickname.entries()
    }
}

let p = new Person
for(let [idx,val] of p){
    
}
```



#### 类继承

+ 支持类继承

##### 继承基础

+ extends关键字，可以继承任何拥有[[ Construct ]]和原型的对象
+ 不仅可以继承类也可以继承普通函数
+ 派生类都可以通过原型链访问到类和原型上定义的方法。

```js
class Vehicle{}
class bus extends Vehicle{}


function fun(){
    
}
class fun1 extends fun{}

//关键字可以在类表达式中使用
let bar = class extends foo{}
```



##### 构造函数、HomeObject和super()

+ 派生类可以通过super关键字引用他们的原型，**只能在派生类中使用**

+ 在类构造函数中调用super( )可以调用父类构造函数

```js
class Vehicle{
    constructor(){
       this.name = 'dsa'
    }
}

class bus extends Vehicle{
    constructor(){
        super() //相当于super.constructor()
    }
}
//在静态方法中通过super调用继承的类上定义的静态方法
class bus extends Vehicle{
    static fun(){
        super()
    }
}

```



+ ES6给类构造函数和静态方法添加了内部特性[[ HomeObject ]],这个特性是一个指针，指向定义该方法的对象。这个指针时自动赋值的，super始终定义为[[ HomeObject ]] 的原型。
+ super传参，super(参数)
+ 在类构造函数中，不能在调用super( ) 之前引用this

+ 在派生类中，显示调用了构造函数，则要么在其中调用super( )，要么必须在其中返回一个对象。



##### 抽象基类

+ 可供其它类继承，但本身不会被实例化。
+ new.target保存通过new关键字调用的类或函数。通过在实例化时检测new.target是不是抽象基类

```js
//抽象基类
class Vehicle{
    constructor(){
        console.log(new.target)
        if(new.target === Vehicle){
            throw new Error('Error')
        }
    }
}
```

+ 此外，在抽象基类构造函数中进行检查，可以要求派生类必须定义某个方法。通过this关键字来检查。



##### 继承内置类型

```js
class SuperArray extends Array{
    shuffle(){
        //洗牌算法
        for(let i = this.length-1;i>0;i--){
            const j = Math.floor(Math.random()*(i+1))
            [this[i],this[j]] = [this[j],this[i]]
        }
    }
}
```





##### 类混入

+ 把不同的类的行为集中到一个类。

+ Object.assign( ) : 实现汇入多个对象的属性

```js
class Vehicle{ }
function getparclass(){
    console.log('dsa')
    return Vehicle
}

class bus extends getparclass() {   //getparclass() 是一个函数，当执行到他时会返回一个对象，bus会继承这个对象
    
}
```



+ 定义可嵌套函数,接受一个超类作为参数

```js
class Vehicle{ }

let foo = (superclass)=> class extends superclass{
    foo(){
        
    }
}

let bar = (superclass)=> class extends superclass{
    bar(){
        
    }
}

let baz = (superclass)=> class extends superclass{
    baz(){
        
    }
}
//通过辅助函数将嵌套展开
function mix(BaseClass,...Mixins){
    return Mixins.reduce((accumulator,current)=>current(accumlator),BaseClass)
}
class mixclass extends foo(bar(baz(Vehicle))){
    
}

let a = new mixclass
```

