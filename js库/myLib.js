/**
 * 判断两个数组是否相等
 * @param arr1
 * @param arr2
 * @returns {boolean}
 */
function arrEqual(arr1, arr2) {
    var i = 0;
    if (arr1 === arr2) return true;
    if (arr1.length !== arr2.length) return false;
    for (; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true
}

/**
 * 判断一个数字是否为整数
 * @param num
 * @returns {boolean}
 */
function isInteger(num) {
    return Math.floor(num) === num
}

/**
 * 去除字符串首尾空格
 * @param str
 * @returns {string}
 */
function trim(str) {
    return str ? (str + '').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') : ''
}

/**
 * 判断元素是否存在某个 class
 * @param ele
 * @param cls
 * @returns {boolean}
 */
function hasClass(ele, cls) {
    return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className)
}

/**
 * 为元素添加 class
 * @param ele
 * @param cls
 */
function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
        ele.className += (ele.className ? ' ' : '') + cls
    }
}

/**
 * 删除元素的某个 class
 * @param ele
 * @param cls
 */
function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        ele.className = trim(ele.className.replace(new RegExp('(\\s|^)' + cls + '(\\s|$)'), ' '))
    }
}

/**
 * 获取操作系统类型
 * @return {String}
 */
function getOS() {
    var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
    var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';
    if (/mac/i.test(appVersion)) return 'MacOSX';
    if (/win/i.test(appVersion)) return 'Windows';
    if (/linux/i.test(appVersion)) return 'Linux';
    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios';
    if (/android/i.test(userAgent)) return 'android';
    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'
}

/**
 * 获取浏览器类型和版本
 * @returns {*}
 */
function getExplore() {
    var sys = {},
        ua = navigator.userAgent.toLowerCase(),
        s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
        (s = ua.match(/msie ([\d.]+)/)) ? sys.ie = s[1] :
            (s = ua.match(/edge\/([\d.]+)/)) ? sys.edge = s[1] :
                (s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
                    (s = ua.match(/(?:opera|opr).([\d.]+)/)) ? sys.opera = s[1] :
                        (s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] :
                            (s = ua.match(/version\/([\d.]+).*safari/)) ? sys.safari = s[1] : 0;
    if (sys.ie) return ('IE: ' + sys.ie);
    if (sys.edge) return ('Edge: ' + sys.edge);
    if (sys.firefox) return ('Firefox: ' + sys.firefox);
    if (sys.opera) return ('Opera: ' + sys.opera);
    if (sys.chrome) return ('Chrome: ' + sys.chrome);
    if (sys.safari) return ('Safari: ' + sys.safari);
    return 'Unknown'
}

/**
 * isIE - 十分简单的判断
 * @returns {*|boolean}
 */
function isIE() {
    var sys = {},
        ua = navigator.userAgent.toLowerCase();
    ua.match(/rv:([\d.]+)\) like gecko/) ? sys.ie = true :
        ua.match(/msie ([\d.]+)/) ? sys.ie = true : sys.ie = false;
    return sys.ie
}

/**
 * 获取滚动条距顶部的距离
 * @returns {Element|number}
 */
function getScrollTop() {
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
}

/**
 * 获取某元素在文档中的位置
 * @param ele
 * @returns {{left: number, top: number}}
 */
function offset(ele) {
    var p = {
        left: 0,
        top: 0
    };
    while (ele) {
        p.left += ele.offsetLeft;
        p.top += ele.offsetTop;
        ele = ele.offsetParent
    }
    return p
}

/**
 * 设置滚动条距顶部的距离
 * @param val
 * @returns {*}
 */
function setScrollTop(val) {
    window.scrollTo(0, val);
    return val
}

/**
 * 在 duration 时间内，滚动条平滑滚动到 to 指定位置
 * @param {Number} to
 * @param {Number} duration
 */
function scrollTo(to, duration) {
    if (duration < 0) {
        setScrollTop(to);
        return
    }
    var diff = to - getScrollTop();
    if (diff === 0) return;
    var step = diff / duration * 10;
    var animFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60)
        };
    animFrame(function () {
        if (Math.abs(step) > Math.abs(diff)) {
            setScrollTop(getScrollTop() + diff);
            return
        }
        setScrollTop(getScrollTop() + step);
        if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
            return
        }
        scrollTo(to, duration - 16)
    })
}

/**
 * 根据 keyCode 获得键名
 * @param keyCode
 * @returns {*}
 */
