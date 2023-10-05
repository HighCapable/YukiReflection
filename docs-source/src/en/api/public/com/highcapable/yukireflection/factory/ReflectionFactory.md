---
pageClass: code-page
---

::: warning

The English translation of this page has not been completed, you are welcome to contribute translations to us.

You can use the **Chrome Translation Plugin** to translate entire pages for reference.

:::

# ReflectionFactory <span class="symbol">- kt</span>

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 这是自定义 `Member` 和 `Class` 相关功能的查找匹配以及 `invoke` 的封装类。

## LazyClass <span class="symbol">- class</span>

```kotlin:no-line-numbers
open class LazyClass<T> internal constructor(
    private val instance: Any,
    private val initialize: Boolean,
    private val loader: ClassLoaderInitializer?
)
```

**Change Records**

`v1.2.0` `added`

**Function Illustrate**

> 懒装载 `Class` 实例。

## ClassLoader.listOfClasses <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
fun ClassLoader.listOfClasses(): List<String>
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 写出当前 `ClassLoader` 下所有 `Class` 名称数组。

::: warning

此方法在 **Class** 数量过多时会非常耗时。

若要按指定规则查找一个 **Class**，请使用 [ClassLoader.searchClass](#classloader-searchclass-ext-method) 方法。

:::

## ClassLoader.searchClass <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
inline fun ClassLoader.searchClass(context: Context?, name: String, async: Boolean, initiate: ClassConditions): DexClassFinder.Result
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 通过当前 `ClassLoader` 按指定条件查找并得到 **Dex** 中的 `Class`。

::: danger

此方法在 **Class** 数量过多及查找条件复杂时会非常耗时。

建议启用 **async** 或设置 **name** 参数，**name** 参数将在当前 APP 不同版本中自动进行本地缓存以提升效率。

如果使用了 **async** 或 **name** 参数，则必须填写 **context** 参数。

此功能尚在试验阶段，性能与稳定性可能仍然存在问题，使用过程遇到问题请向我们报告并帮助我们改进。

:::

## Class.hasExtends <span class="symbol">- ext-field</span>

```kotlin:no-line-numbers
val Class<*>.hasExtends: Boolean
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 当前 `Class` 是否有继承关系，父类是 `Any` 将被认为没有继承关系。

## Class?.extends <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
infix fun Class<*>?.extends(other: Class<*>?): Boolean
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 当前 `Class` 是否继承于 `other`。

如果当前 `Class` 就是 `other` 也会返回 `true`。

如果当前 `Class` 为 `null` 或 `other` 为 `null` 会返回 `false`。

**Function Example**

你可以使用此方法来判断两个 `Class` 是否存在继承关系。

> The following example

```kotlin
// 假设下面这两个 Class 就是你需要判断的 Class
val classA: Class<*>?
val classB: Class<*>?
// 判断 A 是否继承于 B
if (classA extends classB) {
    // Your code here.
}
```

## Class?.notExtends <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
infix fun Class<*>?.notExtends(other: Class<*>?): Boolean
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 当前 `Class` 是否不继承于 `other`。

此方法相当于 `extends` 的反向判断。

**Function Example**

你可以使用此方法来判断两个 `Class` 是否不存在继承关系。

> The following example

```kotlin
// 假设下面这两个 Class 就是你需要判断的 Class
val classA: Class<*>?
val classB: Class<*>?
// 判断 A 是否不继承于 B
if (classA notExtends classB) {
    // Your code here.
}
```

## Class?.implements <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
infix fun Class<*>?.implements(other: Class<*>?): Boolean
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 当前 `Class` 是否实现了 `other` 接口类。

如果当前 `Class` 为 `null` 或 `other` 为 `null` 会返回 `false`。

**Function Example**

你可以使用此方法来判断两个 `Class` 是否存在依赖关系。

> The following example

```kotlin
// 假设下面这两个 Class 就是你需要判断的 Class
val classA: Class<*>?
val classB: Class<*>?
// 判断 A 是否实现了 B 接口类
if (classA implements classB) {
    // Your code here.
}
```

## Class?.notImplements <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
infix fun Class<*>?.notImplements(other: Class<*>?): Boolean
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 当前 `Class` 是否未实现 `other` 接口类。

此方法相当于 `implements` 的反向判断。

**Function Example**

你可以使用此方法来判断两个 `Class` 是否不存在依赖关系。

> The following example

```kotlin
// 假设下面这两个 Class 就是你需要判断的 Class
val classA: Class<*>?
val classB: Class<*>?
// 判断 A 是否未实现 B 接口类
if (classA notImplements classB) {
    // Your code here.
}
```

## Class.toJavaPrimitiveType <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
fun Class<*>.toJavaPrimitiveType(): Class<*>
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 自动转换当前 `Class` 为 Java 原始类型 (Primitive Type)。

如果当前 `Class` 为 Java 或 Kotlin 基本类型将自动执行类型转换。

当前能够自动转换的基本类型如下。

- `kotlin.Unit`
- `java.lang.Void`
- `java.lang.Boolean`
- `java.lang.Integer`
- `java.lang.Float`
- `java.lang.Double`
- `java.lang.Long`
- `java.lang.Short`
- `java.lang.Character`
- `java.lang.Byte`

## String.toClass <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
fun String.toClass(loader: ClassLoader?, initialize: Boolean): Class<*>
```

```kotlin:no-line-numbers
inline fun <reified T> String.toClass(loader: ClassLoader?, initialize: Boolean): Class<T>
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 通过字符串类名转换为 `loader` 中的实体类。

**Function Example**

你可以直接填写你要查找的目标 `Class`，必须在默认 `ClassLoader` 下存在。

> The following example

```kotlin
"com.example.demo.DemoClass".toClass()
```

你还可以自定义 `Class` 所在的 `ClassLoader`。

> The following example

```kotlin
val customClassLoader: ClassLoader? = ... // 假设这个就是你的 ClassLoader
"com.example.demo.DemoClass".toClass(customClassLoader)
```

你还可以指定 `Class` 的目标类型。

> The following example

```kotlin
// 指定的 DemoClass 必须存在或为可访问的 stub
"com.example.demo.DemoClass".toClass<DemoClass>()
```

你还可以设置在获取到这个 `Class` 时是否自动执行其默认的静态方法块，默认情况下不会执行。

> The following example

```kotlin
// 获取并执行 DemoClass 默认的静态方法块
"com.example.demo.DemoClass".toClass(initialize = true)
```

默认的静态方法块在 Java 中使用如下方式定义。

> The following example

```java:no-line-numbers
public class DemoClass {

    static {
        // 这里是静态方法块的内容
    }

    public DemoClass() {
        // ...
    }
}
```

## String.toClassOrNull <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
fun String.toClassOrNull(loader: ClassLoader?, initialize: Boolean): Class<*>?
```

```kotlin:no-line-numbers
inline fun <reified T> String.toClassOrNull(loader: ClassLoader?, initialize: Boolean): Class<T>?
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 通过字符串类名转换为 `loader` 中的实体类。

找不到 `Class` 会返回 `null`，不会抛出异常。

**Function Example**

用法请参考 [String.toClass](#string-toclass-ext-method) 方法。

## classOf <span class="symbol">- method</span>

```kotlin:no-line-numbers
inline fun <reified T> classOf(loader: ClassLoader?, initialize: Boolean): Class<T>
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 通过 `T` 得到其 `Class` 实例并转换为实体类。

**Function Example**

我们要获取一个 `Class` 在 Kotlin 下不通过反射时应该这样做。

> The following example

```kotlin
DemoClass::class.java
```

现在，你可以直接 `cast` 一个实例并获取它的 `Class` 对象，必须在当前 `ClassLoader` 下存在。

> The following example

```kotlin
classOf<DemoClass>()
```

若目标存在的 `Class` 为 `stub`，通过这种方式，你还可以自定义 `Class` 所在的 `ClassLoader`。

> The following example

```kotlin
val customClassLoader: ClassLoader? = ... // 假设这个就是你的 ClassLoader
classOf<DemoClass>(customClassLoader)
```

## lazyClass <span class="symbol">- method</span>

```kotlin:no-line-numbers
fun lazyClass(name: String, initialize: Boolean, loader: ClassLoaderInitializer?): LazyClass.NonNull<Any>
```

```kotlin:no-line-numbers
inline fun <reified T> lazyClass(name: String, initialize: Boolean, loader: ClassLoaderInitializer?): LazyClass.NonNull<T>
```

```kotlin:no-line-numbers
fun lazyClass(variousClass: VariousClass, initialize: Boolean, loader: ClassLoaderInitializer?): LazyClass.NonNull<Any>
```

**Change Records**

`v1.0.3` `added`

**Function Illustrate**

> 懒装载 `Class`。

## lazyClassOrNull <span class="symbol">- method</span>

```kotlin:no-line-numbers
fun lazyClassOrNull(name: String, initialize: Boolean, loader: ClassLoaderInitializer?): LazyClass.Nullable<Any>
```

```kotlin:no-line-numbers
inline fun <reified T> lazyClassOrNull(name: String, initialize: Boolean, loader: ClassLoaderInitializer?): LazyClass.Nullable<T>
```

```kotlin:no-line-numbers
fun lazyClassOrNull(variousClass: VariousClass, initialize: Boolean, loader: ClassLoaderInitializer?): LazyClass.Nullable<Any>
```

**Change Records**

`v1.0.3` `added`

**Function Illustrate**

> 懒装载 `Class`。

## String.hasClass <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
fun String.hasClass(loader: ClassLoader?): Boolean
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 通过字符串类名使用指定的 `ClassLoader` 查找是否存在。

**Function Example**

你可以轻松的使用此方法判断字符串中的类是否存在，效果等同于直接使用 `Class.forName`。

> The following example

```kotlin
if("com.example.demo.DemoClass".hasClass()) {
    // Your code here.
}
```

填入方法中的 `loader` 参数可判断指定的 `ClassLoader` 中的 `Class` 是否存在。

> The following example

```kotlin
val customClassLoader: ClassLoader? = ... // 假设这个就是你的 ClassLoader
if("com.example.demo.DemoClass".hasClass(customClassLoader)) {
    // Your code here.
}
```

## Class.hasField <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
inline fun Class<*>.hasField(initiate: FieldConditions): Boolean
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 查找变量是否存在。

## Class.hasMethod <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
inline fun Class<*>.hasMethod(initiate: MethodConditions): Boolean
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 查找方法是否存在。

## Class.hasConstructor <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
inline fun Class<*>.hasConstructor(initiate: ConstructorConditions): Boolean
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 查找构造方法是否存在。

## Member.hasModifiers <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
inline fun Member.hasModifiers(conditions: ModifierConditions): Boolean
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 查找 `Member` 中匹配的描述符。

## Class.hasModifiers <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
inline fun Class<*>.hasModifiers(conditions: ModifierConditions): Boolean
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 查找 `Class` 中匹配的描述符。

## Class.field <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
inline fun Class<*>.field(initiate: FieldConditions): FieldFinder.Result
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 查找并得到变量。

## Class.method <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
inline fun Class<*>.method(initiate: MethodConditions): MethodFinder.Result
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 查找并得到方法。

## Class.constructor <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
inline fun Class<*>.constructor(initiate: ConstructorConditions): ConstructorFinder.Result
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 查找并得到构造方法。

## Class.generic <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
fun Class<*>.generic(): GenericClass?
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 获得当前 `Class` 的泛型父类。

如果当前实例不存在泛型将返回 `null`。

## Class.generic <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
inline fun Class<*>.generic(initiate: GenericClass.() -> Unit): GenericClass?
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 获得当前 `Class` 的泛型父类。

如果当前实例不存在泛型将返回 `null`。

## Any.current <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
inline fun <reified T : Any> T.current(ignored: Boolean): CurrentClass
```

```kotlin:no-line-numbers
inline fun <reified T : Any> T.current(ignored: Boolean, initiate: CurrentClass.() -> Unit): T
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 获得当前实例的类操作对象。

## Class.buildOf <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
inline fun Class<*>.buildOf(vararg args: Any?, initiate: ConstructorConditions): Any?
```

```kotlin:no-line-numbers
inline fun <T> Class<*>.buildOf(vararg args: Any?, initiate: ConstructorConditions): T?
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 通过构造方法创建新实例，指定类型 `T` 或任意类型 `Any`。

## Class.allMethods <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
inline fun Class<*>.allMethods(isAccessible: Boolean, result: (index: Int, method: Method) -> Unit)
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 遍历当前类中的所有方法。

## Class.allConstructors <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
inline fun Class<*>.allConstructors(isAccessible: Boolean, result: (index: Int, constructor: Constructor<*>) -> Unit)
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 遍历当前类中的所有构造方法。

## Class.allFields <span class="symbol">- ext-method</span>

```kotlin:no-line-numbers
inline fun Class<*>.allFields(isAccessible: Boolean, result: (index: Int, field: Field) -> Unit)
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 遍历当前类中的所有变量。