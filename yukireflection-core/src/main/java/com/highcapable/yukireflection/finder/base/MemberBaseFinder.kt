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
 * This file is created by fankes on 2022/2/18.
 * This file is modified by fankes on 2023/1/21.
 */
@file:Suppress("MemberVisibilityCanBePrivate")

package com.highcapable.yukireflection.finder.base

import com.highcapable.yukireflection.YukiReflection
import com.highcapable.yukireflection.log.YLog
import com.highcapable.yukireflection.utils.factory.await
import java.lang.reflect.Constructor
import java.lang.reflect.Field
import java.lang.reflect.Member
import java.lang.reflect.Method

/**
 * 这是 [Member] 查找类功能的基本类实现
 * @param tag 当前查找类的标识
 * @param classSet 当前需要查找的 [Class] 实例
 */
abstract class MemberBaseFinder internal constructor(private val tag: String, internal open val classSet: Class<*>? = null) : BaseFinder() {

    internal companion object {

        /** [classSet] 为 null 的提示 */
        internal const val CLASSSET_IS_NULL = "classSet is null"
    }

    /** 是否使用了重查找功能 */
    internal var isUsingRemedyPlan = false

    /** 是否开启忽略错误警告功能 */
    internal var isIgnoreErrorLogs = false

    /** 当前找到的 [Member] 数组 */
    internal var memberInstances = mutableListOf<Member>()

    /**
     * 将 [MutableList]<[Member]> 转换为 [MutableList]<[Field]>
     * @return [MutableList]<[Field]>
     */
    internal fun MutableList<Member>.fields() =
        mutableListOf<Field>().also { takeIf { e -> e.isNotEmpty() }?.forEach { e -> (e as? Field?)?.also { f -> it.add(f) } } }

    /**
     * 将 [MutableList]<[Member]> 转换为 [MutableList]<[Method]>
     * @return [MutableList]<[Method]>
     */
    internal fun MutableList<Member>.methods() =
        mutableListOf<Method>().also { takeIf { e -> e.isNotEmpty() }?.forEach { e -> (e as? Method?)?.also { m -> it.add(m) } } }

    /**
     * 将 [MutableList]<[Member]> 转换为 [MutableList]<[Constructor]>
     * @return [MutableList]<[Constructor]>
     */
    internal fun MutableList<Member>.constructors() =
        mutableListOf<Constructor<*>>().also { takeIf { e -> e.isNotEmpty() }?.forEach { e -> (e as? Constructor<*>?)?.also { c -> it.add(c) } } }

    /**
     * 将目标类型转换为可识别的兼容类型
     * @return [Class] or null
     */
    internal fun Any?.compat() = compat(tag, classSet?.classLoader)

    /**
     * 在开启 [YukiReflection.Configs.isDebug] 的情况下输出调试信息
     * @param msg 消息内容
     */
    internal fun debugMsg(msg: String) {
        if (YukiReflection.Configs.isDebug) YLog.debug(msg)
    }

    /**
     * 发生错误时输出日志
     * @param msg 消息内容
     * @param e 异常堆栈 - 默认空
     * @param e 异常堆栈数组 - 默认空
     * @param isAlwaysMode 忽略条件每次都输出日志
     */
    internal fun errorMsg(msg: String = "", e: Throwable? = null, es: List<Throwable> = emptyList(), isAlwaysMode: Boolean = false) {
        /** 判断是否为 [CLASSSET_IS_NULL] */
        if (e?.message == CLASSSET_IS_NULL) return
        await {
            if (isIgnoreErrorLogs) return@await
            if (isAlwaysMode.not() && isUsingRemedyPlan) return@await
            YLog.error(msg = "NoSuch$tag happend in [$classSet] $msg".trim(), e = e)
            es.forEachIndexed { index, e -> YLog.error(msg = "Throwable [${index + 1}]", e = e) }
        }
    }
}