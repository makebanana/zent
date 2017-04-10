webpackJsonp([5],{800:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e){return j.default.createElement(e.tag,(0,z.default)({},e.attributes,{dangerouslySetInnerHTML:{__html:e.html}}))}function l(e){return j.default.createElement(s,{tag:"section",html:e.html})}function r(e){return j.default.createElement(s,{tag:"style",html:e.style})}var o=a(1),c=n(o),d=a(2),i=n(d),u=a(5),h=n(u),m=a(4),f=n(m),p=a(3),g=n(p),_=a(12),z=n(_),y=a(0),j=n(y);!function(e){function t(){var e,a,n,s;(0,i.default)(this,t);for(var l=arguments.length,r=Array(l),o=0;o<l;o++)r[o]=arguments[o];return a=n=(0,f.default)(this,(e=t.__proto__||(0,c.default)(t)).call.apply(e,[this].concat(r))),n.state={showCode:!0},n.toggle=function(){n.setState({showCode:!n.state.showCode})},s=a,(0,f.default)(n,s)}(0,g.default)(t,e),(0,h.default)(t,[{key:"render",value:function(){var e=this.state.showCode,t=this.props,a=t.title,n=t.src,l=t.demo;return j.default.createElement("div",{className:"zandoc-react-demo"},j.default.createElement("div",{className:"zandoc-react-demo__preview"},l),j.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},j.default.createElement("i",{className:"zenticon zenticon-right zandoc-react-demo__toggle "+(e?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")}),j.default.createElement(s,{tag:"div",attributes:{className:"zandoc-react-demo__title"},html:a})),e&&j.default.createElement(s,{tag:"pre",html:n,attributes:{className:"zandoc-react-demo__code"}}))}}]),t}(y.Component);e.exports=function(e){function t(){return(0,i.default)(this,t),(0,f.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,g.default)(t,e),(0,h.default)(t,[{key:"render",value:function(){return j.default.createElement("div",{className:"zandoc-react-container "},j.default.createElement(r,{style:""}),j.default.createElement(l,{html:'<h2 id="zent"><a href="#zent">¶</a>Zent</h2>\n<p>一套 React 的基础组件。</p>\n<p>A collection of essential UI components written with React.</p>\n<h3 id="an-zhuang"><a href="#an-zhuang">¶</a>安装</h3>\n<pre><code class="hljs shell">npm install zent\n</code></pre>\n<h3 id="shi-yong-zu-jian"><a href="#shi-yong-zu-jian">¶</a>使用组件</h3>\n<pre><code class="hljs js"><span class="hljs-keyword">import</span> { Grid } <span class="hljs-keyword">from</span> <span class="hljs-string">\'zent\'</span>;\n\nReactDOM.render(<span class="xml"><span class="hljs-tag">&#x3C;<span class="hljs-name">Grid</span> /></span>, someNode);\n</span></code></pre>\n<h3 id="yin-ru-yang-shi"><a href="#yin-ru-yang-shi">¶</a>引入样式</h3>\n<pre><code class="hljs js"><span class="hljs-keyword">import</span> <span class="hljs-string">\'zent/lib/index.css\'</span>;\n</code></pre>'}))}}]),t}(y.Component)}});