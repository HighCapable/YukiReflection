import{_ as s,o as n,c as a,e}from"./app.3cb5b3a5.js";const l={},o=e(`<h1 id="api-\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#api-\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> API \u57FA\u672C\u914D\u7F6E</h1><blockquote><p>\u8FD9\u91CC\u4ECB\u7ECD\u4E86 <code>YukiReflection</code> \u7684\u57FA\u672C\u914D\u7F6E\u65B9\u6CD5\u3002</p></blockquote><p><code>YukiReflection</code> \u65E0\u9700\u4E00\u4E9B\u590D\u6742\u7684\u914D\u7F6E\u5373\u53EF\u76F4\u63A5\u5F00\u59CB\u4F7F\u7528\uFF0C\u4E14\u4E0D\u4F1A\u4E0E <code>Java</code> \u539F\u751F\u7684\u53CD\u5C04 API \u51B2\u7A81\u3002</p><p>\u4F60\u53EF\u4EE5\u5728\u4F7F\u7528\u4E4B\u524D\u5BF9 <code>YukiReflection</code> \u8FDB\u884C\u4E00\u4E9B\u529F\u80FD\u914D\u7F6E\u3002</p><h2 id="\u83B7\u53D6-api-\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6-api-\u7248\u672C" aria-hidden="true">#</a> \u83B7\u53D6 API \u7248\u672C</h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u83B7\u53D6\u5F53\u524D <code>YukiReflection</code> \u7684 API \u7248\u672C\u3002</p><blockquote><p>\u793A\u4F8B\u5982\u4E0B</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#768390;">// \u83B7\u53D6\u7248\u672C\u540D\u79F0</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> versionName </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">YukiReflection</span><span style="color:#ADBAC7;">.</span><span style="color:#F69D50;">API_VERSION_NAME</span></span>
<span class="line"><span style="color:#768390;">// \u83B7\u53D6\u7248\u672C\u53F7</span></span>
<span class="line"><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> versionCode </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">YukiReflection</span><span style="color:#ADBAC7;">.</span><span style="color:#F69D50;">API_VERSION_CODE</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u83B7\u53D6\u7248\u672C\u8FDB\u884C\u4E00\u4E9B\u4E0D\u540C\u7248\u672C\u5DEE\u5F02\u7684\u5224\u65AD\u6216\u7528\u4E8E\u663E\u793A\u5728\u5173\u4E8E\u4FE1\u606F\u4E2D\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u5C0F\u63D0\u793A</p><p>\u66F4\u591A\u529F\u80FD\u8BF7\u53C2\u8003 <a href="../api/public/com/highcapable/yukireflection/YukiReflection">YukiReflection</a>\u3002</p></div><h2 id="\u914D\u7F6E-api-\u76F8\u5173\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-api-\u76F8\u5173\u529F\u80FD" aria-hidden="true">#</a> \u914D\u7F6E API \u76F8\u5173\u529F\u80FD</h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>YukiReflection.configs { ... }</code> \u65B9\u6CD5\u6216 <code>YukiReflection.Configs</code> \u6765\u914D\u7F6E\u76F8\u5173\u529F\u80FD\u3002</p><h3 id="\u81EA\u5B9A\u4E49\u8C03\u8BD5\u65E5\u5FD7\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u8C03\u8BD5\u65E5\u5FD7\u6807\u7B7E" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u8C03\u8BD5\u65E5\u5FD7\u6807\u7B7E</h3><p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u6765\u81EA\u5B9A\u4E49\u8C03\u8BD5\u65E5\u5FD7\u7684\u6807\u7B7E\u3002</p><p>API \u5185\u90E8\u7684\u65E5\u5FD7\u5C06\u4F1A\u4F7F\u7528\u6B64\u6807\u7B7E\u8FDB\u884C\u6253\u5370\u3002</p><blockquote><p>\u793A\u4F8B\u5982\u4E0B</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#768390;">// \u901A\u8FC7 configs \u65B9\u6CD5</span></span>
<span class="line"><span style="color:#F69D50;">YukiReflection</span><span style="color:#ADBAC7;">.configs {</span></span>
<span class="line"><span style="color:#ADBAC7;">    debugTag </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;YourCustomTag&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"><span style="color:#768390;">// \u76F4\u63A5\u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#F69D50;">YukiReflection</span><span style="color:#ADBAC7;">.</span><span style="color:#F69D50;">Configs</span><span style="color:#ADBAC7;">.debugTag </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;YourCustomTag&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u542F\u7528\u6216\u7981\u7528-debug-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528\u6216\u7981\u7528-debug-\u6A21\u5F0F" aria-hidden="true">#</a> \u542F\u7528\u6216\u7981\u7528 Debug \u6A21\u5F0F</h3><p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u6765\u542F\u7528\u6216\u7981\u7528 Debug \u6A21\u5F0F\u3002</p><p>Debug \u6A21\u5F0F\u9ED8\u8BA4\u662F\u5173\u95ED\u7684\uFF0C\u542F\u7528\u540E\u5C06\u4F1A\u6253\u5370\u8BE6\u7EC6\u65E5\u5FD7 (\u4F8B\u5982\u53CD\u5C04\u67E5\u627E\u529F\u80FD\u7684\u8017\u65F6) \u5230\u63A7\u5236\u53F0\u3002</p><blockquote><p>\u793A\u4F8B\u5982\u4E0B</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#768390;">// \u901A\u8FC7 configs \u65B9\u6CD5</span></span>
<span class="line"><span style="color:#F69D50;">YukiReflection</span><span style="color:#ADBAC7;">.configs {</span></span>
<span class="line"><span style="color:#ADBAC7;">    isDebug </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"><span style="color:#768390;">// \u76F4\u63A5\u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#F69D50;">YukiReflection</span><span style="color:#ADBAC7;">.</span><span style="color:#F69D50;">Configs</span><span style="color:#ADBAC7;">.isDebug </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u542F\u7528\u6216\u7981\u7528\u8C03\u8BD5\u65E5\u5FD7\u7684\u8F93\u51FA\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528\u6216\u7981\u7528\u8C03\u8BD5\u65E5\u5FD7\u7684\u8F93\u51FA\u529F\u80FD" aria-hidden="true">#</a> \u542F\u7528\u6216\u7981\u7528\u8C03\u8BD5\u65E5\u5FD7\u7684\u8F93\u51FA\u529F\u80FD</h3><p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u6765\u542F\u7528\u6216\u7981\u7528\u8C03\u8BD5\u65E5\u5FD7\u7684\u8F93\u51FA\u529F\u80FD\u3002</p><p>\u6B64\u529F\u80FD\u9ED8\u8BA4\u542F\u7528\uFF0C\u5173\u95ED\u540E\u5C06\u4F1A\u505C\u7528 <code>YukiReflection</code> \u5BF9\u5168\u90E8\u65E5\u5FD7\u7684\u8F93\u51FA\u3002</p><blockquote><p>\u793A\u4F8B\u5982\u4E0B</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#768390;">// \u901A\u8FC7 configs \u65B9\u6CD5</span></span>
<span class="line"><span style="color:#F69D50;">YukiReflection</span><span style="color:#ADBAC7;">.configs {</span></span>
<span class="line"><span style="color:#ADBAC7;">    isAllowPrintingLogs </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"><span style="color:#768390;">// \u76F4\u63A5\u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#F69D50;">YukiReflection</span><span style="color:#ADBAC7;">.</span><span style="color:#F69D50;">Configs</span><span style="color:#ADBAC7;">.isAllowPrintingLogs </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528-configs-\u65B9\u6CD5\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-configs-\u65B9\u6CD5\u914D\u7F6E" aria-hidden="true">#</a> \u4F7F\u7528 configs \u65B9\u6CD5\u914D\u7F6E</h3><p>\u4E3A\u4E86\u4E00\u6B21\u6027\u914D\u7F6E\u591A\u4E2A\u529F\u80FD\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 <code>YukiReflection.configs { ... }</code> \u65B9\u6CD5\u8FDB\u884C\u914D\u7F6E\u3002</p><blockquote><p>\u793A\u4F8B\u5982\u4E0B</p></blockquote><div class="language-kotlin ext-kt line-numbers-mode"><pre class="shiki" style="background-color:#22272e;"><code><span class="line"><span style="color:#F69D50;">YukiReflection</span><span style="color:#ADBAC7;">.configs {</span></span>
<span class="line"><span style="color:#ADBAC7;">    debugTag </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;YourCustomTag&quot;</span></span>
<span class="line"><span style="color:#ADBAC7;">    isDebug </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">    isAllowPrintingLogs </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">true</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u5C0F\u63D0\u793A</p><p>\u66F4\u591A\u529F\u80FD\u8BF7\u53C2\u8003 <a href="../api/public/com/highcapable/yukireflection/YukiReflection#configs-method">YukiReflection.configs</a> \u65B9\u6CD5\u3001<a href="../api/public/com/highcapable/yukireflection/YukiReflection#configs-object">YukiReflection.Configs</a>\u3002</p></div>`,32),i=[o];function p(c,r){return n(),a("div",null,i)}const d=s(l,[["render",p],["__file","api-example.html.vue"]]);export{d as default};