# Quick Start

> Integrate `YukiReflection` into your project.

## Environment Requirements

- Windows 7 and above / macOS 10.14 and above / Linux distributions (Arch/Debian)

- Android Studio 2021.1 and above

- IntelliJ IDEA 2021.1 and above

- Kotlin 1.7.0 and above

- Android Gradle Plugin 7.0 and above

- Gradle 7.0 and above

- JVM 11 and above

## Project Requirements

The project needs to be created using `Android Studio` or `IntelliJ IDEA` and the type is an Android project and the `Kotlin` environment dependency has been integrated.

## Integration Dependencies

**(Optional)** Add dependencies to your project `build.gradle`.

> The following example

```groovy
repositories {
    google()
    mavenCentral()
    // MavenCentral has a 2-hour cache, if you cannot integrate the latest version, please add this address
    maven { url "https://s01.oss.sonatype.org/content/repositories/releases" }
}
```

Add dependencies to your app `build.gradle`.

> The following example

```groovy
dependencies {
    // Base dependencies
    implementation 'com.highcapable.yukireflection:api:<yuki-version>'
}
```

Please change **&lt;yuki-version&gt;** to the latest version from [here](../about/changelog).

::: danger

If your project is currently using [YukiHookAPI](https://github.com/fankes/YukiHookAPI), please do not repeatedly integrate **YukiReflection**, because **YukiHookAPI** already contains the functions and exists for related functional changes and repeated integration will cause functional conflicts and cause exceptions.

At this time, you should go to the [documentation](https://fankes.github.io/YukiHookAPI/en/) of **YukiHookAPI** to view the corresponding tutorial.

:::

Modify the `Kotlin` Jvm version to 11 and above in your app `build.gradle`.

> The following example

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