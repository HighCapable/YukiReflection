/*
 * YukiReflection - An efficient Reflection API for Java and Android built in Kotlin
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
 * This file is Created by fankes on 2022/2/3.
 * This file is Modified by fankes on 2023/1/21.
 */
@file:Suppress("unused", "MemberVisibilityCanBePrivate")

package com.highcapable.yukireflection.log

import android.util.Log
import com.highcapable.yukireflection.YukiReflection

/**
 * 向控制台打印日志 - D
 * @param msg 日志打印的内容
 */
internal fun yLoggerD(msg: String) {
    if (YukiReflection.Configs.isAllowPrintingLogs) Log.d(YukiReflection.Configs.debugTag, msg)
}

/**
 * 向控制台打印日志 - I
 * @param msg 日志打印的内容
 */
internal fun yLoggerI(msg: String) {
    if (YukiReflection.Configs.isAllowPrintingLogs) Log.i(YukiReflection.Configs.debugTag, msg)
}

/**
 * 向控制台打印日志 - W
 * @param msg 日志打印的内容
 */
internal fun yLoggerW(msg: String) {
    if (YukiReflection.Configs.isAllowPrintingLogs) Log.w(YukiReflection.Configs.debugTag, msg)
}

/**
 * 向控制台打印日志 - E
 * @param msg 日志打印的内容
 * @param e 可填入异常堆栈信息 - 将自动完整打印到控制台
 */
internal fun yLoggerE(msg: String, e: Throwable? = null) {
    if (YukiReflection.Configs.isAllowPrintingLogs) Log.e(YukiReflection.Configs.debugTag, msg, e)
}