function getKeyCode(keyCode) {
    var keyCodeMap = {
        8: 'Backspace',
        9: 'Tab',
        13: 'Enter',
        16: 'Shift',
        17: 'Ctrl',
        18: 'Alt',
        19: 'Pause',
        20: 'Caps Lock',
        27: 'Escape',
        32: 'Space',
        33: 'Page Up',
        34: 'Page Down',
        35: 'End',
        36: 'Home',
        37: 'Left',
        38: 'Up',
        39: 'Right',
        40: 'Down',
        42: 'Print Screen',
        45: 'Insert',
        46: 'Delete',
        48: '0',
        49: '1',
        50: '2',
        51: '3',
        52: '4',
        53: '5',
        54: '6',
        55: '7',
        56: '8',
        57: '9',
        65: 'A',
        66: 'B',
        67: 'C',
        68: 'D',
        69: 'E',
        70: 'F',
        71: 'G',
        72: 'H',
        73: 'I',
        74: 'J',
        75: 'K',
        76: 'L',
        77: 'M',
        78: 'N',
        79: 'O',
        80: 'P',
        81: 'Q',
        82: 'R',
        83: 'S',
        84: 'T',
        85: 'U',
        86: 'V',
        87: 'W',
        88: 'X',
        89: 'Y',
        90: 'Z',
        91: 'Windows',
        93: 'Right Click',
        96: 'Numpad 0',
        97: 'Numpad 1',
        98: 'Numpad 2',
        99: 'Numpad 3',
        100: 'Numpad 4',
        101: 'Numpad 5',
        102: 'Numpad 6',
        103: 'Numpad 7',
        104: 'Numpad 8',
        105: 'Numpad 9',
        106: 'Numpad *',
        107: 'Numpad +',
        109: 'Numpad -',
        110: 'Numpad .',
        111: 'Numpad /',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'Num Lock',
        145: 'Scroll Lock',
        182: 'My Computer',
        183: 'My Calculator',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };
    if (keyCodeMap[keyCode]) {
        return keyCodeMap[keyCode]
    }
    console.log('Unknown Key(Key Code:' + keyCode + ')');
    return ''
}

/**
 * 判断参数类型
 * @param para
 * @returns {*}
 */
function paraType(para) {
    return Object.prototype.toString.call(para)
}

/**
 * 深克隆，支持常见类型
 * @param values
 */
function deepClone(values) {
    var copy;

    if (values == null || typeof values !== 'object') return values;

    // Handle Date
    if (values instanceof Date) {
        copy = new Date();
        copy.setTime(values.getTime());
        return copy
    }

    // Handle Array
    if (values instanceof Array) {
        copy = [];
        for (var i = 0, len = values.length; i < len; i++) {
            copy[i] = deepClone(values[i])
        }
        return copy
    }

    // Handle Object
    if (values instanceof Object) {
        copy = {};
        for (var key in values) {
            if (values.hasOwnProperty(key)) copy[key] = deepClone(values[key])
        }
        return copy
    }

    throw new Error("Unable to copy values! Its type isn't supported.")
}

/**
 * 判断 'obj' 是否为空
 * @param obj
 * @returns {boolean}
 */
function isEmptyObject(obj) {
    // var t;
    // for (t in obj) {
    //     return false;
    // }
    // return true;

    return Object.keys(obj).length === 0
}

/**
 * 随机生成颜色
 * @returns {string}
 */
function randomColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6)
}

/**
 * 生成指定范围随机数
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomNum(min, max) {
    return Math.floor(min + Math.random() * (max - min))
}

/**
 * 格式化 {startTime} 距现在的时间
 * @param {Date} startTime
 * @returns {*}
 */
function formatPassTime(startTime) {
    var currentTime = new Date().getTime(),
        time = currentTime - startTime,
        day = parseInt(time / (1000 * 60 * 60 * 24)),
        hour = parseInt(time / (1000 * 60 * 60)),
        min = parseInt(time / (1000 * 60)),
        month = parseInt(day / 30),
        year = parseInt(month / 12);
    if (year) return year + '年前';
    if (month) return month + '个月前';
    if (day) return day + '天前';
    if (hour) return hour + '小时前';
    if (min) return min + '分钟前';
    return '刚刚'
}

/**
 * url 参数转对象
 * @param url
 * @returns {*}
 */
function parseQueryString(url) {
    url = url == null ? window.location.href : url;
    var search = url.substring(url.lastIndexOf('?') + 1);
    if (!search) {
        return {}
    }
    try {
        return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    } catch (e) {
        throw new Error(e)
    }
}

/**
 * 对象序列化
 * @param obj
 * @returns {*}
 */
function objQueryString(obj) {
    if (!obj) return '';
    var data = [],
        key,
        val,
        i = 0;
    for (key in obj) {
        val = obj[key];
        if (val instanceof Array) {
            for (i = 0; i < val.length; i++) {
                data.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(val[i]))
            }
            continue
        }
        data.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
    }
    return data.join('&')
}

//写入cookie
function setCookie(name, value) {
    var Days = 30,
        exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//删除cookie
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval !== null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}

//读取cookie
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("^(|)" + name + "=([^;]*)(;|$)"));
    if (arr !== null) {
        return unescape(arr[2])
    }
    return null;
}

