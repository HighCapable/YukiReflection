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

## TAG <span class="symbol">- field</span>

```kotlin:no-line-numbers
const val TAG: String
```

**变更记录**

`v1.0.3` `新增`

**功能描述**

> 获取当前 `YukiReflection` 的名称 (标签)。

## VERSION <span class="symbol">- field</span>

```kotlin:no-line-numbers
const val VERSION: String
```

**变更记录**

`v1.0.3` `新增`

**功能描述**

> 获取当前 `YukiReflection` 的版本。

<h2 class="deprecated">API_VERSION_NAME - field</h2>

**变更记录**

`v1.0.0` `添加`

`v1.0.3` `作废`

不再区分版本名称和版本号，请迁移到 `VERSION`

<h2 class="deprecated">API_VERSION_CODE - field</h2>

**变更记录**

`v1.0.0` `添加`

`v1.0.3` `作废`

不再区分版本名称和版本号，请迁移到 `VERSION`

## Configs <span class="symbol">- object</span>

```kotlin:no-line-numbers
object Configs
```

**变更记录**

`v1.0.0` `添加`

**功能描述**

> 对 API 相关功能的配置类。

### debugLog <span class="symbol">- method</span>

```kotlin:no-line-numbers
inline fun debugLog(initiate: YLog.Configs.() -> Unit)
```

**变更记录**

`v1.0.3` `新增`

**功能描述**

> 配置 `YLog.Configs` 相关参数。

<h3 class="deprecated">debugTag - field</h3>

**变更记录**

`v1.0.0` `添加`

`v1.0.3` `作废`

请迁移到 `debugLog`

### isDebug <span class="symbol">- field</span>

```kotlin:no-line-numbers
var isDebug: Boolean
```

**变更记录**

`v1.0.0` `添加`

**功能描述**

> 是否启用 Debug 模式。

默认不启用，启用后将交由日志输出管理器打印详细日志 (例如反射查找功能的耗时) 到控制台。

<h3 class="deprecated">isAllowPrintingLogs - field</h3>

**变更记录**

`v1.0.0` `添加`

`v1.0.3` `作废`

请迁移到 `debugLog`

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