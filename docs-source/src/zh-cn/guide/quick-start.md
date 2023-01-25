# 快速开始

> 集成 `YukiReflection` 到你的项目中。

## 环境要求

- Windows 7 及以上/macOS 10.14 及以上/Linux 发行版(Arch/Debian)

- Android Studio 2021.1 及以上

- IntelliJ IDEA 2021.1 及以上

- Kotlin 1.7.0 及以上

- Android Gradle Plugin 7.0 及以上

- Gradle 7.0 及以上

- Jvm 11 及以上

## 项目要求

项目需要使用 `Android Studio` 或 `IntelliJ IDEA` 创建且类型为 Android 项目并已集成 `Kotlin` 环境依赖。

## 集成依赖

**(可选)** 在你的项目 `build.gradle` 中添加依赖。

> 示例如下

```groovy
repositories {
    google()
    mavenCentral()
    // MavenCentral 有 2 小时缓存，若无法集成最新版本请添加此地址
    maven { url "https://s01.oss.sonatype.org/content/repositories/releases" }
}
```

在你的 app `build.gradle` 中添加依赖。

> 示例如下

```groovy
dependencies {
    // 基础依赖
    implementation 'com.highcapable.yukireflection:api:<yuki-version>'
}
```

请将 **&lt;yuki-version&gt;** 修改为 [这里](../about/changelog) 的最新版本。

::: danger

如果你的项目目前正在使用 [YukiHookAPI](https://github.com/fankes/YukiHookAPI)，请不要重复集成 **YukiReflection**，因为 **YukiHookAPI** 已经包含了其中的功能且存在针对相关功能的改动，重复集成会造成功能性冲突引发异常，此时你应该前往 **YukiHookAPI** 的 [文档](https://fankes.github.io/YukiHookAPI/zh-cn/) 查看对应使用教程。

:::

在你的 app `build.gradle` 中修改 `Kotlin` 的 Jvm 版本为 11 及以上。

> 示例如下

```groovy
android {
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_11
        targetCompatibility JavaVersion.VERSION_11
    }
    kotlinOptions {
        jvmTarget = '11'
    }
}
```