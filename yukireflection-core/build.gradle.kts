plugins {
    autowire(libs.plugins.kotlin.jvm)
    autowire(libs.plugins.maven.publish)
}

group = property.project.groupName
version = property.project.yukireflection.core.version

java {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
}

kotlin {
    jvmToolchain(17)
    compilerOptions {
        freeCompilerArgs = listOf(
            "-Xno-param-assertions",
            "-Xno-call-assertions",
            "-Xno-receiver-assertions"
        )
    }
}

dependencies {
    compileOnly(autowire("libs/android-34.jar"))
}

mavenPublishing {
    coordinates(
        groupId = group.toString(),
        artifactId = property.project.yukireflection.core.moduleName,
        version = version.toString()
    )
}