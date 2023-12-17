# 展望未来

> 未来是美好的，也是不确定的，让我们共同期待 `YukiReflection` 在未来的发展空间。

## 未来的计划

> 这里收录了 `YukiReflection` 可能会在后期添加的功能。

### 自动生成反射代码

使用 `stub` 的方式创建一个 Kotlin 类，并声明其中的参数，以及其在各个版本中的不同状态。

比如下面的这个 Java 类就是我们需要反射的目标类。

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

目前要实现的功能是可以使用反射功能直接定义为如下 Kotlin 类。

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

然后我们就可以直接调用这个定义好的 Kotlin 类来实现反射功能，API 会根据注解自动生成反射代码。

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

### 自动生成可直接调用的 Class 对象

在 Kotlin 中，表示 Java 的类对象的方式是 `YourObject::class.java`，这个写法通常会很长，在反射过程中大量使用会很不美观。

在现有版本中，我们内置了常用的 `Class` 对象，但是这会增大依赖的体积，而且大多数情况下可能都用不到这些对象。

例如 `StringClass`、`IntType` 等等，这些对象都是在 `YukiReflection` 中内置的。

所以我们计划在后期添加一个功能，可以使用 `properties` 的方式创建一个需要生成的 `Class` 对象列表，通过 Gradle 插件依次生成这些 `Class` 对象。

诸如上面提到的这些原始类型的 `Class` 对象依然会内置在 `YukiReflection` 中，其余的 `Class` 对象需要自行定义。

生成的名称规范为 **类名 + Class**，为了防止包名冲突，你可以控制生成的 `Class` 对象的子包名。

在配置文件中，你无需添加 `Class` 作为后缀。

你可以在 Gradle 插件中定义生成的根包名，默认为 `com.highcapable.yukireflection.generated.classes`。

> 示例如下

```properties
# 最基本的定义方式就是直接写名称
# 将会生成到 com.highcapable.yukireflection.generated.classes.BundleClass
android.os.Bundle=Bundle
# 你可以在前方使用 "." 的形式来定义前置子包名
# 例如我们想把这个类定义到想要的包名
# 将会生成到 com.highcapable.yukireflection.generated.classes.myandroid.myos.BundleClass
android.os.Bundle=myandroid.myos.Bundle
# 你也可以不填写键值内容，这将使用键值名称作为定义的包名和类名
# 将会生成到 com.highcapable.yukireflection.generated.classes.android.os.BundleClass
android.os.Bundle
```

上述方式生成的 `Class` 对象的大概代码形式如下。

```kotlin
package com.highcapable.yukireflection.generated.classes.android.os

// 在默认 ClassLoader 的情况下使用
val BundleClass: Class<*> = "android.os.Bundle".toClass()

// 在指定 ClassLoader 的情况下使用
fun BundleClass(loader: ClassLoader): Class<*> = "android.os.Bundle".toClass(loader)
```

也许这个 `Class` 可能在一些情况下无法被得到，这个时候你可以参考以下配置方式。

> 示例如下

```properties
# 在键值后添加 "?" 的形式来定义可空的 Class 对象
android.os.Bundle?
```

上述方式生成的 `Class` 对象的大概代码形式如下。

```kotlin
package com.highcapable.yukireflection.generated.classes.android.os

// 在默认 ClassLoader 的情况下使用
val BundleClass: Class<*>? = "android.os.Bundle".toClassOrNull()

// 在指定 ClassLoader 的情况下使用
fun BundleClass(loader: ClassLoader): Class<*>? = "android.os.Bundle".toClassOrNull(loader)
```

如果这个 `Class` 对象能使用直接调用的方式进行引用，这个时候你可以参考以下配置方式。

> 示例如下

```properties
# 在键值后添加 "!!" 的形式来定义可直接调用的 Class 对象
android.os.Bundle!!
```

上述方式生成的 `Class` 对象的大概代码形式如下。

```kotlin
package com.highcapable.yukireflection.generated.classes.android.os

import android.os.Bundle

// 在默认 ClassLoader 的情况下使用
val BundleClass: Class<Bundle> = classOf<Bundle>()

// 在指定 ClassLoader 的情况下使用
fun BundleClass(loader: ClassLoader): Class<Bundle> = classOf<Bundle>(loader)
```

有了生成的 `Class` 对象，我们就可以愉快地使用 `YukiReflection` 进行反射了。

> 示例如下

```kotlin
method {
    name = "onCreate"
    param(BundleClass)
}
```

::: tip

以上功能可能会在实际推出后有所变化，最终以实际版本的功能为准。

:::