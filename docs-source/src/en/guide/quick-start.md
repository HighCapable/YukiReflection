# Quick Start

> Integrate `YukiReflection` into your project.

## Environment Requirements

- Windows 7 and above / macOS 10.14 and above / Linux distributions (Arch/Debian)

- Android Studio 2021.1 and above

- IntelliJ IDEA 2021.1 and above

- Kotlin 1.7.0 and above

- Android Gradle Plugin 7.0 and above

- Gradle 7.0 and above

- Java 11 and above

- Java 17 and above (Since API `1.0.3`)

## Project Requirements

The project needs to be created using `Android Studio` or `IntelliJ IDEA` and the type is an Java or Android project and the Kotlin environment dependency has been integrated.

## Integration Dependencies

We recommend using Kotlin DSL as the Gradle build script language and [SweetDependency](https://github.com/HighCapable/SweetDependency) to manage dependencies.

#### SweetDependency Method

Add the repositories and dependencies in your project's `SweetDependency` configuration file.

> The following example

```yaml
repositories:
  # MavenCentral has a 2-hour cache,
  # if the latest version cannot be integrated, please add this
  sonatype-oss-releases:

libraries:
  com.highcapable.yukireflection:
    api:
      version: +
  ...
```

After adding it, run Gradle Sync and all dependencies will be autowired.

Next, deploy dependencies in your project `build.gradle.kts`.

> The following example

```kotlin
dependencies {
    implementation(com.highcapable.yukireflection.api)
    // ...
}
```

#### Traditional Method (Not Recommended)

Add repositories in your project `build.gradle.kts` or `build.gradle`.

> Kotlin DSL

```kotlin
repositories {
    google()
    mavenCentral()
    // MavenCentral has a 2-hour cache, if the latest version cannot be integrated, please add this URL
    maven { url("https://s01.oss.sonatype.org/content/repositories/releases/") }
}
```

> Groovy DSL

```groovy
repositories {
    google()
    mavenCentral()
    // MavenCentral has a 2-hour cache, if the latest version cannot be integrated, please add this URL
    maven { url 'https://s01.oss.sonatype.org/content/repositories/releases/' }
}
```

Add dependencies in your project `build.gradle.kts` or `build.gradle`.

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

Please change **&lt;yuki-version&gt;** to the latest version [here](../about/changelog).

::: danger

If your project is currently using the 1.x.x version of [YukiHookAPI](https://github.com/fankes/YukiHookAPI), please do not integrate **YukiReflection** repeatedly, because **YukiHookAPI** already includes it functions and there are changes to related functions.

Repeated integration will cause functional conflicts and cause exceptions.

In this case, you should go to the [Documentation](https://fankes.github.io/YukiHookAPI/zh-cn/) of **YukiHookAPI** view the corresponding usage tutorial.

**YukiHookAPI** will be completely separated from **YukiReflection** in version 2.x.x, by which time you can use it with **YukiHookAPI** at the same time.

:::

#### Configure Java Version

Modify the Java version of Kotlin in your project `build.gradle.kts` or `build.gradle` to 17 or above.

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

Since API **1.0.3**, the Java version used by Kotlin defaults to 17, and versions 11 and below are no longer supported.

:::