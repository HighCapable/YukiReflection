# API Basic Configs

> The basic configuration method of `YukiReflection` is introduced here.

`YukiReflection` can be used directly without some complex configuration, and does not conflict with `Java`'s native Reflection API.

You can configure some functions of `YukiReflection` before using it.

## Get the API Version

You can get the current API version of `YukiReflection` as follows.

> The following example

```kotlin
// Get the version name
val versionName = YukiReflection. API_VERSION_NAME
// Get the version code
val versionCode = YukiReflection. API_VERSION_CODE
```

You can judge the difference between different versions or display it in the about information by obtaining the version.

::: tip

For more functions, please refer to [YukiReflection](../api/public/com/highcapable/yukireflection/YukiReflection).

:::

## Configure API Related Functions

You can configure related functions through `YukiReflection.configs { ... }` method or `YukiReflection.Configs`.

### Custom Debug Log Tag

You can use the following methods to customize the tag of the debug log.

Logs inside the API will be printed using this tag.

> The following example

```kotlin
// Via the configs method
YukiReflection.configs {
    debugTag = "YourCustomTag"
}
// Set directly
YukiReflection.Configs.debugTag = "YourCustomTag"
```

### Enable or Disable Debug Mode

You can use the following methods to enable or disable Debug mode.

The Debug mode is disabled by default, and when enabled, detailed logs (such as the time spent on the reflective search function) will be printed to the console.

> The following example

```kotlin
// Via the configs method
YukiReflection.configs {
    isDebug = true
}
// Set directly
YukiReflection.Configs.isDebug = true
```

### Enable or Disable Debug Logs

You can use the following methods to enable or disable debug logs.

This function is enabled by default, and disable will stop `YukiReflection` output all logs.

> The following example

```kotlin
// Via the configs method
YukiReflection.configs {
    isAllowPrintingLogs = true
}
// Set directly
YukiReflection.Configs.isAllowPrintingLogs = true
```

### Enable or Disable Member Cache

You can enable or disable `Member` caching as follows.

To prevent system GC problems caused by excessive `Member` reuse, this feature is enabled by default.

> The following example

```kotlin
// Via the configs method
YukiReflection.configs {
    isEnableMemberCache = true
}
// Set directly
YukiReflection.Configs.isEnableMemberCache = true
```

### Use the configs Method to Configure

In order to configure multiple features at once, you can directly use the `YukiReflection.configs { ... }` method to configure.

> The following example

```kotlin
YukiReflection.configs {
    debugTag = "YourCustomTag"
    isDebug = true
    isAllowPrintingLogs = true
    isEnableMemberCache = true
}
```

::: tip

For more functions, please refer to [YukiReflection.configs](../api/public/com/highcapable/yukireflection/YukiReflection#configs-method) method, [YukiReflection.Configs](../api/public/com/highcapable/yukireflection/YukiReflection#configs-object).

:::