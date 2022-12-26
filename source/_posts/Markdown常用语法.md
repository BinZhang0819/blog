---
layout: post
title:      Markdown常用语法
date:        2022年12月26日12:20:53
index_img: /img/post-index-markdown-home.jpg
banner_img: /img/post-index-markdown-home.jpg
tags: 
    - 工具
categories: 
    - 技术
---

>转自：https://www.cnblogs.com/miki-peng/p/12502985.html

<h1 id="markdown-标题">Markdown 标题</h1>
<p>Markdown 标题有两种格式。</p>
<h2 id="使用--和---标记一级和二级标题">使用 = 和 - 标记一级和二级标题</h2>
<p>= 和 - 标记语法格式如下：</p>
<pre><code>我展示的是一级标题
=================

我展示的是二级标题
-----------------
</code></pre>
<p>显示效果如下图：</p>
<p><img src="https://images.cnblogs.com/cnblogs_com/miki-peng/1671561/o_200316041520image-20200218230129458.png" alt="" loading="lazy"></p>
<h2 id="使用--号标记">使用 # 号标记</h2>
<p>使用 <strong>#</strong> 号可表示 1-6 级标题，一级标题对应一个 <strong>#</strong> 号，二级标题对应两个 <strong>#</strong> 号，以此类推。</p>
<pre><code># 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
</code></pre>
<p>显示效果如下图：</p>
<p><img src="https://images.cnblogs.com/cnblogs_com/miki-peng/1671561/o_200316041525image-20200218230222368.png" alt="" loading="lazy"></p>
<h1 id="markdown-段落">Markdown 段落</h1>
<p>Markdown 段落没有特殊的格式，直接编写文字就好，<strong>段落的换行是使用两个以上空格加上回车</strong>。</p>
<p><img src="https://images.cnblogs.com/cnblogs_com/miki-peng/1671561/o_200316041530image-20191026101845235.png" alt="image-20191026101845235" loading="lazy"></p>
<h2 id="字体">字体</h2>
<p>Markdown 可以使用以下几种字体：</p>
<pre><code>*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___
</code></pre>
<p>效果如下：</p>
<p><em>斜体文本</em></p>
<p><em>斜体文本</em></p>
<p><strong>粗体文本</strong></p>
<p><strong>粗体文本</strong></p>
<p><em><strong>粗斜体文本</strong></em></p>
<p><em><strong>粗斜体文本</strong></em></p>
<h2 id="分隔线">分隔线</h2>
<p>你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：</p>
<pre><code>***

* * *

*****

- - -

----------
</code></pre>
<p>效果如下：</p>
<p>第一种</p>
<hr>
<p>第二种</p>
<hr>
<p>第三种</p>
<hr>
<p>第四种</p>
<hr>
<p>第五种</p>
<hr>
<h2 id="删除线">删除线</h2>
<p>如果段落上的文字要添加删除线，只需要在文字的两端加上两个波浪线 <strong>~~</strong> 即可，实例如下：</p>
<pre><code>RUNOOB.COM
GOOGLE.COM
~~BAIDU.COM~~
</code></pre>
<p>显示效果如下所示：</p>
<p>RUNOOB.COM</p>
<p>GOOGLE.COM</p>
<p><s>BAIDU.COM</s></p>
<h2 id="下划线">下划线</h2>
<p>下划线可以通过 HTML 的 &lt;u&gt;&lt;/u&gt; 标签来实现：</p>
<pre><code>&lt;u&gt;带下划线文本&lt;/u&gt;
</code></pre>
<p>显示效果如下所示：</p>
<p><u>带下划线文本</u></p>
<h2 id="脚注">脚注</h2>
<p>脚注是对文本的补充说明，Markdown 脚注的格式如下:</p>
<pre><code>[^要注明的文本]
</code></pre>
<p>以下实例演示了脚注的用法：</p>
<pre><code>创建脚注格式类似这样 [^RUNOOB]。

[^RUNOOB]: 菜鸟教程 -- 学的不仅是技术，更是梦想！！！
</code></pre>
<p>演示效果如下：</p>
<p>创建脚注格式类似这样 <sup class="footnote-ref"><a href="#fn1" id="fnref1" rel="noopener">[1]</a></sup>。</p>
<h1 id="markdown-列表">Markdown 列表</h1>
<h2 id="有序列表和无序列表">有序列表和无序列表</h2>
<p>Markdown 支持有序列表和无序列表。</p>
<p>无序列表使用星号(*)、加号(+)或是减号(-)作为列表标记：</p>
<pre><code>* 第一项
* 第二项
* 第三项
------ 分割线 ------
+ 第一项
+ 第二项
+ 第三项
------ 分割线 ------
- 第一项
- 第二项
- 第三项
</code></pre>
<p>显示结果如下：</p>
<ul>
<li>第一项</li>
<li>第二项</li>
<li>第三项<br>
------ 分割线 ------</li>
</ul>
<ul>
<li>第一项</li>
<li>第二项</li>
<li>第三项<br>
------ 分割线 ------</li>
</ul>
<ul>
<li>第一项</li>
<li>第二项</li>
<li>第三项</li>
</ul>
<p>有序列表使用数字并加上 <strong>.</strong> 号来表示，如：</p>
<pre><code>1. 第一项
2. 第二项
3. 第三项
</code></pre>
<p>显示结果如下：</p>
<ol>
<li>第一项</li>
<li>第二项</li>
<li>第三项</li>
</ol>
<h2 id="列表嵌套">列表嵌套</h2>
<p>列表嵌套只需在子列表中的选项添加四个空格即可：</p>
<pre><code>1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素
</code></pre>
<p>显示结果如下：</p>
<ol>
<li>第一项：
<ul>
<li>第一项嵌套的第一个元素</li>
<li>第一项嵌套的第二个元素</li>
</ul>
</li>
<li>第二项：
<ul>
<li>第二项嵌套的第一个元素</li>
<li>第二项嵌套的第二个元素</li>
</ul>
</li>
</ol>
<h1 id="markdown-区块">Markdown 区块</h1>
<h2 id="区别引用">区别引用</h2>
<p>Markdown 区块引用是在段落开头使用 <strong>&gt;</strong> 符号 ，然后后面紧跟一个<strong>空格</strong>符号：</p>
<pre><code>&gt; 区块引用
&gt; 菜鸟教程
&gt; 学的不仅是技术更是梦想
</code></pre>
<p>效果如下：</p>
<blockquote>
<p>区块引用<br>
菜鸟教程<br>
学的不仅是技术更是梦想</p>
</blockquote>
<h2 id="区块中使用列表">区块中使用列表</h2>
<p>区块中使用列表实例如下：</p>
<pre><code>&gt; 区块中使用列表
&gt; 1. 第一项
&gt; 2. 第二项
&gt; + 第一项
&gt; + 第二项
&gt; + 第三项
</code></pre>
<p>显示结果如下：</p>
<blockquote>
<p>区块中使用列表</p>
<ol>
<li>第一项</li>
<li>第二项</li>
</ol>
<ul>
<li>第一项</li>
<li>第二项</li>
<li>第三项</li>
</ul>
</blockquote>
<h2 id="列表中使用区块">列表中使用区块</h2>
<p>如果要在列表项目内放进区块，那么就需要在 <strong>&gt;</strong> 前添加四个空格的缩进。</p>
<p>区块中使用列表实例如下：</p>
<pre><code>* 第一项
    &gt; 菜鸟教程
    &gt; 学的不仅是技术更是梦想
* 第二项
</code></pre>
<p>显示结果如下：</p>
<ul>
<li>
<p>第一项</p>
<blockquote>
<p>菜鸟教程<br>
学的不仅是技术更是梦想</p>
</blockquote>
</li>
<li>
<p>第二项</p>
</li>
</ul>
<h1 id="markdown-代码">Markdown 代码</h1>
<h2 id="单行代码">单行代码</h2>
<p>如果是单行代码或段落上的一个函数或片段的代码可以用反引号把它包起来（<strong>`</strong>），例如：</p>
<pre><code>`printf()` 函数
</code></pre>
<p>显示结果如下：</p>
<p><code>printf()</code> 函数</p>
<h2 id="代码区块">代码区块</h2>
<p>代码区块使用三个反引号对<strong>```</strong> 包裹一段代码，并指定一种语言（也可以不指定）：</p>
<pre><code>​```python
class CaseData:
    """这是一个存放测试用例数据的类"""
    pass
​```
</code></pre>
<p>显示结果如下：</p>
<pre><code class="language-python">class CaseData:
    """这是一个存放测试用例数据的类"""
    pass
</code></pre>
<h1 id="markdown-链接">Markdown 链接</h1>
<h2 id="链接使用方法如下">链接使用方法如下：</h2>
<pre><code>[链接名称](链接地址)

或者

&lt;链接地址&gt;
</code></pre>
<p>例如：</p>
<p>这是一个链接 <a href="https://www.cnblogs.com/miki-peng" target="_blank" rel="noopener">miki的测试笔记</a></p>
<p>直接使用链接地址：</p>
<pre><code>&lt;https://www.cnblogs.com/miki-peng&gt;
</code></pre>
<p>显示结果如下：</p>
<p><a href="https://www.cnblogs.com/miki-peng" target="_blank" rel="noopener">https://www.cnblogs.com/miki-peng</a></p>
<h2 id="高级链接">高级链接</h2>
<pre><code>链接也可以用变量来代替，文档末尾附带变量地址：
这个链接用 1 作为网址变量 [Google][1]
这个链接用 runoob 作为网址变量 [Runoob][runoob]
然后在文档的结尾为变量赋值（网址）

  [1]: http://www.google.com/
  [runoob]: http://www.runoob.com/
</code></pre>
<p>显示结果如下：</p>
<p>链接也可以用变量来代替，文档末尾附带变量地址：</p>
<p>这个链接用 1 作为网址变量 <a href="http://www.google.com/" target="_blank" rel="noopener">Google</a></p>
<p>这个链接用 runoob 作为网址变量 <a href="http://www.runoob.com/" target="_blank" rel="noopener">Runoob</a></p>
<p>然后在文档的结尾为变量赋值（网址）</p>
<h1 id="markdown-图片">Markdown 图片</h1>
<p>Markdown 图片语法格式如下</p>
<pre><code>![alt 属性文本](图片地址)

