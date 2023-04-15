/*
 * YukiReflection - An efficient Reflection API for the Android platform built in Kotlin.
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
 * This file is Created by fankes on 2023/1/21.
 */
@file:Suppress("unused")

package com.highcapable.yukireflection

import com.highcapable.yukireflection.YukiReflection.Configs
import com.highcapable.yukireflection.finder.members.ConstructorFinder
import com.highcapable.yukireflection.finder.members.FieldFinder
import com.highcapable.yukireflection.finder.members.MethodFinder
import com.highcapable.yukireflection.finder.store.ReflectsCacheStore
import java.lang.reflect.Constructor
import java.lang.reflect.Field
import java.lang.reflect.Member
import java.lang.reflect.Method

/**
 * [YukiReflection] 的装载调用类
 *
 * 你可以使用 [Configs] 对 [YukiReflection] 进行配置
 */
object YukiReflection {

    /** 获取当前 [YukiReflection] 的版本 */
    const val API_VERSION_NAME = "1.0.0"

    /** 获取当前 [YukiReflection] 的版本号 */
    const val API_VERSION_CODE = 1

    /**
     * 配置 [YukiReflection]
     */
    object Configs {

        /**
         * 这是一个调试日志的全局标识
         *
         * 默认文案为 YukiReflection
         *
         * 你可以修改为你自己的文案
         */
        var debugTag = "YukiReflection"

        /**
         * 是否开启调试模式 - 默认不启用
         *
         * 启用后将交由日志输出管理器打印详细日志 (例如反射查找功能的耗时) 到控制台
         *
         * 请过滤 [debugTag] 即可找到每条日志
         */
        var isDebug = false

        /**
         * 是否启用调试日志的输出功能
         *
         * - ❗关闭后将会停用 [YukiReflection] 对全部日志的输出
         */
        var isAllowPrintingLogs = true

        /**
         * 是否启用 [Member] 缓存功能
         *
         * - 为防止 [Member] 复用过高造成的系统 GC 问题 - 此功能默认启用
         *
         * 启用后会缓存已经找到的 [Method]、[Constructor]、[Field]
         *
         * 缓存的 [Member] 都将处于 [ReflectsCacheStore] 的全局静态实例中
         *
         * 推荐使用 [MethodFinder]、[ConstructorFinder]、[FieldFinder] 来获取 [Member]
         *
         * 除非缓存的 [Member] 发生了混淆的问题 - 例如使用 R8 混淆后的 APP 的目标 [Member] - 否则建议启用
         */
        var isEnableMemberCache = true

        /** 结束方法体 */
        @PublishedApi
        internal fun build() = Unit
    }

    /**
     * 配置 [YukiReflection] 相关参数
     * @param initiate 方法体
     */
    inline fun configs(initiate: Configs.() -> Unit) = Configs.apply(initiate).build()
}