var $ = jQuery;
(function ($) {
    $.fn.serializeJson = function () {
        var serializeObj = {},
            array = this.serializeArray(),
            str = this.serialize();
        $(array).each(function () {
            if (serializeObj[this.name]) {
                serializeObj[this.name] = [serializeObj[this.name], this.value];
            } else {
                serializeObj[this.name] = this.value;
            }
        });
        return serializeObj;
    };
})(jQuery);

$(document).keyup(function (event) {
    if (event.which === '13') {
        ds.click();
    }
});
//=====================日期格式化 相关 beign ======================== //
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(),   //day
        "h+": this.getHours(),  //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
            RegExp.$1.length == 1 ? o[k] :
                ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}

Date.prototype.add = function (strInterval, Number) {
    var dtTmp = this;
    switch (strInterval) {
        case 's' :
            return new Date(Date.parse(dtTmp) + (1000 * Number));
        case 'n' :
            return new Date(Date.parse(dtTmp) + (60000 * Number));
        case 'h' :
            return new Date(Date.parse(dtTmp) + (3600000 * Number));
        case 'd' :
            return new Date(Date.parse(dtTmp) + (86400000 * Number));
        case 'w' :
            return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));
        case 'q' :
            return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number * 3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
        case 'm' :
            return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
        case 'y' :
            return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
    }
}
//=====================日期格式化 相关 end ======================== //

