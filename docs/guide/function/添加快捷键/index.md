## 添加快捷键

上面由于我们只是注册了命令，没有添加菜单或快捷键，调用不方便，所以我们现在添加一下**快捷键**。

打开package.json，按照下述方式添加：

```json
{
	"contributes": {
		"commands": [
			{
				"command": "vscode-test.helloWorld",
				"title": "Hello World"
			}
		],
    // 快捷键绑定
		"keybindings": [
			{
				"command": "vscode-test.helloWorld",
				"key": "ctrl+f10",
				"mac": "cmd+f10",
				"when": "editorTextFocus"
			}
		],
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
}
```



![image-20221012203635503](https://qn.huat.xyz/mac/20221012203635.png)