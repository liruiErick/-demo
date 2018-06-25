//SetStyles.js
(function(win, doc) {
    var defaultSettings = {
        color: "red",
        background: "blue",
        border: "2px solid #000",
        fontSize:"30px",
        textAlign:"center",
        width:"200px",
        borderRadius:"5px"
    };

    function SetStyles(options) {
        var self = this;
        //没传配置项自己丢错
        if(!options) {
            throw new Error("请传入配置参数");
        }
        self = Object.assign(self, defaultSettings, options);

        self.container = doc.querySelector(self.container) || doc.querySelectorAll(self.container);
        self._changeStyles();
    }

    SetStyles.prototype = {
        _changeStyles: function() {
            var self = this;
            for(var pro in self) {
                if(pro == "container") {
                    continue;
                }
                if(pro == 'text' && typeof self[pro]== 'string') {
                    self.container.innerText = self[pro];
                    continue;
                }else if(pro == 'text' && typeof self[pro]== 'function'){
                    self.container.innerText = self[pro]();
                    continue;
                }
                self.container.style[pro] = self[pro];
            }
        }
    }
    win.SetStyles = SetStyles;
})(window, document)
//调用
var a = new SetStyles({
    container:"#test",
    background:"#fff",
    textAlign:"center",
    text:function(){
        return "我是文本";
    }
});
//text参数格式字符串或者函数
//container用的querySelectAll方法，参数一致
//其他css参数为字符串