# Looking for Future

> The future is bright and uncertain, let us look forward to the future development space of `YukiReflection`.

## Future Plans

> Features that `YukiReflection` may add later are included here.

### Automatically Generate Reflection Code

Use `stub` to create a `Kotlin` class, and declare the parameters in it, as well as its different states in each version.

For example, the `Java` class below is the target class we need to reflect.

> The following example

```java:no-line-numbers
package com.example.test;

public class MyClass {
    
    private String myField = "test";

    public MyClass() {
        //...
    }

    private String myMethod1(String var1, int var2) {
        //...
    }

    private void myMethod2() {
        //...
    }

    private void myMethod3(String var1) {
        //...
    }
}
```

Through the existing usage of the current API, this class can be called reflectively in the following way.

> The following example

```kotlin
classOf<MyClass>().buildOf().current {
    // Call myField
    val value = field { name = "myField" }.string()
    // Call myMethod1
    val methodValue = method { name = "myMethod1" }.string("test", 0)
    // Call myMethod2
    method { name = "myMethod2" }.call()
    // Call myMethod3
    method { name = "myMethod3" }.call("test")
}
```

The function to be implemented at present can be directly defined as the following `Kotlin` class using the reflection function.

> The following example

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

Then we can directly call this defined `Kotlin` class to implement the reflection function, and the API will automatically generate the reflection code according to the annotation.

> The following example

```kotlin
MyClass().also {
    // Call myField
    val value = it.myField
    // Call myMethod1
    val methodValue = it.myMethod1("test", 0)
    // Call myMethod2
    it.myMethod2()
    // Call myMethod3
    it.myMethod3("test")
}
```

::: tip

The above functions may change after the actual release, and the functions of the actual version shall prevail.

:::