(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{554:function(e,r,o){e.exports=o.p+"assets/img/image-20220218175759055.3ee0a03f.png"},563:function(e,r,o){"use strict";o.r(r);var t=o(17),n=Object(t.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("blockquote",[t("p",[e._v("本人是一名前端的初学者，将不定时分享一些自己在学习过程中的想法，希望我的文章能对你有所帮助，若你发现文章之中存在某些错误或让你疑惑的位置，也欢迎大家在评论区指出，让我们一起讨论，共同进步！\n"),t("img",{attrs:{src:o(554),alt:"image-20220218175759055"}})])]),e._v(" "),t("div",{staticClass:"language-! extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("无论把责任归咎于谁，到头来决定一切的还是自己。\n     --JOE  《MEGALO BOX》\n")])])]),t("h1",{attrs:{id:"层叠上下文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#层叠上下文"}},[e._v("#")]),e._v(" 层叠上下文")]),e._v(" "),t("p",[e._v("我们假定用户正面向（浏览器）视窗或网页，而 HTML 元素沿着其相对于用户的一条虚构的 z 轴排开，"),t("strong",[e._v("层叠上下文")]),e._v("就是对这些 HTML 元素的一个三维构想。每个HTML元素基于其元素属性按照优先级顺序占据这个空间。")]),e._v(" "),t("h2",{attrs:{id:"层叠上下文-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#层叠上下文-2"}},[e._v("#")]),e._v(" 层叠上下文")]),e._v(" "),t("p",[e._v("文档中的元素，满足下列任一条件就可以形成一个层叠上下文：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("文档根元素（"),t("code",[e._v("<html>")]),e._v("）；")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/position",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("position")]),t("OutboundLink")],1),e._v(" 值为 "),t("code",[e._v("absolute")]),e._v("（绝对定位）或 "),t("code",[e._v("relative")]),e._v("（相对定位）且 "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("z-index")]),t("OutboundLink")],1),e._v(" 值不为 "),t("code",[e._v("auto")]),e._v(" 的元素；")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/position",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("position")]),t("OutboundLink")],1),e._v(" 值为 "),t("code",[e._v("fixed")]),e._v("（固定定位）或 "),t("code",[e._v("sticky")]),e._v("（粘滞定位）的元素（沾滞定位适配所有移动设备上的浏览器，但老的桌面浏览器不支持）；")])]),e._v(" "),t("li",[t("p",[e._v("flex ("),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("flexbox")]),e._v(" (en-US)"),t("OutboundLink")],1),e._v(") 容器的子元素，且 "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("z-index")]),t("OutboundLink")],1),e._v(" 值不为 "),t("code",[e._v("auto")]),e._v("；")])]),e._v(" "),t("li",[t("p",[e._v("grid ("),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("grid")]),t("OutboundLink")],1),e._v(") 容器的子元素，且 "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("z-index")]),t("OutboundLink")],1),e._v(" 值不为 "),t("code",[e._v("auto")]),e._v("；")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/opacity",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("opacity")]),t("OutboundLink")],1),e._v(" 属性值小于 "),t("code",[e._v("1")]),e._v(" 的元素（参见 "),t("a",{attrs:{href:"http://www.w3.org/TR/css3-color/#transparency",target:"_blank",rel:"noopener noreferrer"}},[e._v("the specification for opacity"),t("OutboundLink")],1),e._v("）；")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/mix-blend-mode",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("mix-blend-mode")]),t("OutboundLink")],1),e._v(" 属性值不为 "),t("code",[e._v("normal")]),e._v(" 的元素；")])]),e._v(" "),t("li",[t("p",[e._v("以下任意属性值不为 "),t("code",[e._v("none")]),e._v(" 的元素：")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("transform")]),t("OutboundLink")],1),e._v("；")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("filter")]),t("OutboundLink")],1),e._v("；")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("perspective")]),t("OutboundLink")],1),e._v("；")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("clip-path")]),t("OutboundLink")],1),e._v("；")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("mask")]),t("OutboundLink")],1),e._v(" / "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-image",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("mask-image")]),t("OutboundLink")],1),e._v(" / "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask-border",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("mask-border")]),t("OutboundLink")],1),e._v("；")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/isolation",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("isolation")]),t("OutboundLink")],1),e._v(" 属性值为 "),t("code",[e._v("isolate")]),e._v(" 的元素；")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/-webkit-overflow-scrolling",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("-webkit-overflow-scrolling")]),t("OutboundLink")],1),e._v(" 属性值为 "),t("code",[e._v("touch")]),e._v(" 的元素；")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("will-change")]),t("OutboundLink")],1),e._v(" 值设定了任一属性而该属性在 non-initial 值时会创建层叠上下文的元素（参考"),t("a",{attrs:{href:"http://dev.opera.com/articles/css-will-change-property/",target:"_blank",rel:"noopener noreferrer"}},[e._v("这篇文章"),t("OutboundLink")],1),e._v("）；")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/contain",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("contain")]),t("OutboundLink")],1),e._v(" 属性值为 "),t("code",[e._v("layout")]),e._v("、"),t("code",[e._v("paint")]),e._v(" 或包含它们其中之一的合成值（比如 "),t("code",[e._v("contain: strict")]),e._v("、"),t("code",[e._v("contain: content")]),e._v("）的元素。")])])]),e._v(" "),t("p",[e._v("在层叠上下文中，子元素同样也按照下面的规则进行层叠。 重要的是，其子级层叠上下文的 "),t("code",[e._v("z-index")]),e._v(" 值只在父级中才有意义。子级层叠上下文被自动视为父级层叠上下文的一个独立单元。")]),e._v(" "),t("h2",{attrs:{id:"z-index属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#z-index属性"}},[e._v("#")]),e._v(" z-index属性")]),e._v(" "),t("p",[e._v("通常情况下，"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/HTML",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTML"),t("OutboundLink")],1),e._v("页面可以被认为是二维的，因为文本，图像和其他元素被排列在页面上而不重叠。在这种情况下，只有一个渲染进程，所有元素都知道其他元素所占用的空间。 "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("z-index")]),t("OutboundLink")],1),e._v("属性可让你在渲染内容时调整对象分层的顺序。")]),e._v(" "),t("p",[t("em",[e._v("在 CSS 2.1 中, 所有的盒模型元素都处于三维坐标系中。 除了我们常用的横坐标和纵坐标， 盒模型元素还可以沿着“z 轴”层叠摆放， 当他们相互覆盖时， z 轴顺序就变得十分重要。")])]),e._v(" "),t("h3",{attrs:{id:"_1-当没有元素包含z-index属性时-元素按照如下顺序堆叠-从底到顶顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-当没有元素包含z-index属性时-元素按照如下顺序堆叠-从底到顶顺序"}},[e._v("#")]),e._v(" 1. "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index",target:"_blank",rel:"noopener noreferrer"}},[e._v("当没有元素包含z-index属性时，元素按照如下顺序堆叠（从底到顶顺序）"),t("OutboundLink")],1),e._v("：")]),e._v(" "),t("ol",[t("li",[e._v("根元素的背景和边界")]),e._v(" "),t("li",[e._v("普通流(无定位)里的块元素(没有position或者position:static;)按HTML中的出现顺序堆叠")]),e._v(" "),t("li",[e._v("定位元素按HTML中的出现顺序堆叠")])]),e._v(" "),t("p",[e._v("在接下来的例子中，相对和绝对定位的块元素的大小和位置刚好说明上述堆叠规则。")]),e._v(" "),t("p",[t("strong",[e._v("Notes:")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("在一组由不含有任何z-index属性的同类元素，如例子中的定位块元素（DIV #1 至 #4），这些元素按照它们在HTML结构中出现的顺序堆叠，而不管它们的定位属性如何。")])]),e._v(" "),t("li",[t("p",[e._v("普通流中不含有定位属性的标准块元素（DIV #5）始终先于定位元素渲染并出现在定位元素的下层，即便它们在HTML结构中出现的位置晚于定位元素也是如此。")])]),e._v(" "),t("li",[t("p",[e._v("当没有指定z-index的时候， 所有元素都在会被渲染在默认层(0层)")])]),e._v(" "),t("li",[t("p",[e._v("当多个元素的z-index属性相同的时候(在同一个层里面)，那么将按照 "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index",target:"_blank",rel:"noopener noreferrer"}},[e._v("未使用 z-index 的层叠"),t("OutboundLink")],1),e._v(" 中描述的规则进行布局。")])])]),e._v(" "),t("h3",{attrs:{id:"_2-层叠与浮动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-层叠与浮动"}},[e._v("#")]),e._v(" 2. "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float",target:"_blank",rel:"noopener noreferrer"}},[e._v("层叠与浮动"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("对于浮动的块元素来说，层叠顺序变得有些不同。浮动块元素被放置于非定位块元素与定位块元素之间：")]),e._v(" "),t("ol",[t("li",[e._v("根元素的背景与边框")]),e._v(" "),t("li",[e._v("位于普通流中的后代块元素按照它们在 HTML 中出现的顺序层叠")]),e._v(" "),t("li",[e._v("浮动块元素")]),e._v(" "),t("li",[e._v("后代中的定位元素按照它们在 HTML 中出现的顺序层叠")])]),e._v(" "),t("p",[e._v("实际上，在接下来的例子中你会看到，非定位块元素(DIV #4)的背景与边框丝毫不会受到浮动块元素的影响，但内容却恰恰相反。出现这种情况是由于 CSS 的标准浮动行为引起的。")]),e._v(" "),t("p",[e._v("这种行为可以通过1中的列表的改进版本来解释：")]),e._v(" "),t("ol",[t("li",[e._v("根元素的背景与边框；")]),e._v(" "),t("li",[e._v("位于普通流中的后代块元素按照它们在 HTML 中出现的顺序层叠；")]),e._v(" "),t("li",[e._v("浮动块元素；")]),e._v(" "),t("li",[e._v("常规流中的后代行内元素；")]),e._v(" "),t("li",[e._v("后代中的定位元素按照它们在 HTML 中出现的顺序层叠；")])]),e._v(" "),t("p",[t("strong",[e._v("注意：")]),e._v("(设置透明度会隐式的创建一个层叠上下文。)")]),e._v(" "),t("h3",{attrs:{id:"_3-例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-例子"}},[e._v("#")]),e._v(" 3. 例子")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stacking context example 1"),t("OutboundLink")],1),e._v(" : 在两层元素的第二层上使用 z-index")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stacking context example 2"),t("OutboundLink")],1),e._v(" : 在两层元素的所有层上使用 z-index")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stacking context example 3"),t("OutboundLink")],1),e._v(" : 在三层元素的第二层上使用 z-index（该案例主要是说明在同一个层叠上下文按照出现的先后顺序来，即1中的规则）")]),e._v(" "),t("li",[e._v("《css世界》作者张鑫旭的"),t("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入理解CSS中的层叠上下文和层叠顺序"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=n.exports}}]);