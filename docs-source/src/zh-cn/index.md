---
home: true
title: 首页
heroImage: /images/logo.png
actions:
  - text: 快速上手
    link: /zh-cn/guide/home
    type: primary
  - text: 更新日志
    link: /zh-cn/about/changelog
    type: secondary
features:
  - title: 轻量优雅
    details: 拥有一套强大、优雅、人性化、完全使用 Kotlin lambda 打造的 API，可以帮你快速实现字节码的查找以及反射功能。
  - title: 可跨平台
    details: 不仅仅是 Android 平台，它与 Java API 高度兼容，可使用在任何 Kotlin on JVM 的项目上，有 Java 的地方就可以使用。
  - title: 快速上手
    details: 简单易用，不需要繁琐的配置，不需要十足的开发经验，搭建环境集成依赖即可立即开始使用。
footer: Apache-2.0 License | Copyright (C) 2019 HighCapable
---

### 来吧！让反射也变得诗情画意

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