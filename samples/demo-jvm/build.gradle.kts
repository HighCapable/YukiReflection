plugins {
    autowire(libs.plugins.kotlin.jvm)
    autowire(libs.plugins.jetbrains.compose)
    autowire(libs.plugins.compose.compiler)
}

group = property.project.samples.demo.jvm.groupName

java {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
}

kotlin {
    jvmToolchain(17)
}

compose.desktop {
    application {
        mainClass = "$group.MainKt"
    }
}

dependencies {
    implementation(projects.yukireflectionCore)
    implementation(compose.desktop.currentOs)
    implementation(compose.material3)
}