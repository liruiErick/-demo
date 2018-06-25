/*找出元素 item 在给定数组 arr 中的位置 ,如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1*/
function indexOf(arr, item) {
    if (arr.__proto__.indexOf) {
        return arr.indexOf(item);
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
    }
    return -1;
}

/*计算给定数组 arr 中所有元素的总和*/
var arr = [1, 2, 3, 4];
//常规循环
var sum1 = function (arr) {
    var res = 0;
    arr.forEach(function (val, i) {
        res += val;
    });
    return res;
};
//内置方法
var sum2 = function (arr) {
    arr.reduce(function (prev, curr, id, arr) {
        return prev + curr
    });
};
var sum3 = function (arr) {
    return eval(arr.join('+'));
}
/*移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组*/
var arr = [1, 2, 3, 4, 2];
// splice
var remove = function (arr, item) {
    var res = arr.slice(0);
    for (var i = 0; i < res.length; i++) {
        if (res[i] === item) {
            res.splice(i, 1);
            --i;
        }
    }
    return res;
};
//push
var remove1 = function (arr, item) {
    var res = [];
    arr.forEach(function (val, i) {
        if (val !== item) {
            res.push(val)
        }
    });
    return res;
};
//filter
var remove2 = function (arr, item) {
    if (Array.prototype.filter) {
        return arr.filter(function (val) {
            return val !== item;
        })
    }
};
/*在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组*/
var arr = [1, 2, 3, 4, 2];
//slice
var append = function (arr, item) {
    var res = arr.slice(0);
    res.push(item);
    return res;
};
//for
var append1 = function (arr, item) {
    var res = [];
    arr.forEach(function (val, i, arr) {
        res.push(val);
    });
    res.push(item);
    return res;
};
//concat
var append2 = function (arr, item) {
    if (Array.prototype.concat) {
        return arr.concat(item);
    }
};
/*删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组*/
//shift
var curtail = function (res) {
    var res = arr.slice(0);
    res.shift();
    return res;
};
// slice
var curtail1 = function (arr) {
    return arr.slice(1);
};
//fliter
var curtail2 = function (arr) {
    return arr.filter(function (val, i) {
        if (i !== 0)
            return val;
    })
};
/*统计数组 arr 中值等于 item 的元素出现的次数*/
var arr = [1, 2, 3, 4, 2];
// 直接计数
var count = function (arr, item) {
    var cnt = 0;
    arr.forEach(function (val, i) {
        val === item ? cnt++ : 0;
    });
    return cnt;
};

//filter
var count1 = function (arr, item) {
    return arr.filter(function (val) {
        return val === item;
    }).length;
};

// reduce
var count2 = function (arr, item) {
    var cnt;
    cnt = arr.reduce(function (prev, curr) {
        return curr === item ? ++prev : prev;
    }, 0);

    return cnt;
};
/*找出数组 arr 中重复出现过的元素*/
var arr = [1, 2, 3, 4, 2, 3];  // =>[2,3]

// 利用中间对象
var duplicates = function (arr) {
    var res = [];
    var obj = {};

    arr.forEach(function (val, i) {
        if (obj[val] === 1) {
            res.push(val);
            obj[val]++;

        }
        else if (obj[val] > 1) {
            obj[val]++;
        }
        else {
            obj[val] = 1;
        }
    });
    return res;
};
// indexOf
var duplicates1 = function (arr) {
    var res = [];
    arr.forEach(function (val) {
        if (arr.indexOf(val) !== arr.lastIndexOf(val) && res.indexOf(val) === -1) {
            res.push(val);
        }
    });
    return res;
};
// filter
var duplicates2 = function (arr) {
    return arr.sort().filter(function (val, i) {
        return arr[i] === arr[i + 1] && arr[i] !== arr[i - 1];
    })
};
/*为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组*/
var arr = [1, 2, 3];    // => [1,4,9]

var square = function (arr) {
    var res = [];

    arr.forEach(function (x) {
        res.push(x * x);
    });
    return res;
};

// map
var square1 = function (arr) {
    return arr.map(function (x) {
        return x * x;
    })
};
/*在数组 arr 中，查找值与 item 相等的元素出现的所有位置*/
var arr = [1, 2, 3, 2, 4];    // => [1,3]
//indexof
var find = function (arr, item) {
    var pos = 0;
    var res = [];

    while (pos !== -1) {
        pos = arr.indexOf(item, pos);
        if (pos === -1) {
            break;
        }
        else {
            res.push(pos);
            pos++;
        }
    }
    return res;
};
var find = function (arr, item) {
    var pos = 0;
    var res = [];

    while (pos !== -1) {
        pos = arr.indexOf(item, pos);
        if (pos === -1) {
            break;
        }
        else {
            res.push(pos);
            pos++;
        }
    }

    return res;
};
/*使用 apply 调用函数*/

