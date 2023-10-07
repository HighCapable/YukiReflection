# Changelog

> The version update history of `YukiReflection` is recorded here.

::: danger

We will only maintain the latest API version, if you are using an outdate API version, you voluntarily renounce any possibility of maintenance.

:::

::: warning

To avoid translation time consumption, Changelog will use **Google Translation** from **Chinese** to **English**, please refer to the original text for actual reference.

Time zone of version release date: **UTC+8**

:::

### 1.0.3 | 2023.10.07 &ensp;<Badge type="tip" text="latest" vertical="middle" />

- Change the type of dependency library from **Android Library** (aar) back to **Java Library** (jar)
- Adapt and support the native Java platform (some functions are only available on the Android platform)
- Fixed [fix get interfaces of class](https://github.com/HighCapable/YukiHookAPI/pull/38) issue and merged into `YukiReflection`
- Deprecated ~~`isAllowPrintingLogs`~~, please start using the `debugLog` method
- Added `YukiReflection.TAG`
- Obsolete ~~`YukiReflection.API_VERSION_NAME`~~, ~~`YukiReflection.API_VERSION_CODE`~~, merged into `YukiReflection.VERSION`
- Refactored `remendy` functionality in find methods, which now prints exceptions in steps
- The multi-method find result type is changed from `HashSet` to `MutableList`
- Added `method()`, `constructor()`, `field()` to directly obtain all object functions in the class
- `constructor()` no longer behaves like `constructor { emptyParam() }`
- Added `lazyClass` and `lazyClassOrNull` methods to lazily load `Class`

### 1.0.2 | 2023.04.25 &ensp;<Badge type="warning" text="stale" vertical="middle" />

- Fixed a critical issue where the `Member` cache did not take effect and persistent storage eventually caused app out of memory (OOM), thanks to [Art-Chen](https://github.com/Art-Chen)
- Remove the direct cache function of `Member` and deprecated ~~`YukiReflection.Configs.isEnableMemberCache`~~, keep the cache function of `Class`
- Modified finder to `Sequence`, optimize the finding speed and performance of `Member`

### 1.0.1 | 2023.04.16 &ensp;<Badge type="warning" text="stale" vertical="middle" />

- Change the type of dependency library from **Java Library** (jar) to **Android Library** (aar)
- Removed wrong `Class` object declaration in Android `type`

### 1.0.0 | 2023.01.26 &ensp;<Badge type="warning" text="stale" vertical="middle" />

- The first version is submitted to Maven