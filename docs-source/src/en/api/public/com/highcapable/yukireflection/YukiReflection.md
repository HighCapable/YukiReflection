---
pageClass: code-page
---

::: warning

The English translation of this page has not been completed, you are welcome to contribute translations to us.

You can use the **Chrome Translation Plugin** to translate entire pages for reference.

:::

# YukiReflection <span class="symbol">- object</span>

```kotlin:no-line-numbers
object YukiReflection
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 这是 `YukiReflection` 的装载调用类。

## TAG <span class="symbol">- field</span>

```kotlin:no-line-numbers
const val TAG: String
```

**Change Records**

`v1.0.3` `added`

**Function Illustrate**

> 获取当前 `YukiReflection` 的名称 (标签)。

## VERSION <span class="symbol">- field</span>

```kotlin:no-line-numbers
const val VERSION: String
```

**Change Records**

`v1.0.3` `added`

**Function Illustrate**

> 获取当前 `YukiReflection` 的版本。

<h2 class="deprecated">API_VERSION_NAME - field</h2>

**Change Records**

`v1.0.0` `first`

`v1.0.3` `deprecated`

不再区分版本名称和版本号，请迁移到 `VERSION`

<h2 class="deprecated">API_VERSION_CODE - field</h2>

**Change Records**

`v1.0.0` `first`

`v1.0.3` `deprecated`

不再区分版本名称和版本号，请迁移到 `VERSION`

## Configs <span class="symbol">- object</span>

```kotlin:no-line-numbers
object Configs
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 对 API 相关功能的配置类。

### debugTag <span class="symbol">- field</span>

```kotlin:no-line-numbers
var debugTag: String
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 这是一个调试日志的全局标识。

默认文案为 `YukiReflection`。

你可以修改为你自己的文案。

### isDebug <span class="symbol">- field</span>

```kotlin:no-line-numbers
var isDebug: Boolean
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 是否启用 Debug 模式。

默认不启用，启用后将交由日志输出管理器打印详细日志 (例如反射查找功能的耗时) 到控制台。

请过滤 `debugTag` 即可找到每条日志。

### isEnableLogs <span class="symbol">- field</span>

```kotlin:no-line-numbers
var isEnableLogs: Boolean
```

**Change Records**

`v1.0.3` `added`

**Function Illustrate**

> 是否启用调试日志的输出功能。

::: warning

关闭后将会停用 **YukiReflection** 对全部日志的输出，同时 **isDebug** 将不再有效。

:::

<h3 class="deprecated">isAllowPrintingLogs - field</h3>

**Change Records**

`v1.0.0` `first`

`v1.0.3` `deprecated`

请迁移到 `isEnableLogs`

<h3 class="deprecated">isEnableMemberCache - field</h3>

**Change Records**

`v1.0.0` `first`

`v1.0.2` `deprecated`

`Member` 的直接缓存功能已被移除，因为其存在内存溢出 (OOM) 问题

## configs <span class="symbol">- method</span>

```kotlin:no-line-numbers
inline fun configs(initiate: Configs.() -> Unit)
```

**Change Records**

`v1.0.0` `first`

**Function Illustrate**

> 对 `Configs` 类实现了一个 **lambda** 方法体。

你可以轻松地调用它进行配置。