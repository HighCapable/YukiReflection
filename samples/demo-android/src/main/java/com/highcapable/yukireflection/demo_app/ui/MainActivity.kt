/*
 * YukiReflection - An efficient Reflection API for Java and Android built in Kotlin.
 * Copyright (C) 2019-2023 HighCapable
 * https://github.com/fankes/YukiReflection
 *
 * MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * This file is created by fankes on 2023/1/21.
 */
@file:Suppress("SetTextI18n", "UsePropertyAccessSyntax")

package com.highcapable.yukireflection.demo_app.ui

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.highcapable.yukireflection.YukiReflection
import com.highcapable.yukireflection.demo_app.BuildConfig
import com.highcapable.yukireflection.demo_app.databinding.ActivityMainBinding
import com.highcapable.yukireflection.demo_app.test.Main
import com.highcapable.yukireflection.factory.buildOf
import com.highcapable.yukireflection.factory.classOf
import com.highcapable.yukireflection.factory.current
import com.highcapable.yukireflection.factory.field
import com.highcapable.yukireflection.factory.method
import com.highcapable.yukireflection.type.java.StringClass

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        YukiReflection.configs { isDebug = BuildConfig.DEBUG }
        ActivityMainBinding.inflate(layoutInflater).apply {
            setContentView(root)
            yukiReflectionVersionText.text = "${YukiReflection.TAG} Version: ${YukiReflection.VERSION}"
            testObjectDirectlyButton.setOnClickListener {
                tipText.text = Main("I am directly call of new object").getContent()
            }
            testObjectReflectionButton.setOnClickListener {
                tipText.text =
                    classOf<Main>().buildOf("I am reflection call of new object") { param(StringClass) }
                        ?.current()
                        ?.method {
                            name = "getContent"
                            emptyParam()
                        }?.string() ?: ""
            }
            testStaticDirectlyButton.setOnClickListener {
                tipText.text = Main.getStaticContent()
            }
            testStaticReflectionButton.setOnClickListener {
                tipText.text = classOf<Main>().method {
                    name = "getStaticContent"
                    modifiers { isStatic }
                }.get().string()
            }
            testModifyStaticReflectionButton.setOnClickListener {
                classOf<Main>().field {
                    name = "staticContent"
                    modifiers { isStatic }
                }.get().set("I am static! Modified by reflection")
                tipText.text = "Field is modified success"
            }
        }
    }
}