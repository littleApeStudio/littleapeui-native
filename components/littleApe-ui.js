/*
 *
 * message 消息提示弹窗
 * 
*/
let $loading = {
    show: function (text) {
        let title = "加载中..."
        if (text) {
            title = text
        }
        let loadingMask = document.createElement("div")
        loadingMask.classList.add('ape-loading-mask')
        loadingMask.id = "littleApe-loading"
        let loading = document.createElement("div")
        loading.classList.add('ape-loading')
        let loadingIcon = document.createElement("div")
        loadingIcon.classList.add('ape-loading-icon')
        let loadingIconI = document.createElement("div")
        loadingIconI.classList.add('ape-loading-icon-i')
        let loadingIconI1 = document.createElement("div")
        loadingIconI1.classList.add('ape-loading-icon-i')
        let loadingIconI2 = document.createElement("div")
        loadingIconI2.classList.add('ape-loading-icon-i')
        let loadingTitle = document.createElement("div")
        loadingTitle.classList.add('ape-loading-title')
        loadingTitle.innerHTML = title
        // 将组建插入到 body 中
        document.body.append(loadingMask)
        loadingMask.append(loading)
        loading.append(loadingIcon)
        loadingIcon.append(loadingIconI)
        loadingIcon.append(loadingIconI1)
        loadingIcon.append(loadingIconI2)
        loading.append(loadingTitle)
        // 添加动画
        setTimeout(() => {
            loadingMask.classList.add('ape-loading-enter')
        }, 100);
    },
    hide: function () {
        let loading = document.getElementById('littleApe-loading')
        if (loading) {
            loading.classList.remove('ape-loading-enter')
            setTimeout(() => {
                document.body.removeChild(loading)
            }, 350);
        }
        return;
    }
}

/*
 *
 * message 消息提示弹窗
 * 
*/

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
        messageBox.classList.add("messageBox")
        messageBox.id = "messageBox"
        document.body.appendChild(messageBox)
    }
    // 创建 message 消息
    let message = document.createElement("div")
    message.classList.add("message")
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




/*
 *
 * msgbox 弹窗
 * 
*/
function $msgbox() {
    let title = "提示"
    let type = "success"
    let content = "这是一条提示消息"
    let confirmText = "确定"
    let cansoleText = "取消"
    let showCansole = true
    let showClose = true
    if (arguments.length == 1) {
        if (typeof arguments[0] == 'object') {
            title = arguments[0].title ? arguments[0].title : title
            type = arguments[0].type ? arguments[0].type : type
            content = arguments[0].content ? arguments[0].content : content
            confirmText = arguments[0].confirmText ? arguments[0].confirmText : confirmText
            cansoleText = arguments[0].cansoleText ? arguments[0].cansoleText : cansoleText
            showCansole = arguments[0].showCansole == false ? arguments[0].showCansole : showCansole
            showClose = arguments[0].showClose == false ? arguments[0].showClose : showClose
        } else {
            content = arguments[0]
        }
    } else {
        content = arguments[0] ? arguments[0] : content
        type = arguments[1] ? arguments[1] : type
    }
    return new Promise((resolve, reject) => {
        // 创建 mask 遮罩层
        let mask = document.createElement("div")
        mask.classList.add("msgbox-mask")
        // 创建msgbox
        let msgbox = document.createElement("div")
        msgbox.classList.add("msgbox")
        // 创建msgbox title容器
        let msgboxTitle = document.createElement("div")
        msgboxTitle.classList.add("msgbox-title")
        // 创建msgbox 标题 icon
        let msgboxTitleIcon = document.createElement("div")
        msgboxTitleIcon.classList.add("msgbox-" + type + "-title-icon")
        // 创建msgbox 标题 title
        let msgboxTitleText = document.createElement("div")
        msgboxTitleText.classList.add("msgbox-title-title")
        msgboxTitleText.innerHTML = title
        // 创建msgbox 标题 close
        let msgboxTitleClose = null
        if (showClose) {
            msgboxTitleClose = document.createElement("div")
            msgboxTitleClose.classList.add("msgbox-title-close")
        }
        // 创建msgbox 内容
        let msgboxContent = document.createElement("div")
        msgboxContent.classList.add("msgbox-content")
        msgboxContent.innerHTML = content
        // 创建msgbox 底部按钮容器
        let msgboxContral = document.createElement("div")
        msgboxContral.classList.add("msgbox-contral")
        // 创建msgbox 底部取消按钮
        let msgboxContralCansole = null
        if (showCansole) {
            msgboxContralCansole = document.createElement("button")
            msgboxContralCansole.classList.add("ape-button")
            msgboxContralCansole.classList.add("ape-button-plain")
            msgboxContralCansole.innerHTML = cansoleText
        }
        // 创建msgbox 底部确定按钮
        let msgboxContralConfirm = document.createElement("button")
        msgboxContralConfirm.classList.add("ape-button")
        msgboxContralConfirm.innerHTML = confirmText
        // 整合元素，生成 msgbox
        document.body.appendChild(mask)
        mask.appendChild(msgbox)
        msgbox.appendChild(msgboxTitle)
        msgbox.appendChild(msgboxContent)
        msgbox.appendChild(msgboxContral)
        msgboxTitle.appendChild(msgboxTitleIcon)
        msgboxTitle.appendChild(msgboxTitleText)
        if (showClose) {
            msgboxTitle.appendChild(msgboxTitleClose)
        }
        if (showCansole) {
            msgboxContral.appendChild(msgboxContralCansole)
        }
        msgboxContral.appendChild(msgboxContralConfirm)
        // 添加动画
        setTimeout(() => {
            mask.classList.add("msgbox-mask-enter")
            msgbox.classList.add("msgbox-enter")
        }, 100);
        // 按钮点击事件
        if (showClose) {
            msgboxTitleClose.onclick = function () {
                mask.classList.remove("msgbox-mask-enter")
                msgbox.classList.remove("msgbox-enter")
                msgbox.classList.add("msgbox-leave")
                setTimeout(() => {
                    document.body.removeChild(mask)
                }, 350);
                reject()
            }
        }
        if (showCansole) {
            msgboxContralCansole.onclick = function () {
                mask.classList.remove("msgbox-mask-enter")
                msgbox.classList.remove("msgbox-enter")
                msgbox.classList.add("msgbox-leave")
                setTimeout(() => {
                    document.body.removeChild(mask)
                }, 350);
                reject()
            }
        }
        msgboxContralConfirm.onclick = function () {
            mask.classList.remove("msgbox-mask-enter")
            msgbox.classList.remove("msgbox-enter")
            msgbox.classList.add("msgbox-leave")
            setTimeout(() => {
                document.body.removeChild(mask)
            }, 350);
            resolve()
        }
    })
}