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
@file:Suppress("unused", "MemberVisibilityCanBePrivate", "NON_PUBLIC_CALL_FROM_PUBLIC_INLINE")

package com.highcapable.yukireflection

import com.highcapable.yukireflection.YukiReflection.Configs
import com.highcapable.yukireflection.generated.YukiReflectionProperties
import com.highcapable.yukireflection.log.YLog
import java.lang.reflect.Member

/**
 * [YukiReflection] 的装载调用类
 *
 * 你可以使用 [Configs] 对 [YukiReflection] 进行配置
 */
object YukiReflection {

    /** 标签名称 */
    const val TAG = YukiReflectionProperties.PROJECT_NAME

    /** 当前版本 */
    const val VERSION = YukiReflectionProperties.PROJECT_YUKIREFLECTION_CORE_VERSION

    /**
     * 版本名称
     *
     * - 此方法已弃用 - 在之后的版本中将直接被删除
     *
     * - 请现在迁移到 [VERSION]
     */
    @Deprecated(message = "不再区分版本名称和版本号", ReplaceWith("VERSION"))
    const val API_VERSION_NAME = VERSION

    /**
     * 版本号
     *
     * - 此方法已弃用 - 在之后的版本中将直接被删除
     *
     * - 请现在迁移到 [VERSION]
     */
    @Deprecated(message = "不再区分版本名称和版本号", ReplaceWith("VERSION"))
    const val API_VERSION_CODE = -1

    /**
     * 配置 [YukiReflection]
     */
    object Configs {

        /**
         * 配置 [YLog.Configs] 相关参数
         * @param initiate 方法体
         */
        inline fun debugLog(initiate: YLog.Configs.() -> Unit) = YLog.Configs.apply(initiate).build()

        /**
         * 这是一个调试日志的全局标识
         *
         * - 此方法已弃用 - 在之后的版本中将直接被删除
         *
         * - 请现在迁移到 [debugLog] 并使用 [YLog.Configs.tag]
         */
        @Deprecated(message = "请使用新方式来实现此功能")
        var debugTag get() = YLog.Configs.tag
            set(value) {
                YLog.Configs.tag = value
            }

        /**
         * 是否开启调试模式 - 默认不启用
         *
         * 启用后将交由日志输出管理器打印详细日志 (例如反射查找功能的耗时) 到控制台
         *
         * 当 [YLog.Configs.isEnable] 关闭后 [isDebug] 也将同时关闭
         */
        var isDebug = false

        /**
         * 是否启用调试日志的输出功能
         *
         * - 此方法已弃用 - 在之后的版本中将直接被删除
         *
         * - 请现在迁移到 [debugLog] 并使用 [YLog.Configs.isEnable]
         */
        @Deprecated(message = "请使用新方式来实现此功能")
        var isAllowPrintingLogs get() = YLog.Configs.isEnable
            set(value) {
                YLog.Configs.isEnable = value
            }

        /**
         * 是否启用 [Member] 缓存功能
         *
         * - 此方法及功能已被移除 - 在之后的版本中将直接被删除
         *
         * - [Member] 的直接缓存功能已被移除 - 因为其存在内存溢出 (OOM) 问题
         */
        @Deprecated(message = "此方法及功能已被移除，请删除此方法")
        var isEnableMemberCache = false

        /** 结束方法体 */
        internal fun build() = Unit
    }

    /**
     * 配置 [YukiReflection] 相关参数
     * @param initiate 方法体
     */
    inline fun configs(initiate: Configs.() -> Unit) = Configs.apply(initiate).build()
}