(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{685:function(t,_,v){"use strict";v.r(_);var l=v(4),i=Object(l.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"请求报文-请求行-请求头-请求体"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求报文-请求行-请求头-请求体"}},[t._v("#")]),t._v(" 请求报文（请求行+请求头+请求体）")]),t._v(" "),v("h3",{attrs:{id:"请求报文头属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求报文头属性"}},[t._v("#")]),t._v(" 请求报文头属性")]),t._v(" "),v("ul",[v("li",[t._v("Accept：客户端接收什么类型的相应")]),t._v(" "),v("li",[t._v("Accept-Encoding：编码格式")]),t._v(" "),v("li",[t._v("Referer：请求头是从那个url来的")]),t._v(" "),v("li",[t._v("Connection：告诉对方当前tcp连接的状态。如果是keep-alive，网络链接就是持久的，不会关闭，使得对同一个服务器的请求可以持续在这个连接上完成。")]),t._v(" "),v("li",[t._v("Cache-Control：缓存控制。如一个请求希望相应的内容在客户端缓存一段时间或不被缓存    //协商缓存")]),t._v(" "),v("li",[t._v("Content-type：（一般存在于post请求），意在告诉服务器传输的是什么类型的数据。传输文件的时候要配置这个请求头。")]),t._v(" "),v("li",[t._v("Host：请求资源主机端口")]),t._v(" "),v("li",[t._v("User-Agent：告诉服务器，客户端使用的操作系统、浏览器版本名称")])]),t._v(" "),v("h2",{attrs:{id:"相应报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#相应报文"}},[t._v("#")]),t._v(" 相应报文")]),t._v(" "),v("h3",{attrs:{id:"状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),v("ol",[v("li",[t._v("1xx：指示信息–表示请求已接收，继续处理。")]),t._v(" "),v("li",[t._v("2xx：成功–表示请求已被成功接收、理解、接受。\n"),v("ul",[v("li",[t._v("常用的有200")])])]),t._v(" "),v("li",[t._v("3xx：重定向–要完成请求必须进行更进一步的操作。\n"),v("ul",[v("li",[t._v("常用的有304")])])]),t._v(" "),v("li",[t._v("4xx：客户端错误–请求有语法错误或请求无法实现。\n"),v("ul",[v("li",[t._v("常见404")])])]),t._v(" "),v("li",[t._v("5xx：服务器端错误–服务器未能实现合法的请求。\n"),v("ul",[v("li",[t._v("常见500")])])])]),t._v(" "),v("ul",[v("li",[t._v("常见：\n"),v("ul",[v("li",[t._v("200：成功")]),t._v(" "),v("li",[t._v("301：永久跳转")]),t._v(" "),v("li",[t._v("302：可以简单的理解为该资源原本确实存在,但已经被临时改变了位置。")]),t._v(" "),v("li",[t._v("303：POST重定向为GET")]),t._v(" "),v("li",[t._v("304：资源未修改，可以直接读取本地缓存。这是协商缓存的情况。")]),t._v(" "),v("li",[t._v("400：请求中有语法错误，一般是数据或者文件格式传错了")]),t._v(" "),v("li",[t._v("403: 意思是除非拥有授权否则服务器拒绝提供所请求的资源。这个状态经常会由于服务器上的损坏文件或目录许可而引起。")]),t._v(" "),v("li",[t._v("404：找不到页面地址")]),t._v(" "),v("li",[t._v("405 (Method Not Allowed/方法未允许)：指出请求方法(GET, POST, HEAD, PUT, DELETE, 等)对某些特定的资源不允许使用。\n该状态码是新加入 HTTP 1.1中的。")]),t._v(" "),v("li",[t._v("500：内部服务器错误")]),t._v(" "),v("li",[t._v("501 (SC_NOT_IMPLEMENTED)：状态告诉客户端服务器不支持请求中要求的功能。例如，客户端执行了如PUT这样的服务器并不支持的命令。")])])])]),t._v(" "),v("h2",{attrs:{id:"http1-0-1-x-2-0-3-0-和-https区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http1-0-1-x-2-0-3-0-和-https区别"}},[t._v("#")]),t._v(" HTTP1.0 1.x 2.0 3.0 和 HTTPS区别")]),t._v(" "),v("h3",{attrs:{id:"_1-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-0"}},[t._v("#")]),t._v(" 1.0")]),t._v(" "),v("ul",[v("li",[t._v("HTTP/1.* 一次请求-响应，建立一个连接，用完关闭；每一个请求都要建立一个连接；")])]),t._v(" "),v("h3",{attrs:{id:"_1-1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1"}},[t._v("#")]),t._v(" 1.1")]),t._v(" "),v("ul",[v("li",[t._v("长连接复用")]),t._v(" "),v("li",[t._v("HTTP/1.1 Pipeling解决方式为，若干个请求排队串行化单线程处理，后面的请求等待前面请求的返回才能\n获得执行机会，一旦有某请求超时等，后续请求只能被阻塞，毫无办法，也就是人们常说的线头阻塞；")])]),t._v(" "),v("h3",{attrs:{id:"_2-0"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-0"}},[t._v("#")]),t._v(" 2.0")]),t._v(" "),v("ul",[v("li",[t._v("多路复用，即每一个request都是是用作连接共享机制的。一个request对应一个id，这样一个连接上可以有多个request，\n每个连接的request可以随机的混杂在一起，接收方可以根据request的 id将request再归属到各自不同的服务端请求里面。")]),t._v(" "),v("li",[t._v("HTTP/2多个请求可同时在一个连接上并行执行。某个请求任务耗时严重，不会影响到其它连接的正常执行；")]),t._v(" "),v("li",[t._v("请求头压缩")])]),t._v(" "),v("h3",{attrs:{id:"_3-0-又叫http-over-quic"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-又叫http-over-quic"}},[t._v("#")]),t._v(" 3.0（又叫HTTP over QUIC）")]),t._v(" "),v("ul",[v("li",[t._v("这个差别很大，因为quic他是用的udp传输，不再是tcp。可以定义成:HTTP3.0基于UDP的安全可靠的HTTP2.0协议。")]),t._v(" "),v("li",[t._v("减少了TCP三次握手及TLS握手时间。HTTPS和HTTP2还需要使用TLS协议来进行安全传输。这就出现了两个握手延迟，而基于UDP\n协议的QUIC，因为UDP本身没有连接的概念，连接建立时只需要一次交互，半个握手的时间。")]),t._v(" "),v("li",[t._v("多路复用丢包的线头阻塞问题.QUIC中一个连接上的多个stream之间没有依赖。所以当发生丢包时，只会影响当前的stream，也就避免了线头阻塞问题。")]),t._v(" "),v("li",[t._v("优化重传策略。发送端在传送封包时，初始与重传的每一个封包都改用一个新的编号，unique packet number，每一个编号都唯一而且严格递增，这\n样每次在收到ACK时，就可以依据编号明确的判断这个ACK是来自初始封包或者是重传封包。")]),t._v(" "),v("li",[t._v("流量控制。采用了连线层(connection flow control)和Stream层的(streamflow control)流量控制，限制单一Stream可以占用的最大buffer size。")]),t._v(" "),v("li",[t._v("连接迁移。QUIC连接不以四元组（源ip，源端口，目的ip，目的端口）作为标识，而是使用一个64位的随机数，这个随机数被称为Connection lD，对应每\n个stream，即使IP或者端口发生变化，只要Connection ID没有变化，那么连接依然可以维持。")])]),t._v(" "),v("h3",{attrs:{id:"http-与-https"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-与-https"}},[t._v("#")]),t._v(" HTTP 与 HTTPS")]),t._v(" "),v("ul",[v("li",[t._v("HTTPS协议需要到CA申请证书，一般免费证书很少，需要交费。")]),t._v(" "),v("li",[t._v("HTTP协议运行在TCP之上，所有传输的内容都是明文，HTTPS运行在SSL/TLS之上，SSL/TLS运行在TCP之上，所有传输的内容都经过加密的。")]),t._v(" "),v("li",[t._v("HTTP和HTTPS使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。")]),t._v(" "),v("li",[t._v("HTTPS可以有效的防止运营商劫持，解决了防劫持的一个大问题。")])]),t._v(" "),v("h3",{attrs:{id:"http无状态协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http无状态协议"}},[t._v("#")]),t._v(" http无状态协议")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("为什么是无状态")]),t._v(" "),v("ul",[v("li",[t._v("因为他每个请求都是完全独立的，每个请求包含了处理这个请求所需的完整的数据，发送请求不涉及到状态\n变更。")])])]),t._v(" "),v("li",[v("p",[t._v("优缺点")]),t._v(" "),v("ul",[v("li",[t._v("优点：即使连接断开，会话状态不会受到严重伤害，保持会话也不需要保持连接本身。\n无状态也对中间件友好，他不需要理解通信双方的交互过程。")]),t._v(" "),v("li",[t._v("缺点：单个请求需要的所有信息都必须要包含在请求中一次发送到服务端，这导致单个消\n息的结构需要比较复杂，必须能够支持大量元数据。")])])]),t._v(" "),v("li",[v("p",[t._v("解决无状态问题，用cookie，session，token，jwt。")])])])])}),[],!1,null,null,null);_.default=i.exports}}]);