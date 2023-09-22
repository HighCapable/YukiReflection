plugins {
    autowire(libs.plugins.kotlin.jvm)
    autowire(libs.plugins.maven.publish)
}

group = property.project.groupName

java {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
}

kotlin {
    sourceSets {
        all {
            languageSettings {
                optIn(property.project.yukireflection.core.kotlin.optIn.yukiPrivateApi)
            }
        }
    }
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile>().configureEach {
    kotlinOptions {
        jvmTarget = "17"
        freeCompilerArgs = listOf(
            "-opt-in=${property.project.yukireflection.core.kotlin.optIn.yukiPrivateApi}",
            "-Xno-param-assertions",
            "-Xno-call-assertions",
            "-Xno-receiver-assertions"
        )
    }
}

dependencies {
    compileOnly(files("libs/android-34.jar"))
}

mavenPublishing {
    coordinates(property.project.groupName, property.project.yukireflection.core.moduleName, property.project.yukireflection.core.version)
    pom {
        name = property.project.name
        description = property.project.description
        url = property.project.url
        licenses {
            license {
                name = property.project.licence.name
                url = property.project.licence.url
                distribution = property.project.licence.url
            }
        }
        developers {
            developer {
                id = property.project.developer.id
                name = property.project.developer.name
                email = property.project.developer.email
            }
        }
        scm {
            url = property.maven.publish.scm.url
            connection = property.maven.publish.scm.connection
            developerConnection = property.maven.publish.scm.developerConnection
        }
    }
    publishToMavenCentral(com.vanniktech.maven.publish.SonatypeHost.S01)
    signAllPublications()
}