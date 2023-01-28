<!-- author: TOLIE -->
<!-- date: 2022-12-14 16:45:06 -->
<!-- description: blog详细内容页面 -->
<template>
  <md-editor v-model="text" theme="light" preview-only />
</template>
<script lang='ts' setup>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref('<h1><a href="#Web网络安全">Web网络安全</a></h1><h2><a href="#Xss攻击">Xss攻击</a></h2><p>实施XSS攻击需要具备两个条件：</p> <p>一、需要向web页面注入恶意代码；</p> <p>二、这些恶意代码能够被浏览器成功的执行。</p> <h3><a href="#反射型">反射型</a></h3><p><strong>url参数直接注入</strong></p> <p>场景说明：在网站的搜索框内直接输入攻击脚本</p> <pre><code><span>// 搜索框搜索 http://localhost/?keyWord=<span>&lt;<span>script</span>&gt;</span>alert(111)<span>&lt;/<span>script</span>&gt;</span></span> </code></pre> <h3><a href="#存储型">存储型</a></h3><p><strong>存储到DB后读取时注入</strong></p> <p>场景说明：攻击脚本作为留言内容，提交给后台保存，刷新页面后端返回攻击脚本给前端</p> <pre><code><span><span>// 留言板插入数据库</span> 留言测试&lt;script&gt;<span>alert</span>(<span>222</span>)&lt;<span>/script&gt;/</span><span>/留言内容</span></span> </code></pre> <h3><a href="#Dom型">Dom型</a></h3><h4><a href="#HTML节点内容">HTML节点内容</a></h4><p>攻击脚本通过接口存入数据库中，当页面刷新时，插入的脚本替换页面HTML节点内容，脚本随即执行，引发漏洞攻击</p> <pre><code><span><span>&lt;!-- content变量被攻击脚本替换 --&gt;</span> <span>&lt;<span>div</span>&gt;</span> {{content}} <span>&lt;/<span>div</span>&gt;</span> <span>&lt;<span>div</span>&gt;</span> <span>&lt;<span>script</span>&gt;</span> <span>&lt;/<span>script</span>&gt;</span> &lt;/div</span> </code></pre> <h4><a href="#HTML属性">HTML属性</a></h4><p><strong>还可以利用img标签的onerror事件执行JS脚本</strong></p> <h3><a href="#解决思路">解决思路</a></h3><p>整体思路：<strong>转义</strong></p> <ul> <li>HTML-&gt;<a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.w3school.com.cn%2Fhtml%2Fhtml_entities.asp">HTML实体</a></li><li>js-&gt;JSON_encode</li></ul> <h4><a href="#html实体">html实体</a></h4><table> <thead> <tr> <th>显示结果</th> <th>描述</th> <th>实体名称</th> <th>实体编号</th> </tr> </thead> <tbody><tr> <td>&lt;</td> <td>小于号</td> <td>&lt;</td> <td>&lt;</td> </tr> <tr> <td>&gt;</td> <td>大于号</td> <td>&gt;</td> <td>&gt;</td> </tr> <tr> <td>&amp;</td> <td>和号</td> <td>&amp;</td> <td>&amp;</td> </tr> <tr> <td>"</td> <td>引号</td> <td>"</td> <td>"</td> </tr> </tbody></table> <p>转义时机：</p> <ol> <li>存入数据库时转义</li><li>返回给前端时转义</li></ol>');
</script>

<style scoped lang='less'>
.md-editor {
  padding: 0 8px;
  border-left: 1px solid var(--el-menu-border-color);
  border-right: 1px solid var(--el-menu-border-color);
  border-radius: 6px;
}
</style>