// message 弹窗集合
let messages = []
// 生成 message / 删除 messagevar 
function $message() {
    let duration = 3000
    let type = "success"
    let title = ""
    if (arguments.length == 1) {
        if (typeof arguments[0] == 'object') {
            duration = arguments[0].duration ? arguments[0].duration : duration
            type = arguments[0].type ? arguments[0].type : type
            title = arguments[0].title ? arguments[0].title : title
        } else {
            title = arguments[0]
        }
    } else {
        title = arguments[0] ? arguments[0] : title
        type = arguments[1] ? arguments[1] : type
        duration = arguments[2] ? arguments[2] : duration
    }
    // 创建/获取 message 容器
    let messageBox = document.getElementById("messageBox")
    if (!messageBox) {
        messageBox = document.createElement("div")
        messageBox.classList.add("pop-message-box")
        messageBox.id = "messageBox"
        document.body.appendChild(messageBox)
    }
    // 创建 message 消息
    let message = document.createElement("div")
    message.classList.add("pop-message")
    message.classList.add("message-" + type)
    message.innerHTML = title
    messageBox.appendChild(message)
    messages.push(message)
    // 定时消除 message 消息
    setTimeout(() => {
        message.classList.add("message-enter")
        setTimeout(() => {
            message.classList.remove("message-enter")
            setTimeout(() => {
                messageBox.removeChild(message)
                messages.splice(0, 1)
                // 当 message 容器无内容时，清楚message容器及样式文件
                if (messages.length == 0) {
                    document.body.removeChild(messageBox)
                }
            }, 600);
        }, duration);
    }, 100);
}