# 介绍

> `YukiReflection` 是一个基于 Java 和 Android 平台的反射 API。

## 背景

这是一个使用 `Kotlin` 基于 `Java` 原生反射 API 重新打造的一套简洁、高效的反射 API。

`YukiReflection` 同时也是 [YukiHookAPI](https://github.com/fankes/YukiHookAPI) 正在使用的核心功能。

名称取自 [《ももくり》女主 栗原 雪(Yuki)](https://www.bilibili.com/bangumi/play/ss5016)。

## 用途

`YukiReflection` 完全采用 `Kotlin` `lambda` 语法构建。

它能取代 [Java 原生的反射 API](https://pdai.tech/md/java/basic/java-basic-x-reflection.html)，使用更加人性化的语言实现一套更加完善的反射方案。

## 语言要求

请使用 `Kotlin`，API 部分代码构成同样兼容 `Java` 但基础反射场景的实现**可能完全无法使用**。

文档全部的 Demo 示例代码都将使用 `Kotlin` 进行描述，如果你完全不会使用 `Kotlin` 那你将有可能无法使用 `YukiReflection`。

## 灵感来源

`YukiReflection` 最初是集成在 [YukiHookAPI](https://github.com/fankes/YukiHookAPI) 项目中的核心功能，现在进行了解耦合，使得这套反射 API 可以在任何 Java 和 Android 平台的项目中使用。

现在，我们只需要编写少量的代码，就能实现一个简单的反射调用。

借助 `Kotlin` 优雅的 `lambda` 写法以及 `YukiReflection`，可以让你的反射逻辑更加美观清晰。

> 示例如下

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