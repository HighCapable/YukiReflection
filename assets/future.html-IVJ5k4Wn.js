import{_ as s,o as n,c as a,a as l}from"./app-xnBISszY.js";const e={},o=l(`<h1 id="looking-for-future" tabindex="-1"><a class="header-anchor" href="#looking-for-future" aria-hidden="true">#</a> Looking for Future</h1><blockquote><p>The future is bright and uncertain, let us look forward to the future development space of <code>YukiReflection</code>.</p></blockquote><h2 id="future-plans" tabindex="-1"><a class="header-anchor" href="#future-plans" aria-hidden="true">#</a> Future Plans</h2><blockquote><p>Features that <code>YukiReflection</code> may add later are included here.</p></blockquote><h3 id="automatically-generate-reflection-code" tabindex="-1"><a class="header-anchor" href="#automatically-generate-reflection-code" aria-hidden="true">#</a> Automatically Generate Reflection Code</h3><p>Use <code>stub</code> to create a Kotlin class, and declare the parameters in it, as well as its different states in each version.</p><p>For example, the Java class below is the target class we need to reflect.</p><blockquote><p>The following example</p></blockquote><div class="language-java" data-ext="java"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">package</span><span style="color:#ADBAC7;"> com.example.test;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">MyClass</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> String</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">myField</span><span style="color:#F69D50;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test&quot;</span><span style="color:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">MyClass</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">//...</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> String </span><span style="color:#DCBDFB;">myMethod1</span><span style="color:#ADBAC7;">(String </span><span style="color:#F69D50;">var1</span><span style="color:#ADBAC7;">, </span><span style="color:#F47067;">int</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">var2</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">//...</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">void</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">myMethod2</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">//...</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">void</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">myMethod3</span><span style="color:#ADBAC7;">(String </span><span style="color:#F69D50;">var1</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">//...</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre></div><p>Through the existing usage of the current API, this class can be called reflectively in the following way.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">classOf</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">MyClass</span><span style="color:#ADBAC7;">&gt;().</span><span style="color:#DCBDFB;">buildOf</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">current</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Call myField</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">field</span><span style="color:#ADBAC7;"> { name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;myField&quot;</span><span style="color:#ADBAC7;"> }.</span><span style="color:#DCBDFB;">string</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Call myMethod1</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> methodValue </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;"> { name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;myMethod1&quot;</span><span style="color:#ADBAC7;"> }.</span><span style="color:#DCBDFB;">string</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">0</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Call myMethod2</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;"> { name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;myMethod2&quot;</span><span style="color:#ADBAC7;"> }.</span><span style="color:#DCBDFB;">call</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Call myMethod3</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;"> { name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;myMethod3&quot;</span><span style="color:#ADBAC7;"> }.</span><span style="color:#DCBDFB;">call</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The function to be implemented at present can be directly defined as the following Kotlin class using the reflection function.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">package</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">com.example.test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F69D50;">@ReflectClass</span></span>
<span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">MyClass</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">@ReflectField</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> myField: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">fieldValueOf</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;none&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">@ReflectMethod</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">myMethod1</span><span style="color:#ADBAC7;">(var1: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">, var2: </span><span style="color:#F69D50;">Int</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">methodReturnValueOf</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;none&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">@ReflectMethod</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">myMethod2</span><span style="color:#ADBAC7;">() </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> MethodReturnType.Unit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F69D50;">@ReflectMethod</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">myMethod3</span><span style="color:#ADBAC7;">(var1: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">) </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> MethodReturnType.Unit</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then we can directly call this defined Kotlin class to implement the reflection function, and the API will automatically generate the reflection code according to the annotation.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">MyClass</span><span style="color:#ADBAC7;">().</span><span style="color:#DCBDFB;">also</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Call myField</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">value</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> it.myField</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Call myMethod1</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> methodValue </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> it.</span><span style="color:#DCBDFB;">myMethod1</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">0</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Call myMethod2</span></span>
<span class="line"><span style="color:#ADBAC7;">    it.</span><span style="color:#DCBDFB;">myMethod2</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Call myMethod3</span></span>
<span class="line"><span style="color:#ADBAC7;">    it.</span><span style="color:#DCBDFB;">myMethod3</span><span style="color:#ADBAC7;">(</span><span style="color:#96D0FF;">&quot;test&quot;</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>The above functions may change after the actual release, and the functions of the actual version shall prevail.</p></div><h3 id="automatically-generate-directly-called-class-objects" tabindex="-1"><a class="header-anchor" href="#automatically-generate-directly-called-class-objects" aria-hidden="true">#</a> Automatically Generate Directly Called Class Objects</h3><p>In Kotlin, the way to represent Java class objects is <code>YourObject::class.java</code>.</p><p>This writing method is usually very long and will be very unsightly when used extensively during reflection.</p><p>In the existing version, we have built-in commonly used <code>Class</code> objects, but this will increase the size of dependencies, and these objects may not be used in most cases.</p><p>For example, <code>StringClass</code>, <code>IntType</code>, etc., these objects are built in <code>YukiReflection</code>.</p><p>So we plan to add a function in the future, which can use <code>properties</code> to create a list of <code>Class</code> objects that need to be generated, and generate these <code>Class</code> objects in sequence through the Gradle plugin.</p><p><code>Class</code> objects of primitive types such as those mentioned above will still be built into <code>YukiReflection</code>, and the remaining <code>Class</code> objects need to be defined by yourself.</p><p>The generated name specification is <strong>Class Name + Class</strong>.</p><p>In order to prevent package name conflicts, you can control the sub-package name of the generated <code>Class</code> object.</p><p>In the configuration file, you don&#39;t need to add <code>Class</code> as a suffix.</p><p>You can define the generated root package name in the Gradle plugin, which defaults to <code>com.highcapable.yukireflection.generated.classes</code>.</p><blockquote><p>The following example</p></blockquote><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;"># The most basic way to define is to write the name directly</span></span>
<span class="line"><span style="color:#768390;"># Will be generated to com.highcapable.yukireflection.generated.classes.BundleClass</span></span>
<span class="line"><span style="color:#F47067;">android.os.Bundle</span><span style="color:#ADBAC7;">=Bundle</span></span>
<span class="line"><span style="color:#768390;"># You can use the &quot;.&quot; form in front to define the prefixed subpackage name</span></span>
<span class="line"><span style="color:#768390;"># For example, we want to define this class to the desired package name</span></span>
<span class="line"><span style="color:#768390;"># Will be generated to com.highcapable.yukireflection.generated.classes.myandroid.myos.BundleClass</span></span>
<span class="line"><span style="color:#F47067;">android.os.Bundle</span><span style="color:#ADBAC7;">=myandroid.myos.Bundle</span></span>
<span class="line"><span style="color:#768390;"># You can also not fill in the key value content, which will use the key value name</span></span>
<span class="line"><span style="color:#768390;"># as the defined package name and class name</span></span>
<span class="line"><span style="color:#768390;"># Will be generated to com.highcapable.yukireflection.generated.classes.android.os.BundleClass</span></span>
<span class="line"><span style="color:#ADBAC7;">android.os.Bundle</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The approximate code form of the <code>Class</code> object generated by the above method is as follows.</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">package</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">com.highcapable.yukireflection.generated.classes.android.os</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">// Used with default ClassLoader</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> BundleClass: </span><span style="color:#F69D50;">Class</span><span style="color:#ADBAC7;">&lt;*&gt; </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;android.os.Bundle&quot;</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">toClass</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">// Used when ClassLoader is specified</span></span>
<span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">BundleClass</span><span style="color:#ADBAC7;">(loader: </span><span style="color:#F69D50;">ClassLoader</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Class</span><span style="color:#ADBAC7;">&lt;*&gt; </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;android.os.Bundle&quot;</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">toClass</span><span style="color:#ADBAC7;">(loader)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Maybe this <code>Class</code> may not be obtained in some cases.</p><p>In this case, you can refer to the following configuration method.</p><blockquote><p>The following example</p></blockquote><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;"># Add &quot;?&quot; after the key value to define a nullable Class object</span></span>
<span class="line"><span style="color:#ADBAC7;">android.os.Bundle?</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The approximate code form of the <code>Class</code> object generated by the above method is as follows.</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">package</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">com.highcapable.yukireflection.generated.classes.android.os</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">// Used with default ClassLoader</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> BundleClass: </span><span style="color:#F69D50;">Class</span><span style="color:#ADBAC7;">&lt;*&gt;? </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;android.os.Bundle&quot;</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">toClassOrNull</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">// Used when ClassLoader is specified</span></span>
<span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">BundleClass</span><span style="color:#ADBAC7;">(loader: </span><span style="color:#F69D50;">ClassLoader</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Class</span><span style="color:#ADBAC7;">&lt;*&gt;? </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;android.os.Bundle&quot;</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">toClassOrNull</span><span style="color:#ADBAC7;">(loader)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If this <code>Class</code> object can be referenced by direct call, you can refer to the following configuration method at this time.</p><blockquote><p>The following example</p></blockquote><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#768390;"># Add &quot;!!&quot; after the key value to define a Class object that can be called directly</span></span>
<span class="line"><span style="color:#ADBAC7;">android.os.Bundle!!</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The approximate code form of the <code>Class</code> object generated by the above method is as follows.</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">package</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">com.highcapable.yukireflection.generated.classes.android.os</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F47067;">import</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">android.os.Bundle</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">// Used with default ClassLoader</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> BundleClass: </span><span style="color:#F69D50;">Class</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">Bundle</span><span style="color:#ADBAC7;">&gt; </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">classOf</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">Bundle</span><span style="color:#ADBAC7;">&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">// Used when ClassLoader is specified</span></span>
<span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">BundleClass</span><span style="color:#ADBAC7;">(loader: </span><span style="color:#F69D50;">ClassLoader</span><span style="color:#ADBAC7;">): </span><span style="color:#F69D50;">Class</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">Bundle</span><span style="color:#ADBAC7;">&gt; </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">classOf</span><span style="color:#ADBAC7;">&lt;</span><span style="color:#F69D50;">Bundle</span><span style="color:#ADBAC7;">&gt;(loader)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With the generated <code>Class</code> object, we can happily use <code>YukiReflection</code> for reflection.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#DCBDFB;">method</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">    name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;onCreate&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#DCBDFB;">param</span><span style="color:#ADBAC7;">(BundleClass)</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>The above functions may change after the actual release, and the functions of the actual version shall prevail.</p></div>`,49),p=[o];function t(c,i){return n(),a("div",null,p)}const d=s(e,[["render",t],["__file","future.html.vue"]]);export{d as default};
