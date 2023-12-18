# 快速开始

> 集成 `YukiReflection` 到你的项目中。

## 环境要求

- Windows 7 及以上/macOS 10.14 及以上/Linux 发行版 (Arch/Debian)

- Android Studio 2021.1 及以上

- IntelliJ IDEA 2021.1 及以上

- Kotlin 1.7.0 及以上

- Android Gradle Plugin 7.0 及以上

- Gradle 7.0 及以上

- Java 11 及以上

- Java 17 及以上 (Since API `1.0.3`)

## 项目要求

项目需要使用 `Android Studio` 或 `IntelliJ IDEA` 创建且类型为 Java 或 Android 项目并已集成 Kotlin 环境依赖。

### 集成依赖

我们推荐使用 Kotlin DSL 作为 Gradle 构建脚本语言并推荐使用 [SweetDependency](https://github.com/HighCapable/SweetDependency) 来管理依赖。

#### SweetDependency (推荐)

在你的项目 `SweetDependency` 配置文件中添加存储库和依赖。

> 示例如下

```yaml
repositories:
  # MavenCentral 有 2 小时缓存，若无法集成最新版本请添加
  sonatype-oss-releases:

libraries:
  com.highcapable.yukireflection:
    api:
      version: +
  ...
```

添加完成后运行一次 Gradle Sync，所有依赖版本将自动装配。

接下来，在你的项目 `build.gradle.kts` 中部署依赖。

> 示例如下

```kotlin
dependencies {
    implementation(com.highcapable.yukireflection.api)
    // ...
}
```

#### 传统方式

在你的项目 `build.gradle.kts` 或 `build.gradle` 中添加存储库。

> Kotlin DSL

```kotlin
repositories {
    google()
    mavenCentral()
    // MavenCentral 有 2 小时缓存，若无法集成最新版本请添加此地址
    maven { url("https://s01.oss.sonatype.org/content/repositories/releases/") }
}
```

> Groovy DSL

```groovy
repositories {
    google()
    mavenCentral()
    // MavenCentral 有 2 小时缓存，若无法集成最新版本请添加此地址
    maven { url 'https://s01.oss.sonatype.org/content/repositories/releases/' }
}
```

在你的项目 `build.gradle.kts` 或 `build.gradle` 中添加依赖。

> Kotlin DSL

```kotlin
dependencies {
    implementation("com.highcapable.yukireflection:api:<yuki-version>")
    // ...
}
```

> Groovy DSL

```groovy
dependencies {
    implementation 'com.highcapable.yukireflection:api:<yuki-version>'
    // ...
}
```

请将 **&lt;yuki-version&gt;** 修改为 [这里](../about/changelog) 的最新版本。

::: danger

如果你的项目目前正在使用 [YukiHookAPI](https://github.com/HighCapable/YukiHookAPI) 的 1.x.x 版本，请不要重复集成 **YukiReflection**，因为 **YukiHookAPI** 已经包含了其中的功能且存在针对相关功能的改动，重复集成会造成功能性冲突引发异常，此时你应该前往 **YukiHookAPI** 的 [文档](https://highcapable.github.io/YukiHookAPI/zh-cn/) 查看对应的使用教程。

**YukiHookAPI** 将在 **2.0.0** 版本完全分离 **YukiReflection**，届时你可以同时与 **YukiHookAPI** 使用。

:::

#### 配置 Java 版本

在你的项目 `build.gradle.kts` 或 `build.gradle` 中修改 Kotlin 的 Java 版本为 17 及以上。

> Kotlin DSL

```kt
android {
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
}
```

> Groovy DSL

```groovy
android {
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_17
        targetCompatibility JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = '17'
    }
}
```

::: warning

自 API **1.0.3** 版本后 Kotlin 使用的 Java 版本默认为 17，不再支持 11 及以下版本。

:::