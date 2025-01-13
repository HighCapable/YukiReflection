/*
 * YukiReflection - An efficient Reflection API for Java and Android built in Kotlin.
 * Copyright (C) 2019 HighCapable
 * https://github.com/HighCapable/YukiReflection
 *
 * Apache License Version 2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * This file is created by fankes on 2023/9/22.
 */
@file:Suppress("UsePropertyAccessSyntax")

package com.highcapable.yukireflection.demo_jvm

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application
import androidx.compose.ui.window.rememberWindowState
import com.highcapable.yukireflection.YukiReflection
import com.highcapable.yukireflection.demo_jvm.test.Main
import com.highcapable.yukireflection.factory.buildOf
import com.highcapable.yukireflection.factory.classOf
import com.highcapable.yukireflection.factory.current
import com.highcapable.yukireflection.factory.field
import com.highcapable.yukireflection.factory.method
import com.highcapable.yukireflection.type.java.StringClass

@Composable
fun MainLayout() {
    val currentVersion = "${YukiReflection.TAG} Version: ${YukiReflection.VERSION}"
    val operationState = remember { mutableStateOf("Waiting for your operation") }
    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "Using functions below to test",
            fontSize = 18.sp,
            modifier = Modifier.padding(bottom = 15.dp)
        )
        Text(
            text = operationState.value,
            fontSize = 18.sp,
            modifier = Modifier.padding(bottom = 35.dp)
        )
        Button(
            onClick = { operationState.value = Main("I am directly call of new object").getContent() },
            modifier = Modifier.padding(bottom = 15.dp)
        ) {
            Text(text = "Create an Object and Call Directly")
        }
        Button(
            onClick = {
                operationState.value =
                    classOf<Main>().buildOf("I am reflection call of new object") { param(StringClass) }
                        ?.current()
                        ?.method {
                            name = "getContent"
                            emptyParam()
                        }?.string() ?: ""
            },
            modifier = Modifier.padding(bottom = 15.dp)
        ) {
            Text(text = "Create an Object and Call Reflection")
        }
        Button(
            onClick = { operationState.value = Main.getStaticContent() },
            modifier = Modifier.padding(bottom = 15.dp)
        ) {
            Text(text = "Get Static and Call Directly")
        }
        Button(
            onClick = {
                operationState.value = classOf<Main>().method {
                    name = "getStaticContent"
                    modifiers { isStatic }
                }.get().string()
            },
            modifier = Modifier.padding(bottom = 15.dp)
        ) {
            Text(text = "Get Static and Call Reflection")
        }
        Button(
            onClick = {
                classOf<Main>().field {
                    name = "staticContent"
                    modifiers { isStatic }
                }.get().set("I am static! Modified by reflection")
                operationState.value = "Field is modified success"
            }
        ) {
            Text(text = "Modified Static Field Using Reflection")
        }
        Text(
            text = currentVersion,
            fontSize = 15.sp,
            modifier = Modifier.padding(top = 35.dp).alpha(0.55f)
        )
    }
}

fun main() = application {
    YukiReflection.configs { isDebug = true }
    Window(
        onCloseRequest = ::exitApplication,
        title = YukiReflection.TAG,
        resizable = false,
        state = rememberWindowState(width = 450.dp, height = 600.dp)
    ) { MaterialTheme(colorScheme = MaterialTheme.colorScheme.copy(primary = Color(0xFF31A4FF.toInt()))) { MainLayout() } }
}