import{_ as o,r as i,o as p,c,b as n,d as s,e,a as l}from"./app-xnBISszY.js";const r={},t=l('<h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1><blockquote><p>集成 <code>YukiReflection</code> 到你的项目中。</p></blockquote><h2 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求" aria-hidden="true">#</a> 环境要求</h2><ul><li><p>Windows 7 及以上/macOS 10.14 及以上/Linux 发行版 (Arch/Debian)</p></li><li><p>Android Studio 2021.1 及以上</p></li><li><p>IntelliJ IDEA 2021.1 及以上</p></li><li><p>Kotlin 1.7.0 及以上</p></li><li><p>Android Gradle Plugin 7.0 及以上</p></li><li><p>Gradle 7.0 及以上</p></li><li><p>Java 11 及以上</p></li><li><p>Java 17 及以上 (Since API <code>1.0.3</code>)</p></li></ul><h2 id="项目要求" tabindex="-1"><a class="header-anchor" href="#项目要求" aria-hidden="true">#</a> 项目要求</h2><p>项目需要使用 <code>Android Studio</code> 或 <code>IntelliJ IDEA</code> 创建且类型为 Java 或 Android 项目并已集成 Kotlin 环境依赖。</p><h3 id="集成依赖" tabindex="-1"><a class="header-anchor" href="#集成依赖" aria-hidden="true">#</a> 集成依赖</h3>',7),d={href:"https://github.com/HighCapable/SweetDependency",target:"_blank",rel:"noopener noreferrer"},u=l(`<h4 id="sweetdependency-推荐" tabindex="-1"><a class="header-anchor" href="#sweetdependency-推荐" aria-hidden="true">#</a> SweetDependency (推荐)</h4><p>在你的项目 <code>SweetDependency</code> 配置文件中添加存储库和依赖。</p><blockquote><p>示例如下</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#8DDB8C;">repositories</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#768390;"># MavenCentral 有 2 小时缓存，若无法集成最新版本请添加</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">sonatype-oss-releases</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8DDB8C;">libraries</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#8DDB8C;">com.highcapable.yukireflection</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#8DDB8C;">api</span><span style="color:#ADBAC7;">:</span></span>
<span class="line"><span style="color:#ADBAC7;">      </span><span style="color:#8DDB8C;">version</span><span style="color:#ADBAC7;">: </span><span style="color:#96D0FF;">+</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">...</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加完成后运行一次 Gradle Sync，所有依赖版本将自动装配。</p><p>接下来，在你的项目 <code>build.gradle.kts</code> 中部署依赖。</p><blockquote><p>示例如下</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">dependencies</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">implementation</span><span style="color:#ADBAC7;">(com.highcapable.yukireflection.api)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="传统方式" tabindex="-1"><a class="header-anchor" href="#传统方式" aria-hidden="true">#</a> 传统方式</h4><p>在你的项目 <code>build.gradle.kts</code> 或 <code>build.gradle</code> 中添加存储库。</p><blockquote><p>Kotlin DSL</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">repositories</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">google</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">mavenCentral</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// MavenCentral 有 2 小时缓存，若无法集成最新版本请添加此地址</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">maven</span><span style="color:#ADBAC7;"> { </span><span style="color:#DCBDFB;">url</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;https://s01.oss.sonatype.org/content/repositories/releases/&quot;</span><span style="color:#ADBAC7;">) }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Groovy DSL</p></blockquote><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">repositories {</span></span>
<span class="line"><span style="color:#ADBAC7;">    google()</span></span>
<span class="line"><span style="color:#ADBAC7;">    mavenCentral()</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// MavenCentral 有 2 小时缓存，若无法集成最新版本请添加此地址</span></span>
<span class="line"><span style="color:#ADBAC7;">    maven { url </span><span style="color:#96D0FF;">&#39;https://s01.oss.sonatype.org/content/repositories/releases/&#39;</span><span style="color:#ADBAC7;"> }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在你的项目 <code>build.gradle.kts</code> 或 <code>build.gradle</code> 中添加依赖。</p><blockquote><p>Kotlin DSL</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">dependencies</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">implementation</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;com.highcapable.yukireflection:api:&lt;yuki-version&gt;&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Groovy DSL</p></blockquote><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">dependencies {</span></span>
<span class="line"><span style="color:#ADBAC7;">    implementation </span><span style="color:#96D0FF;">&#39;com.highcapable.yukireflection:api:&lt;yuki-version&gt;&#39;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请将 <strong>&lt;yuki-version&gt;</strong> 修改为 <a href="../about/changelog">这里</a> 的最新版本。</p>`,20),v={class:"custom-container danger"},A=n("p",{class:"custom-container-title"},"特别注意",-1),y={href:"https://github.com/HighCapable/YukiHookAPI",target:"_blank",rel:"noopener noreferrer"},b=n("strong",null,"YukiReflection",-1),m=n("strong",null,"YukiHookAPI",-1),D=n("strong",null,"YukiHookAPI",-1),h={href:"https://highcapable.github.io/YukiHookAPI/zh-cn/",target:"_blank",rel:"noopener noreferrer"},B=n("p",null,[n("strong",null,"YukiHookAPI"),s(" 将在 "),n("strong",null,"2.0.0"),s(" 版本完全分离 "),n("strong",null,"YukiReflection"),s("，届时你可以同时与 "),n("strong",null,"YukiHookAPI"),s(" 使用。")],-1),C=l(`<h4 id="配置-java-版本" tabindex="-1"><a class="header-anchor" href="#配置-java-版本" aria-hidden="true">#</a> 配置 Java 版本</h4><p>在你的项目 <code>build.gradle.kts</code> 或 <code>build.gradle</code> 中修改 Kotlin 的 Java 版本为 17 及以上。</p><blockquote><p>Kotlin DSL</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">android</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">compileOptions</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        sourceCompatibility </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> JavaVersion.VERSION_17</span></span>
<span class="line"><span style="color:#ADBAC7;">        targetCompatibility </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> JavaVersion.VERSION_17</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">kotlinOptions</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        jvmTarget </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;17&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Groovy DSL</p></blockquote><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#ADBAC7;">android {</span></span>
<span class="line"><span style="color:#ADBAC7;">    compileOptions {</span></span>
<span class="line"><span style="color:#ADBAC7;">        sourceCompatibility </span><span style="color:#F47067;">JavaVersion.</span><span style="color:#6CB6FF;">VERSION_17</span></span>
<span class="line"><span style="color:#ADBAC7;">        targetCompatibility </span><span style="color:#F47067;">JavaVersion.</span><span style="color:#6CB6FF;">VERSION_17</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">    kotlinOptions {</span></span>
<span class="line"><span style="color:#ADBAC7;">        jvmTarget </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&#39;17&#39;</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>自 API <strong>1.0.3</strong> 版本后 Kotlin 使用的 Java 版本默认为 17，不再支持 11 及以下版本。</p></div>`,7);function k(g,_){const a=i("ExternalLinkIcon");return p(),c("div",null,[t,n("p",null,[s("我们推荐使用 Kotlin DSL 作为 Gradle 构建脚本语言并推荐使用 "),n("a",d,[s("SweetDependency"),e(a)]),s(" 来管理依赖。")]),u,n("div",v,[A,n("p",null,[s("如果你的项目目前正在使用 "),n("a",y,[s("YukiHookAPI"),e(a)]),s(" 的 1.x.x 版本，请不要重复集成 "),b,s("，因为 "),m,s(" 已经包含了其中的功能且存在针对相关功能的改动，重复集成会造成功能性冲突引发异常，此时你应该前往 "),D,s(" 的 "),n("a",h,[s("文档"),e(a)]),s(" 查看对应的使用教程。")]),B]),C])}const x=o(r,[["render",k],["__file","quick-start.html.vue"]]);export{x as default};
