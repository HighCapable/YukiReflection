---
home: true
title: Home
heroImage: /images/logo.png
actions:
  - text: Get Started
    link: /en/guide/home
    type: primary
  - text: Changelog
    link: /en/about/changelog
    type: secondary
features:
  - title: Light and Elegant
    details: A powerful, elegant, beautiful API built with Kotlin lambda can help you quickly implement bytecode finding and reflection functions.
  - title: Cross-Platform Available
    details: Not only the Android platform, it is highly compatible with the Java API and can be used on any Kotlin on JVM project, wherever Java is available.
  - title: Quickly Started
    details: Simple and easy to use it now! Do not need complex configuration and full development experience, Integrate dependencies and enjoy yourself.
footer: Apache-2.0 License | Copyright (C) 2019-2023 HighCapable
---

### Bring it on! Let reflection become poetic and picturesque

```java
public class World {

    private void sayHello(String content) {
        System.out.println("Hello " + content + "!");
    }
}
```

```kotlin
val newWorld = World()
classOf<World>().method {
    name = "sayHello"
    param(StringClass)
    type = UnitType
}.get(newWorld).call("YukiReflection")
```