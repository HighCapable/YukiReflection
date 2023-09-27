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
@file:Suppress("unused")

package com.highcapable.yukireflection.utils.debug

import android.util.Log
import com.highcapable.yukireflection.YukiReflection
import com.highcapable.yukireflection.factory.hasClass
import com.highcapable.yukireflection.utils.factory.dumpToString

/**
 * 全局 Log 管理类
 */
internal object YukiLog {

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
        if (isEnable) log(Type.DEBUG, msg, e)
    }

    /**
     * 打印 Info 级别 Log
     * @param msg 消息内容
     * @param e 异常堆栈 - 默认空
     */
    internal fun info(msg: String, e: Throwable? = null) {
        if (isEnable) log(Type.INFO, msg, e)
    }

    /**
     * 打印 Warn 级别 Log
     * @param msg 消息内容
     * @param e 异常堆栈 - 默认空
     */
    internal fun warn(msg: String, e: Throwable? = null) {
        if (isEnable) log(Type.WARN, msg, e)
    }

    /**
     * 打印 Error 级别 Log
     * @param msg 消息内容
     * @param e 异常堆栈 - 默认空
     */
    internal fun error(msg: String, e: Throwable? = null) {
        if (isEnable) log(Type.ERROR, msg, e)
    }

    /**
     * 打印 Log
     * @param type 类型
     * @param msg 消息内容
     * @param e 异常堆栈 - 默认空
     */
    private fun log(type: Type, msg: String, e: Throwable? = null) {
        val isAndroid = "android.util.Log".hasClass()
        val mixedContent = "[$tag][${type.alias}] $msg"

        /**
         * 打印 Log
         * @param msg 消息内容
         */
        fun innerLog(msg: String) {
            when {
                isAndroid -> when (type) {
                    Type.DEBUG -> Log.d(tag, msg, e)
                    Type.INFO -> Log.i(tag, msg, e)
                    Type.WARN -> Log.w(tag, msg, e)
                    Type.ERROR -> Log.e(tag, msg, e)
                }
                type.color.isBlank() -> println(mixedContent)
                else -> println("\u001B[${type.color}m$mixedContent\u001B[0m")
            }
        }; innerLog(msg)
        if (isAndroid.not()) e?.also { innerLog(it.dumpToString()) }
    }

    /**
     * Log 类型定义类
     * @param alias 类型别名
     * @param color 颜色代码 - 默认无颜色
     */
    private enum class Type(val alias: String, val color: String = "") {
        DEBUG("D"), INFO("I", "38;5;10"), WARN("W", "33"), ERROR("E", "31")
    }
}