/*
* 实现函数 callIt，调用之后满足如下条件
*1、返回的结果为调用 fn 之后的结果
*2、fn 的调用参数为 callIt 的第一个参数之后的全部参数
* */
function callIt(fn) {
    var res = Array.prototype.slice.call(arguments, 1);
    return fn.apply(this, res);
}

/*使用闭包*/
var makeClosures = function (arr, fn) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        (function (val) {
            res.push(function () {
                return fn(val);
            })
        })(arr[i]);
    }
    return res;
};
/*二进制转换*/

//解法一：对num进行模2计算
function valueAtBit(num, bit) {
    var k = 1;
    var mod;

    while (num) {
        mod = num % 2;
        if (k == bit) {
            return mod;
        }
        k++;
        num = (num - mod) / 2;
    }
}

// toString()
function valueAtBit(num, bit) {
    var s = num.toString(2);
    return s[s.length - bit];
}

// 利用&运算
function valueAtBit(num, bit) {
    return (num >> (bit - 1)) & 1;
}

// method 1
function convertToBinary(num) {
    var s = num.toString(2);
    for (var i = 0; i < 8 - s.length; i++) {
        s = '0' + s;
    }
    return s;
}

// method 2
function convertToBinary(num) {
    var s = num.toString(2);

    if (s.length < 8) {
        return ('00000000' + s).substr(-8);
    }

    return s;
}

/*window的resize事件，实际需求大多为停止改变大小n毫秒后执行后续处理；而其他事件大多的需求是以一定的频率执行后续处理。针对这两种需求就出现了debounce和throttle两种解决办法*/
// 1、debounce
/**
 * 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 idle，action 才会执行
 * @param idle   {number}    空闲时间，单位毫秒
 * @param action {function}  请求关联函数，实际应用需要调用的函数
 * @return {function}    返回客户调用函数
 */
var debounce = function (idle, action) {
    var last;
    return function () {
        var ctx = this, args = arguments;
        clearTimeout(last);
        last = setTimeout(function () {
            action.apply(ctx, args);
        }, idle)
    }
};
// 2、throttle
/*
如果将水龙头拧紧直到水是以水滴的形式流出，那你会发现每隔一段时间，就会有一滴水流出。
也就是会说预先设定一个执行周期，当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期。*/
/**
 * 频率控制 返回函数连续调用时，action 执行频率限定为 次 / delay
 * @param delay  {number}    延迟时间，单位毫秒
 * @param action {function}  请求关联函数，实际应用需要调用的函数
 * @return {function}    返回客户调用函数
 */
var throttle = function (delay, action) {
    var last = 0;
    return function () {
        var curr = +new Date();
        if (curr - last > delay) {
            action.apply(this, arguments);
            last = curr;
        }
    }
};
// throttle和debounce均是通过减少实际逻辑处理过程的执行来提高事件处理函数运行性能的手段，并没有实质上减少事件的触发次数。两者在概念理解上确实比较容易令人混淆，结合各js库的具体实现进行理解效果将会更好。

//1、数组去重
function unique(a) {
    var res = [];
    for (var i = 0, len = a.length; i < len; i++) {
        var item = a[i];
        (res.indexOf(item) === -1) && res.push(item);
    }
    return res;
}

function unique2(a) {
    var res = a.filter(function (item, index, array) {
        return array.indexOf(item) === index;
    });
    return res;
}

function unique3(a) {//set es6中的方法
    return Array.from(new Set(a));
}

//正则表达式的作用
// 正则表达式主要是针对字符串进行操作，可以简化对字符串的复杂操作，其主要功能有匹配、切割、替换、获取
// 正则表达式可以被用于RegExp的exec和test方法以及 String的match、replace、search和split方法

// 1、test 方法
// 判断是不是QQ号 首位不能是0  ^[1-9] 必须是 [5, 11] 位的数字 \d{4, 9}
var str = '80583600', regexp = /^[1-9][0-9]{4,10}$/gim;
regexp.test(str) === true
// 2、exec() 方法检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
/*支持正则表达式的 String 对象的方法*/

