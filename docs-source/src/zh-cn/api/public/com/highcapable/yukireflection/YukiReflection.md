---
pageClass: code-page
---

# YukiReflection <span class="symbol">- object</span>

```kotlin:no-line-numbers
object YukiReflection
```

**变更记录**

`v1.0.0` `添加`

**功能描述**

> 这是 `YukiReflection` 的装载调用类。

## API_VERSION_NAME <span class="symbol">- field</span>

```kotlin:no-line-numbers
const val API_VERSION_NAME: String
```

**变更记录**

`v1.0.0` `添加`

**功能描述**

> 获取当前 `YukiReflection` 的版本。

## API_VERSION_CODE <span class="symbol">- field</span>

```kotlin:no-line-numbers
const val API_VERSION_CODE: Int
```

**变更记录**

`v1.0.0` `添加`

**功能描述**

> 获取当前 `YukiReflection` 的版本号。

## Configs <span class="symbol">- object</span>

```kotlin:no-line-numbers
object Configs
```

**变更记录**

`v1.0.0` `添加`

**功能描述**

> 对 API 相关功能的配置类。

### debugTag <span class="symbol">- field</span>

```kotlin:no-line-numbers
var debugTag: String
```

**变更记录**

`v1.0.0` `添加`

**功能描述**

> 这是一个调试日志的全局标识。

默认文案为 `YukiReflection`。

你可以修改为你自己的文案。

### isDebug <span class="symbol">- field</span>

```kotlin:no-line-numbers
var isDebug: Boolean
```

**变更记录**

`v1.0.0` `添加`

**功能描述**

> 是否启用 Debug 模式。

默认不启用，启用后将交由日志输出管理器打印详细日志 (例如反射查找功能的耗时) 到控制台。

请过滤 `debugTag` 即可找到每条日志。

### isAllowPrintingLogs <span class="symbol">- field</span>

```kotlin:no-line-numbers
var isAllowPrintingLogs: Boolean
```

**变更记录**

`v1.0.0` `添加`

**功能描述**

> 是否启用调试日志的输出功能。

::: warning

关闭后将会停用 **YukiReflection** 对全部日志的输出。

:::

<h3 class="deprecated">isEnableMemberCache - field</h3>

**变更记录**

`v1.0.0` `添加`

`v1.0.2` `作废`

`Member` 的直接缓存功能已被移除，因为其存在内存溢出 (OOM) 问题

## configs <span class="symbol">- method</span>

```kotlin:no-line-numbers
inline fun configs(initiate: Configs.() -> Unit)
```

**变更记录**

`v1.0.0` `添加`

**功能描述**

> 对 `Configs` 类实现了一个 **lambda** 方法体。

你可以轻松地调用它进行配置。