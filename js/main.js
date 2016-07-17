require.config({
	paths: {
		jquery: "jquery.min"
	}
});

// validate是被定义成的模块
requirejs(['jquery','validate'],function ($,validate) {
	console.log("进来了")
	validate.isEmpty();
})