/*-----------------------------------使用rem策略，不断更新html的fontsize----------------------------------------------*/
(function () {
    function sizeHtml() {
        window.mtSizeBase = $(window).width() / 16;
        window.mtSizeBase = window.mtSizeBase > 45 ? 45 : window.mtSizeBase;
        $("html").css("font-size", window.mtSizeBase + "px");
    }

    sizeHtml();
    $(window).resize(function () {
        setTimeout(function () {
            sizeHtml();
        }, 300)
    });
})();
/*-----------------------------------判断移动端浏览器版本信息---------------------------------------------------------*/
var browser = {
    versions: function () {
        var u = navigator.userAgent;
        return {         //移动终端浏览器版本信息
            weibo: u.toLowerCase().match(/Weibo/i) == "weibo",
            micromessenger: u.toLowerCase().match(/MicroMessenger/i) == "micromessenger",          //是否是微信
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            isSAUMSUNG: u.indexOf('SAMSUNG') > -1,
            isMomo: u.indexOf('momoWebView') > -1,
            isApp: u.indexOf('haigou') > -1
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

/*------------------------------------------------------alert---------------------------------------------------------*/
function createAlert() {
    this.html = '<div id="prompt-info-b" style = "display:none; z-index:11000; width:100%; position:fixed; top:200px;"><div class="prompt-info" style="width:16em; text-align:center; border-radius:5px; -moz-border-radius:5px; background-color:black; color:white; padding:1em 2em; margin:0px auto;"></div></div>';
    this.init();
}

createAlert.prototype = {
    isShow: "",
    init: function () {
        var _self = this;
        $("body").append(_self.html);
    },
    alert: function (word, callback) {
        var _self = this;
        $("#prompt-info-b").children(".prompt-info").html(word);
        if ($("#prompt-info-b").css("display") == "none") {
            $("#prompt-info-b").show();
            _self.isShow = setTimeout(function () {
                $("#prompt-info-b").fadeOut("normal");
            }, 2000);
        } else {
            clearTimeout(_self.isShow);
            $("#prompt-info-b").finish().show();
            isShow = setTimeout(function () {
                $("#prompt-info-b").fadeOut("normal");
            }, 2000);
        }
        if (callback && typeof callback == "function") {
            callback();
        }
    }
};

/*------------------------------------------------------confirm-------------------------------------------------------*/
function creatConfirm() {
    var html = [];
    html.push('<div class="mt-confirm">');
    html.push('<div class="confirm-img"></div>');
    html.push('<p class="confirm-w"></p>');
    html.push('<div class="confirm-bt">');
    html.push('<div class="confirm-c-bt">取消</div>');
    html.push('<div class="confirm-s-bt">确认</div>');
    html.push('</div>');
    html.push('</div>');
    this.html = html.join("");
    this.$confirm = "";
    this.callback = function () {
    },
        this.init();
}

creatConfirm.prototype = {
    isShow: "",
    init: function () {
        var _self = this;
        _self.$confirm = $(_self.html);
        $("body").append(_self.$confirm);
        _self.$confirm.find(".confirm-c-bt").click(function () {
            _self.hide();
        });
        _self.$confirm.find(".confirm-s-bt").click(function () {
            _self.callback();
            _self.hide();
        });
    },
    show: function () {
        var _self = this;
        _self.$confirm.show();
        setTimeout(function () {
            _self.$confirm.css("opacity", "1");
        }, 100);
    },
    hide: function () {
        var _self = this;
        _self.$confirm.css("opacity", "0");
        setTimeout(function () {
            _self.$confirm.hide();
        }, 500);
    },
    confirm: function (word, callback) {
        var _self = this;
        _self.$confirm.find(".confirm-w").html(word);
        _self.show();
        if (callback && typeof callback == "function") {
            _self.callback = callback;
        }
    }
};
/*------------------------------model基础的post和get方法jsonp---------------------------------------------------------*/
var modelBase = {
    post: function (url, isasync) {
        var isasync = isasync === false ? false : true;
        return function (data, sback, eback) {
            $.ajax({
                type: "post",
                data: data,
                url: url,
                dataType: "json",
                async: isasync,
                success: function (data) {
                    sback(data);
                },
                error: function () {
                    if (typeof eback === "function") {
                        eback();
                    }
                }
            });
        }
    },
    get: function (url, isasync) {
        var isasync = isasync === false ? false : true;
        return function (data, sback, eback) {
            $.ajax({
                type: "post",
                data: data,
                url: url,
                dataType: "json",
                async: isasync,
                success: function (data) {
                    sback(data);
                },
                error: function () {
                    if (typeof eback === "function") {
                        eback();
                    }
                }
            })
        }
    },
    getjsonp: function (url, isasync) {
        var isasync = isasync === false ? false : true;
        return function (data, sback, eback) {
            $.ajax({
                type: "get",
                jsonp: "callback",
                data: data,
                url: url,
                dataType: "jsonp",
                async: isasync,
                success: function (data) {
                    sback(data);
                },
                error: function () {
                    if (typeof eback === "function") {
                        eback();
                    }
                }
            })
        }
    }
};
/*------------------------------------------------------metaoBase-----------------------------------------------------*/
var metaoBase = {
    getQueryByName: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"),
            r = window.location.search.substr(1).match(reg);
        if (r !== null) {
            return unescape(r[2]);
        }
        return null;
    }
};
/*----------------------------------------------------表单序列化------------------------------------------------------*/
HTMLFormElement.prototype.serialize = function () {
    var form = this,
        arrFormData = [],
        objFormData = {};
    [].slice.call(form.elements).forEach(function (ele) {
        var type = ele.type,
            disabled = ele.disabled,
            name = ele.name,
            value = encodeURIComponent(ele.value || 'on');

        if (!name || disabled || !type || (/^reset|sumbit|image$/i.test(type)) || (/^checkbox|radio$/i.test(type) && !ele.checked)) {
            return;
        }
        type = type.toLowerCase();

        if (type !== 'select-multiple') {
            if (objFormData[name]) {
                objFormData[name].push(value);
            } else {
                objFormData[name] = [value];
            }
        } else {
            [].slice().call(ele.querySelectorAll("option")).forEach(function (option) {
                var optionValue = encodeURIComponent(option.value || 'on');
                if (option.selected) {
                    if (objFormData[name]) {
                        objFormData[name].push(value);
                    } else {
                        objFormData[name] = [value];
                    }
                }
            });
        }
    });
    for (var key in objFormData) {
        arrFormData.push(key + '=' + objFormData[key].join());
    }
    return arrFormData.join("&");
};

/*--------------------------------------------RGB，HEX，HSL以及关键字颜色相互转换方法---------------------------------*/
/* RGB颜色转换为16进制 */
String.prototype.colorHex = function () {
    var that = this,
        reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;//十六进制颜色值的正则表达式
    // 如果是rgb颜色显示
    if (/^rgb|RGB/.test(that)) {
        var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(","),
            strHex = "#";
        for (var i = 0; i < aColor.length; i++) {
            var hex = Number(aColor[i]).toString(16);
            if (hex === '0') {
                hex += hex;
            }
            strHex += hex;
        }
        if (strHex.length !== 7) {
            strHex = that;
        }
        return strHex;
    } else if (reg.test(that)) {
        var aNum = that.replace(/#/, "").split("");
        if (aNum.length === 6) {
            return that;
        } else if (aNum.length === 3) {
            var numHex = "#";
            for (var i = 0; i < aNum.length; i++) {
                numHex += (aNum[i] + aNum[i]);
            }
            return numHex;
        }
    }
    return that;
};
/* 十六进制颜色转为RGB格式 */
String.prototype.colorRgb = function () {
    var sColor = this.toLowerCase(),
        reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i = 1; i < 4; i++) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for (var i = 0; i < 7; i++) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return "RGB(" + sColorChange.join(",") + ")";
    }
    return sColor;
};

/**
 * HSL颜色值转换为RGB.
 * 换算公式改编自 http://en.wikipedia.org/wiki/HSL_color_space.
 * h, s, 和 l 设定在 [0, 1] 之间
 * 返回的 r, g, 和 b 在 [0, 255]之间
 *
 * @param   Number  h       色相
 * @param   Number  s       饱和度
 * @param   Number  l       亮度
 * @return  Array           RGB色值数值
 */

function hslToRgb(h, s, l) {
    var r, g, b;
    if (s === 0) {
        r = g = b = l;
    } else {
        var hue2rgb = function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s,
            p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

/**
 * RGB 颜色值转换为 HSL.
 * 转换公式参考自 http://en.wikipedia.org/wiki/HSL_color_space.
 * r, g, 和 b 需要在 [0, 255] 范围内
 * 返回的 h, s, 和 l 在 [0, 1] 之间
 *
 * @param   Number  r       红色色值
 * @param   Number  g       绿色色值
 * @param   Number  b       蓝色色值
 * @return  Array           HSL各值数组
 */
function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b),
        h, s, l = (max + min) / 2;
    if (min == max) {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return [h, s, l];
}

/*
* 任意色值（甚至是CSS颜色关键字）转换为RGB颜色的方法
* 此方法IE9+浏览器支持，基于DOM特性实现
*/
var colorToRgb = function (color) {
    var div = document.createElement('div');
    div.style.backgroundColor = color;
    document.body.appendChild(div);
    var c = window.getComputedStyle(div).backgroundColor;
    document.body.removeChild(div);
    return c;
};
//时间戳显示为多少分钟前，多少天前的JS处理 方法名为dateDiff，支持一个参数timestamp,必须参数，本方法会自动补全为和JS侧支持的13位数值（因为后端返回时间戳可能只精确到秒）
var dateDiff = function (timestamp) {
    var arrTimestamp = (timestamp + '').split('');
    for (var start = 0; start < 13; start++) {
        if (!arrTimestamp[start]) {
            arrTimestamp[start] = '0';
        }
    }
    timestamp = arrTimestamp.join('') * 1;

    var minute = 1000 * 60,
        hour = minute * 60,
        day = hour * 24,
        halfamonth = day * 15,
        month = day * 30,
        now = new Date().getTime(),
        diffValue = now - timestamp;

    if (diffValue < 0) {
        return '不久前';
    }

    // 计算差异时间的量级
    var monthC = diffValue / month,
        weekC = diffValue / (7 * day),
        dayC = diffValue / day,
        hourC = diffValue / hour,
        minC = diffValue / minute;
    //数值补0方法
    var zero = function (value) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    };

    //使用
    if (monthC > 12) {
        // 超过1年，直接显示年月日
        return (function () {
            var date = new Date(timestamp);
            return date.getFullYear() + '年' + zero(date.getMonth() + 1) + '月' + zero(date.getDate()) + '日';
        })();
    } else if (monthC >= 1) {
        return parseInt(monthC) + "月前";
    } else if (weekC >= 1) {
        return parseInt(weekC) + "周前";
    } else if (dayC >= 1) {
        return parseInt(dayC) + "天前";
    } else if (hourC >= 1) {
        return parseInt(hourC) + "小时前";
    } else if (minC >= 1) {
        return parseInt(minC) + "分钟前";
    }
    return '刚刚';
};

//时间戳转换成格式化日期JS timestamp缺省表示使用当前时间戳，formats默认格式是Y-m-d，例如2018-01-01
/*
** 时间戳转换成指定格式日期
** eg.
** dateFormat(11111111111111, 'Y年m月d日 H时i分')
** → "2322年02月06日 03时45分"
*/
var dateFormat = function (timestamp, formats) {
    // formats格式包括
    // 1. Y-m-d
    // 2. Y-m-d H:i:s
    // 3. Y年m月d日
    // 4. Y年m月d日 H时i分
    formats = formats || 'Y-m-d';

    var zero = function (value) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    };

    var myDate = timestamp ? new Date(timestamp) : new Date(),
        year = myDate.getFullYear(),
        month = zero(myDate.getMonth() + 1),
        day = zero(myDate.getDate()),
        hour = zero(myDate.getHours()),
        minite = zero(myDate.getMinutes()),
        second = zero(myDate.getSeconds());

    return formats.replace(/Y|m|d|H|i|s/ig, function (matches) {
        return ({
            Y: year,
            m: month,
            d: day,
            H: hour,
            i: minite,
            s: second
        })[matches];
    });
};
//按钮加一个类名自动变菊花loading状态无图片版 按钮加一个类名自动变菊花loading状态无图片版，使用便捷，效果好，开销小，CSS3动画旋转，IE10+和其它现代浏览器支持
/* 按钮loading */
/*a[class*=-btn].loading,
    label[class*=-btn].loading {
    position: relative;
}
a[class*=-btn].loading::first-line,
label[class*=-btn].loading::first-line {
    color: transparent;
}
a[class*=-btn].loading::before,
    label[class*=-btn].loading::before {
    width: 4px; height: 4px;
    margin: auto;
    content: '';
    -webkit-animation: spinZoom 1s steps(8) infinite;
    animation: spinZoom 1s steps(8) infinite;
    border-radius: 100%;
    box-shadow: 0 -10px 0 1px currentColor, 10px 0 currentColor, 0 10px currentColor, -10px 0 currentColor, -7px -7px 0 .5px currentColor, 7px -7px 0 1.5px currentColor, 7px 7px currentColor, -7px 7px currentColor;
    /!* center *!/
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
}
/!* loading动画 *!/
@-webkit-keyframes spinZoom {
    0% {
    -webkit-transform: scale(.75) rotate(0);
}
    100% {
    -webkit-transform: scale(.75) rotate(360deg);
}
}
@keyframes spinZoom {
    0% {
        transform: scale(.75) rotate(0);
}
    100% {
        transform: scale(.75) rotate(360deg);
}
}*/
//字符点点点loading效果 订单提交中<dot>...</dot>
/*
* dot {
    display: inline-block;
    height: 1em;
    line-height: 1;
    text-align: left;
    vertical-align: -.25em;
    overflow: hidden;
* }
*
* dot::before {
*   display: block;
*   content: '...\A..\A.';
    white-space: pre-wrap;
    animation: dot 3s infinite step-start both;
* }
*
* @keyframes dot {
    33% { transform: translateY(-2em); }
    66% { transform: translateY(-1em); }
}
* */

