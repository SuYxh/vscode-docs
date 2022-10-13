import{o as n,c as t,b as s}from"./app.d71e780f.js";const a='{"title":"package.json关键部分","description":"","frontmatter":{},"headers":[{"level":2,"title":"package.json关键部分","slug":"package-json关键部分"},{"level":2,"title":"extension.ts","slug":"extension-ts"},{"level":2,"title":"package.json详解","slug":"package-json详解"},{"level":3,"title":"activationEvents","slug":"activationevents"},{"level":3,"title":"contributes","slug":"contributes"},{"level":3,"title":"参考","slug":"参考"}],"relativePath":"guide/目录结构.md","lastUpdated":1665622375204}',o={},p=[s('<p>项目结构其实很简单，主要是<code>package.json</code>以及<code>extension.ts</code>这个插件入口文件：</p><p><img src="https://qn.huat.xyz/mac/20221012191704.png" alt="image-20221012191704129"></p><blockquote><p>脚手架创建出来的extension.ts，未修改过。</p></blockquote><h2 id="package-json关键部分"><code>package.json</code>关键部分</h2><div class="language-json"><pre><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;activationEvents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">&quot;onCommand:vscode-test.helloWorld&quot;</span>\n\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./out/extension.js&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;contributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;commands&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-test.helloWorld&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello World&quot;</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">]</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ul><li><code>main</code>定义了整个插件入口</li><li><code>onCommand</code>: 我们在<code>contributes.commands</code>里面注册了一个名为<code>vscode-test.helloWorld</code>的命令，并在<code>src/extension.ts</code>中去实现了它（弹出一个<code>Hello World</code>的提示）；但是仅仅这样还不够，命令虽然定义了，但是vscode还不知道啥时候去执行它，还需要在<code>activationEvents</code>添加上<code>onCommand:vscode-test.helloWorld</code>用来告诉vscode，当用户执行了这个命令操作时去执行我们写的代码</li><li>除了<code>onCommand</code>之外，还有<code>onView</code>、<code>onUri</code>、<code>onLanguage</code>等等，具体我们后面会详细讲到。</li></ul><h2 id="extension-ts"><code>extension.ts</code></h2><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> vscode <span class="token keyword">from</span> <span class="token string">&#39;vscode&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @description: 插件被激活时触发，所有代码总入口\n * @param {vscode} context 插件上下文\n * @return {*}\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">activate</span><span class="token punctuation">(</span>context<span class="token operator">:</span> vscode<span class="token punctuation">.</span>ExtensionContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\n\t<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Congratulations, your extension &quot;vscode-test&quot; is now active!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token keyword">let</span> disposable <span class="token operator">=</span> vscode<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">&#39;vscode-test.helloWorld&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t\tvscode<span class="token punctuation">.</span>window<span class="token punctuation">.</span><span class="token function">showInformationMessage</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World from vscode-test!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\tcontext<span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>disposable<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token comment">/**\n * @description: 插件被释放时触发\n * @return {*}\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">deactivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hi, your extension &quot;vscode-test&quot; is deactivated!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="package-json详解">package.json详解</h2><p>在详细介绍vscode插件开发细节之前，这里我们先详细介绍一下vscode插件的<code>package.json</code>写法，但是建议先只需要随便看一下，了解个大概，等后面讲到具体细节的时候再回过头来看。</p><p>如下是<code>package.json</code>文件的常用配置，当然这里还不是全部：</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n\t<span class="token comment">// 插件的名字，应全部小写，不能有空格</span>\n\t<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-test&quot;</span><span class="token punctuation">,</span>\n\t<span class="token comment">// 插件的友好显示名称，用于显示在应用市场，支持中文</span>\n\t<span class="token property">&quot;displayName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VSCode插件-摇&quot;</span><span class="token punctuation">,</span>\n\t<span class="token comment">// 描述</span>\n\t<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;一个学习的插件&quot;</span><span class="token punctuation">,</span>\n\t<span class="token comment">// 关键字，用于应用市场搜索</span>\n\t<span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vscode&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;plugin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t<span class="token comment">// 版本号</span>\n\t<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>\n\t<span class="token comment">// 发布者，如果要发布到应用市场的话，这个名字必须与发布者一致</span>\n\t<span class="token property">&quot;publisher&quot;</span><span class="token operator">:</span> <span class="token string">&quot;y170088888&quot;</span><span class="token punctuation">,</span>\n\t<span class="token comment">// 表示插件最低支持的vscode版本</span>\n\t<span class="token property">&quot;engines&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;vscode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.27.0&quot;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token comment">// 插件应用市场分类，可选值： [Programming Languages, Snippets, Linters, Themes, Debuggers, Formatters, Keymaps, SCM Providers, Other, Extension Packs, Language Packs]</span>\n\t<span class="token property">&quot;categories&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t<span class="token string">&quot;Other&quot;</span>\n\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t<span class="token comment">// 插件图标，至少128x128像素</span>\n\t<span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zz-fe.jpg&quot;</span><span class="token punctuation">,</span>\n\t<span class="token comment">// 扩展的激活事件数组，可以被哪些事件激活扩展，后文有详细介绍</span>\n\t<span class="token property">&quot;activationEvents&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t<span class="token string">&quot;onCommand:vscode-test.helloWorld&quot;</span>\n\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t<span class="token comment">// 插件的主入口</span>\n\t<span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./src/extension&quot;</span><span class="token punctuation">,</span>\n\t<span class="token comment">// 贡献点，整个插件最重要最多的配置项</span>\n\t<span class="token property">&quot;contributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token comment">// 插件配置项</span>\n\t\t<span class="token property">&quot;configuration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span>\n\t\t\t<span class="token comment">// 配置项标题，会显示在vscode的设置页</span>\n\t\t\t<span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-plugin-demo&quot;</span><span class="token punctuation">,</span>\n\t\t\t<span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token comment">// 这里我随便写了2个设置，配置你的昵称</span>\n\t\t\t\t<span class="token property">&quot;vscodePluginDemo.yourName&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;guest&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;你的名字&quot;</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token comment">// 是否在启动时显示提示</span>\n\t\t\t\t<span class="token property">&quot;vscodePluginDemo.showTip&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;boolean&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;是否在每次启动时显示欢迎提示！&quot;</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token comment">// 命令</span>\n\t\t<span class="token property">&quot;commands&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-test.helloWorld&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello World&quot;</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t<span class="token comment">// 快捷键绑定</span>\n\t\t<span class="token property">&quot;keybindings&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-test.helloWorld&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrl+f10&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;mac&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cmd+f10&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editorTextFocus&quot;</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t<span class="token comment">// 菜单</span>\n\t\t<span class="token property">&quot;menus&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token comment">// 编辑器右键菜单</span>\n\t\t\t<span class="token property">&quot;editor/context&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token comment">// 表示只有编辑器具有焦点时才会在菜单中出现</span>\n\t\t\t\t\t<span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editorFocus&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-test.helloWorld&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token comment">// navigation是一个永远置顶的分组，后面的@6是人工进行组内排序</span>\n\t\t\t\t\t<span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;navigation@6&quot;</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editorFocus&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;extension.demo.getCurrentFilePath&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;navigation@5&quot;</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token comment">// 只有编辑器具有焦点，并且打开的是JS文件才会出现</span>\n\t\t\t\t\t<span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editorFocus &amp;&amp; resourceLangId == javascript&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;extension.demo.testMenuShow&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;z_commands&quot;</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;extension.demo.openWebview&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;navigation&quot;</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t\t<span class="token comment">// 编辑器右上角图标，不配置图片就显示文字</span>\n\t\t\t<span class="token property">&quot;editor/title&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;editorFocus &amp;&amp; resourceLangId == javascript&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;extension.demo.testMenuShow&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;navigation&quot;</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t\t<span class="token comment">// 编辑器标题右键菜单</span>\n\t\t\t<span class="token property">&quot;editor/title/context&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;when&quot;</span><span class="token operator">:</span> <span class="token string">&quot;resourceLangId == javascript&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;extension.demo.testMenuShow&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;navigation&quot;</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t\t<span class="token comment">// 资源管理器右键菜单</span>\n\t\t\t<span class="token property">&quot;explorer/context&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;extension.demo.getCurrentFilePath&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;navigation&quot;</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;command&quot;</span><span class="token operator">:</span> <span class="token string">&quot;extension.demo.openWebview&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;navigation&quot;</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">]</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token comment">// 代码片段</span>\n\t\t<span class="token property">&quot;snippets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./snippets/javascript.json&quot;</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./snippets/html.json&quot;</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t<span class="token comment">// 自定义新的activitybar图标，也就是左侧侧边栏大的图标</span>\n\t\t<span class="token property">&quot;viewsContainers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token property">&quot;activitybar&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;beautifulGirl&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;美女&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;images/beautifulGirl.svg&quot;</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">]</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token comment">// 自定义侧边栏内view的实现</span>\n\t\t<span class="token property">&quot;views&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token comment">// 和 viewsContainers 的id对应</span>\n\t\t\t<span class="token property">&quot;beautifulGirl&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;beautifulGirl1&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;美女1&quot;</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;beautifulGirl2&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;美女2&quot;</span>\n\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t<span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;beautifulGirl3&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;美女3&quot;</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">]</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t<span class="token comment">// 图标主题</span>\n\t\t<span class="token property">&quot;iconThemes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t<span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;testIconTheme&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试图标主题&quot;</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./theme/icon-theme.json&quot;</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">]</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token comment">// 同 npm scripts</span>\n\t<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;postinstall&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./node_modules/vscode/bin/install&quot;</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./node_modules/vscode/bin/test&quot;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token comment">// 开发依赖</span>\n\t<span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.6.1&quot;</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;vscode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.1.6&quot;</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.11.0&quot;</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;@types/node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.0.43&quot;</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;@types/mocha&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.2.42&quot;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token comment">// 后面这几个应该不用介绍了</span>\n\t<span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SEE LICENSE IN LICENSE.txt&quot;</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;bugs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://gitee.com/ironc/vscode-pro&quot;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token property">&quot;repository&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n\t\t<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git&quot;</span><span class="token punctuation">,</span>\n\t\t<span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://gitee.com/ironc/vscode-pro&quot;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t<span class="token comment">// 主页</span>\n\t<span class="token property">&quot;homepage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://gitee.com/ironc/vscode-pro/blob/master/README.md&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="activationevents">activationEvents</h3><p>插件在<code>VS Code</code>中默认是没有被激活的，哪什么时候才被激活呢？就是通过<code>activationEvents</code>来配置，目前支持一下8种配置：</p><ul><li>onLanguage:${language}</li><li>onCommand:${command}</li><li>onDebug</li><li>workspaceContains:${toplevelfilename}</li><li>onFileSystem:${scheme}</li><li>onView:${viewId}</li><li>onUri</li><li><code>*</code></li></ul><p>都比较好懂，我就不做一一介绍了，举个例子，如果我配置了<code>onLanguage:javascript</code>，那么只要我打开了JS类型的文件，插件就会被激活。</p><p>重点说一下<code>*</code>，如果配置了<code>*</code>，只要一启动vscode，插件就会被激活，为了出色的用户体验，官方不推荐这么做。看到这里相信大家知道了我们前面HelloWord里面为啥要配置<code>onCommand</code>了吧。</p><h3 id="contributes">contributes</h3><ul><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-points#_contributesconfiguration" target="_blank" rel="noopener noreferrer"><code>configuration</code></a>：设置</li><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-points#_contributescommands" target="_blank" rel="noopener noreferrer"><code>commands</code></a>：命令</li><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-points#_contributesmenus" target="_blank" rel="noopener noreferrer"><code>menus</code></a>：菜单</li><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-points#_contributeskeybindings" target="_blank" rel="noopener noreferrer"><code>keybindings</code></a>：快捷键绑定</li><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-points#_contributeslanguages" target="_blank" rel="noopener noreferrer"><code>languages</code></a>：新语言支持</li><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-points#_contributesdebuggers" target="_blank" rel="noopener noreferrer"><code>debuggers</code></a>：调试</li><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-points#_contributesbreakpoints" target="_blank" rel="noopener noreferrer"><code>breakpoints</code></a>：断点</li><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-points#_contributesgrammars" target="_blank" rel="noopener noreferrer"><code>grammars</code></a></li><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-points#_contributesthemes" target="_blank" rel="noopener noreferrer"><code>themes</code></a>：主题</li><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-points#_contributessnippets" target="_blank" rel="noopener noreferrer"><code>snippets</code></a>：代码片段</li><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-points#_contributesjsonvalidation" target="_blank" rel="noopener noreferrer"><code>jsonValidation</code></a>：自定义JSON校验</li><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-points#_contributesviews" target="_blank" rel="noopener noreferrer"><code>views</code></a>：左侧侧边栏视图</li><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-points#_contributesviewscontainers" target="_blank" rel="noopener noreferrer"><code>viewsContainers</code></a>：自定义activitybar</li><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-points#_contributesproblemmatchers" target="_blank" rel="noopener noreferrer"><code>problemMatchers</code></a></li><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-points#_contributesproblempatterns" target="_blank" rel="noopener noreferrer"><code>problemPatterns</code></a></li><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-points#_contributestaskDefinitions" target="_blank" rel="noopener noreferrer"><code>taskDefinitions</code></a></li><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-points#_contributescolors" target="_blank" rel="noopener noreferrer"><code>colors</code></a></li></ul><h3 id="参考">参考</h3><ul><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-manifest" target="_blank" rel="noopener noreferrer">extension-manifest</a></li><li><a href="https://code.visualstudio.com/docs/extensionAPI/activation-events" target="_blank" rel="noopener noreferrer">activation-events</a></li><li><a href="https://code.visualstudio.com/docs/extensionAPI/extension-points" target="_blank" rel="noopener noreferrer">贡献点清单</a></li></ul>',21)];o.render=function(s,a,o,e,c,u){return n(),t("div",null,p)};export default o;export{a as __pageData};
