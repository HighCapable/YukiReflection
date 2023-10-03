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

package com.highcapable.yukireflection.log

import android.util.Log
import com.highcapable.yukireflection.YukiReflection
import com.highcapable.yukireflection.factory.hasClass
import com.highcapable.yukireflection.utils.factory.dumpToString

/**
 * 全局 Log 管理类
 */
object YLog {

    /**
     * 配置 [YLog]
     */
    object Configs {

        /**
         * 这是一个调试日志的全局标识
         *
         * 默认文案为 [YukiReflection.TAG]
         *
         * 你可以修改为你自己的文案
         */
        var tag = YukiReflection.TAG

        /**
         * 是否启用调试日志的输出功能 - 默认启用
         *
         * - 关闭后将会停用 [YukiReflection] 对全部日志的输出
         *
         * 当 [isEnable] 关闭后 [YukiReflection.Configs.isDebug] 也将同时关闭
         */
        var isEnable = true

        /** 结束方法体 */
        internal fun build() = Unit
    }

    /**
     * 打印 Debug 级别 Log
     * @param msg 消息内容
     * @param e 异常堆栈 - 默认空
     */
    internal fun debug(msg: String, e: Throwable? = null) {
        if (Configs.isEnable) log(Type.DEBUG, msg, e)
    }

    /**
     * 打印 Info 级别 Log
     * @param msg 消息内容
     * @param e 异常堆栈 - 默认空
     */
    internal fun info(msg: String, e: Throwable? = null) {
        if (Configs.isEnable) log(Type.INFO, msg, e)
    }

    /**
     * 打印 Warn 级别 Log
     * @param msg 消息内容
     * @param e 异常堆栈 - 默认空
     */
    internal fun warn(msg: String, e: Throwable? = null) {
        if (Configs.isEnable) log(Type.WARN, msg, e)
    }

    /**
     * 打印 Error 级别 Log
     * @param msg 消息内容
     * @param e 异常堆栈 - 默认空
     */
    internal fun error(msg: String, e: Throwable? = null) {
        if (Configs.isEnable) log(Type.ERROR, msg, e)
    }

    /**
     * 打印 Log
     * @param type 类型
     * @param msg 消息内容
     * @param e 异常堆栈 - 默认空
     */
    private fun log(type: Type, msg: String, e: Throwable? = null) {
        val isAndroid = "android.util.Log".hasClass()

        /**
         * 打印 Log
         * @param msg 消息内容
         */
        fun innerLog(msg: String) {
            val mixedContent = "[${Configs.tag}][${type.alias}] $msg"
            when {
                isAndroid -> when (type) {
                    Type.DEBUG -> Log.d(Configs.tag, msg, e)
                    Type.INFO -> Log.i(Configs.tag, msg, e)
                    Type.WARN -> Log.w(Configs.tag, msg, e)
                    Type.ERROR -> Log.e(Configs.tag, msg, e)
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