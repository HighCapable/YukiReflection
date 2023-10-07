# 更新日志

> 这里记录了 `YukiReflection` 的版本更新历史。

::: danger

我们只会对最新的 API 版本进行维护，若你正在使用过时的 API 版本则代表你自愿放弃一切维护的可能性。

:::

### 1.0.3 | 2023.10.07 &ensp;<Badge type="tip" text="最新" vertical="middle" />

- 许可协议由 `MIT` 变更为 `Apache-2.0`，在此之后的版本将由此许可协议进行分发，您在使用此版本后应变更相关许可协议
- 将依赖库的类型由 **Android Library** (aar) 修改回 **Java Library** (jar)
- 适配并支持原生 Java 平台 (部分功能仅限 Android 平台)
- 修复 [fix get interfaces of class](https://github.com/HighCapable/YukiHookAPI/pull/38) 问题并合并到 `YukiReflection`
- 作废了 ~~`isAllowPrintingLogs`~~，请开始使用 `debugLog` 方法
- 新增 `YukiReflection.TAG`
- 作废了 ~~`YukiReflection.API_VERSION_NAME`~~、~~`YukiReflection.API_VERSION_CODE`~~，统一合并到 `YukiReflection.VERSION`
- 重构方法查找中的 `remendy` 功能，现在可以对其进行分步打印异常
- 多重方法查找结果类型由 `HashSet` 改为 `MutableList`
- 新增使用 `method()`、`constructor()`、`field()` 可直接获取到类中的所有对象功能
- `constructor()` 的行为不再是 `constructor { emptyParam() }`
- 新增 `lazyClass`、`lazyClassOrNull` 方法，可延迟装载 `Class`

### 1.0.2 | 2023.04.25 &ensp;<Badge type="warning" text="过旧" vertical="middle" />

- 修复一个严重问题，`Member` 缓存未生效且持续存储最终引发 APP 内存溢出 (OOM)，感谢 [Art-Chen](https://github.com/Art-Chen)
- 移除 `Member` 的直接缓存功能并作废 ~~`YukiReflection.Configs.isEnableMemberCache`~~，保留 `Class` 的缓存功能
- 对接查找功能到 `Sequence`，优化 `Member` 的查找速度与性能

### 1.0.1 | 2023.04.16 &ensp;<Badge type="warning" text="过旧" vertical="middle" />

- 将依赖库的类型由 **Java Library** (jar) 修改为 **Android Library** (aar)
- 移除了 Android `type` 中的错误 `Class` 对象声明

### 1.0.0 | 2023.01.26 &ensp;<Badge type="warning" text="过旧" vertical="middle" />

- 首个版本提交至 Maven