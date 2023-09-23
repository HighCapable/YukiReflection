# Introduce

> `YukiReflection` is a Reflection API based on the Java and Android platform.

## Background

This is a set of simple and efficient Reflection API rebuilt based on Java native Reflection API using Kotlin.

`YukiReflection` is also the core functionality that [YukiHookAPI](https://github.com/fankes/YukiHookAPI) is using.

The name is taken from ["ももくり" heroine Yuki Kurihara](https://www.bilibili.com/bangumi/play/ss5016).

## Usage

`YukiReflection` is fully built with Kotlin **lambda** syntax.

It can replace [Java's native Reflection API](https://www.oracle.com/technical-resources/articles/java/javareflection.html) and implement a more complete reflection solution in a more human-friendly language.

## Language Requirement

Please use Kotlin, the code composition of the API part is also compatible with Java, but the implementation of the basic reflection scene **may not be used at all**.

All Demo sample codes in the document will be described using Kotlin, if you don’t know how to use Kotlin at all, you may not be able to use `YukiReflection`.

## Source of Inspiration

`YukiReflection` was originally the core function integrated in the [YukiHookAPI](https://github.com/fankes/YukiHookAPI) project, and now it is decoupled so that this Reflection API can be used in any Java and Android platform project.

Now, we only need to write a small amount of code to implement a simple reflection call.

With Kotlin elegant **lambda** and `YukiReflection`, you can make your reflection logic more beautiful and clear.

> The following example

:::: code-group
::: code-group-item Yuki Reflection

```kotlin
"android.os.SystemProperties".toClass()
    .method {
        name = "get"
        param(StringClass, StringClass)
    }.get().call("ro.system.build.fingerprint", "none")
```

:::
::: code-group-item Java Reflection

```kotlin
Class.forName("android.os.SystemProperties")
    .getDeclaredMethod("get", String::class.java, String::class.java)
    .apply { isAccessible = true }
    .invoke(null, "ro.system.build.fingerprint", "none")
```

:::
::::