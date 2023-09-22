enableFeaturePreview("TYPESAFE_PROJECT_ACCESSORS")
pluginManagement {
    repositories {
        gradlePluginPortal()
        google()
        mavenCentral()
    }
}
plugins {
    id("com.highcapable.sweetdependency") version "1.0.1"
    id("com.highcapable.sweetproperty") version "1.0.2"
}
sweetProperty {
    global {
        sourcesCode {
            includeKeys("^project\\..*\$".toRegex())
            isEnableRestrictedAccess = true
        }
    }
    rootProject { all { isEnable = false } }
    project("samples:demo-android") { sourcesCode { isEnable = false } }
    project("samples:demo-jvm") { sourcesCode { isEnable = false } }
    project("yukireflection-core") { sourcesCode { className = rootProject.name } }
}
rootProject.name = "YukiReflection"
include(":samples:demo-android", ":samples:demo-jvm")
include(":yukireflection-core")