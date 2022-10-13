## 现存功能

- [支持全量zzui导入，并自动use](#支持全量zzui导入，并自动use)
- [代码片段](#代码片段)
- [常用代码](#常用代码)



### 支持全量zzui导入，并自动use

![image-20221012222214907](https://qn.huat.xyz/mac/20221012222214.png)





![image-20221012222244108](https://qn.huat.xyz/mac/20221012222244.png)

### 代码片段

![image-20221012221352240](https://qn.huat.xyz/mac/20221012221352.png)

- cvue1: 最基础的composition-api模板【typescript版】；cvue1-js 表示js版
- cvue2：在基础的模版的上导入了一些开发中常用的库，方便快速开发【typescript版】；cvue2-js 表示js版



### 常用代码

1、`imna` 导入 native-adapter

```
import native from '@zz-common/native-adapter'
```



2、`imfu` 导入 @zz-platform/future

```
import { getQuery } from '@zz-platform/future'
```



3、`improxy`  

```
const { proxy } = getCurrentInstance() as ComponentInternalInstance
```



4、`imel` 文字省略

```
@import '@zz-common/zz-ui/lib/style/mixins/ellipsis.scss';
```



5、`imha` 1px边框

```
@import '@zz-common/zz-ui/lib/style/mixins/hairline.scss';
```



