(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{350:function(a,e,v){"use strict";v.r(e);var t=v(18),s=Object(t.a)({},(function(){var a=this,e=a.$createElement,v=a._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"手动构建-qv2ray-项目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#手动构建-qv2ray-项目"}},[a._v("#")]),a._v(" 手动构建 Qv2ray 项目")]),a._v(" "),v("p",[a._v("在我们当前的release(还)不支持的平台上,你可以手动构建Qv2ray.")]),a._v(" "),v("h2",{attrs:{id:"_0-构建依赖"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_0-构建依赖"}},[a._v("#")]),a._v(" 0. 构建依赖")]),a._v(" "),v("p",[a._v("请确保你已经满足所有依赖需求.")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("Qt version "),v("code",[a._v(">= 5.11")])])]),a._v(" "),v("li",[v("p",[a._v("推荐Qt 5.13, 5.14")])]),a._v(" "),v("li",[v("p",[a._v("gRPC & protobuf")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("在Windows下构建Qv2ray时,"),v("code",[a._v("gRPC")]),a._v("和"),v("code",[a._v("protobuf")]),a._v("两者都需要.")])]),a._v(" "),v("li",[v("p",[a._v("在Linux和macOS下构建Qv2ray时,只有"),v("code",[a._v("protobuf")]),a._v("是必须的,而"),v("code",[a._v("gRPC")]),a._v("可以替换成一个自制的库"),v("code",[a._v("libqvb")]),a._v(".")]),a._v(" "),v("p",[v("strong",[a._v("打包者注意: 别用"),v("code",[a._v("gRPC 1.26")]),a._v(", 他有一个阻碍Qv2ray启动的bug.")])])])])]),a._v(" "),v("li",[v("p",[v("code",[a._v("OpenSSL")])])]),a._v(" "),v("li",[v("p",[a._v("如果你没有"),v("code",[a._v("OpenSSL")]),a._v(",构建可能 "),v("strong",[a._v("不")]),a._v("会失败 因为它是一个 "),v("strong",[v("u",[a._v("运行时依赖")])]),a._v(".")])]),a._v(" "),v("li",[v("p",[a._v("编译器要使用 "),v("code",[a._v("std-c++17")]),a._v("选项,需要包括 嵌套命名空间(nested namespace), 结构化绑定(tuple expansion )以及内联变量( inline variable)的支持.")]),a._v(" "),v("ul",[v("li",[a._v("Linux已知"),v("code",[a._v("gcc7")]),a._v("支持,是不错的选择 .")]),a._v(" "),v("li",[a._v("Windows需要最少MSVC 14.2版本.")])])])]),a._v(" "),v("h2",{attrs:{id:"_1-获取源码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取源码"}},[a._v("#")]),a._v(" 1. 获取源码")]),a._v(" "),v("p",[a._v("有各种方式获取Qv2ray的源码,你可以通过下方式:")]),a._v(" "),v("ul",[v("li",[a._v("Git: "),v("code",[a._v("git clone https://github.com/Qv2ray/Qv2ray")])]),a._v(" "),v("li",[a._v("直接下载github仓库上某个分支的源码 ("),v("strong",[a._v("不建议这样做,因为它缺少git子模块(即git submodule)的元数据.")]),a._v(")")])]),a._v(" "),v("h2",{attrs:{id:"_2-构建步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-构建步骤"}},[a._v("#")]),a._v(" 2. 构建步骤")]),a._v(" "),v("p",[a._v("假设你安装了Qt并且当前配置了"),v("code",[a._v("$PATH")]),a._v("环境变量,从而在Terminal/Shell/Command Prompt中至少能成功执行"),v("code",[a._v("qmake --version")]),a._v(",而且你也正确获取了源码和子模块 (submodule),使其位于某个目录下的一个叫做"),v("code",[a._v("Qv2ray")]),a._v("的目录:")]),a._v(" "),v("h3",{attrs:{id:"_2-0-构建之前"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-构建之前"}},[a._v("#")]),a._v(" 2.0 构建之前")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("Arch Linux: 使用pacman安装这两个包: "),v("code",[a._v("pacman -S grpc protobuf")]),a._v(" .")])]),a._v(" "),v("li",[v("p",[a._v("macOS: 通过homebrew安装两个包: "),v("code",[a._v("brew install grpc protobuf")])])]),a._v(" "),v("li",[v("p",[a._v("对于 Windows:")]),a._v(" "),v("ul",[v("li",[a._v("从 "),v("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray-deps",target:"_blank",rel:"noopener noreferrer"}},[a._v("Qv2ray-deps"),v("OutboundLink")],1),a._v(" 这个仓库release中下载 "),v("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray-deps/releases/download/release/Qv2ray-deps-grpc-x64-windows.7z",target:"_blank",rel:"noopener noreferrer"}},[a._v("gRPC dependency package - x64"),v("OutboundLink")],1),a._v(" 或者 "),v("a",{attrs:{href:"https://github.com/Qv2ray/Qv2ray-deps/releases/download/release/Qv2ray-deps-grpc-x86-windows.7z",target:"_blank",rel:"noopener noreferrer"}},[a._v("gRPC dependency package - x86"),v("OutboundLink")],1),a._v("  然后解压到 "),v("code",[a._v("libs/x**-windows/")]),a._v(" 目录, 其中 "),v("code",[a._v("**")]),a._v(" 是 "),v("code",[a._v("86")]),a._v(" 或 "),v("code",[a._v("64")]),a._v(".")]),a._v(" "),v("li",[a._v("其他方式: 使用"),v("code",[a._v("vcpkg install grpc")]),a._v("在Windows上通过MSVC手动构建 "),v("code",[a._v("gRPC")]),a._v(" , 这通常会花点时间,所以不鼓励这样.")])])])]),a._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),v("p",[a._v("确保你安装了 "),v("code",[a._v("grpc_cpp_plugin")]),a._v(" and "),v("code",[a._v("protoc")]),a._v(", 它们在下一步骤由cmake使用.")])]),a._v(" "),v("h3",{attrs:{id:"_2-1构建脚本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1构建脚本"}},[a._v("#")]),a._v(" 2.1构建脚本")]),a._v(" "),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" Qv2raygit submodule update --init "),v("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 拉取然后检出所有子模块到对应的目录,可能是git仓库目录下的3rdparty/")]),a._v("\n"),v("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" build "),v("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" build\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 调用cmake")]),a._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 有不少选项可用, 如果需要,建议使用cmake-gui.")]),a._v("\ncmake "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(" \n"),v("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# Or "cmake .. -DCMAKE_INSTALL_PREFIX=" + 想要的安装目录.')]),a._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# Or "cmake .. -DCMAKE_BUILD_TYPE=Release" 如果你想发布一个release构建')]),a._v("\n\ncmake --build "),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 可以再附加 `--parallel N`选项加速构建.")]),a._v("\n")])])]),v("ul",[v("li",[v("strong",[a._v("在Windows和macOS上经过这些步骤后,你还不能运行 "),v("code",[a._v("qv2ray.exe")]),a._v(" 或者打开 "),v("code",[a._v("qv2ray.app")]),a._v(" 包 ,你还需要参考下面的部署.")])])]),a._v(" "),v("h2",{attrs:{id:"_3-部署"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-部署"}},[a._v("#")]),a._v(" 3. 部署")]),a._v(" "),v("p",[a._v("在打包Qv2ray或使用它之前,还有一点事要做,即运行下面命令:")]),a._v(" "),v("div",{staticClass:"language-shell extra-class"},[v("pre",{pre:!0,attrs:{class:"language-shell"}},[v("code",[a._v("cmake --install "),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" "),v("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# 注意 "--install "选项后面的点')]),a._v("\n")])])]),v("p",[a._v("这会自动复制 (在Windows/macOS上) 所有依赖到一个目录,这个目录是你之前使用"),v("code",[a._v("CMAKE_INSTALL_PREFIX")]),a._v("命令行参数或cmake gui工具指定的.如果要想改变那个目录,你需要重新生产cmake缓存文件.")])])}),[],!1,null,null,null);e.default=s.exports}}]);