/*------------------------------------------------键盘可访问性之focus显示的下拉或浮层的索引和回车支持-----------------*/
//当我们使用css:focus或者js的focus事件让下拉或浮动元素显示的时候,下拉或者浮层元素里的链接、按钮之类的不方便使用键盘进行访
// 问,而脚本就是解决这种需求的,兼容IE9+,原生JS编写无依赖
(function (doc) {
    if (doc.addEventListener) {
        var keycode = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down',
            13: 'enter',
            9: 'tab'
        };
        //键盘高亮类名
        var className = 'outline';
        // 高亮类名的添加与删除
        var classList = {
            add: function (ele) {
                ele.className = ele.className + ' ' + className;
            },
            remove: function (ele) {
                ele.className = ele.className.split(/\s+/).filter(function (cl) {
                    if (cl !== className) {
                        return cl
                    }
                }).join(' ');
            },
            removeAll: function () {
                [].slice().call(doc.querySelectorAll("." + className)).forEach(function (ele) {//把类数组转化成数组
                    classList.remove(ele);
                });
            },
            has: function (ele) {
                return ele.className.split(/\s+/).filter(function (cl) {
                    if (c1 === className) {
                        return cl;
                    }
                }).length > 0;
            }
        };
        //键盘事件
        doc.addEventListener('keydown', function (event) {
            //是否是上下左右键
            var direction = keycode[event.keyCode];
            if (!direction) {
                return;
            }
            if (direction === 'tab') {
                classList.removeAll();
                return;
            }
            //当前激活元素
            var trigger = doc.activeElement;
            if (!trigger) {
                return;
            }
            //对应的面板
            var attrTarget = trigger.getAttribute('target') || trigger.getAttribute('data-target');
            var target = attrTarget && doc.getElementById(attrTarget);//同时成立的话获取后面的元素
            if (!trigger) {
                return;
            }
            //需要是显示状态
            if (target.clientWidth === 0 || target.clientHeight === 0) {
                return;
            }
            //如果是回车事件
            if (direction === 'enter') {
                var eleFocus = target.querySelector('.' + className);
                if (eleFocus) {
                    // 阻止默认的回车
                    event.preventDefault();
                    eleFocus.click();
                    return;
                }
            }
            //如果都符合，同时有目标子元素
            var arrEleFocusable = target.storeFocusableEle, index = target.storeIndexFocus;
            if (!arrEleFocusable) {
                arrEleFocusable = [].slice.call(target.querySelectorAll('a[href], button:not(:disabled), input:not(:disabled)'));
                target.storeFocusableEle = storeFocusableEle;
                target.storeIndexFocus = -1;
                index = -1;
            }
            if (arrEleFocusable.length === 0) {
                return;
            }
            // 先全部清除focus态
            arrEleFocusable.forEach(function (ele) {
                classList.remove(ele);
            });
            //阻止默认的上下滚屏
            event.preventDefault();
            //索引加加减减
            if (direction === 'left' || direction === 'up') {
                index--;
                if (index < 0) {
                    index = -1;
                }
            } else if (direction === 'right' || direction === 'down') {
                index++;
                if (index > arrEleFocusable.length - 1) {
                    index = arrEleFocusable.length;
                }
            }
            //如果对应的索引元素
            if (arrEleFocusable[index]) {
                //高亮对应的控件元素
                classList.add(arrEleFocusable[index]);
            }
            //记录索引
            target.storeIndexFocus = index;
        });
        doc.addEventListener('mousedown', function (event) {
            var target = event.target;
            if (target && !classList.has(target)) {
                classList.removeAll();
            }
        })
    }
})(document);
//retina 视网膜屏幕CSS@media规则查询语句
/*
 * @media
 * (-webkit-min-device-pixel-ratio:1.5),
 * (min-resolution:2dppx){
 *   //Retina 下
 *   .retina { }
 * }
 */

