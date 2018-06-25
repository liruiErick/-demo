/**
 * 二级联动
 *
 * @author lock
 */
(function($) {
	$.fn.lockLinkage = function(options) {	
		var defaults = {
				event: 'change',//元素触发事件
				element : 'option',//操作元素
				css : 'focus',//选中样式名称,自己定义;若元素为option,请忽略
				url : 'area.json.js', //数据源
				sobj : null,//二级联动对象
				pdefval : null,//一级默认值
				sdefval : null//二级默认值
		};
		var opts = $.extend(defaults, options);
		var obj= $(this);
		var sobj = $('#'+opts.sobj);
		var datajson;
		
		//二级联动更新
		var parentChange = function(e) {
			//console.log($(e.target).index());
			var index = opts.element == 'option' ? obj.get(0).selectedIndex : $(e.target).index();
			if (opts.element != 'option') {
				obj.find(opts.element).removeClass(opts.css);
				$(e.target).addClass(opts.css).parents().removeClass(opts.css);
			}
			sobj.empty();
			$.each(datajson[index].datas,function(i,val) {
				sobj.append('<'+opts.element+' value='+val+'>'+val+'</'+opts.element+'>');
			});
		};
		
		//二级改变状态
		var childChange = function(e) {
			sobj.find(opts.element).removeClass(opts.css);
			$(e.target).addClass(opts.css).parents().removeClass(opts.css);
		};
		
		//初始化
		var init = function() {
			$.each(datajson,function(i, json) {
				obj.append('<'+opts.element+' value='+json.name+'>'+json.name+'</'+opts.element+'>');
			});			
			//设置默认值
			if (opts.pdefval) {
				obj.val(opts.pdefval);
				if (opts.element != 'option') {//样式
					obj.find(''+opts.element+':eq('+obj.find(':contains('+obj.val()+')').index()+')').addClass(opts.css);
				}
			}			
			//二级
			if (obj.val()) {
				var index = opts.sdefval == null ? 0 : opts.element == 'option' ? obj.get(0).selectedIndex : obj.find(':contains('+obj.val()+')').index();
				$.each(datajson[index].datas,function(i, val) {
					sobj.append('<'+opts.element+' value='+val+'>'+val+'</'+opts.element+'>');
				});
				//二级默认值
				if (opts.sdefval) {
					sobj.val(opts.sdefval);
					if (opts.element != 'option') {//样式
						sobj.find(''+opts.element+':eq('+sobj.find(':contains('+sobj.val()+')').index()+')').addClass(opts.css);
					}
				}
			}
			//绑定事件，改变二级联动
			obj.bind(opts.event,function(e) {
				parentChange(e);
			});	
			//绑定事件，二级选中状态
			sobj.bind(opts.event,function(e) {
				opts.element == 'option' ? '' : childChange(e);
			});	
		};
		
		//调用数据源
		if (typeof(opts.url) == 'string') {
			$.getJSON(opts.url, function(json) {
				datajson = json;
				init();
			});
		} else {
			datajson = data.url;
			init();
		};
		
	};
})(jQuery);