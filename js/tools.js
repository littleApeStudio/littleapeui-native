// 生成验证码
function $createCode() {
    let canvas = document.createElement("canvas")
    canvas.width = 100
    canvas.height = 40
    var ctx = canvas.getContext("2d");
    // 生成背景色
    ctx.fillStyle = color(199, 50)
    ctx.fillRect(0, 0, 100, 40);
    // 生成文字
    ctx.font = "18px 微软雅黑"
    let num1 = Math.round(Math.random() * 98)
    let num2 = Math.round(Math.random() * 98)
    let utils = ['*', '+', '-']
    let util = utils[Math.round(Math.random() * 2)]
    ctx.fillStyle = color(254, 0);
    ctx.fillText(num1, 5, 27)
    ctx.fillStyle = color(255);
    ctx.fillText(util, 25, 27)
    ctx.fillStyle = color(254, 0);
    ctx.fillText(num2, 35, 27)
    ctx.fillStyle = color(254, 0);
    ctx.fillText("=", 60, 27)
    ctx.fillStyle = color(254, 0);
    ctx.fillText("?", 80, 27)
    ctx.strokeStyle = color(254, 0);
    ctx.lineWidth = Math.round(Math.random() * 2);
    ctx.moveTo(5, Math.round(Math.random() * 28) + 3);
    ctx.lineTo(95, Math.round(Math.random() * 28) + 3);
    ctx.stroke();
    // 生成随机颜色
    function color(e, i) {
        return `rgb(${Math.round(Math.random() * e + i)},${Math.round(Math.random() * e + i)},${Math.round(Math.random() * e + i)})`
    }
    // 验证码信息
    let code_info = {
        num1: num1,
        num2: num2,
        util: util
    }
    // 结果计算
    function result(e) {
        if (e.util == '*') {
            return e.num1 * e.num2
        } else if (e.util == '+') {
            return e.num1 + e.num2
        } else if (e.util == '-') {
            return e.num1 - e.num2
        } else {
            return null
        }
    }
    // 返回验证码图片及验证结果
    return {
        codeImg: canvas.toDataURL('image/png'),
        result: result(code_info)
    }
}

// 获取元素
function $getEle(EleId) {
    return document.getElementById(EleId)
}

// 获取元素的 value
function $getValue(EleId) {
    return document.getElementById(EleId).value
}

// 获取地址栏参数
function $params(url) {
    let pattern = /(\w+)=(\w+)/ig;
    let parames = {};
    url.replace(pattern, ($, $1, $2) => {
        parames[$1] = $2;
    });
    return parames;
}