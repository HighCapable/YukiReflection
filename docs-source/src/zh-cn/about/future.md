# 展望未来

> 未来是美好的，也是不确定的，让我们共同期待 `YukiReflection` 在未来的发展空间。

## 未来的计划

> 这里收录了 `YukiReflection` 可能会在后期添加的功能。

### 自动生成反射代码

使用 `stub` 的方式创建一个 `Kotlin` 类，并声明其中的参数，以及其在各个版本中的不同状态。

比如下面的这个 `Java` 类就是我们需要反射的目标类。

> 示例如下

```java:no-line-numbers
package com.example.test;

public class MyClass {
    
    private String myField = "test";

    public MyClass() {
        // ...
    }

    private String myMethod1(String var1, int var2) {
        // ...
    }

    private void myMethod2() {
        // ...
    }

    private void myMethod3(String var1) {
        // ...
    }
}
```

通过目前 API 的现有用法可以使用如下方式反射调用这个类。

> 示例如下

```kotlin
classOf<MyClass>().buildOf().current {
    // 调用 myField
    val value = field { name = "myField" }.string()
    // 调用 myMethod1
    val methodValue = method { name = "myMethod1" }.string("test", 0)
    // 调用 myMethod2
    method { name = "myMethod2" }.call()
    // 调用 myMethod3
    method { name = "myMethod3" }.call("test")
}
```

目前要实现的功能是可以使用反射功能直接定义为如下 `Kotlin` 类。

> 示例如下

```kotlin
package com.example.test

@ReflectClass
class MyClass {

    @ReflectField
    val myField: String = fieldValueOf("none")

    @ReflectMethod
    fun myMethod1(var1: String, var2: Int): String = methodReturnValueOf("none")

    @ReflectMethod
    fun myMethod2() = MethodReturnType.Unit

    @ReflectMethod
    fun myMethod3(var1: String) = MethodReturnType.Unit
}
```

然后我们就可以直接调用这个定义好的 `Kotlin` 类来实现反射功能，API 会根据注解自动生成反射代码。

> 示例如下

```kotlin
MyClass().also {
    // 调用 myField
    val value = it.myField
    // 调用 myMethod1
    val methodValue = it.myMethod1("test", 0)
    // 调用 myMethod2
    it.myMethod2()
    // 调用 myMethod3
    it.myMethod3("test")
}
```

::: tip

以上功能可能会在实际推出后有所变化，最终以实际版本的功能为准。

:::