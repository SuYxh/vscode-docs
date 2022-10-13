<!--
 * @Author: 时光@
 * @Date: 2022-10-12 22:09:31
 * @LastEditTime: 2022-10-12 22:09:31
 * @Description: 
-->
## vscode功能简介

### 自动补全

#### 1、自动补全`zzui`组件

**触发方式：**在`vue`文件的`template`中键入 `<z` 

**效果：** 提示`zzui`中的规范组件，和组件的相关介绍，如下图所示，按下回车，键入对应的组件，并附带组件的默认属性，并不是所有的组件都会有默认属性。如果当前没有引入相关的`zzui`组件，会在 `script` 中自动引入该组件并且自动`use`。

> 目前只支持UI规范组件，会逐渐支持所有组件。

![](https://qn.huat.xyz/mac/20211011172909.png)

#### 2、组件属性提示

**触发方式：** 在组件的开始标签中的任意位置按下**空格**

**效果：** 出现该组件存在的可选属性，与`zzui`官网同步。插件安装的都比较多，属性出现的位置可能靠后，移入组件对应的属性时，右侧会出现对应的提示，如下图。

![](https://qn.huat.xyz/mac/20211011173034.png)

#### 3、组件属性值提示

**触发方式：** 在组件的属性中按下**空格**

**效果：** 以`button`的`type`属性为例，在`type`中按下空格会出现`type`对应的属性值提示，与`zzui`官网同步，按下回车键进行选定，选定后会自动清除触发的空格，如下图所示。**并不是所有属性都会有提示！**

![](https://qn.huat.xyz/mac/20211011173122.png)



### 自动导入

#### 1、zzui自动导入

在选择`zzui`组件的时候，如果当前文件中没有引入`zzui`，将会自动导入`zzui`，并`use` ， 如果当前已经引入了，则会插入选中的新组件。



#### 2、工具库自动导入

**触发方式：** 在文件中键入 `x` ，区分大小写，只能是小写 `x` 

**效果：** 出现工具函数提示，移动对应的工具函数，会出现具体的信息，包括函数的作用、参数、参数类型、返回值等。按下回车键后，会自动引入当前工具函数。



![](https://qn.huat.xyz/mac/20211011173223.png)

![](https://qn.huat.xyz/mac/20211011173308.png)



### 代码片段

> 代码片段可以在vscode后台进行自定义配置，配置完成后，重启vscode即可生效！

#### 原生代码片段

插件已经内置了很多原生JavaScript代码片段，比如 `rps`直接生成 `return Promise.resolve()` 、`co=`直接生成 `const name = value` 、 `to` 直接生成 `condition ? value1 : value2`  等等，相关的文档正在整理中



#### 功能片段

输入自定义的前缀【配置代码片段时的`prefix`】，即可出触发，并附带功能片段的相关说明。

![](https://qn.huat.xyz/mac/20211011173503.png)

![](https://qn.huat.xyz/mac/20211011173601.png)

#### 模板片段

在vue文件中输入`tsvue2` 【vue2的ts模板】

![](https://qn.huat.xyz/mac/20211011173731.png)



### 内置webview

**应用场景：** 当在开发使用`zzui`的时候，某一个组件的属性不是很清楚的时候，但是又懒的打开`zzui`官网去查询某个组件的文档，此时可直接选中当前组件，在vscode内部直接打开`zzui`官网，并且定位到当前组件，方便查询。

**触发方式：** 选中组件，右击选择 `search in zzui` 或者 选中后使用快捷键： `shift+cmd+l` [`shift+ctrl+l`  windows]

**效果：**

![](https://qn.huat.xyz/mac/20211011173849.png)

![](https://qn.huat.xyz/mac/20211011173933.png)



### 自定义设置

![](https://qn.huat.xyz/mac/20211011174108.png)

1、zzui版本进行更新，只需要变更当前的链接即可，无需更新插件

2、可自定义代码片段的api，只需遵循接口格式即可！

### 语言支持

支持 vue、react、js、ts



励志做到一次安装，永久使用。