//移动端基于vw和rem的根字号大小设置CSS代码
/*
* html {
*  font-size:16px
* }
*   @media screen and (min-width:375px){
*     html {
*        iPhone6的375px尺寸作为16px基准，414px正好18px大小, 600px 20px
*       font-size:calc(100%+2*(100vm-375px)/39);
*       font-size:calc(16px+2*(100vm-375px)/39);
*     }
*   }
*   @media screen and (min-width: 1000px) {
    html {
        //1000px往后是每100像素0.5px增加
        font-size: calc(137.5% + 6 * (100vw - 1000px) / 1000);
        font-size: calc(22px + 6 * (100vw - 1000px) / 1000);
        }
    }
* */
/*---------------------------------------localforage存储blob格式的本地上传图片demo------------------------------------*/
/*
*   <label class="ui-button ui-button-warning" for="fileImg">上传图片</label>
*    <input type="file" id="fileImg" accept="image/gif, image/jpeg, image/png" hidden>
*    <p id="result"></p>
* */
var eleResult = document.getElementById('result');
// 图片资源
var eleImg = document.createElement('img');
// 获取本地存储数据
localforage.getItem('zxxImg', function (err, value) {
    if (err == null && value) {
        eleImg.src = value;
        eleResult.appendChild(eleImg);
    }
});
// 选择本地文件
var reader = new FileReader();
// 文件base64化，以便获知图片原始尺寸
reader.onload = function (event) {
    if (!eleImg.src) {
        eleResult.appendChild(eleImg);
    }
    var blob = URL.createObjectURL(new Blob([event.target.result]));
    eleImg.src = blob;
    // blob本地存储
    localforage.setItem('zxxImg', blob);
};
// 选择的文件对象
var file = null;
document.getElementById('fileImg').addEventListener('change', function (event) {
    file = event.target.files[0];
    // 选择的文件是图片
    if (file.type.indexOf("image") == 0) {
        reader.readAsArrayBuffer(file);
    }
});
/*----------------------------------------indexedDB存储编辑和删除数据实例页面-----------------------------------------*/
/*
<form id="form">
    <p>项目名称：<input required name="name" autocomplete="off" required></p>
    <p>开始时间：<input type="date" value="2017-07-16" name="begin" required></p>
    <p>预计结束：<input type="date" value="2057-07-16" name="end" required></p>
    <p>参与人员：<input name="person" placeholder="多人空格分隔" required autocomplete="off"></p>
    <p>补充说明：<textarea rows="5" placeholder="非必填" name="remark"></textarea></p>
    <p><input type="submit" value="确定创建"></p>
</form>

<div id="result" class="result">
    <table>
        <thead>
            <tr>
                <th>项目名称</th>
                <th>开始时间</th>
                <th>结束时间</th>
                <th>参与人员</th>
                <th>补充说明</th>
                <th width="30">操作</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
    <div id="status" class="status">加载中...</div>
</div>

<!-- 列表数据模板 -->
<script id="tplList" type="text/template">
<tr>
    <td data-key="name" data-id="$id$" contenteditable="plaintext-only">$name$</td>
    <td data-key="begin" data-id="$id$" contenteditable="plaintext-only">$begin$</td>
    <td data-key="end" data-id="$id$" contenteditable="plaintext-only">$end$</td>
    <td data-key="person" data-id="$id$" contenteditable="plaintext-only">$person$</td>
    <td data-key="remark" data-id="$id$" contenteditable="plaintext-only">$remark$</td>
    <td><a href="javascript:" role="button" class="jsListDel" data-id="$id$">删除</a></td>
</tr>
</script>
*/
(function () {
    //元素
    var eleForm = document.querySelector("#form"),
        eleTbody = document.querySelector("#result tbody"),
        eleStatus = document.getElementById("status"),
        strTplList = document.getElementById("tplList").innerHTML;//模板字符内容

    var logError = function (error) {
        eleStatus.style.display = 'block';
        eleStatus.innerHTML = '<span class="error">' + error + '</span>';
    }, logInfo = function (info) {
        eleStatus.style.display = 'block';
        eleStatus.innerHTML = '<span class="info">' + info + '</span>';
    };
})();
/*----------------------------------------indexedDB存储编辑和删除数据实例页面-----------------------------------------*/
/*
*
*  <form id="form">
        <p>项目名称：<input required name="name" autocomplete="off" required></p>
        <p>开始时间：<input type="date" value="2017-07-16" name="begin" required></p>
        <p>预计结束：<input type="date" value="2057-07-16" name="end" required></p>
        <p>参与人员：<input name="person" placeholder="多人空格分隔" required autocomplete="off"></p>
        <p>补充说明：<textarea rows="5" placeholder="非必填" name="remark"></textarea></p>
        <p><input type="submit" value="确定创建"></p>
    </form>
*   <div id="result" class="result">
        <table>
            <thead>
                <tr>
                    <th>项目名称</th>
                    <th>开始时间</th>
                    <th>结束时间</th>
                    <th>参与人员</th>
                    <th>补充说明</th>
                    <th width="30">操作</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
        <div id="status" class="status">加载中...</div>
    </div>
    //列表数据模板
    <script id="tplList" type="text/template">
       <tr>
            <td data-key="name" data-id="$id$" contenteditable="plaintext-only">$name$</td>
            <td data-key="begin" data-id="$id$" contenteditable="plaintext-only">$begin$</td>
            <td data-key="end" data-id="$id$" contenteditable="plaintext-only">$end$</td>
            <td data-key="person" data-id="$id$" contenteditable="plaintext-only">$person$</td>
            <td data-key="remark" data-id="$id$" contenteditable="plaintext-only">$remark$</td>
            <td><a href="javascript:" role="button" class="jsListDel" data-id="$id$">删除</a></td>
       </tr>
    </script>
* */
(function () {
    //元素
    var eleForm = document.querySelector('#form'),
        eleTbody = document.querySelector('#result tbody'),
        eleStatus = document.getElementById('status');
    //模板字符内容
    var strTplList = document.getElementById("tplList").innerHTML;

    var logError = function (error) {
        eleStatus.style.display = 'block';
        eleStatus.innerHTML = '<span class="error">' + error + '</span>';
    }, logInfo = function (info) {
        eleStatus.style.display = 'block';
        eleStatus.innerHTML = '<span class="info">' + info + '</span>';
    };

    //简易模板方法
    String.prototype.temp = function (obj) {
        return this.replace(/\$\w+\$/gi, function (matchs) {
            return obj[matchs.replace(/\$/g, "")] || '';
        });
    };


    var dbName = 'project',//本演示使用的数据库名称
        version = 1,        //版本
        db;               //数据库数据结果

    var DBOpenRequest = window.indexedDB.open(dbName, version);//打开数据库

    DBOpenRequest.onerror = function (event) {
        logError('数据库打开失败');
    };

    DBOpenRequest.onsuccess = function (event) {
        // 存储数据结果
        db = DBOpenRequest.result;

        // 显示数据
        method.show();
    };
    // 下面事情执行于：数据库首次创建版本，或者window.indexedDB.open传递的新版本（版本数值要比现在的高）
    DBOpenRequest.onupgradeneeded = function (event) {
        var db = event.target.result;
        db.onerror = function (event) {
            logError('数据库打开失败');
        };
        //创建一个数据可存储对象
        var objectStore = db.createObjectStore(dbName, {
            keyPath: 'id',
            autoIncrement: true
        });
        // 定义存储对象的数据项
        objectStore.createIndex('id', 'id', {
            unique: true
        });
        objectStore.createIndex('name', 'name');
        objectStore.createIndex('begin', 'begin');
        objectStore.createIndex('end', 'end');
        objectStore.createIndex('person', 'person');
        objectStore.createIndex('remark', 'remark');
    }
})();
/*-----------------------------------------canvas在前端压缩图片实例页面-----------------------------------------------*/
/*
* <input id="file" type="file">
* */

