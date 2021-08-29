import{_ as n}from"./preload-helper.8b70a8dd.js";import{o as s,c as a,a as t,b as p,r as o,d as e,e as c}from"./app.8f5014a0.js";const l={data:()=>({dynamicComponent:null}),mounted(){n((()=>import("./index.463bc26c.js")),["assets/index.463bc26c.js","assets/app.8f5014a0.js","assets/javascript.cf39757d.js"]).then((n=>{this.dynamicComponent=n.default}))}},r='{"title":"介绍","description":"","frontmatter":{},"headers":[{"level":3,"title":"介绍","slug":"介绍"},{"level":3,"title":"安装","slug":"安装"},{"level":3,"title":"全局安装","slug":"全局安装"},{"level":3,"title":"组件中使用","slug":"组件中使用"},{"level":3,"title":"案例","slug":"案例"},{"level":3,"title":"其他说明","slug":"其他说明"}],"relativePath":"index.md","lastUpdated":1630225761831}',u=c('<h3 id="介绍"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>该插件基于 <a href="http://codemirror.net/" target="_blank" rel="noopener noreferrer">Codemirror</a>，仅支持 vue3 中使用。</p><h3 id="安装"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-npm"><pre><code>npm install codemirror-editor-vue3\n</code></pre></div><h3 id="全局安装"><a class="header-anchor" href="#全局安装" aria-hidden="true">#</a> 全局安装</h3><p><code>main.js:</code></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>\n<span class="token keyword">import</span> Codemirror <span class="token keyword">from</span> <span class="token string">&quot;codemirror-editor-vue3&quot;</span><span class="token punctuation">;</span>\n<span class="token comment">// plugin-style</span>\n<span class="token keyword">import</span> <span class="token string">&quot;codemirror-editor-vue3/dist/style.css&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Codemirror<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="组件中使用"><a class="header-anchor" href="#组件中使用" aria-hidden="true">#</a> 组件中使用</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Codemirror</span>\n    <span class="token attr-name"><span class="token namespace">v-model:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>code<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cmOptions<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">border</span>\n    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>测试 placeholder<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> Codemirror <span class="token keyword">from</span> <span class="token string">&quot;codemirror-editor-vue3&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// plugin-style</span>\n<span class="token keyword">import</span> <span class="token string">&quot;codemirror-editor-vue3/dist/style.css&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// language</span>\n<span class="token keyword">import</span> <span class="token string">&quot;codemirror/mode/javascript/javascript.js&quot;</span><span class="token punctuation">;</span>\n\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span> Codemirror <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\nvar i = 0;\nfor (; i &lt; 9; i++) {\n  console.log(i);\n  // more statements\n}</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      code<span class="token punctuation">,</span>\n      cmOptions<span class="token operator">:</span><span class="token punctuation">{</span>\n        mode<span class="token operator">:</span> <span class="token string">&#39;text/javascript&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 语言模式</span>\n        theme<span class="token operator">:</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 主题</span>\n        lineNumbers<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 显示行号</span>\n        smartIndent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 智能缩进</span>\n        indentUnit<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 智能缩进单位为4个空格长度</span>\n        foldGutter<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启用行槽中的代码折叠</span>\n        styleActiveLine<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 显示选中行的样式</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span> <span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="案例"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3>',10),i=c('<h3 id="其他说明"><a class="header-anchor" href="#其他说明" aria-hidden="true">#</a> 其他说明</h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>考虑插件需要引入以下基础样式（codemirror 官方样式），插件内部已经引入，不需要在使用时重复引入以下样式：</p></div><div class="language-js"><pre><code><span class="token comment">// base style</span>\n<span class="token keyword">import</span> <span class="token string">&quot;codemirror/lib/codemirror.css&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&quot;codemirror/mode/css/css.js&quot;</span><span class="token punctuation">;</span>\n</code></pre></div>',3);l.render=function(n,c,l,r,k,d){return s(),a("div",null,[u,t("p",null,[k.dynamicComponent?(s(),p(o(k.dynamicComponent),{key:0})):e("v-if",!0)]),i])};export{r as __pageData,l as default};
