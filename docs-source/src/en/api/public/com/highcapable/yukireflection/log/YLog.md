---
pageClass: code-page
---

::: warning

The English translation of this page has not been completed, you are welcome to contribute translations to us.

You can use the **Chrome Translation Plugin** to translate entire pages for reference.

:::

# YLog <span class="symbol">- object</span>

```kotlin:no-line-numbers
object YLog
```

**Change Records**

`v1.0.3` `added`

**Function Illustrate**

> 全局 Log 管理类。

## Configs <span class="symbol">- object</span>

```kotlin:no-line-numbers
object Configs
```

**Change Records**

`v1.0.3` `added`

**Function Illustrate**

> 配置 `YLog`。

### tag <span class="symbol">- field</span>

```kotlin:no-line-numbers
var tag: String
```

**Change Records**

`v1.0.3` `added`

**Function Illustrate**

> 这是一个调试日志的全局标识。

默认文案为 `YukiReflection`。

你可以修改为你自己的文案。

### isEnable <span class="symbol">- field</span>

```kotlin:no-line-numbers
var isEnable: Boolean
```

**Change Records**

`v1.0.3` `added`

**Function Illustrate**

> 是否启用调试日志的输出功能。

关闭后将会停用 `YukiReflection` 对全部日志的输出。

当 `isEnable` 关闭后 `YukiReflection.Configs.isDebug` 也将同时关闭。