var eleFile = document.querySelector('#file'),
    reader = new FileReader(),
    img = new Image(),
    file = null,
    canvas = document.createElement('canvas'),
    context = canvas.getContext('2d');

//base64 地址图片加载完毕后
img.onload = function () {
    //图片原生尺寸
    var originWidth = this.width,
        originHeight = this.height,
        maxWidth = 400, maxHeight = 400,
        targetWidth = originWidth, targetHeight = originHeight;
    //图片尺寸超过400*400的限制
    if (originWidth > maxWidth || originHeight > maxHeight) {
        if (originWidth / originHeight > maxWidth / maxHeight) {
            //更宽,按照宽度限定尺寸
            targetWidth = maxWidth;
            targetHeight = Math.round(maxWidth * (originHeight / originWidth));
        } else {
            targetHeight = maxHeight;
            targetWidth = Math.round(maxHeight * (originWidth / originHeight));
        }
    }
    // canvas对图片进行缩放
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    //清楚画布
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    //清除画布
    context.clearRect(0, 0, targetWidth, targetHeight);
    //图片压缩
    context.drawImage(img, 0, 0, targetWidth, targetHeight);
    //canvas 转blob并上传
    canvas.toBlob(function (blob) {
        //图片ajax上传
        var xhr = new XMLHttpRequest();
        //文件上传成功
        xhr.onreadystatechange = function () {
            if (xhr.status === 200) {
                //xhr.responseText就是返回的数据
            }
        };
        //开始上传
        xhr.open("POST", 'upload.php', true);
        xhr.send(blob);
    }, file.type || 'image/png');
};

//文件base64化,以便获知图片原始尺寸
reader.onload = function (e) {
    img.src = e.target.result;
};

eleFile.addEventListener('change', function (event) {
    file = event.target.files[0];
    //选择的文件是图片
    if (file.type.indexOf('image') === 0) {
        reader.readAsDataURL(file);
    }
});













