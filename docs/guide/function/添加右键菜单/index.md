## 添加右键菜单

上面由于我们只是注册了命令，没有添加菜单或快捷键，调用不方便，所以我们现在添加一下**菜单**。

打开package.json，按照下述方式添加：

```json

"contributes": {
		"commands": [
			{
				"command": "vscode-test.helloWorld",
				"title": "Hello World"
			}
		],
    // 添加菜单
		"menus": {
			"editor/context": [
				{
					"when": "editorFocus",
					"command": "vscode-test.helloWorld",
					"group": "navigation"
				}
			]
		}
	},
```



![image-20221012203002634](https://qn.huat.xyz/mac/20221012203002.png)



点击 `Hello World` 会执行注册的命令 `vscode-test.helloWorld` 出现弹窗。

![image-20221012203123419](https://qn.huat.xyz/mac/20221012203123.png)



