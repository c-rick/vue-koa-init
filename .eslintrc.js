module.exports = {
    root: true,
    parser: 'babel-eslint',//解析器，这里我们使用babel-eslint
    parserOptions: {
      sourceType: 'module'//类型为module，因为代码使用了使用了ECMAScript模块
    },
    env: {
      browser: true,//预定义的全局变量，这里是浏览器环境
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    //extends: 'standard', //扩展，可以通过字符串或者一个数组来扩展规则
    // required to lint *.vue files
    plugins: [
     'html' //插件，此插件用于识别文件中的js代码，没有MIME类型标识没有script标签也可以识别到，因此拿来识别.vue文件中的js代码
    ],
    // add your custom rules here
    'rules': {
      //这里写自定义规则
			"no-console": 1,
			// 禁止修改 const 声明的变量
			"no-const-assign": 2,
			// 禁止对象字面量中出现重复的 key
			"no-dupe-keys": 2,
			// 禁止类成员中出现重复的名称
			"no-dupe-class-members": 2,

			// 禁止在return、throw、continue 和 break语句之后出现不可达代码
			"no-unreachable": 2,

			// 强制 typeof 表达式与有效的字符串进行比较
			// typeof foo === "undefimed" 错误
			"valid-typeof": 1,

			// 禁止使用 var 多次声明同一变量
			"no-redeclare": 2,
			// 禁止 var 声明 与外层作用域的变量同名
			"no-shadow": 1,
			// 禁止出现未使用过的变量
			"no-unused-vars": [
					1, {
					"vars": "all",
					"args": "none"
					}
			],
			// 禁止将变量初始化为 undefined
			"no-undef-init": 2,
			// 不允许在变量定义之前使用它们
			"no-use-before-define": 1,
			// 强制把变量的使用限制在其定义的作用域范围内
			"block-scoped-var": 1,

			// 要求使用 isNaN() 检查 NaN
			"use-isnan": 2,
			// 禁止对原生对象赋值
			"no-native-reassign": 2,

			// 禁止对 function 声明重新赋值
			"no-func-assign": 2,
			// 禁止在循环中出现 function 声明和表达式
			"no-loop-func": 1,
			// 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题。
			"no-empty-function": 2,
			// 禁止 function 定义中出现重名参数
			"no-dupe-args": 2,
			// 不允许对 function 的参数进行重新赋值
			"no-param-reassign": [
					1, {
					"props": false
					}
			],

			// 禁止对 catch 子句的参数重新赋值
			"no-ex-assign": 2,
			// 禁止重复的 case 标签
			"no-duplicate-case": 2,
			// 禁止 case 语句落空
			"no-fallthrough": 2,
			// switch 语句强制 default 分支，也可添加 // no default 注释取消此次警告
			"default-case": 2,

			// 禁止不必要的字符串字面量或模板字面量的连接
			"no-useless-concat": 2,

			// 禁止混合使用不同的操作符
			"no-mixed-operators": 1,

			// 禁用不必要的转义字符
			"no-useless-escape": 1,

			// 强制在圆括号内使用一致的空格
			"space-in-parens": [
					2, "never"
			],

			// 要求箭头函数的参数使用圆括号
			"arrow-parens": 2,
			"arrow-spacing": [
					2, {
					"before": true,
					"after": true
					}
			],

			// 要求 for-in 循环中有一个 if 语句
			// if ({}.hasOwnProperty.call(foo, key)) {}
			"guard-for-in": 0,

			// 要求使用模板字面量而非字符串连接
			"prefer-template": 1,

			// Suggest using the rest parameters instead of arguments
			"prefer-rest-params": 1,

			// 使用 === 替代 == allow-null允许null和undefined==
			"eqeqeq": [
					1, "allow-null"
			],

			// 不允许使用嵌套的三元表达式
			"no-nested-ternary": 0,
			// 禁止使用一元操作符 ++ 和 --
			"no-plusplus": 0,

			// 禁止return有斌值的操作
			"no-return-assign": 0,

			// 要求函数尾都必需有return
			"consistent-return": 0,

			// 要求使用 let 或 const 而不是 var
			"no-var": 0,

			// 要求使用 const 声明那些声明后不再被修改的变量
			"prefer-const": 0,

			// 禁止标识符中有悬空下划线_bar
			"no-underscore-dangle": 0,

			// 要求或禁止对象字面量中方法和属性使用简写语法
			"object-shorthand": 0,

			// 禁止出现未使用过的表达式
			"no-unused-expressions": 0,

			// 要求使用箭头函数作为回调
			"prefer-arrow-callback": 0,

			// 禁止使用特定的语法
			"no-restricted-syntax": 0,

			"no-restricted-properties": 0,

			// 禁止空语句块
			"no-empty": 2,


			/* ---------------------------- 格式化代码 ---------------------------*/
			// 不允许空格和 tab 混合缩进
			"no-mixed-spaces-and-tabs": 2,
			// 强制2个空格缩进
			"indent": [
					2,
					2, {
					"SwitchCase": 1,
					"VariableDeclarator": 1
					}
			],

			// 禁止使用多个空格
			"no-multi-spaces": 2,

			// 禁止末尾的分号
			"semi": [0, "never"],

			// 禁用行尾空格
			"no-trailing-spaces": 2,
			// 禁止属性前有空白
			"no-whitespace-before-property": 0,
			// 强制空格
			"spaced-comment": [2, "always"],
			// 控制逗号前后的空格
			"comma-spacing": [
					2, {
					"before": false,
					"after": true
					}
			],
			// 要求操作符周围有空格
			"space-infix-ops": 2,
			// 强制分号之前和之后使用一致的空格
			"semi-spacing": 0,
			// 指定数组的开始与[ 、 结束与] 之间要以空格隔开， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
			"array-bracket-spacing": [
					2, "never"
			],
			// 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
			"computed-property-spacing": [
					2, "never"
			],

			// 禁止不必要的分号
			"no-extra-semi": 2,

			// 禁止行尾无用的逗号
			"comma-dangle": [2, "never"],
			// 禁用逗号操作符
			"no-sequences": 2,

			// 强制使用一致的反勾号、双引号或单引号
			"quotes": [
					2, "single", "avoid-escape"
			],

			// var的定义必需出现在最前
			"vars-on-top": 1,

			// 控制逗号在行尾出现还是在行首出现 (默认行尾)
			"comma-style": [
					2, "last"
			],

			// 强制object.key 中 . 的位置，参数:
			//      property，'.'号应与属性在同一行
			//      object, '.' 号应与对象名在同一行
			"dot-location": [
					2, "property"
			],

			// 强制所有控制语句使用一致的括号风格
			"curly": [
					2, "all"
			],

			// 文件末尾强制换行
			"eol-last": 2,

			// 强制在对象字面量的属性中键和值之间使用一致的间距
			"key-spacing": [
					2, {
					"beforeColon": false,
					"afterColon": true
					}
			],

			// 禁止 function 标识符和括号之间出现空格
			"no-spaced-func": 2,
			// 强制在 function的左括号之前使用一致的空格
			"space-before-function-paren": [
					2, "always"
			],

			// 禁止 if 语句中有 return 之后有 else
			"no-else-return": 1,

			// 要求或禁止块内填充
			"padded-blocks": [2, "never"],

			// 要求箭头函数体使用大括号，当大括号是可以省略的，强制不使用它们 (默认)
			"arrow-body-style": [2, "as-needed"],


			// 强制使用一致的换行风格
			"linebreak-style": [
					1, "unix"
			],

			// 要求在注释周围有空行      ( 要求在块级注释之前有一空行)
			"lines-around-comment": [
					1, {
					"beforeBlockComment": true
					}
			],

			// 强制回调函数最大嵌套深度 5层
			"max-nested-callbacks": [
					1, 5
			],

			// 强制一行的最大长度
			"max-len": [
					1, 200
			],

			"no-multi-assign": 0,

			// 拆分多个var定义为多行
			"one-var": 0,
			"one-var-declaration-per-line": 0,

			// 要求 require() 出现在顶层模块作用域中
			"global-require": 0,

			// 要求构造函数首字母大写  （要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符。）
			"new-cap": 0,

			// 强制在花括号中使用一致的空格
			"object-curly-spacing": [1, "always"],

			// 强制在关键字前后使用一致的空格 (前后腰需要)
			"keyword-spacing": 2    
    }
  }