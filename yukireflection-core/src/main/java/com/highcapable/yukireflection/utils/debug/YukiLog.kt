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
 * This file is created by fankes on 2023/9/23.
 */
package com.highcapable.yukireflection.utils.debug

import android.util.Log
import com.highcapable.yukireflection.YukiReflection
import com.highcapable.yukireflection.factory.hasClass
import com.highcapable.yukireflection.utils.factory.toStackTrace

/**
 * 全局 Log 管理类
 */
internal object YukiLog {

    /**
     * 是否为 Android 模式
     * @return [Boolean]
     */
    private val isAndroidMode get() = "android.util.Log".hasClass()

    /**
     * 是否启用
     * @return [Boolean]
     */
    private val isEnable get() = YukiReflection.Configs.isEnableLogs

    /**
     * Log 标签
     * @return [String]
     */
    private val tag get() = YukiReflection.Configs.debugTag

    /**
     * 打印 Debug 级别 Log
     * @param msg 消息内容
     * @param e 异常堆栈 - 默认空
     */
    internal fun debug(msg: String, e: Throwable? = null) {
        if (isEnable.not()) return
        if (isAndroidMode) Log.d(tag, msg, e)
        else log(msg = "[$tag] $msg", e)
    }

    /**
     * 打印 Info 级别 Log
     * @param msg 消息内容
     * @param e 异常堆栈 - 默认空
     */
    internal fun info(msg: String, e: Throwable? = null) {
        if (isEnable.not()) return
        if (isAndroidMode) Log.i(tag, msg, e)
        else log(msg = "[$tag] $msg", e, color = "38;5;10")
    }

    /**
     * 打印 Warn 级别 Log
     * @param msg 消息内容
     * @param e 异常堆栈 - 默认空
     */
    internal fun warn(msg: String, e: Throwable? = null) {
        if (isEnable.not()) return
        if (isAndroidMode) Log.w(tag, msg, e)
        else log(msg = "[$tag] $msg", e, color = "33")
    }

    /**
     * 打印 Error 级别 Log
     * @param msg 消息内容
     * @param e 异常堆栈 - 默认空
     */
    internal fun error(msg: String, e: Throwable? = null) {
        if (isEnable.not()) return
        if (isAndroidMode) Log.e(tag, msg, e)
        else log(msg = "[$tag] $msg", e, color = "31")
    }

    /**
     * 打印 Log
     * @param msg 消息内容
     * @param e 异常堆栈 - 默认空
     * @param color 颜色代码 - 默认无颜色
     */
    private fun log(msg: String, e: Throwable? = null, color: String = "") {
        /**
         * 打印 Log
         * @param msg 消息内容
         */
        fun innerLog(msg: String) = if (color.isBlank()) println(msg) else println("\u001B[${color}m$msg\u001B[0m")
        innerLog(msg)
        e?.also { innerLog(it.toStackTrace()) }
    }
}