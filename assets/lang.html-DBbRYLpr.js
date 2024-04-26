import{_ as n,o as s,c as a,b as t}from"./app-iGUZTM2Q.js";const p={},e=t(`<h1>lang</h1><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>单例模式</p><p>SendMode Input SetWorkingDir, %A_ScriptDir%</p></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 先选择最外层的ul</span>
<span class="token keyword">let</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&quot;.block-icon-list.clearfix&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">;</span>
<span class="token comment">// 然后遍历子类li</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> li <span class="token keyword">of</span> ul<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  li<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&quot;.cover-item.iconfont.cover-item-line.icon-gouwuche1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-rust line-numbers-mode" data-ext="rs" data-title="rs"><pre class="language-rust"><code>
<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dart line-numbers-mode" data-ext="dart" data-title="dart"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:io&#39;</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:crypto/crypto.dart&#39;</span></span> <span class="token operator">as</span> crypto<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;dart:typed_data&#39;</span></span><span class="token punctuation">;</span>

bool <span class="token function">isPhone</span><span class="token punctuation">(</span><span class="token class-name">String</span> input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">RegExp</span> pathReg <span class="token operator">=</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">r&quot;\\.\\\\&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> pathReg<span class="token punctuation">.</span><span class="token function">hasMatch</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> arguments<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>

  <span class="token keyword">var</span> filePath <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isPhone</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    filePath<span class="token operator">=</span>arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
  <span class="token function">print</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token class-name">File</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> fileStream <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">openRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> md5 <span class="token operator">=</span> crypto<span class="token punctuation">.</span>md5<span class="token punctuation">;</span>
    <span class="token keyword">final</span> checksum <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> md5<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>fileStream<span class="token punctuation">)</span><span class="token punctuation">.</span>first<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>checksum<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;找不到文件&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># -*- coding: UTF-8 -*-</span>

<span class="token comment"># 打印九九乘法表</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># 打印语句中，大括号及其里面的字符 (称作格式化字段) 将会被 .format() 中的参数替换,注意有个点的</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;{}x{}={}\\t&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> i<span class="token operator">*</span>j<span class="token punctuation">)</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判断窗口是否存在" tabindex="-1"><a class="header-anchor" href="#判断窗口是否存在"><span>判断窗口是否存在</span></a></h2><div class="language-autohotkey line-numbers-mode" data-ext="autohotkey" data-title="autohotkey"><pre class="language-autohotkey"><code><span class="token keyword">if</span> <span class="token builtin">WinActive</span><span class="token punctuation">(</span><span class="token string">&quot;ahk_class Notepad&quot;</span><span class="token punctuation">)</span> or <span class="token builtin">WinActive</span><span class="token punctuation">(</span><span class="token string">&quot;ahk_class&quot;</span> ClassName<span class="token punctuation">)</span>
    <span class="token command selector">WinClose</span> <span class="token comment">; 使用 WinActive 找到的窗口.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="等待窗口激活" tabindex="-1"><a class="header-anchor" href="#等待窗口激活"><span>等待窗口激活</span></a></h2><div class="language-r line-numbers-mode" data-ext="r" data-title="r"><pre class="language-r"><code>data <span class="token operator">&lt;-</span> read.csv<span class="token punctuation">(</span><span class="token string">&quot;sites.csv&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span>

print<span class="token punctuation">(</span>is.data.frame<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 查看是否是数据框</span>
print<span class="token punctuation">(</span>ncol<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 列数</span>
print<span class="token punctuation">(</span>nrow<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 行数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><pre class="language-txt"><code>#SingleInstance, Force
SendMode Input
SetWorkingDir, %A_ScriptDir%

Run, notepad.exe
WinWaitActive, ahk_exe Notepad3.exe, , 5
if ErrorLevel
{
    MsgBox, WinWait timed out.
    return
}
else {
    MsgBox, notepad actived!
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","lang.html.vue"]]);export{r as default};
