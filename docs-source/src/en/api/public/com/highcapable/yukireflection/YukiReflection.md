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

`v1.0.0` `added`

**Function Illustrate**

> 这是 `YukiReflection` 的装载调用类。

## API_VERSION_NAME <span class="symbol">- field</span>

```kotlin:no-line-numbers
const val API_VERSION_NAME: String
```

**Change Records**

`v1.0.0` `added`

**Function Illustrate**

> 获取当前 `YukiReflection` 的版本。

## API_VERSION_CODE <span class="symbol">- field</span>

```kotlin:no-line-numbers
const val API_VERSION_CODE: Int
```

**Change Records**

`v1.0.0` `added`

**Function Illustrate**

> 获取当前 `YukiReflection` 的版本号。

## Configs <span class="symbol">- object</span>

```kotlin:no-line-numbers
object Configs
```

**Change Records**

`v1.0.0` `added`

**Function Illustrate**

> 对 API 相关功能的配置类。

### debugTag <span class="symbol">- field</span>

```kotlin:no-line-numbers
var debugTag: String
```

**Change Records**

`v1.0.0` `added`

**Function Illustrate**

> 这是一个调试日志的全局标识。

默认文案为 `YukiReflection`。

你可以修改为你自己的文案。

### isDebug <span class="symbol">- field</span>

```kotlin:no-line-numbers
var isDebug: Boolean
```

**Change Records**

`v1.0.0` `added`

**Function Illustrate**

> 是否启用 Debug 模式。

默认不启用，启用后将交由日志输出管理器打印详细日志 (例如反射查找功能的耗时) 到控制台。

请过滤 `debugTag` 即可找到每条日志。

### isAllowPrintingLogs <span class="symbol">- field</span>

```kotlin:no-line-numbers
var isAllowPrintingLogs: Boolean
```

**Change Records**

`v1.0.0` `added`

**Function Illustrate**

> 是否启用调试日志的输出功能。

::: warning

关闭后将会停用 **YukiReflection** 对全部日志的输出。

:::

### isEnableMemberCache <span class="symbol">- field</span>

```kotlin:no-line-numbers
var isEnableMemberCache: Boolean
```

**Change Records**

`v1.0.0` `added`

**Function Illustrate**

> 是否启用 `Member` 缓存功能。

为防止 `Member` 复用过高造成的系统 GC 问题，此功能默认启用。

启用后会缓存已经找到的 `Method`、`Constructor`、`Field`。

缓存的 `Member` 都将处于 `ReflectsCacheStore` 的全局静态实例中。

推荐使用 `MethodFinder`、`ConstructorFinder`、`FieldFinder` 来获取 `Member`。

除非缓存的 `Member` 发生了混淆的问题，例如使用 R8 混淆后的 APP 的目标 `Member`，否则建议启用。

## configs <span class="symbol">- method</span>

```kotlin:no-line-numbers
inline fun configs(initiate: Configs.() -> Unit)
```

**Change Records**

`v1.0.0` `added`

**Function Illustrate**

> 对 `Configs` 类实现了一个 `lambda` 方法体。

你可以轻松地调用它进行配置。