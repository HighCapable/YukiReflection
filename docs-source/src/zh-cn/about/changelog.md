# 更新日志

> 这里记录了 `YukiReflection` 的版本更新历史。

::: danger

我们只会对最新的 API 版本进行维护，若你正在使用过时的 API 版本则代表你自愿放弃一切维护的可能性。

:::

### 1.0.2 | 2023.04.25 &ensp;<Badge type="tip" text="最新" vertical="middle" />

- 修复一个严重问题，`Member` 缓存未生效且持续存储最终引发 APP 内存溢出 (OOM)，感谢 [Art-Chen](https://github.com/Art-Chen)
- 移除 `Member` 的直接缓存功能并作废 ~~`YukiReflection.Configs.isEnableMemberCache`~~，保留 `Class` 的缓存功能
- 对接查找功能到 `Sequence`，优化 `Member` 的查找速度与性能

### 1.0.1 | 2023.04.16 &ensp;<Badge type="warning" text="过旧" vertical="middle" />

- 将依赖库的类型由 **Java Library** (jar) 修改为 **Android Library** (aar)
- 移除了 Android `type` 中的错误 `Class` 对象声明

### 1.0.0 | 2023.01.26 &ensp;<Badge type="warning" text="过旧" vertical="middle" />

- 首个版本提交至 Maven