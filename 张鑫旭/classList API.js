//添加和删除样式名（class name)
function removeClass(el,cls) {
    var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    el.className=el.className.replace(reg,"").replace(/(^\s*)|(\s*$)/g,"");
}

function hasClass(el,cls) {
    
}
//classList API
if ("classList" in document.documentElement) {
    element.classList.add("bar");
    element.classList.remove("bar");
    element.classList.contains("bar");
    element.classList.toggle("bar");
}
/*
* 用classList之后，最基本的类名属性仅在必要的时候进行更改。
* 添加一个已经存在的类和移除一个不存在的类时，根本没有牵涉到类名属性，这意味着我们刚刚避免了两次重绘。
* */

var object = {
    init: function () {
        button.addEventListener("click", this, false);
        button.addEventListener("touchstart", this, false);
    },
    handleEvent: function (e) {
        switch (e.type) {
            case 'click':
                this.action();
                break;
            case 'touchstart':
                this.action();
                break;
        }
    },
    action: function () {
        console.log("aaa")
    }
};

object.init();

//操作dom --用被操纵的东西来替代原始的元素。
var element = document.querySelector('.class');
var clone = element.cloneNode(true);
clone.style.background = "#000";
element.parentNode.replaceChild(clone, element);

//在JS中决定响应图片的最大宽度
function getMaxWidth(img) {
    var maxWidth;
    if (img.naturalWidth !== undefined) {
        maxWidth = img.naturalWidth;
    } else {
        var image = new Image();
        image.src = img.src;
        maxWidth = image.width;
    }
    return maxWidth;
}

//判断一个元素是否在视图窗口中
function isInViewport(element) {
    var rect = element.getBoundingClientRect(),
        html = document.documentElement;
    return (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom < (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth));
}