![alt 属性文本](图片地址 "可选标题")
</code></pre>
<ul>
<li>开头一个感叹号 !</li>
<li>接着一个方括号，里面放上图片的替代文字</li>
<li>接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上选择性的 'title' 属性的文字。</li>
</ul>
<p>使用实例：</p>
<pre><code>![RUNOOB 图标](https://www.cnblogs.com/images/logo_small.gif)

![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png "RUNOOB")
</code></pre>
<p>显示结果如下：</p>
<p><img src="http://static.runoob.com/images/runoob-logo.png" alt="RUNOOB 图标" loading="lazy"></p>
<p><img src="http://static.runoob.com/images/runoob-logo.png" alt="RUNOOB 图标" title="RUNOOB" loading="lazy"></p>
<p>当然，你也可以像网址那样对图片网址使用变量:</p>
<pre><code>这个链接用 1 作为网址变量 [RUNOOB][1].
然后在文档的结尾位变量赋值（网址）

[1]: http://static.runoob.com/images/runoob-logo.png
</code></pre>
<p>显示结果如下：</p>
<p>这个链接用 1 作为网址变量 <a href="http://www.google.com/" target="_blank" rel="noopener">RUNOOB</a>.</p>
<p>然后在文档的结尾位变量赋值（网址）</p>
<p>Markdown 还没有办法指定图片的高度与宽度，如果你需要的话，你可以使用普通的 <img> 标签。</p>
<pre><code>&lt;img src="http://static.runoob.com/images/runoob-logo.png" width="50%"&gt;
</code></pre>
<p>显示结果如下：</p>
<img src="http://static.runoob.com/images/runoob-logo.png" width="50%">
<h1 id="markdown-表格">Markdown 表格</h1>
<p>Markdown 制作表格使用 <strong>|</strong> 来分隔不同的单元格，使用 <strong>-</strong> 来分隔表头和其他行。</p>
<p>语法格式如下：</p>
<pre><code>|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |
</code></pre>
<p>以上代码显示结果如下：</p>
<table>
<thead>
<tr>
<th>表头</th>
<th>表头</th>
</tr>
</thead>
<tbody>
<tr>
<td>单元格</td>
<td>单元格</td>
</tr>
<tr>
<td>单元格</td>
<td>单元格</td>
</tr>
</tbody>
</table>
<p>对齐方式</p>
<p><strong>我们可以设置表格的对齐方式：</strong></p>
<ul>
<li><strong>-:</strong> 设置内容和标题栏居右对齐。</li>
<li><strong>:-</strong> 设置内容和标题栏居左对齐。</li>
<li><strong>:-:</strong> 设置内容和标题栏居中对齐。</li>
</ul>
<p>实例如下：</p>
<pre><code>| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
</code></pre>
<p>以上代码显示结果如下：</p>
<table>
<thead>
<tr>
<th style="text-align: left">左对齐</th>
<th style="text-align: right">右对齐</th>
<th style="text-align: center">居中对齐</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left">单元格</td>
<td style="text-align: right">单元格</td>
<td style="text-align: center">单元格</td>
</tr>
<tr>
<td style="text-align: left">单元格</td>
<td style="text-align: right">单元格</td>
<td style="text-align: center">单元格</td>
</tr>
</tbody>
</table>
<h1 id="markdown-高级技巧">Markdown 高级技巧</h1>
<h2 id="支持的-html-元素">支持的 HTML 元素</h2>
<p>不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。</p>
<p>目前支持的 HTML 元素有：<code>     </code> 等 ，如：</p>
<pre><code>使用 &lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;Alt&lt;/kbd&gt;+&lt;kbd&gt;Del&lt;/kbd&gt; 重启电脑
</code></pre>
<p>输出结果为：</p>
<p>使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑</p>
<h2 id="转义">转义</h2>
<p>Markdown 使用了很多特殊符号来表示特定的意义，如果需要显示特定的符号则需要使用转义字符，Markdown 使用反斜杠转义特殊字符：</p>
<pre><code>**文本加粗** 
\*\* 正常显示星号 \*\*
</code></pre>
<p>输出结果为：</p>
<p><strong>文本加粗</strong></p>
<p>** 正常显示星号 **</p>
<p>Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：</p>
<pre><code>\   反斜线
`   反引号
*   星号
_   下划线
{}  花括号
[]  方括号
()  小括号
#   井字号
+   加号
-   减号
.   英文句点
!   感叹号
</code></pre>
<h2 id="公式">公式</h2>
<p>当你需要在编辑器中插入数学公式时，可以使用两个美元符<code>$$</code>包裹<strong>TeX</strong>或<strong>LaTeX</strong>格式的数学公式来实现。提交后，问答和文章页会根据需要加载 Mathjax 对数学公式进行渲染。如果是在博客园用公式，需要到自己的博客园：管理》选项，勾选“启用数学公式支持”；如果是在typora软件：文件》偏好设置》markdown》扩展语法，勾选“内联公式”；其他的md编辑器应该也是差不多需要去设置渲染公式，不然显示不出来。</p>
<p>公式的用法太多了，需要的可以自行去研究，这个挺全的<a href="https://www.zybuluo.com/codeep/note/163962#mjx-eqn-eqsample" target="_blank" rel="noopener">https://www.zybuluo.com/codeep/note/163962#mjx-eqn-eqsample</a>，下面列举一个比较简单的：</p>
<pre><code>$$ J_\alpha(x) = \sum_{m=0}^\infty \frac{(-1)^m}{m! \Gamma (m + \alpha + 1)} {\left({ \frac{x}{2} }\right)}^{2m + \alpha} \text {，独立公式示例} $$
</code></pre>
<p>输出结果为：</p>
<p></p><div class="math display">\[J_\alpha(x) = \sum_{m=0}^\infty \frac{(-1)^m}{m! \Gamma (m + \alpha + 1)} {\left({ \frac{x}{2} }\right)}^{2m + \alpha} \text {，独立公式示例} 
\]</div><p></p><h1 id="文字颜色大小字体">文字颜色、大小、字体</h1>
<h2 id="颜色">颜色</h2>
<p>在markdown中采用如下方式能够控制文字的颜色：</p>
<pre><code>&lt;font color="#dd0000"&gt;文字颜色预览&lt;/font&gt;
</code></pre>
<p>效果如下：</p>
<p><font color="#dd0000">文字颜色预览</font></p>
<p>颜色名列表：</p>
<table><tbody><tr><th>颜色名</th><th>十六进制颜色值</th><th>颜色</th></tr><tr><td><font color="AliceBlue">AliceBlue</font></td><td><font color="#F0F8FF">#F0F8FF</font></td><td bgcolor="#F0F8FF">rgb(240, 248, 255)</td></tr><tr><td><font color="AntiqueWhite">AntiqueWhite</font></td><td><font color="#FAEBD7">#FAEBD7</font></td><td bgcolor="#FAEBD7">rgb(250, 235, 215)</td></tr><tr><td><font color="Aqua">Aqua</font></td><td><font color="#00FFFF">#00FFFF</font></td><td bgcolor="#00FFFF">rgb(0, 255, 255)</td></tr><tr><td><font color="Aquamarine">Aquamarine</font></td><td><font color="#7FFFD4">#7FFFD4</font></td><td bgcolor="#7FFFD4">rgb(127, 255, 212)</td></tr><tr><td><font color="Azure">Azure</font></td><td><font color="#F0FFFF">#F0FFFF</font></td><td bgcolor="#F0FFFF">rgb(240, 255, 255)</td></tr><tr><td><font color="Beige">Beige</font></td><td><font color="#F5F5DC">#F5F5DC</font></td><td bgcolor="#F5F5DC">rgb(245, 245, 220)</td></tr><tr><td><font color="Bisque">Bisque</font></td><td><font color="#FFE4C4">#FFE4C4</font></td><td bgcolor="#FFE4C4">rgb(255, 228, 196)</td></tr><tr><td><font color="Black">Black</font></td><td><font color="#000000">#000000</font></td><td bgcolor="#000000">rgb(0, 0, 0)</td></tr><tr><td><font color="BlanchedAlmond">BlanchedAlmond</font></td><td><font color="#FFEBCD">#FFEBCD</font></td><td bgcolor="#FFEBCD">rgb(255, 235, 205)</td></tr><tr><td><font color="Blue">Blue</font></td><td><font color="#0000FF">#0000FF</font></td><td bgcolor="#0000FF">rgb(0, 0, 255)</td></tr><tr><td><font color="BlueViolet">BlueViolet</font></td><td><font color="#8A2BE2">#8A2BE2</font></td><td bgcolor="#8A2BE2">rgb(138, 43, 226)</td></tr><tr><td><font color="Brown">Brown</font></td><td><font color="#A52A2A">#A52A2A</font></td><td bgcolor="#A52A2A">rgb(165, 42, 42)</td></tr><tr><td><font color="BurlyWood">BurlyWood</font></td><td><font color="#DEB887">#DEB887</font></td><td bgcolor="#DEB887">rgb(222, 184, 135)</td></tr><tr><td><font color="CadetBlue">CadetBlue</font></td><td><font color="#5F9EA0">#5F9EA0</font></td><td bgcolor="#5F9EA0">rgb(95, 158, 160)</td></tr><tr><td><font color="Chartreuse">Chartreuse</font></td><td><font color="#7FFF00">#7FFF00</font></td><td bgcolor="#7FFF00">rgb(127, 255, 0)</td></tr><tr><td><font color="Chocolate">Chocolate</font></td><td><font color="#D2691E">#D2691E</font></td><td bgcolor="#D2691E">rgb(210, 105, 30)</td></tr><tr><td><font color="Coral">Coral</font></td><td><font color="#FF7F50">#FF7F50</font></td><td bgcolor="#FF7F50">rgb(255, 127, 80)</td></tr><tr><td><font color="CornflowerBlue">CornflowerBlue</font></td><td><font color="#6495ED">#6495ED</font></td><td bgcolor="#6495ED">rgb(100, 149, 237)</td></tr><tr><td><font color="Cornsilk">Cornsilk</font></td><td><font color="#FFF8DC">#FFF8DC</font></td><td bgcolor="#FFF8DC">rgb(255, 248, 220)</td></tr><tr><td><font color="Crimson">Crimson</font></td><td><font color="#DC143C">#DC143C</font></td><td bgcolor="#DC143C">rgb(220, 20, 60)</td></tr><tr><td><font color="Cyan">Cyan</font></td><td><font color="#00FFFF">#00FFFF</font></td><td bgcolor="#00FFFF">rgb(0, 255, 255)</td></tr><tr><td><font color="DarkBlue">DarkBlue</font></td><td><font color="#00008B">#00008B</font></td><td bgcolor="#00008B">rgb(0, 0, 139)</td></tr><tr><td><font color="DarkCyan">DarkCyan</font></td><td><font color="#008B8B">#008B8B</font></td><td bgcolor="#008B8B">rgb(0, 139, 139)</td></tr><tr><td><font color="DarkGoldenRod">DarkGoldenRod</font></td><td><font color="#B8860B">#B8860B</font></td><td bgcolor="#B8860B">rgb(184, 134, 11)</td></tr><tr><td><font color="DarkGray">DarkGray</font></td><td><font color="#A9A9A9">#A9A9A9</font></td><td bgcolor="#A9A9A9">rgb(169, 169, 169)</td></tr><tr><td><font color="DarkGreen">DarkGreen</font></td><td><font color="#006400">#006400</font></td><td bgcolor="#006400">rgb(0, 100, 0)</td></tr><tr><td><font color="DarkKhaki">DarkKhaki</font></td><td><font color="#BDB76B">#BDB76B</font></td><td bgcolor="#BDB76B">rgb(189, 183, 107)</td></tr><tr><td><font color="DarkMagenta">DarkMagenta</font></td><td><font color="#8B008B">#8B008B</font></td><td bgcolor="#8B008B">rgb(139, 0, 139)</td></tr><tr><td><font color="DarkOliveGreen">DarkOliveGreen</font></td><td><font color="#556B2F">#556B2F</font></td><td bgcolor="#556B2F">rgb(85, 107, 47)</td></tr><tr><td><font color="Darkorange">Darkorange</font></td><td><font color="#FF8C00">#FF8C00</font></td><td bgcolor="#FF8C00">rgb(255, 140, 0)</td></tr><tr><td><font color="DarkOrchid">DarkOrchid</font></td><td><font color="#9932CC">#9932CC</font></td><td bgcolor="#9932CC">rgb(153, 50, 204)</td></tr><tr><td><font color="DarkRed">DarkRed</font></td><td><font color="#8B0000">#8B0000</font></td><td bgcolor="#8B0000">rgb(139, 0, 0)</td></tr><tr><td><font color="DarkSalmon">DarkSalmon</font></td><td><font color="#E9967A">#E9967A</font></td><td bgcolor="#E9967A">rgb(233, 150, 122)</td></tr><tr><td><font color="DarkSeaGreen">DarkSeaGreen</font></td><td><font color="#8FBC8F">#8FBC8F</font></td><td bgcolor="#8FBC8F">rgb(143, 188, 143)</td></tr><tr><td><font color="DarkSlateBlue">DarkSlateBlue</font></td><td><font color="#483D8B">#483D8B</font></td><td bgcolor="#483D8B">rgb(72, 61, 139)</td></tr><tr><td><font color="DarkSlateGray">DarkSlateGray</font></td><td><font color="#2F4F4F">#2F4F4F</font></td><td bgcolor="#2F4F4F">rgb(47, 79, 79)</td></tr><tr><td><font color="DarkTurquoise">DarkTurquoise</font></td><td><font color="#00CED1">#00CED1</font></td><td bgcolor="#00CED1">rgb(0, 206, 209)</td></tr><tr><td><font color="DarkViolet">DarkViolet</font></td><td><font color="#9400D3">#9400D3</font></td><td bgcolor="#9400D3">rgb(148, 0, 211)</td></tr><tr><td><font color="DeepPink">DeepPink</font></td><td><font color="#FF1493">#FF1493</font></td><td bgcolor="#FF1493">rgb(255, 20, 147)</td></tr><tr><td><font color="DeepSkyBlue">DeepSkyBlue</font></td><td><font color="#00BFFF">#00BFFF</font></td><td bgcolor="#00BFFF">rgb(0, 191, 255)</td></tr><tr><td><font color="DimGray">DimGray</font></td><td><font color="#696969">#696969</font></td><td bgcolor="#696969">rgb(105, 105, 105)</td></tr><tr><td><font color="DodgerBlue">DodgerBlue</font></td><td><font color="#1E90FF">#1E90FF</font></td><td bgcolor="#1E90FF">rgb(30, 144, 255)</td></tr><tr><td><font color="Feldspar">Feldspar</font></td><td><font color="#D19275">#D19275</font></td><td bgcolor="#D19275">rgb(209, 146, 117)</td></tr><tr><td><font color="FireBrick">FireBrick</font></td><td><font color="#B22222">#B22222</font></td><td bgcolor="#B22222">rgb(178, 34, 34)</td></tr><tr><td><font color="FloralWhite">FloralWhite</font></td><td><font color="#FFFAF0">#FFFAF0</font></td><td bgcolor="#FFFAF0">rgb(255, 250, 240)</td></tr><tr><td><font color="ForestGreen">ForestGreen</font></td><td><font color="#228B22">#228B22</font></td><td bgcolor="#228B22">rgb(34, 139, 34)</td></tr><tr><td><font color="Fuchsia">Fuchsia</font></td><td><font color="#FF00FF">#FF00FF</font></td><td bgcolor="#FF00FF">rgb(255, 0, 255)</td></tr><tr><td><font color="Gainsboro">Gainsboro</font></td><td><font color="#DCDCDC">#DCDCDC</font></td><td bgcolor="#DCDCDC">rgb(220, 220, 220)</td></tr><tr><td><font color="GhostWhite">GhostWhite</font></td><td><font color="#F8F8FF">#F8F8FF</font></td><td bgcolor="#F8F8FF">rgb(248, 248, 255)</td></tr><tr><td><font color="Gold">Gold</font></td><td><font color="#FFD700">#FFD700</font></td><td bgcolor="#FFD700">rgb(255, 215, 0)</td></tr><tr><td><font color="GoldenRod">GoldenRod</font></td><td><font color="#DAA520">#DAA520</font></td><td bgcolor="#DAA520">rgb(218, 165, 32)</td></tr><tr><td><font color="Gray">Gray</font></td><td><font color="#808080">#808080</font></td><td bgcolor="#808080">rgb(128, 128, 128)</td></tr><tr><td><font color="Green">Green</font></td><td><font color="#008000">#008000</font></td><td bgcolor="#008000">rgb(0, 128, 0)</td></tr><tr><td><font color="GreenYellow">GreenYellow</font></td><td><font color="#ADFF2F">#ADFF2F</font></td><td bgcolor="#ADFF2F">rgb(173, 255, 47)</td></tr><tr><td><font color="HoneyDew">HoneyDew</font></td><td><font color="#F0FFF0">#F0FFF0</font></td><td bgcolor="#F0FFF0">rgb(240, 255, 240)</td></tr><tr><td><font color="HotPink">HotPink</font></td><td><font color="#FF69B4">#FF69B4</font></td><td bgcolor="#FF69B4">rgb(255, 105, 180)</td></tr><tr><td><font color="IndianRed">IndianRed</font></td><td><font color="#CD5C5C">#CD5C5C</font></td><td bgcolor="#CD5C5C">rgb(205, 92, 92)</td></tr><tr><td><font color="Indigo">Indigo</font></td><td><font color="#4B0082">#4B0082</font></td><td bgcolor="#4B0082">rgb(75, 0, 130)</td></tr><tr><td><font color="Ivory">Ivory</font></td><td><font color="#FFFFF0">#FFFFF0</font></td><td bgcolor="#FFFFF0">rgb(255, 255, 240)</td></tr><tr><td><font color="Khaki">Khaki</font></td><td><font color="#F0E68C">#F0E68C</font></td><td bgcolor="#F0E68C">rgb(240, 230, 140)</td></tr><tr><td><font color="Lavender">Lavender</font></td><td><font color="#E6E6FA">#E6E6FA</font></td><td bgcolor="#E6E6FA">rgb(230, 230, 250)</td></tr><tr><td><font color="LavenderBlush">LavenderBlush</font></td><td><font color="#FFF0F5">#FFF0F5</font></td><td bgcolor="#FFF0F5">rgb(255, 240, 245)</td></tr><tr><td><font color="LawnGreen">LawnGreen</font></td><td><font color="#7CFC00">#7CFC00</font></td><td bgcolor="#7CFC00">rgb(124, 252, 0)</td></tr><tr><td><font color="LemonChiffon">LemonChiffon</font></td><td><font color="#FFFACD">#FFFACD</font></td><td bgcolor="#FFFACD">rgb(255, 250, 205)</td></tr><tr><td><font color="LightBlue">LightBlue</font></td><td><font color="#ADD8E6">#ADD8E6</font></td><td bgcolor="#ADD8E6">rgb(173, 216, 230)</td></tr><tr><td><font color="LightCoral">LightCoral</font></td><td><font color="#F08080">#F08080</font></td><td bgcolor="#F08080">rgb(240, 128, 128)</td></tr><tr><td><font color="LightCyan">LightCyan</font></td><td><font color="#E0FFFF">#E0FFFF</font></td><td bgcolor="#E0FFFF">rgb(224, 255, 255)</td></tr><tr><td><font color="LightGoldenRodYellow">LightGoldenRodYellow</font></td><td><font color="#FAFAD2">#FAFAD2</font></td><td bgcolor="#FAFAD2">rgb(250, 250, 210)</td></tr><tr><td><font color="LightGrey">LightGrey</font></td><td><font color="#D3D3D3">#D3D3D3</font></td><td bgcolor="#D3D3D3">rgb(211, 211, 211)</td></tr><tr><td><font color="LightGreen">LightGreen</font></td><td><font color="#90EE90">#90EE90</font></td><td bgcolor="#90EE90">rgb(144, 238, 144)</td></tr><tr><td><font color="LightPink">LightPink</font></td><td><font color="#FFB6C1">#FFB6C1</font></td><td bgcolor="#FFB6C1">rgb(255, 182, 193)</td></tr><tr><td><font color="LightSalmon">LightSalmon</font></td><td><font color="#FFA07A">#FFA07A</font></td><td bgcolor="#FFA07A">rgb(255, 160, 122)</td></tr><tr><td><font color="LightSeaGreen">LightSeaGreen</font></td><td><font color="#20B2AA">#20B2AA</font></td><td bgcolor="#20B2AA">rgb(32, 178, 170)</td></tr><tr><td><font color="LightSkyBlue">LightSkyBlue</font></td><td><font color="#87CEFA">#87CEFA</font></td><td bgcolor="#87CEFA">rgb(135, 206, 250)</td></tr><tr><td><font color="LightSlateBlue">LightSlateBlue</font></td><td><font color="#8470FF">#8470FF</font></td><td bgcolor="#8470FF">rgb(132, 112, 255)</td></tr><tr><td><font color="LightSlateGray">LightSlateGray</font></td><td><font color="#778899">#778899</font></td><td bgcolor="#778899">rgb(119, 136, 153)</td></tr><tr><td><font color="LightSteelBlue">LightSteelBlue</font></td><td><font color="#B0C4DE">#B0C4DE</font></td><td bgcolor="#B0C4DE">rgb(176, 196, 222)</td></tr><tr><td><font color="LightYellow">LightYellow</font></td><td><font color="#FFFFE0">#FFFFE0</font></td><td bgcolor="#FFFFE0">rgb(255, 255, 224)</td></tr><tr><td><font color="Lime">Lime</font></td><td><font color="#00FF00">#00FF00</font></td><td bgcolor="#00FF00">rgb(0, 255, 0)</td></tr><tr><td><font color="LimeGreen">LimeGreen</font></td><td><font color="#32CD32">#32CD32</font></td><td bgcolor="#32CD32">rgb(50, 205, 50)</td></tr><tr><td><font color="Linen">Linen</font></td><td><font color="#FAF0E6">#FAF0E6</font></td><td bgcolor="#FAF0E6">rgb(250, 240, 230)</td></tr><tr><td><font color="Magenta">Magenta</font></td><td><font color="#FF00FF">#FF00FF</font></td><td bgcolor="#FF00FF">rgb(255, 0, 255)</td></tr><tr><td><font color="Maroon">Maroon</font></td><td><font color="#800000">#800000</font></td><td bgcolor="#800000">rgb(128, 0, 0)</td></tr><tr><td><font color="MediumAquaMarine">MediumAquaMarine</font></td><td><font color="#66CDAA">#66CDAA</font></td><td bgcolor="#66CDAA">rgb(102, 205, 170)</td></tr><tr><td><font color="MediumBlue">MediumBlue</font></td><td><font color="#0000CD">#0000CD</font></td><td bgcolor="#0000CD">rgb(0, 0, 205)</td></tr><tr><td><font color="MediumOrchid">MediumOrchid</font></td><td><font color="#BA55D3">#BA55D3</font></td><td bgcolor="#BA55D3">rgb(186, 85, 211)</td></tr><tr><td><font color="MediumPurple">MediumPurple</font></td><td><font color="#9370D8">#9370D8</font></td><td bgcolor="#9370D8">rgb(147, 112, 216)</td></tr><tr><td><font color="MediumSeaGreen">MediumSeaGreen</font></td><td><font color="#3CB371">#3CB371</font></td><td bgcolor="#3CB371">rgb(60, 179, 113)</td></tr><tr><td><font color="MediumSlateBlue">MediumSlateBlue</font></td><td><font color="#7B68EE">#7B68EE</font></td><td bgcolor="#7B68EE">rgb(123, 104, 238)</td></tr><tr><td><font color="MediumSpringGreen">MediumSpringGreen</font></td><td><font color="#00FA9A">#00FA9A</font></td><td bgcolor="#00FA9A">rgb(0, 250, 154)</td></tr><tr><td><font color="MediumTurquoise">MediumTurquoise</font></td><td><font color="#48D1CC">#48D1CC</font></td><td bgcolor="#48D1CC">rgb(72, 209, 204)</td></tr><tr><td><font color="MediumVioletRed">MediumVioletRed</font></td><td><font color="#C71585">#C71585</font></td><td bgcolor="#C71585">rgb(199, 21, 133)</td></tr><tr><td><font color="MidnightBlue">MidnightBlue</font></td><td><font color="#191970">#191970</font></td><td bgcolor="#191970">rgb(25, 25, 112)</td></tr><tr><td><font color="MintCream">MintCream</font></td><td><font color="#F5FFFA">#F5FFFA</font></td><td bgcolor="#F5FFFA">rgb(245, 255, 250)</td></tr><tr><td><font color="MistyRose">MistyRose</font></td><td><font color="#FFE4E1">#FFE4E1</font></td><td bgcolor="#FFE4E1">rgb(255, 228, 225)</td></tr><tr><td><font color="Moccasin">Moccasin</font></td><td><font color="#FFE4B5">#FFE4B5</font></td><td bgcolor="#FFE4B5">rgb(255, 228, 181)</td></tr><tr><td><font color="NavajoWhite">NavajoWhite</font></td><td><font color="#FFDEAD">#FFDEAD</font></td><td bgcolor="#FFDEAD">rgb(255, 222, 173)</td></tr><tr><td><font color="Navy">Navy</font></td><td><font color="#000080">#000080</font></td><td bgcolor="#000080">rgb(0, 0, 128)</td></tr><tr><td><font color="OldLace">OldLace</font></td><td><font color="#FDF5E6">#FDF5E6</font></td><td bgcolor="#FDF5E6">rgb(253, 245, 230)</td></tr><tr><td><font color="Olive">Olive</font></td><td><font color="#808000">#808000</font></td><td bgcolor="#808000">rgb(128, 128, 0)</td></tr><tr><td><font color="OliveDrab">OliveDrab</font></td><td><font color="#6B8E23">#6B8E23</font></td><td bgcolor="#6B8E23">rgb(107, 142, 35)</td></tr><tr><td><font color="Orange">Orange</font></td><td><font color="#FFA500">#FFA500</font></td><td bgcolor="#FFA500">rgb(255, 165, 0)</td></tr><tr><td><font color="OrangeRed">OrangeRed</font></td><td><font color="#FF4500">#FF4500</font></td><td bgcolor="#FF4500">rgb(255, 69, 0)</td></tr><tr><td><font color="Orchid">Orchid</font></td><td><font color="#DA70D6">#DA70D6</font></td><td bgcolor="#DA70D6">rgb(218, 112, 214)</td></tr><tr><td><font color="PaleGoldenRod">PaleGoldenRod</font></td><td><font color="#EEE8AA">#EEE8AA</font></td><td bgcolor="#EEE8AA">rgb(238, 232, 170)</td></tr><tr><td><font color="PaleGreen">PaleGreen</font></td><td><font color="#98FB98">#98FB98</font></td><td bgcolor="#98FB98">rgb(152, 251, 152)</td></tr><tr><td><font color="PaleTurquoise">PaleTurquoise</font></td><td><font color="#AFEEEE">#AFEEEE</font></td><td bgcolor="#AFEEEE">rgb(175, 238, 238)</td></tr><tr><td><font color="PaleVioletRed">PaleVioletRed</font></td><td><font color="#D87093">#D87093</font></td><td bgcolor="#D87093">rgb(216, 112, 147)</td></tr><tr><td><font color="PapayaWhip">PapayaWhip</font></td><td><font color="#FFEFD5">#FFEFD5</font></td><td bgcolor="#FFEFD5">rgb(255, 239, 213)</td></tr><tr><td><font color="PeachPuff">PeachPuff</font></td><td><font color="#FFDAB9">#FFDAB9</font></td><td bgcolor="#FFDAB9">rgb(255, 218, 185)</td></tr><tr><td><font color="Peru">Peru</font></td><td><font color="#CD853F">#CD853F</font></td><td bgcolor="#CD853F">rgb(205, 133, 63)</td></tr><tr><td><font color="Pink">Pink</font></td><td><font color="#FFC0CB">#FFC0CB</font></td><td bgcolor="#FFC0CB">rgb(255, 192, 203)</td></tr><tr><td><font color="Plum">Plum</font></td><td><font color="#DDA0DD">#DDA0DD</font></td><td bgcolor="#DDA0DD">rgb(221, 160, 221)</td></tr><tr><td><font color="PowderBlue">PowderBlue</font></td><td><font color="#B0E0E6">#B0E0E6</font></td><td bgcolor="#B0E0E6">rgb(176, 224, 230)</td></tr><tr><td><font color="Purple">Purple</font></td><td><font color="#800080">#800080</font></td><td bgcolor="#800080">rgb(128, 0, 128)</td></tr><tr><td><font color="Red">Red</font></td><td><font color="#FF0000">#FF0000</font></td><td bgcolor="#FF0000">rgb(255, 0, 0)</td></tr><tr><td><font color="RosyBrown">RosyBrown</font></td><td><font color="#BC8F8F">#BC8F8F</font></td><td bgcolor="#BC8F8F">rgb(188, 143, 143)</td></tr><tr><td><font color="RoyalBlue">RoyalBlue</font></td><td><font color="#4169E1">#4169E1</font></td><td bgcolor="#4169E1">rgb(65, 105, 225)</td></tr><tr><td><font color="SaddleBrown">SaddleBrown</font></td><td><font color="#8B4513">#8B4513</font></td><td bgcolor="#8B4513">rgb(139, 69, 19)</td></tr><tr><td><font color="Salmon">Salmon</font></td><td><font color="#FA8072">#FA8072</font></td><td bgcolor="#FA8072">rgb(250, 128, 114)</td></tr><tr><td><font color="SandyBrown">SandyBrown</font></td><td><font color="#F4A460">#F4A460</font></td><td bgcolor="#F4A460">rgb(244, 164, 96)</td></tr><tr><td><font color="SeaGreen">SeaGreen</font></td><td><font color="#2E8B57">#2E8B57</font></td><td bgcolor="#2E8B57">rgb(46, 139, 87)</td></tr><tr><td><font color="SeaShell">SeaShell</font></td><td><font color="#FFF5EE">#FFF5EE</font></td><td bgcolor="#FFF5EE">rgb(255, 245, 238)</td></tr><tr><td><font color="Sienna">Sienna</font></td><td><font color="#A0522D">#A0522D</font></td><td bgcolor="#A0522D">rgb(160, 82, 45)</td></tr><tr><td><font color="Silver">Silver</font></td><td><font color="#C0C0C0">#C0C0C0</font></td><td bgcolor="#C0C0C0">rgb(192, 192, 192)</td></tr><tr><td><font color="SkyBlue">SkyBlue</font></td><td><font color="#87CEEB">#87CEEB</font></td><td bgcolor="#87CEEB">rgb(135, 206, 235)</td></tr><tr><td><font color="SlateBlue">SlateBlue</font></td><td><font color="#6A5ACD">#6A5ACD</font></td><td bgcolor="#6A5ACD">rgb(106, 90, 205)</td></tr><tr><td><font color="SlateGray">SlateGray</font></td><td><font color="#708090">#708090</font></td><td bgcolor="#708090">rgb(112, 128, 144)</td></tr><tr><td><font color="Snow">Snow</font></td><td><font color="#FFFAFA">#FFFAFA</font></td><td bgcolor="#FFFAFA">rgb(255, 250, 250)</td></tr><tr><td><font color="SpringGreen">SpringGreen</font></td><td><font color="#00FF7F">#00FF7F</font></td><td bgcolor="#00FF7F">rgb(0, 255, 127)</td></tr><tr><td><font color="SteelBlue">SteelBlue</font></td><td><font color="#4682B4">#4682B4</font></td><td bgcolor="#4682B4">rgb(70, 130, 180)</td></tr><tr><td><font color="Tan">Tan</font></td><td><font color="#D2B48C">#D2B48C</font></td><td bgcolor="#D2B48C">rgb(210, 180, 140)</td></tr><tr><td><font color="Teal">Teal</font></td><td><font color="#008080">#008080</font></td><td bgcolor="#008080">rgb(0, 128, 128)</td></tr><tr><td><font color="Thistle">Thistle</font></td><td><font color="#D8BFD8">#D8BFD8</font></td><td bgcolor="#D8BFD8">rgb(216, 191, 216)</td></tr><tr><td><font color="Tomato">Tomato</font></td><td><font color="#FF6347">#FF6347</font></td><td bgcolor="#FF6347">rgb(255, 99, 71)</td></tr><tr><td><font color="Turquoise">Turquoise</font></td><td><font color="#40E0D0">#40E0D0</font></td><td bgcolor="#40E0D0">rgb(64, 224, 208)</td></tr><tr><td><font color="Violet">Violet</font></td><td><font color="#EE82EE">#EE82EE</font></td><td bgcolor="#EE82EE">rgb(238, 130, 238)</td></tr><tr><td><font color="VioletRed">VioletRed</font></td><td><font color="#D02090">#D02090</font></td><td bgcolor="#D02090">rgb(208, 32, 144)</td></tr><tr><td><font color="Wheat">Wheat</font></td><td><font color="#F5DEB3">#F5DEB3</font></td><td bgcolor="#F5DEB3">rgb(245, 222, 179)</td></tr><tr><td><font color="White">White</font></td><td><font color="#FFFFFF">#FFFFFF</font></td><td bgcolor="#FFFFFF">rgb(255, 255, 255)</td></tr><tr><td><font color="WhiteSmoke">WhiteSmoke</font></td><td><font color="#F5F5F5">#F5F5F5</font></td><td bgcolor="#F5F5F5">rgb(245, 245, 245)</td></tr><tr><td><font color="Yellow">Yellow</font></td><td><font color="#FFFF00">#FFFF00</font></td><td bgcolor="#FFFF00">rgb(255, 255, 0)</td></tr><tr><td><font color="YellowGreen">YellowGreen</font></td><td><font color="#9ACD32">#9ACD32</font></td><td bgcolor="#9ACD32">rgb(154, 205, 50)</td></tr></tbody></table>
<h2 id="字体大小">字体大小</h2>
<pre><code>size为1：&lt;font size="1"&gt;size为1&lt;/font&gt;
size为2：&lt;font size="2"&gt;size为2&lt;/font&gt;
size为3：&lt;font size="3"&gt;size为3&lt;/font&gt;
size为4：&lt;font size="4"&gt;size为4&lt;/font&gt;
size为6：&lt;font size="6"&gt;size为6&lt;/font&gt;
</code></pre>
<p>效果如下：</p>
<p>size为1：<font size="1">size为1</font></p>
<p>size为2：<font size="2">size为2</font></p>
<p>size为3：<font size="3">size为3</font></p>
<p>size为4：<font size="4">size为4</font></p>
<p>size为6：<font size="6">size为6</font></p>
<h2 id="字体-1">字体</h2>
<pre><code>&lt;font face="黑体"&gt;我是黑体字&lt;/font&gt; 
&lt;font face="宋体"&gt;我是宋体字&lt;/font&gt; 
&lt;font face="楷体"&gt;我是楷体字&lt;/font&gt; 
&lt;font face="微软雅黑"&gt;我是微软雅黑字&lt;/font&gt; 
&lt;font face="fantasy"&gt;我是fantasy字&lt;/font&gt;
&lt;font face="Helvetica"&gt;我是Helvetica字&lt;/font&gt; 
</code></pre>
<p>效果如下：</p>
<p><font face="黑体">我是黑体字</font></p>
<p><font face="宋体">我是宋体字</font></p>
<p><font face="楷体">我是楷体字</font></p>
<p><font face="微软雅黑">我是微软雅黑字</font></p>
<p><font face="fantasy">我是fantasy字</font></p>
<p><font face="Helvetica">我是Helvetica字</font></p>
<h2 id="背景色">背景色</h2>
<p>语法如下：</p>
<pre><code class="language-html">&lt;table&gt;&lt;tr&gt;&lt;td bgcolor=#F4A460&gt;背景色的设置是按照十六进制颜色值：#F4A460&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;
&lt;table&gt;&lt;tr&gt;&lt;td bgcolor=#FF6347&gt;背景色的设置是按照十六进制颜色值：#FF6347&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;  
&lt;table&gt;&lt;tr&gt;&lt;td bgcolor=#D8BFD8&gt;背景色的设置是按照十六进制颜色值：#D8BFD8&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;  
&lt;table&gt;&lt;tr&gt;&lt;td bgcolor=#008080&gt;背景色的设置是按照十六进制颜色值：#008080&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;  
&lt;table&gt;&lt;tr&gt;&lt;td bgcolor=#FFD700&gt;背景色的设置是按照十六进制颜色值：#FFD700&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;  
</code></pre>
<p>效果如下：</p>
<table><tbody><tr><td bgcolor="#F4A460">背景色的设置是按照十六进制颜色值：#F4A460</td></tr></tbody></table>
<table><tbody><tr><td bgcolor="#FF6347">背景色的设置是按照十六进制颜色值：#FF6347</td></tr></tbody></table>  
<table><tbody><tr><td bgcolor="#D8BFD8">背景色的设置是按照十六进制颜色值：#D8BFD8</td></tr></tbody></table>  
<table><tbody><tr><td bgcolor="#008080">背景色的设置是按照十六进制颜色值：#008080</td></tr></tbody></table>  
<table><tbody><tr><td bgcolor="#FFD700">背景色的设置是按照十六进制颜色值：#FFD700</td></tr></tbody></table>   
<h1 id="emoji">Emoji</h1>
<p>emoji使用时复制后面的md代码即可（包括两个冒号），也可以直接复制emoji表情，博客园的md编辑器是支持的。</p>
<h2 id="people">People</h2>
<table>
<thead>
<tr>
<th>😱 <code>:scream:</code></th>
<th>😄 <code>:smile:</code></th>
<th>😆 <code>:laughing:</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>😊 <code>:blush:</code></td>
<td>😃 <code>:smiley:</code></td>
<td>☺️ <code>:relaxed:</code></td>
</tr>
<tr>
<td>😏 <code>:smirk:</code></td>
<td>😍 <code>:heart_eyes:</code></td>
<td>😘 <code>:kissing_heart:</code></td>
</tr>
<tr>
<td>😚 <code>:kissing_closed_eyes:</code></td>
<td>😳 <code>:flushed:</code></td>
<td>😌 <code>:relieved:</code></td>
</tr>
<tr>
<td>😆 <code>:satisfied:</code></td>
<td>😁 <code>:grin:</code></td>
<td>😉 <code>:wink:</code></td>
</tr>
<tr>
<td>😜 <code>:stuck_out_tongue_winking_eye:</code></td>
<td>😝 <code>:stuck_out_tongue_closed_eyes:</code></td>
<td>😀 <code>:grinning:</code></td>
</tr>
<tr>
<td>😗 <code>:kissing:</code></td>
<td>😙 <code>:kissing_smiling_eyes:</code></td>
<td>😛 <code>:stuck_out_tongue:</code></td>
</tr>
<tr>
<td>😴 <code>:sleeping:</code></td>
<td>😟 <code>:worried:</code></td>
<td>😦 <code>:frowning:</code></td>
</tr>
<tr>
<td>😧 <code>:anguished:</code></td>
<td>😮 <code>:open_mouth:</code></td>
<td>😬 <code>:grimacing:</code></td>
</tr>
<tr>
<td>😕 <code>:confused:</code></td>
<td>😯 <code>:hushed:</code></td>
<td>😑 <code>:expressionless:</code></td>
</tr>
<tr>
<td>😒 <code>:unamused:</code></td>
<td>😅 <code>:sweat_smile:</code></td>
<td>😓 <code>:sweat:</code></td>
</tr>
<tr>
<td>😥 <code>:disappointed_relieved:</code></td>
<td>😩 <code>:weary:</code></td>
<td>😔 <code>:pensive:</code></td>
</tr>
<tr>
<td>😞 <code>:disappointed:</code></td>
<td>😖 <code>:confounded:</code></td>
<td>😨 <code>:fearful:</code></td>
</tr>
<tr>
<td>😰 <code>:cold_sweat:</code></td>
<td>😣 <code>:persevere:</code></td>
<td>😢 <code>:cry:</code></td>
</tr>
<tr>
<td>😭 <code>:sob:</code></td>
<td>😂 <code>:joy:</code></td>
<td>😲 <code>:astonished:</code></td>
</tr>
<tr>
<td>😎 <code>:sunglasses:</code></td>
<td>😵 <code>:dizzy_face:</code></td>
<td>😫 <code>:tired_face:</code></td>
</tr>
<tr>
<td>😠 <code>:angry:</code></td>
<td>😡 <code>:rage:</code></td>
<td>😤 <code>:triumph:</code></td>
</tr>
<tr>
<td>😪 <code>:sleepy:</code></td>
<td>😋 <code>:yum:</code></td>
<td>😷 <code>:mask:</code></td>
</tr>
<tr>
<td>👿 <code>:imp:</code></td>
<td>😐 <code>:neutral_face:</code></td>
<td>😶 <code>:no_mouth:</code></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>😈 <code>:smiling_imp:</code></td>
<td>😇 <code>:innocent:</code></td>
<td>👽 <code>:alien:</code></td>
</tr>
<tr>
<td>😇 <code>:innocent:</code></td>
<td>💧 <code>:droplet:</code></td>
<td>💛 <code>:yellow_heart:</code></td>
</tr>
<tr>
<td>💙 <code>:blue_heart:</code></td>
<td>💜 <code>:purple_heart:</code></td>
<td>❤️ <code>:heart:</code></td>
</tr>
<tr>
<td>💚 <code>:green_heart:</code></td>
<td>💔 <code>:broken_heart:</code></td>
<td>💓 <code>:heartbeat:</code></td>
</tr>
<tr>
<td>💗 <code>:heartpulse:</code></td>
<td>💕 <code>:two_hearts:</code></td>
<td>💞 <code>:revolving_hearts:</code></td>
</tr>
<tr>
<td>💘 <code>:cupid:</code></td>
<td>💖 <code>:sparkling_heart:</code></td>
<td>✨ <code>:sparkles:</code></td>
</tr>
<tr>
<td>⭐️ <code>:star:</code></td>
<td>🌟 <code>:star2:</code></td>
<td>💫 <code>:dizzy:</code></td>
</tr>
<tr>
<td>💥 <code>:boom:</code></td>
<td>💥 <code>:collision:</code></td>
<td>💢 <code>:anger:</code></td>
</tr>
<tr>
<td>❗️ <code>:exclamation:</code></td>
<td>❓ <code>:question:</code></td>
<td>❕ <code>:grey_exclamation:</code></td>
</tr>
<tr>
<td>❔ <code>:grey_question:</code></td>
<td>💤 <code>:zzz:</code></td>
<td>💨 <code>:dash:</code></td>
</tr>
<tr>
<td>💦 <code>:sweat_drops:</code></td>
<td>🎶 <code>:notes:</code></td>
<td>🎵 <code>:musical_note:</code></td>
</tr>
<tr>
<td>🔥 <code>:fire:</code></td>
<td>💩 <code>:hankey:</code></td>
<td>💩 <code>:poop:</code></td>
</tr>
<tr>
<td>💩 <code>:shit:</code></td>
<td>👍 <code>:+1:</code></td>
<td>👍 <code>:thumbsup:</code></td>
</tr>
<tr>
<td>👎 <code>:-1:</code></td>
<td>👎 <code>:thumbsdown:</code></td>
<td>👌 <code>:ok_hand:</code></td>
</tr>
<tr>
<td>👊 <code>:punch:</code></td>
<td>👊 <code>:facepunch:</code></td>
<td>✊ <code>:fist:</code></td>
</tr>
<tr>
<td>✌️ <code>:v:</code></td>
<td>👋 <code>:wave:</code></td>
<td>✋ <code>:hand:</code></td>
</tr>
<tr>
<td>✋ <code>:raised_hand:</code></td>
<td>👐 <code>:open_hands:</code></td>
<td>☝️ <code>:point_up:</code></td>
</tr>
<tr>
<td>👇 <code>:point_down:</code></td>
<td>👈 <code>:point_left:</code></td>
<td>👉 <code>:point_right:</code></td>
</tr>
<tr>
<td>🙌 <code>:raised_hands:</code></td>
<td>🙏 <code>:pray:</code></td>
<td>👆 <code>:point_up_2:</code></td>
</tr>
<tr>
<td>👏 <code>:clap:</code></td>
<td>💪 <code>:muscle:</code></td>
<td>🤘 <code>:metal:</code></td>
</tr>
<tr>
<td>🖕 <code>:fu:</code></td>
<td>🚶 <code>:walking:</code></td>
<td>🏃 <code>:runner:</code></td>
</tr>
<tr>
<td>🏃 <code>:running:</code></td>
<td>👫 <code>:couple:</code></td>
<td>👪 <code>:family:</code></td>
</tr>
<tr>
<td>👬 <code>:two_men_holding_hands:</code></td>
<td>👭 <code>:two_women_holding_hands:</code></td>
<td>💃 <code>:dancer:</code></td>
</tr>
<tr>
<td>👯 <code>:dancers:</code></td>
<td>🙆 <code>:ok_woman:</code></td>
<td>🙅 <code>:no_good:</code></td>
</tr>
<tr>
<td>💁 <code>:information_desk_person:</code></td>
<td>🙋 <code>:raising_hand:</code></td>
<td>👰 <code>:bride_with_veil:</code></td>
</tr>
<tr>
<td>🙎 <code>:person_with_pouting_face:</code></td>
<td>🙍 <code>:person_frowning:</code></td>
<td>🙇 <code>:bow:</code></td>
</tr>
<tr>
<td>💑 <code>:couple_with_heart:</code></td>
<td>💆 <code>:massage:</code></td>
<td>👥 <code>:busts_in_silhouette:</code></td>
</tr>
<tr>
<td>💇 <code>:haircut:</code></td>
<td>💅 <code>:nail_care:</code></td>
<td>👦 <code>:boy:</code></td>
</tr>
<tr>
<td>👧 <code>:girl:</code></td>
<td>👩 <code>:woman:</code></td>
<td>👨 <code>:man:</code></td>
</tr>
<tr>
<td>👶 <code>:baby:</code></td>
<td>👵 <code>:older_woman:</code></td>
<td>👴 <code>:older_man:</code></td>
</tr>
<tr>
<td>👱 <code>:person_with_blond_hair:</code></td>
<td>👲 <code>:man_with_gua_pi_mao:</code></td>
<td>👳 <code>:man_with_turban:</code></td>
</tr>
<tr>
<td>👷 <code>:construction_worker:</code></td>
<td>👮 <code>:cop:</code></td>
<td>👼 <code>:angel:</code></td>
</tr>
<tr>
<td>👸 <code>:princess:</code></td>
<td>😺 <code>:smiley_cat:</code></td>
<td>😸 <code>:smile_cat:</code></td>
</tr>
<tr>
<td>😻 <code>:heart_eyes_cat:</code></td>
<td>😽 <code>:kissing_cat:</code></td>
<td>😼 <code>:smirk_cat:</code></td>
</tr>
<tr>
<td>🙀 <code>:scream_cat:</code></td>
<td>😿 <code>:crying_cat_face:</code></td>
<td>😹 <code>:joy_cat:</code></td>
</tr>
<tr>
<td>😾 <code>:pouting_cat:</code></td>
<td>👹 <code>:japanese_ogre:</code></td>
<td>👺 <code>:japanese_goblin:</code></td>
</tr>
<tr>
<td>🙈 <code>:see_no_evil:</code></td>
<td>🙉 <code>:hear_no_evil:</code></td>
<td>🙊 <code>:speak_no_evil:</code></td>
</tr>
<tr>
<td>💂 <code>:guardsman:</code></td>
<td>💀 <code>:skull:</code></td>
<td>🐾 <code>:feet:</code></td>
</tr>
<tr>
<td>👄 <code>:lips:</code></td>
<td>💋 <code>:kiss:</code></td>
<td>💬 <code>:speech_balloon:</code></td>
</tr>
<tr>
<td>👂 <code>:ear:</code></td>
<td>👀 <code>:eyes:</code></td>
<td>👃 <code>:nose:</code></td>
</tr>
<tr>
<td>👅 <code>:tongue:</code></td>
<td>💌 <code>:love_letter:</code></td>
<td>👤 <code>:bust_in_silhouette:</code></td>
</tr>
<tr>
<td>👥 <code>:busts_in_silhouette:</code></td>
<td>💭 <code>:thought_balloon:</code></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="nature">Nature</h2>
<table>
<thead>
<tr>
<th>☀️ <code>:sunny:</code></th>
<th>☔️ <code>:umbrella:</code></th>
<th>☁️ <code>:cloud:</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>❄️ <code>:snowflake:</code></td>
<td>⛄️ <code>:snowman:</code></td>
<td>⚡️ <code>:zap:</code></td>
</tr>
<tr>
<td>🌀 <code>:cyclone:</code></td>
<td>🌁 <code>:foggy:</code></td>
<td>🌊 <code>:ocean:</code></td>
</tr>
<tr>
<td>🐱 <code>:cat:</code></td>
<td>🐶 <code>:dog:</code></td>
<td>🐭 <code>:mouse:</code></td>
</tr>
<tr>
<td>🐹 <code>:hamster:</code></td>
<td>🐰 <code>:rabbit:</code></td>
<td>🐺 <code>:wolf:</code></td>
</tr>
<tr>
<td>🐸 <code>:frog:</code></td>
<td>🐯 <code>:tiger:</code></td>
<td>🐨 <code>:koala:</code></td>
</tr>
<tr>
<td>🐻 <code>:bear:</code></td>
<td>🐷 <code>:pig:</code></td>
<td>🐽 <code>:pig_nose:</code></td>
</tr>
<tr>
<td>🐮 <code>:cow:</code></td>
<td>🐗 <code>:boar:</code></td>
<td>🐵 <code>:monkey_face:</code></td>
</tr>
<tr>
<td>🐒 <code>:monkey:</code></td>
<td>🐴 <code>:horse:</code></td>
<td>🐎 <code>:racehorse:</code></td>
</tr>
<tr>
<td>🐫 <code>:camel:</code></td>
<td>🐑 <code>:sheep:</code></td>
<td>🐘 <code>:elephant:</code></td>
</tr>
<tr>
<td>🐼 <code>:panda_face:</code></td>
<td>🐍 <code>:snake:</code></td>
<td>🐦 <code>:bird:</code></td>
</tr>
<tr>
<td>🐤 <code>:baby_chick:</code></td>
<td>🐥 <code>:hatched_chick:</code></td>
<td>🐣 <code>:hatching_chick:</code></td>
</tr>
<tr>
<td>🐔 <code>:chicken:</code></td>
<td>🐧 <code>:penguin:</code></td>
<td>🐢 <code>:turtle:</code></td>
</tr>
<tr>
<td>🐛 <code>:bug:</code></td>
<td>🐝 <code>:honeybee:</code></td>
<td>🐜 <code>:ant:</code></td>
</tr>
<tr>
<td>🐞 <code>:beetle:</code></td>
<td>🐌 <code>:snail:</code></td>
<td>🐙 <code>:octopus:</code></td>
</tr>
<tr>
<td>🐠 <code>:tropical_fish:</code></td>
<td>🐟 <code>:fish:</code></td>
<td>🐳 <code>:whale:</code></td>
</tr>
<tr>
<td>🐋 <code>:whale2:</code></td>
<td>🐬 <code>:dolphin:</code></td>
<td>🐄 <code>:cow2:</code></td>
</tr>
<tr>
<td>🐏 <code>:ram:</code></td>
<td>🐀 <code>:rat:</code></td>
<td>🐃 <code>:water_buffalo:</code></td>
</tr>
<tr>
<td>🐅 <code>:tiger2:</code></td>
<td>🐇 <code>:rabbit2:</code></td>
<td>🐉 <code>:dragon:</code></td>
</tr>
<tr>
<td>🐐 <code>:goat:</code></td>
<td>🐓 <code>:rooster:</code></td>
<td>🐕 <code>:dog2:</code></td>
</tr>
<tr>
<td>🐖 <code>:pig2:</code></td>
<td>🐁 <code>:mouse2:</code></td>
<td>🐂 <code>:ox:</code></td>
</tr>
<tr>
<td>🐲 <code>:dragon_face:</code></td>
<td>🐡 <code>:blowfish:</code></td>
<td>🐊 <code>:crocodile:</code></td>
</tr>
<tr>
<td>🐪 <code>:dromedary_camel:</code></td>
<td>🐆 <code>:leopard:</code></td>
<td>🐈 <code>:cat2:</code></td>
</tr>
<tr>
<td>🐩 <code>:poodle:</code></td>
<td>🐾 <code>:paw_prints:</code></td>
<td>💐 <code>:bouquet:</code></td>
</tr>
<tr>
<td>🌸 <code>:cherry_blossom:</code></td>
<td>🌷 <code>:tulip:</code></td>
<td>🍀 <code>:four_leaf_clover:</code></td>
</tr>
<tr>
<td>🌹 <code>:rose:</code></td>
<td>🌻 <code>:sunflower:</code></td>
<td>🌺 <code>:hibiscus:</code></td>
</tr>
<tr>
<td>🍁 <code>:maple_leaf:</code></td>
<td>🍃 <code>:leaves:</code></td>
<td>🍂 <code>:fallen_leaf:</code></td>
</tr>
<tr>
<td>🌿 <code>:herb:</code></td>
<td>🍄 <code>:mushroom:</code></td>
<td>🌵 <code>:cactus:</code></td>
</tr>
<tr>
<td>🌴 <code>:palm_tree:</code></td>
<td>🌲 <code>:evergreen_tree:</code></td>
<td>🌳 <code>:deciduous_tree:</code></td>
</tr>
<tr>
<td>🌰 <code>:chestnut:</code></td>
<td>🌱 <code>:seedling:</code></td>
<td>🌼 <code>:blossom:</code></td>
</tr>
<tr>
<td>🌾 <code>:ear_of_rice:</code></td>
<td>🐚 <code>:shell:</code></td>
<td>🌐 <code>:globe_with_meridians:</code></td>
</tr>
<tr>
<td>🌞 <code>:sun_with_face:</code></td>
<td>🌝 <code>:full_moon_with_face:</code></td>
<td>🌚 <code>:new_moon_with_face:</code></td>
</tr>
<tr>
<td>🌑 <code>:new_moon:</code></td>
<td>🌒 <code>:waxing_crescent_moon:</code></td>
<td>🌓 <code>:first_quarter_moon:</code></td>
</tr>
<tr>
<td>🌔 <code>:waxing_gibbous_moon:</code></td>
<td>🌕 <code>:full_moon:</code></td>
<td>🌖 <code>:waning_gibbous_moon:</code></td>
</tr>
<tr>
<td>🌗 <code>:last_quarter_moon:</code></td>
<td>🌘 <code>:waning_crescent_moon:</code></td>
<td>🌜 <code>:last_quarter_moon_with_face:</code></td>
</tr>
<tr>
<td>🌛 <code>:first_quarter_moon_with_face:</code></td>
<td>🌔 <code>:moon:</code></td>
<td>🌍 <code>:earth_africa:</code></td>
</tr>
<tr>
<td>🌎 <code>:earth_americas:</code></td>
<td>🌏 <code>:earth_asia:</code></td>
<td>🌋 <code>:volcano:</code></td>
</tr>
<tr>
<td>🌌 <code>:milky_way:</code></td>
<td>⛅️ <code>:partly_sunny:</code></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="objects">Objects</h2>
<table>
<thead>
<tr>
<th>🎍 <code>:bamboo:</code></th>
<th>💝 <code>:gift_heart:</code></th>
<th>🎎 <code>:dolls:</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>🎒 <code>:school_satchel:</code></td>
<td>🎓 <code>:mortar_board:</code></td>
<td>🎏 <code>:flags:</code></td>
</tr>
<tr>
<td>🎆 <code>:fireworks:</code></td>
<td>🎇 <code>:sparkler:</code></td>
<td>🎐 <code>:wind_chime:</code></td>
</tr>
<tr>
<td>🎑 <code>:rice_scene:</code></td>
<td>🎃 <code>:jack_o_lantern:</code></td>
<td>👻 <code>:ghost:</code></td>
</tr>
<tr>
<td>🎅 <code>:santa:</code></td>
<td>🎄 <code>:christmas_tree:</code></td>
<td>🎁 <code>:gift:</code></td>
</tr>
<tr>
<td>🔔 <code>:bell:</code></td>
<td>🔕 <code>:no_bell:</code></td>
<td>🎋 <code>:tanabata_tree:</code></td>
</tr>
<tr>
<td>🎉 <code>:tada:</code></td>
<td>🎊 <code>:confetti_ball:</code></td>
<td>🎈 <code>:balloon:</code></td>
</tr>
<tr>
<td>🔮 <code>:crystal_ball:</code></td>
<td>💿 <code>:cd:</code></td>
<td>📀 <code>:dvd:</code></td>
</tr>
<tr>
<td>💾 <code>:floppy_disk:</code></td>
<td>📷 <code>:camera:</code></td>
<td>📹 <code>:video_camera:</code></td>
</tr>
<tr>
<td>🎥 <code>:movie_camera:</code></td>
<td>💻 <code>:computer:</code></td>
<td>📺 <code>:tv:</code></td>
</tr>
<tr>
<td>📱 <code>:iphone:</code></td>
<td>☎️ <code>:phone:</code></td>
<td>☎️ <code>:telephone:</code></td>
</tr>
<tr>
<td>📞 <code>:telephone_receiver:</code></td>
<td>📟 <code>:pager:</code></td>
<td>📠 <code>:fax:</code></td>
</tr>
<tr>
<td>💽 <code>:minidisc:</code></td>
<td>📼 <code>:vhs:</code></td>
<td>🔉 <code>:sound:</code></td>
</tr>
<tr>
<td>🔈 <code>:speaker:</code></td>
<td>🔇 <code>:mute:</code></td>
<td>📢 <code>:loudspeaker:</code></td>
</tr>
<tr>
<td>📣 <code>:mega:</code></td>
<td>⌛️ <code>:hourglass:</code></td>
<td>⏳ <code>:hourglass_flowing_sand:</code></td>
</tr>
<tr>
<td>⏰ <code>:alarm_clock:</code></td>
<td>⌚️ <code>:watch:</code></td>
<td>📻 <code>:radio:</code></td>
</tr>
<tr>
<td>📡 <code>:satellite:</code></td>
<td>➿ <code>:loop:</code></td>
<td>🔍 <code>:mag:</code></td>
</tr>
<tr>
<td>🔎 <code>:mag_right:</code></td>
<td>🔓 <code>:unlock:</code></td>
<td>🔒 <code>:lock:</code></td>
</tr>
<tr>
<td>🔏 <code>:lock_with_ink_pen:</code></td>
<td>🔐 <code>:closed_lock_with_key:</code></td>
<td>🔑 <code>:key:</code></td>
</tr>
<tr>
<td>💡 <code>:bulb:</code></td>
<td>🔦 <code>:flashlight:</code></td>
<td>🔆 <code>:high_brightness:</code></td>
</tr>
<tr>
<td>🔅 <code>:low_brightness:</code></td>
<td>🔌 <code>:electric_plug:</code></td>
<td>🔋 <code>:battery:</code></td>
</tr>
<tr>
<td>📲 <code>:calling:</code></td>
<td>✉️ <code>:email:</code></td>
<td>📫 <code>:mailbox:</code></td>
</tr>
<tr>
<td>📮 <code>:postbox:</code></td>
<td>🛀 <code>:bath:</code></td>
<td>🛁 <code>:bathtub:</code></td>
</tr>
<tr>
<td>🚿 <code>:shower:</code></td>
<td>🚽 <code>:toilet:</code></td>
<td>🔧 <code>:wrench:</code></td>
</tr>
<tr>
<td>🔩 <code>:nut_and_bolt:</code></td>
<td>🔨 <code>:hammer:</code></td>
<td>💺 <code>:seat:</code></td>
</tr>
<tr>
<td>💰 <code>:moneybag:</code></td>
<td>💴 <code>:yen:</code></td>
<td>💵 <code>:dollar:</code></td>
</tr>
<tr>
<td>💷 <code>:pound:</code></td>
<td>💶 <code>:euro:</code></td>
<td>💳 <code>:credit_card:</code></td>
</tr>
<tr>
<td>💸 <code>:money_with_wings:</code></td>
<td>📧 <code>:e-mail:</code></td>
<td>📥 <code>:inbox_tray:</code></td>
</tr>
<tr>
<td>📤 <code>:outbox_tray:</code></td>
<td>✉️ <code>:envelope:</code></td>
<td>📨 <code>:incoming_envelope:</code></td>
</tr>
<tr>
<td>📯 <code>:postal_horn:</code></td>
<td>📪 <code>:mailbox_closed:</code></td>
<td>📬 <code>:mailbox_with_mail:</code></td>
</tr>
<tr>
<td>📭 <code>:mailbox_with_no_mail:</code></td>
<td>🚪 <code>:door:</code></td>
<td>🚬 <code>:smoking:</code></td>
</tr>
<tr>
<td>💣 <code>:bomb:</code></td>
<td>🔫 <code>:gun:</code></td>
<td>🔪 <code>:hocho:</code></td>
</tr>
<tr>
<td>💊 <code>:pill:</code></td>
<td>💉 <code>:syringe:</code></td>
<td>📄 <code>:page_facing_up:</code></td>
</tr>
<tr>
<td>📃 <code>:page_with_curl:</code></td>
<td>📑 <code>:bookmark_tabs:</code></td>
<td>📊 <code>:bar_chart:</code></td>
</tr>
<tr>
<td>📈 <code>:chart_with_upwards_trend:</code></td>
<td>📉 <code>:chart_with_downwards_trend:</code></td>
<td>📜 <code>:scroll:</code></td>
</tr>
<tr>
<td>📋 <code>:clipboard:</code></td>
<td>📆 <code>:calendar:</code></td>
<td>📅 <code>:date:</code></td>
</tr>
<tr>
<td>📇 <code>:card_index:</code></td>
<td>📁 <code>:file_folder:</code></td>
<td>📂 <code>:open_file_folder:</code></td>
</tr>
<tr>
<td>✂️ <code>:scissors:</code></td>
<td>📌 <code>:pushpin:</code></td>
<td>📎 <code>:paperclip:</code></td>
</tr>
<tr>
<td>✒️ <code>:black_nib:</code></td>
<td>✏️ <code>:pencil2:</code></td>
<td>📏 <code>:straight_ruler:</code></td>
</tr>
<tr>
<td>📐 <code>:triangular_ruler:</code></td>
<td>📕 <code>:closed_book:</code></td>
<td>📗 <code>:green_book:</code></td>
</tr>
<tr>
<td>📘 <code>:blue_book:</code></td>
<td>📙 <code>:orange_book:</code></td>
<td>📓 <code>:notebook:</code></td>
</tr>
<tr>
<td>📔 <code>:notebook_with_decorative_cover:</code></td>
<td>📒 <code>:ledger:</code></td>
<td>📚 <code>:books:</code></td>
</tr>
<tr>
<td>🔖 <code>:bookmark:</code></td>
<td>📛 <code>:name_badge:</code></td>
<td>🔬 <code>:microscope:</code></td>
</tr>
<tr>
<td>🔭 <code>:telescope:</code></td>
<td>📰 <code>:newspaper:</code></td>
<td>🏈 <code>:football:</code></td>
</tr>
<tr>
<td>🏀 <code>:basketball:</code></td>
<td>⚽️ <code>:soccer:</code></td>
<td>⚾️ <code>:baseball:</code></td>
</tr>
<tr>
<td>🎾 <code>:tennis:</code></td>
<td>🎱 <code>:8ball:</code></td>
<td>🏉 <code>:rugby_football:</code></td>
</tr>
<tr>
<td>🎳 <code>:bowling:</code></td>
<td>⛳️ <code>:golf:</code></td>
<td>🚵 <code>:mountain_bicyclist:</code></td>
</tr>
<tr>
<td>🚴 <code>:bicyclist:</code></td>
<td>🏇 <code>:horse_racing:</code></td>
<td>🏂 <code>:snowboarder:</code></td>
</tr>
<tr>
<td>🏊 <code>:swimmer:</code></td>
<td>🏄 <code>:surfer:</code></td>
<td>🎿 <code>:ski:</code></td>
</tr>
<tr>
<td>♠️ <code>:spades:</code></td>
<td>♥️ <code>:hearts:</code></td>
<td>♣️ <code>:clubs:</code></td>
</tr>
<tr>
<td>♦️ <code>:diamonds:</code></td>
<td>💎 <code>:gem:</code></td>
<td>💍 <code>:ring:</code></td>
</tr>
<tr>
<td>🏆 <code>:trophy:</code></td>
<td>🎼 <code>:musical_score:</code></td>
<td>🎹 <code>:musical_keyboard:</code></td>
</tr>
<tr>
<td>🎻 <code>:violin:</code></td>
<td>👾 <code>:space_invader:</code></td>
<td>🎮 <code>:video_game:</code></td>
</tr>
<tr>
<td>🃏 <code>:black_joker:</code></td>
<td>🎴 <code>:flower_playing_cards:</code></td>
<td>🎲 <code>:game_die:</code></td>
</tr>
<tr>
<td>🎯 <code>:dart:</code></td>
<td>🀄️ <code>:mahjong:</code></td>
<td>🎬 <code>:clapper:</code></td>
</tr>
<tr>
<td>📝 <code>:memo:</code></td>
<td>📝 <code>:pencil:</code></td>
<td>📖 <code>:book:</code></td>
</tr>
<tr>
<td>🎨 <code>:art:</code></td>
<td>🎤 <code>:microphone:</code></td>
<td>🎧 <code>:headphones:</code></td>
</tr>
<tr>
<td>🎺 <code>:trumpet:</code></td>
<td>🎷 <code>:saxophone:</code></td>
<td>🎸 <code>:guitar:</code></td>
</tr>
<tr>
<td>👞 <code>:shoe:</code></td>
<td>👡 <code>:sandal:</code></td>
<td>👠 <code>:high_heel:</code></td>
</tr>
<tr>
<td>💄 <code>:lipstick:</code></td>
<td>👢 <code>:boot:</code></td>
<td>👕 <code>:shirt:</code></td>
</tr>
<tr>
<td>👕 <code>:tshirt:</code></td>
<td>👔 <code>:necktie:</code></td>
<td>👚 <code>:womans_clothes:</code></td>
</tr>
<tr>
<td>👗 <code>:dress:</code></td>
<td>🎽 <code>:running_shirt_with_sash:</code></td>
<td>👖 <code>:jeans:</code></td>
</tr>
<tr>
<td>👘 <code>:kimono:</code></td>
<td>👙 <code>:bikini:</code></td>
<td>🎀 <code>:ribbon:</code></td>
</tr>
<tr>
<td>🎩 <code>:tophat:</code></td>
<td>👑 <code>:crown:</code></td>
<td>👒 <code>:womans_hat:</code></td>
</tr>
<tr>
<td>👞 <code>:mans_shoe:</code></td>
<td>🌂 <code>:closed_umbrella:</code></td>
<td>💼 <code>:briefcase:</code></td>
</tr>
<tr>
<td>👜 <code>:handbag:</code></td>
<td>👝 <code>:pouch:</code></td>
<td>👛 <code>:purse:</code></td>
</tr>
<tr>
<td>👓 <code>:eyeglasses:</code></td>
<td>🎣 <code>:fishing_pole_and_fish:</code></td>
<td>☕️ <code>:coffee:</code></td>
</tr>
<tr>
<td>🍵 <code>:tea:</code></td>
<td>🍶 <code>:sake:</code></td>
<td>🍼 <code>:baby_bottle:</code></td>
</tr>
<tr>
<td>🍺 <code>:beer:</code></td>
<td>🍻 <code>:beers:</code></td>
<td>🍸 <code>:cocktail:</code></td>
</tr>
<tr>
<td>🍹 <code>:tropical_drink:</code></td>
<td>🍷 <code>:wine_glass:</code></td>
<td>🍴 <code>:fork_and_knife:</code></td>
</tr>
<tr>
<td>🍕 <code>:pizza:</code></td>
<td>🍔 <code>:hamburger:</code></td>
<td>🍟 <code>:fries:</code></td>
</tr>
<tr>
<td>🍗 <code>:poultry_leg:</code></td>
<td>🍖 <code>:meat_on_bone:</code></td>
<td>🍝 <code>:spaghetti:</code></td>
</tr>
<tr>
<td>🍛 <code>:curry:</code></td>
<td>🍤 <code>:fried_shrimp:</code></td>
<td>🍱 <code>:bento:</code></td>
</tr>
<tr>
<td>🍣 <code>:sushi:</code></td>
<td>🍥 <code>:fish_cake:</code></td>
<td>🍙 <code>:rice_ball:</code></td>
</tr>
<tr>
<td>🍘 <code>:rice_cracker:</code></td>
<td>🍚 <code>:rice:</code></td>
<td>🍜 <code>:ramen:</code></td>
</tr>
<tr>
<td>🍲 <code>:stew:</code></td>
<td>🍢 <code>:oden:</code></td>
<td>🍡 <code>:dango:</code></td>
</tr>
<tr>
<td>🥚 <code>:egg:</code></td>
<td>🍞 <code>:bread:</code></td>
<td>🍩 <code>:doughnut:</code></td>
</tr>
<tr>
<td>🍮 <code>:custard:</code></td>
<td>🍦 <code>:icecream:</code></td>
<td>🍨 <code>:ice_cream:</code></td>
</tr>
<tr>
<td>🍧 <code>:shaved_ice:</code></td>
<td>🎂 <code>:birthday:</code></td>
<td>🍰 <code>:cake:</code></td>
</tr>
<tr>
<td>🍪 <code>:cookie:</code></td>
<td>🍫 <code>:chocolate_bar:</code></td>
<td>🍬 <code>:candy:</code></td>
</tr>
<tr>
<td>🍭 <code>:lollipop:</code></td>
<td>🍯 <code>:honey_pot:</code></td>
<td>🍎 <code>:apple:</code></td>
</tr>
<tr>
<td>🍏 <code>:green_apple:</code></td>
<td>🍊 <code>:tangerine:</code></td>
<td>🍋 <code>:lemon:</code></td>
</tr>
<tr>
<td>🍒 <code>:cherries:</code></td>
<td>🍇 <code>:grapes:</code></td>
<td>🍉 <code>:watermelon:</code></td>
</tr>
<tr>
<td>🍓 <code>:strawberry:</code></td>
<td>🍑 <code>:peach:</code></td>
<td>🍈 <code>:melon:</code></td>
</tr>
<tr>
<td>🍌 <code>:banana:</code></td>
<td>🍐 <code>:pear:</code></td>
<td>🍍 <code>:pineapple:</code></td>
</tr>
<tr>
<td>🍠 <code>:sweet_potato:</code></td>
<td>🍆 <code>:eggplant:</code></td>
<td>🍅 <code>:tomato:</code></td>
</tr>
<tr>
<td>🌽 <code>:corn:</code></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="places">Places</h2>
<table>
<thead>
<tr>
<th>🏠 <code>:house:</code></th>
<th>🏡 <code>:house_with_garden:</code></th>
<th>🏫 <code>:school:</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>🏢 <code>:office:</code></td>
<td>🏣 <code>:post_office:</code></td>
<td>🏥 <code>:hospital:</code></td>
</tr>
<tr>
<td>🏦 <code>:bank:</code></td>
<td>🏪 <code>:convenience_store:</code></td>
<td>🏩 <code>:love_hotel:</code></td>
</tr>
<tr>
<td>🏨 <code>:hotel:</code></td>
<td>💒 <code>:wedding:</code></td>
<td>⛪️ <code>:church:</code></td>
</tr>
<tr>
<td>🏬 <code>:department_store:</code></td>
<td>🏤 <code>:european_post_office:</code></td>
<td>🌇 <code>:city_sunrise:</code></td>
</tr>
<tr>
<td>🌆 <code>:city_sunset:</code></td>
<td>🏯 <code>:japanese_castle:</code></td>
<td>🏰 <code>:european_castle:</code></td>
</tr>
<tr>
<td>⛺️ <code>:tent:</code></td>
<td>🏭 <code>:factory:</code></td>
<td>🗼 <code>:tokyo_tower:</code></td>
</tr>
<tr>
<td>🗾 <code>:japan:</code></td>
<td>🗻 <code>:mount_fuji:</code></td>
<td>🌄 <code>:sunrise_over_mountains:</code></td>
</tr>
<tr>
<td>🌅 <code>:sunrise:</code></td>
<td>🌠 <code>:stars:</code></td>
<td>🗽 <code>:statue_of_liberty:</code></td>
</tr>
<tr>
<td>🌉 <code>:bridge_at_night:</code></td>
<td>🎠 <code>:carousel_horse:</code></td>
<td>🌈 <code>:rainbow:</code></td>
</tr>
<tr>
<td>🎡 <code>:ferris_wheel:</code></td>
<td>⛲️ <code>:fountain:</code></td>
<td>🎢 <code>:roller_coaster:</code></td>
</tr>
<tr>
<td>🚢 <code>:ship:</code></td>
<td>🚤 <code>:speedboat:</code></td>
<td>⛵️ <code>:boat:</code></td>
</tr>
<tr>
<td>⛵️ <code>:sailboat:</code></td>
<td>🚣 <code>:rowboat:</code></td>
<td>⚓️ <code>:anchor:</code></td>
</tr>
<tr>
<td>🚀 <code>:rocket:</code></td>
<td>✈️ <code>:airplane:</code></td>
<td>🚁 <code>:helicopter:</code></td>
</tr>
<tr>
<td>🚂 <code>:steam_locomotive:</code></td>
<td>🚊 <code>:tram:</code></td>
<td>🚞 <code>:mountain_railway:</code></td>
</tr>
<tr>
<td>🚲 <code>:bike:</code></td>
<td>🚡 <code>:aerial_tramway:</code></td>
<td>🚟 <code>:suspension_railway:</code></td>
</tr>
<tr>
<td>🚠 <code>:mountain_cableway:</code></td>
<td>🚜 <code>:tractor:</code></td>
<td>🚙 <code>:blue_car:</code></td>
</tr>
<tr>
<td>🚘 <code>:oncoming_automobile:</code></td>
<td>🚗 <code>:car:</code></td>
<td>🚗 <code>:red_car:</code></td>
</tr>
<tr>
<td>🚕 <code>:taxi:</code></td>
<td>🚖 <code>:oncoming_taxi:</code></td>
<td>🚛 <code>:articulated_lorry:</code></td>
</tr>
<tr>
<td>🚌 <code>:bus:</code></td>
<td>🚍 <code>:oncoming_bus:</code></td>
<td>🚨 <code>:rotating_light:</code></td>
</tr>
<tr>
<td>🚓 <code>:police_car:</code></td>
<td>🚔 <code>:oncoming_police_car:</code></td>
<td>🚒 <code>:fire_engine:</code></td>
</tr>
<tr>
<td>🚑 <code>:ambulance:</code></td>
<td>🚐 <code>:minibus:</code></td>
<td>🚚 <code>:truck:</code></td>
</tr>
<tr>
<td>🚋 <code>:train:</code></td>
<td>🚉 <code>:station:</code></td>
<td>🚆 <code>:train2:</code></td>
</tr>
<tr>
<td>🚅 <code>:bullettrain_front:</code></td>
<td>🚄 <code>:bullettrain_side:</code></td>
<td>🚈 <code>:light_rail:</code></td>
</tr>
<tr>
<td>🚝 <code>:monorail:</code></td>
<td>🚃 <code>:railway_car:</code></td>
<td>🚎 <code>:trolleybus:</code></td>
</tr>
<tr>
<td>🎫 <code>:ticket:</code></td>
<td>⛽️ <code>:fuelpump:</code></td>
<td>🚦 <code>:vertical_traffic_light:</code></td>
</tr>
<tr>
<td>🚥 <code>:traffic_light:</code></td>
<td>⚠️ <code>:warning:</code></td>
<td>🚧 <code>:construction:</code></td>
</tr>
<tr>
<td>🔰 <code>:beginner:</code></td>
<td>🏧 <code>:atm:</code></td>
<td>🎰 <code>:slot_machine:</code></td>
</tr>
<tr>
<td>🚏 <code>:busstop:</code></td>
<td>💈 <code>:barber:</code></td>
<td>♨️ <code>:hotsprings:</code></td>
</tr>
<tr>
<td>🏁 <code>:checkered_flag:</code></td>
<td>🎌 <code>:crossed_flags:</code></td>
<td>🏮 <code>:izakaya_lantern:</code></td>
</tr>
<tr>
<td>🗿 <code>:moyai:</code></td>
<td>🎪 <code>:circus_tent:</code></td>
<td>🎭 <code>:performing_arts:</code></td>
</tr>
<tr>
<td>📍 <code>:round_pushpin:</code></td>
<td>🚩 <code>:triangular_flag_on_post:</code></td>
<td>🇯🇵 <code>:jp:</code></td>
</tr>
<tr>
<td>🇰🇷 <code>:kr:</code></td>
<td>🇨🇳 <code>:cn:</code></td>
<td>🇺🇸 <code>:us:</code></td>
</tr>
<tr>
<td>🇫🇷 <code>:fr:</code></td>
<td>🇪🇸 <code>:es:</code></td>
<td>🇮🇹 <code>:it:</code></td>
</tr>
<tr>
<td>🇷🇺 <code>:ru:</code></td>
<td>🇬🇧 <code>:gb:</code></td>
<td>🇬🇧 <code>:uk:</code></td>
</tr>
<tr>
<td>🇩🇪 <code>:de:</code></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="symbols">Symbols</h2>
<table>
<thead>
<tr>
<th>1️⃣ <code>:one:</code></th>
<th>2️⃣ <code>:two:</code></th>
<th>3️⃣ <code>:three:</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>4️⃣ <code>:four:</code></td>
<td>5️⃣ <code>:five:</code></td>
<td>6️⃣ <code>:six:</code></td>
</tr>
<tr>
<td>7️⃣ <code>:seven:</code></td>
<td>8️⃣ <code>:eight:</code></td>
<td>9️⃣ <code>:nine:</code></td>
</tr>
<tr>
<td>🔟 <code>:keycap_ten:</code></td>
<td>🔢 <code>:1234:</code></td>
<td>0️⃣ <code>:zero:</code></td>
</tr>
<tr>
<td>#️⃣ <code>:hash:</code></td>
<td>🔣 <code>:symbols:</code></td>
<td>◀️ <code>:arrow_backward:</code></td>
</tr>
<tr>
<td>⬇️ <code>:arrow_down:</code></td>
<td>▶️ <code>:arrow_forward:</code></td>
<td>⬅️ <code>:arrow_left:</code></td>
</tr>
<tr>
<td>🔠 <code>:capital_abcd:</code></td>
<td>🔡 <code>:abcd:</code></td>
<td>🔤 <code>:abc:</code></td>
</tr>
<tr>
<td>↙️ <code>:arrow_lower_left:</code></td>
<td>↘️ <code>:arrow_lower_right:</code></td>
<td>➡️ <code>:arrow_right:</code></td>
</tr>
<tr>
<td>⬆️ <code>:arrow_up:</code></td>
<td>↖️ <code>:arrow_upper_left:</code></td>
<td>↗️ <code>:arrow_upper_right:</code></td>
</tr>
<tr>
<td>⏬ <code>:arrow_double_down:</code></td>
<td>⏫ <code>:arrow_double_up:</code></td>
<td>🔽 <code>:arrow_down_small:</code></td>
</tr>
<tr>
<td>⤵️ <code>:arrow_heading_down:</code></td>
<td>⤴️ <code>:arrow_heading_up:</code></td>
<td>↩️<code>:leftwards_arrow_with_hook:</code></td>
</tr>
<tr>
<td>↪️ <code>:arrow_right_hook:</code></td>
<td>↔️ <code>:left_right_arrow:</code></td>
<td>↕️ <code>:arrow_up_down:</code></td>
</tr>
<tr>
<td>🔼 <code>:arrow_up_small:</code></td>
<td>🔃 <code>:arrows_clockwise:</code></td>
<td>🔄 <code>:arrows_counterclockwise:</code></td>
</tr>
<tr>
<td>⏪ <code>:rewind:</code></td>
<td>⏩ <code>:fast_forward:</code></td>
<td>ℹ️ <code>:information_source:</code></td>
</tr>
<tr>
<td>🆗 <code>:ok:</code></td>
<td>🔀 <code>:twisted_rightwards_arrows:</code></td>
<td>🔁 <code>:repeat:</code></td>
</tr>
<tr>
<td>🔂 <code>:repeat_one:</code></td>
<td>🆕 <code>:new:</code></td>
<td>🔝 <code>:top:</code></td>
</tr>
<tr>
<td>🆙 <code>:up:</code></td>
<td>🆒 <code>:cool:</code></td>
<td>🆓 <code>:free:</code></td>
</tr>
<tr>
<td>🆖 <code>:ng:</code></td>
<td>🎦 <code>:cinema:</code></td>
<td>🈁 <code>:koko:</code></td>
</tr>
<tr>
<td>📶 <code>:signal_strength:</code></td>
<td>🈹 <code>:u5272:</code></td>
<td>🈴 <code>:u5408:</code></td>
</tr>
<tr>
<td>🈺 <code>:u55b6:</code></td>
<td>🈯️ <code>:u6307:</code></td>
<td>🈷️ <code>:u6708:</code></td>
</tr>
<tr>
<td>🈶 <code>:u6709:</code></td>
<td>🈵 <code>:u6e80:</code></td>
<td>🈚️ <code>:u7121:</code></td>
</tr>
<tr>
<td>🈸 <code>:u7533:</code></td>
<td>🈳 <code>:u7a7a:</code></td>
<td>🈲 <code>:u7981:</code></td>
</tr>
<tr>
<td>🈂️ <code>:sa:</code></td>
<td>🚻 <code>:restroom:</code></td>
<td>🚹 <code>:mens:</code></td>
</tr>
<tr>
<td>🚺 <code>:womens:</code></td>
<td>🚼 <code>:baby_symbol:</code></td>
<td>🚭 <code>:no_smoking:</code></td>
</tr>
<tr>
<td>🅿️ <code>:parking:</code></td>
<td>♿️ <code>:wheelchair:</code></td>
<td>🚇 <code>:metro:</code></td>
</tr>
<tr>
<td>🛄 <code>:baggage_claim:</code></td>
<td>🉑 <code>:accept:</code></td>
<td>🚾 <code>:wc:</code></td>
</tr>
<tr>
<td>🚰 <code>:potable_water:</code></td>
<td>🚮 <code>:put_litter_in_its_place:</code></td>
<td>㊙️ <code>:secret:</code></td>
</tr>
<tr>
<td>㊗️ <code>:congratulations:</code></td>
<td>Ⓜ️ <code>:m:</code></td>
<td>🛂 <code>:passport_control:</code></td>
</tr>
<tr>
<td>🛅 <code>:left_luggage:</code></td>
<td>🛃 <code>:customs:</code></td>
<td>🉐 <code>:ideograph_advantage:</code></td>
</tr>
<tr>
<td>🆑 <code>:cl:</code></td>
<td>🆘 <code>:sos:</code></td>
<td>🆔 <code>:id:</code></td>
</tr>
<tr>
<td>🚫 <code>:no_entry_sign:</code></td>
<td>🔞 <code>:underage:</code></td>
<td>📵 <code>:no_mobile_phones:</code></td>
</tr>
<tr>
<td>🚯 <code>:do_not_litter:</code></td>
<td>🚱 <code>:non-potable_water:</code></td>
<td>🚳 <code>:no_bicycles:</code></td>
</tr>
<tr>
<td>🚷 <code>:no_pedestrians:</code></td>
<td>🚸 <code>:children_crossing:</code></td>
<td>⛔️ <code>:no_entry:</code></td>
</tr>
<tr>
<td>✳️ <code>:eight_spoked_asterisk:</code></td>
<td>✴️ <code>:eight_pointed_black_star:</code></td>
<td>💟 <code>:heart_decoration:</code></td>
</tr>
<tr>
<td>🆚 <code>:vs:</code></td>
<td>📳 <code>:vibration_mode:</code></td>
<td>📴 <code>:mobile_phone_off:</code></td>
</tr>
<tr>
<td>💹 <code>:chart:</code></td>
<td>💱 <code>:currency_exchange:</code></td>
<td>♈️ <code>:aries:</code></td>
</tr>
<tr>
<td>♉️ <code>:taurus:</code></td>
<td>♊️ <code>:gemini:</code></td>
<td>♋️ <code>:cancer:</code></td>
</tr>
<tr>
<td>♌️ <code>:leo:</code></td>
<td>♍️ <code>:virgo:</code></td>
<td>♎️ <code>:libra:</code></td>
</tr>
<tr>
<td>♏️ <code>:scorpius:</code></td>
<td>♐️ <code>:sagittarius:</code></td>
<td>♑️ <code>:capricorn:</code></td>
</tr>
<tr>
<td>♒️ <code>:aquarius:</code></td>
<td>♓️ <code>:pisces:</code></td>
<td>⛎ <code>:ophiuchus:</code></td>
</tr>
<tr>
<td>🔯 <code>:six_pointed_star:</code></td>
<td>❎<code>:negative_squared_cross_mark:</code></td>
<td>🅰️ <code>:a:</code></td>
</tr>
<tr>
<td>🅱️ <code>:b:</code></td>
<td>🆎 <code>:ab:</code></td>
<td>🅾️ <code>:o2:</code></td>
</tr>
<tr>
<td>💠<code>:diamond_shape_with_a_dot_inside:</code></td>
<td>♻️ <code>:recycle:</code></td>
<td>🔚 <code>:end:</code></td>
</tr>
<tr>
<td>🔛 <code>:on:</code></td>
<td>🔜 <code>:soon:</code></td>
<td>🕐 <code>:clock1:</code></td>
</tr>
<tr>
<td>🕜 <code>:clock130:</code></td>
<td>🕙 <code>:clock10:</code></td>
<td>🕥 <code>:clock1030:</code></td>
</tr>
<tr>
<td>🕚 <code>:clock11:</code></td>
<td>🕦 <code>:clock1130:</code></td>
<td>🕛 <code>:clock12:</code></td>
</tr>
<tr>
<td>🕧 <code>:clock1230:</code></td>
<td>🕑 <code>:clock2:</code></td>
<td>🕝 <code>:clock230:</code></td>
</tr>
<tr>
<td>🕒 <code>:clock3:</code></td>
<td>🕞 <code>:clock330:</code></td>
<td>🕓 <code>:clock4:</code></td>
</tr>
<tr>
<td>🕟 <code>:clock430:</code></td>
<td>🕔 <code>:clock5:</code></td>
<td>🕠 <code>:clock530:</code></td>
</tr>
<tr>
<td>🕕 <code>:clock6:</code></td>
<td>🕡 <code>:clock630:</code></td>
<td>🕖 <code>:clock7:</code></td>
</tr>
<tr>
<td>🕢 <code>:clock730:</code></td>
<td>🕗 <code>:clock8:</code></td>
<td>🕣 <code>:clock830:</code></td>
</tr>
<tr>
<td>🕘 <code>:clock9:</code></td>
<td>🕤 <code>:clock930:</code></td>
<td>💲 <code>:heavy_dollar_sign:</code></td>
</tr>
<tr>
<td>©️ <code>:copyright:</code></td>
<td>®️ <code>:registered:</code></td>
<td>™️ <code>:tm:</code></td>
</tr>
<tr>
<td>❌ <code>:x:</code></td>
<td>❗️ <code>:heavy_exclamation_mark:</code></td>
<td>‼️ <code>:bangbang:</code></td>
</tr>
<tr>
<td>⁉️ <code>:interrobang:</code></td>
<td>⭕️ <code>:o:</code></td>
<td>✖️ <code>:heavy_multiplication_x:</code></td>
</tr>
<tr>
<td>➕ <code>:heavy_plus_sign:</code></td>
<td>➖ <code>:heavy_minus_sign:</code></td>
<td>➗ <code>:heavy_division_sign:</code></td>
</tr>
<tr>
<td>💮 <code>:white_flower:</code></td>
<td>💯 <code>:100:</code></td>
<td>✔️ <code>:heavy_check_mark:</code></td>
</tr>
<tr>
<td>☑️ <code>:ballot_box_with_check:</code></td>
<td>🔘 <code>:radio_button:</code></td>
<td>🔗 <code>:link:</code></td>
</tr>
<tr>
<td>➰ <code>:curly_loop:</code></td>
<td>〰️ <code>:wavy_dash:</code></td>
<td>〽️ <code>:part_alternation_mark:</code></td>
</tr>
<tr>
<td>🔱 <code>:trident:</code></td>
<td>:black_square: <code>:black_square:</code></td>
<td>:white_square: <code>:white_square:</code></td>
</tr>
<tr>
<td>✅ <code>:white_check_mark:</code></td>
<td>🔲 <code>:black_square_button:</code></td>
<td>🔳 <code>:white_square_button:</code></td>
</tr>
<tr>
<td>⚫️ <code>:black_circle:</code></td>
<td>⚪️ <code>:white_circle:</code></td>
<td>🔴 <code>:red_circle:</code></td>
</tr>
<tr>
<td>🔵 <code>:large_blue_circle:</code></td>
<td>🔷 <code>:large_blue_diamond:</code></td>
<td>🔶 <code>:large_orange_diamond:</code></td>
</tr>
<tr>
<td>🔹 <code>:small_blue_diamond:</code></td>
<td>🔸 <code>:small_orange_diamond:</code></td>
<td>🔺 <code>:small_red_triangle:</code></td>
</tr>
<tr>
<td>🔻 <code>:small_red_triangle_down:</code></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>