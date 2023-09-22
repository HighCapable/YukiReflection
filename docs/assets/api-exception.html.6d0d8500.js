import{_ as s,o as e,c as n,e as a}from"./app.472fa5e4.js";const o={},l=a(`<h1 id="api-exception-handling" tabindex="-1"><a class="header-anchor" href="#api-exception-handling" aria-hidden="true">#</a> API Exception Handling</h1><blockquote><p>Exceptions are the main problems often encountered in the development process. Here are some common exceptions that may be encountered during the use of <code>YukiReflection</code> and how to deal with them.</p></blockquote><p>The exception description here will only synchronize the latest API version, and the exception of the older API version will not be described again, please always keep the API version up-to-date.</p><h2 id="non-blocking-exceptions" tabindex="-1"><a class="header-anchor" href="#non-blocking-exceptions" aria-hidden="true">#</a> Non-Blocking Exceptions</h2><blockquote><p>These exceptions will not cause the app to stop running (FC), but will print <code>E</code> level logs on the console, and may also stop continuing to execute related functions.</p></blockquote><h6 id="exception" tabindex="-1"><a class="header-anchor" href="#exception" aria-hidden="true">#</a> exception</h6><div class="custom-container danger"><p class="custom-container-title">loggerE</p><p>Method/Constructor/Field match type &quot;<strong>TYPE</strong>&quot; not allowed</p></div><p><strong>Abnormal</strong></p><p>A disallowed parameter type was set when looking up methods, constructors, and variables.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#768390;">// Find a method</span></span>
<span class="line"><span style="color:#ADBAC7;">method {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// \u2757 Invalid type example is set</span></span>
<span class="line"><span style="color:#ADBAC7;">    param(</span><span style="color:#6CB6FF;">false</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">, </span><span style="color:#6CB6FF;">0</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// \u2757 Invalid type example is set</span></span>
<span class="line"><span style="color:#ADBAC7;">    returnType </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">false</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">// Find a variable</span></span>
<span class="line"><span style="color:#ADBAC7;">field {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// \u2757 Invalid type example is set</span></span>
<span class="line"><span style="color:#ADBAC7;">    type </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">false</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Solution</strong></p><p>In the search, <code>param</code>, <code>returnType</code>, <code>type</code> only accept <code>Class</code>, <code>String</code>, <code>VariousClass</code> types, and parameter instances cannot be passed in.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#768390;">// Find a method</span></span>
<span class="line"><span style="color:#ADBAC7;">method {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// \u2705 Examples of correct usage</span></span>
<span class="line"><span style="color:#ADBAC7;">    param(</span><span style="color:#F69D50;">BooleanType</span><span style="color:#ADBAC7;">, </span><span style="color:#F69D50;">IntType</span><span style="color:#ADBAC7;">, </span><span style="color:#F69D50;">IntType</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// \u2705 Examples of correct usage</span></span>
<span class="line"><span style="color:#ADBAC7;">    returnType </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">BooleanType</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// \u2705 The following scheme is also correct</span></span>
<span class="line"><span style="color:#ADBAC7;">    returnType </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;java.lang.Boolean&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">// Find a variable</span></span>
<span class="line"><span style="color:#ADBAC7;">field {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// \u2705 Examples of correct usage</span></span>
<span class="line"><span style="color:#ADBAC7;">    type </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">BooleanType</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="exception-1" tabindex="-1"><a class="header-anchor" href="#exception-1" aria-hidden="true">#</a> exception</h6><div class="custom-container danger"><p class="custom-container-title">loggerE</p><p>NoSuchMethod/NoSuchConstructor/NoSuchField happend in [<strong>NAME</strong>]</p></div><p><strong>Abnormal</strong></p><p>The target method, constructor, and variable were not found when looking for methods, constructors, and variables.</p><p><strong>Solution</strong></p><p>Please confirm that your search criteria can correctly match the specified methods, constructors and variables in the target <code>Class</code>.</p><h6 id="exception-2" tabindex="-1"><a class="header-anchor" href="#exception-2" aria-hidden="true">#</a> exception</h6><div class="custom-container danger"><p class="custom-container-title">loggerE</p><p>Trying <strong>COUNT</strong> times and all failure by RemedyPlan</p></div><p><strong>Abnormal</strong></p><p>When using <code>RemedyPlan</code> to search for methods, constructors, and variables, the methods, constructors, and variables are still not found.</p><p><strong>Solution</strong></p><p>Please confirm the <code>RemedyPlan</code> parameter you set and the <code>Class</code> that exists in the current app, and try again.</p><h6 id="exception-3" tabindex="-1"><a class="header-anchor" href="#exception-3" aria-hidden="true">#</a> exception</h6><div class="custom-container danger"><p class="custom-container-title">loggerE</p><p>You must set a condition when finding a Method/Constructor/Field</p></div><p><strong>Abnormal</strong></p><p>No conditions are set when looking for methods, constructors, and variables.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">method {</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// No conditions are set here</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Solution</strong></p><p>Please complete your search criteria and try again.</p><h6 id="exception-4" tabindex="-1"><a class="header-anchor" href="#exception-4" aria-hidden="true">#</a> exception</h6><div class="custom-container danger"><p class="custom-container-title">loggerE</p><p>Can&#39;t find this Class in [<strong>CLASSLOADER</strong>]: <strong>CONTENT</strong> Generated by YukiReflection#ReflectionTool</p></div><p><strong>Abnormal</strong></p><p>The <code>Class</code> object to be searched for was not found via <code>ClassLoader.searchClass</code>.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">custom</span><span style="color:#F69D50;">ClassLoader?</span><span style="color:#ADBAC7;">.searchClass {</span></span>
<span class="line"><span style="color:#ADBAC7;">    from(...)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">}.get()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Solution</strong></p><p>This is a security exception, please check the conditions you set, use the relevant tools to view the <code>Class</code> and bytecode object characteristics in the <strong>Dex</strong> and try again.</p><h6 id="exception-5" tabindex="-1"><a class="header-anchor" href="#exception-5" aria-hidden="true">#</a> exception</h6><div class="custom-container danger"><p class="custom-container-title">loggerE</p><p>Can&#39;t find this Method/Constructor/Field in [<strong>CLASS</strong>]: <strong>CONTENT</strong> Generated by YukiReflection#ReflectionTool</p></div><p><strong>Abnormal</strong></p><p>The methods, constructors, and variables that need to be found cannot be found by specifying conditions.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F69D50;">TargetClass</span><span style="color:#ADBAC7;">.method {</span></span>
<span class="line"><span style="color:#ADBAC7;">    name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    param(</span><span style="color:#F69D50;">BooleanType</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Solution</strong></p><p>This is a security exception, please check the conditions you set, use the relevant tools to view the bytecode object characteristics in the <code>Class</code>, and try again.</p><h6 id="exception-6" tabindex="-1"><a class="header-anchor" href="#exception-6" aria-hidden="true">#</a> exception</h6><div class="custom-container danger"><p class="custom-container-title">loggerE</p><p>The number of VagueType must be at least less than the count of paramTypes</p></div><p><strong>Abnormal</strong></p><p>Incorrect use of <code>VagueType</code> in <code>Method</code>, <code>Constructor</code> lookup conditions.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F69D50;">TargetClass</span><span style="color:#ADBAC7;">.method {</span></span>
<span class="line"><span style="color:#ADBAC7;">    name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// &lt;Scenario 1&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">    param(</span><span style="color:#F69D50;">VagueType</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// &lt;Scenario 2&gt;</span></span>
<span class="line"><span style="color:#ADBAC7;">    param(</span><span style="color:#F69D50;">VagueType</span><span style="color:#ADBAC7;">, </span><span style="color:#F69D50;">VagueType</span><span style="color:#ADBAC7;"> ...)</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Solution</strong></p><p><code>VagueType</code> cannot be completely filled in method and constructor parameters. If there is such a requirement, please use <code>paramCount</code>.</p><h6 id="exception-7" tabindex="-1"><a class="header-anchor" href="#exception-7" aria-hidden="true">#</a> exception</h6><div class="custom-container danger"><p class="custom-container-title">loggerE</p><p>Field match type class is not found</p></div><p><strong>Abnormal</strong></p><p>An instance of <code>Class</code> for <code>type</code> was not found in the lookup criteria set when looking up the variable.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">field {</span></span>
<span class="line"><span style="color:#ADBAC7;">    name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Assume that the Class of the type set here does not exist</span></span>
<span class="line"><span style="color:#ADBAC7;">    type </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.TestClass&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Solution</strong></p><p>Please check if <code>Class</code> of <code>type</code> in the lookup condition exists and try again.</p><h6 id="exception-8" tabindex="-1"><a class="header-anchor" href="#exception-8" aria-hidden="true">#</a> exception</h6><div class="custom-container danger"><p class="custom-container-title">loggerE</p><p>Method match returnType class is not found</p></div><p><strong>Abnormal</strong></p><p>An instance of <code>Class</code> of <code>returnType</code> was not found in the search criteria set when looking up the method.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">method {</span></span>
<span class="line"><span style="color:#ADBAC7;">    name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Assume that the Class of returnType set here does not exist</span></span>
<span class="line"><span style="color:#ADBAC7;">    returnType </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;com.example.TestClass&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Solution</strong></p><p>Please check if <code>Class</code> of <code>returnType</code> in the lookup condition exists and try again.</p><h6 id="exception-9" tabindex="-1"><a class="header-anchor" href="#exception-9" aria-hidden="true">#</a> exception</h6><div class="custom-container danger"><p class="custom-container-title">loggerE</p><p>Method/Constructor match paramType[<strong>INDEX</strong>] class is not found</p></div><p><strong>Abnormal</strong></p><p>The <code>Class</code> instance subscripted by the <code>index</code> number of <code>param</code> was not found in the search conditions set when searching for methods and constructors.</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">method {</span></span>
<span class="line"><span style="color:#ADBAC7;">    name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// Assume that the Class with subscript &quot;No.1&quot; set here does not exist</span></span>
<span class="line"><span style="color:#ADBAC7;">    param(</span><span style="color:#F69D50;">StringClass</span><span style="color:#ADBAC7;">, </span><span style="color:#96D0FF;">&quot;com.example.TestClass&quot;</span><span style="color:#ADBAC7;">, </span><span style="color:#F69D50;">BooleanType</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Solution</strong></p><p>Please check if the <code>Class</code> subscripted by the <code>index</code> number of <code>param</code> in the lookup condition exists and try again.</p><h2 id="blocking-exceptions" tabindex="-1"><a class="header-anchor" href="#blocking-exceptions" aria-hidden="true">#</a> Blocking Exceptions</h2><blockquote><p>These exceptions will directly cause the app to stop running (FC), at the same time print <code>E</code> level logs on the console.</p></blockquote><h6 id="exception-10" tabindex="-1"><a class="header-anchor" href="#exception-10" aria-hidden="true">#</a> exception</h6><div class="custom-container danger"><p class="custom-container-title">NoClassDefFoundError</p><p>Can&#39;t find this Class in [<strong>CLASSLOADER</strong>]: <strong>CONTENT</strong> Generated by YukiReflection#ReflectionTool</p></div><p><strong>Abnormal</strong></p><p>The <code>Class</code> object you were looking for was not found via <code>String.toClass(...)</code> or <code>classOf&lt;...&gt;()</code>.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#96D0FF;">&quot;com.demo.Test&quot;</span><span style="color:#ADBAC7;">.toClass()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Solution</strong></p><p>Please check if the <code>Class</code> matched by the current string or entity exists in the current <code>ClassLoader</code> and try again.</p><h6 id="exception-11" tabindex="-1"><a class="header-anchor" href="#exception-11" aria-hidden="true">#</a> exception</h6><div class="custom-container danger"><p class="custom-container-title">IllegalStateException</p><p>ClassLoader [<strong>CLASSLOADER</strong>] is not a DexClassLoader</p></div><p><strong>Abnormal</strong></p><p>Use <code>ClassLoader.searchClass</code> to find <code>Class</code> but currently <code>ClassLoader</code> does not extends <code>BaseDexClassLoader</code>.</p><p><strong>Solution</strong></p><p>This situation basically does not exist, unless the current app references a Non-ART platform executable (which not realistic) or the current <code>ClassLoader</code> is null.</p><h6 id="exception-12" tabindex="-1"><a class="header-anchor" href="#exception-12" aria-hidden="true">#</a> exception</h6><div class="custom-container danger"><p class="custom-container-title">IllegalStateException</p><p>VariousClass match failed of those <strong>CLASSES</strong></p></div><p><strong>Abnormal</strong></p><p>All <code>Class</code> were not found when creating indeterminate <code>Class</code> objects using <code>VariousClass</code>.</p><p><strong>Solution</strong></p><p>After checking whether there is a matching <code>Class</code> in the current app and try again.</p><h6 id="exception-13" tabindex="-1"><a class="header-anchor" href="#exception-13" aria-hidden="true">#</a> exception</h6><div class="custom-container danger"><p class="custom-container-title">IllegalStateException</p><p>paramTypes is empty, please use emptyParam() instead</p></div><p><strong>Abnormal</strong></p><p>The empty <code>param</code> method is preserved when looking up methods, constructors.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">method {</span></span>
<span class="line"><span style="color:#ADBAC7;">    name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// No parameters are filled in parentheses</span></span>
<span class="line"><span style="color:#ADBAC7;">    param()</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Solution</strong></p><p>To identify this method, the constructor has no parameters, you can have a setter method as follows.</p><p>The first way, set <code>emptyParam</code> (recommended)</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">method {</span></span>
<span class="line"><span style="color:#ADBAC7;">    name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    emptyParam()</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The second way, set <code>paramCount = 0</code></p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">method {</span></span>
<span class="line"><span style="color:#ADBAC7;">    name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    paramCount </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">0</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="exception-14" tabindex="-1"><a class="header-anchor" href="#exception-14" aria-hidden="true">#</a> exception</h6><div class="custom-container danger"><p class="custom-container-title">IllegalStateException</p><p>Cannot create classes cache for &quot;android&quot;, please remove &quot;name&quot; param</p></div><p><strong>Abnormal</strong></p><p>The <code>DexClassFinder</code> cache function <code>searchClass(name = ...)</code> is used in the System Framework (&quot;android&quot;) app.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#ADBAC7;">searchClass(name </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;test&quot;</span><span style="color:#ADBAC7;">) {</span></span>
<span class="line"><span style="color:#ADBAC7;">    from(...)</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">}.get()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Solution</strong></p><p>Since the cache will store the found <code>Class</code> name in <code>SharedPreferences</code>, but the data directory does not exist in the System Framework, so please do not use this function in the System Framework.</p><h6 id="exception-15" tabindex="-1"><a class="header-anchor" href="#exception-15" aria-hidden="true">#</a> exception</h6><div class="custom-container danger"><p class="custom-container-title">IllegalStateException</p><p>Target Class type cannot cast to <strong>TYPE</strong></p></div><p><strong>Abnormal</strong></p><p>Wrong type declared when converting string class name to target <code>Class</code> using <code>Class.toClass</code>, <code>Class.toClassOrNull</code>, <code>GenericClass.argument</code> methods.</p><p>The following uses the <code>Class.toClass</code> method as an example.</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#768390;">// Assume the target type is Activity but it was wrongly cast to WrongClass type</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> clazz </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;android.app.Activity&quot;</span><span style="color:#ADBAC7;">.toClass</span><span style="color:#F47067;">&lt;</span><span style="color:#F69D50;">WrongClass</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Solution</strong></p><blockquote><p>The following example</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#768390;">// &lt;Solution 1&gt; Fill in the correct type</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> clazz1 </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;android.app.Activity&quot;</span><span style="color:#ADBAC7;">.toClass</span><span style="color:#F47067;">&lt;</span><span style="color:#F69D50;">Activity</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#768390;">// &lt;Solution 2&gt; Do not fill in the generic declaration</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> clazz2 </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;android.app.Activity&quot;</span><span style="color:#ADBAC7;">.toClass()</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Please ensure that the generic type declared after executing the method is the specified target <code>Class</code> type, and you do not need to fill in the generic declaration if the target type is not sure.</p>`,137),t=[l];function p(c,i){return e(),n("div",null,t)}const d=s(o,[["render",p],["__file","api-exception.html.vue"]]);export{d as default};