// 1、search 检索与正则表达式相匹配的值
var str = "Visit W3School!";
console.log(str.search(/W3School/)); //6
//2、match 找到一个或多个正则表达式的匹配
var str = "1 plus 2 equal 3";
console.log(str.match(/\d+/g)); // 1,2,3
//3、replace 替换与正则表达式匹配的子串
var str = "Visit Microsoft!";
console.log(str.replace(/Microsoft/, "W3School"));//Visit W3School!
// 找重复项最多的字符个数
var str = 'g21ss4aeba_ersb43sgnnsssstht6sss60snnsj8resw0_ss';
// split : 将字符串转化为数组
// sort : 对数组排序，ASCII
// join : 将数组转化为字符串
var str_new = str.split('').sort().join('');
// 匹配字符，且重复这个字符，重复次数至少一次。
var regexp = /(\w)\1+/g, index = 0, value = '';
str_new.replace(regexp, function ($0, $1) {
    // document.write($0);
    // document.write($1);
    if (index < $0.length) {
        index = $0.length;
        value = $1;
    }
});
console.log('重复项最多的字符是：' + value + '，个数是：' + index);

// 4、split 把字符串分割为字符串数组
var str = "How are you doing today?";
document.write(str.split(/\s+/));

//http://www.css88.com/archives/7991 正则大全

// 5、一个数组插入到另一个数组
var a = [1, 2, 3], b = [4, 5, 6];
Array.prototype.push.apply(a, b);
//6、数字排序
str.sort(function (a, b) {
    b - a
});

//复制到粘贴板
function clickBtn() {
    var input = document.querySelector('#copytest');
    input.focus();
    input.selecte();
    //执行复制操作
    document.execCommand('Copy');
}

//7、JS获取textarea中剩余字数
function changeLength(obj, num) {
    obj.on('keyup', function () {
        var txtval = obj.val().length;
        //console.log(txtval);
        var str = parseInt(600 - txtval);
        //console.log(str);
        if (str > 0) {
            num.html('剩余可输入' + str + '字');
        } else {
            num.html('剩余可输入0字');
            obj.val(obj.val().substring(0, 600));
        }
        //console.log($('#num_txt').html(str));
    });
}

//8、清除浮动
/*.clearfix
    display :inline-block
    &:after
    display :block
    content:"."
    height:0
    line-height: 0
    clear :both
    visibility :hidden*/
//9、星星评分计算 原理
/*
* 1、需要三种类型的星星
* */
const LENGTH = 5;//星星个数
const CLS_ON = 'on';//全部选中星星的classNmae
const CLS_HALF = 'half';//半个选中的classNmae
const CLS_OFF = 'off';//未选中的classNmae

var result = [],
    score = Math.floor(this.score * 2) / 2,
    //计算评分，如4.7会计算成4.5分，4.3会计算成4分
    hasDecimal = score % 1 !== 0, //计算是否存在半颗星
    integer = Math.floor(score);
for (var i = 0; i < integer; i++) {
    result.push(CLS_ON);
}
if (hasDecimal) {
    result.push(CLS_HALF);
}
while (result.length < LENGTH) {
    result.push(CLS_OFF)
}

//封装jsonp
/*import originJSONP from 'jsonp'

// 封装的 jsonp 函数
export default function jsonp(url, data, options) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

    return new Promise((resolve, reject) => {
        originJSONP(url, options, (err, data) => {
        if(!err) {
            resolve(data)
        } else {
            reject(err)
        }
    })
})
}

// url 拼接函数
function param(data) {
    let url = ''
    for(let k in data) {
        let value = data[k] !== undefined ? data[k] : ''
        url += `&${k}=${encodeURIComponent(value)}`
    }
    return url ? url.substring(1) : ''
}*/

//9、获取或设置data- 属性
function getData(el, name, val) {
    const prefix = 'data-';
    name = prefix + name;

    if(val){
        return el.setAttribute(name,val);
    }else{
        return el.getAttribute(name);
    }
}

//10、阻止默认行为
document.getElementById('btn').addEventListener('click', function (event) {
    event = event || window.event;

    if (event.preventDefault){
        // w3c方法 阻止默认行为
        event.preventDefault();
    } else{
        // ie 阻止默认行为
        event.returnValue = false;
    }
}, false);
//11、阻止冒泡
document.getElementById('btn').addEventListener('click', function (event) {
    event = event || window.event;

    if (event.stopPropagation){
        // w3c方法 阻止冒泡
        event.stopPropagation();
    } else{
        // ie 阻止冒泡
        event.cancelBubble = true;
    }
}, false);
//12、滚轮事件
$('#content').on("mousewheel DOMMouseScroll", function (event) {
    // chrome & ie || // firefox
    var delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) || (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1));

    if (delta > 0) {
        // 向上滚动
        console.log('mousewheel top');
    } else if (delta < 0) {
        // 向下滚动
        console.log('mousewheel bottom');
    }
});