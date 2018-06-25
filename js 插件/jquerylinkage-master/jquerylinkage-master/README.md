# jquerylinkage

#功能介绍
此插件比较有特色，根据实际项目需求进行开发的，

可以对select或其它li元素进行中操作及默认值的设定。

插件参数：

			event: 'change',//元素触发事件
			
			element : 'option',//操作元素
			
			css : 'focus',//选中样式名称,自己定义;若元素为option,请忽略
			
			url : 'area.json.js', //数据源
			
			sobj : null,//二级联动对象
			
			pdefval : null,//一级默认值
			
			sdefval : null//二级默认值
			
#引用方法

	$('#prov').lockLinkage({
    	sobj : 'city',
    	pdefval : '河北',
    	sdefval : '秦皇岛'
    });
    
    $('#provbox').lockLinkage({
    	event : 'click',
    	sobj : 'citybox',
    	pdefval :  '天津',
    	sdefval : '河西',
    	element:'li'
    });
    
    $('#pindu').lockLinkage({
    	sobj : 'sindu',
    	url:'industry.json.js'
    });
			
