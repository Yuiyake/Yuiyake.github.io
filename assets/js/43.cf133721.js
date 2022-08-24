(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{692:function(n,s,e){"use strict";e.r(s);var a=e(4),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"为什么node是单线程但能处理高并发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么node是单线程但能处理高并发"}},[n._v("#")]),n._v(" 为什么node是单线程但能处理高并发？")]),n._v(" "),e("ul",[e("li",[n._v("首先明确单线程的好处\n"),e("ul",[e("li",[n._v("无需像多线程那样去关注线程之间的状态同步问题")]),n._v(" "),e("li",[n._v("没有线程切换所带来的开销")]),n._v(" "),e("li",[n._v("没有死锁存在")])])]),n._v(" "),e("li",[n._v("为什么能高并发？\n"),e("ul",[e("li",[n._v("原因之一就是node具有异步I/O特性，每当有I/O请求发生时，node会提供给该请求一个I/O线程。然后node就不管这个I/O的操作\n过程了，而是继续执行主线程上的事件，只需要在该请求返回回调时在处理即可。也就是node省去了许多等待请求的时间。")]),n._v(" "),e("li",[n._v("还有一个原因就是事物驱动。主线程通过eventLoop事件循环触发的方式来运行程序。")])])]),n._v(" "),e("li",[n._v("node怎么知道请求返回了回调，又应该何时去处理这些回调呢？\n"),e("ul",[e("li",[n._v("node的另一特性：事务驱动，即主线程通过event loop事件循环触发的方式来运行程序")])])])]),n._v(" "),e("h2",{attrs:{id:"node生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node生命周期"}},[n._v("#")]),n._v(" node生命周期")]),n._v(" "),e("ul",[e("li",[e("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dfe9eb55b6dc40a6be5c0ff947e4d034~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?",alt:""}})]),n._v(" "),e("li",[n._v("node根据任务的种类和优先级分成了七类：Timers，Pending，Idle，Prepare，Poll，Check，Close")]),n._v(" "),e("li",[n._v("对应的生命周期是这样的")])]),n._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("   ┌───────────────────────────┐\n┌─>│           timers          │  ----事件循环在这个阶段会检查存放定时器的数据结构（最小堆），对其中的定时器进行遍历，逐个比较当前时间和过期时间，\n│  │                           │      判断该定时器是否过期，如果过期的话，就将该定时器的回调函数取出并执行。\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n│  │     pending callbacks     │  ----该阶段会执行网络、IO 等异常时的回调。一些 *nix 上报的错误，在这个阶段会得到处理。另外，一些应该在上\n│  │                           │      轮循环的 poll 阶段执行的 I/O 回调会被推迟到这个阶段执行。\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n│  │       idle, prepare       │\n│  └─────────────┬─────────────┘      ┌───────────────┐\n│  ┌─────────────┴─────────────┐      │   incoming:   │\n│  │           poll            │<─────┤  connections, │ ---检索新的 I/O 事件；执行与 I/O 相关的回调（除了关闭回调、定时器调度的回调和 \n│  │                           │      │               │    之外几乎所有回调setImmediate()）；节点会在适当的时候阻塞在这里。\n│  └─────────────┬─────────────┘      │   data, etc.  │\n│  ┌─────────────┴─────────────┐      └───────────────┘\n│  │           check           │    ----该阶段会依次执行 setImmediate() 的回调。\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n└──┤      close callbacks      │    ----执行一些关闭资源的回调，如 socket.on('close', ...)\n   └───────────────────────────┘\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);